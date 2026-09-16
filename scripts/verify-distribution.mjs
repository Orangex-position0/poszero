import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const parentRoot = path.resolve(root, "..");
const mirrorRoot = path.join(parentRoot, "skills");

const skills = [
  "ask-poszero",
  "poszero-init",
  "poszero-specify",
  "poszero-plan",
  "poszero-tasks",
  "poszero-implement",
  "poszero-validate",
];

const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "TEMPLATE_VERSION",
  "VERSION",
  "llms.txt",
  "package.json",
  "packaging.allowlist",
  "protocol/common-protocol.md",
  "rules/poszero-routing.md",
  "templates/README-template.md",
  "templates/constitution-template.md",
  "templates/spec-template.md",
  "templates/plan-template.md",
  "templates/tasks-template.md",
  "templates/validation-template.md",
];

const failures = [];

async function exists(file) {
  return existsPath(path.join(root, file));
}

async function existsPath(file) {
  try {
    await stat(file);
    return true;
  } catch {
    return false;
  }
}

async function filesUnder(dir) {
  const absolute = path.join(root, dir);
  const out = [];

  async function walk(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.isFile()) {
        out.push(path.relative(root, full).replaceAll(path.sep, "/"));
      }
    }
  }

  await walk(absolute);
  return out.sort();
}

function allowed(file, patterns) {
  return patterns.some((pattern) => {
    if (pattern.endsWith("/**")) {
      return file.startsWith(pattern.slice(0, -3));
    }
    return file === pattern;
  });
}

async function hash(file) {
  const bytes = await readFile(file);
  return createHash("sha256").update(bytes).digest("hex");
}

for (const file of requiredFiles) {
  if (!(await exists(file))) {
    failures.push(`missing required file: ${file}`);
  }
}

for (const skill of skills) {
  const skillPath = path.join(root, "skills", skill, "SKILL.md");
  let body;
  try {
    body = await readFile(skillPath, "utf8");
  } catch {
    failures.push(`missing skill: skills/${skill}/SKILL.md`);
    continue;
  }

  const frontmatter = new RegExp(
    `^---\\s*\\r?\\nname: ${skill}\\r?\\ndescription: .+\\r?\\ndisable-model-invocation: true\\r?\\n---`,
    "m",
  );
  if (!frontmatter.test(body)) {
    failures.push(`bad frontmatter: skills/${skill}/SKILL.md`);
  }

  if (!(await existsPath(mirrorRoot))) {
    continue;
  }

  const sourceDir = path.join(root, "skills", skill);
  const mirrorDir = path.join(mirrorRoot, skill);
  try {
    const sourceFiles = await filesUnder(path.relative(root, sourceDir));
    for (const rel of sourceFiles) {
      const skillRel = rel.slice(`skills/${skill}/`.length);
      const mirrorFile = path.join(mirrorDir, skillRel);
      const sourceFile = path.join(root, rel);
      if ((await hash(sourceFile)) !== (await hash(mirrorFile))) {
        failures.push(`mirror drift: ${rel}`);
      }
    }
  } catch (error) {
    failures.push(`mirror check failed for ${skill}: ${error.message}`);
  }
}

const allowlist = (await readFile(path.join(root, "packaging.allowlist"), "utf8"))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
for (const file of packageJson.files ?? []) {
  if (!allowed(file, allowlist)) {
    failures.push(`package.json files entry is not allowlisted: ${file}`);
  }
}

const distributedFiles = [
  ...(await filesUnder("protocol")),
  ...(await filesUnder("rules")),
  ...(await filesUnder("scripts")),
  ...(await filesUnder("skills")),
  ...(await filesUnder("templates")),
  ...requiredFiles.filter((file) => !file.includes("/")),
];

for (const file of distributedFiles) {
  if (!allowed(file, allowlist)) {
    failures.push(`file is not allowlisted: ${file}`);
  }
}

if (failures.length > 0) {
  console.error("poszero verification failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("poszero verification passed.");

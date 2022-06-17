const chalk = require("chalk");
const { exit } = require("shelljs");

const { exec } = require("./exec");

// run eslint
const esLintOutput = exec("yarn eslint");
const isESLinted = esLintOutput.code === 0;

if (!isESLinted) {
  console.log(
    chalk.bgRed.white.bold(
      "`yarn eslint` failed. Please fix the errors above before committing."
    )
  );
  exit(1);
}

console.log("");

// run Prettier on content/
exec("yarn prettify");

console.log("");

// run markdownlint on content/
const isMarkdownLinted = exec("yarn markdownlint").code === 0;
if (!isMarkdownLinted) {
  console.log(
    chalk.bgRed.white.bold(
      "`yarn markdownlint` failed. Please fix the errors above before committing:"
    )
  );
  exit(1);
}

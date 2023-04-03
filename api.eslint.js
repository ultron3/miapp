const { ESLint } = require("eslint");

(async function main() {
    // 1. Create an instance with the `fix` option.
    const eslint = new ESLint({ fix: true });

    // 2. Lint files. This doesn't modify target files.
    const results = await eslint.lintFiles(["lib/**/*.js"]);

    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);

    // 4. Format the results.
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    // 5. Output it.
    console.log(resultText);
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});


switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}

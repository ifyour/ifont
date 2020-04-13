const generateFontsList = require('./preBuildJson/fontList');

async function main() {
  await generateFontsList('./assets/fonts/');
}

main();

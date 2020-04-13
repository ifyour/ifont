const generateFontsList = require('./preBuildJson/fontList');

//
// pre-build
//
async(() => {
  await generateFontsList('./assets/fonts/');
})()

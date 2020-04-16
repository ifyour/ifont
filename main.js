// const { generateFontsList } = require('./preBuildJson/');
const { generateFontList } = require('./preBuildJson/');

//
// pre-build
//
(async () => {
  await generateFontList();
})();

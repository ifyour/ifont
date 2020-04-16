const { generateFontList } = require('./build');

//
// pre-build
//
(async () => {
  await generateFontList();
})();

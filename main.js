const { generateFontList, generateFonts } = require('./build');

/**
 * pre-build API
 */
(async () => {
  await generateFontList();
  await generateFonts();
})();

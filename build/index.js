const path = require('path');
const fsPromises = require('fs').promises;
const { writeFileSync, readFileSync } = require('fs');

const { writeFile, readdir } = fsPromises;
const resolveFile = file => path.resolve(__dirname, file);

//
// 生成字体 API
//
async function generateFonts() {
  const DIST_DIR = resolveFile('../api/fonts/');
  const fontList = require('./db/fontList.json');
  const API_TMP_FILE = resolveFile('../api/fonts/tmp.js');
  try {
    const buffer = readFileSync(API_TMP_FILE);
    fontList.forEach(font => {
      writeFileSync(
        path.resolve(__dirname, DIST_DIR, `${font.name}.js`),
        buffer.toString('utf8').replace(/#FONT_NAME#/g, font.name),
        'utf-8'
      );
    })
    console.log('[🦀️ iFont] PreBuildAPI: /fonts/[fontName].ttf build success!');
  } catch (error) {
    throw error;
  }
}

//
// 生成字体列表
//
async function generateFontList() {
  const FONTS_DIR = resolveFile('../assets/fonts/');
  const DIST_DIR = resolveFile('./db/fontList.json');
  try {
    let nameList = await readdir(FONTS_DIR);
    nameList = nameList.map((name, index) => ({ id: index + 1, name }));
    await writeFile(DIST_DIR, JSON.stringify(nameList, null, 2), 'utf-8');
    console.log('[🦀️ iFont] PreBuildAPI: /fontList build success!');
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateFonts,
  generateFontList,
};

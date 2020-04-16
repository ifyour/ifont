const path = require('path');
const fsPromises = require('fs').promises;

const { writeFile, readdir } = fsPromises;
const resolveFile = file => path.resolve(__dirname, file);

//
// 生成字体 API
//
async function generateFonts() {
  console.log('[🦀️iFont] PreBuild: fonts API build success!');
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
    console.log('[🦀️iFont] PreBuild: fontList.json build success!');
  } catch (error) {
    throw error;
  }
}

module.exports = {
  generateFonts,
  generateFontList,
};

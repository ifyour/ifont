const fsPromises = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');
const { writeFileSync } = require('fs');

const resolveFile = file => path.join(__dirname, file);

const FONTS_DIR = '../assets/fonts/';
const DIST_DIR = './db/fontList.json';

async function generateFontsList(fontsDir) {
  try {
    let nameList = await fsPromises.readdir(fontsDir);
    const res = nameList.map(name => ({
      id: nanoid(10),
      name,
    }));
    writeFileSync(
      resolveFile(DIST_DIR),
      JSON.stringify(res, null, 2),
      'utf-8'
    )
    console.log('[iFont PreBuild] fontList.json build success!');
  } catch (error) {
    console.log('[iFont] generateFontsList func ->', error);
  }
}

module.exports = generateFontsList;

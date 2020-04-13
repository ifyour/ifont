const fsPromises = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');
const { writeFileSync } = require('fs');

const FONTS_DIR = '../assets/fonts/';

function generateFontsList(fontsDir) {
  return new Promise(async (resolve, reject) => {
    try {
      let nameList = await fsPromises.readdir(path.join(__dirname, FONTS_DIR));
      const res = nameList.map(name => ({
        id: nanoid(10),
        name,
      }));
      resolve(res);
    } catch (error) {
      reject(error);
    }
  })
}

module.exports = async (req, res) => {
  const data = await generateFontsList();
  res.json({
    isSuccess: true,
    msg: '操作成功',
    data,
  })
}

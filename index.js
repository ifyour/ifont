const path = require('path');
const fs = require('fs');
import { Stream } from 'stream';
const resolveFile = file => path.join(__dirname, file);
const { writeFileSync, readFileSync, writevSync } = require('fs');
const SAVE_CONTENT_ENCODE = 'utf-8';
const saveFile = (target, content) => writeFileSync(resolveFile(target), content, SAVE_CONTENT_ENCODE);
var Fontmin = require('fontmin');


// demo https://jsfiddle.net/n3zcb6kr/
// eg: https://github.com/2234839/web-font/blob/master/src/app.controller.ts#L68-L81


function generate_fonts_dynamically() {
  return new Promise((resolve, reject) => {

    var fontmin = new Fontmin()
      .src('fonts/*.ttf')
      .use(Fontmin.glyph({ text: '明' })); // pick font

    fontmin.run(function (err, files) {
      if (err) throw err;
      const buffer = files.filter(f => f.history[f.history.length - 1].endsWith('ttf'))[0]._contents;
      resolve(buffer);
    });
  })
}

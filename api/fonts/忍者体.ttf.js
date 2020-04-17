const { Stream } = require('stream');
const Fontmin = require('fontmin');
const path = require('path');

function generateFontStream(content) {
  return new Promise((resolve, reject) => {
    const fontmin = new Fontmin()
      .src(
        path.join(__dirname, `../../assets/fonts/忍者体.ttf`)
      )
      .use(Fontmin.glyph({ text: content }));
    fontmin.run((err, files) => {
      if (err) reject(err);
      const buffer = files.filter(f =>
        f.history[f.history.length - 1].endsWith('ttf')
      )[0]._contents;
      resolve(buffer);
    });
  });
}

module.exports = async (req, res) => {
  const {
    query: { content },
  } = req;

  const file = await generateFontStream(content);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('content-type', 'font/ttf');
  const bufferStream = new Stream.PassThrough();
  bufferStream.end(file);
  bufferStream.pipe(res);
};

function getFontName(req) {
  const regex = /([\u4e00-\u9fa5]|\w|\d|%|-)+\.ttf/gm;
  const content = req.url || '';
  const [matchContent] = content.match(regex) || [];
  return decodeURI(matchContent);
}

module.exports = {
  getFontName,
};

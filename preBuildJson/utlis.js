function getFontName(req) {
  const regex = /%.+\.ttf/g;
  const content = req.url || '';
  const [matchContent] = content.match(regex) || [];
  return decodeURI(matchContent);
}

module.exports = {
  getFontName
}

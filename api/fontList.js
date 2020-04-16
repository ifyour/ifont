const data = require('../build/db/fontList.json');

module.exports = (req, res) => {
  res.json({
    isSuccess: true,
    msg: '操作成功',
    data,
  });
};

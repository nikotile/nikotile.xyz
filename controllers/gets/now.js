const { load } = require('../../utils/now');

module.exports = async (req, res) => {
  const now = load();
  res.render('pages/now', {
    now
  });
};

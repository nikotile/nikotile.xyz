const { load } = require(__dirname+'/../../utils/now');

module.exports = async (req, res) => {
  const now = load();
  res.render('pages/write', {
    now
  });
};

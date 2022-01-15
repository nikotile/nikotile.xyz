const { meta } = require('../../utils/meta');

module.exports = async (req, res) => {
  res.render('pages/library', {
    layout: 'layouts/main',
  });
};

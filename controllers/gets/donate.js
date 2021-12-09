const { meta } = require('../../utils/meta');

module.exports = async (req, res) => {
  res.render('pages/donate', {
    layout: 'layouts/main'
  });
};

const { meta } = require('../../utils/meta');

module.exports = async (req, res) => {
  res.status(404).render('pages/404', {
    layout: 'layouts/main'
  });
};

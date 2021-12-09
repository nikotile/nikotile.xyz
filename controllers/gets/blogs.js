const { meta } = require('../../utils/meta');
const { loadEntries } = require('../../utils/entries');

module.exports = async (req, res) => {
  res.render('pages/blog', {
    layout: 'layouts/main',
    entries: loadEntries(),
    meta
  });
};

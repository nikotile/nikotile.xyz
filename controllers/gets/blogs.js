const { meta } = require('../../utils/meta');
const { loadEntries } = require('../../utils/entries');

module.exports = async (req, res) => {
  const entries = await loadEntries();
  res.render('pages/blog', {
    layout: 'layouts/main',
    entries
  });
};

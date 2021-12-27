const { meta } = require('../../utils/meta');
const { loadEntries } = require('../../utils/entries');

module.exports = async (req, res) => {
  const entries = await loadEntries();
  res.render('pages/index', {
    layout: 'layouts/main',
    entries
  });
};

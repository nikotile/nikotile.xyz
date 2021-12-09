const { meta, loadSNS } = require('../../utils/meta');
const { loadEntries } = require('../../utils/entries');

module.exports = async (req, res) => {
  res.render('pages/index', {
    layout: 'layouts/main',
    entries: loadEntries(),
    sns: loadSNS()
  });
};

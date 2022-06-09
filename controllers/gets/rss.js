const { loadEntries, loadEntry } = require(__dirname+'/../../utils/entries');

module.exports = async (req, res) => {
  const entries = await loadEntries();
  res.setHeader('content-type', 'text/xml')
  res.render('pages/rss', {
    entries
  });
};


const { loadEntries, loadEntry } = require(__dirname+'/../../utils/entries.js')

module.exports = async (req, res) => {
  const entries = await loadEntries();
  res.render('pages/blog',{
    entries
  });
};

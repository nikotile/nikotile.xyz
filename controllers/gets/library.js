const { loadEntries, loadEntry } = require(__dirname+'/../../utils/entries.js')

module.exports = async (req, res) => {
  res.render('pages/library');
};

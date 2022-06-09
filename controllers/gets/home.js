const { loadEntries } = require(__dirname+'/../../utils/entries.js')

module.exports = async (req, res) => {
  const entries = loadEntries().slice(0, 3);
  res.render('pages/home', {
    entries
  });
};

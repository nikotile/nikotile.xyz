const { loadEntry } = require('../../utils/entries');

module.exports = async (req, res) => {
  const title = req.params.title;
  const entry = loadEntry(title);
  res.render('pages/entry', {
    entry
  });
};

const { meta } = require('../../utils/meta');
const { loadEntry } = require('../../utils/entries');

module.exports = async (req, res) => {
  const title = req.params.title;
  const entry = loadEntry(title);
  res.render('pages/entry', {
    layout: 'layouts/main',
    entry,
    meta
  });
};

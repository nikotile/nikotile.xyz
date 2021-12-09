const { meta } = require('../../utils/meta')
  , { loadEntries } = require('../../utils/entries');

module.exports = async (req, res) => {
  res.setHeader('content-type', 'text/xml')
    .render('pages/rss', {
      layout: 'layouts/xml',
      entries: loadEntries(),
      meta
    });
};

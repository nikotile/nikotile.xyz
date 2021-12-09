const { meta } = require('../../utils/meta')
  , { writeEntry, cleanIcons } = require('../../utils/entries');

module.exports = async (req, res) => {
  // manual lmao
  if (0) {
    writeEntry(req.body.title, req.body.description);
    cleanIcons();
    res.redirect('/write');
  } else {
    res.status(405);
    res.render('pages/405', {
      layout: 'layouts/main',
      meta
    });
  };
};

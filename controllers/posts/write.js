const { meta } = require('../../utils/meta')
  , { writeEntry, cleanIcons } = require('../../utils/entries');

// lol
let access = '';
process.env.WRITE === 'true' ? access = true : access = false

module.exports = async (req, res) => {
  if (access) {
    writeEntry(req.body.title, req.body.description);
    cleanIcons();
    res.redirect('/write');
  } else {
    res.status(405);
    res.render('pages/405', {
      layout: 'layouts/main'
    });
  };
};

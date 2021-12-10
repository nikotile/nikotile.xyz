const { meta } = require('../../utils/meta')
  , { writeEntry, cleanIcons } = require('../../utils/entries');

// lol
let state = '';
process.env.NODE_ENV === 'production' ? state = false : state = true;

module.exports = async (req, res) => {
  if (state) {
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

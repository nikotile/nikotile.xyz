const { write } = require('../../utils/now');

// lol
let access = '';
process.env.NODE_ENV === 'development' ? access = true : access = false

module.exports = async (req, res) => {
  if (access) {
    write(req.body.title, req.body.picture, req.body.description);
    res.redirect('/now');
  } else {
    res.status(405);
    res.render('pages/405', {
      layout: 'layouts/main'
    });
  };
};

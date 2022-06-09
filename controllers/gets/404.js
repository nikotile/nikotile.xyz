module.exports = async (req, res) => {
  res.status(404),
  res.render('pages/404', {
    title: '404'
  });
};

const fs = require('fs');
const { meta, loadSNS } = require('./utils/meta');
const { getDate, loadEntries, writeEntry, cleanIcons } = require('./utils/entries');
const express = require('express')
  , app = express()
  , expressLayouts = require('express-ejs-layouts')
  , bodyParser = require('body-parser');

// view engine and static file-serving
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('static'));
// for blog submission
app.use(bodyParser.urlencoded({ extended: true }));

// get url for metadata
app.use(require(__dirname+'/utils/getUrl'));

app.use('/', require(__dirname+'/controllers')); // routes
app.use('/', require(__dirname+'/controllers/gets/404')) // 404 catchall

app.listen(meta.port, () => {
  console.log(`http://localhost:${meta.port}`);
});

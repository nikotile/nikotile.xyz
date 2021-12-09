const express = require('express')
  , app = express()
  , expressLayouts = require('express-ejs-layouts')
  , bodyParser = require('body-parser')
  , compression = require('compression');

// thanks Tom
app.disable('x-powered-by');

// view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// static file-serving
app.use(express.static('static'));

// for blog submission
app.use(bodyParser.urlencoded({ extended: true }));

// compression
app.use(compression());

// for metadata etc.
app.use(require(__dirname+'/utils/getUrl'));

app.use('/', require(__dirname+'/controllers')); // routes
app.use('/', require(__dirname+'/controllers/gets/404')) // 404 catchall

app.listen(meta.port, () => {
  console.log(`http://localhost:${meta.port}`);
});

const { meta } = require('./utils/meta');
const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , compression = require('compression');

app.disable('x-powered-by');
app.use(compression());
app.use(express.static('static'));

// view engine
app.set('view engine', 'pug');

// blog writing
app.use(bodyParser.urlencoded({ extended: true }));

// for meta and other information
app.locals.meta = meta;
app.use(require(__dirname+'/utils/getUrl'));

app.use('/', require(__dirname+'/controllers/index')); // routes
app.use('/', require(__dirname+'/controllers/gets/404')); // 404 catchall

app.listen(meta.port, () => {
  console.log(`http://localhost:${meta.port}`)
});

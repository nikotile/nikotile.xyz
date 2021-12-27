const { meta } = require('./utils/meta')
  , { cacheEntries, cleanIcons } = require('./utils/entries')
  , Mongo = require('./db/db');
const express = require('express')
  , app = express()
  , expressLayouts = require('express-ejs-layouts')
  , bodyParser = require('body-parser')
  , compression = require('compression');

(async () => {
  // connect to mongodb
  await Mongo.connect();

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
  app.use(require(__dirname+'/utils/getDate'));
  app.locals.meta = meta;

  app.use('/', require(__dirname+'/controllers')); // routes
  app.use('/', require(__dirname+'/controllers/gets/404')) // 404 catchall

  app.listen(meta.port, () => {
    cacheEntries().then(console.log('Entries cached'));
    cleanIcons().then(console.log('Icons cleaned'));
    console.log(`http://localhost:${meta.port}`);
  });
})();

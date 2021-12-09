const fs = require('fs');
const path = require('path');
const { meta, loadSNS } = require('./utils/meta');
const { getDate, loadEntries, writeEntry, cleanIcons } = require('./utils/entries');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

// view engine and static file-serving
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('static'));
// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// get url for metadata
app.use((req, res, next) => {
  getUrl = () => {
    const urls = {
      protocol: req.protocol,
      hostname: req.hostname,
      path: req.path,
      url: req.protocol + '://' + req.hostname + req.path,
    };
  return urls;
  };
  next();
});

// index
app.get('/', (req, res) => {
  res.render('pages/index', {
    layout: 'layouts/main',
    entries: loadEntries(),
    sns: loadSNS(),
    meta
  });
});

// blog
app.get('/blog', (req, res) => {
  res.render('pages/blog', {
    layout: 'layouts/main',
    entries: loadEntries(),
    meta
  })
});

app.get('/api/blog', (req, res) => {
  res.type('application/json');
  res.json(loadEntries());
});

for (let i = 0; i < loadEntries().length; i++) {
  const title = encodeURI(loadEntries()[i].title.replace(/\s/g , '-')).replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g,'').toLowerCase();
  app.get(`/blog/${title}`, (req, res) => {
    const entries = loadEntries()[i];
    res.render('pages/entry', {
      layout: 'layouts/main',
      entries,
      meta
    });
  });
};

// write entry
app.get('/write', (req, res) => {
  res.render('pages/write', {
    layout: 'layouts/main',
    meta
  });
});

app.post('/write', (req, res) => {
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
});

// RSS
app.get('/rss', (req, res) => {
  res.setHeader('content-type', 'text/xml');
  res.render('pages/rss', {
    layout: 'layouts/xml-template',
    entries: loadEntries(),
    meta
  });
});

// donate
app.get('/donate', (req, res) => {
  res.render('pages/donate', {
    layout: 'layouts/main',
    meta
  });
});

// 404
app.use('/*', (req, res) => {
  res.status(404);
  res.render('pages/404', {
    layout: 'layouts/main',
    meta
  });
});

app.listen(meta.port, () => {
  console.log(`Listening at http://localhost:${meta.port}`);
});

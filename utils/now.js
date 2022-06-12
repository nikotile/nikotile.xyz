const fs = require('fs'),
  https = require('https');

const load = () => {
  const now = JSON.parse(fs.readFileSync(__dirname+'/../data/now.json'));
  return now
};

const download = (picture) => {
  const stream = fs.createWriteStream(__dirname+'/../static/pictures/now.png');
  const download = https.get(picture, (res) => {
    res.pipe(stream);
    stream.on('finish', () => { stream.close() });
  });
};

const write = (title, picture, description) => {
  // format description into html
  const html = '<p>' + description.replace(/\r\n/g,'</p><p>').replace(/<p><\/p>/g,'').replace(/<p><h2>/g,'<h2>').replace(/<\/p><\/h2>/g,'<\/h2>').replace(/<p><img/g,'<div class="text-center m-3"><img').replace(/<\/img><\/p>/g,'</img></div>') + '</p>';

  // prepare the object
  const now = {
    title,
    picture,
    description: html,
    date: new Date().toUTCString()
  };

  // if unupdated, will retain the previous value
  const current = load();
  title === '' ? now.title = load().title : '';
  picture === '' ? now.picture = load().picture : download(picture);
  description === '' ? now.description = load().description : '';

  fs.writeFileSync(__dirname+'/../data/now.json', JSON.stringify(now));
};

module.exports = { load, write };

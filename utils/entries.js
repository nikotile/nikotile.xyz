const fs = require('fs');

const loadEntries = () => {
  const files = fs.readdirSync(__dirname+'/../data/blog').reverse();
  let entries = [];
  for (let file in files) {
    entries.push(JSON.parse(fs.readFileSync(__dirname+'/../data/blog/'+files[file])));
  };
  fs.writeFileSync(__dirname+`/../data/entries.json`, JSON.stringify(entries));
  entries = JSON.parse(fs.readFileSync(__dirname+`/../data/entries.json`));
  return entries
};

const loadEntry = (title) => {
  const entry = loadEntries().find(entry => entry.title.replace(/\s/g, '-').replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g,'').toLowerCase() == title);
  return entry
};

const writeEntry = (title, description) => {
  const html = '<p>' + description.replace(/\r\n/g,'</p><p>').replace(/<p><\/p>/g,'').replace(/<p><h2>/g,'<h2>').replace(/<\/p><\/h2>/g,'<\/h2>').replace(/<p><img/g,'<div class="text-center m-3"><img').replace(/<\/img><\/p>/g,'</img></div>') + '</p>';
  entry = {
    title, 
    uri: encodeURI(title.replace(/\s/g , '-').replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g,'').toLowerCase()),
    description: html,
    date: new Date().toISOString(),
    pubDate: new Date().toUTCString()
  };
  fs.writeFileSync(__dirname+`/../data/blog/${entry.date+'-'+entry.uri}.json`, JSON.stringify(entry));
  loadEntries();
};

module.exports = { loadEntries, loadEntry, writeEntry };

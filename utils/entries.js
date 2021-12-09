const fs = require('fs');
const path = require('path');
const { DateTime } = require('luxon');
const jdenticon = require('jdenticon');

// title is the value to create icon from.
// guid is the file name
const createIcon = (title, guid) => {
  const icon = jdenticon.toPng(title, 500);
  fs.writeFileSync(path.resolve(__dirname,`../static/icons/${guid}.png`), icon);
};

const getDate = () => {
  // ISO 8601
  const dateISO = DateTime.now().toISO();
  // RFC 2822 for RSS pub date
  const dateRFC = DateTime.fromISO(dateISO).toRFC2822();
  // not necessarily XML's guid
  // for other purposes e.g. icon generation
  const guid = DateTime.fromISO(dateISO).toMillis();
  return { dateISO, dateRFC, guid };
};

const loadEntries = () => {
  const fileBuffer = fs.readFileSync(path.resolve(__dirname,`../data/entries.json`));
  const entries = JSON.parse(fileBuffer);
  return entries;
};

const loadEntry = (title) => {
  const fileBuffer = fs.readFileSync(path.resolve(__dirname,`../data/entries.json`));
  const entries = JSON.parse(fileBuffer).find(entry =>
    entry.title.replace(/\s/g,'-').replace(/[&\/\\#,+()$~%.'":*!?<>{}]/g,'').toLowerCase() == title
  );
  return entries;
};

const writeEntry = (title, description) => {
  const dateObj = getDate();
  createIcon(title, dateObj.guid);
  // format the description
    const htmlDesc = '<p>' + description.replace(/\r\n/g,'</p><p>').replace(/<p><\/p>/g,'').replace(/<p><h2>/g,'<h2>').replace(/<\/p><\/h2>/g,'<\/h2>').replace(/<p><img/g,'<div class="text-center m-3"><img').replace(/<\/img><\/p>/g,'</img></div>') + '</p>';
  // load existing entries
  const entries = loadEntries();
  const input = {
    title,
    description: htmlDesc,
    date: dateObj.dateISO,
    pubDate: dateObj.dateRFC,
    guid: dateObj.guid,
  };
  entries.unshift(input);
  fs.writeFileSync(path.resolve(__dirname,`../data/entries.json`), JSON.stringify(entries));
};

const cleanIcons = () => {
  fs.rmSync(path.resolve(__dirname,'../static/icons'),{recursive:true});
  fs.mkdirSync(path.resolve(__dirname,'../static/icons'));

  for (let i = 0; i < loadEntries().length; i++) {
    const title = loadEntries()[i].title;
    const guid = loadEntries()[i].guid;
    createIcon(title, guid);
  };
};

module.exports = { getDate, loadEntries, loadEntry, writeEntry, cleanIcons };

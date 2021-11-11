const fs = require('fs');
const path = require('path');

const meta = {
  port: 5000,
  title: 'Nikotile',
  author: 'Nikotile',
  url: 'nikotile.xyz',
  email: 'niko@nikotile.xyz',
  locale: 'id',
};

// not actually SNSes
const loadSNS = () => {
  const fileBuffer = fs.readFileSync(path.resolve(__dirname,`../data/sns.json`));
  const sns = JSON.parse(fileBuffer);
  return sns;
};

module.exports = { meta, loadSNS };

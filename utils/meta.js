const fs = require('fs');

const meta = {
  port: 7000,
  title: 'Nikotile',
  author: 'Nikotile',
  url: 'nikotile.xyz',
  email: 'niko@nikotile.xyz',
  locale: 'id',
};

// not actually SNSes
const loadSNS = () => {
  const fileBuffer = fs.readFileSync(__dirname+'/../data/sns.json');
  const sns = JSON.parse(fileBuffer);
  return sns;
};

module.exports = { meta, loadSNS };

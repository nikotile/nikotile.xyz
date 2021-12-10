const secrets = require(__dirname+'/../configs/secrets')
const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    await mongoose.connect(secrets.dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(res => console.log('Connected to database'))
    .catch(e => console.log(e));
  }
};

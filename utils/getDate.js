const { meta }= require('./meta')
  , { DateTime } = require('luxon');

module.exports = (req, res, next) => {
  getDate = (dateISO, format) => {
    const date = DateTime.fromISO(dateISO).setLocale(meta.locale).toFormat(format);
    return date;  
  };
  next();
};

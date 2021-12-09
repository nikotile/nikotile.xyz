module.exports = (req, res, next) => {
  getUrl = () => {
    const urls = {
      protocol: req.protocol,
      hostname: req.hostname,
      path: req.path,
      url: req.protocol + '://' + req.hostname + req.path
    };
    return urls;  
  };
  next();
};

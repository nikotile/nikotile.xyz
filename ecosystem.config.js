module.exports = {
  apps : [{
    name   : "nikotile.xyz",
    script : "./server.js",
    ignore_watch: "data/blog/",
    env_production: {
      NODE_ENV: "production"
    }
  }]
}

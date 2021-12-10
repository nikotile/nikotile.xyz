module.exports = {
  apps : [{
    name   : "nikotile.xyz",
    script : "./index.js",
    ignore_watch : "data/entries.json",
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}

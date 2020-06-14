const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add the new plugin to the existing webpack plugins
    config.plugins.push(new Dotenv({ silent: true }));

    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config;
  },
  target: 'serverless',
  reactStrictMode: true
}
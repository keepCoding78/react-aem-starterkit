const path = require('path');
const fs = require('fs');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const apps = [
  {
    name: 'Demo',
    id: 'demo',
    indexJs: resolveApp('src/apps/demo/index.js'),
    indexCss: resolveApp('src/apps/common/page/index.css'),
    template: resolveApp('templates/demo.html'),
    templateFile: 'demo.html',
    rewriteFrom: /\/demo/,
    rewriteTo: '/demo.html'
  },
  {
    name: 'Grid',
    id: 'grid',
    indexJs: resolveApp('src/apps/demo/index.js'),
    indexCss: resolveApp('src/apps/common/page/index.css'),
    template: resolveApp('templates/grid.html'),
    templateFile: 'grid.html',
    rewriteFrom: /\/grid/,
    rewriteTo: '/grid.html'
  },
  {
    name: 'Products',
    id: 'products',
    indexJs: resolveApp('src/apps/products/index.js'),
    indexCss: resolveApp('src/apps/common/page/index.css'),
    template: resolveApp('templates/products.html'),
    templateFile: 'products.html',
    rewriteFrom: /\/products/,
    rewriteTo: '/products.html'
  },
  {
    name: 'Login',
    id: 'login',
    indexJs: resolveApp('src/apps/login/index.js'),
    indexCss: resolveApp('src/apps/common/page/index.css'),
    template: resolveApp('templates/login.html'),
    templateFile: 'login.html',
    rewriteFrom: /\/login/,
    rewriteTo: '/login.html'
  },

];

function getHtmlWebpackPlugin() {
  return apps.map(function(app) {
    return new HtmlWebpackPlugin({
      filename: app.templateFile,
      chunks: [app.id],
      inject: true,
      template: app.template
    });
  });
}

function getEntry() {
  let entry = {};
  apps.map(function(app) {
    return (entry[app.id] = [
      require.resolve('./polyfills'),
      require.resolve('react-dev-utils/webpackHotDevClient'),
      app.indexJs,
      app.indexCss
    ]);
  });
  return entry;
}

function getHistoryApiRewrites() {
  return apps.map(function(app) {
    return {
      from: app.rewriteFrom,
      to: app.rewriteTo
    };
  });
}

function getCommonChunkNames() {
  return apps.map(function(app) {
    return app.id;
  });
}


module.exports = {
    getEntry,
    getHtmlWebpackPlugin,
    getHistoryApiRewrites,
    getCommonChunkNames
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://104.248.26.141:3000',
      changeOrigin: true,
    })
  );
};

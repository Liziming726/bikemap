const {createProxyMiddleware}  = require ('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'http://dida100.com:8888',
        changeOrigin: true,
        })
    );
    };
module.exports = function (app) {
    var router = app.loopback.Router();
    /*router.get('/!*', function (req, res, next) {
        var ext = (req.url.indexOf('.') !== -1) ? req.url.substr(req.url.lastIndexOf('.') + 1) : null;
        console.log(ext);
        if (!req.xhr && req.url.indexOf('/api/') == -1 && !ext && ext!=='js') {
            console.log('sss')
            res.sendfile('client/dist/index.html');
        } else {
            console.log('aaa')
            next();
        }
    });*/
    router.get('/', function (req, res, next) {
        res.sendfile('client/dist/index.html');
        // path.join(__dirname + '/../client/app/market/index.html')
    });
    // path.join(__dirname + '/../client/app/market/index.html')
    app.use(router);
};

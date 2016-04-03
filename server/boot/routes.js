module.exports = (app)=> {
    var router = app.loopback.Router();
    router.get('/*', (req, res, next)=> {
        var ext = (req.url.indexOf('.') !== -1) ? req.url.substr(req.url.lastIndexOf('.') + 1) : null;
        if (!req.xhr && req.url.indexOf('/api/') == -1 && !ext)
            res.sendfile('client/dist/index.html');
        else
            next();
    });
    app.use(router);
};
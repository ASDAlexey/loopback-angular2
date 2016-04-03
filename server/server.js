var loopback, boot, app;
loopback = require('loopback');
boot = require('loopback-boot');
app = module.exports = loopback();

app.start = ()=> {
    return app.listen(()=> {
        app.emit('started');
        var baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);
        if (app.get('loopback-component-explorer')) {
            var explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

app.use('/express-status', (req, res, next)=> res.json({running: true}));

boot(app, __dirname, (err)=> {
    if (err) throw err;
    if (require.main === module) app.start();
});
'use strict';
import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import path from 'path';

var paths = {
    projectRoot: __dirname,
    appRoot: path.join(__dirname, '../server'),
    appCommons: path.join(__dirname, '../common')
};

gulp.task('nodemon', (cb)=> {
    return nodemon({
        script: 'server/server.js',
        watch: [paths.appRoot, paths.appCommons],
        ext: "js json",
        stdout: false
    }).once('start', ()=> {
        // return runSequence("browser-sync");
    }).on('readable', function () {
        this.stdout.on('data', (chunk)=> {
            /*if (/^Web server listening at/.test(chunk)) {
             // reload();
             }*/
            return process.stdout.write(chunk);
        });
        return this.stderr.on('data', (chunk)=> process.stderr.write(chunk));
    });
});
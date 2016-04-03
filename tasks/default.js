'use strict';
import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', ()=> runSequence(['nodemon']));
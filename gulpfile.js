const gulp = require('gulp');
const clean = require('gulp-clean-dest');
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
const stylus = require('gulp-stylus');
const eslint = require('gulp-eslint');
const pump = require('pump');

gulp.task('build', ['prebuild']);

gulp.task('prebuild', (cb) => {
    const tasks = [
        gulp.src('src/**/*.js'),
        eslint({ fix: true }),
        eslint.format(),
        eslint.failAfterError(),
        clean('dest')
    ];

    pump(tasks, cb);
});

gulp.task('js', (cb) => {
    const tasks = [
      gulp.src(['src/**/*.js']),
      babel(),
      uglify(),
      gulp.dest('dist')
    ];
  
    pump(tasks, cb);
});

gulp.task('css', (cb) => {
    const tasks = [
        gulp.src(['src/**/*.styl']),
        stylus(),
        uglify(),
        gulp.dest('dist')
    ]

    pump(tasks, cb);
});
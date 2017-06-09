'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./src/scss/**/*.scss')

        // Собственно компиляция
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))

        // Путь компиляции
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});
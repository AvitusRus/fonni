
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('connect');
var serve = require('serve-static');
var browsersync = require('browser-sync');
var browserify = require('browserify');

gulp.task('default', ['styles', 'images', 'browsersync', 'watch']);

gulp.task('styles', function() {
    gulp.src('app/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('app/css/*.scss', ['styles', browsersync.reload]);
    gulp.watch('app/js/*.js', ['scripts', browsersync.reload]);
    gulp.watch('app/img/*', ['images', browsersync.reload]);
});


gulp.task('images', function() {
    return gulp.src('app/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Server Task
gulp.task('server', function() {
    return connect().use(serve(__dirname))
        .listen(8080)
        .on('listening', function() {
            console.log('Server Running: View at http://localhost:8080');
        });
});


// BrowserSync Task
gulp.task('browsersync', function() {
    return browsersync({
        server: {
            baseDir:'./'
        }
    });
});

// Browserify Task
gulp.task('browserify', function() {
    return browserify('./app/js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

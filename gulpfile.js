var gulp = require('gulp'),
    scss = require('gulp-sass'),
    browser = require('browser-sync'),
    image = require('gulp-image'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    uncss = require('gulp-uncss');

//concatcss and minify
gulp.task('concat', function() {
    return gulp.src('app/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uncss({
            html: ['app/index.html']
        }))
        .pipe(gulp.dest('dest/css'));
});

//scss compile task
gulp.task('scss-compile', function() {
    gulp.src('app/scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('app/css'))
        .pipe(browser.reload({
            stream: true
        }))
});

//browser synchronisation task
gulp.task('browser-sync', function() {
    browser({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

//image optimization task
gulp.task('image', function() {
    gulp.src(['app/img/*.jpg', 'app/img/*.png'])
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10
        }))
        .pipe(gulp.dest('dest/img'));
});







//optimize
gulp.task('optimize', ['image']);
//init compilation when files changed
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/scss/*.scss', ['scss-compile']);
});

var gulp = require('gulp'),
    scss = require('gulp-sass'),
    browser = require('browser-sync');

gulp.task('scss-compile',function () {
    gulp.src('app/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('app/css'))
    .pipe(browser.reload({
        stream: true
    }))
});

gulp.task('browser-sync', function() {
    browser({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch',['browser-sync'],function () {
  gulp.watch('app/scss/*.scss',['scss-compile']);
});

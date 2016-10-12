
var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['js'], function () {
    gulp.watch('app/**/*.js', ['js']);
});

gulp.task('js', function () {
    gulp.src('app/**/*.js')
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(minify())
        .pipe(gulp.dest('./dist/'));
});


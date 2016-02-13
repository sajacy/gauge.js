var gulp = require('gulp');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default',['coffee', 'compress']);

gulp.task('coffee', function() {
  gulp.src('src/*.coffee')
  .pipe(coffee({bare: true}))
  .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
  return gulp.src(['dist/*.js', '!dist/*.min.js'])
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('dist'));
});

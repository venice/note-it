

var gulp = require('gulp');
var prefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
//var browserify = require('gulp-browserify');  //replace by node-browserify
var browserify = require('browserify'); 
var source = require('vinyl-source-stream'); 
var rename = require('gulp-rename');   
var notify = require("gulp-notify"); 


gulp.task('styles', function () {
  gulp
    .src('css/styles.less')
    .pipe(less({
      paths: ['css']
    }))
    .pipe(prefixer('last 2 versions', 'ie 9'))
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function(){
  return browserify('./js/app.js')
    .bundle({ debug: true })
    /*
    .on('error', notify.onError({
      message: "<%= error.message %>",
      title: "JavaScript Error"
    }))*/
    .pipe(source('app.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./js/'));
  
  /*  
  gulp
    .src('js/app.js')
    .pipe(browserify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('js'));
  */  
});

gulp.task('default', function() {
  gulp.run('scripts','styles');

  gulp.watch('css/*.less', function(event) {
    gulp.run('styles');
  });

  gulp.watch('js/app.js', function(event) {
    gulp.run('scripts');
  });

});
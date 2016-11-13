var gulp = require('gulp');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var shell = require('gulp-shell');

var SRC = 'tmp_image/*.png';
var DEST = 'live_course_git_hub/sessions/session7.0/assets';


gulp.task('images', function(){
  
    return gulp.src(SRC)
           .pipe(changed(DEST))
           .pipe(gulp.dest(DEST));
});

gulp.task('watch', function () {
    watch(SRC, function () {
        console.log('starting watch task');
       
    });
});




gulp.task('default', ['watch']);
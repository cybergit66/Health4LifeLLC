var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Your first gulp task");
});

gulp.task('html', function(){
    console.log("An HTML change just occurred");
});

gulp.task('styles', function(){
    console.log("A CSS change just occurred");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
    
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});
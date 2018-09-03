const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

//Compile SASS and inject into browser.
gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});
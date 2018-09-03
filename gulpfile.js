const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile SASS and inject into browser.
gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
});

//Move JS files to src/js.
gulp.task('js',function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
});

//Watch sass and server.
gulp.task('serve',['sass'],function(){
    browserSync.init({ // initialize the browser.
        server: './src' // defining server with src folder.
    });
    // we need watch commands for monitoring the sass files.
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'],['sass']);
    //now watching html files.
    gulp.watch('src/*.html').on('change',browserSync.reload);
});

//move fonts folder to src/fonts.
gulp.task('fonts',function(){
    return gulp.src(['node_modules/font-awesome/fonts/*'])
    .pipe(gulp.dest('src/fonts'));
});

//move fonts awesome css to src/css.
gulp.task('fa',function(){
    return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css'])
    .pipe(gulp.dest('src/css'));
});

//Runs all the tasks by default.
gulp.task('default',['js','serve','fonts','fa']);
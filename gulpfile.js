var gulp = require('gulp');
var argv = require('yargs').argv;
var gulpif = require('gulp-if');

var less = require('gulp-less');
var autoprefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

var sourceMaps = require('gulp-sourcemaps');

//
// Toggle production / debug builds (example gulp --prod)

var isProduction = (argv.prod) ? (true) : (false);

//
// Sources

var lessSrc = './app/less/app.less';
var lessSrcWatch = './app/less/**/*.less';
var lessComponentsSrc = './app/js/**/*.less';

var bldFolder = './bld';

//
// Sub Tasks

gulp.task('less', function () {
    return gulp
        .src(lessSrc)
        .pipe(gulpif(!isProduction, sourceMaps.init()))
        
        .pipe(less())
        .pipe(autoprefix({ browsers: ['last 3 versions'] }))
        
        .pipe(gulpif(isProduction, minifyCss()))
        
        .pipe(gulpif(!isProduction, sourceMaps.write()))
        .pipe(gulp.dest(bldFolder));
});

gulp.task('less-components', function(){
    return gulp
        .src(lessComponentsSrc)
        .pipe(less())
        .pipe(autoprefix({ browsers: ['last 3 versions'] }))
        .pipe(gulpif(isProduction, minifyCss()))
        .pipe(gulp.dest('./app/js'));
});

//
// Main Tasks

gulp.task('default', ['less', 'less-components'],  function(){});

gulp.task('watch', ['default'], function () {
    gulp.watch(lessSrcWatch, ['less']);
    gulp.watch(lessComponentsSrc, ['less-components']);
});

/*******************************************************************************
1. DEPENDENCIES
*******************************************************************************/
 
var gulp = require('gulp'),                             // gulp core
    sass = require('gulp-sass'),                        // sass compiler
    uglify = require('gulp-uglify'),                    // uglifies the js
    jshint = require('gulp-jshint'),                    // check if js is ok
    rename = require("gulp-rename"),                    // rename files
    concat = require('gulp-concat'),                    // concatinate js
    notify = require('gulp-notify'),                    // send notifications to osx
    plumber = require('gulp-plumber'),                  // disable interuption
    stylish = require('jshint-stylish'),                // make errors look good in shell
    minifycss = require('gulp-minify-css'),             // minify the css files
    browserSync = require('browser-sync').create(),              // inject code to all devices
    autoprefixer = require('gulp-autoprefixer'),       // sets missing browserprefixes
	rimraf = require('rimraf');							// delete file


var my_theme_name = "my_theme";


var dist_dir = "./themes/" + my_theme_name + "/static/";


// watching scss/html files
gulp.task('watch', ['sass','js'], function() {
	gulp.watch("./src/**/*", ['hugorebuild']);
    gulp.watch("./src/js/*.js", ['js']);
	gulp.watch("./src/scss/*.scss", ['sass']);
});

// hugo does not 
gulp.task('hugorebuild', function() {
    return gulp.src("./themes/" + my_theme_name + "/layouts/index.html")
		.pipe(gulp.dest("./themes/" + my_theme_name + "/layouts/"));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
        .pipe(plumber()) 
        .pipe(sass())
        .pipe(gulp.dest(dist_dir + "css"));
});

gulp.task('js', function() {
    return gulp.src("./src/js/*.js")
        .pipe(plumber())
        .pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
        .pipe(gulp.dest(dist_dir + "js"));
});

gulp.task('default', ['watch']);

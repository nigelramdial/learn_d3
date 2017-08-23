/*]
[|] ||==============================||
[|]         Define Dependencies
[|] ||==============================||
[*/
const gulp = require('gulp')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
/*]
[|] ||==============================||
[|]         Define Tasks
[|] ||==============================||
[*/
/*]
[|] Compile ES6 into browser ready JavaScript
[*/
gulp.task('make-js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(babel())
        .pipe(gulp.dest('dist'))
})
/*]
[|] Compile PUG into HTML
[*/
gulp.task('make-html', () => {
    return gulp.src('/src/pug/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
})
/*]
[|] Watchers!
[*/
gulp.task('watch', () => {
    gulp.watch(['src/js/**/*.js'], ['make-js'])
    gulp.watch(['src/pug/**/*.pug'], ['make-html'])
})
/*]
[E] END
[*/

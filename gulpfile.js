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
[|] GENERIC FUNCTION TO MAKE GULP EXPERIENCE BETTER
[*/
function swallow_error (error) {
    console.log(error.toString())
    this.emit('end')
}
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
        .on('error', swallow_error)
        .pipe(gulp.dest('dist'))
})
/*]
[|] Compile PUG into HTML
[*/
gulp.task('make-html', () => {
    return gulp.src('src/pug/**/*.pug')
        .pipe(pug())
        .on('error', swallow_error)        
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

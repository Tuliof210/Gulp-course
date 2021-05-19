const gulp = require('gulp');
const unglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function depsCSS() {
  return gulp
    .src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(
      unglifycss({
        uglyComments: false,
      })
    )
    .pipe(concat('deps.min.css'))
    .pipe(gulp.dest('build/assets/css'));
}
function depsFonts(cb) {
  return cb();
}

module.exports = {
  depsCSS,
  depsFonts,
};

const gulp = require('gulp');
const series = gulp.series;
const parallel = gulp.parallel;

function copy(callback) {
  console.log('copy task');
  gulp.src('pastaA/**/*.txt').pipe(gulp.dest('pastaB'));
  return callback();
}
function start(callback) {
  console.log('start task');
  return callback();
}
function second(callback) {
  console.log('second task');
  return callback();
}
function finish(callback) {
  console.log('finish task');
  console.log(16 ** (1 / 2));
  return callback();
}

module.exports.default = series(start, parallel(second, copy), finish);

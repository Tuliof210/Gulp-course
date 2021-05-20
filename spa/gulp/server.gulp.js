const gulp = require('gulp');
const webserver = require('gulp-webserver');

function watchFiles(cb) {
  return cb();
}
function server() {
  return gulp.src('build').pipe(
    webserver({
      port: 5000,
      open: true,
      livereload: true,
    })
  );
}

module.exports = {
  watchFiles,
  server,
};

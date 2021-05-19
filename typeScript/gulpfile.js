const { series } = require('gulp');

const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function transformTS(callback) {
  tsProject.src().pipe(tsProject()).pipe(gulp.dest('build'));
  return callback();
}

exports.default = series(transformTS);

const { series } = require('gulp');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const concat = require('gulp-concat');
const unglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformTS() {
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        comments: false,
        presets: ['env'],
      })
    )
    .on('error', err => console.log(err))
    .pipe(unglify())
    .pipe(concat('ts_transform.min.js'))
    .pipe(gulp.dest('build'));
}

exports.default = series(transformTS);

/**
 * >>> ts.createProject('tsconfig.json') src
 * importa as configs do ts
 * ---------------------------------------------
 *
 * >>> tsProject
 * converte ts em js
 * ---------------------------------------------
 */

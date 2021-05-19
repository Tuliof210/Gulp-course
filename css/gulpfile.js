const { series, parallel } = require('gulp');
const gulp = require('gulp');

const sass = require('gulp-sass');
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformCSS() {
  return gulp
    .src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      uglifyCSS({
        unglyComments: true,
      })
    )
    .pipe(concat('estilo.min.css'))
    .pipe(gulp.dest('build/css'));
}

function copyHTML() {
  return gulp.src('src/index.html').pipe(gulp.dest('build'));
}

exports.default = parallel(copyHTML, transformCSS);

/**
 * >>> sass
 * transforma scss em css
 * on -> captura eventos
 * sass.logError -> console log de erro
 * ------------------------------------------------
 *
 * >>> uglifyCSS
 * não precisa de parametros
 * serve para 'minificar' o codigo css
 * unglyComments -> remove comentarios
 * ------------------------------------------------
 */

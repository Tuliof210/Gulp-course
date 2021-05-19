const gulp = require('gulp');
const concat = require('gulp-concat');
const unglify = require('gulp-uglify');
const babel = require('gulp-babel');
const { series } = require('gulp');

function transformJS(callback) {
  gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        comments: false,
        presets: ['env'],
      })
    )
    .on('error', err => console.log(err))
    .pipe(unglify())
    .pipe(concat('code.min.js'))
    .pipe(gulp.dest('build'));
  return callback();
}

exports.default = series(transformJS);

/**
 * >>> gulp src
 * 'src/' => tudo da pasta 'src' em diante
 * '**' => qualquer subpasta
 * '*.js' => qualquer js. Vale qualquer .file
 * ------------------------------------------------
 *
 * >>> pipe
 * basicamente uma sequencia de filtros
 * semelhante ao pipe observable
 * ------------------------------------------------
 *
 * >>> babel config
 * comments = remover ou nao comentarios
 * presets = versao do ES. env é a mais moderna
 * ------------------------------------------------
 *
 * >>> uglify
 * não precisa de parametros
 * serve para 'minificar' o codigo
 * ------------------------------------------------
 *
 * >>> concat
 * agrupa todos os aquivos recebidos no pipe
 * recebe como parametro o nome do novo arquivo
 * default name => <nome>.min.js por motivos obvios
 * ------------------------------------------------
 *
 * >>> gulp dest
 * recebe um diretorio de destino para salvar o resultado
 * default name => build
 * ------------------------------------------------
 *
 * >>> on
 * captura e trata eventos
 * e.g.: 'error'
 * ------------------------------------------------
 */

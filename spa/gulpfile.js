const gulp = require('gulp');
const { series, parallel } = require('gulp');
// >>> custom
const { appHTML, appCSS, appJS, appIMG } = require('./gulp/app.gulp');
const { depsCSS, depsFonts } = require('./gulp/deps.gulp');
const { watchFiles, server } = require('./gulp/server.gulp');

module.exports.default = series(
  parallel(series(appHTML, appCSS, appJS, appIMG), series(depsCSS, depsFonts)),
  server,
  watchFiles
);

/**
 * em serie: Compilar, servir e depois monitorar
 * Compilar: executa duas tasks em paralelo
 * Cada task é uma serie
 * uma serie compila o app
 * outra seria compila as dependencias
 * apos ambas as series finalizarem podemos dizer que 'Compilar' finalizou
 */

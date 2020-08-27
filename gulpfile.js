let {src, dest, parallel, series, watch} = require('gulp');

const ghpages      = require('gh-pages');
const path         = require('path');
const browserSync  = require('browser-sync').create();
const del          = require('del');
const pug          = require('gulp-pug');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano      = require('cssnano');
const imagemin     = require('gulp-imagemin');;
const webpack      = require('webpack-stream');

function ghPages(cb) {
  ghpages.publish(path.join(process.cwd(), './build'), cb);
}

function devServer() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
    watch: true,
    reloadDebounce: 150,
    notify: false,
    online: true
  });
}

function buildPages() {
  return src('src/pages/index.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/style.scss')
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildAssets() {
  return src('src/assets/**/*.*')
    .pipe(imagemin())
    .pipe(dest('build/assets/'));
}

function buildScripts() {
  return src('src/scripts/script.js')
    .pipe(webpack({ output: { filename: 'bundle.js' }}))
    .pipe(dest('build/scripts/'));
}

function clearBuild() {
  return del('build/**/*', {
    force: true
  });
}

function watchFiles() {
  watch('src/pages/*.pug', buildPages);
  watch('src/styles/**/*.scss', buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch('src/assets/**/*.*', buildAssets);
}

exports.pages = ghPages;
exports.default =
  series(
    clearBuild,
    parallel(
      devServer,
      series(
        parallel(buildPages, buildStyles, buildScripts, buildAssets),
        watchFiles
      )
    )
  );
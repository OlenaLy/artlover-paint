import * as dartSass from 'sass'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

const sass = gulpSass(dartSass)

const paths = {
  styles: {
    src: './src/style/**/*.scss',
    main: './src/style/main.scss',
    dest: './build/css'
  },
  scripts: {
    src: './src/script/**/*.js',
    main: './src/script/app.js',
    dest: './build/js'
  },
  html: {
    src: './index.html',
    dest: './build'
  },
  assets: {
    src: './assets/**/*',
    dest: './build/assets'
  }
}

function buildStyles() {
  return gulp.src(paths.styles.main)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest))
}

function minifyJs() {
  return gulp.src(paths.scripts.main, { allowEmpty: true })
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest))
}

function copyHtml() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
}

function copyAssets() {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest))
}

function watchFiles() {
  gulp.watch(paths.styles.src, buildStyles)
  gulp.watch(paths.scripts.src, minifyJs)
  gulp.watch(paths.html.src, copyHtml)
  gulp.watch(paths.assets.src, copyAssets)
}

export const build = gulp.series(
  buildStyles,
  minifyJs,
  copyHtml,
  copyAssets
)

export const watch = gulp.series(build, watchFiles)
export default gulp.series(build, watch)

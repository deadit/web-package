const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const server = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('js', () => gulp.src('src/js/index.js')
  .pipe(babel({
    presets: ['@babel/preset-env'],
  }))
  .pipe(gulp.dest('dist/js')));

gulp.task('css', () => gulp.src('src/scss/style.scss')
  .pipe(plumber())
  .pipe(sourcemap.init())
  .pipe(sass())
  .pipe(postcss([
    autoprefixer(),
  ]))
  .pipe(sourcemap.write('.'))
  .pipe(gulp.dest('dist/css'))
  .pipe(server.stream()));


gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', gulp.series('css'));
  gulp.watch('src/js/**/*.js', gulp.series('js'));
  gulp.watch('layouts/**/*.html');
});

gulp.task('build', gulp.series('css', 'js'));

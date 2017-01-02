import gulp from 'gulp'

gulp.task('watch', () => {
  // gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/styles/scss/**/*.scss', ['styles'])
  gulp.watch(['./src/scripts/lib/*.js',
  './src/scripts/main.js',
  './src/homepage/*.js',
  './src/signup/*.js',
  './src/signin/*.js',
  './src/landing/*.js',
  './src/layout/*.js',
  './src/picture-card/*.js',
  './src/translate/*.js'], ['scripts'])
  gulp.watch('./src/videos/**/*.*', ['images'])
})

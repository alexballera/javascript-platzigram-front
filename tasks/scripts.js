import gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import uglify from 'gulp-uglify'
import babelify from 'babelify'
import rename from 'gulp-rename'

gulp.task('scripts', () => {
  return browserify('./src/scripts/main.js')
  .transform(babelify, {
    presets: ['latest'],
    plugins: [
      'syntax-async-functions',
      'transform-regenerator'
    ]
  })
  .bundle()
  .on('error', (err) => {
    console.log(err)
    this.emit('end')
  })
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./build/scripts'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('./src/scripts'))
  .pipe(gulp.dest('./build/scripts'))
  .pipe(gulp.dest('./public/scripts'))
})

const gulp = require('gulp');
const clean = require('gulp-clean-dest');
const uglify = require("gulp-uglify");
const react = require("gulp-react");
const rename = require('gulp-rename');
const pump = require('pump');

const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');

// gulp.task('build', function(cb) {

//     const tasks = [
//       gulp.src(['src/**/*.js']),
//       clean('dist'),
//       babel(),
//       uglify(),
//       gulp.dest('dist')
//     ];
  
//     pump(tasks, cb);
// });

const compile = (watch) => {
  const bundler = watchify(browserify('./dev/index.js'), { debug: true }).transform(babel);

  function rebundle() {
    bundler.bundle()
      .on('error', (err) => { console.log("GULP ERROR:", err)})
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if(watch) {
    bundler.on('update', () => {
      console.log("Bundling....");
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', () => compile());
gulp.task('watch', () => watch());
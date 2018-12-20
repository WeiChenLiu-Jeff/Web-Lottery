// gulpfile.js
const gulp = require('gulp');

gulp.task('run', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  console.log('Hello World!');
  done();
}
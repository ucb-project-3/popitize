const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', () => (
  gulp.src()
    .pipe(mocha({ reporter: 'nyan' }))
));

const watcher = gulp.watch('./src/**/*.js', ['default']);
watcher.on('change', (event) => {
  console.log('File Changed', new Date());
  console.log(event);
});

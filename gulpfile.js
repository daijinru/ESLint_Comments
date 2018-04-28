const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', () => {
	return gulp.src('src/*.js')
	.pipe(eslint({
		configFile: './.eslintrc.js'
	}))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
})

gulp.task('watch', () => {
	gulp.watch('src/*.js', ['lint']);
})

gulp.task('build', () => {
	gulp.src('src/*.js')
	.pipe(gulp.dest('dist'));
})

gulp.task('default', ['watch', 'build', 'lint']);
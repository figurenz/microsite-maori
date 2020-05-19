var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');

gulp.task('sass', function () {
    return gulp.src('assets/css/sass/main.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('assets/css'))
});

gulp.task('webserver', function () {
    gulp.src('/')
        .pipe(webserver({
            livereload: true,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('serve', gulp.series(['sass', 'webserver']));
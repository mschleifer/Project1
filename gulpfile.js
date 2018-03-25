var gulp = require('gulp');
var panini = require('panini');

gulp.task('panini', function () {
    gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            helpers: 'src/helpers/',
            data: 'src/data/'
        }))
        .pipe(gulp.dest('dist'));
});
var gulp = require('gulp');
var panini = require('panini');

gulp.task('panini', pages);

function pages() {
    return gulp.src('src/pages/**/*.html')
        .pipe(panini({
            root: 'src/pages/',
            layouts: 'src/layouts/',
            partials: 'src/partials/',
            helpers: 'src/helpers/',
            data: 'src/data/'
        }))
        .pipe(gulp.dest('dist'));
}

function resetPages(done) {
    panini.refresh();
    done();
}

gulp.watch('./src/{pages,layouts,partials,helpers,data}/**/*').on('all', gulp.series(resetPages, pages));
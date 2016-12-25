const gulp = require('gulp')

// define a task with a dependency
gulp.task('task', ['dependency'], (done) => {
    console.log('gulp: running...')
    setTimeout(() => {
        console.log('gulp: ...done');
        done()
    }, 2000)
})

gulp.task('dependency', () => {
    console.log('gulp: dependency ran')
})

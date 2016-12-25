const grunt = require('grunt')
const gulp = require('gulp')

grunt.loadNpmTasks('grunt-gulp')

// load our gulp tasks
require('./gulpfile')

grunt.initConfig({
    gulp: {
        // point the task "grunt gulp:task" to "gulp task"
        task: () => gulp.start('task')
    }
})

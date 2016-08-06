module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded' //compressed for dev
                },
                files: {
                    'assets/css/prod/main.css': 'assets/css/src/main.scss'
                }
            }
        },
        watch: {
            src: {
                files: ['assets/css/src/*.scss'],
                tasks: ['sass'],
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('watch', ['watch']);

};
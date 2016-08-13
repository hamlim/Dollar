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
        },
        es6transpiler: {
            dist: {
                files: {
                    'assets/js/prod/MVC/controllers/home.js': 'assets/js/src/home/controller.js',
                    'assets/js/prod/MVC/controllers/settings.js': 'assets/js/src/settings/controller.js',
                    'assets/js/prod/MVC/controllers/budgets.js': 'assets/js/src/budgets/controller.js',
                    'assets/js/prod/MVC/controllers/analysis.js': 'assets/js/src/analysis/controller.js',
                    'assets/js/prod/MVC/controllers/login.js': 'assets/js/src/login/controller.js',
                    'assets/js/prod/MVC/controllers/signup.js': 'assets/js/src/signup/controller.js',
                    'assets/js/prod/MVC/controllers/records.js': 'assets/js/src/records/controller.js',
                    'assets/js/prod/helpers/state.js': 'assets/js/src/helpers/state.js',
                    'assets/js/prod/helpers/database-sync.js': 'assets/js/src/helpers/database-sync.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-es6-transpiler');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'es6transpiler']);
    grunt.registerTask('watch', ['watch']);

};
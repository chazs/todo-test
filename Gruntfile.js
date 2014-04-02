module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                src: ['src/js/**/*.js'],
                dest: 'app/todoapp.js'
            },
            css: {
                src: ['src/css/**/*.css'],
                dest: 'app/todoapp.css'
            },              
            options: {
                separator:''
            }
        },
        uglify: {
            output: {
                files: {
                    'app/todoapp.min.js': ['app/**/*.js']
                }
            }
        },
        jasmine: {
            dist: {
                src: [  'libs/angular.min.js',
                        'libs/angular-mocks.js',
                        //'specs/chaztodospec.js',
                        'src/js/controller.js',
                        'libs/jquery-2.0.2.min.js'                      
                    ]
            },
            options: {
                specs: [ 'specs/chaztodospec.js'
                ],
                keepRunner: true,
                outfile: 'SpecRunner.html'
            },
        },
        jshint: {
            files: ['Gruntfile.js', 
                    'src/**/*.js', 
                    'test/**/*.js', 
                    'specs/**/*.js']
        },
        todoapp: {
            template: 'src/todoapp.us',
            tests: {
                dest: 'app/todoapp.html',
                context: {
                    js: ['libs/angular.min.js',
                        'libs/angular-mocks.js',
                        'app/todoapp.js'],
                    css: 'app/todoapp.css'
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadTasks('custom-contrib'); 
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'todoapp:tests', 'jasmine','watch']);
};
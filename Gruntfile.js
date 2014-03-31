module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			js: {
				src: ['src/js/**/*.js'],
				dest: 'tests/todoapp.js'
			},
			css: {
				src: ['src/css/**/*.css'],
				dest: 'tests/todoapp.css'
			},  			
			options: {
    			separator:';'
  			}
		},
		jasmine: {
  			files: ['specs/**/*.js']
		},
		jshint: {
      		files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'specs/**/*.js']
      	},
		uglify: {
    		output: {
      			files: {
        			'tests/todoapp.min.js': ['src/**/*.js']
      			}
    		}
  		},
		watch: {
			files: ['<%= jshint.files %>'],
 			tasks: ['jshint', 'jasmine']
		},
		todoapp: {
			template: 'src/todoapp.us',
			tests: {
				dest: 'tests/todoapp.html',
				context: {
					js: 'tests/todoapp.js',
					css: 'tests/todoapp.css'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadTasks('custom-contrib');

	grunt.registerTask('default', ['concat', 'uglify', 'todoapp:tests', 'jasmine', 'watch']);
};
module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		//uglify
		uglify: {
			options: {
				mangle: false,
				compress: {
					drop_console: true
				}
			},
			js: {
				files: [{
					cwd: 'js/src/',
					expand: true,
					src: '*.js',
					dest: 'js/min/'
				}]
			}
		}
 });
 
 // loadNpmTasks
 grunt.loadNpmTasks('grunt-contrib-uglify');
 
 // Run Default task(s).
 grunt.registerTask('default', ['uglify']);
};
module.exports = function(grunt) {
	var _ = grunt.util._; //lodash

	grunt.registerTask("todoapp", "creates an html page for todoapp", function(target){
		var context, source, targetConfig, template;
		target = target || "dist";
		this.requiresConfig("todoapp.template");
		this.requiresConfig("todoapp." + target);
		template = grunt.config.get("todoapp.template");
		targetConfig = grunt.config.get("todoapp." + target);
		source = grunt.file.read(template);
		context = _(grunt.config.get()).extend(targetConfig.context);
		grunt.file.write(targetConfig.dest, _(source).template(context));
		grunt.log.writeln("todoapp html  '" + targetConfig.dest + "'");
	});
};
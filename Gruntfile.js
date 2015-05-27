module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./app/less"],
                    yuicompress: true
                },
                files: {
                    "./app/css/app.css": "./app/less/app.less"
                }
            }
        },
        watch: {
            files: "./app/less/**/*.less",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
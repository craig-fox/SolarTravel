module.exports = function(grunt){
    grunt.initConfig({
       jshint: {
           root: ['Gruntfile.js', 'app.js'],
           server: ['app_server/**/*.js']
       },

        watch: {
            js: {
                files: ['app_server/**/*.js'],
                tasks: ['jshint:server']
            },

            root: {
                files: ['Gruntfile.js', 'app.js'],
                tasks: ['jshint:root']
            }
        }
    });



    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};

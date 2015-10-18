module.exports = function(grunt) {
    'use strict';

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['build/xsound.dev.js', 'build/xsound-server-session-websocket.js', 'xsound-server-session-ws.js'],
            options: {
                jshintrc: true
            }
        },
        uglify: {
            target: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'build/xsound.js.map'
                },
                files: {
                    'build/xsound.min.js': ['build/xsound.js']
                }
            }
        },
        clean: ['build/*.min.js', 'build/*.map']
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Tasks
    grunt.registerTask('hint',  ['jshint']);
    grunt.registerTask('build', ['clean', 'uglify']);
};

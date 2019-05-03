module.exports = function (grunt) {
    'use strict'

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options: {
                banner: '/*\n * <%= pkg.name %>\n * https://github.com/canos-oss/angularjs-canos\n * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n * License: Apache-2.0\n */\n'
              },
              build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.version %>/<%= pkg.name %>.min.js'
              }  
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['uglify'])
}
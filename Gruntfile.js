/*
 * prangler
 * https://github.com/sulmanen/prangler
 *
 * Copyright (c) 2013 Samuli Ulmanen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    prangler: {
      test: {
        options: {
          ngApp: 'myApp',
          stripPathForTemplateId: ''
        },
        files: {
          'tmp/template.js': ['test/fixtures/name.html', 'test/fixtures/value.html']
        }
      },
      stripTest: {
        options: {
          ngApp: 'myApp',
          stripPathForTemplateId: '',
          stripFilenameExtension: true
        },
        files: {
          'tmp/templateStripped.js': ['test/fixtures/name.html', 'test/fixtures/value.html']
        }
      },
      filenameTest: {
        options: {
          ngApp: 'myApp',
          stripPathForTemplateId: '',
          stripFilenameExtension: false,
          filenameForTemplateId: true
        },
        files: {
          'tmp/templateFilename.js': ['test/fixtures/name.html', 'test/fixtures/value.html']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'prangler', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

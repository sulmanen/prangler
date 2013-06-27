/*
 * prangler
 * https://github.com/sulmanen/prangler
 *
 * Copyright (c) 2013 Samuli Ulmanen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('prangler', 'Collect html templates and views to $templateCache.', function() {
    var str = require('string');
    var templatePaths = [], targets = [], globs = [];
    var configTemplate = "angular.module('<%= ngApp %>').run(['$templateCache', function($templateCache) {<%= loadScripts %>}]);";
    var putTemplate = "$templateCache.put('<%= key %>', '<%= template %>');\n";
    

    grunt.config.requires('prangler');
    grunt.config.requires('prangler.options.ngApp');
    grunt.config.requires('prangler.files');
    
    grunt.log.subhead('Collect templates for ngApp ' + grunt.config('prangler.options.ngApp') + '\n');
    
    var filesConfig = grunt.config('prangler.files');

    for (var key in filesConfig) {
      targets.push(key);
      globs.push(filesConfig[key]);
    }

    templatePaths = grunt.file.expand(globs[0]); 
  
    var loadScripts = '';
    for (var path in templatePaths) {
        var temp = {
          key: templatePaths[path].replace(grunt.config('prangler.options.stripPathForTemplateId'),'').replace('\\', '/'),
          template: str(grunt.file.read(templatePaths[path])).collapseWhitespace().replace(/([^'\\]*(?:\\.[^'\\]*)*)'/g, "$1\\'")
        };
      grunt.log.writeln(temp.key);
      loadScripts = loadScripts + grunt.template.process(putTemplate, temp);
    }

    grunt.file.write(targets[0], grunt.template.process(configTemplate, {
      ngApp: grunt.config('prangler.options.ngApp'),
      loadScripts: loadScripts
    }));

    grunt.log.ok(targets[0] + ' has ' + templatePaths.length + ' templates.');
  });
};
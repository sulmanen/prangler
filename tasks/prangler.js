/*
 * prangler
 * https://github.com/sulmanen/prangler
 *
 * Copyright (c) 2013 Samuli Ulmanen
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('prangler', 'Collect html templates and views to AngularJS $templateCache.', function() {
        var configTemplate = "angular.module('<%= ngApp %>').run(['$templateCache', function($templateCache) {<%= generatedScript %>}]);";
        var putTemplate = "$templateCache.put('<%= key %>', <%= template %>);\n";

        var generateKey = function(options, path) {

        };

        var options = this.options({
            ngApp: 'app',
            stripPathForTemplateId: ''
        });

        grunt.log.subhead('Collect templates for AngularJS module \'' + options.ngApp + '\'\n');

        this.files.forEach(function(template) {
            var generatedScript = template.src.map(function(path) {
                var temp = {
                    key: path.replace(options.stripPathForTemplateId, '').replace('\\', '/'),
                    template: JSON.stringify(grunt.file.read(path))
                };
                grunt.log.writeln(temp.key);
                return grunt.template.process(putTemplate, {
                    data: temp
                });
            }).join('');

            grunt.file.write(template.dest, grunt.template.process(configTemplate, {
                data: {
                    ngApp: options.ngApp,
                    generatedScript: generatedScript
                }
            }));

            grunt.log.ok(template.dest + ' has ' + template.src.length + ' templates.');
        });

    });
};

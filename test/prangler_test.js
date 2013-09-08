'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.prangler = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  defaultOptions: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/template.js');
    var expected = grunt.file.read('test/expected/template.js');

    test.equal(actual, expected, 'adds name.html and value.html to $templateCache.');

    test.done();
  },
  removeFileExtension: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/templateStripped.js');
    var expected = grunt.file.read('test/expected/templateNoExtension.js');

    test.equal(actual, expected, 'adds name and value to $templateCache.');
    test.done();
  },
  fileNameForTemplateId: function (test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/templateFilename.js');
    var expected = grunt.file.read('test/expected/templateFilename.js');

    test.equal(actual, expected, 'adds name and value with filename for id to $templateCache.');
    test.done();
  }
};

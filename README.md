# prangler

> AngularJS template preloader. Load your html partials with your scripts.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install prangler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('prangler');
```

## The "prangler" task

### Overview
In your project's Gruntfile, add a section named `prangler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  prangler: {
    options: {
      ngApp: 'myApp', // name of your angular module
      stripPathForTemplateId: 'src' // will remove src from the $templcateCache key  
    },
    files: {
      'dest/template.js': ['src/templates/*.html],
    }
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
Add templates to dest/templates.js from src/template/*.html. Whitespace will be removed from the html partials.

```js
grunt.initConfig({
  prangler: {
    options: {
      ngApp: 'myApp',
      stripPathForTemplateId: ''
    },
    files: {
      'dest/template.js': ['src/templates/*.html],
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Pack html partials to $templateCache and automatically strip whitespace.

# prangler

> AngularJS template preloader. Load your html partials with your scripts. Reduce http requests, improve load time for views and directives with templates.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install prangler --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-prangler');
```

## The "prangler" task

### Overview
In your project's Gruntfile, add a section named `prangler` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  prangler: {
    default: {
      options: {
        ngApp: 'myApp', // name of your angular module
        stripPathForTemplateId: 'src' // will remove src from the $templcateCache key  
      },
      files: {
        'dest/template.js': ['src/templates/*.html'],
      }
    }
  },
})
```

### Options

#### options.ngApp
Type: `String`
Default value: `',  '`

Name of your AngularJS module.

#### options.stripPathForTemplateId
Type: `String`
Default value: `''`

Remove this String from beginning of template uris when store in AngularJS $templateCache.

If html partial is in src/templates/ and stripPathForTemplateId is set to 'src', the template will be stored to AngularJS $templateCache with key/uri templates/my-template.html

### Usage Examples

#### Default Options
Add templates to dest/templates.js from src/template/*.html. Whitespace will be removed from the html partials.

```js
grunt.initConfig({
  prangler: {
    default: {
      options: {
        ngApp: 'myApp',
        stripPathForTemplateId: ''
      },
      files: {
        'dest/template.js': ['src/templates/*.html'],
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.0.1 Pack html partials to $templateCache and automatically strip whitespace.  
0.0.2 Rename plugin and task to grunt-angular-prangler for better visibility  
0.0.3 Reverted to old name "prangler" as the actual task name.  
0.1.0 Grunt files support.

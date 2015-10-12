module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uncss: {
      dist: {
        src: ['email.html'],
        dest: 'dist/css/tidy.css',
        options: {
          report: 'min' // optional: include to report savings
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/email.html': ['email.html']
        }
      }
    },
    premailer: {
      main: {
        options: {
          verbose: true
        },
        files: {
          'dist/email-inline.html': ['dist/email.html']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-premailer');

  // Default task(s).
  grunt.registerTask('email', ['uncss', 'processhtml', 'premailer']);

};
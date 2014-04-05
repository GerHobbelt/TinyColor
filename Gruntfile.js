
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '// TinyTinyColor v<%= pkg.version %>\n' +
        '// https://github.com/autopulated/TinyTinyColor\n' +
        '// 2013-08-10, Brian Grinstead, Brian Grinstead, MIT License\n' +
        '// <%= grunt.template.today("yyyy-mm-dd") %>, James Crosby, MIT License\n'+
        '//'+
        '// Like TinyColor, but even smaller (who uses named colours anyway)'
    },

    uglify: {
      options: {
        mangle: false,
        banner: '<%= meta.banner %>'
      },
      dist: {
        files: {
          'dist/tinytinycolor-min.js': ['tinytinycolor.js']
        }
      }
    },

    qunit: {
      all: ['test/index.html']
    },


    jshint: {
      options: {
        browser: true,
        sub: true,
        globals: {
          jQuery: true
        }
      },
      all: ['tinytinycolor.js']
    },

    docco: {
      debug: {
        src: ['tinytinycolor.js'],
        options: {
          output: 'docs/'
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-docco');

  grunt.registerTask('default', ['jshint', 'qunit']);
  grunt.registerTask('build', ['jshint', 'qunit', 'uglify', 'docco']);

};

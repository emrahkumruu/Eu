module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            scripts: {
                src: ['assets/scripts/**/*.js','bower_components/jquery/dist/jquery.js'],
                dest: 'web/js/output.js',
            },
            styles: {
                src: ['assets/styles/**/*.css'],
                dest: 'web/css/output.css',
            },
        },
        watch: {
            scripts: {
                files: ['assets/**/*.js'],
                tasks: ['concat:scripts']
 
            },
            styles: {
                files: ['assets/**/*.css'],
                tasks: ['concat:styles',"cssmin"]
            },
        },
        cssmin: {
            target: {
                files: [{
                expand: true,
                cwd: 'web/css',
                src: ['*.css', '!*.min.css'],
                dest: 'web/css',
                ext: '.min.css'
                }]
            }
        },
     'jsmin-sourcemap': {
            all: {
                src: ['web/js/*.js'],
                dest: 'web/js/output.min.js',
                destMap: 'web/js/output.js.map'        
        }
     },
     sass: {
        dist: {
            files: [{
                expand: true,
                cwd: 'bower_components/bootstrap-sass/assets/stylesheets',
                src: ['**/*.scss'],
                dest: 'assets/styles',
                ext: '.css'
            }]
        }
    } 
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ["sass", 'concat', "cssmin", "jsmin-sourcemap", "watch"]);

};
/**
 * Created by Administrator on 2015/12/15 0015.
 */
var gulp = require('gulp');

/* using compass to compile sass files and output a minify css */
gulp.task('css', function(){
    var compass = require('gulp-compass');
    var minifyCSS = require('gulp-minify-css');

    var compile = function(){
        gulp.src('./public/sass/*.scss')
            .pipe(compass({
                css: './public/stylesheets',
                sass: './public/sass',
                image: './public/images',
                style: 'nested'
            }))
            //.pipe(minifyCSS())
            //.pipe(gulp.dest('./build'));

        console.log('create css done.');
    }
    compile();
    //gulp.watch('./sass/**/*.scss', compile);
});

gulp.task('js', function(){
    var webpack = require('webpack');
    // returns a Compiler instance
    var compiler = webpack({
        entry: {
            "app": "./public/src/app.js",
            "babel-app": "./public/src/babel-app.js"
        },
        output: {
            path: './public/javascripts',
            filename: "[name].js"
        },
        module: {
            loaders: [
                { test: /\.js$/, loader: "babel", query: {presets:['es2015']}}
            ]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            })
        ]
        /*,
        plugins: [ new webpack.optimize.CommonsChunkPlugin("init.js") ]*/
    });

    /*compiler.run(function(err, stats) {
        if (err) {
            console.log(err)
        }
     console.log('create js done.');
     });*/

    // or
    compiler.watch({ // watch options:
        aggregateTimeout: 300, // wait so long for more changes
        poll: true // use polling instead of native watchers
        // pass a number to set the polling interval
    }, function(err, stats) {
        console.log('create js done. ' + new Date());
    });

});

gulp.task('rev', function(){
    var RevAll = require('gulp-rev-all');
    var revAll = new RevAll({dontRenameFile: [/^\/favicon.ico$/g, '.html']});
    gulp.src('./public/**')
        .pipe(revAll.revision())
        .pipe(gulp.dest('cdn'))
        .pipe(revAll.manifestFile())
        .pipe(gulp.dest('cdn'));
})

gulp.task('babel', function(){
    var babel = require('gulp-babel');
    gulp.src('./public/src/babel-app.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(gulp.dest('./build'))
})
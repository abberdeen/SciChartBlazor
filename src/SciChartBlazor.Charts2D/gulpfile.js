/// <binding BeforeBuild='develop' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel = require('rollup-plugin-babel')
var rollup = require('gulp-better-rollup')

var destPath = './wwwroot/Interop/tmp';

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(['./wwwroot/Interop/**/*'], { allowEmpty: true })
        .pipe(gulp.dest('./wwwroot/Interop'))
        .pipe(clean());
});

// Delete the dist directory
gulp.task('clean_tmp', function () {
    return gulp.src(['./wwwroot/Interop/tmp/**/*/'], { allowEmpty: true })
        .pipe(clean());
});

var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts', function (done) {
    var tsResult = gulp.src(["Interop/**/*.ts"])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());

    return tsResult.js
        .pipe(gulp.dest(destPath));
});


gulp.task('bundle_separate', function () {
    return gulp.src('./wwwroot/Interop/tmp/**/*.js')
        .pipe(rollup({
            // There is no `input` option as rollup integrates into the gulp pipeline
            plugins: [babel()]
        }, {
            // Rollups `sourcemap` option is unsupported. Use `gulp-sourcemaps` plugin instead
            format: 'es',
        }))
        .pipe(uglify())

        // inlining the sourcemap into the exported .js file
        .pipe(gulp.dest('./wwwroot/'))
});


gulp.task('bundle', function () {
    return gulp.src('./wwwroot/Interop/tmp/**/*.js')
        .pipe(rollup({
            // There is no `input` option as rollup integrates into the gulp pipeline
            plugins: [babel()]
        }, {
            // Rollups `sourcemap` option is unsupported. Use `gulp-sourcemaps` plugin instead
            format: 'es',
        }))
        .pipe(uglify())
        // inlining the sourcemap into the exported .js file
        .pipe(gulp.dest('./wwwroot/'))
});


gulp.task('move', function () {
    return gulp.src(['./wwwroot/Interop/Index.js'])
        .pipe(concat('scichartblazor-chart2d.min.js'))
        .pipe(gulp.dest('./wwwroot/'));
});

gulp.task('develop', gulp.series('clean', 'ts', 'bundle', 'move', 'clean_tmp', 'clean'));

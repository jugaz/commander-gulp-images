#!/usr/bin/env node

'use strict';

var
    debug = require('gulp-debug'),
    extReplace = require("gulp-ext-replace"),
    gulp = gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageminWep = require('imagemin-webp'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    program = require('commander'),
    rimraf = require('rimraf'),
    util = require('gulp-util');



/* ####################### OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program

    .version(
        'commander-gulp-images version: ' + require('../package.json').version + '\n'
    )
    .option('-m, --mkdirp <path>', 'create folder', createFolder)
    .option('-r, --rimraf <path>', 'delete folder', deleteFolder)


/* ######################## CREATE FOLDERS ######################## */
function createFolder(dir) {
    mkdirp(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}


/* ######################## DELETE FOLDERS ######################## */
function deleteFolder(dir) {
    rimraf(dir, function (err) {
        if (err) {
            console.error(err)
        } else {
            console.log(dir)
        }
    })
}

/* ######################## COMMANDER IMAGES ######################## */
/*  node ./bin/images.js images 'test/images/*.png' 'test/images/*.jpg' --im 'build/images'*/
program
    .command('images <input>')
    .option("--im [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.im;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "png") {
                return index;
            } else if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "jpg") {
                return index;
            } else if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "jpeg") {
                return index;
            }

        });


        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-images:'
            }))
            .pipe(imagemin({
                progressive: true,
                verbose: true
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(gulp.dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });

    })

/* ######################## COMMANDER SVG ######################## */
/*  node ./bin/images.js svg 'frontend/static/images/*.svg' 'frontend/static/images//*.svg' --sv 'build/images'*/
program
    .command('svg <input>')
    .option("--sv [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.sv;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "svg") {
                return index;
            }

        });


        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-images:'
            }))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(gulp.dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });
    })

/* ######################## COMMANDER WEB ######################## */
/*  node ./bin/images.js webp 'build/images/*.png' 'build/images/*.jpg' --wb 'build/images'*/
program
    .command('webp <input>')
    .option("--wb [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.wb;
        input = input.filter(function (index, value) {
            if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "png") {
                return index;
            } else if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "jpg") {
                return index;
            } else if (index.slice((index.lastIndexOf(".") - 1 >>> 0) + 2) == "jpeg") {
                return index;
            }

        });


        return gulp.src(input)
            .pipe(debug({
                title: 'commader-gulp-images:'
            }))
            .pipe(imagemin([imageminWep()]))
            .on('error', function (error) {
                // tenemos un error 
                util.log("Error Name:", error.name);
                util.log("Error Code:", error.code);
                util.log("Error Filename:", error.filename);
                util.log("Error Line:", error.line);
                util.log("Error Column:", error.column);
                util.log("Error Msg", error.Msg);


            })
            .pipe(extReplace(".webp"))
            .pipe(gulp.dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });

    })

program.parse(process.argv);
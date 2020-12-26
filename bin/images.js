#!/usr/bin/env node

'use strict';

var
    debug = require('gulp-debug'),
    extReplace = require("gulp-ext-replace"),
    imagemin = require('gulp-imagemin'),
    imageminWep = require('imagemin-webp'),
    program = require('commander'),
    path = require('path'),
    util = require('gulp-util'),
    { src, dest, series, parallel } = require("gulp");



/* ####################### OPTIONS ######################## */
var options = {};


/* ######################## VERSION ######################## */
program

    .version(
        'commander-gulp-images version: ' + require('../package.json').version + '\n'
    )

/* ######################## COMMANDER IMAGES ######################## */
/*  node ./bin/images.js images 'test/images/*.png' 'test/images/*.jpg' --im 'build/images'*/
program
    .command('images <input>')
    .option("--im [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.im;
        function error(){
            util.log("El o los archivos no son 'imagenes'")
            util.log("El o los archivos correctos es: '.png,.jpg o .jpeg'")
        }
        input = input.filter(function (index, value) {
            if (path.extname(index) == ".png" || path.extname(index) == ".jpg" || path.extname(index) == ".jpeg") {
                return index;
            } else if (path.extname(index) != ".png" || path.extname(index) != ".jpg" || path.extname(index) != ".jpeg") {
                return error()
            }

        });


        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-images:'
            }))
            .pipe(imagemin({
                progressive: false,
                verbose: false,
                optimizationLevel:false
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
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });

    })


program
    .command('prod:images <input>')
    .option("--im [options]")
    .action((input, options) => {
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.im;
        var input = options.input || options.parent.rawArgs;
        var ouput = options.ouput || options.im;
        function error(){
            util.log("ERROR: No es extisión válida")
            util.log("ERROR: La extisión válida debe ser: '.png.,jpg o jpeg'")
        }
        input = input.filter(function (index, value) {
            if (path.extname(index) == ".png" || path.extname(index) == ".jpg" || path.extname(index) == ".jpeg") {
                return index;
            } else if (path.extname(index) != ".png" || path.extname(index) != ".jpg" || path.extname(index) != ".jpeg") {
                return error()
            }

        });
        return src(input, { allowEmpty: true })
            .pipe(debug({
                title: 'commader-gulp-images production:'
            }))
            .pipe(imagemin({
                progressive: true,
                verbose: true,
                optimizationLevel:true
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
            .pipe(dest(ouput))
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
        function error(){
            util.log("ERROR: No es extisión válida")
            util.log("ERROR: La extisión válida debe ser: '.png.,jpg o jpeg'")
        }
        input = input.filter(function (index, value) {
            if (path.extname(index) == ".png" || path.extname(index) == ".jpg" || path.extname(index) == ".jpeg") {
                return index;
            } else if (path.extname(index) != ".png" || path.extname(index) != ".jpg" || path.extname(index) != ".jpeg") {
                return error()
           }
        });

        return src(input, { allowEmpty: true })
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
            .pipe(dest(ouput))
            .on('end', function () {
                util.log('Done!');
            });
    })

program.parse(process.argv);
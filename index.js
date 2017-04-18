'use strict';
/**
 * Status Bot
 * @author https://github.com/austbot
 */
var async = require('async');
var gpio = require('rpi-gpio');

async.parallel([
    function (callback) {
        gpio.setup(4, gpio.DIR_OUT, callback)
    },
    function (callback) {
        gpio.setup(18, gpio.DIR_OUT, callback)
    },
    function (callback) {
        gpio.setup(16, gpio.DIR_OUT, callback)
    }
], function (err, results) {

    delayedWrite()

});

function delayedWrite(pin, value, callback) {
    setTimeout(function () {
        gpio.write(pin, value, callback);
    }, 500);
}

process.on('exit', function () {
    gpio.destroy(function () {
        console.log('Closed pins, now exit');
        process.exit(1);
    });
});
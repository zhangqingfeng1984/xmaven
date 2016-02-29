'use strict';

var Calculator = function Calculator() {};

Calculator.prototype = {
    parse: function parse(exp) {
        this.expression = exp;
    },
    calc: function calc() {
        [1, 2, 3].forEach(function (x) {
            console.log(x);
        });
    }
};

var Helper = require('./helper');
new Helper('sam').exec();
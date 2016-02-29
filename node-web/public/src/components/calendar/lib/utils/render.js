'use strict';

/**
 * Created by Administrator on 2015/12/18 0018.
 */
var newElement = require('./helper').newElement;

function ConsoleRender() {
    var days = this.days;
    var arr = [];
    var WEEK_LABELS = [, '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    arr.push(WEEK_LABELS);
    var line; //store 7 days
    for (var j = 0; j < days.length; j++) {
        if (j % 7 == 0) {
            line = new Array(7);
            arr.push(line);
        }
        line[j % 7] = days[j].getDate();
    }

    arr.forEach(function (line) {
        console.log(line.join(' '));
    });
}

function DomRender() {
    var self = this;
    var days = this.days;
    var arr = [];
    var WEEK_LABELS = [, '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    arr.push(WEEK_LABELS);
    var line; //store 7 days
    for (var j = 0; j < days.length; j++) {
        if (j % 7 == 0) {
            line = new Array(7);
            arr.push(line);
        }
        line[j % 7] = days[j];
    }

    var header = this.createCalendarHeader(self);
    var body = this.createCalendarBody(self, arr);
    var footer = this.createCalendarFooter();

    var wrapper = this.wrapper = newElement('div');
    wrapper.className = 'calendar-wrapper';
    wrapper.appendChild(header);
    wrapper.appendChild(body);
    wrapper.appendChild(footer);

    this.element.appendChild(wrapper);
}

//module.exports = {ConsoleRender:ConsoleRender, DomRender:DomRender};
module.exports = { ConsoleRender: ConsoleRender, DomRender: DomRender };
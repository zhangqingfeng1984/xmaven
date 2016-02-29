var {isFunction, newElement, addEventListener} = require('./utils/helper');
var {ConsoleRender,DomRender} = require('./utils/render');

/*
var isFunction = require('../utils/helper').isFunction;
var newElement = require('../utils/helper').newElement;
var ConsoleRender = require('../utils/render').ConsoleRender;
var DomRender = require('../utils/render').DomRender;
*/

function Calendar(elementId, options){
    this.year = null;
    this.month = null;
    this.day = null;
    this.element = null;
    this.options = options || {};
    if (elementId){
        this.element = document.getElementById(elementId);
    }
    this.days = new Array(42); // grid of 7*6 contains all dates
    this.build();
    this.render();
}

Calendar.prototype = {
    constructor: Calendar,

    build: function(){
        var self = this;
        var days = self.days;
        var currDate;
        if (self.year != null && self.month != null && self.day != null) {
            currDate = new Date(self.year, self.month, self.day);
        }else{
            currDate = new Date();
            self.year = currDate.getFullYear();
            self.month = currDate.getMonth();
            self.day = currDate.getDate();
        }
        var firstDateOfMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 1);
        var diff = firstDateOfMonth.getDay();
        var start = new Date(firstDateOfMonth.setDate(firstDateOfMonth.getDate() - diff));
        for (var i= 0, d = start; i<days.length; i++){
            days[i] = new Date(d.getTime());
            d.setDate(d.getDate()+1);
        }
    },

    createCalendarBody: function (self, arr) {
        var table = newElement('table');
        table.className = 'calendar';
        self.main = table;

        //thead
        var thead = newElement('thead');
        var tr = newElement('tr');
        var labels = arr[0];
        labels.forEach(function (weekLabel) {
            var th = newElement('th');
            var div = newElement('div');
            div.innerHTML = weekLabel;
            th.appendChild(div);
            tr.appendChild(th);
        })
        thead.appendChild(tr);
        table.appendChild(thead);

        //tbody
        var tbody = newElement('tbody');
        for (var i = 1; i < arr.length; i++) {
            var tr = newElement('tr');
            var line = arr[i];
            line.forEach(function (dateObj) {
                var str = dateObj.getDate();
                var td = newElement('td');
                var div = newElement('div', str);
                if (dateObj.getMonth() != self.month) {
                    div.className = 'disabled-date';
                } else {
                    div.className = 'cell';
                }
                if (dateObj.getDate() == self.day) {
                    //div.classList.add('today')
                    div.className = "cell today";
                }
                div.title = [dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate()];

                if (isFunction(self.options.onSelect)) {
                    addEventListener(div, 'click', function () {
                        var d = new Date(dateObj.getTime());
                        self.options.onSelect.apply(self, [d, self]);
                    });
                }
                td.appendChild(div);
                tr.appendChild(td);
            })
            tbody.appendChild(tr)
        }
        table.appendChild(tbody);
        return table;
    },

    createCalendarHeader: function (calendar) {
        var calendar = this;
        var header = newElement('div');
        var label = newElement('div', [calendar.year, calendar.month].join('/'));
        header.className = 'calendar-header';
        header.appendChild(label);
        return header;
    },

    createCalendarFooter: function(){
        var calendar = this;
        var footer = newElement('div');
        footer.className = 'calendar-footer';
        var prevButton = newElement('button');
        prevButton.innerText = '<<';
        addEventListener(prevButton, 'click', function(){
            calendar.prevMonth();
        });
        footer.appendChild(prevButton);

        var nextButton = newElement('button');
        nextButton.innerText = '>>';
        addEventListener(nextButton, 'click', function(){
            calendar.nextMonth();
        });
        footer.appendChild(nextButton);

        return footer;
    },

    render: function(){
        if (process.browser){ // running in web browser
            DomRender.call(this);
        }else{ //running in nodejs
            ConsoleRender.call(this);
        }
    },

    refresh: function(){
        this.destroy();
        this.build();
        this.render();
    },

    destroy: function(){ //distory calendar table element and recreate one.
        if (process.browser) {
            var main = this.wrapper;
            this.element.removeChild(main);
        }
    },

    nextMonth: function(){
        var date = new Date(this.year, this.month, this.day);
        date.setMonth(date.getMonth()+1);
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.refresh();
    },

    prevMonth: function(){
        var date = new Date(this.year, this.month, this.day);
        date.setMonth(date.getMonth()-1);
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
        this.refresh();
    },

    toString: function(){
        var yyyyMMdd = [this.year, this.month+1, this.day];
        return yyyyMMdd.join(',');
    }
}

module.exports = Calendar;
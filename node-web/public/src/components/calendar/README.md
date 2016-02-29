# calendar that can be used in both browser and nodejs
npm install calendar-sam --save-dev

var Calendar = require('calendar-sam')
var obj = new Calendar(null,{});
obj.prevMonth();
obj.nextMonth();
/*require('es5-shim');
require('es5-shim/es5-sham');
require('es6-shim');*/

require('es5-shim');

var Calendar = require('./components/calendar');
new Calendar('myCalendar', {
  onSelect: function(date){
    console.log(date)
  }
});

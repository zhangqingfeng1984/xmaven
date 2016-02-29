/**
 * Created by Administrator on 2015/12/17 0017.
 */
var Calendar = require('./index');

var instance = new Calendar(null, {});
console.log(instance.toString());

instance.nextMonth();
console.log(instance.toString());

instance.nextMonth();
console.log(instance.toString());

instance.prevMonth();
console.log(instance.toString());
require('es5-shim');
require('es5-shim/es5-sham');

 /*require('es6-shim');*/

function sam(msg){
    return `hello ${msg}`
}
var obj = {
    greeting(){
        console.log('person greeting')
    }
}
function Person(){
    this.name = 'sam';
}
Person.prototype = {
    eat: function(){
        setTimeout(()=>{console.log(this.name)}, 1000)
    }
}

require('../external-js/one')
one();

var Calculator = function(){

}

Calculator.prototype = {
    parse(exp){
        this.expression = exp;
    },
    calc(){
       [1,2,3].forEach(x=>{console.log(x)})
    }
}

var Helper = require('./helper');
new Helper('sam').exec();
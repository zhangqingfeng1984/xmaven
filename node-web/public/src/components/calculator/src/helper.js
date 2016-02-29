/**
 * Created by Administrator on 2015/12/18 0018.
 */
var EventEmitter = require('events');

class Helper extends EventEmitter{
    constructor(name){
        super(name);
        this.name = name;
    }
    exec(){
        console.log(this.name);
        this.emit('ok', 200);
    }
}

var obj = new Helper('sam');
obj.on('ok', (data)=>{
    console.log(data)
});
obj.exec();

module.exports = Helper;
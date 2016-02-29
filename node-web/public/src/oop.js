function extend(proto, options){
    if (!Object.create){
        var regex = /function (\w*)\s*\(\)\s*\{([\r|\n]?.*)*\}.*/;
        var name = options.constructor.toString().replace(regex, '$1');

        var empty = new Function('return function $name(){}'.replace('$name', name))();
        empty.prototype = proto;
        var o = new empty();
        for (var p in options){
            o[p] = options[p]
        }
        o.$parent = proto;
        return o;
    }else{
        var result = Object.create(proto);
        for (var p in options){
            if (options.hasOwnProperty(p)){
                result[p] = options[p];
            }
        }
        result.$parent = proto;
        return result;
    }
}

function Class(){}

Class.prototype = extend(Object.prototype, {
    constructor: Class,
    _super: function(){
        var methodName = null;
        for (p in this){
            if (this[p] === arguments.callee.caller){
                methodName = p;
                break;
            }
        }
        var fn = this.$parent[methodName];
        if (typeof fn === 'function'){
            fn.apply(this, arguments)
        }

    }
});

var ClassA = function ClassA(){
    this.a = 0;
}
ClassA.prototype = extend(Class.prototype, {
    methodA: function(n){
        this.a = n;
        console.log('ClassA methodA called');
        this._super();
    }
});
ClassA.prototype.constructor = ClassA;

var ClassB = function (){
    ClassA.apply(this, arguments)
    this.b = 2;
}
ClassB.prototype = extend(ClassA.prototype, {
    constructor: ClassB,
    methodA: function(){
        console.log('ClassB methodA');
        this._super(6);
    },
    methodB: function(){
        console.log('ClassB methodB called')
    }
})
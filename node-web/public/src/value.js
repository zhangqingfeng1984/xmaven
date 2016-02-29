

// var a = 1;
// console.log('app start');

// (function(){
// 	a = 2;
// 	console.log('hi');
// })();

// console.log('app end a:'+a);


(function(root, factory){
	console.log(typeof exports)
	console.log(typeof module.exports)
	console.log(module.exports === exports);
	if (typeof define === 'function' && define.amd){ //AMD
		console.log('AMD');
		define(factory);
	}else if (typeof module === 'object'){ //nodejs
		console.log('COMMON JS');
		module.exports = factory(require, module, module.exports);
	}else{
		console.log('haha');
		module.exports = factory(require, module, module.exports);
	}
})(this, function(require, module, exports){
	console.log('start2');
	return {
			now: new Date()
		};
})


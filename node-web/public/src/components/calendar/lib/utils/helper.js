'use strict';

/**
 * Created by Administrator on 2015/12/17 0017.
 */

function isFunction(obj) {
    return typeof obj === 'function';
}

function newElement(tagName, text) {
    var node = document.createElement(tagName);
    if (text) {
        node.innerHTML = text;
    }
    return node;
}

function addEventListener(element, eventName, callback) {
    if (element.addEventListener) {
        element.addEventListener(eventName, callback);
    } else {
        element.attachEvent(eventName, callback);
    }
}
//module.exports = {isFunction: isFunction, newElement:newElement};
module.exports = { isFunction: isFunction, newElement: newElement, addEventListener: addEventListener };
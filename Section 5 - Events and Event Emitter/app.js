'use strict';

var a = 1;
var b = 2;
var c = a + b;

console.log(c);

var Emitter = require('events');
var config = require('./config').events;
var emitter_object1 = new Emitter();

emitter_object1.on(config.GREET,function(){
    console.log('Somewhere, someone said hello.');
});

emitter_object1.on(config.GREET,function(){
    console.log('A greeting occurred!');
});

emitter_object1.on(config.NOT_GREET,function(){
    console.log('Something else happened');
});

console.log('Hello!');
emitter_object1.emit(config.GREEn);
emitter_object1.emit(config.NOT_GREET);


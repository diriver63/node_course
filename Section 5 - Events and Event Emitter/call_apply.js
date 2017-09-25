var obj = {
    name : 'Jhon Doe',
    greet : function(parameter1,parameter2){
        console.log(`Hello ${this.name} with ${parameter1} and ${parameter2}`);
    }
}

obj.greet('rivera','polanco');
obj.greet.call({name:'Diego'}, 'rivera', 'polanco');
obj.greet.apply({name:'Diego'}, ['rivera','polanco']);
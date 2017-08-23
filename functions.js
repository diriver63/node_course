// Function statement/Function definition.. same as C
function greet(){
    console.log('hi');
}
greet();

//can call function as parameteres of functions
//This is called first class
//As in C, input parameters of a function must be declared upon function definition
function loggreeting(fn){
   fn();
}
loggreeting(greet);// So this is similar and different than C, treat function as variable, so no parenthesis when added as parameter input

// Function expression
// Can assign a function to a variable, or define a function while declaring a variable
var greetme = function(){
    console.log('hi');
}
greetme();//This is a varible, using parenthesis to execute function

loggreeting(greetme);//Passing a parameter to function loggreeting, but this time the paremeter is a variable

//Declaring a function on the fly, as the new function is invoked inside of a function
loggreeting(function(){
    console.log('hi');
})
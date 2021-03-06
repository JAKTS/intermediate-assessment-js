// #1  ###################
// # Scope
// Given the following function
// ```
// function grandpa(){
//     var playball = "homerun";

//     function dad(){
//         var playball = "touchdown";

//         function son(){
//             var playnintendo = "Mario";
//         }
//     }

//     function uncle(){
//         var badjoke = "Har";

//         function cousin(){

//         }
//     }
// }
// ```

// Remove entries from the array until only correct answers remain

// These function(s) access the playball variable and get homerun
var scopeArray1 = ["grandpa", "uncle", "cousin"];
// These function(s) access the playball variable and get touchdown
var scopeArray2 = ["dad", "son"];

// These function(s) access the badjoke variable and get undefined
var scopeArray3 = ["grandpa", "dad", "son"];

// These functions accesss the badjoke variable and get "Har"
var scopeArray4 = ["uncle", "cousin"];

// These functions access the playnintendo variable and get Mario
var scopeArray5 = ["son"];


// #2  ###################
// # Promises
var foo;
/* Write a function called async.
  Use $q to create a promise object and return the promise.
  Call setTimeout on a function
  which changes the variable foo (above) to 'bar'
  And resolve the promise when setTimeout completes.
*/

function async(thing){
  return $q(function(resolve){
    setTimeout(function() {
      resolve(foo = 'bar');
    }, 1000);

  });
}


// #3  ###################
// # Context 1
// Write a function called context1 that takes in 4 parameters: A function called myFn, an object called context, param1, and param2.
// Invoke myFn explicitly setting the context to the object called context.  Pass in param1 and param2 in order as well.

function context1(myFn, context, param1, param2){
    this.context = myFn.call(context, param1, param2);
    return this.context;

}



// #4  ###################
// # Context 2
// Write a function called context2 that takes in 3 parameters: A function called myFn, an object called context, and an array called params
// Invoke myFn explicitly setting the context to the object called context.  Pass in params

function context2(myFn, context,params){
  this.context = myFn.apply(context, params);
  return this.context;

}


// #5  ###################
// # Context 3
// Write a function called context3 that takes in 2 parameters: A function called myFn, and an object called context
// Make sure the function is permanently linked to the context.  This should give you a new function, return it.
function context3(myFn, context){
  this.context = myFn.bind(context);
  return this.context;
}


// #6  ###################
// # Constructor Function
// Make a constructor function called taco that takes in 3 parameters: shell, meat, veggies and assigns them to identically named properties.

function Taco(shell, meat, veggies){
  this.shell = shell;
  this.meat = meat;
  this.veggies = veggies;

}


// #7  ###################
// # Implicit binding
// Make a constructor function called burrito.  It has a property called percentLeft = 100.  It has a property called eat that is a function.  When eat is invoked it uses context to implicitly subract 25 from the percentLeft on the burrito.
function Burrito(percentLeft, eat){
  this.precentLeft = 100;
  this.eat = function(){
    
  }
  }




// #8  ###################
// # Prototype 1
// Add prototype function to the array type that doubles the value of every item in the array
Array.prototype.doubler = function (arr) {
  this.arr = [];
  for(var i = 0; i < arr.length; i++)
  {
    arr.push(arr[i]*2);
  }
  return arr;
};



// #9  ###################
// # Prototype 2
// Write a constructor function called chimichanga.  It has a property called percentLeft = 100.  It has a prototype function called eat.  When eat is invoked it uses context to implicitly subract 20 from the precentLeft on the chimichanga.

function Chimichanga(){

}


// #10  ###################
// # Closure 1
// Write a function called sentence machine.  It takes in a parameter called partOne.  It returns a function called sentenceSmasher.
// When sentenceSmasher is invoked it should take in a parameter called partTwo and return a new string that adds partOne and partTwo together.
function sentenceMachine(partOne){
  return function sentenceSmasher(partTwo){
    combo = partOne + partTwo;
    return combo;
  }
}


// #11  ###################
// # Closure 2
// Write a function called subway.  It takes in one parameter called personName.
// It needs to keep track of what ingredients the person wants on their sandwhich.
// It needs to do this by returning a function called addIngredient.
// When addIngredient is invoked it saves that ingredient with previously added ingredients and then returns an object that looks like this (Replace the parts wrapped in <> with correct data):
// ```
// {
//     orderPerson: <Person name goes here>,
//     ingredients: <Array of ingredients goes here>
// }
// ```
function subway(personName){
  // return addIngredient(item){
  //   orderPerson: this.personName,
  //   ingredients: [this.item]
  // };
}


// #12  ###################
// # Type checking
// Write a function that takes in 2 parameters.
// If both parameters are the same type an the same value return "Exact match".
// If both parameters have the same value but are different types return "Different types"
// Otherwise return "Different values"

 function compareValues(param1, param2){
    if(typeof param1 === typeof param2){
      return "Exact match";
    } else if (param1 == param2){
      return "Different types";
    } else {
      return "Different values";
    }
}

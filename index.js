//review of the lab

//test 1
//The receivesAFunction function should take a callback function as an argument and call the callback function
function receivesAFunction(callback) {
    callback();
  }
  

//test 2 
//The returnsANamedFunction function should take no arguments and return a named function
  function returnsANamedFunction() {
    return function named() {
      console.log("i hope this works");
    }
  }
  

// test 3 
//The returnsAnAnonymousFunction function should take no arguments and return an anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log('anonymous');
    }
  }
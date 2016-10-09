//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  var inputArray = input.split("");

  if (input.replace(/\s+/g, '') === "") {
    return 'Fine. Be that way!'   
  }
  //if shouting and not all numbers
  else if (input === input.toUpperCase() && /[A-Z]/.test(input) ){
    return 'Whoa, chill out!';
  }
  //questions
  else if (inputArray[inputArray.length-1] === "?") {
    return 'Sure.'
  }
  else {
    return 'Whatever.'
  }

};

module.exports = Bob;

var Hamming = function() {};

Hamming.prototype.compute = function(string1, string2) {

  var count = 0;

  string1Array = string1.split("");
  string2Array = string2.split("");

  if (string1Array.length === string2Array.length){
    for (var i = 0; i < string1Array.length; i++) {

      if (string1Array[i] != string2Array[i]) {
        count ++;
      }
      
    }

    return count;
  }

  else {
    throw  new Error('DNA strands must be of equal length.')
  }

}

module.exports = Hamming;



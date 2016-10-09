var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna){

  var dna = dna.split("");
  var rna = "";

  for (var i = 0; i < dna.length; i++) {
    switch(true) {
        case dna[i] === "C":
            rna += "G";
            break;
        case dna[i] === "G":
            rna += "C";
            break;
        case dna[i] === "T":
            rna += "A";
            break;
        case dna[i] === "A":
            rna += "U";
            break;
    }
  }

  return rna;
}

module.exports = DnaTranscriber;
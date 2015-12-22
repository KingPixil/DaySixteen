//Rules of Pig Latin:
// IF word begins with consonant, move the consonant to the end of the word and add the suffix "ay".
// e.g. "duck" --> "uckday"
// IF word begins with a vowel, just add the suffix "yay".
// e.g. "apple" --> "appleyay"

//TODO:
// - Detect individual words.
// - Detect if words begin with vowel or consonant.
// - Change the words appropriately.
// - Print the translation to screen in real time
// - Style.

var main = function() {
  $("#inputBox").keyup(function() {
    var inputString = document.getElementById("inputBox").value;
    var words = inputString.split(" ");
    var pigwords = [];
    var pigstring = "";
    for (i=0; i<words.length; i++){
      if (words[i].charAt(0).toLowerCase() == "a" || words[i].charAt(0).toLowerCase() == "e" || words[i].charAt(0).toLowerCase() == "i" || words[i].charAt(0).toLowerCase() == "o" || words[i].charAt(0).toLowerCase() == "u"){
        pigwords[i] = words[i] + "yay";
      }else if (words[i] != ""){
        var cons = words[i].charAt(0);
        pigwords[i] = words[i].slice(1) + cons + "ay";
      }
    }
    for (i=0; i<words.length; i++){
      if (typeof pigwords[i] != "undefined"){
     pigstring += pigwords[i] + " ";
      }
    }
    if (pigstring == "") {
      pigstring = "Pig Latin Translator.";
    }
    document.getElementById("pigstring").innerHTML = pigstring;
  });
};

$(document).ready(main);
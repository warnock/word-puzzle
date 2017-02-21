var originalString = "Believe you can and you're halfway there. Theodore Roosevelt";
var parString = originalString.slice();
var splitString = parString.split("");

$(function(){
  for(var index = 0; index < splitString.length; index++){
    if(splitString[index] === "a" || splitString[index] === "e" || splitString[index] === "i" || splitString[index] === "o" || splitString[index] === "u"){
      splitString[index] = "-";
    }
  }
  parString = splitString.join("");
  $("#stringBox").text(parString);
});

var originalString = "";

$(function(){
  $("#formOne").submit(function(){
    event.preventDefault();
    originalString = $("#input1").val();
    var parString = originalString;
    var splitString = parString.split("");

    for(var index = 0; index < splitString.length; index++){
      if(splitString[index] === "a" || splitString[index] === "e" || splitString[index] === "i" || splitString[index] === "o" || splitString[index] === "u"){
        splitString[index] = "-";
      }
    }
    parString = splitString.join("");

    $("#formOne").hide();
    $("#outputBox").show();
    $("#stringBox").text(parString);
  });
  $("#formTwo").submit(function(){
    event.preventDefault();
    var guessString = $("#input2").val();
    if(guessString === originalString){
      $("#outputInfo").text("Yay! You got it!");
    } else{
      $("#outputInfo").text("Not quite, please try again.")
    }
  });
});

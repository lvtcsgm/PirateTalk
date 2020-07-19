$("#normal").keyup(function(){
  var words = $("#normal").val();
  words = words.replace(/hello/gi, "ahoy");
  words = words.replace(/^/, "Arr, me hearties. ");
  words = words.replace(/you/gi, "ye");
  words = words.replace(/suckers/gi, "scoundrels");
  $("#pirate").val(words);
});
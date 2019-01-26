var navLabels = ["Home", "Bio", "Projects", "Music", "Contact"];

function navToggle() {
  var contents = $(".navLbl").contents();
  if (typeof(contents[0]) != "undefined") {
    contents.filter(function() {
      return this.nodeType == Node.TEXT_NODE;
    }).remove();
  } else {
    $(".navLbl").each(function(y, element) {
      element.innerText = navLabels[y];
    });
  }
}
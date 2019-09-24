/*KC IMED
Fall2019*/


// Let's try the getElements first

function changeColor(newColor) {
  var elem = document.getElementById('cooler');
  elem.style.color = newColor;
}

//Sneaky text node in here!
function repeat() {
  var textNode = document.createTextNode("Self-destruct imminent. Please exit simulation.");
  document.body.appendChild(textNode);
}

//Options, options...

function sight() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("choice").innerHTML = x[0].innerHTML;
}

function smell() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("choice").innerHTML = x[1].innerHTML;
}

function touch() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("choice").innerHTML = x[2].innerHTML;
}

function taste() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("choice").innerHTML = x[3].innerHTML;
}

function sound() {
  var x = document.getElementsByTagName("LI");
  document.getElementById("choice").innerHTML = x[4].innerHTML;
}


//Creating elements and appending children!

function escape() {
  var para = document.createElement("P");
  para.innerText = "Process failed. Please try again.";
  document.body.appendChild(para);
}

//Here's a cool trick.

function changeImage() {
  var image = document.getElementById("cactusImage");
  if (image.src.match("cactus2")) {
    image.src = "images/cactus1.png";
  } else {
    image.src = "images/cactus2.png";
  }
}

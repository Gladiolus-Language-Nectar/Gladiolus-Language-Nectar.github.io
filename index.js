window.onload = () => {
	spr();
}

function spr() {
	// body...
	document.getElementById('container').innerHTML = "<br><h1>Running Test 3<h1><br>"
}

function navBarToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
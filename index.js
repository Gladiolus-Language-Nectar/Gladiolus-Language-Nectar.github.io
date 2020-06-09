window.onload = () => {
	spr();
}

function spr() {
	// body...
	document.getElementById('container').innerHTML = "<br><h1><p>This page is no more available. Click <a href='http://www.languagenectar.com'>here</a> to go to the new page.</p><h1><br>";
}

function navBarToggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
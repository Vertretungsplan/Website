function add_menu() {
	document.getElementById("menu").innerHTML = `
  <span id='menu-btn' onclick='openmenu();'>.</span>
  <span id='menu-open' onclick='closemenu();' style='display:none'>
  <span onclick='sw(\"v\");'>Vertretungsmonitor</span><br/>
  <span onclick='sw(\"w\");'>Meine Daten</span><br/>
	<span onclick='sw(\"x\");'>Stundenplan</span><br/>
	<span onclick='sw(\"e\");'>Einstellungen</span><br/>
	<br/>
	<br/>
	App entwickelt von: Niklas Fanslau, Jan Althausen, Frederik Hutfle&szlig;.
  </span>
  `;
}

function openmenu() {
	document.getElementById("menu-btn").style.display = "none";
	document.getElementById("menu-open").style.display = "block";
}

function closemenu() {
	document.getElementById("menu-open").style.display = "none";
	document.getElementById("menu-btn").style.display = "block";
}

var current = "v";

function sw(c) {
	document.getElementById(current).style.display = "none";
	document.getElementById(current = c).style.display = "block";
	document.getElementById("location").innerHTML = {
		"v": "Vertretungsmonitor",
		"w": "Meine Daten",
		"x": "Stundenplan",
		"e": "Einstellungen"
	}[current];
}

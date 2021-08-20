window.onload = function() {
const terms = document.getElementById("lookupFilter");

const year = `${new Date().getFullYear()}`;

for (var i = 1; i < 4; i++) {
    var option = document.createElement("option");
    option.value = year + `${i}0`;
    option.text = `${year[2]}${year[3]}${i} - Hidden`;
    terms.appendChild(option);
}
	
}




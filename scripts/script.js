var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-135504264-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  // var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();


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




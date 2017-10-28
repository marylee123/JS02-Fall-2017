function counting(){
	var i = document.getElementById("number").value;
	var text = "";
	setInterval(function() {
		while (i > 0) {
		    text += "<br>" + i;
		    i--;
		}
		text += "<br>Blast Off!";
		document.getElementById("demo").innerHTML = text;
	}, 1000);
}
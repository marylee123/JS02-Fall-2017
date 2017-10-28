function counting(){
	var i = document.getElementById("number").value;
	var text = "";
	var timer = setInterval(function() {
		text += "<br>" + i;
		i--;
		if(i===0){
			text += "<br>Blast Off!";
			clearInterval(timer);
		}
		document.getElementById("demo").innerHTML = text;
	}, 1000);
}
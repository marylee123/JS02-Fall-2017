function webpage(){
	var name = document.getElementById("name");

	var sentence = "Hello " + name.value;

	var output = document.getElementById("line");
	output.textContent = sentence;
}
		

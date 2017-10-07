$(document).ready(function(){
    $("button").click(function(){
    	var x = document.getElementById("name").value;
    	var y = document.getElementById("food").value;
    	var z = document.getElementById("color").value;
    	//var x = document.getElementsByTagName("input");
		$(`table#myTable`).append(`<tr>
								<td>${x}</td>
								<td>${y}</td>
								<td>${z}</td>
								</tr>`);
        //var text = $("#tr1").append("mary");
       
        //alert(hi);
    });
});

/*$(document).ready(function(){
    $("button").click(function(){
        var x = document.getElementById("Value: " + $("#test").val())[0].textContent;
        document.getElementById("demo").innerHTML = x;
    });
});

function myFunction() {
    var x = document.getElementsByTagName("button")[0].textContent;
    document.getElementById("demo").innerHTML = x;  
    " + $("#test") + "
}*/
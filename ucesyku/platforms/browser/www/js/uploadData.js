function startDataUpload() {
	alert ("start data upload");

	var location = document.getElementById("location").value;
	var option1 = document.getElementById("option1").value;
	var option2 = document.getElementById("option2").value;
	var option3 = document.getElementById("option3").value;
	var option4 = document.getElementById("option4").value;
	var correct_answer = document.getElementById("correctanswer").value;

	alert(location + " "+ option1 + " "+option2);
	
	var postString = "location="+location +"&option1="+option1+"&option2="+option2+"&option3="+option3+"&option4="+option4;
	var postString = postString + "&correct_answer="+correct_answer
	//	// now get the checkbox values - separate them with a | so that they can be // split later on if necessary
	//var checkString = "";
	//for (var i = 1;i< 5;i++){
	//	if (document.getElementById("check"+i).checked === true) {
	//		checkString = checkString + document.getElementById("check"+i).value + "||"
	//	}
    //
	//}
	//	// now get the select box values
	//var language = document.getElementById("languageselectbox").value;
	//postString = postString + "&language="+language;

	// now get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;

	//postString = postString + "&modulelist="+checkString;


// now get the radio button values
//	if (document.getElementById("morning").checked) {
// 		 postString=postString+"&lecturetime=morning";
//	}
//	if (document.getElementById("afternoon").checked) {
// 		 postString=postString+"&lecturetime=afternoon";
//	}

	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   client.open('POST','http://developer.cege.ucl.ac.uk:30269/uploadData',true);
   client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   client.onreadystatechange = dataUploaded;  
   client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received
function dataUploaded() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // change the DIV to show the response
    document.getElementById("dataUploadResult").innerHTML = client.responseText;
    }
}
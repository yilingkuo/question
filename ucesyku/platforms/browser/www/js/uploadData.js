//The code is adapted from  
function startDataUpload() {
	alert ("start data upload");

	var location = document.getElementById("location").value;
	var option1 = document.getElementById("option1").value;
	var option2 = document.getElementById("option2").value;
	var option3 = document.getElementById("option3").value;
	var option4 = document.getElementById("option4").value;
	var correct_answer = document.getElementById("correctanswer").value;

	alert(location + " "+ option1 + " "+option2);
	if (correct_answer!==(option1||option1||option1||option1))
	{alert('Please set answer identical to one option')}
	var postString = "location="+location +"&option1="+option1+"&option2="+option2+"&option3="+option3+"&option4="+option4;
	var postString = postString + "&correct_answer="+correct_answer

	// get the geometry values
	var latitude = document.getElementById("latitude").value;
	var longitude = document.getElementById("longitude").value;
	postString = postString + "&latitude=" + latitude + "&longitude=" + longitude;
	
	processData(postString);

}

var client;

function processData(postString) {
   client = new XMLHttpRequest();
   // The web link is for public.question data inserting
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
	if (client.responseText !=='row inserted'){alert('row data has mistake please restart http server')};
    }
}
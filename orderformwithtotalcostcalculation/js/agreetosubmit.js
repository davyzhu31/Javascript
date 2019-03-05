// JavaScript Document

//Submit Disable Activition
document.getElementById('submit').disabled = true;
//Submit Disable Activition Color
document.getElementById('submit').style.color = '#eee';

//Checked Able Submit Activition and Color
function enableSubmit(myval) {
    //Submit Disable Activition and Color
	if(myval.checked == true)
	{
		document.getElementById('submit').disabled = false;//Submit Disable Activition
		document.getElementById('submit').style.color = '#000';//Submit Disable Activition Color
	}
    //Submit Able Activition and Color
	if(myval.checked == false)
	{
		document.getElementById('submit').disabled = true;//Submit Able Activition
		document.getElementById('submit').style.color = '#eee';//Submit Able Activition Color
	}
}

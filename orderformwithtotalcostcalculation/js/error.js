// JavaScript Document

//Submit to Function
document.getElementById("submit").onclick = validateForm;

function validateForm() {
//Variables
  var a = document.forms["myform"]["firstname"].value;//First Name Varible
  var b = document.forms["myform"]["lastname"].value;//Last Name Varible 
  var c = document.forms["myform"]["bread"].value;//Breads Varible
  var d = document.forms["myform"]["cheeses"].value;//Cheeses Varible
  var e = document.forms["myform"]["meats"].value;//Meats Varible
    
//Vegetables Checkbox Varible
  var f1 = document.getElementById('lettuces').checked;//Lettuces Varible
  var f2 = document.getElementById('tomatos').checked;//Tomatos Varible
  var f3 = document.getElementById('pickles').checked;//Pickles Varible
  var f4 = document.getElementById('onions').checked;//Onions Varible
  var f5 = document.getElementById('carrots').checked;//Carrots Varible
   
//If Statements For Text Requirements
  if (a == "") {
	 document.getElementById('errorFirstName').innerHTML = 'First Name is Required';
    return false;
  }
    if ( b == "") {
      document.getElementById('errorLastName').innerHTML = 'Last Name is Required';
    return false;
  }
    if ( c == "") {
     document.getElementById('errorBread').innerHTML = 'Choose one Bread is Required';
    return false;
  }   
    if ( d == "") {
     document.getElementById('errorCheeses').innerHTML = 'Choose one Cheese is Required';
    return false;
  }    
    if ( e == "") {
     document.getElementById('errorMeats').innerHTML = 'Choose one Meat is Required';
    return false;
  }
    if (f1 == false && f2 == false && f3 == false && f4 == false && f5 == false) {
     document.getElementById('errorVegetables').innerHTML = 'Choose One Vegetable is Required';
    return false;
    }else {return true;}
}
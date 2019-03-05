// JavaScript Document

// Use an array to store the names of the images
var myimage = [
	{pic: '1.JPG.jpg', title: "Duck On Grass 1"},
	{pic: '2.JPG.jpg', title: "Duck On Grass 2"},
	{pic: '3.JPG.jpg', title: "Sparrow On Grass"},
	{pic: '4.JPG.jpg', title: "Crane On Grass"},
    {pic: '5.JPG.jpg', title: "Blue Jay On Tree Root"},
    {pic: '6.JPG.jpg', title: "Blue Jay Begin To Fly"}
];


var myindex = 1;

var max = myimage.length;
var num = Math.floor((Math.random() * max));


// Run the rotateImages() function every 5000 milliseconds (~5 second)
setInterval(function() { rotateImages() }, 5000);


function rotateImages() {
	// Place the image into the src of the tag
	
	//alert(myimage[myindex]);
	
	myimage.every(function(e, i, c) {
		if (myindex == i) {
			document.getElementById('mySlides').src = 'images/' + e.pic;
			document.getElementById('pictitle').textContent = e.title;
		}
		
		return true;
	});

	// Then increment the Global 'myindex' variable for the next time the function is called.
	myindex++;

	// When the Global 'myindex' variable has reached the last image then reset it back to 0
	if (myindex > myimage.length-1)
	{
		myindex = 0;
	}
}

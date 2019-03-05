// JavaScript Document

//Hide Text
document.getElementById("hs-text1").style.display = "none";
document.getElementById("hs-text2").style.display = "none";
document.getElementById("hs-text3").style.display = "none";
document.getElementById("hs-text4").style.display = "none";

//Hide and Show Text
	// Event Handler for 'hs-title1'
	document.getElementById('hs-title1').onclick = function() {
		hideShow('hs-text1', 'symbol1');
	}
	// Event Handler for 'hs-title2'
	document.getElementById('hs-title2').onclick = function() {
		hideShow('hs-text2', 'symbol2');
	}
	// Event Handler for 'hs-title3'
	document.getElementById('hs-title3').onclick = function() {
		hideShow('hs-text3', 'symbol3');
	}
    // Event Handler for 'hs-title4'
	document.getElementById('hs-title4').onclick = function() {
		hideShow('hs-text4', 'symbol4');
	}
    
    
    //Hide / Show Function
	function hideShow(val, symbol) {
		//Given element (val, symbol)
			
		//Store the element object in hs-text1, hs-text2, hs-text3
		var myval = document.getElementById(val);
        var mysymbol = document.getElementById(symbol);

		// Use set the style display to 'none' to hide and 'block' to show
		if (myval.style.display == 'block') {
            //Symbol Plus
            mysymbol.innerHTML = "+";
            //Hide
			myval.style.display = 'none';
		} else {
            //Symbol Minus
            mysymbol.innerHTML = "-";
            //Show
			myval.style.display = 'block';
		}
	}

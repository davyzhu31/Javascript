// JavaScript Document

//Note: In HTML Each Radio and Checkbox has onClick = "price()"
//Note: In HTML Each Select has onChange = "price()"
function price() {
    //Radio and Checkbox
    var btype = document.getElementsByName('bread');//Breads Value Varibles
    var mtype = document.getElementsByName('meats');//Meats Value Varibles
    var ctype = document.getElementsByName('cheeses');//Cheeses Value Varibles
    var vtype = document.getElementsByName('vegetables');//Vegetables Value Varibles
    
    //Breads Values IF|Else IF Statement
    if (btype[0].checked) {
        var breadval = btype[0].value;
    }
    else if (btype[1].checked) {
        var breadval = btype[1].value; 
    }
    else if (btype[2].checked) {
        var breadval = btype[2].value;
    }else {var breadval = 0;}
    
    //Meats Values IF|Else IF Statement
    if (mtype[0].checked) {
        var meatval = mtype[0].value;
    }
    else if (mtype[1].checked) {
        var meatval = mtype[1].value;
    }
    else if (mtype[2].checked) {
        var meatval = mtype[2].value;
    }
    else if (mtype[3].checked) {
        var meatval = mtype[3].value;
    }else {var meatval = 0;}
    
    //Cheeses Values IF|Else IF Statement
    if (ctype[0].checked) {
        var cheeseval = ctype[0].value;
    }
    else if (ctype[1].checked) {
        var cheeseval = ctype[1].value;
    }
    else if (ctype[2].checked) {
        var cheeseval = ctype[2].value;
    }else {var cheeseval = 0;}
    
    //Vegetable Values If|Else Statement Else Value of Zero
    if (vtype[0].checked) {
        var vegetableval1 = vtype[0].value;
    }else {var vegetableval1 = 0;}
    if (vtype[1].checked) {
        var vegetableval2 = vtype[1].value;
    }else {var vegetableval2 = 0;}
    if (vtype[2].checked) {
        var vegetableval3 = vtype[2].value;
    }else {var vegetableval3 = 0;}
    if (vtype[3].checked) {
        var vegetableval4 = vtype[3].value;
    }else {var vegetableval4 = 0;}
    if (vtype[4].checked) {
        var vegetableval5 = vtype[4].value;
    }else {var vegetableval5 = 0;}
    
    
    //Condiments Values Select Dropdown
    var condiment1val = document.getElementById('condiments1').value;
    var condiment2val = document.getElementById('condiments2').value;
    var condiment3val = document.getElementById('condiments3').value;
    var condiment4val = document.getElementById('condiments4').value;
    
    //Drinks Values Select Dropdown
    var drinkval = document.getElementById('drinks').value;
    
    //Extra Values Select Dropdown
    var extra1val = document.getElementById('extra1').value;    
    var extra2val = document.getElementById('extra2').value; 
    
    //Quantity Variable Input
    var quantity = document.getElementById('quantity').value;
    
    //Tax Amount
    var tax = 0.0825;

    //Vegetable Math
    var vegetables = Number(vegetableval1) + Number(vegetableval2) + Number(vegetableval3) + Number(vegetableval4) + Number(vegetableval5);     
    
    //Sandwitch Math
    var sandwitch = Number(breadval) + Number(meatval) + Number(cheeseval) + vegetables;

    //Sandwitch Total
    var sandwitchtotal = sandwitch * quantity;

    //Condiments Math
    var condiment = Number(condiment1val) + Number(condiment2val) + Number(condiment3val) + Number(condiment4val);
    
    //Extras Math
    var extra = Number(extra1val) + Number(extra2val);

    //Additions Math
    var add = condiment + extra + Number(drinkval);

    //Subtotal Math
    var subtotal = add + sandwitchtotal;

    //Tax Total
    var taxtotal = tax * subtotal;
    
    //Total Math
    var total = taxtotal + subtotal;
    
    //Total Input
    document.getElementById('total').innerHTML = total.toFixed(2);

    //Vegetable(s) Price
    document.getElementById('vegetables').innerHTML = " Cost: $" + vegetables.toFixed(2) + " ";
    
    document.getElementById('condiment').innerHTML = " Cost: $" + condiment.toFixed(2) + " ";
    
    document.getElementById('extra').innerHTML = " Cost: $" + extra.toFixed(2) + " ";   
    
}
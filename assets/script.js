

// My Name
let yourName = "Mae Pena"

//add or minus button for each cookie 
var gb = document.getElementById("add-gb");
var gbMinus = document.getElementById("minus-gb");
var Cc = document.getElementById("add-cc");
var CcMinus = document.getElementById("minus-cc");
var Sugar = document.getElementById("add-sugar");
var SugarMinus = document.getElementById("minus-sugar");


//the total and the total number of cookies
var gbTotal= document.getElementById("qty-gb");
var CcTotal = document.getElementById("qty-cc");
var SugarTotal = document.getElementById("qty-sugar");
var Total = document.getElementById("qty-total");



// Gingerbread Increment button
gb.onclick= function () {
    var number = Number(gbTotal.innerHTML);
     number++;
    gbTotal.innerHTML = number;
  Totalfinal();
};


// Gingerbread Decrement button
gbMinus.onclick= function () {
    var number = Number(gbTotal.innerHTML);
    number--;
    gbTotal.innerHTML = number;
    Totalfinal();
};



// CHocolate Chip Increment button
Cc.onclick= function () {
    var number = Number(CcTotal.innerHTML);
    number++;
    CcTotal.innerHTML = number;
    Totalfinal();
};



// Chocolate Chip Decrement button
CcMinus.onclick= function () {
    var number = Number(CcTotal.innerHTML);
    number--;
    CcTotal.innerHTML = number;
    Totalfinal();
};



// Sugar Increment button
Sugar.onclick= function () {
    var number = Number(SugarTotal.innerHTML);
    number++;
    SugarTotal.innerHTML = number;
    Totalfinal();
    
};

// Sugar Decrement button
SugarMinus.onclick= function () {
    var number = Number(SugarTotal.innerHTML);
    number--;
    SugarTotal.innerHTML = number;
    Totalfinal();
};


//total add up or minus of each cookie
function Totalfinal(){
    var number = Number(gbTotal.innerHTML);
    var number2 = Number(CcTotal.innerHTML);
    var number3 = Number(SugarTotal.innerHTML);

   Total.innerHTML = number + number2 + number3;
}

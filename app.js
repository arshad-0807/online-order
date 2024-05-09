var amount =  document.getElementById("amount");
const total = document.getElementById("total");
const check_1 = document.getElementById("check-1");
const price_1 = document.getElementById("price-1");
var price_2 = document.getElementById("price-2");
var check_2 = document.getElementById("check-2");
const check_3 = document.getElementById("check-3");
const price_3 = document.getElementById("price-3");
price_1.value = 10.00
price_2.value = 20.00
price_3.value = 30.00

var showPrice_1 = function(){
    check_1.addEventListener("click",function(){
      // amount.innerHTML ="$" + price_1.value;
    })  
}
var showPrice_2 = function(){
  check_2.addEventListener("click",function(){
    amount.innerHTML ="$" + price_2.value;
  })  
}
var showPrice_3 = function(){
  check_3.addEventListener("click",function(){
    amount.innerHTML ="$" + price_3.value;
  })  
}
showPrice_1()
showPrice_2()
showPrice_3()
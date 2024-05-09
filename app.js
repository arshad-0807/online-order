function updateTotal(checkBox){
  var total = parseFloat(document.getElementById("amount").innerText);
  var price = parseFloat(checkBox.getAttribute("data-price"));

  if(checkBox.checked) {
    total += price;
  }
  else{
    total -= price;
  }
  document.getElementById("amount").innerText = total.toFixed(2);
  
} 
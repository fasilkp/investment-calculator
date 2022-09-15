var amount = document.getElementById("amount");
var year = document.getElementById("years");
var returns = document.getElementById("returns");
var output = document.getElementById("output");
var btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let amountValue = parseInt(amount.value)*12;
  let yearValue = parseInt(year.value);
  let returnsValue = parseInt(returns.value);
  let i;
  var result = 0;
  for (i = 0; i < yearValue; i++) {
    result = (result + amountValue)+
    ((result + amountValue)* returnsValue / 100);
    console.log(result);
    output.value=result;
  }
});

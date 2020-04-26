function calc() {

  var a = parseInt(document.querySelector("#value1").value);

  var b = parseInt(document.querySelector("#value2").value);

  var op = document.querySelector("#operator").value;

  var calculate;


  if (op == "add") {
    calculate = a + b;
  } else if (op == "sub") {
    calculate = a - b;
  } else if (op == "div") {
    calculate = a / b;
  } else if (op == "mul") {
    calculate = a * b;
  } else if (op == "exp") {
    calculate = Math.pow(a, b);
  }

  // Then lastly we output the result into the <div> inside index.html using the innerHTML property.
  document.querySelector("#result").innerHTML = calculate;
}

function string_Method() {// Here I am creating my to-string function
    var X =182;// Here I am assinging a value to my to-string variable X
    document.getElementById("Numbers_to_string").innerHTML = X.toString(); // Here I am returning the to-string function
}
function precision_Method() {// Here I am assinging the precision function
    var X = 12938.3012987376112// Here I am assinging a value to my variable X
    document.getElementById("Precision").innerHTML = X.toPrecision(10);// Here I am returning the precision method
}
function financial(x) { // Here I am creating a to fixed value
    return Number.parseFloat(x).toFixed(2);
  }
  
  console.log(financial(123.456));
  // expected output: "123.46"
  
  console.log(financial(0.004));
  // expected output: "0.00"
  
  console.log(financial('1.23e+5'));
  // expected output: "123000.00"

  function MyNumberType(n) { // Here I am creating a value of method
    this.number = n;
  }
  
  MyNumberType.prototype.valueOf = function() {
    return this.number;
  };
  
  const object1 = new MyNumberType(5); // Here I am assinging a value to "MyNumberType making it 5"
  
  console.log(object1 + 3);
  // expected output: 8
  
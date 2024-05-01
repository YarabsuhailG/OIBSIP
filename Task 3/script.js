function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitResult = (celsiusInput * 9/5) + 32;
    document.getElementById("result1").innerHTML = celsiusInput + " Celsius = " + fahrenheitResult.toFixed(2) + " Fahrenheit";
  }
  
  function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit").value;
    var celsiusResult = (fahrenheitInput - 32) * 5/9;
    document.getElementById("result2").innerHTML = fahrenheitInput + " Fahrenheit = " + celsiusResult.toFixed(2) + " Celsius";
  }
  
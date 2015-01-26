var x = 0
    y = 0;

//Cups to Quarts
function cupsToQuarts() {
  y = (x * 0.25);
  alert(x + " cups equals " + y + " quarts!");
}
//Quarts to Cups
function quartsToCups() {
  y = (x * 4);
  alert(x + " quarts equals " + y + " cups!");
}
//Meters to Yards
function metersToYards() {
  y = (x * 1.09361);
  alert(x + " meters equals " + y + " yards!");
}
//Yards to Meters
function yardsToMeters() {
  y = (x * 0.9144);
  alert(x + " yards equals " + y + " meters!");
}
//Fahrenheit to Celcius
function fahrenheitToCelcius() {
  y = ((x - 32) * .555555556);
  alert(x + " degrees Fahrenheit equals " + y + " degrees Celcius!");
}
//Celcius to Fahrenheit
function celciusToFahrenheit() {
  y = (x * 1.8 + 32);
  alert(x + " Celcius equals " + y + " Fahrenheit!");
}

function setX(xString) {
  x = Number(xString);
}

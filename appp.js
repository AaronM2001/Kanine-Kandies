var fortunes = [
    // add more array items here if you want, make sure you put a comma between each one. You can use HTML here! Just remember that if it contains quotes, they need to be escaped, like this: \"
    "You will win a <em>million</em> dollars! Yay!",
    "You will step on a piece of gum.",
    "You will be attacked by a fluffy bunny."
  ];
  
  function tellFortune() {
    
    // generate a random number between 0 and the number of the array items
    var randomNumber = Math.floor(Math.random() * fortunes.length);
  
    // print the random number to the console log to make sure it's working
    console.log("random number: " + randomNumber);
  
    // take the fortune at the random spot in the array and insert it into the "fortune" div
   document.getElementById("fortune").innerHTML = fortunes[randomNumber];
  }
  
  function reset() {
    // what goes here? (hint: make the fortune div contain an empty string)
    
  }
  var cars = {
    make: "Toyota",
    model: "Rav4",
    year: 2020,
    available: true,
    description: "Toyotas initiative to build a one-size-fits-all suv to serve as a four-door family car"
}

function display() {
  var place= document.getElementById("submit");
 
  for (value in toyota) {
    place.innerHTML = "Make: " + cars.make + "<br>" +
    "Model: " + cars.model + "<br>" +
    "Year: " + cars.year + "<br>" +
    "Available: " + cars.available + "<br>" +
    "About: " + cars.description;
  }
};

var toyota = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  available: true,
  description: "The 2020 Toyota Camry is a great reliable car, and it's a real pleasure to drive."
}

function display2() {
var place= document.getElementById("submit2");

for (value in toyota) {
  place.innerHTML = "Make: " + toyota.make + "<br>" +
  "Model: " + toyota.model + "<br>" +
  "Year: " + toyota.year + "<br>" +
  "Available: " + toyota.available + "<br>" +
  "About: " + toyota.description;
}
};

var car = {
make: "Toyota",
model: "Tacoma",
year: 2020,
available: true,
description: "The 2020 Toyota Tacoma also received the same reliability rating. The organization says three out of five is about average for reliability."
}

function display3() {
var place= document.getElementById("submit3");

for (value in car) {
place.innerHTML = "Make: " + car.make + "<br>" +
"Model: " + car.model + "<br>" +
"Year: " + car.year + "<br>" +
"Available: " + car.available + "<br>" +
"About: " + car.description;
}
};
  
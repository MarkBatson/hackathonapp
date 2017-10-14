var temp;
var sweetness;
var strength;
var flavored;
var unflavored;

var slider = document.getElementById("sweet-range");
var slider2 = document.getElementById("strength-range");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sweetness = this.value;
}
slider2.oninput = function() {
  strength = this.value;
}

var cold = document.getElementById("cold");
var hot = document.getElementById("hot");
var frozen = document.getElementById("frozen");
cold.addEventListener("click", setCold);
hot.addEventListener("click", setHot);
frozen.addEventListener("click", setFrozen);

function setCold() {
  temp = "cold";
  document.getElementById("cold").style.color = "red";
  document.getElementById("hot").style.color = "black";
  document.getElementById("frozen").style.color = "black";
}
function setHot() {
  temp = "hot";
  document.getElementById("cold").style.color = "black";
  document.getElementById("hot").style.color = "red";
  document.getElementById("frozen").style.color = "black";
}
function setFrozen() {
  temp = "frozen";
  document.getElementById("cold").style.color = "black";
  document.getElementById("hot").style.color = "black";
  document.getElementById("frozen").style.color = "red";
}

var flavored = document.getElementById("flavored");
var unflavored = document.getElementById("unflavored");
flavored.addEventListener("click", setFlavored);
unflavored.addEventListener("click", setUnflavored);

function setFlavored() {
  flavored = true;
  document.getElementById("flavored").style.color = "red";
  document.getElementById("unflavored").style.color = "black";
}
function setUnflavored() {
  flavored = false;
  document.getElementById("flavored").style.color = "black";
  document.getElementById("unflavored").style.color = "red";
}


var search = document.getElementById("button");
search.addEventListener("click", display);

function display() {

  console.clear();
  console.log("Sweetness: " + sweetness);
  console.log("Strength: " + strength);

  var coffeeType = document.getElementsByClassName("coffee-type");
  for (var i=0; i<coffeeType.length; i++) {
    coffeeType[i].style.display = "none";
  }

  if (temp=="frozen" && sweetness>80 && 20<strength && strength<40 && flavored) {
    document.getElementById("frappe").style.display = "inherit";
  }
  if (temp=="hot" && sweetness<20 && 30<strength && strength<50 && !flavored) {
    document.getElementById("drip").style.display = "inherit";
    document.getElementById("drip").textContent = "Drip Coffee";
  }
  if (temp=="hot" && sweetness<20 && 50<strength && strength<70 && !flavored) {
    document.getElementById("drip").style.display = "inherit";
    document.getElementById("drip").textContent = "Bold Drip Coffee";
  }
  if (temp=="hot" && 60<sweetness && sweetness<80 && 30<strength && strength<50 && flavored) {
    document.getElementById("latte").style.display = "inherit";
    document.getElementById("latte").textContent = "Flavored Latte";
  }
  if (temp=="hot" && 40<sweetness && sweetness<60 && 30<strength && strength<50 && !flavored) {
    document.getElementById("latte").style.display = "inherit";
    document.getElementById("latte").textContent = "Unflavored Latte";
  }
  if (temp=="hot" && 70<sweetness && sweetness<90 && 20<strength && strength<40 && flavored) {
    document.getElementById("mocha").style.display = "inherit";
  }
  if (temp=="cold" && 50<sweetness && sweetness<70 && 60<strength && strength<80 && !flavored) {
    document.getElementById("cold-brew").style.display = "inherit";
  }
  if (temp=="cold" && sweetness<20 && 30<strength && strength<50 && !flavored) {
    document.getElementById("iced-coffee").style.display = "inherit";
  }
  if (temp=="hot" && sweetness<20 && 80<strength && !flavored) {
    document.getElementById("espresso").style.display = "inherit";
  }
  if (temp=="hot" && 10<sweetness && sweetness<30 && 60<strength && strength<80 && !flavored) {
    document.getElementById("macchiato").style.display = "inherit";
    document.getElementById("macchiato").textContent = "Macchiato";
  }
  if (temp=="cold" && 10<sweetness && sweetness<30 && 60<strength && strength<80 && !flavored) {
    document.getElementById("macchiato").style.display = "inherit";
    document.getElementById("macchiato").textContent = "Cold Macchiato";
  }
  if (temp=="hot" && 40<sweetness && sweetness<60 && 50<strength && strength<70 && !flavored) {
    document.getElementById("capp").style.display = "inherit";
  }
  if (temp=="hot" && 10<sweetness && sweetness<30 && 50<strength && strength<70 && !flavored) {
    document.getElementById("americano").style.display = "inherit";
  }
  if (temp=="hot" && 40<sweetness && sweetness<60 && 30<strength && strength<50 && !flavored) {
    document.getElementById("breve").style.display = "inherit";
  }
  if (temp=="hot" && 80<sweetness && strength<20 && flavored) {
    document.getElementById("hot-chocolate").style.display = "inherit";
  }
  if (temp=="hot" && 40<sweetness && sweetness<60 && 40<strength && strength<60 && !flavored) {
    document.getElementById("flat-white").style.display = "inherit";
  }
}

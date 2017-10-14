var temp;
var sweetness;
var strength;
var flavored;
var price;

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

var cold = document.getElementById("flavored");
var hot = document.getElementById("unflavored");
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

var $ = document.getElementById("one");
var $$ = document.getElementById("two");
var $$$ = document.getElementById("three");
$.addEventListener("click", set$);
$$.addEventListener("click", set$$);
$$$.addEventListener("click", set$$$);

function set$() {
  price = 1;
  document.getElementById("one").style.color = "red";
  document.getElementById("two").style.color = "black";
  document.getElementById("three").style.color = "black";
}
function set$$() {
  price = 2;
  document.getElementById("one").style.color = "black";
  document.getElementById("two").style.color = "red";
  document.getElementById("three").style.color = "black";
}
function set$$$() {
  price = 3;
  document.getElementById("one").style.color = "black";
  document.getElementById("two").style.color = "black";
  document.getElementById("three").style.color = "red";
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

  if (temp=="frozen" && sweetness>90 && 25<strength && strength<35 && flavored && price==3) {
    document.getElementById("frappe").style.display = "inherit";
  }
  if (temp=="hot" && sweetness<10 && 35<strength && strength<45 && !flavored && price==1) {
    document.getElementById("drip").style.display = "inherit";
    document.getElementById("drip").textContent = "Drip Coffee";
  }
  if (temp=="hot" && sweetness<10 && 55<strength && strength<65 && !flavored && price==1) {
    document.getElementById("drip").style.display = "inherit";
    document.getElementById("drip").textContent = "Bold Drip Coffee";
  }
  if (temp=="hot" && 65<sweetness && sweetness<75 && 35<strength && strength<45 && flavored && price==2) {
    document.getElementById("latte").style.display = "inherit";
    document.getElementById("latte").textContent = "Flavored Latte";
  }
  if (temp=="hot" && 45<sweetness && sweetness<55 && 35<strength && strength<45 && !flavored && price==2) {
    document.getElementById("latte").style.display = "inherit";
    document.getElementById("latte").textContent = "Unflavored Latte";
  }
  if (temp=="hot" && 75<sweetness && sweetness<85 && 25<strength && strength<35 && flavored && price==2) {
    document.getElementById("mocha").style.display = "inherit";
  }
  if (temp=="cold" && 55<sweetness && sweetness<65 && 65<strength && strength<75 && !flavored && price==3) {
    document.getElementById("cold-brew").style.display = "inherit";
  }
  if (temp=="cold" && sweetness<10 && 35<strength && strength<45 && !flavored && price==1) {
    document.getElementById("iced-coffee").style.display = "inherit";
  }
  if (temp=="hot" && sweetness<10 && 90<strength && !flavored && price==1) {
    document.getElementById("espresso").style.display = "inherit";
  }
  if (temp=="hot" && 15<sweetness && sweetness<25 && 75<strength && strength<85 && !flavored && price==1) {
    document.getElementById("macchiato").style.display = "inherit";
    document.getElementById("macchiato").textContent = "Macchiato";
  }
  if (temp=="cold" && 15<sweetness && sweetness<25 && 45<strength && strength<55 && !flavored && price==1) {
    document.getElementById("macchiato").style.display = "inherit";
    document.getElementById("macchiato").textContent = "Cold Macchiato";
  }
  if (temp=="hot" && 45<sweetness && sweetness<55 && 55<strength && strength<65 && !flavored && price==2) {
    document.getElementById("capp").style.display = "inherit";
  }
  if (temp=="hot" && 15<sweetness && sweetness<25 && 55<strength && strength<65 && !flavored && price==1) {
    document.getElementById("americano").style.display = "inherit";
  }
  if (temp=="hot" && 45<sweetness && sweetness<55 && 35<strength && strength<45 && !flavored && price==1) {
    document.getElementById("breve").style.display = "inherit";
  }
  if (temp=="hot" && 85<sweetness && sweetness<95 && strength && strength<10 && flavored && price==2) {
    document.getElementById("hot-chocolate").style.display = "inherit";
  }
  if (temp=="hot" && 45<sweetness && sweetness<55 && 45<strength && strength<55 && !flavored && price==2) {
    document.getElementById("flat-white").style.display = "inherit";
  }
}

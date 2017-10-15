var temp = null;
var sweetness = null;
var strength = null;
var flavored = null;
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

/*This section makes the slider color changing functional*/
function writeStyle(a) {
  var b=inlineStyleContent.map(a=>a.id).indexOf(a.id),c="";-1===b?inlineStyleContent.push(a):inlineStyleContent[b]=a;
  for(let a of inlineStyleContent)c+="#"+a.id+"::-webkit-slider-runnable-track{background-size:"+a.percent+"% 100%} ";
  inlineStyle.textContent=c;
}
var inlineStyle=document.createElement("style"),rangeSelector=document.querySelectorAll("[type=range]"),inlineStyleContent=new Array;
document.body.appendChild(inlineStyle);
var eventname=new Event("input");
for(let a of rangeSelector)a.addEventListener("input",function(){
    let a=Number(this.getAttribute("max")-this.getAttribute("min")),
    b=(Number(this.value)+Math.abs(this.getAttribute("min")))/a*100;
    writeStyle({id:this.id,percent:b})},!1),a.dispatchEvent(eventname);

var sweetness = null;
var strength = null;

var cold = document.getElementById("cold");
var hot = document.getElementById("hot");
var frozen = document.getElementById("frozen");
cold.addEventListener("click", setCold);
hot.addEventListener("click", setHot);
frozen.addEventListener("click", setFrozen);

function setCold() {
  temp = "cold";
  document.getElementById("cold").style.color = "black";
  document.getElementById("hot").style.color = "#C1883D";
  document.getElementById("frozen").style.color = "#C1883D";
}
function setHot() {
  temp = "hot";
  document.getElementById("cold").style.color = "#C1883D";
  document.getElementById("hot").style.color = "black";
  document.getElementById("frozen").style.color = "#C1883D";
}
function setFrozen() {
  temp = "frozen";
  document.getElementById("cold").style.color = "#C1883D";
  document.getElementById("hot").style.color = "#C1883D";
  document.getElementById("frozen").style.color = "black";
}

var flavoredClick = document.getElementById("flavored");
var unflavored = document.getElementById("unflavored");
flavoredClick.addEventListener("click", setFlavored);
unflavored.addEventListener("click", setUnflavored);

function setFlavored() {
  flavored = true;
  document.getElementById("flavored").style.color = "black";
  document.getElementById("unflavored").style.color = "#C1883D";
}
function setUnflavored() {
  flavored = false;
  document.getElementById("flavored").style.color = "#C1883D";
  document.getElementById("unflavored").style.color = "black";
}


var search = document.getElementById("button");
search.addEventListener("click", display);

function display() {

  console.clear();
  console.log("Sweetness: " + sweetness);
  console.log("Strength: " + strength);
  console.log(temp);
  console.log(sweetness);
  console.log(strength);
  console.log(flavored);

  var coffeeType = document.getElementsByClassName("flex-item");
  for (var i=0; i<coffeeType.length; i++) {
    coffeeType[i].style.display = "none";
  }

  if ((temp=="frozen" || temp==null) && (sweetness>=80 || sweetness==null) && ((20<=strength && strength<=40) || strength==null) && (flavored || flavored==null)) {
    document.getElementById("frappe").style.display = "block";
  }
  if ((temp=="hot" || temp==null) && ((sweetness<=20 || sweetness==null)) && ((50<=strength && strength<=70) || strength==null) && (!flavored || flavored==null)) {
    document.getElementById("drip").style.display = "block";
    //document.getElementById("drip").textContent = "Bold Drip Coffee";
  }
  if ((temp=="hot" || temp==null) && (sweetness<=20 || sweetness==null) && ((40<=strength && strength<=60) || strength==null) && (!flavored || flavored==null)) {
    document.getElementById("drip").style.display = "block";
    //document.getElementById("drip").textContent = "Drip Coffee";
  }
  if ((temp=="hot" || temp==null) && ((60<=sweetness && sweetness<=80) || sweetness==null) && ((30<=strength && strength<=50) || strength==null) && (flavored || flavored==null)) {
    document.getElementById("latte").style.display = "block";
    //document.getElementById("latte").textContent = "Flavored Latte";
  }
  if ((temp=="hot" || temp==null) && ((40<=sweetness && sweetness<=60) || sweetness==null) && ((30<=strength && strength<=50) || strength==null) && (!flavored || flavored==null)) {
    document.getElementById("latte").style.display = "block";
    //document.getElementById("latte").textContent = "Latte";
  }
  if ((temp=="hot" || temp==null) && ((70<=sweetness && sweetness<=90) || sweetness==null) && ((20<=strength && strength<=40) || strength==null) && (flavored || flavored==null)) {
    document.getElementById("mocha").style.display = "block";
  }
  if ((temp=="cold" || temp==null) && ((40<=sweetness && sweetness<=60) || sweetness==null) && ((60<=strength && strength<=80) || strength==null) && (!flavored || flavored==null)) {
    document.getElementById("cold-brew").style.display = "block";
  }
  if ((temp=="cold" || temp==null) && (sweetness<=20 || sweetness==null) && ((40<=strength && strength<=60) || strength==null) && (!flavored || flavored==null)) {
    document.getElementById("iced-coffee").style.display = "block";
  }
  if ((temp=="hot" || temp == null) && (sweetness<=20 || sweetness == null) && (80<=strength || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("espresso").style.display = "block";
  }
  if ((temp=="cold" || temp == null) && ((0<=sweetness && sweetness<=20) || sweetness == null) && ((60<=strength && strength<=80) || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("macchiato").style.display = "block";
    //document.getElementById("macchiato").textContent = "Iced Macchiato";
  }
  if ((temp=="hot" || temp == null) && ((0<=sweetness && sweetness<=20) || sweetness == null) && ((60<=strength && strength<=80) || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("macchiato").style.display = "block";
    //document.getElementById("macchiato").textContent = "Macchiato";
  }
  if ((temp=="hot" || temp == null) && ((40<=sweetness && sweetness<=60) || sweetness == null) && ((50<=strength && strength<=70) || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("capp").style.display = "block";
  }
  if ((temp=="hot" || temp == null) && ((10<=sweetness && sweetness<=30) || sweetness == null) && ((50<=strength && strength<=70) || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("americano").style.display = "block";
  }
  if ((temp=="hot" || temp == null) && ((40<=sweetness && sweetness<=60) || sweetness == null) && ((30<=strength && strength<=50) || strength == null) && (!flavored || flavored == null)) {
    document.getElementById("breve").style.display = "block";
  }
  if ((temp=="hot" || temp == null) && ((40<=sweetness && sweetness<=60) || sweetness == null) && ((40<=strength && strength<=60) || strength == null) && (!flavored || flavor == null)) {
    document.getElementById("flat-white").style.display = "block";
  }
}

var reset = document.getElementById("button2");
reset.addEventListener("click", resetPage);

function resetPage() {
  var coffeeType = document.getElementsByClassName("flex-item");
  for (var i=0; i<coffeeType.length; i++) {
    coffeeType[i].style.display = "none";
  }

  document.getElementById("sweet-range").value = 50;
  document.getElementById("strength-range").value = 50;

  temp = null;
  sweetness = null;
  strength = null;
  flavored = null;

  document.getElementById("flavored").style.color = "#C1883D";
  document.getElementById("unflavored").style.color = "#C1883D";
  document.getElementById("cold").style.color = "#C1883D";
  document.getElementById("hot").style.color = "#C1883D";
  document.getElementById("frozen").style.color = "#C1883D";


  console.log(temp);
  console.log(sweetness);
  console.log(strength);
  console.log(flavored);
}

var droptop = document.getElementById("mostperfect");
droptop.addEventListener("click", expand);

function expand() {
  document.getElementById("drop-down").style.display = "inherit";
  document.getElementById("exit-drop").style.display = "inherit";
}

var exit = document.getElementById("exit-drop");
exit.addEventListener("click", exitDrop);

function exitDrop() {
  document.getElementById("drop-down").style.display = "none";
  document.getElementById("exit-drop").style.display = "none";
}

var hamburger = document.getElementById("hamburger");
var hamParent = hamburger.parentNode;

fakeBurger();

var fakeburger = document.getElementById("fakeburger");
var topLine = document.getElementById("topLine");
var middleLine = document.getElementById("middleLine");
var bottomLine = document.getElementById("bottomLine");
var fakeParent = fakeburger.parentNode; //this is just to test in console

swapColors(hamburger, fakeburger);

function fakeBurger() {
  var fb = document.createElement("div");
  fb.id = "fakeburger";
  hamParent.appendChild(fb);

  var line1 = document.createElement("span");
  line1.id = "topLine";
  line1.style.position = "absolute";
  line1.style.width = "100%";
  line1.style.height = "20%";
  line1.style.top = "0%";
  line1.style.backgroundColor = "black";
  fb.appendChild(line1);

  var line2 = document.createElement("span");
  line2.id = "middleLine";
  line2.style.position = "absolute";
  line2.style.width = "100%";
  line2.style.height = "20%";
  line2.style.top = "40%";
  line2.style.backgroundColor = "black";
  fb.appendChild(line2);

  var line3 = document.createElement("span");
  line3.id = "bottomLine";
  line3.style.position = "absolute";
  line3.style.width = "100%";
  line3.style.height = "20%";
  line3.style.top = "80%";
  line3.style.backgroundColor = "black";
  fb.appendChild(line3);
}

function swapColors(x, y) {
  var swapP = window.getComputedStyle(x, null).getPropertyValue("position");
  var swapW = window.getComputedStyle(x, null).getPropertyValue("width");
  var swapH = window.getComputedStyle(x, null).getPropertyValue("height");
  var swapT = window.getComputedStyle(x, null).getPropertyValue("top");
  var swapL = window.getComputedStyle(x, null).getPropertyValue("left");
  var swapBC = window.getComputedStyle(x, null).getPropertyValue("background-color");
  var swapB = window.getComputedStyle(x, null).getPropertyValue("border");
  var swapBR = window.getComputedStyle(x, null).getPropertyValue("border-radius");
  var swapBW = window.getComputedStyle(x, null).getPropertyValue("border-width");
  var swapO = window.getComputedStyle(x, null).getPropertyValue("opacity");
  var swapC = window.getComputedStyle(x, null).getPropertyValue("cursor");

  y.style.position = swapP;
  y.style.width = swapW;
  y.style.height = swapH;
  y.style.top = swapT;
  y.style.left = swapL;
  y.style.cursor = swapC;

  topLine.style.backgroundColor = swapBC;
  topLine.style.border = swapB;
  topLine.style.borderRadius = swapBR;
  topLine.style.borderWidth = swapBW;
  topLine.style.opacity = swapO;

  middleLine.style.backgroundColor = swapBC;
  middleLine.style.border = swapB;
  middleLine.style.borderRadius = swapBR;
  middleLine.style.borderWidth = swapBW;
  middleLine.style.opacity = swapO;

  bottomLine.style.backgroundColor = swapBC;
  bottomLine.style.border = swapB;
  bottomLine.style.borderRadius = swapBR;
  bottomLine.style.borderWidth = swapBW;
  bottomLine.style.opacity = swapO;

  x.style.display = "none";
}

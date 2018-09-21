//script for changing photos

var slideLayer = document.querySelector(".slide-layer")
var eighteenthDiv = slideLayer.children[18];
var nineteenthDiv = slideLayer.children[19];
var twentiethDiv = slideLayer.children[20];

eighteenthDiv.style.position="relative";
var oldImgOne = eighteenthDiv.children[0];
oldImgOne.style.position="absolute";
oldImgOne.style.display="none";
var newImgOne = document.createElement("IMG");
newImgOne.setAttribute("src", "../Demo_photos/756A2229_Cash_desk.jpeg");
//newImgOne.setAttribute("width", "500");
//newImgOne.setAttribute("height", "500");
eighteenthDiv.appendChild(newImgOne);
newImgOne.style.position="absolute";

nineteenthDiv.style.position="relative";
var oldImgTwo = nineteenthDiv.children[0];
oldImgTwo.style.position="absolute";
oldImgTwo.style.display="none";
var newImgTwo = document.createElement("IMG");
newImgTwo.setAttribute("src", "../Demo_photos/756A2282_Cash_desk.jpeg");
//newImgTwo.setAttribute("width", "500");
//newImgTwo.setAttribute("height", "500");
nineteenthDiv.appendChild(newImgTwo);
newImgTwo.style.position="absolute";

twentiethDiv.style.position="relative";
var oldImgThree = twentiethDiv.children[0];
oldImgThree.style.position="absolute";
oldImgThree.style.display="none";
var newImgThree = document.createElement("IMG");
newImgThree.setAttribute("src", "../Demo_photos/756A2214_Cash_desk.jpeg");
//newImgThree.setAttribute("width", "500");
//newImgThree.setAttribute("height", "500");
twentiethDiv.appendChild(newImgThree);
newImgTwo.style.position="absolute";
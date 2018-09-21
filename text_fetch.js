//script for changing text, bullet points added:

var slideLayer = document.querySelector(".slide-layer");
var seventhDiv = slideLayer.children[7];
var paragraph = document.createElement("P");
var bulletPoint = document.createElement('SPAN');
seventhDiv.innerHTML = "";
bulletPoint.innerHTML = '•';
bulletPoint.style.color = "#30c1de"; //correct slide color!
seventhDiv.appendChild(bulletPoint);
seventhDiv.appendChild(paragraph);
paragraph.style.marginLeft = "36px"; //space from storyline
//seventhDiv.style.textAlign="center";
seventhDiv.style.color = "#65727a"; //storyline font color
//seventhDiv.style.fontWeight="bold";
seventhDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
seventhDiv.style.display = "flex";
seventhDiv.style.alignItems = "center";
seventhDiv.style.flexDirection = "row";
seventhDiv.style.alignItems = "center";
seventhDiv.style.fontSize = "29px";
//seventhDiv.style.paddingTop="25px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text2.txt')
  .then(response => response.text())
  .then((data) => {
    paragraph.innerHTML = data;
    var newText = bulletPoint.innerHTML + paragraph.innerHTML;
  })

var ninthDiv = slideLayer.children[9];
var paragraphTwo = document.createElement("P");
var bulletPointTwo = document.createElement('SPAN');
ninthDiv.innerHTML = "";
bulletPointTwo.innerHTML = '•';
bulletPointTwo.style.color = "#30c1de"; //correct slide color!
ninthDiv.appendChild(bulletPointTwo);
ninthDiv.appendChild(paragraphTwo);
paragraphTwo.style.marginLeft = "36px"; //space from storyline
//ninthDiv.style.textAlign="center";
ninthDiv.style.color = "#65727a";
//ninthDiv.style.fontWeight="bold";
ninthDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
ninthDiv.style.display = "flex";
ninthDiv.style.alignItems = "center";
ninthDiv.style.flexDirection = "row";
ninthDiv.style.alignItems = "center";
ninthDiv.style.fontSize = "29px";
//ninthDiv.style.paddingTop="25px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text2.txt')
  .then(response => response.text())
  .then((data) => {
    paragraphTwo.innerHTML = data;
    var newTextTwo = bulletPointTwo.innerHTML + paragraphTwo.innerHTML;
  })

var eleventhDiv = slideLayer.children[11];
var paragraphThree = document.createElement("P");
var bulletPointThree = document.createElement('SPAN');
eleventhDiv.innerHTML = "";
bulletPointThree.innerHTML = '•';
bulletPointThree.style.color = "#30c1de"; //correct slide color!
eleventhDiv.appendChild(bulletPointThree);
eleventhDiv.appendChild(paragraphThree);
paragraphThree.style.marginLeft = "36px"; //space from storyline
//eleventhDiv.style.textAlign="center";
eleventhDiv.style.color = "#65727a";
//eleventhDiv.style.fontWeight="bold";
eleventhDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
eleventhDiv.style.display = "flex";
eleventhDiv.style.alignItems = "center";
eleventhDiv.style.flexDirection = "row";
eleventhDiv.style.alignItems = "center";
eleventhDiv.style.fontSize = "29px";
//eleventhDiv.style.paddingTop="25px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text2.txt')
  .then(response => response.text())
  .then((data) => {
    paragraphThree.innerHTML = data;
    var newTextThree = bulletPointThree.innerHTML + paragraphThree.innerHTML;
  })

var thirteenthDiv = slideLayer.children[13];
var paragraphFour = document.createElement("P");
var bulletPointFour = document.createElement('SPAN');
thirteenthDiv.innerHTML = "";
bulletPointFour.innerHTML = '•';
bulletPointFour.style.color = "#30c1de"; //correct slide color!
thirteenthDiv.appendChild(bulletPointFour);
thirteenthDiv.appendChild(paragraphFour);
paragraphFour.style.marginLeft = "36px"; //space from storyline
//thirteenthDiv.style.textAlign="center";
thirteenthDiv.style.color = "#65727a";
//thirteenthDiv.style.fontWeight="bold";
thirteenthDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
thirteenthDiv.style.display = "flex";
thirteenthDiv.style.alignItems = "center";
thirteenthDiv.style.flexDirection = "row";
thirteenthDiv.style.alignItems = "center";
thirteenthDiv.style.fontSize = "29px";
//thirteenthDiv.style.paddingTop="25px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text2.txt')
  .then(response => response.text())
  .then((data) => {
    paragraphFour.innerHTML = data;
    var newTextFour = bulletPointFour.innerHTML + paragraphFour.innerHTML;
  })

var fourteenthDiv = slideLayer.children[14];
fourteenthDiv.innerHTML = "";
fourteenthDiv.style.color = "black";
// fourteenthDiv.style.fontWeight="bold";
fourteenthDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
fourteenthDiv.style.display = "flex";
fourteenthDiv.style.alignItems = "center";
//fourteenthDiv.style.textAlign="center";
fourteenthDiv.style.fontSize = "48px";
//fourteenthDiv.style.paddingTop="45px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/title2.txt')
  .then(response => response.text())
  .then((data) => {
    fourteenthDiv.innerHTML = data;
  })

var sixteenthDiv = slideLayer.children[16];
sixteenthDiv.innerHTML = "";
sixteenthDiv.style.color = "black";
//sixteenthDiv.style.fontWeight="bold";
sixteenthDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
sixteenthDiv.style.display = "flex";
sixteenthDiv.style.alignItems = "center";
//sixteenthDiv.style.textAlign="center";
sixteenthDiv.style.fontSize = "48px";
//sixteenthDiv.style.paddingTop="45px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/title1.txt')
  .then(response => response.text())
  .then((data) => {
    sixteenthDiv.innerHTML = data;
  })

var seventeenthDiv = slideLayer.children[17];
seventeenthDiv.innerHTML = "";
seventeenthDiv.style.color = "#495d6c"; //storyline font color
//seventeenthDiv.style.fontWeight="bold";
seventeenthDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
seventeenthDiv.style.display = "flex";
seventeenthDiv.style.alignItems = "center";
//seventeenthDiv.style.textAlign="center";
seventeenthDiv.style.fontSize = "37px";
//seventeenthDiv.style.paddingTop="25px";
//seventeenthDiv.style.marginLeft="17px";

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/intro.txt')
  .then(response => response.text())
  .then((data) => {
    seventeenthDiv.innerHTML = data;
  })
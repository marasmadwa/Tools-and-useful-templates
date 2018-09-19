# Tools-and-useful-templates
For my own usage


HTML:

```HTML
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
  <div class="main-window-slide-container">
    <div>
    </div>
  </div>
  <div class="slide-layer">
    <div>0</div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </div>
  <p class="para">Some text</p>
```
CSS:

```CSS
.main-window-slide-container{
  width: 100px;
  height: 100px;
  background: black;
} 

.main-window-slide-container div{
  width: 100px;
  height: 100px;
}
.slideoject-maskable {
   width: 100px;
  height: 100px;
} 

.slide-layer{
  width:400px;
  height:auto;
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
JS:

```JavaScript
var mainWindowSlide = document.querySelector(".main-window-slide-container");
var slideDiv = mainWindowSlide.firstElementChild;

slideDiv.style.backgroundImage = "url('http://bdfjade.com/data/out/102/6066356-wallpaper-image.jpeg')"
slideDiv.style.backgroundSize = "cover";
slideDiv.style.backgroundRepeat = "no-repeat";

document.querySelector(".slideobject-maskable").style.backgroundImage = "url('https://www.w3schools.com/w3css/img_lights.jpg')"
document.querySelector(".slideobject-maskable").style.backgroundSize = "cover";
document.querySelector(".slideobject-maskable").style.backgroundRepeat = "no-repeat"; */

var slideLayer = document.querySelector(".slide-layer")
var zeroDiv = slideLayer.children[0];
var firstDiv = slideLayer.children[1];
var secDiv = slideLayer.children[2];
var thirdDiv = slideLayer.children[3];
var fourthDiv = slideLayer.children[4];
var fifthDiv = slideLayer.children[5];
var sixthDiv = slideLayer.children[6];

zeroDiv.style.background = "violet";
zeroDiv.style.width = "100px";
zeroDiv.style.height="100px";

firstDiv.style.background = "blue";
firstDiv.style.width = "100px";
firstDiv.style.height="100px";

secDiv.style.background = "pink";
secDiv.style.width = "100px";
secDiv.style.height="100px";

thirdDiv.style.background = "yellow";
thirdDiv.style.width = "100px";
thirdDiv.style.height="100px";

fourthDiv.style.background = "orange";
fourthDiv.style.width = "100px";
fourthDiv.style.height="100px";

fifthDiv.style.background = "cyan";
fifthDiv.style.width = "100px";
fifthDiv.style.height="100px";

sixthDiv.style.background = "gray";
sixthDiv.style.width = "100px";
sixthDiv.style.height="100px";

//wstawanie tekstu
var oldText = document.querySelector(".para");
var newText = document.createTextNode("New Text");
oldText.innerHTML="";
oldText.appendChild(newText);

//Umieszczanie zewnętrznego pliku tekstowego (lokalnie)

var xmlRequest =new XMLHttpRequest();
xmlRequest.open("GET","https://12Me21.github.io/test.txt");
xmlRequest.onload=function(){
      var slideLayer = document.querySelector(".slide-layer");
      var sixthDiv = slideLayer.children[6];
      sixthDiv.innerHTML = "";
      sixthDiv.innerHTML = xmlRequest.responseText;
      sixthDiv.style.color="black";
      sixthDiv.style.textAlign="center";
      sixthDiv.style.fontSize="40px";
      sixthDiv.style.lineHeigt="101px";
}
xmlRequest.send();

//LUB

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text1.txt')
  .then(response => response.text())
  .then((data) => {
      var slideLayer = document.querySelector(".slide-layer");
      var sixthDiv = slideLayer.children[6];
      sixthDiv.innerHTML = "";
      sixthDiv.innerHTML = data;
      sixthDiv.style.color="black";
      sixthDiv.style.textAlign="center";
      sixthDiv.style.fontSize="40px";
      sixthDiv.style.lineHeigt="101px";
  })

//Sprawdzenie ilości dzieci obiektu HTML:
console.log(document.querySelector(".slide-layer").children) //otrzymanie tablicy z elementami

```
Just couple of code snippet. Nothing special :)





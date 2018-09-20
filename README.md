# Tools-and-useful-templates :sos::fuelpump::coffee:
For my own usage :shipit::computer:


:punch:HTML :

```HTML
<!DOCTYPE html>
<html>
<head>
<title>MyCodeSnippet</title>
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
    <div>7</div>
  </div>
  <p class="para">Some text</p>

<div class="slide-text"></div>
<div class='imgDiv'></div>
</body>
</html>
```
:muscle: CSS:

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
:metal: JS:

:wrench:Wstawanie zdjęcia jako tło Div'a:

```JavaScript
var mainWindowSlide = document.querySelector(".main-window-slide-container");
var slideDiv = mainWindowSlide.firstElementChild;

slideDiv.style.backgroundImage = "url('http://bdfjade.com/data/out/102/6066356-wallpaper-image.jpeg')"
slideDiv.style.backgroundSize = "cover";
slideDiv.style.backgroundRepeat = "no-repeat";

document.querySelector(".slideobject-maskable").style.backgroundImage = "url('https://www.w3schools.com/w3css/img_lights.jpg')"
document.querySelector(".slideobject-maskable").style.backgroundSize = "cover";
document.querySelector(".slideobject-maskable").style.backgroundRepeat = "no-repeat"; */
```

:wrench:Nawigacja po drzewie DOM oraz pobranie dzieci elementu HTML:

```JavaScript
var slideLayer = document.querySelector(".slide-layer")
var zeroDiv = slideLayer.children[0];
var firstDiv = slideLayer.children[1];
var secDiv = slideLayer.children[2];
var thirdDiv = slideLayer.children[3];
var fourthDiv = slideLayer.children[4];
var fifthDiv = slideLayer.children[5];
var sixthDiv = slideLayer.children[6];
var seventhDiv = slideLayer.children[7];
var eightDiv = slideLayer.children[8];
var ninthDiv = slideLayer.children[9];
var tenthDiv = slideLayer.children[10];
var eleventhDiv = slideLayer.children[11];
var twelfthDiv = slideLayer.children[12];
var thirteenthDiv = slideLayer.children[13];
var fourteenthDiv = slideLayer.children[14];
var fifteenthDiv = slideLayer.children[15];
var sixteenthDiv = slideLayer.children[16];
var seventeenthDiv = slideLayer.children[17];
var eighteenthDiv = slideLayer.children[18];
var nineteenthDiv = slideLayer.children[19];
var twentiethDiv = slideLayer.children[20];
var twentyFirstDiv = slideLayer.children[21];
var twentySecondDiv = slideLayer.children[22];
var twentythirdDiv = slideLayer.children[23];
var twentyFourthDiv = slideLayer.children[24];
var twentyFifthDiv = slideLayer.children[25];
var twentySixthDiv = slideLayer.children[26];
var twentySeventhDiv = slideLayer.children[27];
var twentyEigthDiv = slideLayer.children[28];
var twentyNinthDiv = slideLayer.children[29];
var thirtiethDiv = slideLayer.children[30];
var thirtyFirstDiv = slideLayer.children[31];
var thirtySecondDiv = slideLayer.children[32];
var thirtythirdDiv = slideLayer.children[33];
var thirtyFourthDiv = slideLayer.children[34];
var thirtyifthDiv = slideLayer.children[35];
var thirtySixthDiv = slideLayer.children[36];
var thirtySeventhDiv = slideLayer.children[37];
var thirtyEigthDiv = slideLayer.children[38];
var thirtyNinthDiv = slideLayer.children[39];
var fortiethDiv = slideLayer.children[40];
var fortyFirstDiv = slideLayer.children[41];
var fortySecondDiv = slideLayer.children[42];
var fortythirdDiv = slideLayer.children[43];
var fortyFourthDiv = slideLayer.children[44];
var fortyFifthDiv = slideLayer.children[45];
var fortySixthDiv = slideLayer.children[46];
var fortySeventhDiv = slideLayer.children[47];
var fortyEigthDiv = slideLayer.children[48];
var fortyNinthDiv = slideLayer.children[49];
var fiftiethDiv = slideLayer.children[50];
```

:wrench:Podstawowe stylowanie:

```JavaScript
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
```

:wrench:Wstawanie tekstu:

```JavaScript
var oldText = document.querySelector(".para");
var newText = document.createTextNode("New Text");
oldText.innerHTML="";
oldText.appendChild(newText);

//Umieszczanie zewnętrznego pliku tekstowego (lokalnie):

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

//LUB(!)

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
  ```
  
  :wrench:Wstawianie własnego bulletPointa:
  
  ```JavaScript
 var slideLayer = document.querySelector(".slide-layer");
var seventhDiv = slideLayer.children[7];
seventhDiv.innerHTML = "";
var paragraph = document.createElement("P");
var bulletPoint = document.createElement('SPAN'); 
bulletPoint.innerHTML = '•';
seventhDiv.appendChild(bulletPoint);
seventhDiv.appendChild(paragraph);

fetch('https://raw.githubusercontent.com/marasmadwa/Tools-and-useful-templates/master/text2.txt')
  .then(response => response.text())
  .then((data) => {
     paragraph.innerHTML = data;
      bulletPoint.style.color = "#30c1de"; //correct slide color!
      bulletPoint.innerHTML = '•';
      var newText2 = bulletPoint.innerHTML + " " + paragraph.innerHTML;
      //seventhDiv.style.textAlign="center";
      seventhDiv.style.color="black";
      //seventhDiv.style.fontWeight="bold";
      seventhDiv.style.fontFamily = "Trebuchet MS,Charcoal,sans-serif";
      seventhDiv.style.display = "flex";
      seventhDiv.style.alignItems = "center";
      seventhDiv.style.flexDirection = "row";
      seventhDiv.style.alignItems = "center";
      seventhDiv.style.fontSize="22px";
      //seventhDiv.style.paddingTop="25px";
  })
  ```
  
:wrench:Sprawdzenie ilości dzieci elementu HTML w konsoli:

```JavaScript
console.log(document.querySelector(".slide-layer").children) //otrzymanie tablicy z elementami
```

:wrench:Podmiana istniejącego zdjęcia:

```JavaScript
var imgDiv = document.querySelector(".imgDiv");
    imgDiv.style.position="relative";
var newImg = document.createElement("IMG");
    newImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg");
    newImg.setAttribute("width", "304");
    newImg.setAttribute("height", "228");
    newImg.style.position="absolute";
    newImg.style.display="none";
    imgDiv.appendChild(newImg);

var newImg2 = document.createElement("IMG");
    newImg2.setAttribute("src", "https://i2.wp.com/www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg");
    newImg2.setAttribute("width", "304");
    newImg2.setAttribute("height", "228");
    newImg2.style.position="absolute"; 
    imgDiv.appendChild(newImg2);
```

Just couple of code snippet. Nothing special :jack_o_lantern: :dart:





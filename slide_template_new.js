//zmienne utworzone dla zmiany zdjęć. Należy pamiętać, że elementy w tabeli wyświetlane są od zera. Naszym pierwszym elementem jest element[0]!
 
var imgUrl0= "img/placeholder.jpg";
var imgUrl1= "img/placeholder.jpg";
var imgUrl2= "img/placeholder.jpg";
var imgUrl3= "img/placeholder.jpg";
var imgUrl4= "img/placeholder.jpg";
var imgUrl5= "img/placeholder.jpg";
var imgUrl6= "img/placeholder.jpg";
var imgUrl7= "img/placeholder.jpg";
var imgUrl8= "img/placeholder.jpg";
var imgUrl9= "img/placeholder.jpg";
var imgUrl10= "img/placeholder.jpg";
var imgUrl11= "img/placeholder.jpg";
var imgUrl12= "img/placeholder.jpg";
var imgUrl13= "img/placeholder.jpg";
var imgUrl14= "img/placeholder.jpg";
var imgUrl15= "img/placeholder.jpg";



var allImages = document.querySelectorAll("image");
var oldFirstImg = allImages[4];
oldFirstImg.setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl1) ;											//zdjęcia z poprzedniego slajdu (unikanie "migania" oryginalnych zdjęć)
var oldSecImg = allImages[3];
oldSecImg.setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl2);

var firstImg = allImages[4];
firstImg.setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl1);											//zdefiniowanie zmiennej, ktróra odwołuje się do konkretnego zdjęcia, podtawienie nowego zdjęcia
var secImg = allImages[6];
secImg.setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl2); 


//console.log(allImages) 
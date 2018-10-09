//zmienne utworzone dla zmiany zdjęć. Należy pamiętać, że elementy w tabeli wyświetlane są od zera. Naszym pierwszym elementem jest element[0]!

if( document.readyState === 'complete' ) {
    console.log( 'document is already ready, just execute code here' );
	 loadPictures();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        console.log( 'document was not ready, place code here' );
		 loadPictures();
    });
}

function loadPictures(){
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


var imgArray = [];
var allImages = document.querySelectorAll("image");
imgArray.push(allImages);

for(var i = 0; i < imgArray.length; i++){
	var imgArrayLength = imgArray[i];
	imgArrayLength[2].setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl1);//base-layer photo
	imgArrayLength[3].setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl2);//base-layer photo
	imgArrayLength[4].setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl3);//base-layer photo
}

}


//console.log(allImages) //Dzięki temu możliwe jest  podejrzenie wszytskich elementów "image" dokumentu w konsoli.  Uruchomienie konsoli F12 - Chrome/Firefox/Edge/Explorer

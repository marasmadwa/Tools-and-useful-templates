//zmienne utworzone dla zmiany zdjęć. Należy pamiętać, że elementy w tabeli wyświetlane są od zera. Naszym pierwszym elementem jest element[0]!

//console.log(document.querySelector(".slide-layer").children) --> wszystkie dzieci base-layer


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
	imgArrayLength[5].setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl1);
	imgArrayLength[3].setAttributeNS("http://www.w3.org/1999/xlink","href", imgUrl2);
}


}

var hotspot1 = document.querySelector(".slide-layer").children[16];
var hotspot2 = document.querySelector(".slide-layer").children[17];
var hotspot3 = document.querySelector(".slide-layer").children[14];

function loadContent() {
var body = document.getElementsByTagName("body")[0];
var cover = document.createElement('div');
var spinner = document.createElement('div');
body.insertBefore(cover, body.firstChild);
cover.appendChild(spinner);
cover.id = "cover";

cover.style.display = "flex";
cover.style.justifyContent = "center";
cover.style.alignItems = "center";
cover.style.position = "fixed";
cover.style.left = "0px"; 
cover.style.right = "0px"; 
cover.style.top = "0px"; 
cover.style.bottom = "0px"; 
cover.style.backgroundColor = "white";
cover.style.zIndex = "99";
cover.style.display = "block";

spinner.style.marginLeft = "50%";
spinner.style.marginTop = "50%";
spinner.style.border = "16px solid #f3f3f3";
spinner.style.borderTop = "16px solid #3498db";
spinner.style.borderRadius = "50%";
spinner.style.width = "120px"
spinner.style.height = "120px"
spinner.style.animation = "spin 2s linear infinite"

setTimeout(function(){ 
cover.style.display = "none" 

}, 1500);

}

hotspot1.addEventListener("click", loadContent);
hotspot2.addEventListener("click", loadContent);
hotspot3.addEventListener("click", loadContent);




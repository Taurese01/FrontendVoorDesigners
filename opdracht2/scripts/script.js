var nummer1 = document.querySelector(".nummer1");
var muziekje1 = new Audio('muziek/hurricane.m4a');
var liedjebezig = false;

function liedje1() {
	nummer1.src = "images/video-pause-button.png";
	muziekje1.play();
  liedjebezig = true;
}


// function pauzeActie1() {
// 	nummer1.src = "images/play-button.png";

//   if (liedjebezig == true) {
//     muziekje1.pause();
//   } else {
//     muziekje1.play();
//   }


// }


nummer1.addEventListener("click", liedje1);
// nummer1.addEventListener("click", pauzeActie1);



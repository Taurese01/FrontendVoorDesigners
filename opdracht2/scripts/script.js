

// Muziek

var nummer1 = document.querySelector(".nummer1");
var muziekje1 = new Audio('muziek/GodsPlan.mp3');
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



var sort = document.querySelector(".sort1");
var sort2 = document.querySelector(".sort2");
var options = {
  valueNames: [ 'name', 'tijd' ]
};

// Stap 3.
var charactersList = new List('theList', options);

// Stap 4.
function sortLiedjes(){
  charactersList.sort('name', { order: "asc" });
}


function sortLiedjes2(){
  charactersList.sort('tijd', { order: "asc" });
}

sort.addEventListener("click", sortLiedjes);
sort2.addEventListener("click", sortLiedjes2);



// Drag & Drop

// Stap 5. --> CSS vanaf regel 58

/* hopla klaar */

/* getting started --> http://sortablejs.github.io/Sortable/#simple-list */

// Stap 1. --> klik op het tandwiel (vergeet de https:// niet)

var list = document.querySelector(".list");
// Stap 2.
new Sortable(list, {
  animation: 300, // ca 300ms is meestal een mooie tijd
});


// Stap 3. --> nu verder met de css


/* hopla klaar */
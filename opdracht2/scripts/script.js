// Liedjes afspelen functie regel 2 tot en met 273

// de variabele selecteerd alle audio files van de html
var audio = document.querySelectorAll("Audio");
var checkboxes = document.querySelectorAll("input[type=checkbox]");

// een variabele aan voor de checkbox afbeelding (de afspelen / pauze knop)
var nummer1 = document.querySelector(".nummer1");
var nummer2 = document.querySelector(".nummer2");
var nummer3 = document.querySelector(".nummer3");
var nummer4 = document.querySelector(".nummer4");
var nummer5 = document.querySelector(".nummer5");
var nummer6 = document.querySelector(".nummer6");
var nummer7 = document.querySelector(".nummer7");
var nummer8 = document.querySelector(".nummer8");
var nummer9 = document.querySelector(".nummer9");
var nummer10 = document.querySelector(".nummer10");
var nummer11 = document.querySelector(".nummer11");
var nummer12 = document.querySelector(".nummer12");
var nummer13 = document.querySelector(".nummer13");
var nummer14 = document.querySelector(".nummer14");
var nummer15 = document.querySelector(".nummer15");
var nummer16 = document.querySelector(".nummer16");
var nummer17 = document.querySelector(".nummer17");
var nummer18 = document.querySelector(".nummer18");
var nummer19 = document.querySelector(".nummer19");
var nummer20 = document.querySelector(".nummer20");

// het liedje afspelen krijgt de waarde false omdat deze niet automatisch afspeeld
var liedjebezig1 = false;
var liedjebezig2 = false;
var liedjebezig3 = false;
var liedjebezig4 = false;
var liedjebezig5 = false;
var liedjebezig6 = false;
var liedjebezig7 = false;
var liedjebezig8 = false;
var liedjebezig9 = false;
var liedjebezig10 = false;
var liedjebezig11 = false;
var liedjebezig12 = false;
var liedjebezig13 = false;
var liedjebezig14 = false;
var liedjebezig15 = false;
var liedjebezig16 = false;
var liedjebezig17 = false;
var liedjebezig18 = false;
var liedjebezig19 = false;
var liedjebezig20 = false;

// Regel 53 t/m 272 (code word 20 keer herhaald)
// De function zorgt ervoor dat er word gekeken of het nummer afspeeld, als dit het geval is dan zet hij deze op pauze, en als dit niet het geval is dan word deze gestart. 

function liedje1() {
  if (liedjebezig1) {
    muziekje1.pause(); // Pauzeer het liedje als het al aan het afspelen is
    liedjebezig1 = false; // Markeer het liedje als niet bezig
  } else {
    muziekpauze(); // Zet alle liedjes op pauze (function word later in de code behandeld)
    muziekje1.play(); // Speel het liedje af als het niet bezig is
    liedjebezig1 = true; // Markeert het liedje als bezig
  }
}

function liedje2() {
  if (liedjebezig2) {
    muziekje2.pause();
    liedjebezig2 = false;
  } else {
    muziekpauze();
    muziekje2.play();
    liedjebezig2 = true;

  }
}

function liedje3() {
  if (liedjebezig3) {
    muziekje3.pause();
    liedjebezig3 = false;
  } else {
    muziekpauze();
    muziekje3.play();
    liedjebezig3 = true;
  }
}

function liedje4() {
  if (liedjebezig4) {
    muziekje4.pause();
    liedjebezig4 = false;
  } else {
    muziekpauze();
    muziekje4.play();
    liedjebezig4 = true;
  }
}

function liedje5() {
  if (liedjebezig5) {
    muziekje5.pause();
    liedjebezig5 = false;
  } else {
    muziekpauze();
    muziekje5.play();
    liedjebezig5 = true;
  }
}

function liedje6() {
  if (liedjebezig6) {
    muziekje6.pause();
    liedjebezig6 = false;
  } else {
    muziekpauze();
    muziekje6.play();
    liedjebezig6 = true;
  }
}

function liedje7() {
  if (liedjebezig7) {
    muziekje7.pause();
    liedjebezig7 = false;
  } else {
    muziekpauze();
    muziekje7.play();
    liedjebezig7 = true;
  }
}

function liedje8() {
  if (liedjebezig8) {
    muziekje8.pause();
    liedjebezig8 = false;
  } else {
    muziekpauze();
    muziekje8.play();
    liedjebezig8 = true;
  }
}

function liedje9() {
  if (liedjebezig9) {
    muziekje9.pause();
    liedjebezig9 = false;
  } else {
    muziekpauze();
    muziekje9.play();
    liedjebezig9 = true;
  }
}

function liedje10() {
  if (liedjebezig10) {
    muziekje10.pause();
    liedjebezig10 = false;
  } else {
    muziekpauze();
    muziekje10.play();
    liedjebezig10 = true;
  }
}

function liedje11() {
  if (liedjebezig11) {
    muziekje11.pause();
    liedjebezig11 = false;
  } else {
    muziekpauze();
    muziekje11.play();
    liedjebezig11 = true;
  }
}

function liedje12() {
  if (liedjebezig12) {
    muziekje12.pause();
    liedjebezig12 = false;
  } else {
    muziekpauze();
    muziekje12.play();
    liedjebezig12 = true;
  }
}

function liedje13() {
  if (liedjebezig13) {
    muziekje13.pause();
    liedjebezig13 = false;
  } else {
    muziekpauze();
    muziekje13.play();
    liedjebezig13 = true;
  }
}

function liedje14() {
  if (liedjebezig14) {
    muziekje14.pause();
    liedjebezig14 = false;
  } else {
    muziekpauze();
    muziekje14.play();
    liedjebezig14 = true;
  }
}

function liedje15() {
  if (liedjebezig15) {
    muziekje15.pause();
    liedjebezig15 = false;
  } else {
    muziekpauze();
    muziekje15.play();
    liedjebezig15 = true;
  }
}

function liedje16() {
  if (liedjebezig16) {
    muziekje16.pause();
    liedjebezig16 = false;
  } else {
    muziekpauze();
    muziekje16.play();
    liedjebezig16 = true;
  }
}

function liedje17() {
  if (liedjebezig17) {
    muziekje17.pause();
    liedjebezig17 = false;
  } else {
    muziekpauze();
    muziekje17.play();
    liedjebezig17 = true;
  }
}

function liedje18() {
  if (liedjebezig18) {
    muziekje18.pause();
    liedjebezig18 = false;
  } else {
    muziekpauze();
    muziekje18.play();
    liedjebezig18 = true;
  }
}

function liedje19() {
  if (liedjebezig19) {
    muziekje19.pause();
    liedjebezig19 = false;
  } else {
    muziekpauze();
    muziekje19.play();
    liedjebezig19 = true;
  }
}

function liedje20() {
  if (liedjebezig20) {
    muziekje20.pause();
    liedjebezig20 = false;
  
  } else {
    muziekpauze();
    muziekje20.play();
    liedjebezig20 = true;

  }
}


// Stopt alle liedjes (wil hier nog een efficientere versie van maken, waarbij je niet nog op het nieuwe liedje op pauze moet drukken voordat beide liedjes stoppen)
// var pauze = document.querySelectorAll("audio");

function muziekpauze() {
  audio.forEach(song => {

    if (song.paused == false){
      song.pause();
      var currentCheckbox = song.nextElementSibling;
      currentCheckbox.checked = false;

      liedjebezig1 = false;
      liedjebezig2 = false;
      liedjebezig3 = false;
      liedjebezig4 = false;
      liedjebezig5 = false;
      liedjebezig6 = false;
      liedjebezig7 = false;
      liedjebezig8 = false;
      liedjebezig9 = false;
      liedjebezig10 = false;
      liedjebezig11 = false;
      liedjebezig12 = false;
      liedjebezig13 = false;
      liedjebezig14 = false;
      liedjebezig15 = false;
      liedjebezig16 = false;
      liedjebezig17 = false;
      liedjebezig18 = false;
      liedjebezig19 = false;
      liedjebezig20 = false;
    }
  });
  
}

// De Event listeners voor het starten van het liedje (wanneer er op de button van een van de liedjes word geklikt speelt de desbetreffende function af)!
nummer1.addEventListener("click", liedje1);
nummer2.addEventListener("click", liedje2);
nummer3.addEventListener("click", liedje3);
nummer4.addEventListener("click", liedje4);
nummer5.addEventListener("click", liedje5);
nummer6.addEventListener("click", liedje6);
nummer7.addEventListener("click", liedje7);
nummer8.addEventListener("click", liedje8);
nummer9.addEventListener("click", liedje9);
nummer10.addEventListener("click", liedje10);
nummer11.addEventListener("click", liedje11);
nummer12.addEventListener("click", liedje12);
nummer13.addEventListener("click", liedje13);
nummer14.addEventListener("click", liedje14);
nummer15.addEventListener("click", liedje15);
nummer16.addEventListener("click", liedje16);
nummer17.addEventListener("click", liedje17);
nummer18.addEventListener("click", liedje18);
nummer19.addEventListener("click", liedje19);
nummer20.addEventListener("click", liedje20);

// hulpbron/inspiratie: code met behulp van Sanne's Codepen Sorteert de code op alfabetisch goed en alfabetisch omgekeerd & https://listjs.com/
// Code zorgt ervoor dat de sorteer functies werken, deze worden geactiveerd door op de "Titel" of "Duratie" buttons te klikken
// regel 310 tot en met 356
var sort = document.querySelector(".sort1");
var sort2 = document.querySelector(".sort2");
var deOpties = {
  valueNames: ['name', 'tijd']
};

// Stap 3.
var SorteerLijst = new List('theList', deOpties);

// Stap 4.
var sortVolgordeNaam = 'asc'; // De huidige sorteer volgorde voor de tekst word ingesteld op oplopend 
var sortVolgordeTijd = 'asc'; // De huidige sorteer volgorde voor de tijd word ingesteld op oplopend

function sortLiedjesNaam() {
  if (sortVolgordeNaam === 'asc') { // Controleert of de sorteer volgorde op naam oplopend is
    SorteerLijst.sort('name', {
      order: 'asc'
    }); // Alfabetische volgorde
    sortVolgordeNaam = 'desc';
    sort.textContent = 'A-Z'; // geprobeerd dit te fixen in de CSS maar tervergeefs (past de tekst in de button aan)
  } else {
    SorteerLijst.sort('name', {
      order: 'desc'
    }); // Omgekeerde alfabetische volgorde (zoekt naar dichtbijst de letter Z)
    sortVolgordeNaam = 'asc';
    sort.textContent = 'Z-A'; // geprobeerd dit te fixen in de CSS maar tervergeefs (past de tekst in de button aan)
  }
}

function sortLiedjesTijd() {
  if (sortVolgordeTijd === 'asc') { // Controleert of de sorteer volgorde op tijd oplopend is
    SorteerLijst.sort('tijd', {
      order: 'asc'
    }); // Oplopende liedjes duratie (zoekt naar dichtstbijst 0:00)
    sortVolgordeTijd = 'desc';
    sort2.textContent = 'Duratie ↑'; // geprobeerd dit te fixen in de CSS maar tervergeefs (past de tekst in de button aan)
  } else {
    SorteerLijst.sort('tijd', {
      order: 'desc'
    }); // Aflopende liedjes duratie (zoekt naar dichtstbijst 9:99)
    sortVolgordeTijd = 'asc';
    sort2.textContent = 'Duratie ↓'; // geprobeerd dit te fixen in de CSS maar tervergeefs (past de tekst in de button aan)
  }
}

sort.addEventListener("click", sortLiedjesNaam);
sort2.addEventListener("click", sortLiedjesTijd);


// Drag & Drop 
// Deze code zorgt ervoor dat je de items in de list (liedjes) kan slepen en ze hiermee opnieuw kan ordenen, dit word gedaan d.m.v de library
// Regel 363 tot en met 366
var list = document.querySelector(".list");
new Sortable(list, {
  animation: 300, // ca 300ms is meestal een mooie tijd
});


// Verwijder button van de li
// Dit zorgt ervoor dat wanneer er op een prullenbakje word gedrukt in een specifieke li dat de li word verwijderd
// Er word gezocht naar de li die het dichtsbijst is (degene van het prullenbakje), deze word vervolgens verwijderd uit de ul
// Regel 372 tot en met 383
var deleteButtons = document.querySelectorAll('#deleteButton');

function deleteListItem() {
  var listItem = this.closest('li'); // Er word gezocht naar de li die het dichtsbijst is (degene van het prullenbakje)
  var listAudio = listItem.querySelector('audio');
  if (listAudio.paused == false){
    AllesAfspelen.textContent = "Alles Afspelen";
  }

  if (listItem) {
    listItem.remove(); // verwijderd de li 
  }
}

deleteButtons.forEach(function (button) {
  button.addEventListener('click', deleteListItem);
});



// Shuffle knop
// Wanneer er op de Shuffle button word geklikt word de lijst geshuffeld d.m.v math random (begrijp deze niet zo goed)
// hulpbron/inspiratie van https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
// Regel 392 tot en met 402 

var shuffleButton = document.getElementById("shuffle"); // Selecteer het shuffle-knop met behulp van de ID
var list = document.querySelector(".list"); // Selecteer de ul met behulp van de class-naam

function shuffleList() {
  var children = list.children;
  var length = children.length; // Lengte van de lijst
  for (var i = length; i >= 0; i--) { // De lengte van de lijst is 20, er word gekeken of de lijst groter of gelijk is als 0. Elke keer als de code word uitgevoerd gaat er 1 af totdat het de 0 heeft bereikt
    var randomIndex = Math.random() * i | 0; // Kies een willekeurig getal tussen 0 en i 
    list.appendChild(children[randomIndex]); // Verplaatst de li's achteraan in de lijst
  }
}
shuffleButton.addEventListener("click", shuffleList);


// Omhoog en omlaag (met behulp van het internet)
// hulpbron/inspiratie: combinatie van https://www.w3schools.com/jsref/prop_element_previouselementsibling.asp, https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore, https://www.w3schools.com/js/js_htmldom_navigation.asp
// Deze code zorgt ervoor dat je de liedjes (li's) opnieuw kan ordenen met de pijltjes knoppen (pijltje omhoog voor omhoog en pijltje omlaag voor omlaag).
// Regel 411 tot en met 459

var OmhoogKnop = document.querySelectorAll('.omhoog');
var OmlaagKnop = document.querySelectorAll('.omlaag');

function Omhoog() {
  var listItem = document.activeElement.closest('li'); // Vind de list item die het dichtste bij het pijltje zit.
  if (listItem) {
    var VorigItem = listItem.previousElementSibling; // Vind het vorige element van het list item
    if (VorigItem) {
      listItem.parentNode.insertBefore(listItem, VorigItem); // Verplaats het list item voor het vorige element

      setTimeout(() => {
        listItem.classList.add('moving', 'move-up'); // maakt de "move up" class aan voor de animatie in css
        setTimeout(() => {
          listItem.classList.remove('move-up'); // Verwijderd de "move-up" class na 0.3 seconden 
          setTimeout(() => {
            listItem.classList.remove('moving'); // Verwijderd de "moving" class na 0.3 seconden 
          }, 600);
        }, 650);
      }, 50);
    }
  }
}

function Omlaag() {
  var listItem = document.activeElement.closest('li'); // Vind de list item die het dichtste bij het pijltje zit.
  if (listItem) {
    var VolgendItem = listItem.nextElementSibling; // Vind het volgende element van het list item
    if (VolgendItem) {
      listItem.parentNode.insertBefore(VolgendItem, listItem); // Verplaats het list item naar het volgende element

      listItem.classList.add('moving', 'move-down'); // Maakt de "move down" class aan voor de animatie in css
      setTimeout(() => {
        listItem.classList.remove('moving', 'move-down'); // Verwijderd de "move-down" class na 0.3 seconden 
      }, 600);
    }
  }
}

// het gebruiken van de arrow keys, de functie word aangeroepen als de keys worden ingedrukt op het toetsenbord
document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowUp') {
    Omhoog(); // Wanneer de arrow up key word ingedrukt dan word de functie omhoog opgeroepen
  } else if (event.key === 'ArrowDown') {
    Omlaag(); // Wanneer de arrow down key word ingedrukt dan word de functie omlaag opgeroepen
  }
});

OmhoogKnop.forEach(function (button) {
  button.addEventListener('click', Omhoog);
  button.addEventListener('touchstart', Omhoog); // Dit zorgt ervoor dat de pijltjes knoppen ook op mobiel werken (niet de responsive emulator maar echt op mijn telefoon zelf).
});

OmlaagKnop.forEach(function (button) {
  button.addEventListener('click', Omlaag);
  button.addEventListener('touchstart', Omlaag); // Dit zorgt ervoor dat de pijltjes knoppen ook op mobiel werken (niet de responsive emulator maar echt op mijn telefoon zelf).
});


// Alles afspelen knop (met behulp van het internet) 
// hulpbron/inspiratie: die ik als hulp heb gebruikt hiervoor: https://stackoverflow.com/questions/67584286/how-to-play-multiple-audio-files-one-by-one-in-html-5
// Code vind ik nog erg lastig en begrijp ik niet volledig (geen vragen over stellen)
// Regel 467 tot en met 490

var AllesAfspelen = document.querySelector(".Alles-Afspelen"); // Selecteer de Alles-Afspelen knop d.m.v de class naam
var DeLiedjes = document.getElementsByTagName("audio"); // Verzamelt alle audio-elementen in mijn HTML
var HuidigLiedje = 0; // Houd bij welk liedje momenteel wordt afgespeeld
var AfspelenAlGestart = false; // Geeft aan of het afspelen van alle liedjes al is gestart

function SpeelLiedjeAf() {
  if (HuidigLiedje < DeLiedjes.length) {
    if (DeLiedjes[HuidigLiedje].paused || DeLiedjes[HuidigLiedje].ended) {
      DeLiedjes[HuidigLiedje].play(); // Speel het huidige liedje af als het gepauzeerd is of is afgelopen
      var currentCheckbox = DeLiedjes[HuidigLiedje].nextElementSibling;
      currentCheckbox.checked = true;
      AllesAfspelen.textContent = "Pauzeren"; // Verander de tekst van de knop naar "pauzeren"
    } else {
      DeLiedjes[HuidigLiedje].pause(); // Pauzeer het huidige liedje als het al aan het afspelen is
      AllesAfspelen.textContent = "Verder met afspelen"; // Verander de tekst van de knop naar "afspelen"
    }
    
    DeLiedjes[HuidigLiedje].addEventListener("ended", function (event) {
      var currentCheckbox = event.target.nextElementSibling;
      currentCheckbox.checked = false;
      HuidigLiedje++; // Ga naar het volgende liedje als het huidige liedje is afgelopen
      SpeelLiedjeAf(); // Speel het volgende liedje af

  
    });
  } 
  
  else {
    HuidigLiedje = 0; // Wanneer alle liedjes zijn afgespeeld, reset de lijst
    AfspelenAlGestart = false; // Markeer het afspelen van de liedjes als niet gestart
    AllesAfspelen.textContent = "alles afspelen"; // Verander de tekst van de knop naar "alles afspelen"
  }
}

AllesAfspelen.addEventListener("click", function () {
  if (!AfspelenAlGestart) {
    muziekpauze(); // zorgt ervoor dat de losse liedjes stoppen wanneer er op alles afspelen word gedrukt
    AfspelenAlGestart = true; // Markeer het afspelen als gestart
    AllesAfspelen.textContent = "Pauzeren"; // Verander de tekst van de knop naar "pauzeren"
    SpeelLiedjeAf(); // Start het afspelen van de liedjes
  } else {
    var currentCheckbox = DeLiedjes[HuidigLiedje].nextElementSibling;
    currentCheckbox.checked = false;
    AfspelenAlGestart = false;
    DeLiedjes[HuidigLiedje].pause(); 
    AllesAfspelen.textContent = "Alles afspelen"; // Verander de tekst van de knop naar "afspelen"
  }
});





//   // Speel het geselecteerde liedje af
//   if (liedjebezig[index]) {
//     audio[index].pause();
//     liedjebezig[index] = false;
//   } else {
//     muziekpauze();
//     audio[index].play();
//     liedjebezig[index] = true;
//   }

// // Event listeners voor het afspelen van individuele liedjes
// nummer1.addEventListener("click", function() {
//   speelLiedjeAf(0);
// });
// nummer2.addEventListener("click", function() {
//   speelLiedjeAf(1);
// });
// // Voeg hier de overige event listeners toe voor de andere liedjes (nummer3, nummer4, enz.)

// // Functie voor het afspelen van alle liedjes

// // Event listener voor het afspelen van alle liedjes
// AllesAfspelen.addEventListener("click", speelAlleLiedjesAf);

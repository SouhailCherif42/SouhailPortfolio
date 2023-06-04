
window.addEventListener("blur", () => {
  document.title = "Ou-est-tu passé ?";
})
window.addEventListener("focus", () => {
  document.title = "Souhail"
})

const portfoliodiv = document.getElementById('Portfolio');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const e = document.getElementById('e');
const f = document.getElementById('f');
const g = document.getElementById('g');
const h = document.getElementById('h');
const i = document.getElementById('i');
const j = document.getElementById('j');
const k = document.getElementById('k');
const l = document.getElementById('l');


function handleScroll() {
  const topOfportfolioDiv = portfoliodiv.getBoundingClientRect().top;

  if (topOfportfolioDiv < window.innerHeight) {
    a.classList.add('a');
    b.classList.add('b');
    c.classList.add('c');
    d.classList.add('d');
    e.classList.add('e');
    f.classList.add('f');
    g.classList.add('g');
    h.classList.add('h');
    i.classList.add('i');
    j.classList.add('j');
    k.classList.add('k');
    l.classList.add('l');
  }
}

window.addEventListener('scroll', handleScroll);

const marqueediv = document.getElementById('marquee');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const sie = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const wportfolio = document.getElementById('wportfolio');

function handleScroll2() {
  const topofmarqueediv = marqueediv.getBoundingClientRect().top;

  if(topofmarqueediv< window.innerHeight){
    one.classList.add('slide-left1');
    five.classList.add('slide-left1');
    two.classList.add('slide-left2');
    sie.classList.add('slide-left2');
    three.classList.add('slide-right1');
    seven.classList.add('slide-right1');
    four.classList.add('slide-right2');
    eight.classList.add('slide-right2');
    wportfolio.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll2);

const presentationDiv = document.getElementById('presentation');
const moi = document.getElementById('moi');
const r = document.getElementById('r');
const title2 = document.getElementById('title2');

function handleScroll3() {
  const topOfPresentationDiv = presentationDiv.getBoundingClientRect().top;

  if (topOfPresentationDiv < window.innerHeight) {
    title2.classList.add('slide-out-right');
  }
}

window.addEventListener('scroll', handleScroll3);

function handleScroll4() {
  const topofmoidiv = moi.getBoundingClientRect().top;

  if(topofmoidiv < window.innerHeight){
    moi.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll4);

function handleScroll5() {
  const topofrdiv = r.getBoundingClientRect().top;

  if(topofrdiv < window.innerHeight){
    r.classList.add('slide-out');
  }
}

window.addEventListener('scroll', handleScroll5);

var translations = {
  "en": {
      "a2":"About me",
      "a3":"Portfolio",
      "a4":"Skills",
      "a5":"Home",
      "music":"Sound <i>OFF</i>",
      "left1":"<h1>Hello !<br>I'm Souhail.</h1><div class='wrapper'><div class='static-txt' id='static-txt'>I'm a</div><ul class='dynamic-txts'><li><span>Student.</span></li><li><span>Engineer.</span></li><li><span>Developer.</span></li><li><span>Professional.</span></li></ul></div><h4 id='mm' class='mm'>I'm currently in my second year of a Bachelor of Science in Engineering at ISTP/ Mines Saint-Etienne. I'm seeking an internship of at least 2 months starting in May in web development.</h4><div class='boutton'><a href='Autres/CVSouhail.pdf' id='CV' class='CV' target='_blank'><span class='material-symbols-outlined'>description</span>My Resume</a><a id='Call' class='Call' target='_blank' href='https://calendly.com/cherifsouhail/call?month=2023-01'><span class='material-symbols-outlined'>event</span>Book a call</a></div>",
  
  },
  "fr": {
      "a2":"Moi",
      "a3":"Portfolio",
      "a4":"Compétences",
      "a5":"Accueil",
      "music":"Son <i>OFF</i>",
      "left1":"<h1>Salut !<br>Je suis Souhail.</h1><div class='wrapper'><div class='static-txt' id='static-txt'>Je suis</div><ul class='dynamic-txts'><li><span>Étudiant.</span></li><li><span>Ingénieur.</span></li><li><span>Developer.</span></li><li><span>Professionnel.</span></li></ul></div><h4 id='mm' class='mm'>Je suis actuellement en deuxième année de licence d'ingénieur à l'ISTP/ Mines Saint-Etienne. Je suis à la recherche d'un stage d'au moins 2 mois à partir du mois de mai dans le domaine du développement web.</h4><div class='boutton'><a href='Autres/CVSouhail.pdf' id='CV' class='CV' target='_blank'><span class='material-symbols-outlined'>description</span>Mon CV</a><a id='Call' class='Call' target='_blank' href='https://calendly.com/cherifsouhail/call?month=2023-01'><span class='material-symbols-outlined'>event</span>Réservez un appel</a></div>", 
  }
};

/*document.getElementById("left1").innerHTML = translations[currentLang]["left1"];*/

// variable to hold current language
var currentLang = "en";

// function to update text with translations
function updateText() {
  document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
  document.getElementById("a3").innerHTML = translations[currentLang]["a3"];
  document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
  document.getElementById("a5").innerHTML = translations[currentLang]["a5"];
  document.getElementById("music").innerHTML = translations[currentLang]["music"];
  document.getElementById("left1").innerHTML = translations[currentLang]["left1"];
  
}

// function to toggle language
function toggleLang() {
  if (currentLang === "en") {
      currentLang = "fr";
  } else {
      currentLang = "en";
  }
  updateText();
}

// add event listener to language toggle button
document.getElementById("language").addEventListener("click", toggleLang);

// call updateText function to set initial text
updateText();




var translations = {
    "en": {
        "p1":"As a junior front-end developer, I have a strong foundation in HTML, CSS, and JavaScript. I am able to create responsive, user-friendly websites and have experience working with popular front-end frameworks such as React.",
        "p2":"I am dedicated to staying up-to-date with the latest front-end technologies and best practices and am always eager to learn and improve my skills. I am a team player and am able to work well under pressure in fast-paced environments. I am committed to delivering high-quality work and am excited to take on new challenges as a front-end developer.",
        "h11":"Education",
        "a5":"Home",
        "a4":"Skills",
        "a2":"About me",
        "a3":"Portfolio",
        "music":"Sound <i>OFF</i>",
        "h12":" CITISE : Triple Degree <br> - CPGE <br>- L1 Physics and Chemistry <br>- DUT GEII",
        "h13":"Second year of the Engineering Sciences degree",
        "h10":"Skills & Experience"
    
    },
    "fr": {
        "p1":"En tant que développeur front-end junior, j'ai de solides bases en HTML, CSS et JavaScript. Je suis capable de créer des sites web réactifs et conviviaux, j'ai de l'expérience avec des frameworks frontaux populaires tels que React.",
        "p2":"Je m'efforce de me tenir au courant des dernières technologies front-end et des meilleures pratiques, et je suis toujours désireux d'apprendre et d'améliorer mes compétences. J'ai l'esprit d'équipe et je suis capable de travailler sous pression dans des environnements en constante évolution. Je m'engage à fournir un travail de haute qualité et je suis enthousiaste à l'idée de relever de nouveaux défis en tant que développeur front-end.",
        "h11":"Parcours Universitaire",
        "a2":"Moi",
        "a3":"Portfolio",
        "a4":"Compétences",
        "a5":"Accueil",
        "music":"Son <i>OFF</i>",
        "h12":" CITISE : Triple diplôme <br> - CPGE <br>- L1 Physique Chimie<br>- DUT GEII",
        "h13":"Deuxième année en Licence Sciences de l'ingénieur",
        "h10":"Compétences & Expérience",
    }
  };
  
  /*document.getElementById("left1").innerHTML = translations[currentLang]["left1"];*/
  
  // variable to hold current language
  var currentLang = "en";
  
  // function to update text with translations
  function updateText1() {
    document.getElementById("p2").innerHTML = translations[currentLang]["p2"];
    document.getElementById("p1").innerHTML = translations[currentLang]["p1"];
    document.getElementById("h11").innerHTML = translations[currentLang]["h11"];
    document.getElementById("a2").innerHTML = translations[currentLang]["a2"];
    document.getElementById("a4").innerHTML = translations[currentLang]["a4"];
    document.getElementById("h12").innerHTML = translations[currentLang]["h12"];
    document.getElementById("a5").innerHTML = translations[currentLang]["a5"];
    document.getElementById("music").innerHTML = translations[currentLang]["music"];
    document.getElementById("h13").innerHTML = translations[currentLang]["h13"];
    document.getElementById("h10").innerHTML = translations[currentLang]["h10"];
    
  }
  
  // function to toggle language
  function toggleLang1() {
    if (currentLang === "en") {
        currentLang = "fr";
    } else {
        currentLang = "en";
    }
    updateText1();
  }
  
  // add event listener to language toggle button
  document.getElementById("language1").addEventListener("click", toggleLang1);

  updateText1();
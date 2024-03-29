const phoneMenu = () => {
  //pristupamo dom elementima sa kojima radimo
  const mobMenu = document.getElementById("burger-menu");
  const phoneDiv = document.getElementById("mobile-menu");

  //ovdo je ekvivalent stejta u reactu, prati da li nesto zelimo da prikazemo ili ne
  let active = true;
  console.log("radi");
  mobMenu.addEventListener("click", () => {
    //ako je active nije true, dodajemo mu klasu iz css-a, koja sakriva element
    if (!active) {
      //classList.add dodaje css klasu
      phoneDiv.classList.add("d-none");
      //vracamo da bude true, kako bi se kod sledeceg klika bilo true i ona prikazalo element
      return (active = true);
    }
    //ako je active true, mi zelimo da se ukloni klasa iz css-a koja sakriva element
    if (active) {
      //classList.remove uklanja css klasu
      phoneDiv.classList.remove("d-none");
      //na kraju vracamo da active bude false
      return (active = false);
    }
  });
};

const catMenu = () => {
  const catMenu = document.getElementById("cat-menu");
  const catDiv = document.getElementById("cat-mobile");

  let active = true;
  console.log("radi");

  catMenu.addEventListener("click", () => {
    if (!active) {
      catDiv.classList.add("d-none");

      return (active = true);
    }
    if (active) {
      catDiv.classList.remove("d-none");

      return (active = false);
    }
  });
};

const searchMenu = () => {
  const srchMenu = document.getElementById("mob-srch");
  const srchDiv = document.getElementById("search-mobile");

  const logo = document.getElementById("logo");

  const magnifying = document.getElementById("mob-search");

  let active = true;

  srchMenu.addEventListener("click", () => {
    if (!active) {
      srchDiv.classList.add("d-none");
      logo.classList.remove("d-none");
      magnifying.classList.remove("d-none");

      return (active = true);
    }
    if (active) {
      srchDiv.classList.remove("d-none");
      logo.classList.add("d-none");
      magnifying.classList.add("d-none");

      return (active = false);
    }
  });
};

//sakriva ili prikazuje sadrzaj kartice na hover
function showCardContent() {
  //pristupam svim elementima koji imaju klasu .cat-desc, to su u ovom slucaju naslovi u kartici categories
  const categories = Array.from(document.querySelectorAll(".cat-desc"));

  //funkcija koja uklanja klasu d-none kada strelica udje u polje kartice
  const removeHidden = (e) => {
    //upitnik proverava da li objekat sadrzi kljuc pre nego sto nad njim izvrsi metodu
    e.target.querySelector(".cat-hover")?.classList.remove("d-none");
  };

  //funkcija koja dodaje klasu d-none kada strelica izadje is polja kartice
  const addHidden = (e) => {
    e.target.querySelector(".cat-hover")?.classList.add("d-none");
  };
  //posto imam niz sastavljen od naslova koji se nalaze u karticama, kartici pristupam kao roditelju
  //
  categories.forEach((category) => {
    category.parentElement.addEventListener("mouseover", removeHidden);
    category.parentElement.addEventListener("mouseleave", addHidden);
  });
}

function getYear() {
  const year = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  console.log(currentYear);

  year.innerText = currentYear;
}

// Validacija
function validation(){
  const name = document.getElementById("name");
  const surname = document.getElementById("surname");
  const email = document.getElementById("email");
  const text = document.getElementById("questions");
  const form = document.getElementById("form");
  const errorElement = document.getElementById('error');
  const letters = /^[A-Za-z]+$/; //regularni izraz za slova
  
  form.addEventListener('submit', (e) => {
    let messages = []  // this is going to be equal to all of our error messages 

    if (name.value === '' || name.value == null ) {
      messages.push("Ime je obavezno!"); //u slucaju da korisnik niju uneo nista i da li je input prazna 
    }

    if(!name.value.match(letters) && !name.value === ''){
      messages.push("Samo su slova dozvoljena!")
    }
    if(!surname.value.match(letters) && !surname.value === ''){
      messages.push("Samo su slova dozvoljena!")
    }

    if(email.value === '' || email.value == null){
      messages.push ('Email je obavezan!');
    }

    if(text.value === '' || text.value == null){
      messages.push('Pitanje je obavezno!');
    }

    if (messages.length > 0) {
      e.preventDefault() //prevent out page from submitting
      errorElement.innerText = messages.join('!   ')
    }
    console.log('radiiiii')
  });
  
}
function changeImg(){
  const mainImg = document.getElementById("main-foto-model");
  const listImg =Array.from(document.querySelectorAll("img[data-img]"));

  // kopimo podatke iz niza listImg, za svaku pojedinacnu sliku zadajemo funkciju koja: klikom na sliku ispisuje u consoli njen src
  listImg.forEach(img=>{
    img.addEventListener('click',()=>{
      console.log(img.src);
      mainImg.src = img.src; //src glavne foto dodamo src fotke iz niza koju kliknemo
    })
  })


  console.log(listImg);
}



window.addEventListener("DOMContentLoaded", (event) => {
  //funkciju pozivamo tek kada se dom ucita, kako se ne bi desilo da se ona pozove a brauzer jos uvek nije formirao dom element
  phoneMenu();
  catMenu();
  searchMenu();
  showCardContent();
  getYear();
  if(document.getElementById("form")){
    validation();
  } //proverava da li id koji se koristi postoji da ne bi izbacivalo greske
  if(document.getElementById("main-foto-model")){
    changeImg(); 
  } //proverava da li id koji se koristi postoji da ne bi izbacivalo greske
});

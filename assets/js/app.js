const phoneMenu = () => {
  //pristupamo dom elementima sa kojima radimo
  const mobMenu = document.getElementById('burger-menu');
  const phoneDiv = document.getElementById('mobile-menu');

  //ovdo je ekvivalent stejta u reactu, prati da li nesto zelimo da prikazemo ili ne
  let active = true;
  console.log('radi')
  mobMenu.addEventListener('click', () => {
    //ako je active nije true, dodajemo mu klasu iz css-a, koja sakriva element
    if (!active) {
      //classList.add dodaje css klasu
      phoneDiv.classList.add('d-none')
      //vracamo da bude true, kako bi se kod sledeceg klika bilo true i ona prikazalo element
      return active = true;
    }
    //ako je active true, mi zelimo da se ukloni klasa iz css-a koja sakriva element
    if (active) {
      //classList.remove uklanja css klasu
      phoneDiv.classList.remove('d-none')
      //na kraju vracamo da active bude false
      return active = false;
    }
  })

}

const catMenu = () => {
  const catMenu = document.getElementById('cat-menu');
  const catDiv = document.getElementById('cat-mobile');

  let active = true;
  console.log('radi');

  catMenu.addEventListener('click', () => {
    if (!active) {
      catDiv.classList.add('d-none')

      return active = true;
    }
    if (active) {
      catDiv.classList.remove('d-none')

      return active = false;
    }

  })
}

const searchMenu = () => {
  const srchMenu = document.getElementById('mob-srch');
  const srchDiv = document.getElementById('search-mobile');

  let active = true;
  console.log('radi')

  srchMenu.addEventListener('click', () =>{
    if(!active){
      srchDiv.classList.add('d-none')

      return active = true;
    }
    if(active){
      srchDiv.classList.remove('d-none')

      return active = false;
    }
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
  //funkciju pozivamo tek kada se dom ucita, kako se ne bi desilo da se ona pozove a brauzer jos uvek nije formirao dom element
  phoneMenu();
  catMenu();
  searchMenu();
})

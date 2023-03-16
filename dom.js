const navyul = document.querySelector('#navy-ul');
const vet = document.querySelector('.vet-parents');
const menux = document.querySelector('.menu-x');
const lists = document.querySelectorAll('.links-nav');

function openLink() {
  navyul.setAttribute('style', 'visibility:visible');
  menux.setAttribute('style', 'visibility:visible');
}
vet.addEventListener('click', openLink);

function menubtn() {
  navyul.setAttribute('style', 'visibility:hidden');
  menux.setAttribute('style', 'visibility:hidden');
}
menux.addEventListener('click', menubtn);

function listFunc() {
  lists.forEach((list) => list.addEventListener('click', menubtn));
}
listFunc();


const mPost = document.querySelector('#port');

const sect2 = {
  id: 1,
  title: 'Multi-Post Stories',
  image: 'Img Placeholder (4).png',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  prog1: 'css',
  prog2: 'html',
  prog3: 'bootstrap',
  prog4: 'Ruby',
  btn1: 'See Project',
};

function mutiPostCard() {
  mPost.innerHTML =`<div class="name">
  <img src="img/Icons/${sect2.image}" alt="gymfit-image" />
  <div class="cont">
      <h2 class="hb">${sect2.title}</h2>
      <p class="hc">${sect2.description}</p>
      <ul class="nx">
          <li>${sect2.prog1}</li>
          <li>${sect2.prog2}</li>
          <li>${sect2.prog3}</li>
          <li>${sect2.prog4}</li>
      </ul>
      <button type="button" class="button1">${sect2.btn1}</button>
  </div>`;
}

window.addEventListener('load',mutiPostCard);

const projcard4 = document.querySelector('.project-cards');
const sect3 = [{
  id: 2,
  title: 'Profesional Art Printing Data',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  prog1: 'css',
  prog2: 'html',
  prog3: 'Ruby',
  btn1: 'See Project',
},
{
id: 3,
title: 'Profesional Art Printing Data',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
prog1: 'css',
prog2: 'html',
prog3: 'Ruby',
btn1: 'See Project',
},

{
id: 4,
title: 'Profesional Art Printing Data',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
prog1: 'css',
prog2: 'html',
prog3: 'Ruby',
btn1: 'See Project',
},
{
id: 5,
title: 'Profesional Art Printing Data',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
prog1: 'css',
prog2: 'html',
prog3: 'Ruby',
btn1: 'See Project',
},

{
id: 6,
title: 'Profesional Art Printing Data',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
prog1: 'css',
prog2: 'html',
prog3: 'Ruby',
btn1: 'See Project',
},
{
id: 7,
title: 'Profesional Art Printing Data',
description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
prog1: 'css',
prog2: 'html',
prog3: 'Ruby',
btn1: 'See Project',
},];

function cards(){
  sect3.forEach((cardsec) => {

    projcard4.innerHTML += `
    <div class="card3">
    <div class="chips">
       <h3>Professional Art<br>${cardsec.title}</h3>
       <p>${cardsec.description}</p>
       <ul class="card-ul">
           <li>${cardsec.prog1}</li>
           <li>${cardsec.prog2}</li>
           <li>${cardsec.prog3}</li>
       </ul>
      </div>
      <button type="button" class="cardbtn">${cardsec.btn1}</button> 
  </div>`

  })
}
window.addEventListener('load', cards);


// popupwindow

const pops = document.querySelector('.popup');

const popUpWindow = {
  title: 'Keeping track of hundreds  of components website',
  description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  tech1: 'css',
  tech2: 'Bootstrap',
  tech3: 'Ruby on rails',
  button1: 'See Live', 
  button2: 'See Source',
};

function pops(){
  popy.innerHTML =
}



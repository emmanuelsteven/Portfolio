// const vet-parents = document.querySelector('.vet-parents');
// const #navy-ul = document.querySelector('#navy-ul');

// vet-parents.addEventListener('click', () => {
//   vet-parents.classList.toggle('active');
//   navy-ul.classList.toggle('active');
// });

// document.querySelectorAll('ul #navy-ul> li').forEach((n) => n.addEventListener('click', () => {
//   vet-parents.classList.remove('active');
//   navy-ul.classList.remove('active');
// }));
 const navyul= document.querySelector('#navy-ul');
const vet = document.querySelector('.vet-parents');
const menux = document.querySelector('.menu-x');

function openLink() { 
    navyul.setAttribute('style', 'visibility:visible');
    menux.setAttribute('style', 'visibility:visible');

}
vet.addEventListener('click', openLink)

function menubtn(){
    navyul.setAttribute('style','visibility:hidden')
    menux.setAttribute('style', 'visibility:hidden');

}
menux.addEventListener('click', menubtn)
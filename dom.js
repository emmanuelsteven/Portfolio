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

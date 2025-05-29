const image = document.querySelector('.js-image')
const show = document.querySelector('.js-show');
const hide = document.querySelector('.js-hide');

console.log(image)
console.log(show)
console.log(hide)


hide.addEventListener('click', () => {
  image.classList.add('hidden'); 
});

show.addEventListener('click', () => {
  image.classList.remove('hidden');
});


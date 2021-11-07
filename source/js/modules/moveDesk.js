const desk = document.querySelector('.section-1__image--1');
const buttonUp = document.querySelector('.section-1__button--up');
const buttonDown = document.querySelector('.section-1__button--down');
const up = 'section-1__image--move-up';
const down = 'section-1__image--move-down';

const move = (direction1, direction2) => {
  desk.classList.add(direction1);
  desk.classList.remove(direction2);
}

buttonUp.addEventListener('click', () => move(up, down));
buttonDown.addEventListener('click', () => move(down, up));

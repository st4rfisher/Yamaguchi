const modelBlock = document.querySelector('.section-2__image-block--model');
const model = modelBlock.querySelector('.section-2__model');

const levitateModel = () => {
  model.classList.add('section-2__model--levitates');
}

const emergenceModel = () => {
  model.classList.add('section-2__model--emerge');
  setTimeout(levitateModel, 2000);
}


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(emergenceModel, 1700);
});

export {modelBlock};

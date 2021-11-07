import {modelBlock} from './moveModel.js';
const shadow = modelBlock.querySelector('.section-2__shadow');

document.addEventListener('DOMContentLoaded', () => {
  shadow.classList.add('section-2__shadow--grow');
});

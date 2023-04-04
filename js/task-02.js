const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElement = document.querySelector('#ingredients');

const result = ingredients.map(el => {
  const firstElement = document.createElement('li');
  firstElement.textContent = el;
  firstElement.className = 'item';
  return firstElement;

})

ulElement.append(...result)














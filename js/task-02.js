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
console.log(firstElement)
})
console.log(result);

ulElement.append(...result)













//  const result = ingredients.map(el => {
//   const firstListItem = document.createElement('li');
//   firstListItem.textContent = el;
 
//   return firstListItem; 
//  })
//  console.log(result)
//  ulElement.append(...result);


//  const ingredient = els => {
// return els.map(el => {
//   const firstListItem = document.createElement('li');
//   firstListItem.textContent = el;
 
//   return firstListItem; 
//  })
//  }
//  const element = ingredient(ingredients)
//  ulElement.append(...element);



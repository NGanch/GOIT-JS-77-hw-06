
const liItem = document.querySelectorAll('.item')
console.log(`Number of categories: ${liItem.length}`)
liItem.forEach((el) => {
    const h = el.firstElementChild;
    const ulchild = el.lastElementChild;
    const childOful = ulchild.children;
  
    console.log(`Category: ${h.textContent}`)
    console.log(`Elements: ${childOful.length}`)
   
});






















// const navEl = document.querySelector('ul')
// Number of categories: 3
// const navLink = document.querySelector('#categories')
// const childOf = navLink.children;

// console.log(childOf)
// console.log(`Number of categories: ${childOf.length}`)


// const childOfli = hElem.lastElementChild;
// const childOfulofli = childOfli.children;
// console.log(childOfulofli.length)
// console.log(childOFli)

// // Number of categories: 3


// // Category: 
// const hElem = document.querySelectorAll('.item > h2')

// hElem.forEach((el) => {
//     console.log(`Category: ${el.textContent}`)
//     console.log(`Elements: ${el.length}`)
// });


// Category: 





// Elements: 
// const animalEl = document.querySelectorAll('.item > ul')


// animalEl.forEach((el) => {
  
//      console.log(`Elements: ${el.textContent}`)
// })

// const animalEl = document.querySelectorAll('ul > li')


// animalEl.forEach((el) => {
  
//      console.log(`Elements: ${el.length}`)
// })
// const list = document.querySelectorAll('.item > ul')
// const listItems = list.children;
// console.log(listItems)

// // let total = [...animalEl.textContent];
// // console.log(total.textContent);
// listItems.forEach((el) => {
//     //  total = el.textContent;

  
//     // return total.push(el)
//      console.log(`Elements: ${el.textContent}`)


// })

// console.log('document');

// const body = document.body;
// console.log(body);

// const list = body.lastChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);


// console.log(total.length)
// console.log(total);
// console.log(`Elements: ${total.length}`)
// Elements: 


















// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });



// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5







// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
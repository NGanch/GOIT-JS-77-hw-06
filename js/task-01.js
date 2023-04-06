
const liItem = document.querySelectorAll('.item')
console.log(`Number of categories: ${liItem.length}`)
liItem.forEach((el) => {
    const h = el.firstElementChild;
    const ulchild = el.lastElementChild;
    const childOful = ulchild.children;
    console.log(`Category: ${h.textContent}`)
    console.log(`Elements: ${childOful.length}`)
});




















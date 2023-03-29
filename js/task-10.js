
// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає
//  кнопку Створити, після чого рендериться колекція.
//   Натисненням на кнопку Очистити, колекція 
//   елементів очищається.

// Створи функцію createBoxes(amount),
//  яка приймає один параметр - число. Функція створює 
//  стільки <div>, скільки вказано в amount і додає їх у div#boxes.


// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути 
// ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий 
// колір фону у форматі HEX. Використовуй готову 

// функцію getRandomHexColor для отримання кольору.



// Створи функцію destroyBoxes(), яка очищає 
// вміст div#boxes, у такий спосіб видаляючи 
// всі створені елементи.

const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const datacreate = document.querySelector('.btn1');
const datadestroy = document.querySelector('.btn2');

// datacreate.addEventListener('click', onSubmit);
// function onSubmit(events){
//   events.preventDefault();
//   const result =  events.currentTarget.value;
//   result =  onInput;
// }
// function getRandomHexColor() {
//   return datacreate.textContent = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//   }
// ===========================================
// datacreate.addEventListener('click', () => {
//   console.log('klick')
//   input.addEventListener('input', onInput);
//   function onInput (events){
//   const amount = events.currentTarget.value;
//   // console.log(amount)
  
//   let markup = '';
//     for(let i = 0; i < amount; i += 1){
//       markup += `<div class="item" width = "" height = "">Привіт</div>`; 
//     }
//     boxes.innerHTML = markup;
   
//   console.log(boxes)
// }

// });

// ===========================================
// datadestroy.addEventListener('click', getRandomHexColor);
// let color = "";
// function getRandomHexColor() {
//    color = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//    console.log(color);
//   } 
// ===========================================
// input.addEventListener('input', onInput);
//  function onInput(event) {
//   const inputValue = event.currentTarget.value;

//   datacreate.addEventListener('click', createBoxes);
//   function getRandomHexColor() {
//     return datadestroy.textContent = `#${Math.floor(Math.random() * 16777215)
//       .toString(16)
//       .padStart(6, 0)}`;
     
//     }
// function createBoxes(){
 
// let markup = '';
// let width = 20;
// let height = 20;
//   for(let i = 0; i < inputValue; i += 1){
//         width+= 10;
//         height+=10;
//     markup += `<div class="item" style="color:${color}" "width = "${width}px" height = "${height}px">Gh</div>`; 
//   }
  
//   boxes.innerHTML = markup;
// console.log(boxes)

// }
//  }
// ===========================================

input.addEventListener('input', onInput);
 function onInput(event) {
  const inputValue = event.currentTarget.value;

  datacreate.addEventListener('click', createBoxes);
function createBoxes(){
let markup = '';
let createEl = '';
let width = 20;
let height = 20;
  for(let i = 0; i < inputValue; i += 1){ 
   
     createEl = document.createElement('div');
    
    createEl.className = 'item';
    createEl.style.width = width;
    createEl.style.height = height;
      createEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    width+= 10;
    height+= 10;
    createEl.style.width = width + 'px';
    createEl.style.height = height + 'px';
   
  
    boxes.insertAdjacentElement("beforeEnd", createEl)
   
  }
 
console.log(boxes);
datadestroy.addEventListener('click', () => {
  // inputValue.remove();
  inputValue.currentTarget.value.reset();
  boxes.remove();
 
});

}

};


// ===========================================
// datadestroy.addEventListener('click', () => {

//   input.removeEventListener('input', onInput);

// });

// datadestroy.addEventListener('click', destroyBoxes);

// function destroyBoxes(){
//   console.log('klick')
//   boxes.currentTarget.reset();
//  }




// ===========================================







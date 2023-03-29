// Напиши скрипт, який під час втрати фокусу 
// на інпуті (подія blur), перевіряє його
//  вміст щодо правильної кількості 
//  введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в 
// інпуті, зазначається в його атрибуті 
// data-length.
// Якщо введена правильна кількість 
// символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй 
// CSS-класи valid і invalid, які ми вже 
// додали у вихідні файли завдання.


const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur',  () => {

        if(inputEl.value.length === Number.parseInt(inputEl.dataset.length)){
            inputEl.classList.remove('invalid');
            inputEl.classList.add('valid');
            
        } else {
            inputEl.classList.add('invalid');
        }
       
    } 
  );

 console.log(inputEl.value)


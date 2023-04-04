
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
const datacreate = document.querySelector('.btn1');
const datadestroy = document.querySelector('.btn2');

input.addEventListener('input', onInput);
 function onInput(event) {
  const inputValue = event.currentTarget.value;

  datacreate.addEventListener('click', createBoxes);
  function createBoxes(){

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

datadestroy.addEventListener('click', () => {
  if(inputValue > 0){

 boxes.remove();
//  не вдалося видалити саме в інпуті цифру
  }
});
}
};










const color = document.querySelector('.color');
const widgetP = document.querySelector('.widget > p');
const button = document.querySelector('.change-color');
button.addEventListener('click', getRandomHexColor);
  
function getRandomHexColor() {
  let ranColor = '';
   ranColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    console.log(ranColor)
    color.textContent = ranColor;
    color.style.color = ranColor;
    widgetP.style.color = ranColor;
}






const color = document.querySelector('.color');
const button = document.querySelector('.change-color');
button.addEventListener('click', getColor);
  
function getRandomHexColor() {
 return  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getColor(){
  const ranColor = getRandomHexColor();
  color.textContent = ranColor;
  document.body.style.backgroundColor = ranColor;
}







const input = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

input.addEventListener('input',  () => {
    textChange.style.fontSize = `${input.value}px`
});


const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const valueEl = document.querySelector('#value')

const counter = {
    counterValue: 0,
    increment(){

        this.counterValue += 1;
       
    },
    decrement(){

        this.counterValue -= 1;
    }
}

incrementBtn.addEventListener('click', function(){
    counter.increment();
    valueEl.textContent = counter.counterValue;
});
decrementBtn.addEventListener('click', function(){
    counter.decrement();
    valueEl.textContent = counter.counterValue;

})
// Створи змінну counterValue, в якій
//  буде зберігатися поточне значення лічильника 
//  та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині 
// яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної 
// counterValue.

const incrementBtn = document.querySelector('.increment')
const decrementBtn = document.querySelector('.decrement')
const valueEl = document.querySelector('#value')

const counter = {
    counterValue: 0,
    increment(){
        console.log('increment -> this', this);
        this.counterValue += 1;
       
    },
    decrement(){
        console.log('decrement -> this', this);
        this.counterValue -= 1;
    }
}

incrementBtn.addEventListener('click', function(){
    console.log('click + 1');
    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.counterValue;
});
decrementBtn.addEventListener('click', function(){
    console.log('click - 1');
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.counterValue;

})
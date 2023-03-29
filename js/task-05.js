// Напиши скрипт, який під час набору тексту в 
// інпуті input#name-input (подія input), 
// підставляє його поточне значення в
//  span#name-output. Якщо інпут порожній,
//   у спані повинен відображатися рядок "Anonymous".


    // cmd + D = змінна декілька слів одночасно
    // курсок на рядок + ctrl + C = копіює весь рядок
  
  
    // const refs = {
    //     input: document.querySelector('#name-input'),
    //     changeName: document.querySelector('#name-output'),
    // };

    const inputEl = document.querySelector('#name-input');
    const spanEl = document.querySelector('#name-output');
   
    inputEl.addEventListener('input',  function (event) {
       
        console.log(event.currentTarget.value)
        if(event.currentTarget.value === ''){
             spanEl.textContent;
        
        } else {
            spanEl.textContent = event.currentTarget.value;
        }
                  
     });

    
    
    
         


       
  
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const ulElement = document.querySelector('.gallery');
// const liElement = document.createElement('li');
// liElement.classList.add('item');
// const imgElement = document.createElement('img');
// imgElement.classList.add('image');
// liElement.appendChild(imgElement);
// liElement.insertAdjacentHTML("beforeend", imgElement);
// imgElement.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// imgElement.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';

// document.body.appendChild(imgElement)


// console.log(liElement)
// console.log(imgElement)

// list.insertAdjacentHTML("afterbegin", );


// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");


// console.log(markup);

// list.innerHTML = markup;



// const ulElement = document.querySelector('.gallery');

// const result = images.map((el) => 
//   `<li class="list-item"><img class = "img" src = ${el.url} alt = ${el.alt}></li>`)

//   .join("");

//  console.log(result);

//  ulElement.innerHTML = result;
  //  imgElement.src = el.url;
  //  imgElement.alt = el.alt;
  //  imgElement.width = 360;


//  ulElement.append(...result);
//  console.log(result)






















 const ulElement = document.querySelector('.gallery');

const result = images.map(el => {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  const imgElement = document.createElement('img');
  imgElement.classList.add('image');
  liElement.appendChild(imgElement);
 
   imgElement.src = el.url;
   imgElement.alt = el.alt;
   imgElement.width = 360;
   imgElement.height = 250;
   imgElement.style.display = 'flex';
   imgElement.style.justifyContent = 'center';
   imgElement.style.flexWrap = 'wrap';
   imgElement.style.gap = 30;
  //  liElement.style.display = 'flex';
  //  liElement.style.flexDirection = 'row-reverse';
  //  liElement.style.gap = 10; 

  return imgElement;
})
 ulElement.append(...result);
 console.log(result)


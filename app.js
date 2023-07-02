const root = document.querySelector('.root');
const navs = document.querySelectorAll('nav a');
var active = null
const simpleColor = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'orange'];
// let randomColor = Math.floor(Math.random()*16777215).toString(16);


function isActive(array){
  console.log('Active...');
  return [...array].find((nav) => nav.classList.contains('active'))
}

function randomColor(){
  return Math.floor(Math.random()*16777215).toString(16);
}




navs.forEach((nav) => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    active = isActive(navs)
    active.classList.remove('active');
    e.target.classList.add('active');
  //   root.innerHTML = `
  //   <h2 class="root__title">
  //     Background Color: <span>White</span>
  //   </h2>
  //   <button class="root__button">Click Me</button>
  // `;
  })
})

root.innerHTML = `
  <h2 class="root__title">
  Background Color: <span>White</span>
  </h2>
  <button class="root__button">Click Me</button>
`;

const btn = document.querySelector('.root__button');
const colorSpan = document.querySelector('.root__title span');


btn.addEventListener('click', (e)=>{
  console.log('Event in....');
  if(isActive(navs).textContent == 'Simple') {
    const color = Math.floor(Math.random()*simpleColor.length);
    root.style.backgroundColor = simpleColor[color];
    colorSpan.textContent = simpleColor[color];
    console.log(simpleColor[color]);
  } else if(isActive(navs).textContent == 'Hex'){
    console.log('#' + randomColor());
    root.style.backgroundColor = '#' + randomColor();
    colorSpan.textContent = '#' + randomColor();
  }
});
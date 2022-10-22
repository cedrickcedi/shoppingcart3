import './style.css'

//** document.querySelector('#app').innerHTML = `
//** <h1>Hello Vite!</h1>
//**  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
//**` 

let minusBtn = document.getElementsByClassName("bi-dash");
let addBtn = document.getElementsByClassName("bi-plus");
let cartAmount = document.getElementsByClassName("cartAmount");

minusBtn.addEventListener('click',()=>{
  cartAmount.value = parseInt(cartAmount.value) - 1;
});

addBtn.addEventListener('click',()=>{
  cartAmount.value = parseInt(cartAmount) + 1;
});

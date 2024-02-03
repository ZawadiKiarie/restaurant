import { buildHomepage } from "./homepage";
import { buildMenu } from "./menu";
import { buildContact } from "./contact";
import './style.css';

buildHomepage();

const homeBtn = document.querySelector('.home-btn');
const menuBtn =document.querySelector('.menu-btn');
const contactBtn =document.querySelector('.contact-btn');

homeBtn.addEventListener('click', ()=>{
  buildHomepage();
})

menuBtn.addEventListener('click', ()=>{
  buildMenu();
})

contactBtn.addEventListener('click', ()=>{
  buildContact();
})
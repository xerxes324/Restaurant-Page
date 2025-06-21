import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

home();
const homebutton = document.getElementById("homebutton");
const menubutton = document.getElementById("menubutton");
const aboutbutton = document.getElementById("aboutbutton");

homebutton.dataset.id = "1"
menubutton.dataset.id = "2"
aboutbutton.dataset.id = "3"

homebutton.addEventListener("click",()=>{
    home();
})

menubutton.addEventListener("click",()=>{
    menu();
})

aboutbutton.addEventListener("click",()=>{
    about();
})
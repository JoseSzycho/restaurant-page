import './style.css';
import { initializeWeb } from './initialize.js';
import { loadHomePage} from "./home.js"
import { loadMenuPage } from "./menu.js"
import { loadContactPage } from "./contact.js"

initializeWeb();
loadHomePage();

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeButton.addEventListener("click", loadHomePage);
menuButton.addEventListener("click", loadMenuPage);
contactButton.addEventListener("click", loadContactPage);





import './styles.css';
import restaurantImage from "./restaurant-background.png";
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

// const image =  document.createElement("img");
// image.src=restaurantImage;
// image.classList.add("background-image");

// Select the content div
const contentDiv = document.getElementById('content');
contentDiv.style.backgroundImage = `url(${restaurantImage})`;

const textContainer = document.createElement('div');
textContainer.classList.add('text-container');
contentDiv.appendChild(textContainer);

// Function to clear existing content
function clearContent() {
    textContainer.innerHTML = '';
}

// Function to navigate between different sections
function navigateTo(section) {
    clearContent();
    switch (section) {
        case 'home':
            textContainer.appendChild(loadHome());
            break;
        case 'menu':
            textContainer.appendChild(loadMenu());
            break;
        case 'contact':
            textContainer.appendChild(loadContact());
            break;
        default:
            textContainer.appendChild(loadHome());
    }
}

// Initial load (Home page)
navigateTo('home');

// Event listeners for navigation buttons
document.getElementById('home-btn').addEventListener('click', () => navigateTo('home'));
document.getElementById('menu-btn').addEventListener('click', () => navigateTo('menu'));
document.getElementById('contact-btn').addEventListener('click', () => navigateTo('contact'));

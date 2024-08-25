import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createNav = () => {
    const content = document.querySelector("#content");

    //Create div elements
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //Set id for the div
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //Set classes for the div
    div1.classList.add('nav');
    div2.classList.add('nav');
    div3.classList.add('nav');

    //Set text content for nav
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //Display div to content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    //Add event listener to divs
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });
    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });
    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
};

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");

    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createNav;
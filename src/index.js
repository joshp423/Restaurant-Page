
import { content } from "./content.js"
import { menuRender } from "./menu.js"

const tabs = document.querySelectorAll('header>nav>div');

tabs.forEach(() => {
    this.addEventListener('click', () => {
        if (this.target.classList.contains('active')) {
            this.target.classList.add('notActive');
            this.target.classList.remove('active');
            return;
        }
        this.target.classList.add('active');
        this.target.classList.remove('notActive');
    });
});

content();
menuRender();


console.log("this is working :)")

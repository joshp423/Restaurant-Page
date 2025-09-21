
import { content } from "./content.js"
import { menuRender } from "./menu.js"

const tabs = document.querySelectorAll('nav>div');
const 

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {

        switch (tab.classList.contains('active')) {

            case true:

                break;
            
            case false:
                tabs.forEach((tab) => {
                    tab.classList.remove('active')
                     tab.classList.add('notActive')
                })
                tab.classList.add('active');
                tab.classList.remove('notActive');
                break;
        }

    });
});

sw
content();
menuRender();
console.log("this is working :)")

import { content } from "./content.js";
import { menuRender } from "./menu.js";
import { contactRender } from "./contact.js";
import './style.css';

const tabs = document.querySelectorAll('nav>div');

content();
menuRender();
contactRender();

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const homeContent = document.getElementById('homeContent');
        const menuContent = document.getElementById('menuContent');
        const contactContent = document.getElementById('contactContent');

        if (!tab.classList.contains('active')) {
                tabs.forEach((tab) => {
                    tab.classList.remove('active')
                     tab.classList.add('notActive')
                })

                tab.classList.add('active');
                tab.classList.remove('notActive');

                switch (tab.id) {
                    case "home": 
                        homeContent.classList.add('activeContent');
                        homeContent.classList.remove('notActiveContent');
                        menuContent.classList.remove('activeContent');
                        menuContent.classList.add('notActiveContent');
                        contactContent.classList.remove('activeContent');
                        contactContent.classList.add('notActiveContent');
                        break;
                    
                    case "menu":
                        menuContent.classList.add('activeContent');
                        menuContent.classList.remove('notActiveContent');
                        homeContent.classList.remove('activeContent');
                        homeContent.classList.add('notActiveContent');
                        contactContent.classList.remove('activeContent');
                        contactContent.classList.add('notActiveContent');
                        break;

                    case "contact":
                        contactContent.classList.add('activeContent');
                        contactContent.classList.remove('notActiveContent');
                        menuContent.classList.remove('activeContent');
                        menuContent.classList.add('notActiveContent');
                        homeContent.classList.remove('activeContent');
                        homeContent.classList.add('notActiveContent');
                }
            }
        })

    });



console.log("this is working :)")

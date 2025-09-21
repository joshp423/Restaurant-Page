import { content } from "./content.js";
import { menuRender } from "./menu.js";
import './style.css';

const tabs = document.querySelectorAll('nav>div');

content();
menuRender();

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const homeContent = document.getElementById('homeContent');
        const menuContent = document.getElementById('menuContent');

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
                        break;
                    
                    case "menu":
                        menuContent.classList.add('activeContent');
                        menuContent.classList.remove('notActiveContent');
                        homeContent.classList.remove('activeContent');
                        homeContent.classList.add('notActiveContent');
                        break;
                }
            }
        })

    });



console.log("this is working :)")

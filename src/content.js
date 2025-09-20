import restaurantImage from "./jason-leung-poI7DelFiVA-unsplash.jpg";

export function content() {

    document.addEventListener("DOMContentLoaded", () => {
        const contentDiv = document.getElementById('content');
        const image = document.createElement('img')
        const header = document.createElement('h1');
        const blurb = document.createElement('p');
        const photoCred = document.createElement('p');

        image.src = restaurantImage;
        image.alt = 'restaurant-photo';
        header.innerText = "Josh's Big Fancy Restaurant";
        blurb.innerText = "Josh's Big Fancy Restaurant is the greatest restaurant ever, with a groundbreaking 4 Michelin stars and zero stressed chefs in the kitchen. A vision of peace and tranquility to satisfy your taste buds.";
        photoCred.innerText = "photo - Jason Leung";

        contentDiv.appendChild(image);
        contentDiv.appendChild(header);
        contentDiv.appendChild(blurb);
        contentDiv.appendChild(photoCred);
    })
}

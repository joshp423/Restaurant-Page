export function menuRender() {

    const contentContainer = document.getElementById('content');

    const menuContainer = document.createElement('div');
    const starters = document.createElement('div');
    const starterHeader = document.createElement('h1');
    starterHeader.innerText = 'Starters';

    const wareHenga = document.createElement('div');
    const wareHengaHeader = document.createElement('h2');
    wareHengaHeader.innerText = "Warehenga";
    const wareHengaDesc = document.createElement('p');
    wareHengaDesc.innerText = "shaved kingfish + burnt cucumber + avocado sorbet + ponzu + rocket";

    const wheke = document.createElement('div');
    const whekeHeader = document.createElement('h2');
    whekeHeader.innerText = "Wheke";
    const whekeDesc = document.createElement('p');
    whekeDesc.innerText = "grilled octopus + octopus XO + bone marrow + mandarin + kiwifruit + chilli";

    const mains = document.createElement('div');
    const mainsHeader = document.createElement('h1');
    mainsHeader.innerText = "Mains";

    const hipi = document.createElement('div');
    const hipiHeader = document.createElement('h2');
    hipiHeader.innerText = "Hipi";
    const hipiDesc = document.createElement('p');
    hipiDesc.innerText = "Coastal lamb loin & rib + rotisserie celeriac + nasturtium chimichurri + spiced macadamia";

    const koura = document.createElement('div');
    const kouraHeader = document.createElement('h2');
    kouraHeader.innerText = "Koura";
    const kouraDesc = document.createElement('p');
    kouraDesc.innerText = "wood-fired crayfish + heirloom carrots + mustard butter";

    const extras = document.createElement('div');
    const extrasHeader = document.createElement('h1');
    extrasHeader.innerText = "Extras";

    const riwai = document.createElement('div');
    const riwaiHeader = document.createElement('h2');
    riwaiHeader.innerText = "Riwai";
    const riwaiDesc = document.createElement('p');
    riwaiDesc.innerText = "Crispy agria potatoes + mushroom ketchup";

    contentContainer.appendChild(menuContainer);
    menuContainer.appendChild(starters, mains, extras);

    starters.appendChild(starterHeader, wareHenga, wheke);
    wareHenga.appendChild(wareHengaHeader, wareHengaDesc);
    wheke.appendChild(whekeHeader, whekeDesc);

    mains.appendChild(mainsHeader, hipi, koura);
    hipi.appendChild(hipiHeader, hipiDesc);
    koura.appendChild(kouraHeader, kouraDesc);

    extras.appendChild(extrasHeader, riwai);
    riwai.appendChild(riwaiHeader, riwaiDesc);

}
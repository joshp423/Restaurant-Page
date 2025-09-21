export function menuRender() {

    const contentContainer = document.getElementById('content');

    const menuContainer = document.createElement('div');
    menuContainer.id = 'menuContent'
    const starters = document.createElement('div');
    const starterHeader = document.createElement('h1');
    starterHeader.innerText = 'Starters';

    const wareHenga = document.createElement('div');
    const wareHengaHeader = document.createElement('h2');
    wareHengaHeader.innerText = "Warehenga";
    const wareHengaDesc = document.createElement('p');
    wareHengaDesc.innerText = "Shaved kingfish + burnt cucumber + avocado sorbet + ponzu + rocket";
    const wareHengaPrice = document.createElement('p');
    wareHengaPrice.innerText = "$34";

    const wheke = document.createElement('div');
    const whekeHeader = document.createElement('h2');
    whekeHeader.innerText = "Wheke";
    const whekeDesc = document.createElement('p');
    whekeDesc.innerText = "Grilled octopus + octopus XO + bone marrow + mandarin + kiwifruit + chilli";
    const whekePrice = document.createElement('p');
    whekePrice.innerText = "$36";

    const mains = document.createElement('div');
    const mainsHeader = document.createElement('h1');
    mainsHeader.innerText = "Mains";

    const hipi = document.createElement('div');
    const hipiHeader = document.createElement('h2');
    hipiHeader.innerText = "Hipi";
    const hipiDesc = document.createElement('p');
    hipiDesc.innerText = "Coastal lamb loin & rib + rotisserie celeriac + nasturtium chimichurri + spiced macadamia";
    const hipiPrice = document.createElement('p');
    hipiPrice.innerText = "$46";

    const koura = document.createElement('div');
    const kouraHeader = document.createElement('h2');
    kouraHeader.innerText = "Koura";
    const kouraDesc = document.createElement('p');
    kouraDesc.innerText = "Wood-fired crayfish + heirloom carrots + mustard butter";
    const kouraPrice = document.createElement('p');
    kouraPrice.innerText = "$20 per 100g";

    const extras = document.createElement('div');
    const extrasHeader = document.createElement('h1');
    extrasHeader.innerText = "Extras";

    const riwai = document.createElement('div');
    const riwaiHeader = document.createElement('h2');
    riwaiHeader.innerText = "Riwai";
    const riwaiDesc = document.createElement('p');
    riwaiDesc.innerText = "Crispy agria potatoes + mushroom ketchup";
    const riwaiPrice = document.createElement('p');
    riwaiPrice.innerText = "$15";

    contentContainer.appendChild(menuContainer);
    menuContainer.append(starters, mains, extras);

    starters.append(starterHeader, wareHenga, wheke);
    wareHenga.append(wareHengaHeader, wareHengaDesc, wareHengaPrice);
    wheke.append(whekeHeader, whekeDesc, whekePrice);

    mains.append(mainsHeader, hipi, koura);
    hipi.append(hipiHeader, hipiDesc, hipiPrice);
    koura.append(kouraHeader, kouraDesc, kouraPrice);

    extras.append(extrasHeader, riwai);
    riwai.append(riwaiHeader, riwaiDesc, riwaiPrice);

}
import {createImage, createH2, createParagraph, createDiv} from './helper';

function createCard(img, alt, title, text){
    const card = createDiv();
    
    card.classList.add('menu-item')

    card.appendChild(createImage(img, alt));
    card.appendChild(createH2(title));
    card.appendChild(createParagraph(text));

    return card;
}

function menu(){

}

export {menu};
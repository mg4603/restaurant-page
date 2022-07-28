import {createImage, createH2, createParagraph, createDiv} from './helper';
import belgianFries from './images/belgian-fries.jpg';
import tatterTots from './images/tatter-tots.jpg';
import standardCut from './images/standard-cut.jpg';
import garlicFries from './images/garlic-fries.jpg';
import curlyFries from './images/curly-fries.jpg';
import cheeseFries from './images/cheese-fries.jpg';
import potatoWedges from './images/potato-wedges.jpg';
import potatoTornado from './images/potato-tornado.jpg';
import steakFries from './images/steak-fries.jpg';
import chips from './images/chips.jpg';

function createItem(img, alt, title, text, credit){
    const card = createDiv();
    
    card.classList.add('menu-item')

    card.appendChild(createImage(img, alt));
    card.appendChild(createH2(title));
    card.appendChild(createParagraph(text));
    card.appendChild(createParagraph(credit))
    return card;
}

function menu(){
    const menuCard = createDiv();

    menuCard.classList.add('menu');

   
    menuCard.appendChild(createItem(belgianFries,
            'belgian fries',
            'Belgian Fries',
            `Irregularly sliced, double-fried potatoes served 
            in a cone with mayonnaise and other condiments.`,
            `Photo by Katja Rooke on Unsplash`));
    
    menuCard.appendChild(createItem(tatterTots,
            'tatter tots',
            'Tatter Tots',
            `Grated parboiled potatoes, formed into small nuggets
            and fried.`,
            `Photo by Nathan Dumlao on Unsplash`));

    menuCard.appendChild(createItem(standardCut,
            'standard cut',
            'Standard Cut',
            `Potatoes evenly cut medium-thin, fried once.`,
            `Photo by Fernanda Martinez on Unsplash`));
    
    menuCard.appendChild(createItem(garlicFries,
            'garlic fries',
            'Garlic Fries',
            `Any cut of fries sprinkled with minced garlic and
            chopped parsley.`,
            `Photo by Jay Gajjar on Unsplash`));

    menuCard.appendChild(createItem(curlyFries,
            'curly fries',
            'Curly Fries',
            `Potatoes sliced with a curly fry cutter or spiralizer
            and fried into ringlets.`,
            `Photo by Amanda Lim on Unsplash`));
  
    menuCard.appendChild(createItem(cheeseFries,
            'cheese fries',
            'Cheese Fries',
            `Any style of fries with cheese melted on top.`,
            `Photo by Erik Mclean on Unsplash`));

    menuCard.appendChild(createItem(steakFries,
            'steak fries',
            'Steak Fries',
            `Thick-cut fries usually double-fried to maximize
            crispiness.`,
            `Photo by nessip 77 on Unsplash`));
    menuCard.appendChild(createItem(chips,
            'chips (british)',
            'Chips (British)',
            `Shorter potatoes cut chunkier than standard fries,
            traditionally served with malt vinegar.`,
            `Photo by Farrah K on Unsplash`));
    
    menuCard.appendChild(createItem(potatoWedges,
            'potato wedges',
            'Potato Wedge',
            `Potatoes cut into thick slices, then cut on an
            angle to make triangular wedges.`,
            `Photo by Nathan Dumlao on Unsplash`));
   
    menuCard.appendChild(createItem(potatoTornado,
            'Potato Tornado',
            'Potato Tornado',
            `A whole potato on a skewer, thinly sliced 
            through  to make a spiral, fanned out and
            deep-fried.`,
            `Photo by Suman Shrestha on Unsplash`));  
    
    return menuCard;
}

export {menu};
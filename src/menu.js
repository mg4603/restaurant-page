import {createImage, createH2, createParagraph, createDiv} from './helper';

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
            ));
    menuCard.appendChild(createItem(standardCut,
            'standard cut',
            'Standard Cut',
            `Potatoes evenly cut medium-thin, fried once.`));
    menuCard.appendChild(createItem(garlicFries,
            'garlic fries',
            'Garlic Fries'
            `Any cut of fries sprinkled with minced garlic and
            chopped parsley.`));
    menuCard.appendChild(createItem(curlyFries,
            'curly fries',
            'Curly Fries',
            `Potatoes sliced with a curly fry cutter or spiralizer
            and fried into ringlets.`));
    menuCard.appendChild(createItem(shoeString,
            'shoestring fries',
            'Shoestring Fries',
            `Potatoes sliced very thinly using a mandoline or
            julienne cutter and fried extra-crisp.`));
    menuCard.appendChild(createItem(crinkleCut,
            'crinkle cut',
            'Crinkle Cut',
            `Potatoes thick-cut on a corrugated slicer, then sliced
            into wavy batons and fried.`));
    menuCard.appendChild(createItem(cheeseFries,
            'cheese fries',
            'Cheese Fries',
            `Any style of fries with cheese melted on top.`));
    menuCard.appendChild(createItem(steakFries,
            'steak fries',
            'Steak Fries',
            `Thick-cut fries usually double-fried to maximize
            crispiness.`));
    menuCard.appendChild(createItem(chips,
            'chips (british)',
            'Chips (British)',
            `Shorter potatoes cut chunkier than standard fries,
            traditionally served with malt vinegar.`));
    menuCard.appendChild(createItem(sweetPotatoFries,
            'sweet potato fries',
            'Sweet Potato Fries',
            `Any cut of fries made with sweet potatoes instead
            of russet or Idaho.`));
    menuCard.appendChild(createItem(potatoWedges,
            'potato wedges',
            'Potato Wedge',
            `Potatoes cut into thick slices, then cut on an
            angle to make triangular wedges.`));
    menuCard.appendChild(createItem(ccFries,
            'Chilli Cheese Fries',
            'Chilli Cheese Fries',
            `Any cut of fries topped with chilli and 
            melted cheese.`));
    menuCard.appendChild(createItem(cottageFries,
            'Cottage Fries',
            'Cottage Fries',
            `Potatoes thick-cut on a corrugated slicer 
            and fried.`));
    menuCard.appendChild((pommesSouffles,
            'Pommes Souffles',
            'Pommes Souffles',
            `Potatoes sliced medium-thin and fried once in
            hot oil, then again in hotter oil until they
            puff up.`));
    menuCard.appendChild(createItem(potatoTornado,
            'Potato Tornado',
            'Potato Tornado',
            `A whole potato on a skewer, thinly sliced 
            through  to make a spiral, fanned out and
            deep-fried.`));
    menuCard.appendChild(createItem(smiley,
            'Smiley',
            'Smiley',
            `Potatoes cut into thick rounds with a happy
            face stamped out and deep fried.`))
    
}

export {menu};
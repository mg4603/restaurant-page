function createParagraph(text){
    const p = document.createElement('p');
    
    p.textContent = text;
    
    return p;
}

function createImage(url, alt){
    const img = new Image();
    
    img.src = url;
    img.alt = alt;

    return img
}

function createH2(text){
    const h2 = document.createElement('h2');

    h2.textContent = text;

    return h2;
}

function createDiv(){
    const div = document.createElement('div');

    return div;
}

function createUl(){
    const uList = document.createElement('ul');
    
    return uList;
}

function createLi(){
    const li = document.createElement('li');

    return li;
}


function createH1(text){
    const h1 = document.createElement('h1');

    h1.textContent = text;

    return h1;
}

function createAnchor(href, text){
    const a = document.createElement;

    a.href = href;
    a.textContent = text;

    return a;
}

export {createH1, createParagraph, createAnchor, createImage, createH2, createDiv, createUl, createLi};
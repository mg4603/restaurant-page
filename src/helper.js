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

export {createParagraph, createImage, createH2, createDiv};
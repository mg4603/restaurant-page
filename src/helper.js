function createParagraph(text){
    const p = document.createElement(p);
    
    p.textContent = text;
    
    return p;
}

function createImage(url, alt){
    const img = document.createElement('img');
    
    img.src = url;
    img.alt = alt;

    return img
}
export {createParagraph, createImage};
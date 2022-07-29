import { createDiv, createParagraph, createAnchor, createImage} from "./helper";
import githubIcon from './images/github.svg';

function footer(){
    const footerDiv = createDiv();
    
    footerDiv.classList.add('footer');
    
    footerDiv.appendChild(createParagraph('Copyright © 2022 mg4603'));
    footerDiv.appendChild(createAnchor('https://github.com/mg4603', createImage(githubIcon, 'github icon')));

    return footerDiv;
}

export {footer};
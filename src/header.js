import {nav} from './nav';
import {createH1, createDiv} from './helper';


function header(){
    const header = createDiv();

    header.classList.add('header');

    header.appendChild(createH1("Friesoholic"));
    header.appendChild(nav());
    
    return header;
}

export {header};
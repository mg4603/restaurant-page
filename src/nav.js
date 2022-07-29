import { createDiv, createUl, createLi} from "./helper";

function navItem(text){
    const item = createLi();

    item.classList.add('nav-item');

    item.textContent = text;

    return item;
}

function nav(){
    const navList = createUl();

    navList.classList.add('nav');

    navList.appendChild(navItem("Home"));
    navList.appendChild(navItem("Menu"));
    navList.appendChild(navItem("Contact"));

    return navList;
}

export {nav};
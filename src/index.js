import './css/styles.css';
import homePage from './home-page';
import {menu} from './menu';
import {contactCard} from './contact';
import { header } from './header';
import {footer} from './footer';
import {createDiv, deleteAllChildren} from './helper';

function generateBody(header){
    const pageBody = createDiv();
    const homeBtn = header.lastChild.firstChild;
    const menuBtn = header.lastChild.children[1];
    const contactBtn = header.lastChild.lastChild;

    homeBtn.addEventListener('mouseover', ()=>{
        homeBtn.classList.add('nav-item-hover');
    });
    homeBtn.addEventListener('mouseout', ()=>{
        homeBtn.classList.remove('nav-item-hover');

    });
    homeBtn.addEventListener('click', ()=>{
        deleteAllChildren(pageBody);
        pageBody.appendChild(homePage());
    });


    menuBtn.addEventListener('mouseover', ()=>{
        menuBtn.classList.add('nav-item-hover');
    });
    menuBtn.addEventListener('mouseout', ()=>{
        menuBtn.classList.remove('nav-item-hover');
    });
    menuBtn.addEventListener('click', ()=>{
        deleteAllChildren(pageBody)
        pageBody.appendChild(menu());
    });


    contactBtn.addEventListener('mouseover', ()=>{
        contactBtn.classList.add('nav-item-hover');
    });
    contactBtn.addEventListener('mouseout', ()=>{
        contactBtn.classList.remove('nav-item-hover');
    });
    contactBtn.addEventListener('click', ()=>{
        deleteAllChildren(pageBody);
        pageBody.appendChild(contactCard());
    });
    

    pageBody.classList.add('pg-body');

    pageBody.appendChild(homePage());
    
    return pageBody;
}

function website(){
    const site = createDiv();
    const headerDiv = header();

    site.classList.add('site');

    site.appendChild(headerDiv);
    // console.log(header().lastChild.firstChild);
    site.appendChild(generateBody(headerDiv));
    site.appendChild(footer());

    return site;
}



document.querySelector('.content').appendChild(website());
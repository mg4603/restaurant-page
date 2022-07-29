import {createDiv, createH2, createParagraph, createImage} from './helper';
import emailIcon from './images/email.svg';
import phoneIcon from './images/phone.svg';
import mobileIcon from './images/cellphone.svg';

function fieldLabel(icon, alt, text){
    const label = createDiv();

    label.classList.add('contact-label');

    label.appendChild(createImage(icon, alt));
    label.appendChild(createParagraph(text));

    return label;
}

function contactField(icon, alt, text, info){
    const field = createDiv();

    field.classList.add('contact-field');

    field.appendChild(fieldLabel(icon, alt, text));
    field.appendChild(createParagraph(info));

    return field
}

function contactCard(){
    const card = createDiv();

    card.classList.add('contact-card');

    card.appendChild(contactField(mobileIcon, 'mobile-icon', "Mobile Number", "123 456 789"));
    card.appendChild(contactField(phoneIcon, 'telephone-icon', "Telephone Number", "987 654 321"));
    card.appendChild(contactField(emailIcon, 'email-icon', "Email", "obviously-fake@email.com"));


    return card;
};

export {contactCard};



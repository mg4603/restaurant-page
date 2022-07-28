import { createParagraph, createImage, createDiv } from "./helper";
import homeImage from './images/home-img.jpg';

export default function homepage(){
    const container = createDiv();
    

    container.appendChild(createParagraph("Fries to kill for!"));
    container.appendChild(createParagraph("Some copy about fries"));
    container.appendChild(createImage(homeImage, "An Image of Fries"));

    return container;
}
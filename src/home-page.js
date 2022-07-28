import { createParagraph, createImage } from "./helper";
import homeImage from './home-img.jpg';

export default function homepage(){
    const container = document.createElement('div');
    

    container.appendChild(createParagraph("Fries to kill for!"));
    container.appendChild(createParagraph("Some copy about fries"));
    container.appendChild(createImage(homeImage, "An Image of Fries"))

    return container;
}
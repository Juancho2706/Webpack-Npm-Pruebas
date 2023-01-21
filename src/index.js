import myName from './myName';
import '../src/style.css';
import laImagen from '../src/image23.png';
import Data from './data.xml';
import Notes from './data.csv';

function component(){
    const element = document.createElement('div');

    // Using the already imported function i did on myName.js 
    element.innerHTML = myName('Cody');
    element.classList.add('hello');

    //adding our new image to the module export
    const myImagen = new Image();
    myImagen.src = laImagen;

    element.appendChild(myImagen);

    console.log(Data);
    console.log(Notes);

    return element
}

document.body.appendChild(component());
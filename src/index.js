import myName from './myName';

function component(){
    const element = document.createElement('div');

    // Using the already imported function i did on myName.js 
    element.innerHTML = myName('Cody');

    return element
}

document.body.appendChild(component());
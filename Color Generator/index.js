

const containerel = document.querySelector(".container"); 
//selecting the container class in the html document.

for (let index = 0; index < 16; index++) {
    const colorcontainerele = document.createElement("div");//we are creating more of those div elements
    colorcontainerele.classList.add("color-container");//we are adding more of those boxes which will hold the color
    containerel.appendChild(colorcontainerele);//we are appending these newly created elements to the main container
}

const colorcontainereles = document.querySelectorAll(".color-container");

generateColor();
// my only error or mistake was that i did not call the generate color function.
//and here i was banging my head.

function generateColor(){
    colorcontainereles.forEach((colorcontainerele) => {
        const newcolorcode = randomColor();
        colorcontainerele.style.backgroundColor = "#" + newcolorcode;
        colorcontainerele.innerText = "#" + newcolorcode;
    });
}

function randomColor(){
    const chars ="0123456789abcdef";
    const colorCodeLength = 6;
    let colorcode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorcode += chars.substring(randomNum, randomNum + 1);
    }
    return colorcode;
}

//find this: how to implement the javascript into the html file.
//it is showing that the document is not defined.

//done.
//what i learned:
//1. document is a browser element and not a server side element , so running it on terminal will give error.
//2. call the function which you create.
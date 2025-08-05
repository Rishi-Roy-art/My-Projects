let btncreate = document.querySelector("#btncreate")
let container = document.querySelector(".container")

btncreate.addEventListener('click', addNote)

function addNote(){//this fucntion will create all the tags which will be required to mimic the functions in the html file
    let div = document.createElement('div') //Here we are creating new div elements via the constant div
    div.classList.add('content') //div will add new div with class content to a classList

    let p = document.createElement('p') //creating element of p tag (paragraph)
    p.classList.add('inputBox') //creating class of inputBox
    p.setAttribute('contenteditable', true) //setting the attribute of the p element as contenteditable -> true so that the user can input the notes.

    let btn = document.createElement('button')  //creating the button element
    btn.classList.add('btnRemove')  //adding the class of btnRemove
    btn.innerHTML = 'Remove'

    div.appendChild(p)
    div.appendChild(btn)    //appending both p and btn element to the div element such that when div is called, these elements are also called automatically.
    
    container.appendChild(div) //all these newly created tags will be added to the container class via this command

    let btnRemove = document.querySelectorAll('.btnRemove')
    // btnRemove.addEventListener('click', removeNote)     //the click event will be passed as the parameter for the function removeNote. Which will then remove the parentElement i.e that particular entire class.
    btnRemove.forEach(button => {       //a simple spelling mistake of foreach instead of forEach was not allowing the code to run properly.
        button.addEventListener('click', removeNote)
    })
}

function removeNote(event){
    event.target.parentElement.remove()
}
// create a function  to remove item from list. we are using event.target.parentNode in order to access the button within our addToDo function

function removeToDo(event) {
    event.target.parentNode.remove();
}

function addToDo(event) {
    
    // even.preventDefault to avoid interference with button and form
    event.preventDefault();
    
    // creating a list and list elements for when you click submit
    const item = document.createElement("li");
    item.innerText = document.querySelector("#item").value;
    
    // creating a new button from within this function
    const button = document.createElement("button");
    
    // setting the button's text
    button.innerText = "x";
    
    // when you click the button it will run the removeToDo function which is placed at the top of this function so it will be read before we provide the button. otherwise this statement won't work cause removeToDo won't exist yet.
    button.addEventListener ("click", removeToDo) 

    // append button to new list items
    item.append(button);

    const list = document.querySelector("ul")
    // append the child item of li to the ul list
    list.appendChild(item);
}

// using document.querySelector to access the form within the html and adding an event listener to listen for submit and calling our function addToDo
document.querySelector("form").addEventListener ("submit", addToDo);

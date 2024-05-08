// created a function in order to mark off a checkbox that we have access to through css

// this function also needs to be above our addToDo function in order for the items inside that function to read the nested eventListeners and such

function completeToDo(event) {

    // setting a value within js for the css attribute
    const value = event.target.getAttribute("aria-checked");

    // using if else statement to target that attribute and set true false to check the box
    if (value !== "true") {
        event.target.setAttribute("aria-checked", "true");
    } else {
        event.target.setAttribute("aria-checked", "false")
    }
}
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

    item.addEventListener("click", completeToDo);
    
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

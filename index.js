
const form = document.querySelector("form");
const ul = document.querySelector("ul");

const toDolist = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("input").value; // why does this have to be inside the function?
    const li = document.createElement("li");
    li.textContent = userInput;
    ul.appendChild(li);
}

form.addEventListener("submit", toDolist) 



const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

const toDolist = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("input").value; // why does this have to be inside the function?
    const li = document.createElement("li");
    if (userInput === "") {
        p.textContent = "please enter string" 
    } else {
        li.textContent = userInput;
        ul.appendChild(li);
        p.textContent = "";
    }

}
const strikeOut = (event) => {
    event.target.style.textDecoration = "line-through";
}

ul.addEventListener("click", strikeOut)

form.addEventListener("submit", toDolist) 


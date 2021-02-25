
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

const toDolist = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("textarea"); // why does this have to be inside the function?
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "submit"
    if (userInput.value === "") {
        p.textContent = "please enter string" 
    } else {
        p.textContent = "";
        li.textContent = userInput.value;
        ul.appendChild(li);
        btn.textContent = "delete";
        li.appendChild(btn);
        userInput.value = "";
    }
    btn.addEventListener("click", (event) => {
        event.path[1].parentNode.removeChild(event.path[1])
    })
}

const strikeOut = (event) => {
    if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
    } else {
        event.target.style.textDecoration = "line-through";
    }
}

ul.addEventListener("click", strikeOut)

form.addEventListener("submit", toDolist) 


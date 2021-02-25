
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

const toDolist = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("textarea").value; // why does this have to be inside the function?
    const li = document.createElement("li");
    if (userInput === "") {
        p.textContent = "please enter string" 
    } else {
        li.textContent = userInput;
        ul.appendChild(li);
        p.textContent = "";
        const btn = document.createElement("button");
        btn.textContent = "delete";
        li.appendChild(btn)
    }

}

const strikeOut = (event) => {
    event.target.style.textDecoration = "line-through";
}

ul.addEventListener("click", strikeOut)

form.addEventListener("submit", toDolist) 


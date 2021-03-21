
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const p = document.querySelector("p");

const toDolist = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("textarea"); // why does this have to be inside the function?
    const splitMulti = userInput.value.split("\n")
    
    if (userInput.value === "") {
        p.textContent = "please enter string" 
    } else {
        p.textContent = "";
        for (const el of splitMulti) {
            if (el !== "") {
                const li = document.createElement("li");
                const btn = document.createElement("button");
                btn.type = "submit"
                li.textContent = el;
                btn.textContent = "delete";
                ul.appendChild(li);
                li.appendChild(btn);    
                btn.addEventListener("click", (event) => {
                    event.path[1].parentNode.removeChild(event.path[1]) // remove()
                    debugger
                })
            }
            userInput.value = "";
        }
    }
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


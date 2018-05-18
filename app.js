const toggleList = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const descriptionInput = document.querySelector("input");
const descriptionP = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description");
const listUl = document.querySelector("ul");
const addItemInput = document.querySelector("input.addItemInput");
const addItemButton = document.querySelector("button.addItemButton");

listUl.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON" /* && event.target.parentNode.tagName === "LI" */) {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        let prevLi = li.previousElementSibling;
        let nextLi = li.nextElementSibling;

        if (event.target.className === "remove") {
            ul.removeChild(li);
        }

        else if (event.target.className === "up" && prevLi) {
            ul.insertBefore(li, prevLi);
        }

        else if (event.target.className === "down" && nextLi) {
            ul.insertBefore(nextLi, li);
        }
    }
});

toggleList.addEventListener("click", () => {
    if (listDiv.style.display == "none") {
        toggleList.textContent = "Hide list";
        listDiv.style.display = "block";
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = "none";
    }
});

descriptionButton.addEventListener("click", () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = "";
});

addItemButton.addEventListener("click", () => {
    let ul = document.getElementsByTagName("ul")[0];
    let li = document.createElement("li");
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = "";
});

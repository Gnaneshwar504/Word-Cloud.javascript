let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];
let wordsEl = document.getElementById("wordsContainer");
let inputEl = document.getElementById("userInput");
let errorEl = document.getElementById("errorMsg");
let addEl = document.getElementById("addBtn");


function createandaddcloud(word) {
    let randfontsize = Math.ceil(Math.random() * 40) + "px";
    let randoColor = ["bg-primary", "bg-secondary", "bg-info"];
    let wor = document.createElement("span");

    wor.textContent = word;
    wor.style.fontSize = randfontsize;
    wor.style.color = randoColor;
    wor.classList.add("m-3");
    wordsEl.appendChild(wor);

}
for (let word of wordCloud) {
    createandaddcloud(word);
}

function addwordCloud() {

    let userenterword = inputEl.value;
    if (userenterword !== "") {
        inputEl.value = "";
        errorEl.textContent = "";
        createandaddcloud(userenterword);

    } else {
        errorEl.textContent = "please enter word"
    }
}

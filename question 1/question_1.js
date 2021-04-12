const revel = document.querySelector("#reponse");
const goodChoice = document.querySelector("#firstchoice");
const secondChoice = document.getElementById("secondchoice");
const thirdChoice = document.getElementById("thirdchoice");
const forthChoice = document.getElementById("forthchoice");
const next = document.querySelector("#next");
let buttons = [goodChoice, secondChoice, thirdChoice, forthChoice];



goodChoice.addEventListener('click', () => {
    goodChoice.classList.add("good");
    secondChoice.classList.add("bads");
    thirdChoice.classList.add("bads");
    forthChoice.classList.add("bads");
    next.style.visibility = "visible";
    revel.innerHTML = "En effet c'est la bonne réponse";
    revel.style.color = "green";
})

secondChoice.addEventListener('click', () => {
    goodChoice.classList.add("good");
    secondChoice.classList.add("bads");
    thirdChoice.classList.add("bads");
    forthChoice.classList.add("bads");
    next.style.visibility = "visible";
    revel.innerHTML = "Et non malheuresement ce n'était pas la bonne réponse";
    revel.style.color = "red";
})

thirdChoice.addEventListener('click', () => {
    goodChoice.classList.add("good");
    secondChoice.classList.add("bads");
    thirdChoice.classList.add("bads");
    forthChoice.classList.add("bads");
    next.style.visibility = "visible";
    revel.innerHTML = "Et non malheuresement ce n'était pas la bonne réponse";
    revel.style.color = "red";
})

forthChoice.addEventListener('click', () => {
    goodChoice.classList.add("good");
    secondChoice.classList.add("bads");
    thirdChoice.classList.add("bads");
    forthChoice.classList.add("bads");
    next.style.visibility = "visible";
    revel.innerHTML = "Et non malheuresement ce n'était pas la bonne réponse";
    revel.style.color = "red";
})



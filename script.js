CARD_WIDTH = 5;
CARD_HEIGHT = 5;
ALL_TASKS = [];

window.addEventListener('load', function () {
    document.getElementById("generate").addEventListener("click", generate);
    ALL_TASKS = document.getElementById("tasks").value.trim().split("\n").map(element => element.trim());
    generate();
})

function generate() {
    removePreviousCards();

    let card_count = document.getElementById("card_count").value;

    for (let i = 0; i < card_count; i++) {
        tasks = sample(ALL_TASKS, CARD_WIDTH * CARD_HEIGHT);
        addCard(tasks);
    }
}

function removePreviousCards() {
    document.getElementById("cards").innerHTML = "";
}

function sample(corpus, sample_size) {
    return shuffled(corpus).slice(0, sample_size);
}

function addCard(tasks) {
    card = createCardElment();
    
    tasks.forEach((task) => card.append(createTaskElement(task)));
    
    document.getElementById("cards").append(card);
}


function createCardElment() {
    let card = document.getElementById("card_template").cloneNode(true);
    card.id = "";
    return card;
}

function createTaskElement(text) {
    let task = document.getElementById("task_template").cloneNode(true);
    task.id = "";
    task.textContent = text;
    return task;
}

function shuffled(array) {
    // https://stackoverflow.com/a/2450976
    array = array.slice();
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let decrementBtn = document.getElementById("decrement-btn")
let saveBtn = document.getElementById("save-btn")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)
saveBtn.addEventListener("click", save)

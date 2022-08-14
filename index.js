// document.getElementById("count-el").innerText = 5

// Initialize the count as 0
// Listen for clicks on the increment button
// Increment the count when the button is clicked
// change the count-el in the HTML to reflect the new count
// 1. Grab the save-el paragrah and store it in a variable called saveEl

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0
}
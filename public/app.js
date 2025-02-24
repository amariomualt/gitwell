
const table = document.getElementById("habit-table");
const button = document.getElementById("push-button");

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const rows = 7; 
const cols = 20; 
let rects = []; 


let headerRow = document.createElement("tr");
headerRow.appendChild(document.createElement("td")); 

for (let i = 0; i < cols; i += 4) {
    let monthCell = document.createElement("td");
    monthCell.setAttribute("colspan", "4");
    monthCell.textContent = months[i / 4];
    monthCell.style.textAlign = "center"; 
    monthCell.style.fontWeight = "bold";
    monthCell.style.color = "#fafbfc";
    monthCell.style.padding = "8px 15px"; 
    headerRow.appendChild(monthCell);
}

table.appendChild(headerRow); 


for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");

    
    let dayCell = document.createElement("td");
    dayCell.textContent = daysOfWeek[i];
    dayCell.style.fontWeight = "bold";
    dayCell.style.color = "#fafbfc";
    dayCell.style.display = "flex";
    dayCell.style.justifyContent = "flex-end";
    dayCell.style.alignItems = "center";
    dayCell.style.paddingRight = "15px";
    dayCell.style.width = "100px";

    row.appendChild(dayCell);

    for (let j = 0; j < cols; j++) {
        let cell = document.createElement("td");

        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "30");
        svg.setAttribute("height", "30");
        svg.setAttribute("viewBox", "0 0 30 30");

        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("width", "20");
        rect.setAttribute("height", "20");
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("fill", "#464b50");
        rect.setAttribute("rx", "4");
        rect.setAttribute("ry", "4");

        if (!rects[j]) rects[j] = []; 
        rects[j].push(rect); 

        rect.addEventListener("click", function() {
            this.setAttribute("fill", "#464b50");
        });

        svg.appendChild(rect);
        cell.appendChild(svg);
        row.appendChild(cell);
    }

    table.appendChild(row);
}


const openBtn = document.getElementById("pushBtn");
const closeBtn = document.getElementById("closeModal");
const pushHabitBtn = document.getElementById("pushHabit")
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("open");
})

pushHabitBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})

function updateDate() {
    const date = new Date();
    const formattedDate = `${date.toDateString()}`;
    document.getElementById("modal-date").innerHTML = `<h2>${formattedDate}</h2>`;
}

updateDate();

const inputJournalText = document.getElementById("inputJournalText");
const outputJournalText = document.getElementById("outputJournalText");
document.getElementById("pushHabit");

// // Update the output when the "Push Habit" button is clicked
// pushHabitBtn.addEventListener("click", function () {
//     outputJournalText.textContent = inputJournalText.value;
//     document.getElementById("inputJournalText").value = "";
//     dayCell.setAttribute("backgroundColor", "red")
// });

let currentRow = 0;
let currentCol = 0;

pushHabitBtn.addEventListener("click", function () {
    outputJournalText.textContent = inputJournalText.value;
    document.getElementById("inputJournalText").value = "";

    // Change the color of one of the rect cells
    if (currentCol < cols) {
        rects[currentCol][currentRow].setAttribute("fill", "#a15c5c");

        currentRow++; // Move to the next row

        if (currentRow >= rows) { // If row limit reached, move to next column
            currentRow = 0;
            currentCol++;
        }
    }
});





// button.addEventListener("click", pushAlert);

// function pushAlert() {
//     alert("")
// }


// button.addEventListener("click", function () {
//     if (currentCol < cols) {
//         rects[currentCol][currentRow].setAttribute("fill", "#a15c5c");

//         currentRow++; 

//         if (currentRow >= rows) {
//             currentRow = 0;
//             currentCol++;
//         }
//     }
// });
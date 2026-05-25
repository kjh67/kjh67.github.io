// Constants and settings

// OVER AND UNDERWORKS: exclude the half-lead and lead-end change, which are always 56 and 12 respectively
// Split into over and under completely independently, so the method's place notation can be constructed
// by combining the under and over straightforwardly


// TODO:
// Make the scrolling area less jank

const overwork_notations = {
    "Collingham":   ["","56","","4","","","","6","","",""],
    "Westminster":  ["","34","","4","","","","6","","",""],
    "Chieveley":    ["56","","56","4","","","","6","","",""],
    "Stotfold":     ["34","","56","4","","","","6","","",""],
    "Selston":      ["","56","","456","","","","6","","",""],
    "Averham":      ["","34","","456","","","","6","","",""],
    "Dover":        ["","36","","6","","","","6","","",""],
    "London":       ["36","","36","4","","","","6","","",""],
    "Maltby":       ["","56","","6","","","","6","","",""],
    "Oxford":       ["","34","","6","","","","6","","",""],
    "Leckhampton":  ["56","","34","6","","","","6","","",""],
    "Kent":         ["34","","34","6","","","","6","","",""],
    "Bunwell":      ["","36","","456","","","","6","","",""],
    "George Orwell":["36","","56","4","","","","6","","",""],
    "Cambridge":    ["","36","","4","","","","6","","",""],
    "Bene't's":     ["56","","36","4","","","","6","","",""],
    "Carlisle":     ["34","","36","4","","","","6","","",""],
    "Hills":        ["36","","34","6","","","","6","","",""],
    "College III":  ["","56","","4","","56","","6","","",""],
    "Armstrong":    ["","34","","4","","56","","6","","",""],
    "Appleford":    ["56","","56","4","","56","","6","","",""],
    "Ashill":       ["34","","56","4","","56","","6","","",""],
    "Keyworth":     ["","56","","456","","56","","6","","",""],
    "Shilton":      ["","34","","456","","56","","6","","",""],
    "Egmanton":     ["","36","","6","","56","","6","","",""],
    "Kenwood":      ["36","","36","4","","56","","6","","",""],
    "Warmfield":    ["","56","","6","","56","","6","","",""],
    "Newstead":     ["","34","","6","","56","","6","","",""],
    "Oasis":        ["56","","34","6","","56","","6","","",""],
    "Jeremiah":     ["34","","34","6","","56","","6","","",""],
    "Beedon":       ["","36","","456","","56","","6","","",""],
    "Acle":         ["36","","56","4","","56","","6","","",""],
    "Superlative":  ["","36","","4","","56","","6","","",""],
    "Midsummer":    ["56","","36","4","","56","","6","","",""],
    "Emmanuel":     ["34","","36","4","","56","","6","","",""],
    "Tutbury":      ["36","","34","6","","56","","6","","",""],
    "Milton":       ["","56","","4","56","","","6","","",""],
    "Lopham":       ["","34","","4","56","","","6","","",""],
    "Forncett":     ["56","","56","4","56","","","6","","",""],
    "Nicholas":     ["34","","56","4","56","","","6","","",""],
    "Woodborough":  ["36","","36","4","56","","","6","","",""],
    "Denver":       ["36","","56","4","56","","","6","","",""],
    "Yessitiz":     ["","36","","4","56","","","6","","",""],
    "Broadston":    ["56","","36","4","56","","","6","","",""],
    "Newchurch":    ["34","","36","4","56","","","6","","",""]
};

const underwork_notations = {
    "S1":           ["","","","1","","12","","3","","12",""],
    "S2":           ["","","","1","","12","","3","","34",""],
    "S3":           ["","","","1","","12","","3","12","","12"],
    "S4":           ["","","","1","","12","","3","12","","34"],
    "S5":           ["","","","1","","12","","123","","12",""],
    "S6":           ["","","","1","","12","","123","","34",""],
    "Mendip":       ["","","","1","","12","","1","","14",""],
    "Chelsea":      ["","","","1","","12","","3","14","","14"],
    "D1":           ["","","","1","","12","","1","","12",""],
    "D2":           ["","","","1","","12","","1","","34",""],
    "D3":           ["","","","1","","12","","1","34","","12"],
    "D4":           ["","","","1","","12","","1","34","","34"],
    "Seddlescombe": ["","","","1","","12","","123","","14",""],
    "Kelso":        ["","","","1","","12","","3","12","","14"],
    "Cambridge":    ["","","","1","","12","","3","","14",""],
    "Surfleet":     ["","","","1","","12","","3","14","","12"],
    "Beverley":     ["","","","1","","12","","3","14","","34"],
    "Burslem":      ["","","","1","","12","","1","34","","14"],
    "S7":           ["","","","1","","","","3","","12",""],
    "S8":           ["","","","1","","","","3","","34",""],
    "S9":           ["","","","1","","","","3","12","","12"],
    "S10":          ["","","","1","","","","3","12","","34"],
    "S11":          ["","","","1","","","","123","","12",""],
    "S12":          ["","","","1","","","","123","","34",""],
    "720":          ["","","","1","","","","1","","14",""],
    "Tokyo":        ["","","","1","","","","3","14","","14"],
    "D7":           ["","","","1","","","","1","","12",""],
    "D8":           ["","","","1","","","","1","","34",""],
    "D9":           ["","","","1","","","","1","34","","12"],
    "D10":          ["","","","1","","","","1","34","","34"],
    "High Halden":  ["","","","1","","","","123","","14",""],
    "Kennilworth":  ["","","","1","","","","3","12","","14"],
    "Superlative":  ["","","","1","","","","3","","14",""],
    "Nailsea":      ["","","","1","","","","3","14","","12"],
    "Izzat":        ["","","","1","","","","3","14","","34"],
    "Friday Eve":   ["","","","1","","","","1","34","","14"],
    "S13":          ["","","","1","","","12","3","","12",""],
    "S14":          ["","","","1","","","12","3","","34",""],
    "S15":          ["","","","1","","","12","3","12","","12"],
    "S16":          ["","","","1","","","12","3","12","","34"],
    "Icarus":       ["","","","1","","","12","3","14","","14"],
    "Comberton":    ["","","","1","","","12","3","12","","14"],
    "Newchurch":    ["","","","1","","","12","3","","14",""],
    "Walpole":      ["","","","1","","","12","3","14","","12"],
    "Audley":       ["","","","1","","","12","3","14","","34"]
};

let overworks_12 = [
    "Collingham", "Westminster",
    "Chieveley", "Stotfold",
    "Selston", "Averham",
    "Dover", "London",
    "Maltby", "Oxford",
    "Leckhampton", "Kent",
    "Bunwell", "George Orwell",
    "Cambridge",
    "Bene't's", "Carlisle",
    "Hills"
];
let underworks_12 = [
    "S1", "S2",
    "S3", "S4",
    "S5", "S6",
    "Mendip", "Chelsea",
    "D1", "D2",
    "D3", "D4",
    "Seddlescombe", "Kelso",
    "Cambridge",
    "Surfleet", "Beverley",
    "Burslem"
]

let overworks_56 = [
    "College III", "Armstrong",
    "Appleford", "Ashill",
    "Keyworth", "Shilton",
    "Egmanton", "Kenwood",
    "Warmfield", "Newstead",
    "Oasis", "Jeremiah",
    "Beedon", "Acle",
    "Superlative",
    "Midsummer", "Emmanuel",
    "Tutbury"
]
let underworks_56 = [
    "S7", "S8",
    "S9", "S10",
    "S11", "S12",
    "720", "Tokyo",
    "D7", "D8",
    "D9", "D10",
    "High Halden", "Kennilworth",
    "Superlative", 
    "Nailsea", "Izzat",
    "Friday Evening"
]

let overworks_56x12 = [
    "Milton", "Lopham",
    "Forncett", "Nicholas",
    "Woodborough", "Denver",
    "Yessitiz",
    "Broadston", "Newchurch"
]
let underworks_56x12 = [
    "S13", "S14",
    "S15", "S16",
    "Icarus", "Comberton",
    "Newchurch",
    "Walpole", "Audley"
]


// Page components
const container = document.getElementById("game_container");
if (!container) {
    throw new Error("No container element for the game exists");
}

// Settings div to be displayed initially - select methods to practice
const settings_div = document.createElement("div");

// Add overworks to selection
settings_div.innerHTML = `<h3>Select overworks:</h3>`;

settings_div.innerHTML += `<input \
        type="checkbox"\
        id="over_12"\
    /> x12x Overworks\n`;
settings_div.innerHTML += `<input \
        type="checkbox"\
        id="over_56"\
    /> x56x Overworks\n`;
settings_div.innerHTML += `<input \
        type="checkbox"\
        id="over_56x12"\
    /> 56x12 Overworks\n`;

// Add underworks to selection
settings_div.innerHTML += `<br/><br/>`
settings_div.innerHTML += `<h3>Select underworks:</h3>`;

settings_div.innerHTML += `<input \
        type="checkbox"\
        id="under_12"\
    /> x12x Underworks\n`;
settings_div.innerHTML += `<input \
        type="checkbox"\
        id="under_56"\
    /> x56x Underworks\n`;
settings_div.innerHTML += `<input \
        type="checkbox"\
        id="under_56x12"\
    /> 56x12 Underworks\n`;
    
settings_div.innerHTML += `<h3>Select bell:</h3>\
    <input id="bell_input"/>`

settings_div.innerHTML += `<h3><button id="settings_return">Start</button></h3>`;



// Actual game div
const game_div = document.createElement("div");

// TODO: add a canvas to this for drawing the lines on
game_div.innerHTML = '\
    <textarea id="rows" readonly="true" rows="8"></textarea></p>\
    <button id=button_left>\<</button>\t<button id=button_down>v</button>\t<button id=button_right>\></button>\
    <br/>\
    <p>Current overwork: <span id="over_display"></span></p>\
    <p>Current underwork: <span id="under_display"></span></p>\
    <p>Mistakes: <span id="mistake_counter"></span></p>\
    <button id="settings">Settings</button>';

// Add divs to the screen, hide the game initially
container.append(game_div);
container.append(settings_div);
game_div.style.display = 'none';


/* Div component references */

// Displays
const underwork_display = document.getElementById("under_display");
const overwork_display = document.getElementById("over_display");
const rows_display = document.getElementById("rows");
const mistake_counter = document.getElementById("mistake_counter");


// Options
const checkbox_over_12 = document.getElementById("over_12");
const checkbox_over_56 = document.getElementById("over_56");
const checkbox_over_56x12 = document.getElementById("over_56x12");
const checkbox_under_12 = document.getElementById("under_12");
const checkbox_under_56 = document.getElementById("under_56");
const checkbox_under_56x12 = document.getElementById("under_56x12");

const bell_input = document.getElementById("bell_input");

const left_button = document.getElementById("button_left");
const down_button = document.getElementById("button_down");
const right_button = document.getElementById("button_right");


/* Variables for use during the game */
let current_under = "";
let current_over = "";
let reverse = false; // indicates whether in first or second half of the lead
let overwork_set = [];
let underwork_set = [];
let rows = [['1','2','3','4','5','6']];
let current_pos = 0;
let next_pos = 0;
let bell = 'X'; // default is the empty string, make this safe for just continuing
let mistakes = 0;


// get the items currently ticked in the settings - trigger on exiting settings
// don't allow individual section - do by big groups (3 options)
function getMethodSet() {
    // check overworks
    overwork_set = [];
    if (checkbox_over_12.checked) {
        overwork_set = overwork_set.concat(overworks_12);
    }
    if (checkbox_over_56.checked) {
        overwork_set = overwork_set.concat(overworks_56);
    }
    if (checkbox_over_56x12.checked) {
        overwork_set = overwork_set.concat(overworks_56x12);
    }

    // check underworks
    underwork_set = [];
    if (checkbox_under_12.checked) {
        underwork_set = underwork_set.concat(underworks_12);
    }
    if (checkbox_under_56.checked) {
        underwork_set = underwork_set.concat(underworks_56);
    }
    if (checkbox_under_56x12.checked) {
        underwork_set = underwork_set.concat(underworks_56x12);
    }
}

function getBell() {
    // Read the bell input
    bell = bell_input.value;
}

// Combine the under- and over-works to get the place notation
// for the next half-lead
// (string -> string) -> string
function getCombinedNotation(underwork, overwork) {
    let lower = underwork_notations[underwork];
    let upper = overwork_notations[overwork];

    let combined_notation = [];
    for (let i=0; i<lower.length; i++) {
        combined_notation.push(lower[i]+upper[i]);
    }
    return combined_notation;
}

// Get the rows for the next half-lead; including the half-lead or
// lead-end change
// (string -> string) -> char[][]
function getNextRows(notation, previous_row, reverse) {
    let next_rows = [];
    // Add the extra change to the notation
    if (reverse) {
        notation = notation.reverse();
        notation.push("12");
    } else {
        notation.push("56");
    }

    notation.forEach(change => {
        // Apply change to the previous row
        let new_row = ["","","","","",""];
        // First, insert the places
        for (let i=0; i<change.length; i++) {
            new_row[change[i]-1] = previous_row[change[i]-1];
        }
        // Make any remaining '' swap with neighbour
        for (let j=0; j<6; j++) {
            if (new_row[j] == "") {
                // Do a swap
                new_row[j] = previous_row[j+1];
                new_row[j+1] = previous_row[j];
            }
        }
        previous_row = new_row;
        // Construct a string from the char array
        next_rows.push(new_row);
    });

    return next_rows;
}

function nextOverwork() {
    // If ringing a composition, give you the next overwork from the comp
    // Else, a random overwork from the method set
}

function nextUnderwork() {
    // If ringing a composition, give you the next overwork from the comp
    // Else, a random overwork from the method set
}

function initGame() {
    getMethodSet();
    getBell();
    // overwork_display.innerHTML = overwork_set.length;
    // underwork_display.innerHTML = underwork_set.length;
    
    // choose over and under work
    current_over = overwork_set[Math.floor(Math.random() * overwork_set.length)];
    current_under = underwork_set[Math.floor(Math.random() * underwork_set.length)];
    
    let hl_notation = getCombinedNotation(current_under, current_over);
    rows = [["1","2","3","4","5","6"]];
    rows = rows.concat(getNextRows(hl_notation, rows[0], false));
    
    overwork_display.innerHTML = current_over;
    underwork_display.innerHTML = current_under;
    
    // Set up current_pos and next_pos
    current_pos = rows[0].indexOf(bell);
    next_pos = rows[1].indexOf(bell);

    // Display the first row (rounds)
    let next_row = rows.shift();
    rows_display.innerHTML = next_row[0]+next_row[1]+next_row[2]+next_row[3]+next_row[4]+next_row[5]+"\n";
}

// consume a row, and output the next row
// direction is -1, 0, or 1
function stepGame(direction) {
    if (current_pos != -1) {
        if (direction != (next_pos - current_pos)) {
            // incorrect; increment mistakes, don't move on to next row
            mistakes += 1;
            mistake_counter.innerHTML = mistakes;
            return;
        }
    }

    let next_row = rows.shift();
    rows_display.innerHTML += next_row[0]+next_row[1]+next_row[2]+next_row[3]+next_row[4]+next_row[5]+"\n";
    rows_display.scrollTop = rows_display.scrollHeight;

    if (rows.length == 1) {
        if (reverse) {
            // End of second half of the lead; need a new underwork
            current_under = underwork_set[Math.floor(Math.random() * underwork_set.length)];
            underwork_display.innerHTML = current_under;
        } else {
            current_over = overwork_set[Math.floor(Math.random() * overwork_set.length)];
            overwork_display.innerHTML = current_over;
        }
        reverse = !reverse;

        let hl_notation = getCombinedNotation(current_under, current_over);
        let new_rows = getNextRows(hl_notation, rows[0], reverse);
        // rows_display.innerHTML = rows[-1]+"<br/>";
        rows = rows.concat(new_rows);
    }

    // Update current_pos and next_pos
    current_pos = next_pos;
    next_pos = rows[0].indexOf(bell);
}

function handleKeyPress(key) {
    switch(key) {
        case "ArrowLeft":
            // go left
            stepGame(-1);
            break;
        case "ArrowRight":
            // go right
            stepGame(1);
            break;
        case "ArrowDown":
            // make a place
            stepGame(0);
            break;
    }
}

settings.onclick = function() {
    game_div.style.display = 'none';
    settings_div.style.display = 'block';
};

// Revert to game screen, refresh method selections
settings_return.onclick = function() {
    settings_div.style.display = 'none';
    game_div.style.display = 'block';
    initGame();
};

// Handle keypresses and control button presses
document.addEventListener('keydown', (event) => {
    handleKeyPress(event.key);
})

left_button.onclick = function() {
    stepGame(-1);
};
down_button.onclick = function() {
    stepGame(0);
}
right_button.onclick = function() {
    stepGame(1);
}
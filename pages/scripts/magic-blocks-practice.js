// Page components
const container = document.getElementById("game_container");

// Settings div to be displayed initially - select methods to practice
const settings_div = document.createElement("div");
settings_div.innerHTML = '<p>Settings</p>\
            <p>Probability of conducting required: </p>\
            <input id="prob_input" type="range" min=0 max=100 value=20>\
            <br>\
            <button id="settings_return">Return and save</button>';

            // checkboxes
            // auto-add checkboxes
            // mark checkboxes with actual includes

// Actual game div
const game_div = document.createElement("div");
game_div.innerHTML = '<p>Current coursing order: <span id="co_display">53246</span></p>\
            <p>Next call: <span id="call_display"></span></p>\
            <p>Enter new coursing order: <input id="input"></p>\
            <button id="submit">Submit</button>\
            <p id="feedback"></p>\
            <br>\
            <button id="settings">Settings</button>';


container.append(game_div);
container.append(settings_div);
game_div.style.display = 'none';


// Component references
const call_display = document.getElementById("call_display");
const co_display = document.getElementById("co_display");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const settings = document.getElementById("settings");
const settings_return = document.getElementById("settings_return");
const prob_conducting_input = document.getElementById("prob_input");

// Constants and settings

// OVER AND UNDERWORKS: exclude the half-lead and lead-end change, which are always 56 and 12 respectively
// Split into over and under completely independently, so the method's place notation can be constructed
// by combining the under and over straightforwardly

const overwork_arrs_12 = {
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
    "Hills":        ["36","","34","4","","","","6","","",""]
};

const underwork_arrs_12 = {
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
    "Burslem":      ["","","","1","","12","","1","34","","14"]
};

let overworks_12 = Object.keys(overwork_arrs_12);
let underworks_12 = Object.keys(underwork_arrs_12);





// Set up button bindings
submit.onclick = function() {
    checkAndUpdate();
};

settings.onclick = function() {
    game_div.style.display = 'none';
    settings_div.style.display = 'block';
    //TODO: reset the game div display etc
};

settings_return.onclick = function() {
    // Save new conducting probability
    prob_conducting = prob_conducting_input.value / 100;

    // Revert to game screen
    settings_div.style.display = 'none';
    game_div.style.display = 'block';
};

// TODO: allow the user to restart from a plain course


// Generate the first call
nextCall();
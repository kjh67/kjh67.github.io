// Page components
const container = document.getElementById("game_container");

const game_div = document.createElement("div");
game_div.innerHTML = '<p>Current coursing order: <span id="co_display">53246</span></p>\
            <p>Next call: <span id="call_display"></span></p>\
            <p>Enter new coursing order: <input id="input"></p>\
            <button id="submit">Submit</button>\
            <p id="feedback"></p>\
            <br>\
            <button id="settings">Settings</button>';

const settings_div = document.createElement("div");
settings_div.innerHTML = '<p>Settings</p>\
            <p>Probability of conducting required: </p>\
            <input id="prob_input" type="range" min=0 max=100 value=20>\
            <br>\
            <button id="settings_return">Return and save</button>';

container.append(game_div);
container.append(settings_div);
settings_div.style.display = 'none';


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
const call_arrs = {
    "H":[0,2,3,1,4],
    "W":[1,2,0,3,4],
    "M":[0,1,3,4,2],
    "B":[4,0,1,2,3],
    "sH":[0,3,2,1,4],
    "sW":[2,1,0,3,4],
    "sM":[0,1,4,3,2],
};
let calls = Object.keys(call_arrs);
let call = ""
let co = "53246";
let co_hidden = false;
let prob_conducting = 0.2;

function nextCall() {
    call = calls[Math.floor(Math.random()*calls.length)];
    call_display.textContent = call;
}

function transposeCO() {
    transposition = call_arrs[call];
    new_co = co[transposition[0]];
    lim = co.length; i=1;
    while (i<lim) {
        new_co += co[transposition[i]];
        i++;
    }
    return new_co;
}

function conductingRequired() {
    // Start by presenting who goes wrong, what you're doing
    // After tried once, option to just close or submit again
    let plain_co = "8753246";
    wrongun = Math.floor(Math.random()*6)+2;
    your_pb = Math.floor(Math.random()*7)+2;
    your_suffix = your_pb === 2 ? "nds" : (your_pb === 3 ? "rds" : "ths");
    full_co = "87"+co;
    offset = full_co.indexOf(wrongun);
    their_pb = plain_co[(plain_co.indexOf(your_pb)+offset)%plain_co.length];
    their_suffix = their_pb === 2 ? "nds" : (your_pb === 3 ? "rds" : "ths");
    user_answer = prompt("Oh no! The "+wrongun+" went wrong!!! You are the tenor ringing "
        +your_pb+your_suffix+" place bell. What place bell should the "+wrongun+" be?");
    if (user_answer === their_pb) {
        alert("Correct!");
    } else {
        alert("Incorrect. The coursing order is "+full_co+", so if you are "+your_pb
            +your_suffix+" place bell, the "+wrongun+" would be "+their_pb+their_suffix+" place bell.");
    }
}

function checkAndUpdate() {
    let user_answer = input.value;
    let correct = transposeCO();
    if (user_answer === correct) {
        // Hide coursing order
        co_display.innerHTML = "<a>Show</a>";
        co_display.onclick = showCO;
        feedback.textContent = "Correct";
        // Clear input box
        input.value = "";
        // Update to new CO
        co = correct;
        // Generate next call
        nextCall();

        // Chance for someone to need correcting
        if (Math.random() < prob_conducting) {
            conductingRequired();
        }

    } else {
        feedback.textContent = "Incorrect! Try Again";
    }
}

function showCO() {
    co_display.textContent = co;
}


// Set up button bindings
submit.onclick = function() {
    checkAndUpdate();
};

settings.onclick = function() {
    game_div.style.display = 'none';
    settings_div.style.display = 'block';
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
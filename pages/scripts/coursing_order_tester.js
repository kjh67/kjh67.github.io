// Component references
const call_display = document.getElementById("call_display");
const co_display = document.getElementById("co_display");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");

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
    full_co = "87"+co;
    offset = full_co.indexOf(wrongun);
    their_pb = plain_co[(plain_co.indexOf(your_pb)+offset)%plain_co.length];
    user_answer = prompt("Oh no! The "+wrongun+" went wrong!!! You are the tenor ringing "
        +your_pb+"th place bell. What place bell should the "+wrongun+" be?");
    if (user_answer === their_pb) {
        alert("Correct!");
    } else {
        alert("Incorrect. The coursing order is "+full_co+", so if you are "+your_pb
            +"th place bell, the "+wrongun+" would be "+their_pb+"th place bell.");
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
        if (Math.random() < 0.5) {
            conductingRequired();
        }

    } else {
        feedback.textContent = "Incorrect! Try Again";
    }
}

function showCO() {
    co_display.textContent = co;
}

submit.onclick = function() {
    checkAndUpdate();
};

nextCall();
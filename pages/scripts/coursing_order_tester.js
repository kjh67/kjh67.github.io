const call_display = document.getElementById("call_display");
const co_display = document.getElementById("co_display");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
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

let co_hidden = false;
let co = "53246";

let call = ""

// After previous call has been handled, move on to the next one
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

function checkAndUpdate() {
    let user_answer = input.value;
    let correct = transposeCO();
    if (user_answer === correct) {
        // Hide coursing order
        co_display.innerHTML = "<a>Show</a>";
        co_display.onclick = showCO;
        alert("correct!");
        // Clear input box
        input.value = "";
        // Update to new CO
        co = correct;
        // Generate next call
        nextCall();
    } else {
        alert("incorrect!");
    }
}

function showCO() {
    co_display.textContent = co;
}

submit.onclick = function() {
    checkAndUpdate();
};

nextCall();
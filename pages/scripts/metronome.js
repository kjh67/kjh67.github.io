// Page components
const container = document.getElementById("metronome_container");
container.innerHTML = '<p>Inter-bell gap (ms): <input id="ibg_input"></p>\
    <button id="playpause">Go</button>\
    ';
const control_button = document.getElementById("playpause");
const ibg_input = document.getElementById("ibg_input");

// TODO: make some buttons for adjusting the sound made by each bell

// TODO: allow numbers of bells other than 12
let bells = 12;
// Empty for now - will fill with audio objects
let sounds = new Array(2*bells + 1);
let current = 0;
let going = false;
let timer;

// Fixed array of noise options - high, low, nothing (null)
let noise_files = ["assets/audio/tick.mp3", "assets/audio/tock.mp3"];

// Inter-bell gap in milliseconds
// 190 is approx GSM speed
let interbell_gap = 190.0;
ibg_input.textContent = "${interbell_gap}";

// TODO: allow peal speed input
// Set inter-bell gap on change to input field
ibg_input.addEventListener("change", (event) => {
    interbell_gap = event.target.value;
    if (going) {
        restart();
    }
})


// TODO: actually allow the sounds to be configurable
// Set sounds mode for each handstroke / backstroke of every bell
// Call this function when any setting is changed
function update_sounds() {
    for (let beat = 0; beat < sounds.length; beat++) {
        if (beat % 12 == 0) {
            sounds[beat] = new Audio(noise_files[0]);
        }
        else {
            sounds[beat] = new Audio(noise_files[1]);
        }
        
    }
    sounds[24] = null;
}

// Make a noise - to be called at the increment decided by peal speed
function do_strike() {
    // Play the noise if one exists
    if (sounds[current]) {
        sounds[current].play();
        sounds[current].currentTime = 0;
    }
    // Increment the current sound counter
    current = (current + 1) % sounds.length;
}

// Restart noises - intended to be called for peal speed changes too
function restart() {
    clearInterval(timer);
    timer = setInterval(do_strike, interbell_gap);
}

// Stop noises, and reset the beat counter
function stop() {
    clearInterval(timer);
    current = 0;
}

control_button.onclick = function() {
    if (going) {
        stop();
        going = false;
        control_button.textContent = "Go";
    } else {
        restart();
        going = true;
        control_button.textContent = "Stop";
    }
}

update_sounds();

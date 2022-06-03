const typing_text = document.querySelector(".content-box p");
const mistakesTag = document.querySelector(".mis"),
    timeTag = document.querySelector(".time"),
    wpmTag = document.querySelector(".wpm"),
    cpmTag = document.querySelector(".cpm"),
    inst = document.querySelector(".inst"),
    inst_txt_def = inst.innerHTML;
let char_index = 0,
    mistakes = 0,
    timer,
    maxTime = 60,
    timeLeft = maxTime,
    cpm = wpm = 0,
    isTyping = 0;

let button = document.querySelector("button");
let input_txt = document.querySelector(".content-box input");

function random_para() {
    typing_text.innerHTML = null;
    let p_index = Math.floor(Math.random() * para.length);
    para[p_index].split("").forEach(letter => {
        let span_letter = "<span>" + letter + "</span>";
        typing_text.innerHTML += span_letter;
    });
    input_txt.focus();
    document.querySelector("p span").classList.add("active");
    document.addEventListener("keydown", active_input);
    typing_text.addEventListener("click", active_input);
}

random_para();

function active_input() {
    input_txt.focus();
}

let current_letter = document.querySelectorAll("p span");

function check() {
    inst.style.opacity = "0";
    if (!isTyping) {
        timer = setInterval(start_timer, 1000);
        isTyping = true;
    }
    if (char_index >= current_letter.length) {
        alert(current_letter.length);
        input_txt.removeEventListener("input", check);
        clearInterval(timer);
        input_txt.innerHTML = "";
    }
    let typed_char = input_txt.value.split("");
    let character = current_letter[char_index];
    if (typed_char[char_index] === undefined) {
        character.classList.remove("active");
        char_index--;
        if (current_letter[char_index].classList.contains("incorrect")) {
            mistakes--;
        }
        current_letter[char_index].classList.remove("correct", "incorrect");
    } else {
        if (character.innerHTML === typed_char[char_index]) {
            character.classList.add("correct");
        } else {
            mistakes++;
            character.classList.add("incorrect");
        }
        character.classList.remove("active");
        char_index++;

    }
    cpm = char_index - mistakes;
    cpmTag.innerHTML = cpm;
    mistakesTag.innerHTML = mistakes;
    current_letter[char_index].classList.add("active");
}

function start_timer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerHTML = timeLeft;
        wpm = Math.floor((cpm / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm;
        wpmTag.innerHTML = wpm;
    } else {
        clearInterval(timer);
        input_txt.removeEventListener("input", check);
        input_txt.value = "";
        inst.innerHTML = "<p style=\"color:red;\">GAME ENDED</p>";
        inst.style.opacity = "1";

    }
}

function reset_game() {
    inst.innerHTML = inst_txt_def;
    inst.style.opacity = "1";

    random_para();

    clearInterval(timer);
    input_txt.addEventListener("input", check);
    current_letter = document.querySelectorAll("p span");

    timeLeft = maxTime;
    char_index = 0;
    mistakes = 0;
    isTyping = 0;
    timeTag.innerHTML = timeLeft;
    cpmTag.innerHTML = 0;
    wpmTag.innerHTML = 0;
    mistakesTag.innerHTML = mistakes;
    input_txt.value = "";
}

input_txt.addEventListener("input", check);
button.addEventListener("click", reset_game);
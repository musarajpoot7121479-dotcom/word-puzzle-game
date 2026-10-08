let words = [
    { word: "teacher", scrambled: "teahcer" },
    { word: "computer", scrambled: "omcupter" },
    { word: "science", scrambled: "ciencse" },
    { word: "student", scrambled: "tudsent" },
    { word: "program", scrambled: "rogpram" },
    { word: "keyboard", scrambled: "yekboard" },
    { word: "internet", scrambled: "terninet" },
    { word: "website", scrambled: "bsitewe" },
    { word: "laptop", scrambled: "ptolap" },
    { word: "college", scrambled: "leglcoe" }
];

let currentWord = 0;
let score = 0;
let timeLeft = 30;
let timer;

function showWord() {
    document.getElementById("scrambled-word").innerHTML =
        words[currentWord].scrambled;

    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";

    startTimer();
}

function checkAnswer() {
    let answer = document.getElementById("answer").value.toLowerCase().trim();

    if (answer === words[currentWord].word) {
        score++;

        document.getElementById("score").innerHTML = score;
        document.getElementById("result").innerHTML =
            "Correct! Well done!";

        clearInterval(timer);
    } else {
        document.getElementById("result").innerHTML =
            "Wrong answer. Try again!";
    }
}

function nextWord() {
    currentWord++;

    if (currentWord >= words.length) {
        clearInterval(timer);

        document.getElementById("result").innerHTML =
            "Game Over! Your final score is " + score;

        return;
    }

    showWord();
}

function restartGame() {
    currentWord = 0;
    score = 0;

    document.getElementById("score").innerHTML = score;

    showWord();
}

function startTimer() {
    clearInterval(timer);

    timeLeft = 30;

    document.getElementById("timer").innerHTML =
        "Time: " + timeLeft + " seconds";

    timer = setInterval(function() {
        timeLeft--;

        document.getElementById("timer").innerHTML =
            "Time: " + timeLeft + " seconds";

        if (timeLeft <= 0) {
            clearInterval(timer);

            document.getElementById("result").innerHTML =
                "Time's up! Try the next word.";
        }
    }, 1000);
}

showWord();
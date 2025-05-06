var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {

    // generate random number between 0 and 3
    let randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    // choose color based on the random nr
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // flash random chosen color
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    // play the sound for the specific color
    playSound(randomChosenColor);

    // increase level
    level++;

    // update h1
    $("#level-title").text("Level " + level);
}


// event listener for clicking any of the 4 buttons
$(".btn").on("click", function () {
    let userChosenColor = this.getAttribute("id");
    userClickedPattern.push(userChosenColor);
    
    // play sound for chosen button
    playSound(userChosenColor);

    // animate chosen button
    animatePress(userChosenColor);

    // check answer
    checkAnswer(userClickedPattern.length - 1);
})

function playSound(name) {
    let audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    // add class for the pressed button
    $("#" + currentColor).addClass("pressed");

    // after 100ms remove class
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// keep track of level
var level = 0;

// keep track if game has started
var started = false;

// event listener for any key press to start the game
$(document).on("keydown", function () {
    if(started == false) {
        nextSequence();
        started = true;
        $("#level-title").text("Level " + level);
    }
})

function checkAnswer(currentLevel) {
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
            userClickedPattern = [];
        }
    }
    else {
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
}

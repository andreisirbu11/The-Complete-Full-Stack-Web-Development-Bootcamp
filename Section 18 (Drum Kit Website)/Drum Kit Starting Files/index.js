var buttons = document.querySelectorAll(".drum");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let btnLetter = this.textContent;
        playSound(btnLetter);
        buttonAnimation(btnLetter);
    })
}

document.addEventListener("keydown", function (event) {
    let key = event.key;
    playSound(key);
    buttonAnimation(key);
})

function playSound(character) {
        let audio = new Audio();
        switch(character) {
            case "w":
                audio.setAttribute("src", "./sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                audio.setAttribute("src", "./sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                audio.setAttribute("src", "./sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                audio.setAttribute("src", "./sounds/tom-1.mp3");
                audio.play();
                break;
            case "j":
                audio.setAttribute("src", "./sounds/tom-2.mp3");
                audio.play();
                break;
            case "k":
                audio.setAttribute("src", "./sounds/tom-3.mp3");
                audio.play();
                break;
            case "l":
                audio.setAttribute("src", "./sounds/tom-4.mp3");
                audio.play();
                break;
            default: 
                console.log(character);
        }
}

function buttonAnimation(character) {
    var activeKey = document.querySelector("." + character);
    activeKey.classList.add("pressed");
    setTimeout(function () {
        activeKey.classList.remove("pressed");
    }, 100);
}
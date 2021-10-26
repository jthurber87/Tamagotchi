//VARIABLE DECLARATIONS
let newName = window.prompt("Welcome to Sans-agotchi! Give them a new name?", "Sans");
let name = document.getElementById('name')
let exp = document.getElementById('exp')
let level = document.getElementById('level')
let currentLevel = document.getElementById('currentLevel')
let playArea = document.getElementById('playArea')
let sleepy = document.getElementById('sleepy')
let hungry = document.getElementById('hungry')
let bored = document.getElementById('bored')
let sprite = document.getElementById('sans')
let chirp = document.getElementById('chirp')
let levelup = document.getElementById('levelup')
let win = document.getElementById('win')
let lose = document.getElementById('lose')
let tooSoon = document.getElementById('too-soon')
let randomByTen = () => {return Math.floor(Math.random() * 10)}

//CLASS CONSTRUCTOR
class Tamagotchi {
    constructor() {
        this.name= newName,
        this.level= 1
    }
}

let sans = new Tamagotchi()

//DIRECTIONS POP-UP
    name.innerText = newName
    alert(`
    Left Arrow: Feed ${newName}
    Down Arrow: Put ${newName} to bed
    Right Arrow: Play with ${newName}
    Up Arrow: Level up ${newName} when the meter is full

    ${newName} doesn't like to be bothered unless their bars are green!
    The more they level up, the pickier they'll be!`)

//FUNCTIONS
let gameOver = () => {
    sprite.src="./assets/grave.png"
    sprite.style = "width: 100%; height: 100%;"
    playArea.style.backgroundImage = ""
    exp.max = 0;
    hungry.max = 0;
    sleepy.max = 0;
    bored.max = 0;
    $("#name").text(`${newName} died!`);
    level.innerText = "Press Enter to try again"
    lose.play()
    exp.min = -1
    exp.value = -1
}

let penalty = () => {
    tooSoon.play()
    sprite.src="./assets/sans-default.gif"
    sprite.style="width: 100%;"
    playArea.style.backgroundImage = ""
    bored.value -= 25
    sleepy.value -= 25
    hungry.value -= 25
    exp.value -= 5
}
//Meters
let metersUp = (stat) =>{
    if ((stat.value === 100) || (exp.value === 0)) { //Lose condition
        gameOver()
    } else {
        stat.value += randomByTen() + sans.level;
    }
}

// Keypress Events

let interact = (e) => {
    if (e.code === "ArrowLeft") {
        if (hungry.value >= hungry.low) {
            hungry.value -= (25 - (sans.level * 1.5));
            sprite.src="./assets/food.gif"
            sprite.style="width: 70%;"
            sprite.style.marginTop = "10px"
            playArea.style.backgroundImage = ''
            playArea.style.backgroundColor='rgb(85, 85, 60)'
            document.querySelector('body').style=("color: black")
            exp.value += (5)
            chirp.play()
        } else {
            penalty()
        }
    } else if (e.code === "ArrowDown") {
        if (sleepy.value >= sleepy.low) {
            sleepy.value = sleepy.value -= (25 - sans.level);
            sprite.src="./assets/sleepy-sans.gif" //https://www.icegif.com/wp-content/uploads/sans-icegif-9.gif
            playArea.style.backgroundImage = 'url("assets/stars.gif")'
            sprite.style="width: 100%"
            document.querySelector('body').style=("color: white")
            exp.value += (5)
            chirp.play()
        } else {
            penalty()
        }
    } else if (e.code === "ArrowRight") {
        if (bored.value >= bored.low) {
            bored.value = bored.value -= (25 - sans.level);
            sprite.src="./assets/play.gif" //https://gifer.com/en/26ng
            sprite.style="width: 70%;"
            playArea.style.backgroundImage = ''
            playArea.style.backgroundColor='rgb(85, 85, 60)'
            document.querySelector('body').style=("color: black")
            exp.value += (5)
            chirp.play()
        } else {
            penalty()
        }
    } else if (e.code === "ArrowUp") {
        sprite.src="./assets/sans-default.gif" //https://i.pinimg.com/originals/a1/6e/68/a16e682d247f578a0f7ec1da2684d5fa.gif
        sprite.style="width: 100%;"
        playArea.style.backgroundImage = ''
        playArea.style.backgroundColor='rgb(85, 85, 60)'
        document.querySelector('body').style=("color: black")
        if (exp.value === 100) {
            sans.level ++;
            currentLevel.innerText = sans.level;
            exp.value = 6;
            hungry.low += 3;
            sleepy.low += 3;
            bored.low += 3;
            levelup.play();
            if (sans.level === 10) {
                level.innerText = "You win!";
                win.play();
                sprite.src="./assets/you-win.gif"
                exp.max = 100;
                exp.value = 1
                hungry.max = 0;
                sleepy.max = 0;
                bored.max = 0;
            }
        }
    } else if (e.code === "Enter") {
        location.reload()
    }
}

//FUNCTION CALLS
setInterval(function(){metersUp(sleepy);}, 1000 - (randomByTen() * (sans.level * 25)));
setInterval(function(){metersUp(hungry)}, 1000 - (randomByTen() * (sans.level * 25)));
setInterval(function(){metersUp(bored)}, 1000 - (randomByTen() * (sans.level * 25)));


document.onkeydown = interact

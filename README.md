## Sans-agotchi
A fast-paced Tamagotchi experience

## Wireframe
![wireframe](https://i.imgur.com/7tcwuDy.jpeg)
## Scope
*Start small*:
*MVP*: blurry classroom background, centered tamagotchi picture with a div over the screen to act as the players screen, moving sprite, slowly (and randomly) increasing meters to indicate sleepy/hungry/bored, left/down/right keypresses to decrease those meters, exp meter which at 100/100 will level up, win/lose conditions

*Add extras*:
Sprite reflects button presses for eat/sleep/play, sounds to indicate button press and penalties

*Final touches*:
Tweaking difficulty (amount of exp gained per successful button press and amount meters increase per level), more concise alert message with directions, cleaning up code

## User Stories
1. The game should start with an alert("Welcome to Sans-agotchi! Give them a new name?" with user input which will put label under sprite. Directions on how to play should replace this screen. *(6: newName, 44: alert())*
2. The user should press left to feed, down to sleep (turn off lights), right to play. This should be in response to the stats meters slowly filling, starting at zero, and filling faster/more every level. *(83: stat.value += randomByTen() + sans.level, 89: interact(e)*
3. Upon exp meter filling, pressing up should set to zero, level++, and stats meters should go up by random ++ per second. *(136: if (exp.value === 100))*
4. Exp meter should show level / 10, with 10/10 as win condition *(144: if(sans.level === 10))*
5. 100/100 on any stat lose condition *(80: if ((stat.value === 100) || (exp.value === 0))*
5. When interacting with Sans, new sprite should show for that button. *(93, 97, 120: sprite.src())*

## TECHNOLOGIES IN PLAY
**HTML/CSS/JS**
	This presents the user with a blurry classroom background, a centered Tomagatchi foreground, and a strategically placed div covering the screen. Upon completing some introductory prompts, meters will go up based on scaling intervals and players will have the opportunity to use arrow keys on their keyboard to interact with the game.

**Class constructor**
    This will allow a new user to generate the name and, more importantly, level of the Sans-agotchi, the latter of which will dictate a number of things throughout the players experience

**DOM Manipulation**
    Sprite replacement, meter manipulation, and document styling to name a few

**Event listeners**
    I decided on keypress input based on the pace of the game. Originally, the player was to click buttons on the page, but that proved too difficult on both the user and myself for CSS styling

**setInterval()**
    I hav a lot of fun playing with setInterval. It started off adding a random number between 1-10 to the value of each meter which gave it a little randomness. But when I realized that you could pass equations into the parameters of setInterval, I took the opportunity to incorporate scaling difficulty, each bar filling a little faster and a little more per level.

**Meters**
    The meters are a foundational aspect of this game. Its attributes help define the difficulty and win/lose conditions.

**Audio**
    Using audio in response to keypresses really helped give the game a feel for if you were doing things right.

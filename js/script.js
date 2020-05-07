var buttons = document.getElementsByClassName('colorButton');
var heading;
heading = document.getElementById('colorValue');
const body = document.getElementsByTagName('body');
function setButtoncolor(button, red, green, blue){
    button.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');');
}
function setBodyColor(body, red, green, blue){
    body.setAttribute('style', 'background-color: rgb('+ red +','+ green +','+ blue +');');
}
function resetBodyColor(body){
  body.setAttribute('style', 'background-color: rgb('+ 255 +','+ 255 +','+ 255 +');');
}
function makecolorValue(){
    return Math.round(Math.random()*255);
}

var answerMessage = document.getElementById('answer');
function startGame() {
  resetBodyColor(body[0]);
  answerMessage.innerHTML = "";

  var answerButton = Math.round(Math.random() * (buttons.length - 1));

  for (var i = 0; i < buttons.length; i++) {

    var red = makecolorValue();
    var green = makecolorValue();
    var blue = makecolorValue();

    setButtoncolor(buttons[i], red, green, blue);

    if (i === answerButton) {
      heading.innerHTML = `(${red}, ${green}, ${blue})`;
      var a = red;
      var b = green;
      var c = blue;
    }

    buttons[i].addEventListener('click', function(){
        if (this === buttons[answerButton]) {
            answerMessage.innerHTML = "Correct!";
            setBodyColor(body[0], a, b, c);

        } else {
            answerMessage.innerHTML = "Wrong answer! Guess again!";
        }
    });

  }

}
startGame();
document.getElementById('resetButton').addEventListener('click', startGame);

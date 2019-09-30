/*jshint esversion: 6 */

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerText;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown",function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

var makeSound = function(character = "") {
  switch (character) {
    case 'w':
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
      var kickBass = new Audio('./sounds/kick-bass.mp3');
      kickBass.play();
      break;
    case 's':
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(character);

  }

};

var buttonAnimation = function(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
};


/*
Notes from building this site:
- You can bound html elements to variable by putting <h1>hello</h1> ==$0
- Therefore in the console or js can reference that html element.
- debugger; then shift enter
  here make your function call that you want to step through in debugger mode.
- Higher order functions are functions that can take functions as parameters.
- You can pass the event to the function by putting event as a parameter in the fucntion in addEventListener
- You can add event listeners to the entire document and not just one specifici html element.
- You can pass it as e or anything els, but e is common.



*/

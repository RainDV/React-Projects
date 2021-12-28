import React from 'react'
import "./Drums.css"

const tom1 = null;
const tom2 = null;
const tom3 = null;
const tom4 = null;
const crash = null;
const kick = null;
const snare = null;

var noOfdrums = document.querySelectorAll(".drum").length;

// Detecting Button Press
for (var i = 0; i < noOfdrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        changeBorderColor(this);
        makeSound(buttonInnerHTML);
    }); 
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    var key = ".drum." + event.key;
    var button = document.querySelector(key);

    changeBorderColor(button);
    makeSound(event.key);
});

function changeBorderColor (element) {
    // var color = element.style.borderColor;
    // element.style.borderColor = "#adb5cb";
    // setTimeout(function() {
    //     element.style.borderColor = color;
    // }, 100);

    element.classList.add("pressed");
    setTimeout(function() {
        element.classList.remove("pressed");
    }, 100);
}

function makeSound (key) {
        switch (key) {
            case "w": 
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "d":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                
            break;

            case "j":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                
                break;

            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            default: console.log(key);
        }
}
// var tom1 = new Audio("sounds/tom-1.mp3");
// tom1.play();

const Drums = () => {
    return (
        <div>
              <div className="set">
                <button className="w drum">w</button>
                <button className="a drum">a</button>
                <button className="d drum">d</button>
                <button className="j drum">j</button>
                <button className="k drum">k</button>
                <button className="s drum">s</button>
                <button className="l drum">l</button>
            </div>
        </div>
    )
}

export default Drums

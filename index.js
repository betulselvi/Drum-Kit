//Detecting button press
//reach all button array elements with using for loop
var buttonList = document.querySelectorAll("Button");
for (let i = 0; i < buttonList.length; i++) {
//if click the first button screen send an alert which include handleClick function
 //didn't add parentheses handleClick function because straight up method should not be called. if it's called function give alert directly, not wait for click.
 buttonList[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
 });
}
    //Detecting keyboard press
    //event is the just an input name that you choose
    document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
});
    function makeSound(key){
    //created switch case to reduce unnecessary if else confusi
    switch (key){
        case "w":
            //anonymous function for give an sound message 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
        
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        //default function is like else function. if any case input don't receive, default is applied
        default: console.log();
    }
}
    function buttonAnimation(currentKey){

        var activeButton = document.querySelector("."+ currentKey);
        //implement pressed css class to activeButton
        activeButton.classList.add("pressed");
        //set the timeout for get back the unclick modein the button that pressed in 1 sec ago
        //call function again because this is a setTimeout method working procedure 
        setTimeout(function(){
            activeButton.classList.remove("pressed")}
            ,100);
    }
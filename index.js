var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var b=this.innerHTML;
        makeSound(b);
        buttonAnimation(b);
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key)
{
    switch(key)
    {
            case "w":
            var c= new Audio("sounds/tom-1.mp3");
            c.play();
            break;
            case "a":
            var c= new Audio("sounds/tom-2.mp3");
            c.play();
            break;
            case "s":
            var c= new Audio("sounds/tom-3.mp3");
            c.play();
            break;
            case "d":
            var c= new Audio("sounds/tom-4.mp3");
            c.play();
            break;
            case "j":
            var c= new Audio("sounds/snare.mp3");
            c.play();
            break;
            case "k":
            var c= new Audio("sounds/crash.mp3");
            c.play();
            break;
            case "l":
            var c= new Audio("sounds/kick-bass.mp3");
            c.play();
            break;
    }
}
function buttonAnimation(keyvalue)
{
   var pressedEle = document.querySelector("."+keyvalue);
   pressedEle.classList.add("pressed");
   setTimeout(removeClass,100,pressedEle);//100 milli seconds = 0.1 sec 
   // and pressedEle in settimeout is like sending argument to removeClass
}

function removeClass(pressedEle){
    pressedEle.classList.remove("pressed");
}
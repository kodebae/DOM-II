// Your code goes here

//MOUSEOVER
const purpleHeader = document.getElementById("purpleH2");
purpleHeader.addEventListener("mouseover", function(event) {
    // highlight the mouseover target
    event.target.style.color = "purple"
});

// KEYDOWN

addEventListener("keydown", function(event) {
    if (event.keyCode == 86)
        document.body.style.background = "violet";
});
addEventListener("keyup", function(event) {
    if (event.keyCode == 86)
        document.body.style.background = "";
});

//WHEEL 



// DRAG / DROP

//LOAD

// FOCUS

//RESIZE

// SCROLL

//SELECT

//DBL
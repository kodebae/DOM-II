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

document.querySelector("body").addEventListener("wheel", function(e) {
    document.querySelectorAll("p").forEach(x => {
        e.preventDefault();
        x.addEventListener("wheel", e => x.style.color = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )`)
    });
});

// DRAG / DROP

document.querySelectorAll("img").forEach(image => {
    image.addEventListener("drag", e => image.style.border = "8px dotted purple");
});

//LOAD

this.addEventListener("load", e => alert("BEEP BEEP BEEP"));

// FOCUS

const form = document.getElementById('form');

form.addEventListener('focus', (event) => {
    event.target.style.background = 'purple';
}, true);

form.addEventListener('blur', (event) => {
    event.target.style.background = '';
}, true);

//RESIZE

this.addEventListener("resize", e => document.body.style.backgroundColor = `rgb( ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) }, ${ Math.floor( Math.random() * 256 ) } )`);

// SCROLL

this.addEventListener("scroll", function(event) {
    document.querySelectorAll("div").forEach(function(div) {
        div.style.backgroundColor = "aqua ";
    });
});

//SELECT

document.querySelectorAll("h4").addEventListener("select", function(event) {
    document.querySelectorAll("h4").forEach(function(h4) {
        h4.style.color = "red";
    });
});


//DBL
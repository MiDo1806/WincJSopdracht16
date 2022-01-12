const body = document.querySelector('body');
const menuButton = document.getElementById('hamburger');
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle('visible');
})

menuButton.addEventListener("mouseover", function () {
    menu.classList.toggle('visible');
})


const changeColor = event => {
    const color = event.target.innerHTML.split(' ')[0];
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color = "white";
}

const pressColor = () => {
    document.getElementById("color").innerHTML = color;
    body.style.background = color;
    menu.classList.toggle('visible');
    document.querySelector(".text").style.color = "white";
}

const red = document.querySelector(".red").
    addEventListener("click", changeColor)

const orange = document.querySelector(".orange").
    addEventListener("click", changeColor)

const yellow = document.querySelector(".yellow").
    addEventListener("click", changeColor)

const green = document.querySelector(".green").
    addEventListener("click", changeColor)

const blue = document.querySelector(".blue").
    addEventListener("click", changeColor)

const indigo = document.querySelector(".indigo").
    addEventListener("click", changeColor)

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 49 || event.keyCode === 97) {
        color = "red";
    }

    else if (event.keyCode === 50 || event.keyCode === 98) {
        color = "orange";
    }

    else if (event.keyCode === 51 || event.keyCode === 99) {
        color = "yellow";
    }

    else if (event.keyCode === 52 || event.keyCode === 100) {
        color = "green";
    }

    else if (event.keyCode === 53 || event.keyCode === 101) {
        color = "blue";
    }
    else if (event.keyCode === 54 || event.keyCode === 102) {
        color = "indigo";
    }

    pressColor()

})

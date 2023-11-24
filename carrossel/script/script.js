const slider = document.querySelector(".container");
const container = document.querySelectorAll(".slide");

document.getElementById("left").addEventListener("click", function() {
    toPrevious()
})

document.getElementById("right").addEventListener("click", function() {
    toNext()
})

let current = 0;
let prev = container.length - 1;
let next = 1;

const toPrevious = () => {
    if (current > 0) {
        toSlide(current - 1)
    } else {
        toSlide(container.length - 1)
    }
}

const toNext = () => {

    if (current < 4) {
        toSlide(current + 1)
    } else {
        toSlide(0)
    }
}

const toSlide = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < container.length; i++) {
        container[i].classList.remove("active");
        container[i].classList.remove("prev");
        container[i].classList.remove("next");
    }

    if (next == container.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = container.length - 1;
    }

    container[current].classList.add("active");
    container[prev].classList.add("prev");
    container[next].classList.add("next");
}
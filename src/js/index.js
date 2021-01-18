import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const answer1 = document.querySelector(".answer1--js");
const answer2 = document.querySelector(".answer2--js");
const answer3 = document.querySelector(".answer3--js");
const answer4 = document.querySelector(".answer4--js");
const answer5 = document.querySelector(".answer5--js");
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");
const arrowDown1 = document.querySelector(".arrowdown--js1");
const arrowDown2 = document.querySelector(".arrowdown--js2");
const arrowDown3 = document.querySelector(".arrowdown--js3");
const arrowDown4 = document.querySelector(".arrowdown--js4");
const arrowDown5 = document.querySelector(".arrowdown--js5");

button1.addEventListener("click", () => {
    answer1.classList.toggle("answer--active");
    answer2.classList.remove("answer--active");
    answer3.classList.remove("answer--active");
    answer4.classList.remove("answer--active");
    answer5.classList.remove("answer--active");
    question1.classList.toggle("bold");
    question2.classList.remove("bold");
    question3.classList.remove("bold");
    question4.classList.remove("bold");
    question5.classList.remove("bold");
    arrowDown1.classList.toggle("rotate");
});

button2.addEventListener("click", () => {
    answer2.classList.toggle("answer--active");
    answer1.classList.remove("answer--active");
    answer3.classList.remove("answer--active");
    answer4.classList.remove("answer--active");
    answer5.classList.remove("answer--active");
    question2.classList.toggle("bold");
    question1.classList.remove("bold");
    question3.classList.remove("bold");
    question4.classList.remove("bold");
    question5.classList.remove("bold");
    arrowDown2.classList.toggle("rotate");
});

button3.addEventListener("click", () => {
    answer3.classList.toggle("answer--active");
    answer2.classList.remove("answer--active");
    answer1.classList.remove("answer--active");
    answer4.classList.remove("answer--active");
    answer5.classList.remove("answer--active");
    question3.classList.toggle("bold");
    question1.classList.remove("bold");
    question2.classList.remove("bold");
    question4.classList.remove("bold");
    question5.classList.remove("bold");
    arrowDown3.classList.toggle("rotate");
});

button4.addEventListener("click", () => {
    answer4.classList.toggle("answer--active");
    answer2.classList.remove("answer--active");
    answer3.classList.remove("answer--active");
    answer1.classList.remove("answer--active");
    answer5.classList.remove("answer--active");
    question4.classList.toggle("bold");
    question1.classList.remove("bold");
    question2.classList.remove("bold");
    question3.classList.remove("bold");
    question5.classList.remove("bold");
    arrowDown4.classList.toggle("rotate");
});

button5.addEventListener("click", () => {
    answer5.classList.toggle("answer--active");
    answer2.classList.remove("answer--active");
    answer3.classList.remove("answer--active");
    answer4.classList.remove("answer--active");
    answer1.classList.remove("answer--active");
    question5.classList.toggle("bold");
    question1.classList.remove("bold");
    question2.classList.remove("bold");
    question3.classList.remove("bold");
    question4.classList.remove("bold");
    arrowDown5.classList.toggle("rotate");
});
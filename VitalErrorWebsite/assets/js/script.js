function scrollToStory(){
document.getElementById("story").scrollIntoView({
behavior:"smooth"
});
}

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {

elements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.classList.add("show");
}

});

});
// SIDE MENU

const menuBtn = document.getElementById("menuToggle")
const sideMenu = document.getElementById("sideMenu")
const overlay = document.getElementById("overlay")

if(menuBtn){

menuBtn.onclick = () => {

sideMenu.classList.add("active")
overlay.classList.add("active")

}

overlay.onclick = () => {

sideMenu.classList.remove("active")
overlay.classList.remove("active")

}

}


// GSAP HERO ANIMATION

if(typeof gsap !== "undefined"){

gsap.from(".script",{
opacity:0,
y:-40,
duration:1
})

gsap.from(".hero h1",{
opacity:0,
y:60,
duration:1.2,
delay:.3
})

gsap.from(".floating-nav",{
opacity:0,
y:50,
duration:1,
delay:.6
})

}


// CARD HOVER SCALE

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transform = "scale(1.05)"
})

card.addEventListener("mouseleave", () => {
card.style.transform = "scale(1)"
})

})


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})

})

})


// SCROLL REVEAL

const reveal = document.querySelectorAll(".card, .menu-item, .blog-card")

window.addEventListener("scroll", () => {

reveal.forEach(el => {

const windowHeight = window.innerHeight
const elementTop = el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){

el.style.opacity = "1"
el.style.transform = "translateY(0)"

}

})

})

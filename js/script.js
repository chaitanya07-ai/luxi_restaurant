
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

gsap.from(".nav-pill",{
opacity:0,
y:50,
duration:1,
delay:.6
})



// CARD HOVER EFFECT

const cards = document.querySelectorAll(".card")

cards.forEach(card => {

card.addEventListener("mouseenter", () => {

card.style.transform = "scale(1.05)"

})

card.addEventListener("mouseleave", () => {

card.style.transform = "scale(1)"

})

})




document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function (e) {

e.preventDefault()

document.querySelector(this.getAttribute('href')).scrollIntoView({

behavior:'smooth'

})

})

})


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

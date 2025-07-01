// Responsive Header

const hamburgerBtn = document.getElementById("hamburgerBtn")
const mobileMenu = document.getElementById("mobileMenu")
const closeMenu = document.getElementById("closeMenu")

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full")
})

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full")
})

// Close on outside click
window.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
    mobileMenu.classList.add("-translate-x-full")
  }
})

// Image Slider

const prefix = location.hostname === "localhost" ? "" : "."

const images = [
  `${prefix}/assets/Bedroom/Image-7.png`,
  `${prefix}/assets/Manufacturing/Image-10.png`,
  `${prefix}/assets/HomeFurnitures/Image-10.png`,
  `${prefix}/assets/Kitchen/Image-6.png`,
  `${prefix}/assets/Office/Image-5.png`,
  `${prefix}/assets/HomeFurnitures/Image-9.png`,
  `${prefix}/assets/Manufacturing/Image-9.png`,
]

let index = 0
const currentImg = document.getElementById("current")
const nextImg = document.getElementById("next")

// Set initial image
currentImg.src = images[index]

setInterval(() => {
  index = (index + 1) % images.length

  nextImg.src = images[index]
  nextImg.classList.remove("hidden")
  nextImg.classList.add("slide-in")
  currentImg.classList.add("slide-out")

  setTimeout(() => {
    // Swap roles
    currentImg.src = nextImg.src
    currentImg.classList.remove("slide-out")
    nextImg.classList.remove("slide-in")
    nextImg.classList.add("hidden")
  }, 1000) // matches animation duration
}, 5000)

const texture_hero = document.getElementById("texture_hero")
texture_hero.src = `${prefix}/assets/Office/Image-4.png`

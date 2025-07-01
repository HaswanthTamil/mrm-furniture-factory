const images = [
  "/assets/Bedroom/Image-7.png",
  "/assets/Manufacturing/image-10.png",
  "/assets/HomeFurnitures/Image-10.png",
  "/assets/Kitchen/Image-6.png",
  "/assets/Office/Image-5.png",
  "/assets/HomeFurnitures/Image-9.png",
  "/assets/Manufacturing/Image-9.png",
];

let index = 0;
const currentImg = document.getElementById("current");
const nextImg = document.getElementById("next");

// Set initial image
currentImg.src = images[index];

setInterval(() => {
  index = (index + 1) % images.length;

  nextImg.src = images[index];
  nextImg.classList.remove("hidden");
  nextImg.classList.add("slide-in");
  currentImg.classList.add("slide-out");

  setTimeout(() => {
    // Swap roles
    currentImg.src = nextImg.src;
    currentImg.classList.remove("slide-out");
    nextImg.classList.remove("slide-in");
    nextImg.classList.add("hidden");
  }, 1000); // matches animation duration
}, 5000);

// const { computeStyles } = require("@popperjs/core");

// @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");





// loop
// document.addEventListener("DOMContentLoaded", function () {
//   const scrollContainer = document.querySelector(".scrolling-content");

//   // Duplicate images to ensure seamless scrolling
//   scrollContainer.innerHTML += scrollContainer.innerHTML;
// });


// text animation
const texts = [
  "Welcome to QCC Bizcert Global Ltd.",
  "Empowering sustainable business growth.",
  "Trusted solutions for global success.",
  "Integrity. Recognition. Achievement."
];

let currentText = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100; // Typing speed
const pause = 1500; // Pause between full texts

function typeWriter() {
  const element = document.getElementById("typewriter");
  const fullText = texts[currentText];

  if (isDeleting) {
      charIndex--;
      element.textContent = fullText.substring(0, charIndex);
  } else {
      charIndex++;
      element.textContent = fullText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === fullText.length) {
      isDeleting = true;
      setTimeout(typeWriter, pause);
  } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentText = (currentText + 1) % texts.length;
      setTimeout(typeWriter, 500);
  } else {
      setTimeout(typeWriter, isDeleting ? 50 : speed);
  }
}

typeWriter();
// End of text animation 

// hero animation
const images = [
  './image/Supplying.png',
  './image/asphalt.jpeg',
  './image/hero0.jpeg',
];

// Preload all images
images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

let current = 0;
const hero = document.querySelector('.bg-hero');

function changeBackground() {
  hero.style.backgroundImage = `url('${images[current]}')`;
  current = (current + 1) % images.length;
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  changeBackground(); // Initial load
  setInterval(changeBackground, 5000); // Loop
});


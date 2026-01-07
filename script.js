/*const slidesData = [
  "Welcome To<br>EMPLIZ INNOVATION PVT LTD",
  "January<br>Copilot & AI Innovation",
  "February<br>Translation & Language Tools",
  "March<br>Video Summary",
  "April<br>Microsoft Anniversary"
];

let currentSlide = 0;
const slide = document.querySelector(".slide");
const title = document.getElementById("title");

function nextSlide() {
  slide.classList.remove("active");
  slide.classList.add("prev");

  setTimeout(() => {
    currentSlide = (currentSlide + 1) % slidesData.length;
    title.innerHTML = slidesData[currentSlide];

    slide.classList.remove("prev");
    slide.classList.add("active");
  }, 600);
}





const cards = document.querySelectorAll(".card");
const screen = document.getElementById("screen");

function nextSlide() {
  index = (index + 1) % slides.length;
  title.style.opacity = 0;

  setTimeout(() => {
    title.innerHTML = slides[index];
    title.style.opacity = 1;
  }, 200);
}

screen.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;

  // Normalize mouse position (-0.5 to 0.5)
  const x = (e.clientX / innerWidth) - 0.5;
  const y = (e.clientY / innerHeight) - 0.5;

  cards.forEach(card => {
    const depth = card.getAttribute('data-depth');
    const moveX = x * depth;
    const moveY = y * depth;

   card.style.transform = `
  translate(${moveX}px, ${moveY}px)
  rotate(${card.classList.contains('left') ? -6 : 6}deg)
`;

  });
});*/



const slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.className = "slide hidden";

    if (i === current) slide.classList.add("active");
    else if (i === current - 1) slide.classList.add("prev");
    else if (i === current + 1) slide.classList.add("next");
  });
}

function nextSlide() {
  if (current < slides.length - 1) {
    current++;
    updateSlides();
  }
}

updateSlides();

/* PARALLAX (UNCHANGED, FIXED) */
const cards = document.querySelectorAll(".card");
const screen = document.getElementById("screen");

screen.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  cards.forEach(card => {
    const depth = card.dataset.depth;
    card.style.transform =
      `translate(${x * depth}px, ${y * depth}px)`;
  });
});


const hamburger = document.querySelector(".hamburger");
const navLinksWrapper = document.querySelector(".nav-links-wrapper");
const closeBtn = document.querySelector(".close-btn");


hamburger.addEventListener("click", () => {
  navLinksWrapper.classList.toggle("show");
});




closeBtn.addEventListener("click", () => {
  navLinksWrapper.classList.remove("show");
});






const words = [
  "Software Developer",
  "Full-Stack Developer",
  "Computer Science Engineer",
  "Prompt Engineer",
  "App Developer",
  "Cloud Engineer",
  "UI/UX Designer",
  "YouTuber",
];
let i = 0,
  j = 0,
  isDeleting = false;

function typeEffect() {
  const element = document.querySelector(".typing-animation");
  if (isDeleting) {
    if (j > 0) {
      j--;
      element.textContent = words[i].slice(0, j);
    } else {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  } else {
    if (j < words[i].length) {
      j++;
      element.textContent = words[i].slice(0, j);
    } else {
      isDeleting = true;
    }
  }
  setTimeout(typeEffect, isDeleting ? 100 : 200);
}

document.addEventListener("DOMContentLoaded", typeEffect);


document.addEventListener("click", (event) => {
  const isClickInside =
    navLinksWrapper.contains(event.target) || hamburger.contains(event.target);
  if (!isClickInside) {
    navLinksWrapper.classList.remove("show");
  }
});


const hamburger = document.querySelector(".hamburger");
const navLinksWrapper = document.querySelector(".nav-links-wrapper");
const closeBtn = document.querySelector(".close-btn");


hamburger.addEventListener("click", () => {
  navLinksWrapper.classList.toggle("show");
});




closeBtn.addEventListener("click", () => {
  navLinksWrapper.classList.remove("show");
});




document.addEventListener("scroll", function () {
  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      element.classList.add("visible");
    }
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const educationItems = document.querySelectorAll(".education-item");
  let lastScrollY = window.scrollY;

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.1;
    const currentScrollY = window.scrollY;

    educationItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("show");
        if (currentScrollY > lastScrollY) {
          
          item.classList.add(index % 2 === 0 ? "slide-up" : "slide-up");
          item.classList.remove(index % 2 === 0 ? "slide-down" : "slide-down");
        } else {
        
          item.classList.add(index % 2 === 0 ? "slide-down" : "slide-down");
          item.classList.remove(index % 2 === 0 ? "slide-up" : "slide-up");
        }
      } else {
        item.classList.remove("show", "slide-up", "slide-down");
      }
    });

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
});







document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");
  let lastScrollY = window.scrollY;

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 1.1;
    const currentScrollY = window.scrollY;

    projectCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");

        if (currentScrollY > lastScrollY) {
        
          card.classList.add(index % 2 === 0 ? "slide-up" : "slide-up");
          card.classList.remove(index % 2 === 0 ? "slide-down" : "slide-down");
        } else {
          
          card.classList.add(index % 2 === 0 ? "slide-up" : "slide-down");
          card.classList.remove(index % 2 === 0 ? "slide-up" : "slide-up");
        }
      } else {
        card.classList.remove("show", "slide-up", "slide-down");
      }
    });

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
});






  document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll(".about-section, .section-heading, .about-container, .profile-pic2, .about-content, .contact-btn");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scroll-visible");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scroll-visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener("scroll", () => {
      handleScrollAnimation();
    });
  });







document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, entry.target.dataset || 0);  
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const sections = document.querySelectorAll('.skills-section, .skills-section h2, .skill-category, .skill-box');
  sections.forEach((section, index) => {
    section.dataset.delay = index * 100;  
    observer.observe(section);
  });
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

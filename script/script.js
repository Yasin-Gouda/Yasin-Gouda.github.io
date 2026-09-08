
const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");


// =========================
// MOBILE MENU
// =========================

const mobileMenu = document.createElement("div");

mobileMenu.classList.add("mobile-menu");

mobileMenu.innerHTML = `
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
`;

navbar.appendChild(mobileMenu);


menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.background = "rgba(8, 9, 11, 0.92)";
    } else {
        navbar.style.background = "rgba(8, 9, 11, 0.75)";
    }

});


// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .timeline-item, .skill-card, .projects-empty, .education-card, .contact-content"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


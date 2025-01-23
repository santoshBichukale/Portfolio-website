// Toggle the mobile menu visibility when clicking the hamburger menu
document.getElementById('hamburger-menu').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "slideUp 0.8s ease-out forwards";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    cards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", () => {
    const skillCategories = document.querySelectorAll(".skill-category");
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = "fadeInUp 0.8s ease forwards";
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    skillCategories.forEach((category) => observer.observe(category));
    cards.forEach((card) => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                    observer.unobserve(entry.target); 
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    animatedElements.forEach((element) => observer.observe(element));
});


    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    // Add animation class when the element is in the viewport
    function handleScrollAnimation() {
        const aboutSection = document.querySelector('#about');
        if (isInViewport(aboutSection)) {
            aboutSection.classList.add('animate-visible');
        }
    }

    // Event listener for scrolling
    document.addEventListener('scroll', handleScrollAnimation);

    // Initial check on page load
    document.addEventListener('DOMContentLoaded', handleScrollAnimation);

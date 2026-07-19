/*=========================================
  Gulaz Business Centre
  script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       Sticky Header
    =========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

        } else {

            header.style.background = "#ffffff";
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

        }

    });

    /* ===========================
       Back To Top Button
    =========================== */

    
    /* ===========================
       Active Navigation
    =========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /* ===========================
       Smooth Scrolling
    =========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ===========================
       Contact Form
    =========================== */

    const form = document.querySelector(".contact-form form");

    if (form && form.id !== "contactForm") {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you for contacting Gulaz Business Centre.\n\nYour message has been received."
            );

            form.reset();

        });

    }

    /* ===========================
       Homepage Video Interaction
    =========================== */

    const aboutVideo = document.getElementById("about-video");

    if (aboutVideo) {

        aboutVideo.addEventListener("mouseenter", () => {

            aboutVideo.play().catch(() => {});

        });

        aboutVideo.addEventListener("mouseleave", () => {

            aboutVideo.pause();

        });

    }

    /* ===========================
       Gallery Animation
    =========================== */

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.08)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });

    /* ===========================
       Fade In Animation
    =========================== */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll(

        ".feature, .service-card, .testimonial-card, .about-grid, .gallery-grid img"

    ).forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = ".8s";

        observer.observe(el);

    });

});

/*=========================================
  End of script.js
=========================================*/

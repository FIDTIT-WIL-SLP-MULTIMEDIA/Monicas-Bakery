document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetClass = this.getAttribute("href").substring(1);
            const targetElements = document.getElementsByClassName(targetClass);

            if (targetElements.length > 0) {
                targetElements[0].scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Form Submission using Formspree
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch("https://formspree.io/f/xeojkkyw", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert("Failed to send message. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        });
    });

    // Toggle Menu (Hamburger Icon)
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    }

    const hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.addEventListener("click", toggleMenu);
});

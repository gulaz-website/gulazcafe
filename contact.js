document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name")?.value.trim() || "Not provided";
        const email = document.getElementById("email")?.value.trim() || "Not provided";
        const phone = document.getElementById("phone")?.value.trim() || "Not provided";
        const message = document.getElementById("message")?.value.trim() || "No message provided";
        const subject = document.querySelector('input[name="subject"]')?.value.trim() || "No subject";

        const whatsappNumber = "+260978880446";

        const text = `Hello, I have a new message from your website.

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank");
        form.reset();
    });

});

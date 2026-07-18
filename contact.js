
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "260766778814";

        const text =
`Hello, I have a new message from my website.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

        const url = `https://wa.me/260766778814?text=${encodeURIComponent(text)}`;

        window.open(url,
                    "_blank");
    });

});

// Floating WhatsApp Button
document.addEventListener("DOMContentLoaded", () => {
    const whatsappButton = document.createElement("div");
    whatsappButton.innerHTML = `
        <a href="https://wa.me/8801983000739" target="_blank" class="floating-whatsapp">
            <img src="images/whatsapp-icon.png" alt="WhatsApp">
        </a>`;
    whatsappButton.style.position = "fixed";
    whatsappButton.style.bottom = "20px";
    whatsappButton.style.right = "20px";
    whatsappButton.style.zIndex = "1000";
    document.body.appendChild(whatsappButton);
});

// Smooth Scroll for Navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

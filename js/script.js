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


<!-- JavaScript to Generate WhatsApp Link -->

 document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const serviceName = this.getAttribute('data-service');
      const serviceImg = this.getAttribute('data-img');
      const whatsappLink = `https://wa.me/8801983000739?text=I%20am%20interested%20in%20${encodeURIComponent(serviceName)}.%20Here%20is%20the%20image:%20${encodeURIComponent(serviceImg)}`;
      window.open(whatsappLink, '_blank');
    });
  });

document.getElementById('get-started-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex'; // Show the pop-up
});

document.getElementById('popup-close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none'; // Hide the pop-up
});

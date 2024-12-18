// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5JTd88XMPaw8ThV8i4wh8r37uhSuuKiQ",
    authDomain: "trendify-30126.firebaseapp.com",
    databaseURL: "https://trendify-30126-default-rtdb.firebaseio.com",
    projectId: "trendify-30126",
    storageBucket: "trendify-30126.firebasestorage.app",
    messagingSenderId: "816600328899",
    appId: "1:816600328899:web:4b01799c1e82e932451076",
    measurementId: "G-9QV2QDB3CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Elements
const getStartedBtn = document.getElementById("getStartedBtn");
const popup = document.getElementById("popup");
const popupCloseBtn = document.getElementById("popup-close");
const userForm = document.getElementById("userForm");

// Show Popup
getStartedBtn.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close Popup
popupCloseBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// Form Submission
userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const whatsapp = document.getElementById("whatsapp").checked;
    const imo = document.getElementById("imo").checked;
    const phoneCall = document.getElementById("phoneCall").checked;

    // Create Data Object
    const data = {
        name: name,
        phone: phone,
        preferences: {
            whatsapp: whatsapp,
            imo: imo,
            phoneCall: phoneCall,
        },
    };

    // Store Data in Firebase
    const userId = Date.now(); // Unique ID
    set(ref(db, "users/" + userId), data)
        .then(() => {
            alert("Data stored successfully!");
            userForm.reset();
            popup.style.display = "none";
        })
        .catch((error) => {
            console.error("Error storing data: ", error);
        });
});




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

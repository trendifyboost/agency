// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

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

// Popup Modal Elements
const modal = document.getElementById("popup-modal");
const getStartedButton = document.getElementById("get-started-button");
const closeButton = document.querySelector(".close-button");

// Show Modal
getStartedButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close Modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Add Customer Lead Functionality
document.getElementById("submit-lead-button").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phoneNumber = document.getElementById("phone-number").value.trim();
  const contactMethod = document.getElementById("contact-method").value;

  if (!name || !phoneNumber || !contactMethod) {
    alert("Please fill in all customer lead details correctly.");
    return;
  }

  const db = getDatabase();
  const customerLeadsRef = ref(db, "customerLeads");
  const newLeadRef = push(customerLeadsRef); // Create a new unique reference

  set(newLeadRef, {
    name,
    phoneNumber,
    contactMethod,
    createdAt: new Date().toISOString()
  })
  .then(() => {
    alert("Customer lead added successfully!");
    modal.style.display = "none";
  })
  .catch(error => console.error("Error adding customer lead:", error));
});

// Close Modal if clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

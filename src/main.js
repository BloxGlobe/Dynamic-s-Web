// src/main.js

// Import core modules
import "./core-modules/auth-module/auth.js";
import "./router.js";

// Optional: Initialize any app-level logic here
function initApp() {
    console.log("App initialized.");

    // Example: check auth status
    if (window.auth && typeof window.auth.init === "function") {
        window.auth.init();
    }

    // You can add more initialization logic here
}

document.addEventListener("DOMContentLoaded", initApp);

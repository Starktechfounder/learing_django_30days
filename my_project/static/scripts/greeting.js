/**
 * greeting.js - Displays a dynamic time-based greeting popup
 */

document.addEventListener('DOMContentLoaded', function() {
    showGreetingPopup();
});

function showGreetingPopup() {
    const currentHour = new Date().getHours();
    let timeGreeting = '';

    if (currentHour < 12) {
        timeGreeting = 'Good Morning';
    } else if (currentHour < 17) {
        timeGreeting = 'Good Afternoon';
    } else {
        timeGreeting = 'Good Evening';
    }

    // Create modal/popup overlay container
    const overlay = document.createElement('div');
    overlay.className = 'greeting-overlay';

    // Style the overlay for a clean centered popup
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease-out;
    `;

    // Create the popup card
    const popup = document.createElement('div');
    popup.style.cssText = `
        background: #ffffff;
        padding: 2rem 2.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        text-align: center;
        max-width: 400px;
        width: 90%;
        font-family: Arial, sans-serif;
    `;

    popup.innerHTML = `
        <h2 style="margin-top: 0; color: #2874f0; font-size: 1.5rem;">${timeGreeting}!</h2>
        <p style="color: #333; font-size: 1rem; margin-bottom: 1.5rem;">Welcome to Flipkart. Have a wonderful shopping experience!</p>
        <button id="close-greeting-btn" style="
            background-color: #2874f0;
            color: white;
            border: none;
            padding: 0.6rem 1.5rem;
            font-size: 0.95rem;
            font-weight: bold;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.2s;
        ">Continue</button>
    `;

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Close popup handler
    const closeBtn = popup.querySelector('#close-greeting-btn');
    closeBtn.addEventListener('click', function() {
        overlay.remove();
    });

    // Close when clicking outside the popup box
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

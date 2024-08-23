// scripts/main.js

import { sendToWhatsApp } from './whatsappModule.js';

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // WhatsApp number (replace with your number in international format)
    const whatsappNumber = '1234567890';

    // Feedback elements
    const feedbackMessage = document.getElementById('feedbackMessage');

    // Clear any previous feedback
    feedbackMessage.textContent = '';
    feedbackMessage.classList.remove('success', 'error');

    // Call the module function
    sendToWhatsApp({
        name,
        email,
        message,
        whatsappNumber,
        onSuccess: (message) => {
            feedbackMessage.textContent = message;
            feedbackMessage.classList.add('success');
        },
        onError: (message) => {
            feedbackMessage.textContent = message;
            feedbackMessage.classList.add('error');
        }
    });
});

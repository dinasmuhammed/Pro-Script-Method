// scripts/whatsappModule.js

/**
 * Sends a message to WhatsApp with the provided data.
 * @param {Object} params - The parameters for sending the WhatsApp message.
 * @param {string} params.name - The name of the person.
 * @param {string} params.email - The email address of the person.
 * @param {string} params.message - The message content.
 * @param {string} params.whatsappNumber - The recipient's WhatsApp number in international format.
 * @param {Function} params.onSuccess - Callback function to execute on success.
 * @param {Function} params.onError - Callback function to execute on error.
 */
export function sendToWhatsApp({ name, email, message, whatsappNumber, onSuccess, onError }) {
    // Basic validation
    if (!name || !email || !message || !whatsappNumber) {
        onError('Please fill in all the required fields.');
        return;
    }

    // Create WhatsApp message
    const whatsappMessage = `
        🖋️ *New Inquiry* 🖋️
        👤 *Name*: ${name}
        📧 *Email*: ${email}
        💬 *Message*: ${message}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    try {
        // Redirect to WhatsApp
        window.open(whatsappLink, '_blank');
        onSuccess('Your message has been sent successfully! You will be redirected to WhatsApp.');
    } catch (error) {
        onError('There was an error sending your message. Please try again.');
    }
}

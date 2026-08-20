// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Initialize EmailJS with your Public Key
    emailjs.init("OO7H4lKvKEjpObZP1"); // 🔑 Tuza Public Key

    const contactForm = document.getElementById("contactForm");
    const responseMsg = document.getElementById("responseMsg");
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerText;

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // --- 1. Show loading state ---
        submitButton.disabled = true;
        submitButton.innerText = "Sending...";

        // Map form fields to template variables
        const templateParams = {
            name: contactForm.querySelector('[name="from_name"]').value,
            email: contactForm.querySelector('[name="user_email"]').value,
            message: contactForm.querySelector('[name="message"]').value
        };

        emailjs.send("service_hpz32rr", "template_0bali93", templateParams)
            .then(() => {
                // --- 2. Show success message ---
                responseMsg.innerText = "✅ Message sent successfully!";
                responseMsg.style.color = "lightgreen";
                contactForm.reset();

                // --- 3. Clear message after 5 seconds ---
                setTimeout(() => {
                    responseMsg.innerText = "";
                }, 5000);

            }, (error) => {
                // --- 2. Show error message ---
                responseMsg.innerText = "❌ Failed to send message. Please try again.";
                responseMsg.style.color = "red";
                console.error("FAILED...", error);

                // --- 3. Clear message after 5 seconds ---
                setTimeout(() => {
                    responseMsg.innerText = "";
                }, 5000);
            })
            .finally(() => {
                // --- 4. Reset button state after success or error ---
                submitButton.disabled = false;
                submitButton.innerText = originalButtonText;
            });
    });
});
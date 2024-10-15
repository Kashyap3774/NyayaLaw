document.addEventListener('DOMContentLoaded', function () {
    // Enable Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Handle form submit with loading state and email functionality
    const form = document.getElementById('consultation-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (name && email && phone && message) {
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading-text">Sending...</span>'; // Add "Sending..." text

            // Simulate loading for better UX
            setTimeout(() => {
                // Build the mailto URL
                const mailtoLink = `mailto:NyayaLaw.office@gmail.com?subject=Consultation Request from ${name}&body=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
                
                // Open the email client
                window.location.href = mailtoLink;

                // Reset the button after sending
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send via Email'; // Restore original text
                form.reset();
            }, 1500);
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Handle WhatsApp button click with confirmation
    const whatsappBtn = document.getElementById('whatsapp-btn');
    whatsappBtn.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (name && phone && message) {
            whatsappBtn.classList.add('loading');
            whatsappBtn.disabled = true;
            whatsappBtn.innerHTML = '<span class="loading-text">Sending...</span>';

            setTimeout(() => {
                window.open(`https://api.whatsapp.com/send?phone=919801922379&text=Consultation Request from: ${name}%0APhone: ${phone}%0AMessage: ${message}`, '_blank');
                whatsappBtn.classList.remove('loading');
                whatsappBtn.disabled = false;
                whatsappBtn.innerHTML = 'Send via WhatsApp';
            }, 1500);
        } else {
            alert('Please fill out all fields.');
        }
    });
});

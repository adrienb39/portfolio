// Remplacez 'YOUR_USER_ID' par votre ID utilisateur EmailJS
import emailjs from "../assets/vendor/aos/aos.cjs";

emailjs.init('ZuadaIoeeM_l1ednJ');

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi par défaut du formulaire

    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    emailjs.send('service_8cio9eg', 'template_bg7vabx', data)
        .then(function(response) {
            document.getElementById('responseMessage').innerText = 'Email envoyé avec succès !';
        }, function(error) {
            document.getElementById('responseMessage').innerText = 'Erreur : ' + JSON.stringify(error);
        });
});

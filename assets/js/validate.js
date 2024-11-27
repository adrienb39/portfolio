/**
 * EmailJS Form Submission
 */

<script src="https://cdn.emailjs.com/dist/email.min.js"></script>

(function () {
  "use strict";

  emailjs.init('ZuadaIoeeM_l1ednJ'); // Remplacez par votre ID utilisateur EmailJS

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let thisForm = this;

      // Suppression de l'attribut action
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData(thisForm);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      };

      // Envoi de l'email via EmailJS
      emailjs.send('service_meqxl4u', 'template_bg7vabx', data)
        .then(function (response) {
          console.log('Email envoyé avec succès!', response);
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
          thisForm.reset(); // Réinitialiser le formulaire
        }, function (error) {
          console.error('Erreur lors de l\'envoi de l\'email:', error);
          displayError(thisForm, 'Une erreur s\'est produite. Veuillez réessayer.');
        });
    });
  });

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
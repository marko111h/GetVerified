(function () {
  emailjs.init('LG19GVyhpAdiH_vJI'); // ← zameni sa svojim EmailJS javnim ključem
})();

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_ccaoal9', 'template_nzqsu9c', this).then(
      function () {
        alert('Message sent successfully!');
      },
      function (error) {
        alert('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      }
    );
  });

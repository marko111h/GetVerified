(function () {
  emailjs.init('LG19GVyhpAdiH_vJI');
})();

function showFormStatus(message, type) {
  const status = document.getElementById('form-status');
  status.textContent = message;
  status.className = 'form-status show ' + type;

  setTimeout(function () {
    status.classList.remove('show');
  }, 5000);
}

document
  .getElementById('contact-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const form = this;
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = 'Sending...';

    emailjs.sendForm('service_ccaoal9', 'template_nzqsu9c', form).then(
      function () {
        showFormStatus('Message sent successfully!', 'success');
        form.reset();
        btn.disabled = false;
        btn.textContent = originalText;
      },
      function (error) {
        showFormStatus('Failed to send message. Please try again.', 'error');
        console.error('EmailJS error:', error);
        btn.disabled = false;
        btn.textContent = originalText;
      }
    );
  });

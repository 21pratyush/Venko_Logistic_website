document.addEventListener('DOMContentLoaded', function () {
 
  const contactForm = document.getElementById('contactForm');

  // Event listener for form submission
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      option: contactForm.querySelector('select').value,
      name: contactForm.querySelector('input[placeholder="Name"]').value,
      surname: contactForm.querySelector('input[placeholder="Surname"]').value,
      email: contactForm.querySelector('input[placeholder="Email"]').value,
      phone: contactForm.querySelector('input[placeholder="Phone"]').value,
      message: contactForm.querySelector('textarea').value,
      termsAgreed: contactForm.querySelector('#terms').checked,
    };

    console.log(formData);

    let storedData = JSON.parse(localStorage.getItem('formData')) || [];

    if (!Array.isArray(storedData)) {
        storedData = [];
    }

    storedData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedData));
  });
});

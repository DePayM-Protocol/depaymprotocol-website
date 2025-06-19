// de-paym-website/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for contacting De-PayM! We will get back to you soon.");
      contactForm.reset();
    });
  }
});

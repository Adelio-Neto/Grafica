document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.querySelector(".scroll-whatsapp");

  function toggleWhatsappButton() {
    if (window.scrollY > 100) {
      whatsappBtn.classList.add("active");
    } else {
      whatsappBtn.classList.remove("active");
    }
  }

  window.addEventListener("scroll", toggleWhatsappButton);
  toggleWhatsappButton();
});

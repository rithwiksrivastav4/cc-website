/* ================= MOBILE MENU TOGGLE ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link (mobile UX)
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

/* ================= WHATSAPP LEAD FORM ================= */

const quoteForm = document.getElementById("quoteForm");

if (quoteForm) {
  quoteForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const requirement = document.getElementById("message").value.trim();

    if (!name || !phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const whatsappNumber = "918978059058"; // your WhatsApp number

    const whatsappMessage =
      `📩 *New CCTV Enquiry*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Mobile: ${phone}%0A` +
      `📧 Email: ${email || "Not provided"}%0A` +
      `📝 Requirement: ${requirement || "Not specified"}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Open WhatsApp (mobile app or web)
    window.open(whatsappURL, "_blank");

    // Optional: reset form
    quoteForm.reset();
  });
}

/* ================= SMOOTH SCROLL FOR MENU ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

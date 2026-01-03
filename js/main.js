/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* ================= WHATSAPP FORM ================= */

const form = document.getElementById("quoteForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const whatsappNumber = "918978059058";

    const text =
      `*New CCTV Enquiry*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `📧 Email: ${email || "Not provided"}%0A` +
      `📝 Requirement: ${message || "Not specified"}`;

    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, "_blank");

    form.reset();
  });
}

/* ================= MOBILE MENU ================= */
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


/* ================= WHATSAPP FORM SUBMIT ================= */
const form = document.getElementById("quoteForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const whatsappNumber = "918978059058";

    const whatsappMessage =
      `*New CCTV Enquiry*%0A%0A` +
      `👤 Name: ${name}%0A` +
      `📞 Phone: ${phone}%0A` +
      `📧 Email: ${email || "Not provided"}%0A` +
      `📝 Requirement: ${message || "Not specified"}`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Opens WhatsApp (Web / App depending on device)
    window.open(whatsappURL, "_blank");

    // Reset form
    form.reset();
  });
}


/* ================= GET QUOTE → PHONE CALL ================= */
document.querySelectorAll(".quote-btn a, .hero-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (btn.getAttribute("href") === "#contact") return;
    e.preventDefault();
    window.location.href = "tel:+918978059058";
  });
});


/* ================= DARK / LIGHT MODE ================= */
const themeSwitch = document.getElementById("themeSwitch");

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  if (themeSwitch) themeSwitch.checked = true;
}

if (themeSwitch) {
  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });
}


/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* ================= PAGE LOAD FADE ================= */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

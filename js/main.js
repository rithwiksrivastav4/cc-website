/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* ================= THEME SYSTEM ================= */

const themeSwitch = document.getElementById("themeSwitch");

/* Apply theme */
function applyTheme(theme) {
  document.body.classList.toggle("light-mode", theme === "light");
  localStorage.setItem("theme", theme);
}

/* Detect system preference */
function detectSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
}

/* Load theme on page load */
let savedTheme = localStorage.getItem("theme") || detectSystemTheme();
applyTheme(savedTheme);

if (themeSwitch) {
  themeSwitch.checked = savedTheme === "light";

  themeSwitch.addEventListener("change", () => {
    const theme = themeSwitch.checked ? "light" : "dark";
    applyTheme(theme);
  });
}

/* Sync theme across tabs */
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    applyTheme(e.newValue);
    if (themeSwitch) {
      themeSwitch.checked = e.newValue === "light";
    }
  }
});

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
      `New CCTV Enquiry\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email || "Not provided"}\n` +
      `Requirement: ${message || "Not specified"}`;

    const url =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(text);

    window.open(url, "_blank");

    form.reset();
  });
}

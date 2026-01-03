document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const requirements = document.getElementById("requirements").value.trim();

  if (!name || !phone) {
    alert("Please enter Name and Mobile Number");
    return;
  }

  const message = `
New CCTV Quote Request

Name: ${name}
Mobile: ${phone}
Email: ${email}
Requirements: ${requirements}
`;

  const whatsappNumber = "918978059058";
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Show success popup
  document.getElementById("successPopup").style.display = "flex";

  // Open WhatsApp after short delay
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 800);

  document.getElementById("quoteForm").reset();
});

function closeSuccess() {
  document.getElementById("successPopup").style.display = "none";
}

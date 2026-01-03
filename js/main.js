document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("quoteForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const requirements = document.getElementById("requirements").value.trim();

    if (!name || !phone) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const message =
`New CCTV Quote Request

Name: ${name}
Mobile: ${phone}
Email: ${email}
Requirements: ${requirements}`;

    const whatsappNumber = "918978059058";
    const whatsappURL =
      "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    form.reset();
  });

});

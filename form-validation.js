document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simple email pattern for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});

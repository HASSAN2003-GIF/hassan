
function greetUser() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  if (hour < 12) greeting.textContent = "Good Morning!";
  else if (hour < 18) greeting.textContent = "Good Afternoon!";
  else greeting.textContent = "Good Evening!";
}

function toggleTheme() {
  const body = document.body;
  if (body.style.backgroundColor === "rgb(0, 51, 102)") {
    body.style.backgroundColor = "#e6f2ff";
    body.style.color = "#003366";
  } else {
    body.style.backgroundColor = "#003366";
    body.style.color = "#e6f2ff";
  }
}

// Form validation feedback
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
      if (!/^[^@]+@[^@]+\.[a-z]{2,}$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      alert("Thank you for your message, " + name + "!");
      form.reset();
    });
  }
});

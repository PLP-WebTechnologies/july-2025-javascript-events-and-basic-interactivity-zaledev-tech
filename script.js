// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // Part 1: Event Handling
  // ================================
  const messageBtn = document.getElementById("messageBtn");
  const message = document.getElementById("message");
  messageBtn.addEventListener("click", () => {
    message.textContent = "🎉 Button was clicked!";
  });

  // Dark Mode Toggle
  const modeToggle = document.getElementById("modeToggle");
  modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // ================================
  // Part 2: Interactive Elements
  // ================================
  let count = 0;
  const countDisplay = document.getElementById("count");
  document.getElementById("increase").addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
  });
  document.getElementById("decrease").addEventListener("click", () => {
    count--;
    countDisplay.textContent = count;
  });
  document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
  });

  // Collapsible FAQ
  const faq = document.querySelector(".faq");
  const faqQuestion = document.querySelector(".faq-question");
  faqQuestion.addEventListener("click", () => {
    faq.classList.toggle("open");
  });

  // Dropdown Menu
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  dropbtn.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdown.classList.remove("show");
    }
  });

  // Tabs
  const tabLinks = document.querySelectorAll(".tablink");
  const tabContents = document.querySelectorAll(".tab-content");
  tabLinks.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabLinks.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
  tabLinks[0].classList.add("active");
  tabContents[0].classList.add("active");

  // ================================
  // Part 3: Form Validation
  // ================================
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Name
    const name = document.getElementById("name").value.trim();
    if (name.length < 2) {
      document.getElementById("nameError").textContent =
        "Name must be at least 2 characters.";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Email
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent =
        "Please enter a valid email.";
      valid = false;
    } else {
      document.getElementById("emailError").textContent = "";
    }

    // Password
    const password = document.getElementById("password").value;
    if (password.length < 6) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 6 characters.";
      valid = false;
    } else {
      document.getElementById("passwordError").textContent = "";
    }

    // Success
    if (valid) {
      document.getElementById("formSuccess").textContent =
        "✅ Form submitted successfully!";
    } else {
      document.getElementById("formSuccess").textContent = "";
    }
  });
});

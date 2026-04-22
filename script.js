// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Hire Me button
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks! Abdur Rahman will contact you soon 😊");
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

// Form submit
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully 🚀");
  this.reset();
});

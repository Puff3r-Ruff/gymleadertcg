
// ABOUT SECTION TOGGLE
document.getElementById("about-btn").onclick = function () {
  const extra = document.getElementById("extra-text");
  if (extra.style.display === "none") {
    extra.style.display = "block";
    setTimeout(() => extra.style.opacity = "1", 10);
    this.textContent = "Show Less";
  } else {
    extra.style.opacity = "0";
    setTimeout(() => extra.style.display = "none", 500);
    this.textContent = "Learn More";
  }
};

// INSTAGRAM STYLE SLIDER
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider-btn.left");
const btnRight = document.querySelector(".slider-btn.right");

btnLeft.addEventListener("click", () => {
  slider.scrollBy({ left: -350, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  slider.scrollBy({ left: 350, behavior: "smooth" });
});

// Drag to scroll
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => (isDown = false));
slider.addEventListener("mouseup", () => (isDown = false));

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// NEWSLETTER SUCCESS MESSAGE
function newsletterSuccess() {
  const email = document.getElementById("newsletter-email").value;
  if (email.trim() === "") return;

  document.getElementById("newsletter-success").style.display = "block";
  document.getElementById("newsletter-email").value = "";
}


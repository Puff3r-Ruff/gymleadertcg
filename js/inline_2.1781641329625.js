
document.querySelector(".hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

// Load pages dynamically
fetch("pages/pages.json")
  .then(res => res.json())
  .then(pages => {
    const menu = document.getElementById("mobileMenu");
    const navRight = document.getElementById("navRight");

    const pageKeys = Object.keys(pages);

    // If no pages exist → hide nav-right
    if (pageKeys.length === 0) {
      navRight.style.display = "none";
      return;
    }

    // Build menu items
    pageKeys.forEach(name => {
      const link = document.createElement("a");
      link.href = pages[name];
      link.textContent = name;
      menu.appendChild(link);
    });
  })
  .catch(err => {
    console.error("Could not load pages:", err);
    document.getElementById("navRight").style.display = "none";
  });

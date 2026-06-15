
let heroIndex = 0;
let contentIndex = 0;
let galleryIndex = 0;
let footerIndex = 0;

/* ⭐ stores user‑edited image sources */
let savedImages = {};

function saveUserImages() {
  document.querySelectorAll(".editable-image").forEach((img, i) => {
    savedImages[i] = img.src;
  });
}

function restoreUserImages() {
  document.querySelectorAll(".editable-image").forEach((img, i) => {
    if (savedImages[i]) img.src = savedImages[i];
  });
}

const industrySelect = document.getElementById("industrySelect");

Object.keys(industries).forEach(key => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = key.replace("_", " ").toUpperCase();
  industrySelect.appendChild(opt);
});

function inject(content, data) {
  return content.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || "");
}

// ===============================================
// SECTION RENDERERS
// ===============================================

function renderHero() {
  const industry = industries[industrySelect.value];
  const hero = inject(skeletons.heroes[heroIndex].html, industry);

  document.getElementById("heroSection").innerHTML = `
    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevHero()" id="Remove">&#10094;</div>
      ${hero}
      <div class="arrow-right" onclick="nextHero()" id="Remove">&#10095;</div>
    </div>
  `;

  initCarousels();
}

function renderContent() {
  const industry = industries[industrySelect.value];
  const content = inject(skeletons.content_blocks[contentIndex].html, industry);

  document.getElementById("contentSection").innerHTML = `
    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevContent()" id="Remove">&#10094;</div>
      ${content}
      <div class="arrow-right" onclick="nextContent()" id="Remove">&#10095;</div>
    </div>
  `;

  initCarousels();
}

function renderGallery() {
  const industry = industries[industrySelect.value];
  const gallery = inject(skeletons.galleries[galleryIndex].html, industry);

  document.getElementById("gallerySection").innerHTML = `
    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevGallery()" id="Remove">&#10094;</div>
      ${gallery}
      <div class="arrow-right" onclick="nextGallery()" id="Remove">&#10095;</div>
    </div>
  `;

  initCarousels();
}

function renderFooter() {
  const industry = industries[industrySelect.value];
  const footer = inject(skeletons.footers[footerIndex].html, industry);

  document.getElementById("footerSection").innerHTML = `
    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevFooter()" id="Remove">&#10094;</div>
      ${footer}
      <div class="arrow-right" onclick="nextFooter()" id="Remove">&#10095;</div>
    </div>
  `;

  initCarousels();
}

// ===============================================
// INITIAL RENDER
// ===============================================

function generateAll() {
  renderHero();
  renderContent();
  renderGallery();
  renderFooter();
  restoreUserImages();
}

generateAll();

// ===============================================
// NAVIGATION — PARTIAL UPDATES
// ===============================================

function nextHero() {
  saveUserImages();
  heroIndex = (heroIndex + 1) % skeletons.heroes.length;
  renderHero();
  restoreUserImages();
  UpdateEditor();
}

function prevHero() {
  saveUserImages();
  heroIndex = (heroIndex - 1 + skeletons.heroes.length) % skeletons.heroes.length;
  renderHero();
  restoreUserImages();
  UpdateEditor();
}

function nextContent() {
  saveUserImages();
  contentIndex = (contentIndex + 1) % skeletons.content_blocks.length;
  renderContent();
  restoreUserImages();
  UpdateEditor();
}

function prevContent() {
  saveUserImages();
  contentIndex = (contentIndex - 1 + skeletons.content_blocks.length) % skeletons.content_blocks.length;
  renderContent();
  restoreUserImages();
  UpdateEditor();
}

function nextGallery() {
  saveUserImages();
  galleryIndex = (galleryIndex + 1) % skeletons.galleries.length;
  renderGallery();
  restoreUserImages();
  UpdateEditor();
}

function prevGallery() {
  saveUserImages();
  galleryIndex = (galleryIndex - 1 + skeletons.galleries.length) % skeletons.galleries.length;
  renderGallery();
  restoreUserImages();
  UpdateEditor();
}

function nextFooter() {
  saveUserImages();
  footerIndex = (footerIndex + 1) % skeletons.footers.length;
  renderFooter();
  restoreUserImages();
  UpdateEditor();
}

function prevFooter() {
  saveUserImages();
  footerIndex = (footerIndex - 1 + skeletons.footers.length) % skeletons.footers.length;
  renderFooter();
  restoreUserImages();
  UpdateEditor();
}

// ===============================================
// INDUSTRY CHANGE — UPDATE ALL SECTIONS
// ===============================================

industrySelect.onchange = () => {
  saveUserImages();
  generateAll();
  UpdateEditor();
};

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(carousel => {
    const track = carousel.querySelector(".carousel-track");
    const slides = track.children;
    const left = carousel.querySelector("[data-left]");
    const right = carousel.querySelector("[data-right]");

    let index = 0;

    function move(dir) {
      index = (index + dir + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    left.onclick = () => move(-1);
    right.onclick = () => move(1);

    let startX = 0;
    track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
    track.addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) move(1);
      if (endX > startX + 50) move(-1);
    });
  });
}

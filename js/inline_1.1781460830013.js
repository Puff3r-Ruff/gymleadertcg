
  
let heroIndex = 0;
let contentIndex = 0;
let galleryIndex = 0;
let footerIndex = 0;

const industrySelect = document.getElementById("industrySelect");

Object.keys(industries).forEach(key => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = key.replace("_", " ").toUpperCase();
  industrySelect.appendChild(opt);
});
// ⭐ Auto‑generate when user picks an industry
industrySelect.onchange = () => {
  generate();
  UpdateEditor();
};
  
function inject(content, data) {
  return content.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || "");
}

function generate() {
  const industry = industries[industrySelect.value];

  const hero = inject(skeletons.heroes[heroIndex].html, industry);
  const content = inject(skeletons.content_blocks[contentIndex].html, industry);
  const gallery = inject(skeletons.galleries[galleryIndex].html, industry);
  const footer = inject(skeletons.footers[footerIndex].html, industry);

  preview.innerHTML = `
    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevHero()" id="Remove">&#10094;</div>
      ${hero}
      <div class="arrow-right" onclick="nextHero()" id="Remove">&#10095;</div>
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevContent()" id="Remove">&#10094;</div>
      ${content}
      <div class="arrow-right" onclick="nextContent()" id="Remove">&#10095;</div>
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevGallery()" id="Remove">&#10094;</div>
      ${gallery}
      <div class="arrow-right" onclick="nextGallery()" id="Remove">&#10095;</div>
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      <div class="arrow-left" onclick="prevFooter()" id="Remove">&#10094;</div>
      ${footer}
      <div class="arrow-right" onclick="nextFooter()" id="Remove">&#10095;</div>
    </div>
  `;

  initCarousels();   // ⭐ REQUIRED ⭐
}

function nextHero() { heroIndex = (heroIndex + 1) % skeletons.heroes.length; generate(); UpdateEditor();}
function prevHero() { heroIndex = (heroIndex - 1 + skeletons.heroes.length) % skeletons.heroes.length; generate(); UpdateEditor();}

function nextContent() { contentIndex = (contentIndex + 1) % skeletons.content_blocks.length; generate(); UpdateEditor();}
function prevContent() { contentIndex = (contentIndex - 1 + skeletons.content_blocks.length) % skeletons.content_blocks.length; generate(); UpdateEditor();}

function nextGallery() { galleryIndex = (galleryIndex + 1) % skeletons.galleries.length; generate(); UpdateEditor();}
function prevGallery() { galleryIndex = (galleryIndex - 1 + skeletons.galleries.length) % skeletons.galleries.length; generate(); UpdateEditor();}

function nextFooter() { footerIndex = (footerIndex + 1) % skeletons.footers.length; generate(); UpdateEditor();}
function prevFooter() { footerIndex = (footerIndex - 1 + skeletons.footers.length) % skeletons.footers.length; generate(); UpdateEditor();}

generate();

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

        // Mobile swipe
        let startX = 0;
        track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
        track.addEventListener("touchend", e => {
            let endX = e.changedTouches[0].clientX;
            if (endX < startX - 50) move(1);
            if (endX > startX + 50) move(-1);
        });
    });
}



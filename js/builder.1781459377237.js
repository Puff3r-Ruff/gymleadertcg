// ===============================================
// DOWNLOAD HELPER
// ===============================================
function downloadFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  URL.revokeObjectURL(url);
}

// ===============================================
// A. SAVE CURRENT LAYOUT → JSON + BUILD HTML
// ===============================================
function exportLayout() {
  const data = {
    industryKey: industrySelect.value,
    heroIndex,
    contentIndex,
    galleryIndex,
    footerIndex
  };

  const industry = industries[data.industryKey];
  const hero = inject(skeletons.heroes[data.heroIndex].html, industry);
  const content = inject(skeletons.content_blocks[data.contentIndex].html, industry);
  const gallery = inject(skeletons.galleries[data.galleryIndex].html, industry);
  const footer = inject(skeletons.footers[data.footerIndex].html, industry);

  const html = `
  <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      ${hero}
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      ${content}
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      ${gallery}
    </div>

    <div class="section-wrapper" style="position: relative;margin-bottom: 40px;overflow: visible;">
      ${footer}
    </div>
  `;

  return {
    json: JSON.stringify(data, null, 2),
    html
  };
}

// ===============================================
// B. LOAD JSON → RESTORE UI + REBUILD PREVIEW
// ===============================================
function loadLayout(jsonString) {
  const data = JSON.parse(jsonString);

  industrySelect.value = data.industryKey;

  heroIndex = data.heroIndex;
  contentIndex = data.contentIndex;
  galleryIndex = data.galleryIndex;
  footerIndex = data.footerIndex;

  generate();
}

// ===============================================
// C. BUILD FULL HTML FROM JSON (NO UI)
// ===============================================
function buildFromJson(jsonString) {
  const data = JSON.parse(jsonString);
  const industry = industries[data.industryKey];

  return `
${inject(skeletons.heroes[data.heroIndex].html, industry)}
${inject(skeletons.content_blocks[data.contentIndex].html, industry)}
${inject(skeletons.galleries[data.galleryIndex].html, industry)}
${inject(skeletons.footers[data.footerIndex].html, industry)}
  `;
}

// ===============================================
// BUTTON ACTIONS
// ===============================================
function testExport() {
  const result = exportLayout();
  downloadFile("layout.json", result.json);
  alert("Layout exported as layout.json");
}

function testLoad() {
  const json = prompt("Paste layout JSON:");
  if (!json) return;
  loadLayout(json);
  alert("Layout loaded.");
}

function testBuild() {
  const json = prompt("Paste layout JSON:");
  if (!json) return;
  const html = buildFromJson(json);
  console.log("Built HTML:", html);
  alert("HTML built — check console.");
}

function downloadHTML() {
  const result = exportLayout();

  const fullHTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Exported Website</title>
</head>
<body>
${result.html}
</body>
</html>
  `.trim();

  downloadFile("website.html", fullHTML);
  alert("HTML exported as website.html");
}

// ===============================================
// IMPORT JSON FROM FILE
// ===============================================
function triggerJsonImport() {
  document.getElementById("jsonFileInput").click();
}

function handleJsonImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    loadLayout(e.target.result);
    alert("JSON imported and layout loaded.");
  };
  reader.readAsText(file);
}
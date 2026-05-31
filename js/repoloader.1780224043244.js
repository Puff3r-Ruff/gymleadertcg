/* ============================================================
   Repo Loader Module (Standalone)
   ============================================================ */

export const RepoLoader = (() => {

  /* -----------------------------
     Fetch user's repos
  ----------------------------- */
  async function fetchUserRepos(userId) {
    try {
      const res = await fetch("/api/repos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID: userId }),
        cache: "no-store"
      });

      if (!res.ok) return [];
      const data = await res.json();
      return data.repos || [];
    } catch (err) {
      console.warn("fetchUserRepos failed:", err);
      return [];
    }
  }

  /* -----------------------------
     Cooldown overlay
  ----------------------------- */
  function showCooldownOverlay() {
    let overlay = document.getElementById("cooldownOverlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "cooldownOverlay";
      overlay.style.position = "fixed";
      overlay.style.left = 0;
      overlay.style.top = 0;
      overlay.style.right = 0;
      overlay.style.bottom = 0;
      overlay.style.display = "flex";
      overlay.style.alignItems = "center";
      overlay.style.justifyContent = "center";
      overlay.style.background = "rgba(0,0,0,0.6)";
      overlay.style.color = "#fff";
      overlay.style.zIndex = 999999999;
      overlay.style.fontSize = "18px";
      document.body.appendChild(overlay);
    }
    overlay.textContent = `Updating. Please allow up to 2 minutes`;
    overlay.style.display = "flex";
  }

  function hideCooldownOverlay() {
    const overlay = document.getElementById("cooldownOverlay");
    if (overlay) overlay.style.display = "none";
  }

  async function waitForUpdateCooldown(lastUpdated) {
    const TWO_MIN = 2 * 60 * 1000;
    const now = Date.now();
    const elapsed = now - lastUpdated;

    if (elapsed >= TWO_MIN) return;

    const waitTime = TWO_MIN - elapsed;
    let remaining = Math.ceil(waitTime / 1000);

    showCooldownOverlay();

    return new Promise(resolve => {
      const interval = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) {
          clearInterval(interval);
          hideCooldownOverlay();
          resolve();
        }
      }, 1000);
    });
  }

  /* -----------------------------
     Elements to sync
  ----------------------------- */
  const SYNC_SELECTORS = ["img", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span"];

  /* -----------------------------
     Sync repo HTML → live page
  ----------------------------- */
  async function syncRepoContent(repo, branch = "main", entry = "index.html") {
    const base = `https://raw.githubusercontent.com/Puff3r-Ruff/${repo}/${branch}/`;
    const bust = `?v=${Date.now()}`;

    const htmlRes = await fetch(base + entry + bust, {
      cache: "no-store",
      mode: "cors"
    });

    if (!htmlRes.ok) throw new Error("Failed to load repo HTML");

    const html = await htmlRes.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    SYNC_SELECTORS.forEach(selector => {
      const repoEls = [...doc.querySelectorAll(selector)];
      const pageEls = [...document.querySelectorAll(selector)];

      repoEls.forEach((repoEl, i) => {
        const pageEl = pageEls[i];
        if (!pageEl) return;

        if (selector === "img") {
          let src = repoEl.getAttribute("src");
          if (src && !src.startsWith("http") && !src.startsWith("//")) {
            src = base + src + bust;
          }
          if (src) pageEl.src = src;
        } else {
          pageEl.innerHTML = repoEl.innerHTML;
        }
      });
    });
  }

  /* -----------------------------
     MAIN ENTRY POINT
  ----------------------------- */
  async function loadRepoContent({ repo, userId, template }) {
    if (!repo || !userId) {
      throw new Error("Missing repo or userId");
    }

    // Fetch repos for this user
    const repos = await fetchUserRepos(userId);
    const match = repos.find(r => r.repo === repo);

    if (!match) {
      throw new Error("Repo not found for this user");
    }

    // Template mismatch → redirect
    if (template && match.template !== template) {
      const params = new URLSearchParams({
        repo,
        userId,
        template: match.template
      });

      window.location.href =
        `/Template/${match.template}/${match.template}.html?${params.toString()}`;
      return;
    }

    // Cooldown
    if (match.lastUpdated) {
      await waitForUpdateCooldown(match.lastUpdated);
    }

    // Sync content
    await syncRepoContent(repo);

    return true;
  }

  return {
    loadRepoContent
  };

})();

/* ------------------------------------------------------------
   Expose globally so inline scripts can call loadRepoContent()
------------------------------------------------------------ */
window.loadRepoContent = RepoLoader.loadRepoContent;

(() => {
  const P = window.PORTFOLIO;
  const $ = (id) => document.getElementById(id);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const gh = P.links.github;
  const user = gh.split("/").pop();

  $("logo").textContent = P.name;
  $("name").textContent = P.name;
  $("tagline").textContent = P.tagline;
  $("about").textContent = P.about;
  $("gh-link").href = gh;
  $("foot").innerHTML = `© ${new Date().getFullYear()} ${esc(P.name)} · <a href="${gh}" target="_blank" rel="noopener">GitHub</a>`;

  $("stats").innerHTML = [
    [P.repos.length, "projects"],
    [P.skills.length, "skills"],
    [P.media.length, "media"],
  ].map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join("");

  // Projects
  const repos = [...P.repos].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  $("repo-grid").innerHTML = repos.map((r) => `
    <a class="card" href="${r.url || `${gh}/${r.name}`}" target="_blank" rel="noopener">
      ${r.featured ? '<span class="pin">featured</span>' : ""}
      <h3>${esc(r.name)}</h3>
      <p>${esc(r.desc)}</p>
      <span class="lang" data-lang="${esc(r.lang)}">${esc(r.lang || "")}</span>
    </a>`).join("");

  // Live star counts (best effort, silently skipped if rate-limited)
  fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
    .then((r) => (r.ok ? r.json() : []))
    .then((list) => list.forEach((r) => {
      const card = [...document.querySelectorAll("#repo-grid .card h3")].find((h) => h.textContent === r.name);
      if (card && r.stargazers_count) card.insertAdjacentHTML("beforeend", ` <small>★ ${r.stargazers_count}</small>`);
    }))
    .catch(() => {});

  // Skills
  const agents = ["All", "Claude", "Codex", "Hermes"];
  let active = "All";
  const renderSkills = () => {
    const list = P.skills.filter((s) => active === "All" || s.agent === active);
    $("skill-grid").innerHTML = list.length
      ? list.map((s) => `
        <a class="card skill" href="${gh}/portfolio/tree/main/${s.path}" target="_blank" rel="noopener">
          <span class="agent agent-${s.agent.toLowerCase()}">${esc(s.agent)}</span>
          <h3>${esc(s.name)}</h3>
          <p>${esc(s.desc)}</p>
          <span class="mono">${esc(s.path)}/SKILL.md</span>
        </a>`).join("")
      : `<p class="empty">No ${esc(active)} skills published yet — coming soon.</p>`;
    $("skill-filters").innerHTML = agents.map((a) =>
      `<button class="${a === active ? "on" : ""}" data-a="${a}">${a}</button>`).join("");
  };
  $("skill-filters").addEventListener("click", (e) => {
    if (e.target.dataset.a) { active = e.target.dataset.a; renderSkills(); }
  });
  renderSkills();

  // Media
  $("media-grid").innerHTML = P.media.length
    ? P.media.map((m, i) => `
      <figure data-i="${i}">
        ${m.type === "video"
          ? `<video src="${esc(m.src)}" muted loop playsinline preload="metadata"></video><span class="play">▶</span>`
          : `<img src="${esc(m.src)}" alt="${esc(m.title)}" loading="lazy" />`}
        <figcaption><b>${esc(m.title)}</b>${m.note ? `<span>${esc(m.note)}</span>` : ""}</figcaption>
      </figure>`).join("")
    : `<p class="empty">Generated images and videos will show up here. Add them in <code>data.js</code>.</p>`;

  document.querySelectorAll("#media-grid video").forEach((v) => {
    v.parentElement.addEventListener("mouseenter", () => v.play());
    v.parentElement.addEventListener("mouseleave", () => v.pause());
  });

  const lb = $("lightbox");
  $("media-grid").addEventListener("click", (e) => {
    const fig = e.target.closest("figure");
    if (!fig) return;
    const m = P.media[fig.dataset.i];
    lb.innerHTML = m.type === "video"
      ? `<video src="${esc(m.src)}" controls autoplay></video>`
      : `<img src="${esc(m.src)}" alt="${esc(m.title)}" />`;
    lb.hidden = false;
  });
  lb.addEventListener("click", () => { lb.hidden = true; lb.innerHTML = ""; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.click(); });
})();

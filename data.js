// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to update your portfolio. No build step needed.
// ─────────────────────────────────────────────────────────────
window.PORTFOLIO = {
  name: "KUR3Kevin",
  tagline: "Builder of AI agent workflows, tools, and web experiments.",
  about:
    "I build with AI agents — Claude, Codex, and Hermes — and ship the tools, skills, and sites that come out of it. Here's the work worth showing.",
  links: {
    github: "https://github.com/KUR3Kevin",
  },

  // GitHub repos to feature. Set `featured: true` to pin to the top.
  repos: [
    { name: "Harnesses", lang: "TypeScript", desc: "Agent harnesses and tooling experiments.", featured: true },
    { name: "Task-Managing-Manager", lang: "Python", desc: "macOS application & process manager — discover installed apps and monitor processes in real time.", featured: true },
    { name: "GTA-Weekly-Update", lang: "HTML", desc: "Responsive GTA Online weekly update page with bonus events, vehicles, races, and rewards." },
    { name: "NevadaDMVWrittenTest", lang: "TypeScript", desc: "Practice app for the Nevada DMV written test." },
    { name: "Roblox", lang: "Lua", desc: "Roblox game project." },
  ],

  // Agent skills. `path` points at the folder inside /skills of this repo.
  skills: [
    { agent: "Claude", name: "filesystem-audit", desc: "Audits a macOS home directory for clutter, duplicates, stale files, naming, disk usage, and exposed sensitive files.", path: "skills/claude/filesystem-audit" },
    { agent: "Claude", name: "substack", desc: "Writes, edits, publishes, and manages Substack posts, notes, images, and engagement.", path: "skills/claude/substack" },
    // { agent: "Codex",  name: "my-codex-skill",  desc: "...", path: "skills/codex/my-codex-skill" },
    // { agent: "Hermes", name: "my-hermes-skill", desc: "...", path: "skills/hermes/my-hermes-skill" },
  ],

  // Generated / showcase media. Drop files in media/images or media/videos.
  // type: "image" | "video"
  media: [
    // { type: "image", src: "media/images/example.jpg", title: "Title", note: "Made with ..." },
    // { type: "video", src: "media/videos/example.mp4", title: "Title", note: "Made with ..." },
  ],
};

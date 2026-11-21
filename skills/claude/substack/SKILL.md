---
name: substack
description: Use when the user wants to write, edit, publish, or manage content on Substack including articles, posts, notes, images, formatting, and engagement with comments, likes, follows, and messages
---

# Substack Publishing and Engagement

## Overview

A complete guide for writing, editing, and publishing content on Substack (kevinelevin.substack.com) and managing audience engagement. Covers article structure, formatting rules, image insertion, and community interaction.

## Writing Rules (Always Follow)

- NEVER use the em dash symbol. Replace it with a comma, colon, period, or the word "and"
- NEVER leave images inside paragraphs. Always place images between paragraphs on their own line
- ALWAYS verify no words are split across image breaks before finishing
- Keep sentences clear and direct. No filler phrases
- Use H2 for section headings, H3 for sub-sections
- Bold key claims or dramatic lines using **text**
- Italics for quotes, questions, and emphasis using *text*

## Article Structure

```
Title          — punchy, specific, under 90 characters
Subtitle       — one sentence hook, no em dashes
[Author tag]

Hook paragraph — dramatic opening, high stakes, draws reader in
Setup paragraph — what this is about, the key question

[Image 1 — AI/tech visual, placed AFTER hook paragraphs]

H2: Section 1
Body paragraphs

[Image 2 — thematic to section, placed BETWEEN sections]

H2: Section 2 ...

[Image 3 — emotional/human image, placed before final section]

H2: Final section — what this means / call to action
Closing line   — memorable, punchy final sentence
```

## Image Placement Rules

1. Use Substack's built-in Stock Photos (toolbar image icon -> Stock photos) — powered by Unsplash, free
2. Place images BETWEEN paragraphs, never inside them
3. Verify placement by checking text flows cleanly above and below
4. Good search terms by tone:
   - Tech/AI articles: "artificial intelligence chip", "neural network", "circuit board"
   - Security/ban topics: "digital lock security", "red padlock keyboard"
   - Developer topics: "developer coding screen", "programmer laptop"
   - Finance topics: "money technology", "digital economy"
5. After inserting, always run a text check to confirm no paragraph was split

## Tone Guide

| Goal | Approach |
|---|---|
| Dramatic | Open with immediate action, high stakes, short punchy sentences |
| Balanced | Present both sides explicitly, use "but here is the uncomfortable question" framing |
| Educational | Lead with the "why it matters", then facts, then implications |
| Opinion | State the take clearly in the first paragraph, then back it up |

## Substack Editor Workflow

**Navigate:** kevinelevin.substack.com -> Dashboard -> Create new -> Article

**Title field:** Click "Title" placeholder, type title
**Subtitle field:** Click "Add a subtitle..." placeholder, type subtitle
**Body:** Click "Start writing..." to begin

**Formatting shortcuts:**
- Style dropdown -> Heading 2 for section headers
- Bold: Cmd+B
- Italic: Cmd+I
- Image: Toolbar image icon -> Stock photos (search Unsplash inline)

**Before finishing any article:**
- Scan full text for "—" symbols, replace all
- Visually check each image is between paragraphs
- Read first and last sentence of every paragraph to catch split words

## Engagement Actions

### Comments
- Reply to comments within 24-48 hours to build community
- Ask a follow-up question in replies to keep conversation going
- Pin the best comment using the pin icon to highlight quality discussion
- Like comments by clicking the heart on each one

### Likes and Reactions
- The heart button on posts and comments is the primary engagement signal
- Substack tracks who liked posts. This data is visible in post analytics

### Following and Followers
- Follow other Substack writers from their profile page
- Cross-promote by recommending other publications: Dashboard -> Settings -> Recommendations
- Engage with writers in your niche by commenting on their posts

### Notes (Short-form posts)
- Notes are Substack's short-form feed (like Twitter/X posts)
- Use Notes to share quick takes, tease upcoming articles, or reply publicly
- Navigate: Dashboard -> Create new -> New note
- Keep Notes under 280 characters for best engagement
- Good Note formats: a question, a bold opinion, a quote from your article

### Direct Messages
- Access via the message icon in the top navigation
- DM readers who leave especially thoughtful comments
- Use DMs to thank paid subscribers personally

### Growing the Audience
- Post consistently: 1-2 articles per week minimum
- End every article with a question to prompt comments
- Add a call-to-action at the end: "Subscribe for more" or "Share this post"
- Use Notes to stay visible between full articles

## Quick Reference

| Action | Where |
|---|---|
| Write article | Dashboard -> Create new -> Article |
| Write note | Dashboard -> Create new -> New note |
| Reply to comments | Post page -> Comments section |
| See analytics | Dashboard -> Posts -> click post |
| Manage subscribers | Dashboard -> Subscribers |
| Recommendations | Dashboard -> Settings -> Recommendations |
| Send newsletter | After writing -> Continue -> Publish |
| Save as draft | Editor auto-saves (green "Saved" dot top left) |

## Common Mistakes

| Mistake | Fix |
|---|---|
| Em dash in text | Replace with comma, colon, period, or "and" |
| Image splits a paragraph | Use JS to move image node after the paragraph element |
| Title and subtitle merged | Use `form_input` with ref IDs to set each field separately |
| Subtitle in title field | Find textarea refs: ref for title has placeholder "Title", subtitle has "Add a subtitle..." |
| Article not saving | Click anywhere in editor to trigger autosave |
| Formatting lost on paste | Use clipboard paste via `ClipboardEvent` with `text/html` MIME type |

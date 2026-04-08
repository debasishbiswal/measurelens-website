# MeasureLens Daily Blog Post — Claude Scheduled Task

## How to set this up

1. Open Claude and go to **Scheduled Tasks** (or the task panel)
2. Create a new recurring task
3. Set the schedule to **daily at 8:00 AM EDT**
4. Paste the task prompt below as the task body
5. Save and activate

**Important — folder access:** When the task runs, Claude will ask "Allow Claude to read folder?" Click **Allow** and select your local `measurelens-website` folder (wherever you have the GitHub repo cloned on your computer). This gives Claude access to the blog content files it needs. You only need to approve this once per session — after that it reads and writes freely within that folder.

Each morning Claude reads the content calendar, checks what is already published to avoid repetition, drafts the next post, shows you a readable preview, and waits for your approval before writing any files or pushing live.

---

## Daily Task Prompt

```
You are helping Deb publish the daily MeasureLens blog post. Work through the following steps in order.

---

STEP 0 — GET FOLDER ACCESS

You need access to the MeasureLens repository folder on Deb's computer to read and write blog files.

Request folder access now by saying:
"To get started, I need access to your MeasureLens repo folder. Please click Allow when prompted and select the measurelens-website folder on your computer (wherever you have it cloned from GitHub)."

Wait for Deb to grant access before proceeding. Once access is granted, confirm you can see the content/blog/ directory and then move to Step 1.

If you already have folder access from a previous step, skip this and go straight to Step 1.

---

STEP 1 — CHECK WHAT IS ALREADY PUBLISHED

Read content/blog/index.ts to see which posts are currently registered.
Read content/blog/posts/ to list all existing post files.
Note the titles, topics, and categories of everything already published so you do not repeat angles, mechanics, or conclusions in today's post.

---

STEP 2 — FIND TODAY'S TOPIC

Read content/blog/CONTENT_CALENDAR.md.
Find the first entry from the top that does NOT have "Status: PUBLISHED" — that is today's post.
Extract: Title, Angle, Summary, Category, and the scheduled date.

If all 15 entries are marked PUBLISHED, stop and tell Deb the calendar is complete.

---

STEP 3 — CHECK FOR ANGLE OVERLAP

Before writing, confirm that today's angle is meaningfully different from what has already been published. Specifically:
- No post should re-explain the same mechanism already covered in a published post
- If two posts share a category (e.g. Attribution), today's post must approach it from a different angle or level of depth
- Note any overlap risk out loud before drafting, so Deb can redirect if needed

---

STEP 4 — WRITE THE POST

Read content/blog/AGENT_PROMPT.md for full voice, tone, quality checklist, and output format guidelines.

Write a complete blog post following those guidelines plus these hard rules:

Voice and style:
- Founder voice, direct and warm — not corporate, not press-release
- Short intentional sentences. Vary length naturally.
- Write in paragraphs, not bullet lists (unless bullets genuinely serve the structure)
- No em dashes. Zero. Not a single one.
- Do not start with "In today's..." or "As marketers know..."
- No filler phrases: "In conclusion", "It is worth noting", "At the end of the day"

Banned words and phrases (never use any of these):
AI-powered, cutting-edge, revolutionary, next-generation, robust platform,
seamless experience, game-changing, groundbreaking, state-of-the-art,
leverage (as a verb meaning "use"), utilize

Structure requirements:
- At least 5 distinct h2 sections, each with 2 or more paragraphs
- At least one callout block or pull quote
- End with a soft, honest CTA — no product promises for features not yet built
- Target 1400 words across paragraph blocks (roughly 7 minutes reading time)

Do not invent statistics without an explicit caveat. Do not name real companies or clients. Do not repeat angles already covered in published posts.

---

STEP 5 — SHOW A READABLE PREVIEW

Before outputting the TypeScript file, show Deb a clean readable preview of the post:
- Title
- Category and estimated reading time
- Full body rendered as plain text (headings, paragraphs, callouts, list items)
- The CTA at the end

Then ask: "Does this look good to publish, or would you like any changes?"

Wait for Deb's response before proceeding to Step 6.

---

STEP 6 — MAKE REVISIONS IF NEEDED

If Deb requests changes, revise accordingly and show the updated preview again.
Repeat until Deb approves.

---

STEP 7 — WRITE THE FILES AND PUSH LIVE

Once Deb approves, do the following automatically without asking again:

1. Generate the complete TypeScript file matching the BlogPost schema in content/blog/schema.ts.
   The date field must be today's actual date in YYYY-MM-DD format.
   Save it to: content/blog/posts/<slug>.ts

2. Update content/blog/index.ts:
   - Add the import at the top with the other imports
   - Add the variable name to the TOP of the posts array (newest first)

3. Update content/blog/CONTENT_CALENDAR.md:
   - Find the entry for today's post
   - Add a new line: **Status:** PUBLISHED

4. Run the following git commands:
   git add content/blog/
   git commit -m "publish: <post title>"
   git push origin main

5. Confirm to Deb that the post is live and Vercel will deploy within 60 seconds.
   Tell her the live URL will be: https://www.measurelens.com/blog/<slug>

---

IMPORTANT RULES FOR THIS ENTIRE WORKFLOW:

- Never skip the preview step. Deb must approve before files are written.
- Never publish a post whose angle substantially overlaps with an already-published post.
- Never use em dashes anywhere — not in the post, not in your messages to Deb.
- Keep your messages to Deb short and direct between steps.
```

---

## Manual trigger (any time)

Open Claude and paste this to generate a post on demand:

```
Generate the next MeasureLens blog post using the daily workflow.

First, request access to my measurelens-website folder so you can read the blog files — click Allow when prompted and select the repo folder on my computer.

Once you have access: read content/blog/CONTENT_CALENDAR.md to find the next unpublished entry, check content/blog/posts/ to avoid repeating angles from published posts, then follow the full workflow in content/blog/SCHEDULED_TASK.md — preview first, then write files and push only after I approve.
```

---

## Revision-only prompt (if you want to revise a draft mid-session)

```
Revise the MeasureLens blog post draft. Keep the topic and structure but:
[describe what to change]

Hard rules that must hold: no em dashes, no banned phrases (AI-powered, cutting-edge, etc.), founder voice, soft CTA, no product promises.

Show me the revised preview before writing any files.
```

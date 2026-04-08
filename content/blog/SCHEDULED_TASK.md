# MeasureLens Daily Blog Post — Claude Scheduled Task

## How to set this up

1. Open Claude and go to **Scheduled Tasks** (or the task panel)
2. Create a new recurring task
3. Set the schedule to **daily at 8:00 AM EDT**
4. Paste the task prompt below as the task body
5. Save and activate

That's it. Each morning Claude will generate the next post from the content calendar and present it for your review. Nothing publishes automatically — you review, save the file, and push when ready.

---

## Daily Task Prompt (paste this into the scheduled task)

```
Generate today's MeasureLens blog post.

Read the content calendar at content/blog/CONTENT_CALENDAR.md and find the next entry that does not have "Status: PUBLISHED". That is today's post.

Then read content/blog/AGENT_PROMPT.md for the full voice, tone, and output format guidelines.

Using the title, angle, summary, and category from the calendar entry, write the complete blog post as a TypeScript file matching the BlogPost schema in content/blog/schema.ts.

Follow these rules without exception:
- No em dashes anywhere in the post
- No banned phrases: AI-powered, cutting-edge, revolutionary, next-generation, robust platform, seamless experience, game-changing, groundbreaking, state-of-the-art
- Short, direct sentences. Founder voice, not press release tone.
- At least 5 h2 sections, each with 2+ paragraphs
- At least one callout or pull quote
- Soft CTA at the end — no product promises
- Target reading time: 7 minutes (approx 1400 words across paragraph blocks)

Output the complete TypeScript file, then:
1. Tell me the slug so I know what filename to save it as
2. Remind me to register it in content/blog/index.ts (add to the top of the posts array)
3. Remind me to mark the entry as "Status: PUBLISHED" in the content calendar
4. Remind me to commit and push — Vercel deploys automatically

Do not publish anything automatically. Present the draft for my review first.
```

---

## After Claude generates the draft

1. Read through the post in the conversation
2. Ask Claude to revise any sections that need adjusting
3. Once it looks right, save the file:
   - Copy the TypeScript output
   - Save to `content/blog/posts/<slug>.ts` in the repo
4. Open `content/blog/index.ts` and add the new import at the top of the posts array
5. Mark the entry as `**Status:** PUBLISHED` in `CONTENT_CALENDAR.md`
6. Run `git add . && git commit -m "publish: <post title>" && git push`
7. Vercel picks it up and deploys within 60 seconds

---

## Manual trigger (any time)

If you want to generate a post outside the scheduled time, just open Claude and paste this shorter prompt:

```
Generate the next MeasureLens blog post. Read content/blog/CONTENT_CALENDAR.md to find the next unpublished entry. Use content/blog/AGENT_PROMPT.md for voice and output format guidelines. Output the complete TypeScript file ready to save into content/blog/posts/.
```

---

## Revision prompt (if the draft needs work)

```
Revise this MeasureLens blog post. Keep the same topic and structure but:
[describe what needs changing]

Rules that must still hold: no em dashes, no AI clichés, founder voice, soft CTA.
Output the full revised TypeScript file.
```

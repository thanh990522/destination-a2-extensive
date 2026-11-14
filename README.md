# Destination A2 Extensive

An integrated English programme with a focus on everyday speaking.

**Teacher: Mr. Hà Chí Thanh**

## Ready now

- A 42-Unit programme map based on the supplied book's contents.
- Unit 1: **My day, my neighbourhood**.
- Book focus: present simple, there is / there are and it's, printed pages 6–8.
- Lesson view and an interactive slide presentation using the same lesson content.
- Separate answer-reveal buttons for every closed question and each model response.
- Two real ELLLO listening recordings with preparation and original comprehension tasks.
- Original reading, guided speaking, information gap, free conversation, writing model, editing and Unit check.
- Browser-local answers, draft, progress and self-checks. Downloadable work and an optional local speaking recorder.

Learning is organised **by Unit**, with flexible pacing. Units are not divided into sessions.

## Open the lesson

Open `index.html` in a modern browser. No installation is required. External fonts and listening recordings need internet access. The lesson content, illustration, exercises and slide navigation are local.

Use **Unit 1** for the lesson. **Teach slides** switches to one card at a time. The arrow keys navigate slides when focus is outside interactive controls. Use **Lesson view** to see a complete learning stage, with each language block followed by its practice.

The eye beside a question reveals only that answer. Model answers for speaking and writing are examples, not the only valid responses. The classroom speaking rubric requires human feedback. There is no automatic AI grading.

## GitHub Pages

The repository includes `.github/workflows/pages.yml`. In repository **Settings → Pages → Build and deployment**, select **GitHub Actions**. The workflow tests and builds the site into `dist`, then deploys that folder. A successful deployment returns the actual Pages URL.

For a manual local build:

```sh
npm test
npm run build
```

Node 18 or later is sufficient for the build and data checks. There are no runtime packages to install.

## Files

| File | Purpose |
| --- | --- |
| `assets/unit1.js` | Structured Unit 1 content and answer keys |
| `assets/curriculum.js` | All 42 Unit outlines and Review outcomes |
| `assets/app.js` | Lesson view, slides, interaction and local saving |
| `assets/style.css` | Responsive lesson and presentation styling |
| `PROGRAMME.md` | Programme allocation and authoring rules |
| `SOURCES.md` | Source register and material boundaries |
| `tests/content.test.mjs` | Content-integrity checks |

## Extending the course

Review the full source Unit first. Keep the original Unit number and scope. For vocabulary Units, use the categories actually present in that Unit. Teach a small word group and practise it immediately before the next group. Prepare the essential unfamiliar language for every skill. Select and verify human audio, including the recording, transcript and question answers. Add a clear speaking outcome, a reading and a writing task.

The outlines for Units 2–42 are plans, not complete lessons. Their listening topics are briefs for later source selection. Only the two recordings in Unit 1 have been selected and verified in this version.

## Sources and use

See [SOURCES.md](SOURCES.md). These are independently authored companion materials. The book PDF, complete publisher exercises and ELLLO recordings are not redistributed. External source material remains with its respective owner.

No API key, student account or external database is required. Saved work belongs to the current browser. A recording must be downloaded before leaving the recording view.

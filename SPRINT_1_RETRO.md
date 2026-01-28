# Sprint 1 Retrospective

**Participants:** Joel Livingstone Kofi Ackah

## What Went Well?
* **Git Workflow:** The feature branch strategy worked well. I successfully kept `main` clean and only merged working code.
* **Testing:** Writing the unit tests *before* the UI helped clarify the logic (Test-Driven Development). The Jest setup was smooth.
* **CI Setup:** The GitHub Actions pipeline caught a few potential issues early and is now running automatically.

## What Could Be Improved? (Action Items for Sprint 2)
1.  **Commit Granularity:**
    * *Issue:* In Sprint 1, I tended to do a lot of work before committing (e.g., I built the whole HTML skeleton in one go).
    * *Improvement:* In Sprint 2, I will commit more frequently—ideally after completing every single function or small UI change. This makes the history clearer.

2.  **Test Coverage:**
    * *Issue:* I only wrote tests for the "happy path" (valid inputs).
    * *Improvement:* In Sprint 2, I will add tests for "edge cases" (e.g., what happens if the list is empty? What if I add a huge number?). This improves the robustness of the app.
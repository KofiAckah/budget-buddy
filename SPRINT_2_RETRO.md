# Final Retrospective (Sprint 2)

## What Went Well?
* **TDD approach:** Writing the test for `filterExpenses` before the function made the implementation much faster and less buggy.
* **Responsiveness:** The UI updates instantly when filtering, which feels good for the user.
* **Process Improvement:** I stuck to the "Feature Branch" workflow strictly, which kept the history clean.

## Challenges & Lessons Learned
* **State Management:** Handling the "Delete" button inside the rendered list was tricky. I learned I had to re-attach event listeners every time the list re-renders.
* **Scope Management:** Story 5 (Filtering) was larger than expected. Breaking it down into "Logic first" then "UI second" helped manage the complexity.

## Final Project Reflection
Over the course of two sprints, I successfully built a working CI/CD pipeline. The most valuable takeaway was seeing how **Automated Tests** give you confidence to change code without breaking it.
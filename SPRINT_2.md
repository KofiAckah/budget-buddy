# Sprint 2: Enhanced Features & Monitoring

**Date:** 30 January, 2026

**Sprint Goal:** Apply feedback, allow deletion/filtering, and add monitoring.

---

## Sprint Review

### 1. Delivered User Stories
| Story ID | Name | Status |
| :--- | :--- | :--- |
| Story 4 | Delete Expense | ✅ Done |
| Story 5 | Filter by Category | ✅ Done |
| Task | System Monitoring | ✅ Done |

### 2. Evidence of Work
> **Filtering Feature:** The application now includes a dropdown to filter expenses. Selecting "Food" successfully hides non-food items from the view and updates the total.

> **Deletion Feature:** Users can click the "X" button to remove items.

> **Monitoring:** The console logs "[System]: App started..." upon launch.

### 3. DevOps & Quality
* **Tests:** Unit tests cover all new logic (filtering, deleting).
* **CI Pipeline:** The GitHub Actions pipeline is passing (Green).
* **Improvement from Sprint 1:** We successfully implemented TDD (writing tests before code) and committed more frequently (smaller, cleaner history).

---

## Sprint Retrospective

### What Went Well?
* **TDD approach:** Writing the test for `filterExpenses` before the function made the implementation much faster and less buggy.
* **Responsiveness:** The UI updates instantly when filtering, which feels good for the user.
* **Process Improvement:** I stuck to the "Feature Branch" workflow strictly, which kept the history clean.

### Challenges & Lessons Learned
* **State Management:** Handling the "Delete" button inside the rendered list was tricky. I learned I had to re-attach event listeners every time the list re-renders.
* **Scope Management:** Story 5 (Filtering) was larger than expected. Breaking it down into "Logic first" then "UI second" helped manage the complexity.

### Final Project Reflection
Over the course of two sprints, I successfully built a working CI/CD pipeline. The most valuable takeaway was seeing how **Automated Tests** give you confidence to change code without breaking it.

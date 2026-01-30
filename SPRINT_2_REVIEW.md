# Sprint 2 Review

**Date:** 30 Jan, 2026

**Sprint Goal:** Apply feedback, allow deletion/filtering, and add monitoring.

## 1. Delivered User Stories
| Story ID | Name | Status |
| :--- | :--- | :--- |
| Story 4 | Delete Expense | ✅ Done |
| Story 5 | Filter by Category | ✅ Done |
| Task | System Monitoring | ✅ Done |

## 2. Evidence of Work
> **Filtering Feature:** The application now includes a dropdown to filter expenses. Selecting "Food" successfully hides non-food items from the view and updates the total.

> **Deletion Feature:** Users can click the "X" button to remove items.

> **Monitoring:** The console logs "[System]: App started..." upon launch.

## 3. DevOps & Quality
* **Tests:** Unit tests cover all new logic (filtering, deleting).
* **CI Pipeline:** The GitHub Actions pipeline is passing (Green).
* **Improvement from Sprint 1:** We successfully implemented TDD (writing tests before code) and committed more frequently (smaller, cleaner history).
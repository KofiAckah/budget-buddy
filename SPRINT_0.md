# Sprint 0: Project Setup & Planning

## Product Vision
For students and young professionals who struggle to keep track of their daily spending, 
the "BudgetBuddy" is a simple web application that allows users to quickly log expenses 
and view a running total, helping them stay within their financial goals.

## Estimation Scale
**Story Points (Fibonacci):** 1, 2, 3, 5, 8

---

## Sprint 1 Backlog (High Priority)

### Story 1: Log Expense
**Priority:** High (Must Have)
**Estimate:** 3 Points

**As a** user,
**I want to** enter the name and cost of an item I bought,
**So that** I can keep a record of my spending.

**Acceptance Criteria:**
- [ ] There is a text input field for the "Item Name".
- [ ] There is a number input field for the "Amount".
- [ ] There is a "Add Expense" button.
- [ ] Clicking the button adds the item to the list below.
- [ ] The input fields clear after the item is added.
- [ ] **Negative Scenarios:** The system prevents adding an empty name or a negative amount.

### Story 2: View Expense List
**Priority:** High (Must Have)
**Estimate:** 2 Points

**As a** user,
**I want to** see a list of all the items I have added,
**So that** I can review my recent spending history.

**Acceptance Criteria:**
- [ ] The list displays the "Item Name" and "Amount" for each entry.
- [ ] New items appear immediately in the list after being added.
- [ ] The list is readable (e.g., clear font, proper spacing).
- [ ] If the list is empty, a message says "No expenses recorded yet."

### Story 3: View Total Spending
**Priority:** High (Must Have)
**Estimate:** 2 Points

**As a** user,
**I want to** see the total sum of all my expenses,
**So that** I know exactly how much money I have spent in total.

**Acceptance Criteria:**
- [ ] There is a distinct "Total" display area on the screen.
- [ ] The total updates automatically whenever a new item is added.
- [ ] The calculation is mathematically correct.
- [ ] The total is formatted as currency (e.g., $50.00 or 50.00 GHS).

---

## Sprint 2 Backlog (Medium/Low Priority)

### Story 4: Delete Expense
**Priority:** Medium (Should Have)
**Estimate:** 2 Points

**As a** user,
**I want to** remove an item from the list,
**So that** I can fix mistakes or remove duplicates.

**Acceptance Criteria:**
- [ ] Each item in the list has a visible "Delete" or "Remove" button (or icon).
- [ ] Clicking the button removes that specific item from the list.
- [ ] The "Total Spending" updates immediately to reflect the removal.

### Story 5: Filter by Category
**Priority:** Low (Could Have)
**Estimate:** 5 Points

**As a** user,
**I want to** filter my expenses by category (e.g., Food, Transport),
**So that** I can analyze where most of my money is going.

**Acceptance Criteria:**
- [ ] The "Log Expense" form includes a dropdown to select a Category.
- [ ] There is a filter control (dropdown or buttons) above the list.
- [ ] Selecting "Food" shows only food items; selecting "All" shows everything.
- [ ] The "Total Spending" updates to show the total for *only* the visible items.

---

## Definition of Done (DoD)

For any User Story to be considered "Done," it must meet the following criteria:

### 1. Code Quality
- [ ] Code is written clearly and formatted (clean indentation).
- [ ] No commented-out code or debug "console.log" statements left behind.

### 2. Functionality
- [ ] All Acceptance Criteria for the story are met.
- [ ] The feature works as expected in the browser.

### 3. Testing & CI/CD
- [ ] Unit tests are written for the new logic (where applicable).
- [ ] All tests pass locally.
- [ ] The CI Pipeline (GitHub Actions) passes (green checkmark).

### 4. Version Control
- [ ] Created a dedicated feature branch (no direct commits to main).
- [ ] Pull Request (PR) created and merged.
- [ ] Commit messages are descriptive (e.g., "feat: add expense logic" not just "update").

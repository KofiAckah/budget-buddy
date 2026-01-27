# Product Backlog: BudgetBuddy

## Product Vision
For students and young professionals who struggle to keep track of their daily spending, 
the "BudgetBuddy" is a simple web application that allows users to quickly log expenses 
and view a running total, helping them stay within their financial goals.

## Sprint 1 Backlog

### Story 1: Log Expense
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

**Estimate:** 3 Points

### Story 2: View Expense List
**As a** user,
**I want to** see a list of all the items I have added,
**So that** I can review my recent spending history.

**Acceptance Criteria:**
- [ ] The list displays the "Item Name" and "Amount" for each entry.
- [ ] New items appear immediately in the list after being added.
- [ ] The list is readable (e.g., clear font, proper spacing).
- [ ] If the list is empty, a message says "No expenses recorded yet."

**Estimate:** 2 Points

---

### Story 3: View Total Spending
**As a** user,
**I want to** see the total sum of all my expenses,
**So that** I know exactly how much money I have spent in total.

**Acceptance Criteria:**
- [ ] There is a distinct "Total" display area on the screen.
- [ ] The total updates automatically whenever a new item is added.
- [ ] The calculation is mathematically correct.
- [ ] The total is formatted as currency (e.g., $50.00 or 50.00 GHS).

**Estimate:** 2 Points

---

### Story 4: Delete Expense
**As a** user,
**I want to** remove an item from the list,
**So that** I can fix mistakes or remove duplicates.

**Acceptance Criteria:**
- [ ] Each item in the list has a visible "Delete" or "Remove" button (or icon).
- [ ] Clicking the button removes that specific item from the list.
- [ ] The "Total Spending" updates immediately to reflect the removal.
- [ ] (Optional) A confirmation prompt appears before deletion ("Are you sure?").

**Estimate:** 2 Points

---

### Story 5: Filter by Category
**As a** user,
**I want to** filter my expenses by category (e.g., Food, Transport),
**So that** I can analyze where most of my money is going.

**Acceptance Criteria:**
- [ ] The "Log Expense" form includes a dropdown to select a Category.
- [ ] There is a filter control (dropdown or buttons) above the list.
- [ ] Selecting "Food" shows only food items; selecting "All" shows everything.
- [ ] The "Total Spending" updates to show the total for *only* the visible items.

**Estimate:** 5 Points
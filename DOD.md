# Definition of Done (DoD)

For any User Story to be considered "Done," it must meet the following criteria:

1.  **Code Quality**
    - [ ] Code is written clearly and formatted (clean indentation).
    - [ ] No commented-out code or debug "console.log" statements left behind.

2.  **Functionality**
    - [ ] All Acceptance Criteria for the story are met.
    - [ ] The feature works as expected in the browser.

3.  **Testing & CI/CD**
    - [ ] Unit tests are written for the new logic (where applicable).
    - [ ] All tests pass locally.
    - [ ] The CI Pipeline (GitHub Actions) passes (green checkmark).

4.  **Version Control**
    - [ ] Created a dedicated feature branch (no direct commits to main).
    - [ ] Pull Request (PR) created and merged.
    - [ ] Commit messages are descriptive (e.g., "feat: add expense logic" not just "update").
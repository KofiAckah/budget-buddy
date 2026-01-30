# BudgetBuddy 💰

A simple, lightweight web application designed to help students and young professionals track their daily expenses and stay within their financial goals. Built with vanilla JavaScript and following Agile & DevOps best practices.

[![BudgetBuddy CI](https://github.com/KofiAckah/budget-buddy/actions/workflows/ci.yml/badge.svg)](https://github.com/KofiAckah/budget-buddy/actions)

## 🎯 Product Vision

For students and young professionals who struggle to keep track of their daily spending, **BudgetBuddy** is a simple web application that allows users to quickly log expenses and view a running total, helping them stay within their financial goals.

## ✨ Features

### Core Functionality (Sprint 1)
- ✅ **Log Expenses** - Add expense items with name and amount
- ✅ **View Expense List** - See all recorded expenses in an organized list
- ✅ **Calculate Total** - Automatically calculate and display total spending
- ✅ **Input Validation** - Prevent invalid entries (empty names, negative amounts)

### Enhanced Features (Sprint 2)
- ✅ **Delete Expenses** - Remove individual items with one click
- ✅ **Category Filtering** - Organize expenses by categories (Food, Transport, Entertainment, Other)
- ✅ **Dynamic Filtering** - Filter expenses by category and update totals dynamically
- ✅ **System Monitoring** - Console logging for debugging and monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)
- A modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:KofiAckah/budget-buddy.git
   cd budget-buddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Open the application**
   - Simply open `src/index.html` in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     cd src && python3 -m http.server 8000
     
     # Using Node.js http-server (install globally first)
     npx http-server src -p 8000
     ```
   - Navigate to `http://localhost:8000`

## 🏗️ Project Structure

```
BudgetBuddy/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions CI pipeline
├── assets/
│   ├── Github1.png             # CI pipeline screenshot
│   └── Website1.png            # Application UI screenshot
├── src/
│   ├── index.html              # Main HTML file
│   ├── app.js                  # UI logic and DOM manipulation
│   └── logic.js                # Core business logic (testable)
├── tests/
│   └── logic.test.js           # Jest unit tests
├── SPRINT_0.md                 # Project setup, backlog & DoD
├── SPRINT_1.md                 # Sprint 1 review & retrospective
├── SPRINT_2.md                 # Sprint 2 review & retrospective
├── package.json                # Project dependencies and scripts
└── README.md                   # This file
```

## 🧪 Testing

The project uses **Jest** for unit testing. Tests cover all core business logic functions.

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Test Coverage
- ✅ Adding valid expenses
- ✅ Rejecting invalid input
- ✅ Calculating totals correctly
- ✅ Removing expenses by ID
- ✅ Filtering expenses by category

## 🔄 CI/CD Pipeline

The project uses **GitHub Actions** for continuous integration. The pipeline automatically:
- Runs on every push to `main` or any `feat/*` branch
- Runs on every pull request to `main`
- Sets up Node.js environment
- Installs dependencies
- Executes all Jest tests

View the pipeline status in the [Actions tab](https://github.com/KofiAckah/budget-buddy/actions).

## 🌿 Git Workflow

This project follows a **feature branch workflow**:

### Branches
- `main` - Production-ready code
- `feat/setup-core-logic` - Sprint 1: Core expense tracking
- `feat/delete-expense` - Sprint 2: Delete functionality
- `feat/filter-category` - Sprint 2: Category filtering

### Workflow Process
1. Create a feature branch from `main`
   ```bash
   git checkout -b feat/your-feature-name
   ```
2. Make changes and commit frequently with descriptive messages
   ```bash
   git commit -m "feat: add expense deletion feature"
   ```
3. Push to GitHub
   ```bash
   git push origin feat/your-feature-name
   ```
4. Create a Pull Request
5. Wait for CI to pass (green checkmark)
6. Merge to `main`

## 📋 User Stories

### Completed Stories

#### Story 1: Log Expense (3 points)
**As a** user, **I want to** enter the name and cost of an item I bought, **so that** I can keep a record of my spending.

#### Story 2: View Expense List (2 points)
**As a** user, **I want to** see a list of all the items I have added, **so that** I can review my recent spending history.

#### Story 3: View Total Spending (2 points)
**As a** user, **I want to** see the total sum of all my expenses, **so that** I know exactly how much money I have spent in total.

#### Story 4: Delete Expense (2 points)
**As a** user, **I want to** remove an item from the list, **so that** I can fix mistakes or remove duplicates.

#### Story 5: Filter by Category (5 points)
**As a** user, **I want to** filter my expenses by category (e.g., Food, Transport), **so that** I can analyze where most of my money is going.

See [SPRINT_0.md](SPRINT_0.md) for detailed acceptance criteria.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Testing**: Jest (v30.2.0)
- **CI/CD**: GitHub Actions
- **Version Control**: Git & GitHub
- **Development Tools**: Node.js, npm

## 📊 Sprint Progress

### Sprint 1 (Completed)
**Goal**: Deliver core expense tracking features and establish CI pipeline
- ✅ Story 1: Log Expense
- ✅ Story 2: View Expense List
- ✅ Story 3: View Total Spending
- ✅ CI/CD Pipeline Setup

### Sprint 2 (Completed)
**Goal**: Apply feedback, allow deletion/filtering, and add monitoring
- ✅ Story 4: Delete Expense
- ✅ Story 5: Filter by Category
- ✅ System Monitoring

## 📖 Definition of Done

For any user story to be considered "Done," it must meet:

1. **Code Quality**
   - Clean, formatted code
   - No debug statements left behind

2. **Functionality**
   - All acceptance criteria met
   - Works as expected in browser

3. **Testing & CI/CD**
   - Unit tests written and passing
   - CI pipeline passes (green checkmark)

4. **Version Control**
   - Feature branch created
   - Pull request created and merged
   - Descriptive commit messages

See [SPRINT_0.md](SPRINT_0.md) for the complete checklist and product backlog.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

### Commit Message Convention
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `test:` - Test additions or modifications
- `chore:` - Maintenance tasks

**Happy Budgeting! 💰**

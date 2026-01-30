let expenses = [];

// DOM Elements
const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('item-name');
const amountInput = document.getElementById('item-amount');
const categoryInput = document.getElementById('item-category');
const filterInput = document.getElementById('filter-category');
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');

// Basic Monitoring: Log when the app starts
console.log(`[System]: App started at ${new Date().toISOString()}`);
console.log(`[Monitoring]: Current expense count: ${expenses.length}`);

// Event Listener: Add Expense
addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;
    const category = categoryInput.value;

    // Add with category
    const newExpense = addExpense(expenses, name, amount, category);

    if (newExpense) {
        console.log(`[Monitoring]: Expense added - ${name} ($${amount}) [${category}]`);
        console.log(`[Monitoring]: Total expenses: ${expenses.length}`);
        renderUI();
        clearInputs();
    } else {
        alert("Please enter a valid name and amount!");
    }
});

// Event Listener: Filter Change
filterInput.addEventListener('change', () => {
    const filterValue = filterInput.value;
    console.log(`[Monitoring]: Filter changed to: ${filterValue}`);
    renderUI();
});

function renderUI() {
    list.innerHTML = "";

    // Get the current filter value
    const currentCategory = filterInput.value;

    // Get the specific list to show using logic.js
    const visibleExpenses = filterExpenses(expenses, currentCategory);

    console.log(`[Monitoring]: Displaying ${visibleExpenses.length} of ${expenses.length} expenses (Filter: ${currentCategory})`);

    // Loop through the VISIBLE expenses only
    visibleExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="expense-info">
                <strong>${expense.name}</strong> 
                <small class="category-badge">${expense.category}</small>
            </span>
            <span class="expense-amount">$${expense.amount.toFixed(2)}</span>
            <button class="delete-btn" data-id="${expense.id}">✕</button>
        `;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            console.log(`[Monitoring]: Expense deleted - ID: ${expense.id}, Name: ${expense.name}`);
            expenses = removeExpense(expenses, expense.id);
            console.log(`[Monitoring]: Remaining expenses: ${expenses.length}`);
            renderUI();
        });

        list.appendChild(li);
    });

    // Update Total based on visible expenses
    const total = calculateTotal(visibleExpenses);
    totalDisplay.textContent = total.toFixed(2);
}

function clearInputs() {
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}

// Add monitoring to user actions
addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;
    const category = categoryInput.value;
    
    const newExpense = addExpense(expenses, name, amount, category);
    
    if (newExpense) {
        console.log(`[Monitoring]: Expense added - ${name} ($${amount}) [${category}]`);
        console.log(`[Monitoring]: Total expenses: ${expenses.length}`);
        renderUI();
        clearInputs();
    }
});

// Add to delete functionality
deleteBtn.addEventListener('click', () => {
    console.log(`[Monitoring]: Expense deleted - ID: ${expense.id}`);
    expenses = removeExpense(expenses, expense.id);
    console.log(`[Monitoring]: Remaining expenses: ${expenses.length}`);
    renderUI();
});
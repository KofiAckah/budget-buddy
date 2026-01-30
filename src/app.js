let expenses = [];

// DOM Elements
const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('item-name');
const amountInput = document.getElementById('item-amount');
const categoryInput = document.getElementById('item-category'); // NEW
const filterInput = document.getElementById('filter-category'); // NEW
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');

// Event Listener: Add Expense
addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;
    const category = categoryInput.value; // Get the category

    // Add with category
    const newExpense = addExpense(expenses, name, amount, category);

    if (newExpense) {
        renderUI();
        clearInputs();
    } else {
        alert("Please enter a valid name and amount!");
    }
});

// Event Listener: Filter Change
filterInput.addEventListener('change', () => {
    renderUI(); // Re-draw the list based on the new filter
});

function renderUI() {
    list.innerHTML = "";

    // 1. Get the current filter value (e.g., "Food" or "All")
    const currentCategory = filterInput.value;

    // 2. Get the specific list to show using logic.js
    const visibleExpenses = filterExpenses(expenses, currentCategory);

    // 3. Loop through the VISIBLE expenses only
    visibleExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>
                <strong>${expense.name}</strong> 
                <small>(${expense.category})</small>
            </span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button class="delete-btn" data-id="${expense.id}" style="background-color: #dc3545; color: white; border: none; margin-left: 10px; cursor: pointer;">X</button>
        `;

        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            expenses = removeExpense(expenses, expense.id);
            renderUI();
        });

        list.appendChild(li);
    });

    // 4. Update Total (Based on ALL expenses, or visible? Usually Total is for everything, but let's stick to visible for the filter view)
    const total = calculateTotal(visibleExpenses);
    totalDisplay.textContent = total.toFixed(2);
}

function clearInputs() {
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}

// Basic Monitoring: Log when the app starts
console.log(`[System]: App started at ${new Date().toISOString()}`);
console.log(`[Monitoring]: Current expense count: ${expenses.length}`);
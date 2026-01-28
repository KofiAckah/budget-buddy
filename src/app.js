// src/app.js

// State: We store the expenses here
const expenses = [];

// DOM Elements
const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('item-name');
const amountInput = document.getElementById('item-amount');
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');

addBtn.addEventListener('click', () => {
    // 1. Get values
    const name = nameInput.value;
    const amount = amountInput.value;

    // 2. Use the Logic Function (from logic.js)
    const newExpense = addExpense(expenses, name, amount);

    if (newExpense) {
        // If successful, update the UI
        renderUI();
        clearInputs();
    } else {
        alert("Please enter a valid name and amount!");
    }
});

function renderUI() {
    // Clear the current list
    list.innerHTML = "";

    // Re-draw the list
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.name}</span>
            <span>$${expense.amount.toFixed(2)}</span>
        `;
        list.appendChild(li);
    });

    // Calculate Total (using logic.js)
    const total = calculateTotal(expenses);
    totalDisplay.textContent = total.toFixed(2);
}

function clearInputs() {
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}
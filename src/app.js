// src/app.js

// CHANGE 1: Use 'let' so we can update the array when deleting
let expenses = [];

// DOM Elements
const addBtn = document.getElementById('add-btn');
const nameInput = document.getElementById('item-name');
const amountInput = document.getElementById('item-amount');
const list = document.getElementById('expense-list');
const totalDisplay = document.getElementById('total-amount');

addBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const amount = amountInput.value;
    
    // Note: addExpense mutates the array in our current logic
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
    list.innerHTML = "";

    expenses.forEach(expense => {
        const li = document.createElement('li');
        
        // CHANGE 2: Create HTML with a Delete Button
        li.innerHTML = `
            <span>${expense.name}: $${expense.amount.toFixed(2)}</span>
            <button class="delete-btn" data-id="${expense.id}" style="background-color: #dc3545; margin-left: 10px;">X</button>
        `;
        
        // CHANGE 3: Add Click Listener for Deletion
        // We find the button we just created inside this 'li'
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            // Call the logic function
            expenses = removeExpense(expenses, expense.id);
            // Re-draw the UI
            renderUI();
        });

        list.appendChild(li);
    });

    const total = calculateTotal(expenses);
    totalDisplay.textContent = total.toFixed(2);
}

function clearInputs() {
    nameInput.value = "";
    amountInput.value = "";
    nameInput.focus();
}
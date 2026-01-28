// src/logic.js

// Function 1: Add an expense to the list
function addExpense(expenseList, name, amount) {
    // Validation: Name must exist, Amount must be positive
    if (!name || amount <= 0) {
        return null; 
    }
    const newExpense = { id: Date.now(), name, amount: parseFloat(amount) };
    expenseList.push(newExpense);
    return newExpense;
}

// Function 2: Calculate the total
function calculateTotal(expenseList) {
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
        total += expenseList[i].amount;
    }
    return total;
}

// Universal Export Pattern
// If we are in Node.js (Testing), export the module.
if (typeof module !== 'undefined') {
    module.exports = { addExpense, calculateTotal };
}

// Export these functions so Jest can test them
module.exports = { addExpense, calculateTotal };



// src/logic.js

// Function 1: Add an expense to the list (Updated for Category)
function addExpense(expenseList, name, amount, category) {
    // Validation: Name must exist, Amount must be positive
    if (!name || amount <= 0) {
        return null; 
    }
    // Default category to 'Other' if not provided
    const validCategory = category || 'Other';
    
    const newExpense = { 
        id: Date.now(), 
        name, 
        amount: parseFloat(amount), 
        category: validCategory 
    };
    
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

// Function 3: Remove an expense by ID
function removeExpense(expenseList, expenseId) {
    return expenseList.filter(item => item.id !== expenseId);
}

// Function 4: Filter by Category (New for Story 5)
function filterExpenses(expenseList, category) {
    if (category === 'All') {
        return expenseList;
    }
    return expenseList.filter(item => item.category === category);
}

// Universal Export
if (typeof module !== 'undefined') {
    module.exports = { addExpense, calculateTotal, removeExpense, filterExpenses };
}
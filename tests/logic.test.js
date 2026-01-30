// tests/logic.test.js
const { addExpense, calculateTotal } = require('../src/logic');
const { removeExpense } = require('../src/logic'); 

test('should add a valid expense to the list', () => {
    const list = [];
    addExpense(list, 'Coffee', 5.00);
    expect(list.length).toBe(1);
    expect(list[0].name).toBe('Coffee');
});

test('should not add an expense with invalid data', () => {
    const list = [];
    const result = addExpense(list, '', -10); // Invalid input
    expect(result).toBe(null);
    expect(list.length).toBe(0);
});

test('should calculate the total correctly', () => {
    const list = [
        { name: 'Coffee', amount: 5 },
        { name: 'Lunch', amount: 15 }
    ];
    const total = calculateTotal(list);
    expect(total).toBe(20);
});

test('should remove an expense by ID', () => {
    let list = [
        { id: 1, name: 'Coffee', amount: 5 },
        { id: 2, name: 'Lunch', amount: 15 }
    ];
    
    // We expect a removeExpense function to exist (even if it doesn't yet)
    
    // Act: Remove the item with ID 1
    list = removeExpense(list, 1);
    
    // Assert
    expect(list.length).toBe(1);
    expect(list[0].name).toBe('Lunch');
});

test('should add an expense with a category', () => {
    const list = [];
    // We expect addExpense to now accept a 4th argument: 'Food'
    addExpense(list, 'Burger', 10, 'Food'); 
    expect(list[0].category).toBe('Food');
});

test('should filter expenses by category', () => {
    const list = [
        { id: 1, name: 'Burger', amount: 10, category: 'Food' },
        { id: 2, name: 'Taxi', amount: 20, category: 'Transport' }
    ];
    
    // We expect a filterExpenses function to exist
    const { filterExpenses } = require('../src/logic');
    
    const foodOnly = filterExpenses(list, 'Food');
    expect(foodOnly.length).toBe(1);
    expect(foodOnly[0].name).toBe('Burger');
});

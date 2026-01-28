// tests/logic.test.js
const { addExpense, calculateTotal } = require('../src/logic');

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
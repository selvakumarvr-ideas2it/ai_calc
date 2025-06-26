const { add, subtract } = require('./calculator');

describe('Calculator add function', () => {
  test('adds two positive numbers: 2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two negative numbers: -2 + -3 = -5', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds decimal numbers: 2.5 + 3.1 = 5.6', () => {
    expect(add(2.5, 3.1)).toBeCloseTo(5.6);
  });

  test('throws an error for non-numeric first argument', () => {
    expect(() => add('2', 3)).toThrow('Inputs must be numbers.');
  });

  test('throws an error for non-numeric second argument', () => {
    expect(() => add(2, '3')).toThrow('Inputs must be numbers.');
  });

  test('subtracts two numbers: 5 - 2 = 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('throws an error for non-numeric first argument in subtract', () => {
    expect(() => subtract('5', 2)).toThrow('Inputs must be numbers.');
  });

  test('throws an error for non-numeric second argument in subtract', () => {
    expect(() => subtract(5, '2')).toThrow('Inputs must be numbers.');
  });
}); 
const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(6);
    });

    test('adds a positive and a negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('adds two negative numbers', () => {
      expect(add(-3, -7)).toBe(-10);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(subtract(10, 4)).toBe(7);
    });

    test('subtracts resulting in a negative value', () => {
      expect(subtract(4, 10)).toBe(-6);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('multiplies two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('divides resulting in a decimal', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });
});

const express = require('express');
const { add, subtract, multiply, divide } = require('../calculator');

const router = express.Router();

router.post('/calculate', (req, res) => {
  const { a, b, operation } = req.body;

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  let result;

  try {
    switch (operation) {
      case 'add':
        result = add(numA, numB);
        break;
      case 'subtract':
        result = subtract(numA, numB);
        break;
      case 'multiply':
        result = multiply(numA, numB);
        break;
      case 'divide':
        result = divide(numA, numB);
        break;
      default:
        return res.status(400).json({ error: 'Invalid operation' });
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  return res.json({ result });
});

module.exports = router;

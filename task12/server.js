const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Helper to format result (remove trailing zeros, keep up to 6 decimals)
function formatNumber(n) {
  if (!Number.isFinite(n)) return String(n);
  if (Number.isInteger(n)) return n.toString();
  return parseFloat(n.toFixed(6)).toString();
}

app.post('/calculate', (req, res) => {
  const { a, b, op } = req.body;

  // Robust parse (trim strings to tolerate accidental spaces)
  const numA = parseFloat(String(a ?? '').trim());
  const numB = parseFloat(String(b ?? '').trim());

  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return res.status(400).json({ error: 'Please enter valid numbers for both inputs.' });
  }

  let result;
  switch (op) {
    case 'add':
      result = numA + numB;
      break;
    case 'subtract':
      result = numA - numB;
      break;
    case 'multiply':
      result = numA * numB;
      break;
    case 'divide':
      if (numB === 0) return res.status(400).json({ error: 'Cannot divide by zero.' });
      result = numA / numB;
      break;
    default:
      return res.status(400).json({ error: 'Unknown operation.' });
  }

  return res.json({
    result: formatNumber(result),
    operation: op,
    inputs: { a: numA, b: numB }
  });
});

app.listen(PORT, () => {
  console.log(`Kids Calculator running: http://localhost:${PORT}`);
});

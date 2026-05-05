async function calculate(operation) {
  const numA = document.getElementById('numA').value;
  const numB = document.getElementById('numB').value;
  const resultEl = document.getElementById('result');

  if (numA === '' || numB === '') {
    resultEl.textContent = 'Please enter both numbers';
    resultEl.className = 'result error';
    return;
  }

  try {
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ a: numA, b: numB, operation }),
    });

    const data = await response.json();

    if (data.error) {
      resultEl.textContent = `Error: ${data.error}`;
      resultEl.className = 'result error';
    } else {
      resultEl.textContent = `Result: ${data.result}`;
      resultEl.className = 'result';
    }
  } catch (err) {
    resultEl.textContent = 'Network error. Please try again.';
    resultEl.className = 'result error';
  }
}

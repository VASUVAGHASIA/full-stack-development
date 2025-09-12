// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('calcForm');
  const aEl = document.getElementById('a');
  const bEl = document.getElementById('b');
  const opEl = document.getElementById('op');
  const msg = document.getElementById('message');
  const resultCard = document.getElementById('resultCard');
  const resultText = document.getElementById('resultText');
  const clearBtn = document.getElementById('clearBtn');

  function showMessage(text, type = 'error') {
    msg.textContent = text;
    msg.className = `message ${type}`;
  }

  function clearUI() {
    msg.textContent = '';
    msg.className = '';
    resultCard.hidden = true;
    resultText.textContent = '';
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearUI();
    const a = aEl.value;
    const b = bEl.value;
    const op = opEl.value;

    // Quick client-side check
    if (!a.trim() || !b.trim()) {
      showMessage('Both numbers are required.', 'error');
      return;
    }

    // Send to server
    try {
      const res = await fetch('/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ a, b, op })
      });

      const data = await res.json();

      if (!res.ok) {
        showMessage(data.error || 'Server error', 'error');
        return;
      }

      // success
      const symbol = { add: '+', subtract: '−', multiply: '×', divide: '÷' }[op] || '?';
      resultText.textContent = `${Number(data.inputs.a)} ${symbol} ${Number(data.inputs.b)} = ${data.result}`;
      resultCard.hidden = false;
      showMessage('Calculation successful!', 'success');
    } catch (err) {
      showMessage('Network error. Try again.', 'error');
      console.error(err);
    }
  });

  clearBtn.addEventListener('click', () => {
    form.reset();
    clearUI();
  });
});

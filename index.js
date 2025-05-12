 function toggleSign(buttonId) {
      const btn = document.getElementById(buttonId);
      btn.addEventListener('click', () => {
        btn.textContent = btn.textContent.trim() === '+' ? '−' : '+';
      });
    }

    // Викликаємо функцію для кожної кнопки
    toggleSign('btn1');
    toggleSign('btn2');
    toggleSign('btn3');
    toggleSign('btn4');
    toggleSign('btn5');
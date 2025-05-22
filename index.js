document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-btn');
    const totalElement = document.getElementById('totalSum');
    let totalItems = 0;
    let totalPrice = 0;
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const priceText = card.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            totalItems++;
            totalPrice += price;
            totalElement.textContent = Кількість товарів: ${totalItems} Загальна сума: $${totalPrice.toFixed(2)};
        });
    });
});





  document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', () => {
      document.querySelectorAll('.category').forEach(cat => {
        cat.style.opacity = "0.35";
        cat.style.border = "none";
      });
      category.style.opacity = "1";
      category.style.border = "2px solid #6C5FBC";
    });
  });
  const searchInput = document.querySelector('.search-box input');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    console.log("Пошук:", query);
  });
  const applyBtn = document.querySelector('.apply-btn');
  applyBtn.addEventListener('click', () => {
    alert("Фільтри застосовано!");
  });
  const foodBtn = document.querySelector('.food-btn');
  const restBtn = document.querySelector('.rest-btn');
  foodBtn.addEventListener('click', () => {
    foodBtn.style.background = '#6C5FBC';
    foodBtn.style.color = 'white';
    restBtn.style.background = '#F3F5F6';
    restBtn.style.color = '#6C5FBC';
  });
  restBtn.addEventListener('click', () => {
    restBtn.style.background = '#6C5FBC';
    restBtn.style.color = 'white';
    foodBtn.style.background = '#F3F5F6';
    foodBtn.style.color = '#6C5FBC';
  });




function toggleSign(buttonId) {
      const btn = document.getElementById(buttonId);
      btn.addEventListener('click', () => {
        btn.textContent = btn.textContent.trim() === '+' ? '-' : '+';
      });
    }
    toggleSign('btn1');
    toggleSign('btn2');
    toggleSign('btn3');
    toggleSign('btn4');
    toggleSign('btn5');





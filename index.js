 function toggleSign(buttonId) {
      const btn = document.getElementById(buttonId);
      btn.addEventListener('click', () => {
        btn.textContent = btn.textContent.trim() === '+' ? '−' : '+';
      });
    }
    toggleSign('btn1');
    toggleSign('btn2');
    toggleSign('btn3');
    toggleSign('btn4');
    toggleSign('btn5');




    let totalCount = 0;
    let totalPrice = 0;
    function addToTotal(btnId, resId) {
      const button = document.getElementById(btnId);
      const result = document.getElementById(resId);
      button.addEventListener('click', () => {
        let count = parseInt(result.textContent);
        totalCount += 1;
        totalPrice += count;
        document.getElementById('totalSum').textContent = `Кількість товарів: ${totalCount} | Загальна сума: ${totalPrice}`;
      });
    }

    addToTotal("DishBtn", "appleRes");
    addToTotal("DishBtn", "bananaRes");
    addToTotal("DishBtn", "cherryRes");
    addToTotal("DishBtn", "dateRes");
    addToTotal("DishBtn", "figRes");
    addToTotal("DishBtn", "grapeRes");
    addToTotal("DishBtn", "kiwiRes");
    addToTotal("DishBtn", "lemonRes");








    
// Категорії
const categoryButtons = document.querySelectorAll('.category-btn');
let selectedCategory = null;

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.category;
  });
});

// Сортування
const sortButtons = document.querySelectorAll('.sort-btn');
let selectedSort = null;

sortButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    sortButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSort = btn.dataset.sort;
  });
});

// Ціна
const priceSlider = document.getElementById('price-slider');
const priceValue = document.getElementById('price-value');

priceSlider.addEventListener('input', () => {
  priceValue.textContent = $${priceSlider.value};
});

// Apply кнопка
document.getElementById('apply-btn').addEventListener('click', () => {
  alert(Category: ${selectedCategory  'None'}\nSort: ${selectedSort  'None'}\nPrice: $${priceSlider.value});
});
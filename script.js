  document.addEventListener('DOMContentLoaded', function() {
    const cart = {
      items: 0,
      total: 0
    };
    const cartWidget = document.getElementById('cart-widget');
    cartWidget.style.display = 'block';
    document.querySelectorAll('.add-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const priceElement = this.closest('.card').querySelector('.price');
        const price = parseFloat(
          priceElement.textContent.replace('$', '') + 
          priceElement.querySelector('.price-dishes').textContent
        );
        cart.items++;
        cart.total += price;
        document.getElementById('cart-count').textContent = cart.items;
        document.getElementById('cart-total').textContent = cart.total.toFixed(2);
        this.textContent = '✓';
        this.style.background = '#4CAF50';
        setTimeout(() => {
          this.textContent = '+';
          this.style.background = '';
        }, 500);
      });
    });
  });



document.addEventListener('click', function(event) {
  const categoriesContainer = document.querySelector('.categories');
  const allCategories = document.querySelectorAll('.categories li');
  const allTexts = document.querySelectorAll('.categories li p');
  const clickedOnCategory = event.target.closest('.categories li');
  if (clickedOnCategory) {
    allCategories.forEach(cat => cat.classList.remove('selected'));
    allTexts.forEach(text => text.classList.remove('selected-text'));
    clickedOnCategory.classList.add('selected');
    clickedOnCategory.querySelector('p').classList.add('selected-text');
  } else if (!event.target.closest('.categories')) {
    allCategories.forEach(cat => cat.classList.remove('selected'));
    allTexts.forEach(text => text.classList.remove('selected-text'));
  }
});
document.querySelector('.apply-btn').addEventListener('click', function() {
  document.querySelectorAll('.category').forEach(item => {
    item.style.border = 'none';
  });
});
document.querySelector('.apply-btn').addEventListener('click', function() {
  const toast = document.getElementById('food-toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
});



document.addEventListener("DOMContentLoaded", () => {
      const buttons = document.querySelectorAll(".toggle-button");
      buttons.forEach(button => {
        button.addEventListener("click", () => {
          button.textContent = button.textContent === "+" ? "-" : "+";
        });
      });
    });
    
















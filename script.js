const addButtons = document.querySelectorAll('.add-btn1');
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
            totalElement.textContent = 'Кількість товарів: ${totalItems} Загальна сума: $${totalPrice.toFixed(2)}';
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
    














document.addEventListener("DOMContentLoaded", function () {
  // Обработчики событий для кнопок "Добавить в корзину" на странице рецептов
  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const counterContainer = this.nextElementSibling;
      const quantityInput = counterContainer.querySelector(".quantity-input");
      const productName = this.parentNode.querySelector("p").textContent; // Получаем название продукта
      const productPrice = 500; // Заглушка для цены, в реальном коде это должно быть динамическое значение

      // Показываем счетчик
      this.style.display = "none";
      counterContainer.style.display = "flex";

      // Обновляем локальное хранилище
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productIndex = cart.findIndex((item) => item.name === productName);

      if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
      } else {
        cart.push({
          name: productName,
          price: productPrice,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();

      // Анимация кнопки
      this.innerHTML = '<i class="fas fa-check"></i> Добавлено';
      this.style.backgroundColor = "#4CAF50";

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-shopping-cart"></i> Добавить';
        this.style.backgroundColor = "";
      }, 1500);
    });
  });

  // Функция для обновления количества товаров в корзине
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    cart.forEach((item) => {
      totalItems += item.quantity;
    });
    document.querySelector(".cart-count").textContent = totalItems;
  }

  // Вызов функции при загрузке страницы для инициализации счетчика
  updateCartCount();

  // Обработчики событий для кнопок увеличения/уменьшения количества
  document.querySelectorAll(".counter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const input = this.parentNode.querySelector(".quantity-input");
      const productName = input
        .closest(".recipe-product")
        .querySelector("p").textContent;

      if (this.classList.contains("plus-btn")) {
        input.value = parseInt(input.value) + 1;
      } else if (this.classList.contains("minus-btn")) {
        if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
        } else {
          const addBtn =
            input.closest(".counter-container").previousElementSibling;
          addBtn.style.display = "block";
          input.closest(".counter-container").style.display = "none";
        }
      }

      // Обновляем локальное хранилище
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const productIndex = cart.findIndex((item) => item.name === productName);

      if (productIndex !== -1) {
        cart[productIndex].quantity = parseInt(input.value);
        if (cart[productIndex].quantity === 0) {
          cart.splice(productIndex, 1);
        }
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
    });
  });
});

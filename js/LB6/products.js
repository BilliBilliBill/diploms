async function GetResponse(searchQuery = "") {
  const url = searchQuery
    ? `https://dummyjson.com/products/search?q=${searchQuery}`
    : "https://dummyjson.com/products?limit=30&skip=136&&select=images,title,description,price&sortBy=price&order=asc";

  let response = await fetch(url);
  let content = await response.json();
  let products = content.products || [];
  let list = document.querySelector("#product-container");
  let resultCount = document.querySelector("#result-count");

  list.innerHTML = "";
  resultCount.textContent = `Найдено товаров: ${products.length}`;
  if (products.length === 0) {
    list.innerHTML = "<p>Ничего не найдено</p>";
  }

  for (let product of products) {
    list.innerHTML += `
<a href="../LB7/index.html?id=${product.id}" class='card'>
          <img class="container_card_img"
               src="${product.images[0]}" 
               alt="${product.title}">
          <div class="pricetitle">
            <h3 class="container_card_h">${product.title}</h3>
            <h5 class="container_card_h5">${product.price} $</h5>
          </div>
          <h4 class="container_card_h4">${product.description}</h4>
        </a>
      `;
  }
}
document
  .querySelector("#search-input")
  .addEventListener("input", function (event) {
    const searchQuery = event.target.value.trim();
    GetResponse(searchQuery);
  });

GetResponse();

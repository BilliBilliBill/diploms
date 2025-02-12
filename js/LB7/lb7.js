const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

async function ProductDetails(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

  const productDetails = document.querySelector("#product-details");
  productDetails.innerHTML = `
          <h1>${product.title}</h1>
          <img src="${product.images[0]}" alt="${product.title}">
          <p><strong>Цена:</strong> ${product.price} $</p>
          <p>${product.description}</p>
        `;
}

if (productId) {
  ProductDetails(productId);
} else {
  document.querySelector("#product-details").innerHTML =
    "<p>ID товара не указан</p>";
}

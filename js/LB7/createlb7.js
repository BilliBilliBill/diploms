document
  .getElementById("product-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let price = parseFloat(document.getElementById("price").value);
    let images = document.getElementById("images").value;
    let description = document.getElementById("description").value;

    let newProduct = {
      title,
      images,
      price,
      description,
    };

    let response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      let responseOk = await response.json();
      document.getElementById("message").textContent =
        "Товар добавлен: " + JSON.stringify(responseOk);
    } else {
      let errorrResponse = await response.json();
      document.getElementById("message").textContent =
        "Товар не добавлен: " + errorrResponse.message;
    }
  });

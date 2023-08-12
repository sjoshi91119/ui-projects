async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const desc = data.product.description;
    const price = data.product.price;

    console.log("description: " + desc);
    console.log("price: " + price);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

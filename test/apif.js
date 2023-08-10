// Using the Fetch API to fetch data from JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((Response) => Response.json())
  .then((data) => {
    const desc = data.title;
    const price = data.price;

    console.log("description:" + desc);
    console.log("price:" + price);
  })
  .catch((error) => {
    console.log("error:" + error);
  });

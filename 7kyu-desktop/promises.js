async function myFunction() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Couuld not get products: ${error}`);
  }
}

const promise = myFunction();
promise.then((data) => console.log(data[0].name));

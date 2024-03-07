let products = [
  {
    id: 1,
    title: "Product 1",
    category: "electronics",
    price: 5000,
    description: "This is description and Product 1",
    discount: {
      type: "other",
    },
  },
  {
    id: 2,
    title: "Product 2",
    category: "cloths",
    price: 2000,
    description: "This is description and Product 2",
    discount: {
      type: "a1",
    },
  },
  {
    id: 3,
    title: "Product 3",
    category: "electronics",
    price: 3000,
    description: "This is description and Product 3",
    discount: {
      type: "a2",
    },
  },
];

//find the array of id ie  output must be [1,2,3]

let ids = products.map((value, i) => {
  return value.id; //don't use back tick(``) cuz output will be in strings
});
console.log(ids);

//find the array of title ie output must be ["Product 1", "Product 2", "Product 3"]

let titles = products.map((value, i) => {
  return `${value.title}`;
});
console.log(titles);

//find the array of category
let categories = products.map((value, i) => {
  return `${value.category}`;
});
console.log(categories);

//find the array of type
let types = products.map((value, i) => {
  return value.discount.type;
});
console.log(types);

//find the array of price where each price is multiplied by 3  output must be [ 15000,6000,9000]

let prices = products.map((value, i) => {
  return value.price * 3;
});
console.log(prices);

//find those array  whose price is <= 3000 => [
let isGreaterThan3000 = products.filter((value, i) => {
  if (value.price <= 3000) return true;
});
console.log(isGreaterThan3000);

//find those array of  title whose price is >= 3000=>["product 1",product 3]
//if filter and map are used simultaneously, always use filter first
let product3000 = products
  .filter((value, i) => {
    if (value.price >= 3000) return true;
  })
  .map((value, i) => {
    return value.title;
  });
console.log(product3000);

//find those array of title whose price does not equal to 5000 ==> ["product 2","product 3"]

let products5000 = products
  .filter((value, i) => {
    if (value.price !== 5000) return true;
  })
  .map((value, i) => {
    return value.title;
  });
console.log(products5000);

//find those array of category whose price equal to 3000 ====> ["electronics"]
//map is used to modify input of elements where as filters is used to filter elements of input
let products3000 = products
  .filter((value, i) => {
    if (value.price === 3000) return true;
  })
  .map((value, i) => {
    return value.category;
  });
console.log(products3000);

const products = [
    { id: 1, name: 'T-shirt', price: 500, category: 'clothing' },
    { id: 2, name: 'Laptop', price: 70000, category: 'electronics' },
    { id: 3, name: 'Shoes', price: 2000, category: 'clothing' },
    { id: 4, name: 'Mobile Phone', price: 30000, category: 'electronics' },
    { id: 5, name: 'Watch', price: 3000, category: 'accessories' }
  ];

  const filter = products.filter((product) => {
    const filterProduct = product.price >= 500 && product.category === "accessories";
    return filterProduct;
});
  console.log(filter)
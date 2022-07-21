let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

const newProduct = { name: 'MousePad', price: 100, quantity: 1, colors: ['pink'] };

const addNewProduct = (newProduct) => products.push(newProduct);

const removeOutStock = (products) => {
    return products.filter((product) => product.quantity !== 0);
}

const allStock = (products) => {
    return products.reduce((acc, products) => acc += products.quantity, 0)
}

const mostExpensiveProducts = (products) => {
    return products.filter((product) => product.price > 50);
}

const allProductsWithO = (products) => {
    return products.filter((product) => product.name.includes('o'));
}

console.log('removed out Stock:',removeOutStock(products));
console.log('all Stock:', allStock(products));
console.log('most expensive products:', mostExpensiveProducts(products));
console.log('products with o:', allProductsWithO(products));

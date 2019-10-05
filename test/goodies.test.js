const Product = require('../src/goodies');
test ("creates a product", () => {
    const item = new Product('brownie', 0.65);
    expect(item.name).toBe('brownie');
    expect(item.price).toBe(0.65);
})
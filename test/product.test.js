const Product = require('../src/product');
test("creates a Product object", () => {
    const brownie = new Product(4, 0.65);
    expect(brownie.quantity).toBe(4);
    expect(brownie.price).toBe(0.65);
})
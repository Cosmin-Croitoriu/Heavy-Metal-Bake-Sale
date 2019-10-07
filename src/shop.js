class BakeShop {

    constructor() {
        this.b = new Product(48, 0.65),
        this.m = new Product(35, 1),
        this.c = new Product(24, 1.35),
        this.w = new Product(30, 1.50)
    }

    takeOrder(purchase) {
        var order = purchase.split(',');
        checkStock(order);
    }

    checkStock(order) {
        for (var i = 0; i < order.length; i++) {
            if ([i] > this) {
                stock[i] -= 1;
            }else {
                return "Not enough stock.";
            }
        }
        calculateOrderPrice(order);

    }

    calculateOrderPrice(order){
        for (var i = 0; i < order.length; i++) {
            var total = 0;
            if(order[i] === product.name){
               total += 
            }
        
        }

    }


    // constructor(items, quantity) {
    //     this.items = items
    //     this.quantity = quantity
    // }

    // storeProducts(itemList) {

    //    return itemList[this.item]
    // }
}

module.exports = BakeShop; 
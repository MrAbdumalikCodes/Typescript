"use strict";
var deliveryStatus;
(function (deliveryStatus) {
    deliveryStatus["collecting"] = "collecting";
    deliveryStatus["delivered"] = "delivered";
    deliveryStatus["returned"] = "returned";
})(deliveryStatus || (deliveryStatus = {}));
class Product {
    constructor(id) {
        this.id = id;
        this.status = deliveryStatus.collecting;
        this.deliveryTime = new Date();
    }
    time() {
        console.log(`${new Date().getTime() - this.deliveryTime.getTime() + 2}`);
    }
    delivered() {
        if (this.status === 'collecting') {
            throw new Error('Products have been successfully delivered');
        }
        this.status = deliveryStatus.returned;
    }
}
let myProduct = new Product(0);
console.log(myProduct);
myProduct.time();
myProduct.delivered();

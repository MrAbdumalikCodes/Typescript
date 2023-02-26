enum deliveryStatus{
    collecting = "collecting",
    delivered = "delivered",
    returned = "returned"
} 
class Product {
    id:number;
    status: string;
    deliveryTime: Date
    constructor(id:number,productStatus: string){
        this.id = id
        this.status = productStatus
        this.deliveryTime = new Date() 
    }
    time(){
        console.log(`${new Date().getTime() - this.deliveryTime.getTime() + 2}`);
        
    }
    delivered(){
        if(this.status === 'collecting'){
            console.log("The product is on its way 😴");
        }else if(this.status === 'returned'){
            console.log('An error occurred, the money has been refunded 😢');
        }else if(this.status === 'delivered'){
            console.log('Products have been successfully delivered 😉');
        }
    }
}
let myProduct = new Product(2,'collecting')
console.log(myProduct);
myProduct.time()
myProduct.delivered()

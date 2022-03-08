//Generic for Function
function genericFuntion(argument) {
    var arrayT = [];
    arrayT.push(argument);
    return arrayT;
}
const arrayNumber = genericFuntion(16);
console.log(arrayNumber[0]);
console.log(typeof arrayNumber[0]);
const arrayString = genericFuntion("TQHuy");
console.log(arrayString[0]);
console.log(typeof arrayString[0]);
//Generic for Class
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
const product1 = new Product("ID1", "Product1", 20);
const product2 = new Product(12, "Product2", "20 USD");
const product3 = new Product("12", 23, false);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();

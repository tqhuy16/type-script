//Generic for Function
function genericFuntion<T>(argument: T): T[] {
  var arrayT = []
  arrayT.push(argument)
  return arrayT
}

const arrayNumber = genericFuntion<number>(16)
console.log(arrayNumber[0])
console.log(typeof arrayNumber[0])

const arrayString = genericFuntion<string>("TQHuy")
console.log(arrayString[0])
console.log(typeof arrayString[0])

//Generic for Class

class Product<A, B, C> {
  id: A;
  name: B;
  price: C;

  constructor(id: A, name: B, price: C){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  showProductInfo() {
    console.log(`${this.id} - ${this.name} - ${this.price}`)
  }
}

const product1 = new Product<string, string, number>("ID1", "Product1", 20)
const product2 = new Product<number, string, string>(12, "Product2", "20 USD")
const product3 = new Product<string, number, boolean>("12", 23, false)

product1.showProductInfo()
product2.showProductInfo()
product3.showProductInfo()
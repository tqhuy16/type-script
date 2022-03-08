interface Food {
  name: string;
  calories: number;
}

function speak(food: Food): void {
  console.log(`our ${food.name} has ${food.calories} calories`)
}

speak({calories: 250, name: "rice"})

/**----------------------------------- */
interface People {
  name: string;
  eat(): void;
  sleep(): void;
}
interface Bird {
  fly(): void
}

class Machine {
  calculate(x: number, y: number): number {
    return x + y;
  }
}
class Superman extends Machine implements People, Bird {
  name: string;
  constructor(name: string){
    super()
    this.name = name;
  }
  eat(): void {
    console.log(`${this.name} eat`)
  }
  sleep(): void {
    console.log(`${this.name} sleep`)
  }
  fly(): void {
    console.log(`${this.name} fly`)
  }
}

let huy: Superman = new Superman('huy');
huy.eat()
huy.sleep()
huy.fly()
console.log(huy.calculate(2, 3))
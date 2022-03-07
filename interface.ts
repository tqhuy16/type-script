interface Food {
  name: string;
  calories: number;
}

function speak(food: Food): void {
  console.log(`our ${food.name} has ${food.calories} calories`)
}

speak({calories: 250, name: "rice"})
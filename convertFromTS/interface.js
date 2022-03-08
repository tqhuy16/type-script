function speak(food) {
    console.log(`our ${food.name} has ${food.calories} calories`);
}
speak({ calories: 250, name: "rice" });

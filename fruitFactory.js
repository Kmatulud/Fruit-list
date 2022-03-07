const FruitFactoryFunction = () => {
    const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
    const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
    // fruitNames.sort()
    // fruits.sort()

    let fruitsAndEmos = [];
    const displayFruitWithEmo = () => {
        fruitsAndEmos = fruitNames.map((fruit)=>{
            let getFruitIndex = fruitNames.indexOf(fruit)
            return fruit + fruits[getFruitIndex];
        })
        return fruitsAndEmos;
    }
    return{
        displayFruitWithEmo,
    }
}
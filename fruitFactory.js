const FruitFactoryFunction = () => {
    let fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
    let fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
    let fruitAdded;
    let emoAdded;

    const addFruit = (fruit) => {
        fruitAdded = fruit;
    }
    
    const getFruit = () =>{
        return fruitAdded;
    }
    const addEmo = (emo) => {
        emoAdded = emo;
    }
    
    const getEmo = () =>{
        return fruitAdded;
    }

    let fruitsAndEmos = [];
    
    const displayFruitWithEmo = () => {
        fruitsAndEmos = fruitNames.map((fruit)=>{
            let getFruitIndex = fruitNames.indexOf(fruit);
            return fruit + fruits[getFruitIndex];
        })
        return fruitsAndEmos.sort();
    }    


const addFruitEmo = () => {

}

 
const searchFruit = (searchItem) => {
    const match = fruitsAndEmos.find(el => el.toUpperCase().indexOf(searchItem) > -1)
    return match;
}

    return{
        displayFruitWithEmo,
        addFruitEmo,
        searchFruit,
        addFruit,
        getFruit,
        addEmo,
        getEmo
    }


}
const FruitFactoryFunction = () => {
    let fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
    let fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

    let fruitsAndEmos = [];
    const displayFruitWithEmo = () => {
        fruitsAndEmos = fruitNames.map((fruit)=>{
            let getFruitIndex = fruitNames.indexOf(fruit);
            return fruit + fruits[getFruitIndex];
        })
        return fruitsAndEmos.sort();
    }    
    
    const addFruitEmo = (fruit, emo) => {
        if (fruit != "" && emo != "") {
            //inserting values into the designated arrays, if boxes are not empty and displaying a success message.
            fruitNames.push(fruit);
            fruits.push(emo);
            classList.add("show");
            setTimeout(() => {
                // hides element 
               classList.remove("show");
            }, 5000);
        } else {
            err.classList.add("show");
            setTimeout(() => {
                // hides element 
                classList.remove("show");
            }, 5000);
        }
      
    }

 
const searchFruit = (searchItem) => {
    const match = fruitsAndEmos.find(el => el.toUpperCase().indexOf(searchItem) > -1)
    return match;
}

    return{
        displayFruitWithEmo,
        addFruitEmo,
        searchFruit
    }


}
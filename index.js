let addFruitElem = document.querySelector("#add-fruits");
let addEmoElem = document.querySelector("#add-emojis");
let submitElem = document.querySelector(".submitBtn");

const fruitFactoryFunction = FruitFactoryFunction();

// Fuction that creates a combined map
const displayFruits = () => {
    let fruitNames = fruitFactoryFunction.displayFruitWithEmo();
    localStorage.setItem("fruitNames", JSON.stringify(fruitNames));
}
displayFruits()



const viewFruits = () => {
    const newFruits = JSON.parse(localStorage.getItem("fruitNames"));
    const list = document.querySelector(".list");

     for (let x = 0; x < newFruits.length; x++) {
    console.log(newFruits[x]);

    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newFruits[x]);
    listItem.appendChild(listValue);

    list.appendChild(listItem);
    }
}

 viewFruits();


const addFruits = () => {
    let addFruitElems = addFruitElem.value
    let addEmoElems = addFruitElem.value

    fruitNames.push(addFruitElems);
    fruits.push(addEmoElems);
    return false;
}
function findFruit(){

}
// console.log(fruitNames);
// window.addEventListener("load", displayFruits);
if(submitElem){
    submitElem.addEventListener('click', addFruits, false);
  }
// submitElem.addEventListener("click", addFruits);

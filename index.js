let addFruitElem = document.querySelector("#add-fruits");
let addEmoElem = document.querySelector("#add-emojis");
let submitElem = document.querySelector(".submitBtn");

//Array 1
const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];

//Array 2
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];
const myMap = new Map(); //Defines a new Map

// Fuction that creates a combined map
const makeNewMap = (fruitNames, fruits) => { //Function takes arrays a parameters
    const myMap = new Map(); //Defines a new Map
    for (let i = 0; i < fruitNames.length; i++) {
        myMap.set(fruitNames[i], fruits[i]) ; //Looping through Array 1  and creating a new object from it with Array 1 & Array 2 using only the index of Array 1.
    }

    //Sort the new mapped object by key using the sort method. This will take all values entered in myMap.
    const sortedMap = new Map([...myMap.entries()].sort());

    localStorage.setItem("fruitNames", myMap);

}

 function viewFruits(){
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


function addFruits(){
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

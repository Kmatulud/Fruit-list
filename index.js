let addFruitElem = document.querySelector("#add-fruits");
let addEmoElem = document.querySelector("#add-emojis");
let submitElem = document.querySelector(".submitBtn");

const fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
const fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];


function displayFruits(){

    var mappedFruits = fruitNames.map(function(fruity){
        return "<li>" + fruity + "</li>";
    })

    var mappedEmo = fruits.map(function(emo){
        return emo;
    })
    localStorage.setItem("fruitNames", mappedFruits.sort());
    localStorage.setItem("fruitEmo", mappedEmo.sort());


    // localStorage.setItem("fruitEmo",fruits);

    // let b = localStorage.getItem("fruitEmo");
    let listItem = document.querySelector("li");
    // if (localStorage.getItem("fruitEmo") && localStorage.getItem("fruitNames")){
        listItem.innerHTML = localStorage.getItem("fruitNames") + localStorage.getItem("fruitEmo");
    // }
}
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
window.addEventListener("load", displayFruits);
if(submitElem){
    submitElem.addEventListener('click', addFruits, false);
  }
// submitElem.addEventListener("click", addFruits);

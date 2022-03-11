let addFruitElem = document.querySelector("#add-fruits");
let addEmoElem = document.querySelector("#add-emojis");
let submitElem = document.querySelector(".submitBtn");
let searchbox = document.querySelector("#search");
const searchIcon = document.querySelector(".fa-magnifying-glass");

let fruitNames = ["Grapes", "Melon", "Watermelon", "Tangerine", "Lemon", "Banana", "Pineapple", "Mango", "Red Apple"];
let fruits = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎"];

const fruitFactoryFunction = FruitFactoryFunction();

const addFruits = () => {
    //Getting values from HTML input boxes
    const addFruit = addFruitElem.value;
    const addEmoji = addEmoElem.value;
    const err = document.querySelector(".fail");
    const pass = document.querySelector(".success");

    if (addFruit != "" && addEmoji != "") {
        //inserting values into the designated arrays, if boxes are not empty and displaying a success message.
        fruitNames.push(addFruit);
        fruits.push(addEmoji);
        pass.classList.add("show");
        setTimeout(() => {
            // hides element 
            pass.classList.remove("show");
        }, 5000);
    } else {
        err.classList.add("show");
        setTimeout(() => {
            // hides element 
            err.classList.remove("show");
        }, 5000);
    }

}

// addFruits();

const displayFruits = () => {
    let fruitNames = fruitFactoryFunction.displayFruitWithEmo();
    localStorage.setItem("fruitNames", JSON.stringify(fruitNames));
}
displayFruits()



const viewFruits = () => {
    const newFruits = JSON.parse(localStorage.getItem("fruitNames"));
    const list = document.querySelector(".list");

    for (let x = 0; x < newFruits.length; x++) {
    const listItem = document.createElement("li");
    const listValue = document.createTextNode(newFruits[x]);
    listItem.appendChild(listValue);

    list.appendChild(listItem);
    }
}

 viewFruits();



function searchFruits (){
    // Declare variables
    const filter = searchbox.value.toUpperCase(); //Turns everything to uppercase, to avoid case sensitivity
    const ul = document.querySelector(".list"); //List parent
    const li = ul.getElementsByTagName("li"); //List Items (child of UL)

  // Loop through all list items, and hide those who don't match the search query
  for ( let i = 0; i < li.length; i++) {
    const item = li[i];
    const txtValue = item.textContent || item.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// searchFruits();

submitElem.addEventListener("click", addFruits);
// searchIcon.addEventListener("click", searchFruits);


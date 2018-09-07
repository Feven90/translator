let spanishWords = {
    merry:"alegre", 
    christmas:"Navidad",
    and:"y",
    happy:"contento", 
    new:"nuevo",
    year:"año"
    }
    
let amharicWords = {
    merry:"ደስተኛ",
    christmas:"የገና በአል", 
    and:"እና",
    happy:"ደስተኛ",
    new:"አዲስ",
    year:"አመት"
    }
    
let italianWords = {
    merry:"allegro",
    christmass:"Natale", 
    and:"e",
    happy:"contento",
    new:"nuovo",
    year:"anno"
}

let spanishButton = document.getElementById("spanish");
spanishButton.addEventListener("click", () => {
    let userInput = document.getElementById("text").value;
    let splitUserInput = userInput.split(' ');
    // let phrase = '';
    
    for (let i = 0; i< userInput.length; i++){
        if(splitUserInput[i] === "merry"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.merry} `;
        }
    // console.log(userInput);
        if(splitUserInput[i] === "christmass"){
       
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.christmass} `;
        }
        if(splitUserInput[i] === "and"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.and} `;
        }
        if(splitUserInput[i] === "happy"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.happy} `;
        }
        if(splitUserInput[i] === "new"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.new} `;
        }
    if(splitUserInput[i] === "year"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.year} `;
        }
    }
})


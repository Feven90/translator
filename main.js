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
    christmas:"Natale", 
    and:"e",
    happy:"contento",
    new:"nuovo",
    year:"anno"
}

let spanishButton = document.getElementById("spanish");
spanishButton.addEventListener("click", () => {

    let userInput = document.getElementById("text").value;
    let splitUserInput = userInput.split(' ');
    for (let i = 0; i< splitUserInput.length; i++){
        if(splitUserInput[i] === "merry"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.merry} `;
        }
    // console.log(userInput);
        else if(splitUserInput[i] === "christmass"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.christmas} `;
        }
        else if(splitUserInput[i] === "and"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.and} `;
        }
        else if(splitUserInput[i] === "happy"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.happy} `;
        }
        else if(splitUserInput[i] === "new"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.new} `;
        }
    else if(splitUserInput[i] === "year"){
            document.getElementById("translatedWord").innerHTML += ` ${spanishWords.year} `;
        }
        else {
             document.getElementById("translatedWord").innerHTML += "Word not found in dictionary";
         }
    }
    clearTextBox();
})

let amharicButton = document.getElementById("amharic");
amharicButton.addEventListener("click", () => {
    let userInput = document.getElementById("text").value;
    let splitUserInput = userInput.split(' ');
    // let phrase = '';
    for (let i = 0; i< userInput.length; i++){
        if(splitUserInput[i] === "merry"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.merry} `;
        }
    // console.log(userInput);
        if(splitUserInput[i] === "christmass"){
       
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.christmas} `;
        }
        if(splitUserInput[i] === "and"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.and} `;
        }
        if(splitUserInput[i] === "happy"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.happy} `;
        }
        if(splitUserInput[i] === "new"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.new} `;
        }
    if(splitUserInput[i] === "year"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${amharicWords.year} `;
        }
    }
    clearTextBox();
})

let ItalicButton = document.getElementById("italic");
ItalicButton.addEventListener("click", () => {
    let userInput = document.getElementById("text").value;
    let splitUserInput = userInput.split(' ');
    // let phrase = '';
    for (let i = 0; i< userInput.length; i++){
        if(splitUserInput[i] === "merry"){
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.merry} `;
        }
    // console.log(userInput);
        if(splitUserInput[i] === "christmass"){
       
            phrase = document.getElementById("translatedWord").innerHTML += ` ${italianWords.christmas} `;
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
    clearTextBox();
})
let clearTextBox = ("click", () => {
    document.getElementById("text").value = '';
});
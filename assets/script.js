// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Mae Pena" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0;      // Gingerbread
let cc = 0;      // Chocolate Chip
let sugar = 0;   // Sugar Sprinkle

//selectors for each individual cookie 
let Gb0 = document.querySelector("#add-gb");
let CC0 = document.querySelector("#add-cc");
let sugar0 = document.querySelector("#add-sugar");



//create and append gingerbread quantity button
document.createElementById("#add-gb").addEventListener('click', function(){
    console.log('Ginger bread + button is clicked')
    Gingerbread = Gingerbread + 1;
    document.querySelector("#add-gb").textContent = Gingerbread;
})


//create and append chocolate chip quantity button
document.createElementById("#add-cc").addEventListener('click', function(){
let ChocolateChip = ChocolateChip + 1;
document.querySelector("#add-cc").textContent = ChocolateChip

})

//create and append sugar sprinkle cookie
let Sugar = document.createElementById("#add-sugar").addEventListener('click', function(){
    Sugar = Sugar + 1;
document.querySelector("#add-sugar").textContent = Sugar

})
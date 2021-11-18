// TODO: Declare any global variables we need
//1. setting the element grabbing the dom class or id
//2. add event listener to button
//3.add to condition to populate heads or tails.
//4. calc the percentage everytime button clicked
//step 1
let totalTails = 0;
let totalHeads = 0;
let percentHeads = 0;
let percentTails = 0;
let coinImg = document.getElementById('penny-img');
let heads  = document.getElementById('heads');
let hPercent = document.getElementById('heads-percent');
let tails = document.getElementById('tails');
let tPercent = document.getElementById('tails-percent');


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    
    //Adding the event listener to flip the coin
    document.getElementById("flip-btn").addEventListener('click', () => {
        let result = Math.random() < 0.5;
        if(result) {
            coinImg.src = './assets/images/penny-heads.jpg';
            percentHeads++;
        } else {
            coinImg.src = './assets/images/penny-tails.jpg';
            percentTails++;
        };

        //updating the DOM
        let totalAmount = percentHeads + percentTails;

        if (totalAmount > 0) {
            totalHeads = Math.floor((percentHeads / totalAmount) * 100);
            totalTails = Math.floor((percentTails / totalAmount) * 100);
        };
    
        heads.textContent = percentHeads;
        tails.textContent = percentTails;
        hPercent.textContent = `${totalHeads}%`;
        tPercent.textContent = `${totalTails}%`;
    
//clearing the score
document.getElementById('clear-btn').addEventListener('click', () =>{
    //resetting the score
     percentHeads = 0;
     percentTails = 0;

    let totalAmount = percentHeads + percentTails;

        if (totalAmount > 0) {
            totalHeads = Math.floor((percentHeads / totalAmount) * 100);
            totalTails = Math.floor((percentTails / totalAmount) * 100);
        };
    
        heads.textContent = percentHeads;
        tails.textContent = percentTails;
        hPercent.textContent = `${totalHeads}%`;
        tPercent.textContent = `${totalTails}%`;
});
});
    

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})
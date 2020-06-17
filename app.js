// Generating Random Numbers Between 1 and 6
const randomNum1 = Math.floor(Math.random() * 6) + 1;
const randomNum2 = Math.floor(Math.random() * 6) + 1;

// Selecting Elements
const h1 = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// Output
if (randomNum1 > randomNum2) {
    h1.innerText = "🚩Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
    h1.innerText = "Player 2 Wins!🚩";
} else {
    h1.innerText = "Draw!";
}

// Changing Images
img1.src = `images/dice${randomNum1}.png`;
img2.src = `images/dice${randomNum2}.png`;

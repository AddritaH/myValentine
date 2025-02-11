const yesMusic = new Audio("Thinking_Out_Loud.mp3");
const noMusic = new Audio("Rude.mp3");

window.onload = function() {  
    const noButton = document.getElementById("no");
    const yesButton = document.querySelector(".yes");

    function showLove() {
        document.body.innerHTML = `
            <h1>Yay! Happy Valentine\'s Day! ❤️😍</h1>
            <img src="clingy-couple-ducks.gif" width="400">
            <p style="font-size: 28px; color: black;">I Love You 😘</p>

        `;

        noMusic.pause();  // Stop "Rude" if playing
        noMusic.currentTime = 0;
        yesMusic.play();  // Play "Thinking Out Loud"


        // Create a button element dynamically
        let futureButton = document.createElement("button");
        futureButton.innerText = "Click to see us in the future 😉";
        futureButton.classList.add("future-btn"); // Add a class for styling
        futureButton.onclick = function () {
            window.location.href = "future.html"; // Redirect to future page
        };

        // Append the button at the bottom of the body
        document.body.appendChild(futureButton);
        
    }

    function moveNoButton() {
        let x = Math.random() * (window.innerWidth - 150);
        let y = Math.random() * (window.innerHeight - 50);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        // Restart "Rude" song every time "No" is hovered
        noMusic.pause(); 
        noMusic.currentTime = 0; 
        noMusic.play();
    }

    // Ensure "No" button still moves, but "Yes" remains clickable
    noButton.addEventListener("mouseover", moveNoButton);
    yesButton.addEventListener("click", showLove);  // Keep "Yes" functional
};

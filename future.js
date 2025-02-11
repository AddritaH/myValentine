window.onload = function () {
    let futureMusic = new Audio("Chorabali.mp3");

    // Ensure music only plays when user interacts (fix autoplay issues)
    document.body.addEventListener("click", function () {
        futureMusic.play();
    }, { once: true });

    futureMusic.play().catch(error => {
        console.log("Autoplay blocked, waiting for user interaction.");
    });
};


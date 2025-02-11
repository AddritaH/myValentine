// Wait for the DOM to load before executing script
document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("agreeCheckbox");
    const proceedBtn = document.getElementById("proceedBtn");

    // Enable button only when checkbox is checked
    checkbox.addEventListener("change", function () {
        proceedBtn.disabled = !this.checked;
        proceedBtn.classList.toggle("enabled", this.checked);
    });

    // Redirect function with countdown
    proceedBtn.addEventListener("click", function () {
        if (!checkbox.checked) return; // Ensure checkbox is checked

        proceedBtn.disabled = true; // Disable button to prevent multiple clicks
        let countdown = 5;
        proceedBtn.innerText = `Redirecting in ${countdown}... ⏳`;

        const countdownInterval = setInterval(() => {
            countdown--;
            proceedBtn.innerText = `Redirecting in ${countdown}... ⏳`;

            if (countdown === 0) {
                clearInterval(countdownInterval);
                window.location.href = "valentine.html"; // Redirect after countdown
            }
        }, 1000);
    });
});

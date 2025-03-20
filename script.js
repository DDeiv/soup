// Countdown Timer Script

// Set the target date (year, month-1, day, hour, minute, second)
const countdownDate = new Date(2025, 10, 9, 0, 0, 0).getTime();

// Function to calculate and display countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers to always be 2 digits
    const formatNumber = (num) => String(num).padStart(2, "0");

    // Countdown as an array to dynamically adjust length
    let timeParts = [
        formatNumber(months),  // MM
        formatNumber(days),    // DD
        formatNumber(hours),   // HH
        formatNumber(minutes), // MM
        formatNumber(seconds)  // SS
    ];

    // Get countdown element and its parent width
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = timeParts.join(":");

    // Adjust countdown dynamically if it overflows
    let parentWidth = countdownElement.parentElement.clientWidth;
    let textWidth = countdownElement.scrollWidth;

    while (textWidth > parentWidth && timeParts.length > 1) {
        timeParts.shift(); // Remove the leftmost (biggest) time unit
        countdownElement.innerHTML = timeParts.join(":");
        textWidth = countdownElement.scrollWidth; // Recalculate width
    }

    // Stop countdown at zero
    if (distance <= 0) {
        countdownElement.innerHTML = "00:00:00:00:00";
        clearInterval(countdownTimer);
    }
}

// Run countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown(); // Run once immediately
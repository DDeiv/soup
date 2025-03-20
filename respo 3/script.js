//QUA IMPOSTI IL COUNDOWN METTENDO LA DATA DELL'EVENTO (ANNO MESE GIORNO ORA MINUTO SECONDO DI INIZIO :)
const countdownDate = new Date(2025, 10, 9, 0, 0, 0).getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const formatNumber = (num) => String(num).padStart(2, "0");

    let timeParts = [
        formatNumber(months),  
        formatNumber(days),    
        formatNumber(hours),   
        formatNumber(minutes), 
        formatNumber(seconds) 
    ];

    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = timeParts.join(":");

    let parentWidth = countdownElement.parentElement.clientWidth;
    let textWidth = countdownElement.scrollWidth;

    while (textWidth > parentWidth && timeParts.length > 1) {
        timeParts.shift(); 
        countdownElement.innerHTML = timeParts.join(":");
        textWidth = countdownElement.scrollWidth;
    }

    if (distance <= 0) {
        countdownElement.innerHTML = "00:00:00:00:00";
        clearInterval(countdownTimer);
    }
}

const countdownTimer = setInterval(updateCountdown, 1000);
updateCountdown();

// Get the release date from the data attribute
const countdownElement = document.getElementById("countdown");
const releaseDateStr = countdownElement ? countdownElement.getAttribute("data-release") : null;

// Ensure the release date is defined before proceeding
if (releaseDateStr) {
  const countDownDate = new Date(releaseDateStr).getTime();

  // Update the count down every second
  const timerInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, display a different message
    if (distance < 0) {
      clearInterval(timerInterval);
      document.getElementById("demo").textContent = "The wait is over!";
    }
  }, 1000);
} else {
  console.error("Countdown element not found or release date is missing.");
}

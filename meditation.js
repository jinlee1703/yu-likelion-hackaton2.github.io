let meditationInterval;

function startMeditation() {
  const minutes = document.getElementById("meditation-time").value;
  let seconds = minutes * 60;
  const timerDisplay = document.getElementById("meditation-timer");

  clearInterval(meditationInterval);
  meditationInterval = setInterval(() => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    if (seconds == 0) {
      clearInterval(meditationInterval);
      timerDisplay.textContent = "명상 완료!";
    }
    seconds--;
  }, 1000);
}

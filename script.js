document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calulationButton");

  calculateButton.addEventListener("click", function () {
    const orginalTimeInput = document.getElementById("originalTime");
    const playbackSpeedInput = document.getElementById("playbackSpeed");
    const resultDisplay = document.getElementById("result");

    const originalTime = parseFloat(orginalTimeInput.value);
    const playbackSpeed = parseFloat(playbackSpeedInput.value);

    if (!isNaN(originalTime) && !isNaN(playbackSpeed)) {
      const actualTime = calculateActualTime(originalTime, playbackSpeed);
      resultDisplay.textContent = `Actual time spent: ${actualTime.toFixed(
        2
      )} minutes`;
    } else {
      resultDisplay.textContent = `Please enter a valid number in orignial time and playback Speed`;
    }

    function calculateActualTime(originalTime, playbackSpeed) {
      return originalTime / playbackSpeed;
    }
  });
});

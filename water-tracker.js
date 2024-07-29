let waterCount = 0;

function addWater() {
  waterCount++;
  updateWaterDisplay();
}

function updateWaterDisplay() {
  const waterGlasses = document.getElementById("water-glasses");
  waterGlasses.innerHTML = "🥛".repeat(waterCount);
  document.getElementById(
    "water-count"
  ).textContent = `현재 섭취량: ${waterCount}잔`;
}

// 페이지 로드 시 실행
window.onload = function () {
  updateWaterDisplay();
};

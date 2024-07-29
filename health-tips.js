const tips = [
  "매일 8잔의 물을 마시세요.",
  "하루 30분 이상 걷기 운동을 하세요.",
  // ... 기타 팁들
];

function newTip() {
  const tipElement = document.getElementById("daily-tip");
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipElement.textContent = randomTip;
}

window.onload = newTip;

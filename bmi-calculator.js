document.getElementById("bmi-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  const bmi = (weight / (height * height)).toFixed(1);
  let result = `당신의 BMI는 ${bmi}입니다. `;
  if (bmi < 18.5) result += "저체중";
  else if (bmi < 23) result += "정상";
  else if (bmi < 25) result += "과체중";
  else result += "비만";
  document.getElementById("bmi-result").textContent = result;
});

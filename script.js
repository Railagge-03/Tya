const cheerButton = document.getElementById("cheerButton");
const extraMessage = document.getElementById("extraMessage");
const finalContainer = document.getElementById("finalContainer");
const mainContainer = document.getElementById("mainContainer");
const heartsContainer = document.getElementById("heartsContainer");

const messages = [
  "Kamu kuat banget, tahu nggak? 💪",
  "Senyum kamu itu bisa cerahin hari siapa aja 😍",
  "Aku selalu di sini buat kamu 🤗",
  "Jangan biarin sedih menang yaa! 💖",
  "Tya itu spesial, inget itu! ✨",
];

cheerButton.addEventListener("click", () => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  extraMessage.textContent = msg;

  for (let i = 0; i < 10; i++) {
    createHeart(i);
  }

  setTimeout(() => {
    mainContainer.style.display = "none";
    finalContainer.style.display = "block";
  }, 4200);
});

function createHeart(delayMultiplier) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 24 + 12 + "px";

  setTimeout(() => {
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, delayMultiplier * 100);
}

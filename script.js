const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const options = [
  "Win $100",
  "Try Again",
  "Free Spin",
  "Lose",
  "Win $50",
  "Jackpot"
];

const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
let angle = 0;

function drawWheel() {
  const slice = (2 * Math.PI) / options.length;

  for (let i = 0; i < options.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 200, angle + i * slice, angle + (i + 1) * slice);
    ctx.fill();

    ctx.save();
    ctx.translate(200, 200);
    ctx.rotate(angle + (i + 0.5) * slice);
    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText(options[i], 100, 10);
    ctx.restore();
  }
}

function spin() {
  const spinAngle = Math.random() * 2000 + 1000;
  let current = 0;

  const spinning = setInterval(() => {
    angle += 0.1;
    current += 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWheel();

    if (current >= spinAngle) {
      clearInterval(spinning);
    }
  }, 10);
}

drawWheel();

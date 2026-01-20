const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");

const options = [
  "Free Strap",
  "Nothing",
  "Rare Weapon",
  "Cash Drop",
  "L",
  "Jackpot"
];

const colors = [
  "#8b0000",
  "#1f1f1f",
  "#444",
  "#6a0000",
  "#2b2b2b",
  "#b30000"
];

let angle = 0;
let spinning = false;

function drawWheel() {
  const slice = (2 * Math.PI) / options.length;

  for (let i = 0; i < options.length; i++) {
    ctx.beginPath();
    ctx.fillStyle = colors[i];
    ctx.moveTo(210, 210);
    ctx.arc(
      210,
      210,
      210,
      angle + i * slice,
      angle + (i + 1) * slice
    );
    ctx.fill();

    ctx.save();
    ctx.translate(210, 210);
    ctx.rotate(angle + (i + 0.5) * slice);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px Arial";
    ctx.fillText(options[i], 90, 5);
    ctx.restore();
  }
}

function spinWheel() {
  if (spinning) return;
  spinning = true;

  let spinTime = Math.random() * 3000 + 2000;
  let start = Date.now();

  const spin = setInterval(() => {
    angle += 0.15;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWheel();

    if (Date.now() - start >= spinTime) {
      clearInterval(spin);
      spinning = false;
      showResult();
    }
  }, 16);
}

function showResult() {
  const slice = (2 * Math.PI) / options.length;
  const index = Math.floor(
    options.length - (angle % (2 * Math.PI)) / slice
  ) % options.length;

  document.getElementById("resultText").innerText =
    "Result: " + options[index];

  document.getElementById("resultBox").classList.remove("hidden");
}

function closeResult() {
  document.getElementById("resultBox").classList.add("hidden");
}

drawWheel();

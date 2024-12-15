function createRandomGrok() {
  const container = document.getElementById("grok-container");
  const grok = document.createElement("h2");
  grok.textContent = "Grok";
  grok.style.position = "absolute";
  grok.style.margin = "0";
  grok.style.top = Math.random() * (container.clientHeight - 20) + "px";
  grok.style.left = Math.random() * (container.clientWidth - 50) + "px";
  grok.style.fontFamily = '"Doto", sans-serif';
  container.appendChild(grok);
}

function startAnimation() {
  for (let i = 0; i < 10; i++) {
    setTimeout(createRandomGrok, Math.random() * 5000);
  }
}

startAnimation();

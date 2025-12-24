const teAmoText = "Te amo";
const navidadText = "🎄 Feliz Navidad Leidy 🎄";

const teAmoEl = document.getElementById("te-amo");
const heartEl = document.getElementById("heart");
const navidadEl = document.getElementById("navidad");
const ositoEl = document.getElementById("osito");
const blackout = document.getElementById("blackout");
const replayBtn = document.getElementById("replay");
const heartsContainer = document.getElementById("floating-hearts");

let i = 0;

/* TE AMO letra por letra */
const teAmoInterval = setInterval(() => {
  teAmoEl.textContent += teAmoText[i];
  i++;
  if (i === teAmoText.length) {
    clearInterval(teAmoInterval);
    startFloatingHearts();
    setTimeout(startHeart, 1200);
  }
}, 220);

/* CORAZONES */
function startFloatingHearts() {
  const interval = setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);

  setTimeout(() => clearInterval(interval), 4000);
}

/* CORAZÓN */
function startHeart() {
  teAmoEl.style.display = "none";
  heartEl.style.display = "block";

  setTimeout(startBlackoutFromHeart, 8500);
}

/* 🖤 BLACKOUT: nace del corazón, se expande, se queda, desaparece */
function startBlackoutFromHeart() {
  const rect = heartEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  heartEl.style.display = "none";
  blackout.style.opacity = 1;

  let radius = 0;
  const maxRadius = Math.hypot(window.innerWidth, window.innerHeight);

  const expand = setInterval(() => {
    radius += 12;
    blackout.style.background =
      `radial-gradient(circle ${radius}px at ${cx}px ${cy}px,
        black ${radius - 40}px,
        black ${radius}px)`;

    if (radius >= maxRadius) {
      clearInterval(expand);

      // se queda negro un instante
      setTimeout(() => {
        blackout.style.transition = "opacity 0.5s ease";
        blackout.style.opacity = 0;

        setTimeout(() => {
          blackout.style.background = "none";
          startNavidad();
        }, 500);

      }, 300);
    }
  }, 16);
}

/* NAVIDAD FINAL */
function startNavidad() {
  navidadEl.style.display = "block";
  ositoEl.style.display = "block";
  replayBtn.style.display = "block";

  let j = 0;
  const interval = setInterval(() => {
    navidadEl.textContent += navidadText[j];
    j++;
    if (j === navidadText.length) {
      clearInterval(interval);
      startSnow();
    }
  }, 120);
}

/* NIEVE */
function startSnow() {
  setInterval(() => {
    const snow = document.createElement("div");
    snow.className = "snowflake";
    snow.textContent = "❄";
    snow.style.left = Math.random() * 100 + "vw";
    document.getElementById("snow").appendChild(snow);
    setTimeout(() => snow.remove(), 6000);
  }, 200);
}

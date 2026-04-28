import { drivers } from "./../data/dataDrivers.js";

const cards = document.querySelectorAll(".track-card");
const modals = document.querySelectorAll(".modal");

// OPEN MODAL
cards.forEach(card => {
    card.addEventListener("click", () => {
        const id = card.dataset.track;
        const modal = document.getElementById("modal-" + id);
        modal.classList.add("show");
    });
});

// CLOSE MODAL (X)
modals.forEach(modal => {
    modal.querySelector(".close").addEventListener("click", () => {
        modal.classList.remove("show");
    });
});

// CLICK OUTSIDE = CLOSE
window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("show");
    }
});




console.log("✅ script.js loaded");

const gridEl = document.getElementById("driversGrid");
const detailEl = document.getElementById("driverDetail");
const backBtn = document.getElementById("backToGrid");

// Detail fields
const dName = document.getElementById("dName");
const dTeam = document.getElementById("dTeam");
const dPortrait = document.getElementById("dPortrait");
const dDob = document.getElementById("dDob");
const dPob = document.getElementById("dPob");

// ====== JEDINÁ openDetail() FUNKCE ======
function openDetail(id) {
  const d = drivers.find(x => x.id === id);
  if (!d) return;

  // základní info
  if (dName) dName.textContent = d.name || "";
  if (dTeam) dTeam.textContent = d.team || "";
  if (dDob) dDob.textContent = d.dob || "—";
  if (dPob) dPob.textContent = d.pob || "—";

  if (dPortrait) {
    dPortrait.src = d.portrait || "";
    dPortrait.alt = d.name || "driver";
  }

  // ===== BIO TEXT =====
  const dBioText = document.getElementById("dBioText");
  if (dBioText) {
    dBioText.innerHTML = (d.bio || "").replace(/\n\n/g, "<br><br>");
  }

  // ===== BIO FOTKY (2) =====
  const dBioPhoto1 = document.getElementById("dBioPhoto1");
  const dBioPhoto2 = document.getElementById("dBioPhoto2");

  const p1 = d.bioPhotos?.[0] || "";
  const p2 = d.bioPhotos?.[1] || "";

  if (dBioPhoto1) {
    dBioPhoto1.style.display = p1 ? "block" : "none";
    if (p1) dBioPhoto1.src = p1;
  }
  if (dBioPhoto2) {
    dBioPhoto2.style.display = p2 ? "block" : "none";
    if (p2) dBioPhoto2.src = p2;
  }

  // gradient
  if (detailEl) {
    detailEl.style.setProperty("--detail-grad", d.detailGradient || d.gradient || "");
    detailEl.classList.remove("is-hidden");

    
    setTimeout(() => {
      detailEl.classList.add("active");
    }, 10);

    window.scrollTo({ top: 800, behavior: "smooth" });

  }

  const best = document.querySelector(".best");
  if (best) best.classList.add("is-hidden");

  history.replaceState(null, "", `#${d.id}`);
}

function renderGrid() {
  if (!gridEl) return; 
  gridEl.innerHTML = drivers.map((d) => `
    <article class="driver-card" data-id="${d.id}" style="--grad:${d.gradient}">
      <div class="driver-card__bg"></div>
      <div class="driver-card__bottomFade"></div>
      <div class="driver-card__name">${d.name}</div>
      <img class="driver-card__img" src="${d.cardImage}" alt="${d.name}">
    </article>
  `).join("");

  gridEl.querySelectorAll(".driver-card").forEach(card => {
    card.addEventListener("click", () => {
      openDetail(card.getAttribute("data-id"));
    });
  });
}

function backToGrid() {
  if (!detailEl) return;

  // 1. spustí animaci (fade out + slide dolů)
  detailEl.classList.remove("active");

  // 2. počká, než doběhne animace
  setTimeout(() => {
    detailEl.classList.add("is-hidden");
  }, 400); // musí sedět na transition (0.4s)

  const best = document.querySelector(".best");
  if (best) {
    best.classList.remove("is-hidden");
  }

  history.replaceState(null, "", "#");
}



if (backBtn) backBtn.addEventListener("click", backToGrid);

// start
renderGrid();

if (location.hash) {
  const id = location.hash.replace("#", "");
  if (drivers.some(d => d.id === id)) openDetail(id);
}




import { teams } from "./../data/dataTeams.js";

document.addEventListener("DOMContentLoaded", () => {
  const DRIVERS_PAGE = "drivers.html"; 


  

  // ====== ELEMENTY ======
  const listEl = document.getElementById("teamsList");
  const detail = document.getElementById("teamDetail");
  const backBtn = document.getElementById("backToTeams");
  const listWrap = document.querySelector(".teams-best");

  const tHeroLogo = document.getElementById("tHeroLogo");
  const tHeroCar = document.getElementById("tHeroCar");
  const tDrivers = document.getElementById("tDrivers");

  const tpFullName = document.getElementById("tpFullName");
  const tpBase = document.getElementById("tpBase");
  const tpChief = document.getElementById("tpChief");
  const tpChassis = document.getElementById("tpChassis");
  const tpPU = document.getElementById("tpPU");
  const tpEntry = document.getElementById("tpEntry");

  const tBio = document.getElementById("tBio");
  const tPhoto1 = document.getElementById("tPhoto1");
  const tPhoto2 = document.getElementById("tPhoto2");

  if (!listEl) {
    console.error("❌ Missing #teamsList in HTML");
    return;
  }
  if (!detail) {
    console.error("❌ Missing #teamDetail in HTML");
    return;
  }

  function renderTeamsList() {
    listEl.innerHTML = teams.map(t => `
      <article class="team-card" data-id="${t.id}" style="--grad:${t.gradient}">
        <div class="team-card__driverLeft">${t.drivers?.[0]?.name || ""}</div>
        <div class="team-card__driverRight">${t.drivers?.[1]?.name || ""}</div>
        <h3 class="team-card__title">${t.name}</h3>
        <img class="team-card__car" src="${t.cardCar}" alt="${t.name} car">
      </article>
    `).join("");

    listEl.querySelectorAll(".team-card").forEach(card => {
      card.addEventListener("click", () => openTeam(card.dataset.id));
    });
  }

  function openTeam(id) {
    const t = teams.find(x => x.id === id);
    if (!t) return;

    if (listWrap) listWrap.classList.add("is-hidden");
    

    if (listWrap) listWrap.classList.add("is-hidden");
    detail.style.setProperty("--detail-grad", t.detailGradient || t.gradient || "");
    detail.classList.remove("is-hidden");
    detail.classList.remove("active");
    setTimeout(() => {
      detail.classList.add("active");
    }, 10);

    
    
    setTimeout(() => {
      detail.classList.add("active");
    }, 10);

    window.scrollTo({ top: 800, behavior: "smooth" });

    const best = document.querySelector(".best");
    if (best) best.classList.add("is-hidden");

    

    if (tHeroLogo) {
      tHeroLogo.src = t.heroLogo || "";
      tHeroLogo.style.display = t.heroLogo ? "block" : "none";
    }
    if (tHeroCar) tHeroCar.src = t.heroCar || "";

    if (tDrivers) {
      tDrivers.innerHTML = (t.drivers || []).map(d => `
        <article class="driver-mini" data-driver="${d.id}">
          <div class="driver-mini__name">${d.name}</div>
          <img class="driver-mini__img" src="${d.img}" alt="${d.name}">
        </article>
      `).join("");

      tDrivers.querySelectorAll(".driver-mini").forEach(el => {
        el.addEventListener("click", () => {
          const driverId = el.dataset.driver;
          window.location.href = `${DRIVERS_PAGE}#${driverId}`;
        });
      });
    }

    const p = t.profile || {};
    if (tpFullName) tpFullName.textContent = p.fullName || "—";
    if (tpBase) tpBase.textContent = p.base || "—";
    if (tpChief) tpChief.textContent = p.chief || "—";
    if (tpChassis) tpChassis.textContent = p.chassis || "—";
    if (tpPU) tpPU.textContent = p.powerUnit || "—";
    if (tpEntry) tpEntry.textContent = p.entry || "—";

    if (tBio) tBio.innerHTML = (t.bio || "").replace(/\n\n/g, "<br><br>");
  

    const ph1 = t.photos?.[0] || "";
    const ph2 = t.photos?.[1] || "";
    if (tPhoto1) {
      tPhoto1.style.display = ph1 ? "block" : "none";
      if (ph1) tPhoto1.src = ph1;
    }
    if (tPhoto2) {
      tPhoto2.style.display = ph2 ? "block" : "none";
      if (ph2) tPhoto2.src = ph2;
    }

    history.replaceState(null, "", `#${t.id}`);
    ;
  }

  function backToTeams() {
    detail.classList.add("is-hidden");
    if (listWrap) listWrap.classList.remove("is-hidden");
    history.replaceState(null, "", "#");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (backBtn) backBtn.addEventListener("click", backToTeams);

  renderTeamsList();

  if (location.hash) {
    const id = location.hash.replace("#", "");
    if (teams.some(t => t.id === id)) openTeam(id);
  }
});

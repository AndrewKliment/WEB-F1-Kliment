import { races } from "./../data/dataResults.js";


const racesView = document.getElementById("racesView");
const detailView = document.getElementById("detailView");
const racesList = document.getElementById("racesList");

const backBtn = document.getElementById("backBtn");
const detailTitle = document.getElementById("detailTitle");

const podium1 = document.getElementById("podium1");
const podium2 = document.getElementById("podium2");
const podium3 = document.getElementById("podium3");

const resultsTable = document.getElementById("resultsTable");

function renderRacesList() {
  racesList.innerHTML = "";

  races.forEach((race, i) => {
    const card = document.createElement("div");
    card.className = "race-card";

    card.innerHTML = `
      <div class="race-top">
        <h2 class="race-name">${race.track}</h2>
        <div class="race-right">
          <img class="flag" src="${race.flag}" alt="${race.track} flag">
          <div class="race-date">${race.date}</div>
        </div>
      </div>
      <div class="race-winner">RACE WINNER: ${race.winner}</div>
    `;

    card.addEventListener("click", () => openRace(i));
    racesList.appendChild(card);
  });
}

function openRace(index) {
  const race = races[index];

  racesView.classList.add("hidden");
  detailView.classList.remove("hidden");

  detailTitle.textContent = race.track;

  const p1 = race.podium.find(p => p.pos === 1);
  const p2 = race.podium.find(p => p.pos === 2);
  const p3 = race.podium.find(p => p.pos === 3);

  podium1.innerHTML = podiumHTML(p1);
  podium2.innerHTML = podiumHTML(p2);
  podium3.innerHTML = podiumHTML(p3);

  resultsTable.innerHTML = "";
  race.results20
    .filter(r => r.pos >= 4) 
    .forEach(r => {
      const row = document.createElement("div");
      row.className = "result-row";
      row.innerHTML = `
        <div class="pos">${r.pos}</div>
        <div class="name">${r.name}</div>
        <div class="team">${r.team}</div>
      `;
      resultsTable.appendChild(row);
    });


    requestAnimationFrame(() => {
    window.scrollTo({ top: 900, left: 0, behavior: "auto" });
  });
}

function podiumHTML(p) {
  return `
    <div class="driver-name">${p.name}</div>
    <img src="${p.img}" alt="${p.name}">
    <div class="place">${p.pos}</div>
  `;
}



backBtn.addEventListener("click", () => {
  detailView.classList.add("hidden");
  racesView.classList.remove("hidden");
});

renderRacesList();


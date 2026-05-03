import { tracks } from "./../data/dataTracks.js";


document.addEventListener('DOMContentLoaded', () => {


  const cards = document.querySelectorAll('.track-card');
  const overlay = document.getElementById('full-screen-detail');
  const detailBody = document.getElementById('detail-body');
  const closeBtn = document.getElementById('close-btn');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const trackName = card.dataset.track;
      const track = tracks[trackName];
      if (!track) return;

      // naplnění detailu
      detailBody.innerHTML = `
        <div style="display:flex; flex-wrap: wrap;">
          <img src="${track.img}" alt="${track.name}">
          <div class="detail-info">
            <h2>${track.name}</h2>
            <p><b>Date:</b> ${track.date}</p>
            <p><b>Circuit Length:</b> ${track.length}</p>
            <p><b>First Grand Prix:</b> ${track.first}</p>
            <p><b>Number of Laps:</b> ${track.laps}</p>
            ${track.fastest ? `<p><b>Fastest Lap:</b> ${track.fastest}</p>` : ''}
            <p><b>Race Distance:</b> ${track.distance}</p>
          </div>
        </div>
      `;

      // zobraz overlay
      overlay.classList.add('show');
      document.body.style.overflow = 'hidden'; // zabrání scrollu pozadí
    });
  });

  // Zavření modálu pomocí klávesy Esc
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Kontrola, jestli je modál vůbec otevřený
      if (overlay.classList.contains('show')) {
        overlay.classList.remove('show');
        document.body.style.overflow = ''; // Vrátí scroll
      }
    }
  });

  // zavření
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    document.body.style.overflow = ''; // povolí scroll zpět
  });
});
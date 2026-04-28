document.addEventListener('DOMContentLoaded', () => {
  const tracks = {
    australia: {
      name: "AUSTRALIA",
      date: "14–16 March",
      img: "images/tracks-layout/Australia_Circuit.avif",
      length: "5.278 km",
      first: "1996",
      laps: "58",
      fastest: "1:19.813 (2024)",
      distance: "306.124 km"
    },
    china: {
      name: "CHINA",
      date: "21–23 March",
      img: "images/tracks-layout/China_Circuit.avif",
      length: "5.451 km",
      first: "2004",
      laps: "56",
      distance: "305.066 km"
    },
    japan: {
      name: "JAPAN",
      date: "4–6 April",
      img: "images/tracks-layout/Japan_Circuit.avif",
      length: "5.807 km",
      first: "1987",
      laps: "53",
      distance: "307.471 km"
    },

    bahrain: {
      name: "BAHRAIN",
      date: "11–13 April",
      img: "images/tracks-layout/Bahrain_Circuit.avif",
      length: "5.412 km",
      first: "2004",
      laps: "57",
      distance: "308.238 km"
    },

    saudi: {
      name: "SAUDI ARABIA",
      date: "18–20 April",
      img: "images/tracks-layout/Saudi_Arabia_Circuit.avif",
      length: "6.174 km",
      first: "2021",
      laps: "50",
      distance: "308.450 km"
    },

    miami: {
      name: "MIAMI",
      date: "2–4 May",
      img: "images/tracks-layout/Miami_Circuit.avif",
      length: "5.412 km",
      first: "2022",
      laps: "57",
      distance: "308.326 km"
    },

    imola: {
      name: "IMOLA",
      date: "16–18 May",
      img: "images/tracks-layout/Emilia_Romagna_Circuit.avif",
      length: "4.909 km",
      first: "1980",
      laps: "63",
      distance: "309.049 km"
    },

    monaco: {
      name: "MONACO",
      date: "23–25 May",
      img: "images/tracks-layout/Monaco_Circuit.avif",
      length: "3.337 km",
      first: "1950",
      laps: "78",
      distance: "260.286 km"
    },

    spain: {
      name: "SPAIN",
      date: "30 May – 1 June",
      img: "images/tracks-layout/Spain_Circuit.avif",
      length: "4.657 km",
      first: "1991",
      laps: "66",
      distance: "307.236 km"
    },

    canada: {
      name: "CANADA",
      date: "13–15 June",
      img: "images/tracks-layout/Canada_Circuit.avif",
      length: "4.361 km",
      first: "1978",
      laps: "70",
      distance: "305.270 km"
    },

    austria: {
      name: "AUSTRIA",
      date: "27–29 June",
      img: "images/tracks-layout/Austria_Circuit.avif",
      length: "4.318 km",
      first: "1970",
      laps: "71",
      distance: "306.452 km"
    },

    uk: {
      name: "GREAT BRITAIN",
      date: "4–6 July",
      img: "images/tracks-layout/Great_Britain_Circuit.avif",
      length: "5.891 km",
      first: "1950",
      laps: "52",
      distance: "306.198 km"
    },

    hungary: {
      name: "HUNGARY",
      date: "18–20 July",
      img: "images/tracks-layout/Hungary_Circuit.avif",
      length: "4.381 km",
      first: "1986",
      laps: "70",
      distance: "306.630 km"
    },

    belgium: {
      name: "BELGIUM",
      date: "25–27 July",
      img: "images/tracks-layout/Belgium_Circuit.avif",
      length: "7.004 km",
      first: "1950",
      laps: "44",
      distance: "308.052 km"
    },

    netherlands: {
      name: "NETHERLANDS",
      date: "22–24 August",
      img: "images/tracks-layout/Netherlands_Circuit.avif",
      length: "4.259 km",
      first: "1952",
      laps: "72",
      distance: "306.587 km"
    },

    monza: {
      name: "ITALY",
      date: "29–31 August",
      img: "images/tracks-layout/Italy_Circuit.avif",
      length: "5.793 km",
      first: "1950",
      laps: "53",
      distance: "306.720 km"
    },

    azerbaijan: {
      name: "AZERBAIJAN",
      date: "12–14 September",
      img: "images/tracks-layout/Baku_Circuit.avif",
      length: "6.003 km",
      first: "2016",
      laps: "51",
      distance: "306.049 km"
    },

    singapore: {
      name: "SINGAPORE",
      date: "19–21 September",
      img: "images/tracks-layout/Singapore_Circuit.avif",
      length: "4.940 km",
      first: "2008",
      laps: "62",
      distance: "306.143 km"
    },

    austin: {
      name: "USA",
      date: "17–19 October",
      img: "images/tracks-layout/USA_Circuit.avif",
      length: "5.513 km",
      first: "2012",
      laps: "56",
      distance: "308.405 km"
    },

    mexico: {
      name: "MEXICO",
      date: "24–26 October",
      img: "images/tracks-layout/Mexico_Circuit.avif",
      length: "4.304 km",
      first: "1963",
      laps: "71",
      distance: "305.354 km"
    },

    brazil: {
      name: "BRAZIL",
      date: "7–9 November",
      img: "images/tracks-layout/Brazil_Circuit.avif",
      length: "4.309 km",
      first: "1973",
      laps: "71",
      distance: "305.879 km"
    },

    lasvegas: {
      name: "LAS VEGAS",
      date: "20–22 November",
      img: "images/tracks-layout/Las_Vegas_Circuit.avif",
      length: "6.201 km",
      first: "2023",
      laps: "50",
      distance: "309.958 km"
    },

    qatar: {
      name: "QATAR",
      date: "28–30 November",
      img: "images/tracks-layout/Qatar_Circuit.avif",
      length: "5.419 km",
      first: "2021",
      laps: "57",
      distance: "308.611 km"
    },

    abudhabi: {
      name: "ABU DHABI",
      date: "5–7 December",
      img: "images/tracks-layout/Abu_Dhabi_Circuit.avif",
      length: "5.281 km",
      first: "2009",
      laps: "58",
      distance: "306.183 km"
    }
  };

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

  // zavření
  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('show');
    document.body.style.overflow = ''; // povolí scroll zpět
  });
});
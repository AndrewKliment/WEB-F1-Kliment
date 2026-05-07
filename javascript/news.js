

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.getElementById("showAllHighlights");
//   const grid = document.getElementById("allHighlightsGrid");

//   const highlights = [
//     "md9-jG4RzXs",
//     "Hml6MaRRkn8",
//     "or9ooNWaqKU",
//     "bFXLP487kXo",
//     "Li93iQDZQeg",
//     "o0ANo138B3c",
//     "xkRXnrvFCY0",
//     "ajzQj7bjSWE",
//     "ATlMK7ln5Dc",
//     "93ZnZF_zWds",
//     "Wj6DHG0X66k",
//     "daWr9xnkKS4",
    
//     "yApM21L0GgY",
//     "hrPtK5D5yn4",
//     "JIRqdeNl2cU",
//     "kGMp1Byuwto",
//     "JntKOmbMI08",
//     "XZhXFbFCOu4",
//     "CdKwc1bC44c",
//     "hTqxfkWRimk",
//     "MK83clSv6-k",
//     "uQc-pW3QLuI",
//     "BeaVJggQ2dc",
//     "S-LMSpzlnc0",
//   ];

//   let visible = false; // aktuální stav

//   btn.addEventListener("click", () => {
//     visible = !visible; // přepne stav

//     if (visible) {
//       grid.style.display = "grid";
//       btn.innerText = "Hide Highlights"; // změna textu

//       // naplníme grid jen jednou
//       if(grid.children.length === 0){
//         highlights.forEach(id => {
//           const a = document.createElement("a");
//           a.href = `https://www.youtube.com/watch?v=${id}`;
//           a.target = "_blank";
//           a.className = "video-card";

//           const img = document.createElement("img");
//           img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

//           const play = document.createElement("div");
//           play.className = "play";
//           play.innerText = "▶";

//           a.appendChild(img);
//           a.appendChild(play);
//           grid.appendChild(a);
//         });
//       }

//       grid.scrollIntoView({ behavior: "smooth" });
//     } else {
//       grid.style.display = "none";
//       btn.innerText = "All Highlights"; // vrátíme text zpět
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("showAllHighlights");
  const grid = document.getElementById("allHighlightsGrid");

  // Místo jednoho pole to rozdělíme na kategorie
  const highlightSections = {
    "Opening Flyaways": [
      "md9-jG4RzXs", "Hml6MaRRkn8", "or9ooNWaqKU", "bFXLP487kXo", "Li93iQDZQeg", "o0ANo138B3c"
    ],
    "European Season": [
      "xkRXnrvFCY0", "ajzQj7bjSWE", "ATlMK7ln5Dc", "93ZnZF_zWds", "Wj6DHG0X66k", "daWr9xnkKS4",
      "yApM21L0GgY", "hrPtK5D5yn4", "JIRqdeNl2cU", "kGMp1Byuwto",
    ],
    "The Final Push": [
      "JntKOmbMI08", "XZhXFbFCOu4",
      "CdKwc1bC44c", "hTqxfkWRimk", "MK83clSv6-k", "uQc-pW3QLuI", "BeaVJggQ2dc", "S-LMSpzlnc0"
    ]
  };

  let visible = false;

  btn.addEventListener("click", () => {
    visible = !visible;

    if (visible) {
      grid.style.display = "grid";
      btn.innerText = "Hide Highlights";

      if (grid.children.length === 0) {
        // Procházíme kategorie (Opening Flyaways, atd.)
        for (const [sectionTitle, ids] of Object.entries(highlightSections)) {
          
          // 1. Vytvoříme nadpis sekce
          const header = document.createElement("h3");
          header.className = "grid-section-title";
          header.innerText = sectionTitle;
          grid.appendChild(header);

          // 2. Vytvoříme vnořený kontejner pro videa dané sekce
          const subGrid = document.createElement("div");
          subGrid.className = "sub-grid";

          ids.forEach(id => {
            const a = document.createElement("a");
            a.href = `https://www.youtube.com/watch?v=${id}`;
            a.target = "_blank";
            a.className = "video-card";

            const img = document.createElement("img");
            img.src = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;

            const play = document.createElement("div");
            play.className = "play";
            play.innerText = "▶";

            a.appendChild(img);
            a.appendChild(play);
            subGrid.appendChild(a);
          });

          grid.appendChild(subGrid);
        }
      }

      grid.scrollIntoView({ behavior: "smooth" });
    } else {
      grid.style.display = "none";
      btn.innerText = "All Highlights";
    }
  });
});

const video = document.getElementById('heroVideo');
const muteBtn = document.getElementById('muteBtn');
const muteIcon = document.getElementById('muteIcon');

muteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteIcon.textContent = '🔊'; // Zapnutý zvuk
        muteBtn.style.background = 'rgb(0, 0, 0)'; // Plná barva při zapnutí
    } else {
        video.muted = true;
        muteIcon.textContent = '🔇'; // Vypnutý zvuk
        muteBtn.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});

    let containers = document.getElementsByClassName("slideshow-container");

    // Pro každý kontejner spustí samostatnou funkci
    for (let s = 0; s < containers.length; s++) {
        initSlider(containers[s]);
    }

    function initSlider(container) {
        let slideIndex = 0;
        let fotky = container.getElementsByClassName("moje-prezentace");
        
        function ukazFotky() {
            for (let i = 0; i < fotky.length; i++) {
                fotky[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > fotky.length) {slideIndex = 1}    
            
            fotky[slideIndex-1].style.display = "block";  
            setTimeout(ukazFotky, 4000); 
        }
        
        ukazFotky();
    }


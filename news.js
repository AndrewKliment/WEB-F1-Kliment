document.addEventListener("DOMContentLoaded", () => {
  const news = [
    {
      id: "2026",
      title: "When does the 2026 F1 season start?",
      img: "images/grid26.jpg",
      text: "There will be 24 races on the calendar, with the campaign ending on Sunday, 6 December in Abu Dhabi. However, the competition will begin in early January, with teams participating in testing sessions and revealing their car liveries before the racing starts.\n\nThere will be three pre-season testing sessions because of the new regulations.\n\nThe first will be private testing at the end of January in Barcelona, Spain - allowing teams to test units under the new regulations.This is followed by two weeks of testing sessions in Bahrain.\n\nTeams will also reveal their 2026 liveries throughout pre-season in different formats.The Azerbaijan Grand Prix will shift its place in the calendar to Saturday, 26 September to accommodate for the country's national day.Six sprint races will take place in 2026, with Great Britain, China, Miami, Canada, Netherlands and Singapore all hosting the short race.",
    },
    {
      id: "tsunoda",
      title: "What is next for Red Bull's Yuki Tsunoda?",
      img: "images/yuki-bye.jpg",
      text: "The Japanese driver will not drive for them or their sister team, Racing Bulls, next year. Tsunoda, 25, will remain in Red Bull as a test and reserve driver - informally known as the third driver in a team. \n\nIn this role, Tsunoda will participate in testing the cars and working on the simulator. He will help the team collect important data regarding the cars - which in a season with new regulations will be a key role. Tsunoda will also be available to stand in for a Red Bull driver, should they not be available to participate in any events during a race week. \n\nBecoming a reserve driver will allow Tsunoda to continue to be in the paddock during race weeks, while also searching for a seat in the 2027 season. - His personality is infectious, and he has become a very special part of the Red Bull family,- said Red Bull team principal, Laurent Mekies. Both Daniel Ricciardo and Alex Albon made a comeback to the grid, after spending time in the reserve roles at Red Bull.",
      link: ""
    },
    {
      id: "halo",
      title: "What is the halo in F1?",
      img: "images/halo.jpg",
      text: "The halo is a curved wishbone-shaped structure that surrounds the cockpit of a Formula 1 car. \n\n It was first introduced in 2018, to improve the safety of drivers during races. The structure is attached to the car in three places, surrounding the driver's head at the top of the cockpit and attaching to the front of the car. This design provides the least obstruction to drivers while they race on the track. It acts as a shield which protects the driver by deflecting or absorbing impact from major accidents or crashes, as well as flying debris.\n\n The bar structure is made of titanium and is designed to hold the weight of a London double-decker bus. There was much criticism when the halo was first introduced, but its effectiveness was demonstrated over the years. Governing body, FIA made the halo mandatory across all 'formula' series in 2018.",
    },
    {
      id: "papaya",
      title: "What are 'papaya rules' in Formula 1?",
      img: "images/papaya.jpg",
      text: "'Papaya rules' are a code of conduct for McLaren team-mates Oscar Piastri and Lando Norris on the racing track. \n\n The word 'papaya' refers to the colour of the fruit that bears a resemblance to the iconic orange colour of McLaren. The drivers are often told of 'papaya rules' on radio messages during races when they are battling each other. It essentially reminds the drivers that they are free to race, but they must keep the battle fair, clean and avoid colliding. McLaren team principal Andrea Stella said both Piastri and Norris have been involved in creating the code.\n\n It also ensures equality and fairness between the two drivers as McLaren do not have a designated 'number one' driver. The guidelines have caused growing tension between the two drivers as they fight for the drivers' championship. McLaren won the 2025 constructors' championship with six races remaining at the Singapore Grand Prix.",
    },
       {
      id: "licence",
      title: "What is a super licence in Formula 1?",
      img: "images/max-licence.jpg",
      text: "To be able to compete in the Formula 1 Championship, a driver must have a super licence. This licence is a qualification to enter F1, issued by governing body FIA. Several factors need to be ticked off for a driver to qualify for a super licence, according to the FIA's International Sporting Code. To be applicable for a super licence, a driver must: \n\nHold an FIA-issued International Grade A licence\n\n Be at least 18 years old (but exemption may be given to a driver aged 17)\n\n Pass a knowledge theory test on the International Sporting Code and F1 Sporting Regulations\n\n Complete at least 80% of two separate seasons from any single-seater championship, approved by the FIA \n\nAccumulate at least 40 points overall from a two or three-year period \n\nIf a driver has held a valid super licence for three seasons, they are eligible for a new one after they complete 100km in a free practice session.",
    },
       {
      id: "spark",
      title: "Why do F1 cars spark?",
      img: "images/spark.jpg",
      text: "The answer to this question is found in the relative height of a Formula 1 car. With the floor being just millimeters off the ground, combined with the undulation and inconsistencies of the track surface, sparking is almost a given. \n\nDifferent factors affect the amount of sparking from an F1 car, with the most common being the fuel load. In qualifying, cars run low fuel for optimum weight and higher speeds, but on race day cars can have up to 110kg of fuel to last them the entire grand prix. You may have noticed planks of wood on the floor of Formula 1 cars, on the rare occasion that the underside is visible. The purpose of this ‘skid block’ is to ensure that all cars are following the ride height regulations. \n\nIf the wooden plank has been worn down by more than a millimeter at the end of a race, that car will be disqualified. But, as expected, teams take advantage of a helpful loophole when it comes to ride height. They place pieces of titanium in strategic parts of the floor, which are designed to strike the track instead of the skid block, thus reducing the amount of wear on the plank and producing a spectacular shower of sparks.",
    },
       {
      id: "drs",
      title: "What is DRS in Formula 1?",
      img: "images/drs.jpg",
      text: "DRS, or drag reduction system, is a clever system on all F1 cars to aid in close racing and overtaking. Introduced in 2011, DRS is an exception to the regulation prohibiting moving parts that aid aerodynamics.\n\nSimply put, DRS takes air resistance away and increases the speed of an F1 car. All F1 cars have rear wings that open and close when activated or deactivated by a button on the steering wheel. The small part of the wing that opens limits the amount of drag affecting the car and creates an opening for more air to pass through, thereby increasing the speed of the car in pursuit.\n\nThe rules of DRS use are just as simple as the system itself. Drivers may only activate it in designated DRS zones, typically found on long straights, and when they are within one second of the car ahead. DRS zones are clearly marked for drivers by white lines and signs at the edge of the track, with the end point being whenever the driver puts the brakes on. When the brake pedal is applied, DRS automatically shuts off and the rear wing closes.",
    },
       {
      id: "abs",
      title: "Do F1 cars have traction control and ABS?",
      img: "images/abs.jpg",
      text: "F1 cars are piloted by the world’s fastest and most talented drivers, earning millions of dollars a year; they’ve got to earn their paycheck somehow! F1 cars do not have traction control or an Anti-lock Braking System (ABS), making them more of a challenge to drive.\n\nOccasionally, you might see drivers plow straight into a corner amidst a puff of smoke, with their car seemingly refusing to turn into the corner. This is called a lockup and is a direct result of not having ABS. If a driver applies too much pressure on the brakes too quickly, they will momentarily lock and drag the tyres along the track surface, leaving a flat spot of worn rubber which then causes uncomfortable vibrations for the driver.\n\nIf a driver seems to lose control at the exit of a low-speed corner and spin the rear tyres, it’s because they’re in full control of the car’s traction – or sometimes the lack thereof. Drivers are just as cautious on the gas pedal as they are on the brakes, which they nurse to their correct operating temperature and use to their maximum efficiency.",
    },
  ];

  const track = document.getElementById("newsTrack");
  const prev = document.getElementById("newsPrev");
  const next = document.getElementById("newsNext");

  const modal = document.getElementById("newsModal");
  const modalBackdrop = document.getElementById("newsModalBackdrop");
  const modalClose = document.getElementById("newsModalClose");
  const mImg = document.getElementById("newsModalImg");
  const mTitle = document.getElementById("newsModalTitle");
  const mText = document.getElementById("newsModalText");
  const mLink = document.getElementById("newsModalLink");

  if (!track) return;

  track.innerHTML = news.map(n => `
    <article class="news-card" data-id="${n.id}">
      <img class="news-card__img" src="${n.img}" alt="${n.title}">
      <div class="news-card__body">
        <h3 class="news-card__title">${n.title}</h3>
      </div>
    </article>
  `).join("");

  function openModal(id){
    const n = news.find(x => x.id === id);
    if (!n) return;

    modal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";

    mImg.src = n.img;
    mImg.alt = n.title;
    mTitle.textContent = n.title;
    mText.innerHTML = (n.text || "").replace(/\n\n/g, "<br><br>");

    if (n.link){
      mLink.href = n.link;
      mLink.classList.remove("is-hidden");
    } else {
      mLink.classList.add("is-hidden");
    }
  }

  function closeModal(){
    modal.classList.add("is-hidden");
    document.body.style.overflow = "";
  }

  track.querySelectorAll(".news-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id));
  });

  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
  if (modalClose) modalClose.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.classList.contains("is-hidden")) closeModal();
  });

  function scrollByCards(dir){
    const card = track.querySelector(".news-card");
    const step = card ? card.getBoundingClientRect().width + 14 : 300;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  if (prev) prev.addEventListener("click", () => scrollByCards(-1));
  if (next) next.addEventListener("click", () => scrollByCards(1));
});


// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.getElementById("showAllHighlights");
//   const grid = document.getElementById("allHighlightsGrid");

//   const highlights = [
//     "md9-jG4RzXs",
//     "xkKvSszJ2-g",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",
//     "Hml6MaRRkn8",

    
//   ];

//   btn.addEventListener("click", () => {
//     grid.style.display = "grid";

//     if(grid.children.length === 0){
//       highlights.forEach(id => {
//         const a = document.createElement("a");
//         a.href = `https://www.youtube.com/watch?v=${id}`;
//         a.target = "_blank";
//         a.className = "video-card";

//         const img = document.createElement("img");
//         img.src = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

//         const play = document.createElement("div");
//         play.className = "play";
//         play.innerText = "▶";

//         a.appendChild(img);
//         a.appendChild(play);
//         grid.appendChild(a);
//       });
//     }

//     grid.scrollIntoView({ behavior: "smooth" });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("showAllHighlights");
  const grid = document.getElementById("allHighlightsGrid");

  const highlights = [
    "md9-jG4RzXs",
    "Hml6MaRRkn8",
    "or9ooNWaqKU",
    "bFXLP487kXo",
    "Li93iQDZQeg",
    "o0ANo138B3c",
    "xkRXnrvFCY0",
    "ajzQj7bjSWE",
    "ATlMK7ln5Dc",
    "93ZnZF_zWds",
    "Wj6DHG0X66k",
    "daWr9xnkKS4",
    
    "yApM21L0GgY",
    "hrPtK5D5yn4",
    "JIRqdeNl2cU",
    "kGMp1Byuwto",
    "JntKOmbMI08",
    "XZhXFbFCOu4",
    "CdKwc1bC44c",
    "hTqxfkWRimk",
    "MK83clSv6-k",
    "uQc-pW3QLuI",
    "BeaVJggQ2dc",
    "S-LMSpzlnc0",
  ];

  let visible = false; // aktuální stav

  btn.addEventListener("click", () => {
    visible = !visible; // přepne stav

    if (visible) {
      grid.style.display = "grid";
      btn.innerText = "Hide Highlights"; // změna textu

      // naplníme grid jen jednou
      if(grid.children.length === 0){
        highlights.forEach(id => {
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
          grid.appendChild(a);
        });
      }

      grid.scrollIntoView({ behavior: "smooth" });
    } else {
      grid.style.display = "none";
      btn.innerText = "All Highlights"; // vrátíme text zpět
    }
  });
});
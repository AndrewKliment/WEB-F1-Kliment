console.log("✅ teams.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  // ====== NASTAVENÍ ======
  const DRIVERS_PAGE = "drivers.html"; // změň pokud máš jiný název (např. piloti.html)

  // ====== DATA: DOPLŇ SI ZBÝVAJÍCÍ TÝMY ======
  // Pozn.: nechal jsem 2 hotové (Ferrari + Red Bull) a zbytek jako šablony.
  // Když doplníš image cesty, hned to pojede.
  const teams = [
    {
      id: "ferrari",
      name: "SCUDERIA FERRARI HP",
      gradient: "linear-gradient(135deg, #7a0000, #2a0000)",
      detailGradient: "linear-gradient(135deg, #7a0000, #100008)",
      cardCar: "images/teams/ferrari-car.png",
      heroLogo: "images/teams-logo/ferrari-logo.png",
      heroCar: "images/teams/ferrari-car.png",
      drivers: [
        { id: "leclerc", name: "CHARLES \n\n LECLERC", img: "images/charles.leclerc.png" },
        { id: "hamilton", name: "LEWIS \n\n HAMILTON", img: "images/lewis.hamilton.png" }
      ],
      profile: {
        fullName: "SCUDERIA FERRARI HP",
        base: "MARANELLO, ITALY",
        chief: "FRED VASSEUR",
        chassis: "SF-25",
        powerUnit: "FERRARI",
        entry: "1950"
      },
      bio: "Scuderia Ferrari stands as the most iconic and successful team in motor racing history. Founded by the visionary Enzo Ferrari in 1929, ´the Prancing Horse´ holds the unique distinction of being the only team to have competed in every single Formula 1 World Championship since the inaugural season in 1950. Operating out of its historic base in Maranello, Italy, the team represents a world-class blend of cutting-edge technology, meticulous Italian craftsmanship, and an unparalleled passion for competition. \n\n The team’s storied legacy is backed by a record 16 Constructors' Championships and 15 Drivers' Titles, achievements forged by legendary figures such as Niki Lauda and Michael Schumacher. Today, Ferrari continues to push the boundaries of automotive performance, fielding an elite driver pairing of Charles Leclerc and Lewis Hamilton. Supported by the ´Tifosi´—the most devoted fan base in the world—Ferrari remains the ultimate benchmark of speed and prestige, proving that while many teams race, only one has become a true global legend." ,
      
      photos: ["images/teams-bio/ferrari-h-v-l.png", "images/teams-bio/ferrari-car-team.jpg"]
    },
    {
      id: "redbull",
      name: "ORACLE RED BULL RACING",
      gradient: "linear-gradient(135deg, #1218c9, #070718)",
      detailGradient: "linear-gradient(135deg, #1218c9, #070718)",
      cardCar: "images/teams/redbull-car.png",
      heroLogo: "images/teams-logo/redbull.png",
      heroCar: "images/teams/redbull-car.png",
      drivers: [
        { id: "verstappen", name: "MAX \n\nVERSTAPPEN", img: "images/max.verstappen.png" },
        { id: "tsunoda", name: "YUKI \n\n TSUNODA", img: "images/tsunoda.png" }
      ],
      profile: {
        fullName: "ORACLE RED BULL RACING",
        base: "MILTON KEYNES, UNITED KINGDOM",
        chief: "LAURENT MEKIES",
        chassis: "RB21",
        powerUnit: "HONDA RBPT",
        entry: "1997"
      },
      bio: "Red Bull Racing has redefined the landscape of modern Formula 1, evolving from a bold newcomer into one of the most formidable forces in sporting history. Founded in 2005 after the takeover of the Jaguar Racing team, the Milton Keynes-based squad brought a fresh, high-energy approach to the paddock. What started as a brand known for its ´work hard, party hard´ attitude quickly transformed into a clinical winning machine, driven by a relentless pursuit of technical perfection and innovative engineering.\n\nWith multiple Constructors' and Drivers' Championships, Red Bull’s legacy is anchored by the genius of legendary designer Adrian Newey and the dominance of world-class champions. The team’s first golden era was defined by Sebastian Vettel, who secured four consecutive titles, while the current era is headlined by the record-breaking performances of Max Verstappen. Today, Red Bull remains at the pinnacle of the sport, characterized by its lightning-fast pit stops and a fearless strategic approach. Backed by an elite junior program and a global fan base, the team continues to challenge the established order, proving that through innovation and determination, a ´drinks company´ can conquer the world of elite motorsport.",
      photos: ["images/teams-bio/redbull-team.jpg", "images/teams-bio/redbull-100th.jpg"]
    },

    // ===== šablony (doplň cesty + jezdce) =====
    { id:"mclaren", 
      name:"MCLAREN FORMULA 1 TEAM", 
      gradient:"linear-gradient(135deg,#ff8c00,#6b2500)", 
      detailGradient:"linear-gradient(135deg,#ff8c00,#1b0a00)", 
      cardCar:"images/teams/mclaren-car.png", 
      heroLogo:"images/teams-logo/mclaren.png", 
      heroCar:"images/teams/mclaren-car.png",
      drivers:
      [{id:"norris",name:"LANDO NORRIS",img:"images/lando.norris.png"},{id:"piastri",name:"OSCAR PIASTRI",img:"images/oscar.piastri.png"}],
      profile:{
        fullName:"MCLAREN FORMULA 1 TEAM",
        base:"WOKING, UNITED KINGDOM.",chief:"ZAK BROWN",
        chassis:"MCL38",
        powerUnit:"MERCEDES-AMG",
        entry:"1966"
    },
      bio:"McLaren Racing stands as one of the most storied and technologically advanced names in the world of Formula 1. Founded in 1963 by the legendary New Zealand racer Bruce McLaren, the team has evolved from a small, ambitious outfit into a global powerhouse of automotive excellence. Based at the futuristic McLaren Technology Centre in Woking, the team is synonymous with clinical precision, relentless innovation, and a ´never give up´ racing philosophy. \n\nWith an illustrious history that includes 8 Constructors' Championships and 12 Drivers' Titles, McLaren has been the home of some of the greatest icons to ever sit in a cockpit. The late 1980s and early 90s saw the team achieve unprecedented dominance with the legendary pairing of Ayrton Senna and Alain Prost, while later years were defined by the triumphs of Mika Häkkinen and the spectacular debut of Lewis Hamilton. Today, led by the dynamic duo of Lando Norris and Oscar Piastri, McLaren is once again surging to the front of the grid. By blending its rich heritage with a bold, modern vision, the team continues to prove that it remains a pioneer of speed and a true titan of the sport.", 
      photos:["images/teams-bio/mclaren-team.jpg","images/teams-bio/mclaren-pit.jpg"]
    },
    { id:"mercedes", 
     name:"MERCEDES-AMG PETRONAS F1 TEAM", 
     gradient:"linear-gradient(135deg,#00c2a8,#003f38)", 
     detailGradient:"linear-gradient(135deg,#00d8bb,#001c18)", 
     cardCar:"images/teams/mercedes-car.png", 
     heroLogo:"images/teams-logo/mercedes.png", 
     heroCar:"images/teams/mercedes-car.png",
     drivers:
     [{id:"antonelli",name:"KIMI ANTONELLI",img:"images/kimi.antonelli.png"},{id:"russell",name:"GEORGE RUSSELL",img:"images/george.russell.png"}],
     profile:{
        fullName:"MERCEDES-AMG PETRONAS F1 TEAM",
        base:"BRACKLEY, UNITED KINGDOM",
        chief:"TOTO WOLFF",
        chassis:"W16",
        powerUnit:"MERCEDES-AMG",
        entry:"1954 (RETURNED IN 2010)"
    },
      bio:"THE MERCEDES-AMG PETRONAS F1 TEAM IS THE MODERN EMBODIMENT OF ENGINEERING PERFECTION AND RELENTLESS AMBITION. WHILE THE ´SILVER ARROWS´ LEGACY DATES BACK TO THE 1950S WITH JUAN MANUEL FANGIO, THE TEAM’S MODERN REINCARNATION HAS REDEFINED THE LIMITS OF SUCCESS. OPERATING FROM THEIR STATE-OF-THE-ART HEADQUARTERS IN BRACKLEY AND HIGH-PERFORMANCE POWERTRAINS IN BRIXWORTH, MERCEDES HAS BECOME SYNONYMOUS WITH TECHNOLOGICAL SUPREMACY AND A ´TOTAL COMPETITION´ MINDSET. \n\n DURING AN UNPRECEDENTED EIGHT-YEAR STRETCH FROM 2014 TO 2021, THE TEAM ACHIEVED A RECORD-BREAKING EIGHT CONSECUTIVE CONSTRUCTORS' TITLES, A FEAT NEVER BEFORE SEEN IN THE SPORT. THIS GOLDEN ERA WAS DEFINED BY THE STATISTICAL JUGGERNAUT OF LEWIS HAMILTON AND THE CLINICAL LEADERSHIP OF TOTO WOLFF. AS THE SPORT ENTERS A BOLD NEW ERA OF REGULATIONS IN 2026, MERCEDES IS ONCE AGAIN REINVENTING ITSELF. WITH THE EXCITING PAIRING OF GEORGE RUSSELL AND THE RISING PRODIGY ANDREA KIMI ANTONELLI, THE TEAM IS FOCUSED ON RECLAIMING ITS THRONE AT THE PINNACLE OF THE GRID, PROVING THAT THE SILVER ARROWS NEVER STOP CHASING THE NEXT VICTORY.",
      photos:["images/teams-bio/mercedes-trio.jpg","images/teams-bio/mercedes-pit.jpg"]
    },
    { id:"aston", 
      name:"ASTON MARTIN ARAMCO FORMULA ONE TEAM", 
      gradient:"linear-gradient(135deg,#006b3c,#001f12)", 
      detailGradient:"linear-gradient(135deg,#008a4d,#000f08)", 
      cardCar:"images/teams/astonmartin-car.png", 
      heroLogo:"images/teams-logo/astonmartin.png", 
      heroCar:"images/teams/astonmartin-car.png", 
      drivers:
      [{id:"alonso",name:"FERNANDO ALONSO",img:"images/fernando.alonso.png"},{id:"stroll",name:"LANCE STROLL",img:"images/lance.stroll.png"}],
      profile:{
        fullName:"ASTON MARTIN ARAMCO FORMULA ONE TEAM",
        base:"SILVERSTONE, UNITED KINGDOM",
        chief:"ANDY COWELL",
        chassis:"AMR25",
        powerUnit:"MERCEDES-AMG",
        entry:"1959 (RETURNED IN 2021)"
    },
      bio:"THE ASTON MARTIN ARAMCO FORMULA ONE TEAM ENTERS 2025 AT A PIVOTAL CROSSROADS IN ITS AMBITIOUS JOURNEY. OPERATING FROM THE NEWLY COMPLETED AND TECHNOLOGICALLY REVOLUTIONARY AMR TECHNOLOGY CAMPUS IN SILVERSTONE, THE TEAM IS HARNESSING THE FULL POWER OF ITS OWN WIND TUNNEL FOR THE FIRST TIME. UNDER THE STRATEGIC GUIDANCE OF ANDY COWELL AND THE RECENT ARRIVAL OF THE LEGENDARY ADRIAN NEWEY, THE ´BRITISH RACING GREEN´ SQUAD IS FOCUSED ON BRIDGING THE GAP TO THE FRONT-RUNNERS BEFORE THEIR TRANSITION TO BECOMING A FULL HONDA WORKS TEAM IN 2026. \n\nTHE AMR25 REPRESENTS THE PINNACLE OF THE TEAM´S PARTNERSHIP WITH MERCEDES POWER, DRIVEN BY THE UNRELENTING PASSION OF DOUBLE WORLD CHAMPION FERNANDO ALONSO AND THE RESILIENCE OF LANCE STROLL. AS LAWRENCE STROLL´S VISION OF A WORLD-CHAMPIONSHIP-CALIBER ORGANIZATION BECOMES A PHYSICAL REALITY, THE TEAM CONTINUES TO PROVE THAT THEY ARE NO LONGER JUST MIDFIELD CONTENDERS. ASTON MARTIN IS A LURKING GIANT, PREPARING TO STRIKE AND REDEFINE THE HIERARCHY OF FORMULA 1 THROUGH SHEER INVESTMENT, ELITE TALENT, AND A RELENTLESS PURSUIT OF RACING PERFECTION.", 
      photos:["images/teams-bio/astonmartin-duo.jpg","images/teams-bio/astonmartin-pit.jpg"]
    },
    { id:"williams", 
      name:"ATLASSIAN WILLIAMS RACING", 
      gradient:"linear-gradient(135deg,#1e90ff,#003c80)", 
      detailGradient:"linear-gradient(135deg,#339dff,#001b40)", 
      cardCar:"images/teams/williams-car.png", 
      heroLogo:"images/teams-logo/williams.png", 
      heroCar:"images/teams/williams-car.png",
      drivers:
      [{id:"albon",name:"ALEX ALBON",img:"images/alex.albon.png"},{id:"sainz",name:"CARLOS SAINZ",img:"images/carlos.sainz.png"}],
      profile:{
        fullName:"ATLASSIAN WILLIAMS RACING",
        base:"GROVE, UNITED KINGDOM",
        chief:"JAMES VOWLES",
        chassis:"FW47",
        powerUnit:"MERCEDES-AMG",
        entry:"1977"
    },
      bio:"WILLIAMS RACING ENTERS 2025 AS THE SPORT´S MOST IMPROVED FORCE, SHEDDING ITS REAR-OF-THE-GRID STATUS TO BECOME A GENUINE MIDFIELD POWERHOUSE. FOUNDED BY THE LEGENDARY SIR FRANK WILLIAMS AND PATRICK HEAD, THE TEAM REMAINS ONE OF THE ´BIG THREE´ IN TERMS OF HISTORICAL SUCCESS, BOASTING 9 CONSTRUCTORS´ TITLES. TODAY, OPERATING FROM THEIR VAST FACILITY IN GROVE UNDER THE REVOLUTIONARY LEADERSHIP OF JAMES VOWLES, THE TEAM IS IN THE MIDST OF A TOTAL TECHNOLOGICAL OVERHAUL DESIGNED TO RETURN THE ´W´ TO THE TOP STEP OF THE PODIUM.\n\nTHE 2025 SEASON MARKS A HISTORIC TURNING POINT WITH THE ARRIVAL OF CARLOS SAINZ, WHO JOINS THE HIGHLY REGARDED ALEX ALBON TO FORM ONE OF THE STRONGEST DRIVER LINE-UPS IN THE TEAM´S MODERN HISTORY. BY REJECTING THE SHORT-TERM FIX AND INVESTING HEAVILY IN LONG-TERM INFRASTRUCTURE AND TALENT, WILLIAMS IS PROVING THAT ITS RECOVERY IS REAL. THE FW47 IS NOT JUST A RACING CAR; IT IS A SYMBOL OF DEFIANCE, CARRYING THE HOPES OF A TEAM DETERMINED TO HONOR ITS GLORIOUS PAST BY CONQUERING A BOLD, NEW FUTURE.", 
      photos:["images/teams-bio/williams-duo.jpg","images/teams-bio/williams-baku.jpg"]
    },
    { id:"kick", 
      name:"STAKE F1 TEAM KICK SAUBER", 
      gradient:"linear-gradient(135deg,#029c0e,#0b3d00)", 
      detailGradient:"linear-gradient(135deg,#2cff00,#031800)", 
      cardCar:"images/teams/kicksauber-car.png", 
      heroLogo:"images/teams-logo/kick.png", 
      heroCar:"images/teams/kicksauber-car.png",
      drivers:
      [{id:"hulkenberg",name:"NICO HÜLKENBERG",img:"images/nico.hulkenberg.png"},{id:"bortoleto",name:"GABRIEL BORTOLETO",img:"images/gabriel.bortoleto.png"}],
      profile:{
        fullName:"STAKE F1 TEAM KICK SAUBER",
        base:"HINWIL, SWITZERLAND",
        chief:"JONATHAN WHEATLEY",
        chassis:"KICK SAUBER C45",
        powerUnit:"FERRARI",
        entry:"1993"
    },
      bio:"STAKE F1 TEAM KICK SAUBER ENTERS 2025 AS A SQUAD IN THE MIDST OF A MASSIVE EVOLUTIONARY SHIFT. BASED IN THE HIGH-TECH WIND TUNNEL FACILITY AT HINWIL, THE TEAM IS CURRENTLY LAYING THE CRITICAL GROUNDWORK FOR THE HIGHLY ANTICIPATED AUDI TAKEOVER IN 2026. THE LEADERSHIP STRUCTURE HAS BEEN COMPLETELY REINVENTED, WITH THE CLINICAL TECHNICAL EXPERTISE OF MATTIA BINOTTO PAIRED WITH THE VAST SPORTING EXPERIENCE OF JONATHAN WHEATLEY. THEIR MISSION IS CLEAR: TO TRANSFORM THE TRADITIONALLY PLUCKY SWISS INDEPENDENT INTO A PINNACLE-LEVEL WORKS POWERHOUSE. \n\nTHE 2025 DRIVER LINE-UP FEATURES AN EXCITING BLEND OF EXPERIENCE AND RAW POTENTIAL, AS THE VETERAN NICO HULKENBERG JOINS THE PROMISING BRAZILIAN ROOKIE GABRIEL BORTOLETO. THE C45 CHASSIS SERVES AS THE FINAL PLATFORM BEFORE THE ICONIC FOUR RINGS OF AUDI OFFICIALLY ADORN THE ENGINE COVER. BY STRENGTHENING THEIR TECHNICAL DEPARTMENT AND REFINING THEIR TRACKSIDE OPERATIONS, SAUBER IS PROVING THAT THEY ARE NO LONGER JUST A ´FILLER´ ON THE GRID. THEY ARE A TEAM REBUILDING ITS VERY DNA, PREPARING TO CHALLENGE THE ESTABLISHED ELITE IN THE DAWN OF A NEW ERA.", 
      photos:["images/teams-bio/kick-uk.jpg","images/teams-bio/kick-photo.jpg"]
    },
    { id:"alpine", 
      name:"BWT ALPINE F1 TEAM", 
      gradient:"linear-gradient(135deg,#ff3cac,#5b006e)", 
      detailGradient:"linear-gradient(135deg,#ff5cc0,#2b0033)", 
      cardCar:"images/teams/alpine-car.png", 
      heroLogo:"images/teams-logo/alpine.png", 
      heroCar:"images/teams/alpine-car.png",
      drivers:
      [{id:"gasly",name:"PIERRE GASLY",img:"images/pierre.gasly.png"},{id:"colapinto",name:"FRANCO COLAPINTO",img:"images/franco.colapinto.png"}],
      profile:{
        fullName:"BWT ALPINE F1 TEAM",
        base:"ENSTONE, UNITED KINGDOM / VIRY-CHÂTILLON, FRANCE",
        chief:"FLAVIO BRIATORE",
        chassis:"A525",
        powerUnit:"RENAULT",
        entry:"1981 (AS Toleman) / 2021 (AS Alpine)"
    },
      bio:"THE BWT ALPINE F1 TEAM ENTERS 2025 AMIDST A RADICAL RESTRUCTURING AIMED AT RESTORING THE GLORY OF THE ENSTONE-BASED SQUAD. UNDER THE FRESH LEADERSHIP OF OLIVER OAKES—THE SECOND-YOUNGEST TEAM PRINCIPAL IN F1 HISTORY—AND THE STRATEGIC OVERSEEING OF FLAVIO BRIATORE, THE TEAM IS NAVIGATING A CRITICAL YEAR. 2025 MARKS A POIGNANT CHAPTER AS IT IS THE FINAL SEASON FOR THE RENAULT POWER UNIT, ENDING A HISTORIC ERA OF FRENCH ENGINE MANUFACTURING BEFORE THE TEAM TRANSITIONS TO MERCEDES POWER FOR THE 2026 REGULATIONS. \n\nTHE ON-TRACK CHARGE IS LED BY THE EXPERIENCED PIERRE GASLY AND THE HIGHLY ANTICIPATED AUSTRALIAN ROOKIE JACK DOOHAN, WHO STEPS UP FROM HIS RESERVE ROLE TO PROVE HIS WORTH IN THE PINNACLE OF MOTORSPORT. THE A525 CHASSIS IS THE PRODUCT OF A REINVIGORATED TECHNICAL DEPARTMENT DETERMINED TO OVERCOME THE INCONSISTENCIES OF RECENT YEARS. BY BLENDING THE AMBITION OF THE ALPINE BRAND WITH A ´BACK TO BASICS´ RACING PHILOSOPHY, THE TEAM IS FIGHTING TO RECLAIM ITS STATUS AS THE PREMIER MIDFIELD FORCE WHILE SIMULTANEOUSLY PREPARING FOR A BOLD, WORKS-INDEPENDENT FUTURE.", 
      photos:["images/teams-bio/alpine-gasly.jpg","images/teams-bio/alpine-photo.jpg"]
    },
    { id:"visarb", 
      name:"VISA CASH APP RACING BULLS F1 TEAM", 
      gradient:"linear-gradient(135deg,#0090ff,#002f5c)", 
      detailGradient:"linear-gradient(135deg,#00a2ff,#001826)", 
      cardCar:"images/teams/rb-car.png", 
      heroLogo:"images/teams-logo/vcarb.png", 
      heroCar:"images/teams/rb-car.png",
      drivers:
      [{id:"lawson",name:"LIAM LAWSON",img:"images/liam.lawson.png"},{id:"hadjar",name:"ISACK HADJAR",img:"images/isack.hadjar.png"}],
      profile:{
        fullName:"VISA CASH APP RACING BULLS F1 TEAM",
        base:"FAENZA, ITALY / MILTON KEYNES, UNITED KINGDOM",
        chief:"ALAN PERMANE",
        chassis:"VCARB02",
        powerUnit:"HONDA RBPT",
        entry:"2006 (AS TORO ROSSO) / 2024 (AS VCARB)"
    },
      bio:"THE VISA CASH APP RACING BULLS ENTIRELY REINVENTED THEMSELVES FOR THE 2025 SEASON, SHEDDING THE LAST VESTIGES OF BEING MERELY A ´JUNIOR TEAM´. BASED IN THE HISTORIC HEART OF FAENZA BUT UTILIZING DEEPER TECHNICAL SYNERGIES WITH RED BULL TECHNOLOGY IN MILTON KEYNES, VCARB HAS EVOLVED INTO A SOPHISTICATED RACING OUTFIT. THE 2025 SEASON SAW A SIGNIFICANT LEADERSHIP SHIFT AS ALAN PERMANE TOOK THE REINS AS TEAM PRINCIPAL, BRINGING DECADES OF CHAMPIONSHIP-WINNING EXPERIENCE TO STEER THE SQUAD THROUGH THE HIGHLY COMPETITIVE MIDFIELD. \n\nTHE DRIVER LINE-UP FOR 2025 HIGHLIGHTS THE TEAM´S DUAL ROLE AS A PROVING GROUND AND A PERFORMANCE HUB, FEATURING THE BLAZING SPEED OF YUKI TSUNODA ALONGSIDE THE HIGHLY-RATED ROOKIE ISACK HADJAR, WHO EARNED HIS SEAT THROUGH THE RED BULL JUNIOR PROGRAM. THE VCARB 02 CHASSIS REPRESENTS A BOLD STEP FORWARD IN AERODYNAMIC AGGRESSION, BENEFITING FROM THE TEAM´S INCREASED INDEPENDENCE AND REFINED OPERATIONAL FOCUS. AS THEY PUSH FOR REGULAR PODIUM CONTENTION, VCARB CONTINUES TO PROVE THAT THEY ARE A FORMIDABLE ENTITY IN THEIR OWN RIGHT, CARRYING THE SPIRIT OF FAENZA INTO A NEW ERA OF ELITE RACING.", 
      photos:["images/teams-bio/vcarb-podium.jpg","images/teams-bio/vcarb-pit.jpg"]
    },
    { id:"haas", 
      name:"MONEYGRAM HAAS F1 TEAM", 
      gradient:"linear-gradient(135deg,#acb0ad,#000000)", 
      detailGradient:"linear-gradient(135deg,#878787,#acb0ad)", 
      cardCar:"images/teams/haas-car.png", 
      heroLogo:"images/teams-logo/haas.png", 
      heroCar:"images/teams/haas-car.png", 
      drivers:
      [{id:"ocon",name:"ESTEBAN OCON",img:"images/esteban.ocon.png"},{id:"bearman",name:"OLLIE BEARMAN",img:"images/ollie.bearman.png"}],
      profile:{
        fullName:"MONEYGRAM HAAS F1 TEAM",
        base:"KANNAPOLIS, UNITED STATES / BANBURY, UNITED KINGDOM",
        chief:"AYAO KOMATSU",
        chassis:"VF-25",
        powerUnit:"FERRARI",
        entry:"2016"
    },
      bio:"THE MONEYGRAM HAAS F1 TEAM ENTERS 2025 AS A SYMBOL OF REBIRTH AND CALCULATED AMBITION. AFTER YEARS OF STRUGGLE, THE TEAM HAS TRANSFORMED UNDER THE PRAGMATIC AND TECHNICAL LEADERSHIP OF AYAO KOMATSU, WHO HAS REPLACED THE LARGER-THAN-LIFE GÜNTHER STEINER. BY STRENGTHENING THEIR TECHNICAL TIES WITH FERRARI AND OPTIMIZING THEIR UNIQUE DESIGN MODEL ACROSS THREE GLOBAL BASES—KANNAPOLIS, BANBURY, AND MARANELLO—HAAS HAS ONCE AGAIN BECOME A FORMIDABLE POINT-SCORING THREAT IN THE MIDFIELD. \n\nTHE 2025 SEASON MARKS THE DAWN OF AN ENTIRELY NEW CHAPTER WITH A REFRESHED DRIVER LINE-UP THAT BLENDS RAW POTENTIAL WITH PROVEN PEDIGREE. THE HIGHLY-RATED BRITISH PRODIGY OLIVER BEARMAN MAKES HIS FULL-TIME DEBUT ALONGSIDE THE DISCIPLINED AND AGGRESSIVE ESTEBAN OCON. THE VF-25 CHASSIS, BUILT ON THE LESSONS OF THE TEAM´S SUCCESSFUL 2024 TURNAROUND, IS DESIGNED TO MAXIMIZE AERODYNAMIC EFFICIENCY AND TIRE MANAGEMENT. AS THE ONLY AMERICAN TEAM ON THE GRID, HAAS CONTINUES TO DEFY THE ODDS, PROVING THAT A LEAN, EFFICIENT, AND HARD-WORKING PHILOSOPHY CAN STILL COMPETE WITH THE GLOBAL GIANTS OF FORMULA 1.", 
      photos:["images/teams-bio/haas-ocon.jpg","images/teams-bio/haas-photo.jpg"]
    },
  ];

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

  // Když chybí základní container, nedává smysl pokračovat
  if (!listEl) {
    console.error("❌ Missing #teamsList in HTML");
    return;
  }
  if (!detail) {
    console.error("❌ Missing #teamDetail in HTML");
    return;
  }

  // ====== RENDER LIST ======
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

  // ====== OPEN TEAM DETAIL ======
  function openTeam(id) {
    const t = teams.find(x => x.id === id);
    if (!t) return;

    if (listWrap) listWrap.classList.add("is-hidden");
    

    // background gradient
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

    

    // hero images
    if (tHeroLogo) {
      tHeroLogo.src = t.heroLogo || "";
      tHeroLogo.style.display = t.heroLogo ? "block" : "none";
    }
    if (tHeroCar) tHeroCar.src = t.heroCar || "";

    // drivers mini
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

    // profile
    const p = t.profile || {};
    if (tpFullName) tpFullName.textContent = p.fullName || "—";
    if (tpBase) tpBase.textContent = p.base || "—";
    if (tpChief) tpChief.textContent = p.chief || "—";
    if (tpChassis) tpChassis.textContent = p.chassis || "—";
    if (tpPU) tpPU.textContent = p.powerUnit || "—";
    if (tpEntry) tpEntry.textContent = p.entry || "—";

    // bio
    if (tBio) tBio.innerHTML = (t.bio || "").replace(/\n\n/g, "<br><br>");
  

    // photos
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

  // start
  renderTeamsList();

  // open from hash
  if (location.hash) {
    const id = location.hash.replace("#", "");
    if (teams.some(t => t.id === id)) openTeam(id);
  }
});

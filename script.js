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


const drivers = [
  {
    id: "leclerc",
    name: "CHARLES LECLERC",
    team: "SCUDERIA FERRARI HP",
    dob: "16/10/1997",
    pob: "MONTE CARLO, MONACO",
    gradient: "linear-gradient(135deg, #d80202ff, #aa0303ff)",
    detailGradient: "linear-gradient(135deg, #8f0000ff, #000000ff)",
    cardImage: "images/charles.leclerc.png",
    portrait: "images/charles.leclerc.png",
    bio: "THE PRINCE OF MONACO´S GREATEST TEST. FOR CHARLES LECLERC, THE 2025 SEASON REPRESENTS THE ULTIMATE CROSSROADS IN HIS CAREER WITH THE PRANCING HORSE. THE MAN KNOWN AS ´IL PREDESTINATO´ FACES HIS MOST FORMIDABLE CHALLENGE YET: THE ARRIVAL OF SEVEN-TIME CHAMPION LEWIS HAMILTON IN THE NEIGHBORING GARAGE. LECLERC, CELEBRATED FOR HIS BREATHTAKING QUALIFYING LAPS AND RAW, UNFILTERED SPEED, MUST NOW PROVE THAT HE REMAINS THE SPIRITUAL AND COMPETITIVE HEART OF MARANELLO AMIDST THE HYPE OF THIS NEW ERA.\n\nHIS DRIVING STYLE IS A HIGH-STAKES DANCE ON THE EDGE OF THE LIMIT, BALANCING GENIUS WITH THE CONSTANT RISK OF THE BARRIERS. LECLERC´S LOYALTY TO FERRARI IS DEEP-ROOTED, DRIVEN BY A PROMISE MADE TO HIS LATE FATHER AND HIS MENTOR JULES BIANCHI. IN 2025, HE HAS REFINED HIS AGGRESSION, COMBINING HIS NATURAL FLAIR WITH A HARDENED MENTAL TOUGHNESS NECESSARY TO GO WHEEL-TO-WHEEL WITH THE LEGENDS OF THE SPORT. HE REMAINS THE ABSOLUTE MASTER OF THE STREET CIRCUITS, WHERE HIS BRAVERY AND PRECISION ARE UNMATCHED.\n\nBORN AND RAISED ON THE VERY STREETS THAT HOST THE WORLD´S MOST FAMOUS RACE, LECLERC CARRIES THE WEIGHT OF AN ENTIRE NATION AND THE TIFOSI ON HIS SHOULDERS. DESPITE THE GLAMOUR OF HIS HOME TOWN, HE REMAINS GROUNDED, OFTEN FINDING SOLACE IN HIS MUSIC AND PIANO COMPOSITIONS WHEN AWAY FROM THE PADDOCK. AS THE 2025 CAMPAIGN UNFOLDS, THE EXPECTATIONS FOR FERRARI´S GOLDEN BOY ARE AT AN ALL-TIME HIGH—FOR CHARLES, THE GOAL IS NO LONGER JUST WINNING RACES, IT IS ABOUT SECURING HIS LEGACY AS A WORLD CHAMPION.",
    bioPhotos: ["images/driver-bio/leclerc-photo.jpg", "images/driver-bio/leclerc-win.jpg"]
  },
  {
    id: "hamilton",
    name: "LEWIS HAMILTON",
    team: "SCUDERIA FERRARI HP",
    dob: "07/01/1985",
    pob: "STEVENAGE, ENGLAND",
    gradient: "linear-gradient(135deg, #d80202ff, #aa0303ff)",
    detailGradient: "linear-gradient(135deg, #8f0000ff, #000000ff)",
    cardImage: "images/lewis.hamilton.png",
    portrait: "images/lewis.hamilton.png",
    bio: "THE EIGHTH WONDER IN MARANELLO RED. THE 2025 SEASON MARKS THE BEGINNING OF THE MOST ANTICIPATED PARTNERSHIP IN THE HISTORY OF MOTORSPORT AS SIR LEWIS HAMILTON EMBARKS ON HIS MAIDEN VOYAGE WITH SCUDERIA FERRARI. AFTER MORE THAN A DECADE OF UNPARALLELED SUCCESS WITH MERCEDES, THE SEVEN-TIME WORLD CHAMPION HAS CHOSEN TO PURSUE THE ULTIMATE ROMANTIC CHALLENGE: BRINGING THE DRIVERS´ TITLE BACK TO ITALY. HAMILTON ARRIVES NOT JUST AS A DECORATED VETERAN, BUT AS A HUNGRY COMPETITOR DRIVEN BY THE DESIRE TO SURPASS ALL RECORDS AND SECURE AN UNPRECEDENTED EIGHTH WORLD CROWN WITHIN THE SACRED WALLS OF MARANELLO.\n\nBEYOND THE ASPHALT, HAMILTON REMAINS A GLOBAL PHENOMENON, USING HIS MASSIVE PLATFORM TO ADVOCATE FOR SUSTAINABILITY, DIVERSITY, AND SOCIAL CHANGE, EVEN AS HE NAVIGATES THE INTENSE PRESSURE OF THE ITALIAN MEDIA LANDSCAPE. DESPITE THE GLAMOUR OF HIS LIFESTYLE, HIS FOCUS REMAINS LASER-SHARP ON THE TECHNICAL FEEDBACK REQUIRED TO TRANSFORM FERRARI INTO A DOMINANT FORCE ONCE AGAIN. AS HE RACES THROUGH THE 2025 CAMPAIGN, THE WORLD WATCHES WITH BATED BREATH—FOR WITH HAMILTON IN A RED CAR, THERE IS A COLLECTIVE FEELING THAT HISTORY IS NOT JUST BEING WRITTEN, BUT REINVENTED BEFORE OUR VERY EYES.\n\nHIS ADAPTIVE RACING STYLE, CHARACTERIZED BY SURGICAL PRECISION AND AN UNRIVALED ABILITY TO MANAGE RACES FROM THE FRONT, IS NOW BEING TESTED AGAINST THE UNIQUE CHARACTERISTICS OF THE FERRARI CHASSIS. IN 2025, HAMILTON HAS SHOWN THAT HIS ELITE KINETIC SENSE AND BRAKING LATE INTO THE CORNERS REMAIN AS POTENT AS EVER, PROVING TO CRITICS THAT HIS HUNGER FOR VICTORY HAS NOT DIMINISHED WITH TIME. THE ICONIC BRITON CONTINUES TO PUSH THE LIMITS OF WHAT IS POSSIBLE, COMBINING HIS VAST EXPERIENCE WITH A RENEWED ENERGY THAT HAS REINVIGORATED THE TIFOSI AND SET THE STAGE FOR AN EXPLOSIVE CHAMPIONSHIP BATTLE.",
   bioPhotos: ["images/driver-bio/hamilton-win.jpg", "images/driver-bio/hamilton-pit.jpg"]
    


  },
  {
    id: "verstappen",
    name: "MAX VERSTAPPEN",
    team: "ORACLE RED BULL RACING",
    dob: "30/09/1997",
    pob: "HASSELT, BELGIUM",
    gradient: "linear-gradient(135deg, #0b1cff, #070717)",
    detailGradient: "linear-gradient(135deg, #1a3cff, #000000ff)",
    cardImage: "images/max.verstappen.png",
    portrait: "images/max.verstappen.png",
    bio: "HE’S MAX BY NAME, AND MAX BY NATURE.ARRIVING AS FORMULA 1’S YOUNGEST EVER COMPETITOR AT JUST 17 YEARS OLD, VERSTAPPEN PUSHED HIS CAR, HIS RIVALS AND THE SPORT’S RECORD BOOKS TO THE LIMIT. THE BABY-FACED DUTCHMAN WITH THE HEART OF A LION TOOK THE TORO ROSSO – AND THEN THE RED BULL – BY THE HORNS WITH HIS INSTINCTIVE RACING STYLE. F1’S YOUNGEST POINTS SCORER SOON BECAME ITS YOUNGEST RACE WINNER – AT THE AGE OF 18 YEARS AND 228 DAYS – WITH AN OPPORTUNISTIC BUT CONTROLLED DRIVE ON DEBUT FOR RED BULL IN BARCELONA 2016. A TRUE WHEEL-TO-WHEEL RACER, ANOTHER STUNNING DRIVE IN BRAZIL FROM THE BACK OF THE PACK TO THE PODIUM ON A TREACHEROUS WET TRACK KEPT THE PLAUDITS COMING. VERSTAPPEN’S NO-HOLDS-BARRED ATTITUDE AND HARD DEFENDING HAVE SOMETIMES LANDED HIM IN HOT WATER WITH HIS PEERS AND PAYMASTERS. BUT THE MISTAKES THAT INITIALLY MARRED HIS POTENTIAL HAVE GIVEN WAY TO MATURITY, WHILE THE BRAVADO AND ENERGY THAT MAKE HIM A BLOCKBUSTER TALENT HAVE REMAINED – AND THE VICTORIES HAVE KEPT ON COMING.\n\nTHEY LED TO HIS FIRST F1 DRIVERS’ CROWN AFTER THAT NOW LEGENDARY, FINAL-ROUND SHOWDOWN WITH LEWIS HAMILTON IN 2021 AND HE FOLLOWED THAT UP WITH A POWERHOUSE TITLE DEFENCE IN 2022. AN EPIC THIRD SUCCESSIVE CHAMPIONSHIP TRIUMPH FEATURED A RECORD 19 WINS FROM 23 GRANDS PRIX, AND HE HELD ON FOR A FOURTH IN 2024, DESPITE RED BULL FALLING OFF THE PACE TOWARDS THE END OF THE CAMPAIGN. THE SON OF FORMER F1 DRIVER JOS VERSTAPPEN AND SUPER-QUICK KARTING MUM SOPHIE KUMPEN, RACING RUNS THROUGH HIS GENES. DESPITE MOVING OUT OF DAD’S HOUSE TO LIVE IN MONACO, VERSTAPPEN REMAINS CLOSE TO HIS FAMILY, AND THOUGH HE’S NOT AFRAID TO \n\nSPEAK HIS MIND, HE CAN STILL BE SURPRISINGLY SHY. HAVING BECOME THE NETHERLANDS' FIRST WORLD CHAMPION AGED JUST 24, THE EXPECTATIONS FOR THE NEW GENERATION’S LEADING LIGHT ARE SKY HIGH – BUT WITH VERSTAPPEN THERE’S A FEELING THAT THE SKY’S THE LIMIT.",
    bioPhotos: ["images/max-win.jpg", "images/max-himself.jpg"]
  },
  {
    id: "tsunoda",
    name: "YUKI TSUNODA",
    team: "ORACLE RED BULL RACING",
    dob: "11/05/2000",
    pob: "SAGAMIHARA, JAPAN",
    gradient: "linear-gradient(135deg, #0b1cff, #101010)",
    detailGradient: "linear-gradient(135deg, #0b1cff, #0a0a14)",
    cardImage: "images/tsunoda.png",
    portrait: "images/tsunoda.png",
    bio: "THE FIERY SAMURAI´S ULTIMATE OPPORTUNITY. AFTER FOUR SEASONS OF DRAMATIC GROWTH AND VOLATILE BRILLIANCE WITHIN THE JUNIOR SQUAD, YUKI TSUNODA HAS FINALLY STEPPED INTO THE BIG LEAGUES FOR 2025. THE JAPANESE SPEEDSTER, ONCE KNOWN MORE FOR HIS EXPLOSIVE RADIO OUTBURSTS THAN HIS PODIUM FINISHES, HAS TRANSFORMED INTO A DISCIPLINED AND LETHAL COMPETITOR. HAVING PROVED HIS WORTH BY CONSISTENTLY DRAGGING MID-FIELD CARS INTO THE POINTS, YUKI NOW POSSESSES THE MACHINERY TO MATCH HIS UNTAMED SPEED, TAKING HIS PLACE AT RED BULL RACING WITH THE INTENT TO PROVE HE IS NO LONGER JUST A PROTÉGÉ, BUT A GENUINE FRONT-RUNNER.\n\nHIS EVOLUTION FROM A RAW, AGGRESSIVE ROOKIE INTO A CALCULATED RACER HAS BEEN ONE OF THE MOST COMPELLING NARRATIVES IN THE PADDOCK. IN THE 2025 SEASON, TSUNODA HAS RETAINED HIS FEARLESS BRAKING AND BRAVERY IN WHEEL-TO-WHEEL COMBAT, BUT HE HAS COUPLED IT WITH A NEWFOUND PATIENCE AND TECHNICAL UNDERSTANDING. HIS ABILITY TO NAVIGATE TIGHT STREET CIRCUITS AND FIND GRIP WHERE OTHERS FIND BARRIERS REMAINS HIS SIGNATURE, YET IT IS HIS MATURITY UNDER THE INTENSE PRESSURE OF THE RED BULL PRESSURE COOKER THAT HAS SURPRISED HIS CRITICS. EVERY OVERTAKE IS NOW DELIVERED WITH SURGICAL PRECISION RATHER THAN RECKLESS ABANDON.\n\nBORN IN SAGAMIHARA AND ASCENDING THROUGH THE HONDA DREAM PROJECT, YUKI CARRIES THE HOPES OF AN ENTIRE NATION AS JAPAN´S MOST SUCCESSFUL F1 EXPORT. OFF THE TRACK, HIS CHARISMATIC HONESTY AND GENUINE PASSION FOR FOOD AND FAMILY HAVE MADE HIM A CULT HERO, BUT INSIDE THE HELMET, THE ´LITTLE POWERHOUSE´ IS ALL BUSINESS. AS HE FIGHTS TO CEMENT HIS STATUS AMONG THE ELITE IN 2025, TSUNODA IS DRIVEN BY A SINGULAR FOCUS: TO BECOME JAPAN´S FIRST FORMULA 1 WORLD CHAMPION. THE VOLCANO IS STILL THERE, BUT IN 2025, YUKI HAS LEARNED EXACTLY HOW TO CHANNEL THAT HEAT INTO CHAMPIONSHIP-WINNING PERFORMANCES.",
   bioPhotos: ["images/driver-bio/tsunoda-photo.jpg", "images/driver-bio/tsunoda-pit.jpg"]

  },
  {
  id: "norris",
  name: "LANDO NORRIS",
  team: "MCLAREN",
  dob: "13/11/1999",
  pob: "BRISTOL, UNITED KINGDOM",
  gradient: "linear-gradient(135deg, #ff8c00, #b84e00)",
  detailGradient: "linear-gradient(135deg, #ff7a00, #3a1600)",
  cardImage: "images/lando.norris.png",
  portrait: "images/lando.norris.png",
  bio: "THE DEFENDING VANGUARD OF WOKING. AFTER A TURBULENT AND TRANSFORMATIVE 2024 CAMPAIGN WHERE HE CAME OF AGE AS A GENUINE TITLE CONTENDER, LANDO NORRIS ENTERS THE 2025 SEASON AS THE ULTIMATE HUNTER AT THE FRONT OF THE GRID. THE ONCE JOCULAR AND LIGHT-HEARTED TEENAGER HAS HARDENED INTO A STOIC AND RELENTLESS FORCE OF NATURE, SERVING AS THE SPEARHEAD FOR MCLAREN´S MODERN REVIVAL. NO LONGER CONTENT WITH MERELY BEING A PODIUM REGULAR, NORRIS HAS REFINED HIS RACE-CRAFT INTO A WEAPON OF SURGICAL EFFICIENCY, PROVING THAT HE HAS THE TEMPERAMENT AND THE RAW PACE TO GO TOE-TO-TOE WITH THE MULTIPLE-TIME WORLD CHAMPIONS WHO PREVIOUSLY DOMINATED THE SPORT.\n\nIN 2025, LANDO´S DRIVING STYLE HAS REACHED A NEW PINNACLE OF MATURITY, CHARACTERIZED BY AN UNCANNY ABILITY TO QUALIFY ON THE FRONT ROW AND DEFEND HIS POSITION WITH AGGRESSIVE YET CALCULATED PRECISION. THE MCLAREN MCL39 HAS BEEN BUILT SPECIFICALLY TO HARNESS HIS UNIQUE INPUTS, ALLOWING HIM TO EXPLOIT THE CAR´S AERODYNAMIC STABILITY IN HIGH-SPEED CORNERS UNLIKE ANYONE ELSE ON THE ROŠT. WHILE THE PRESSURE OF LEADING A CHAMPIONSHIP CHARGE HAS BROKEN MANY BEFORE HIM, NORRIS HAS EMBRACED THE BURDEN, TURNING PREVIOUS SETBACKS INTO THE FUEL REQUIRED TO SUSTAIN A SEASON-LONG BATTLE AGAINST THE LIKES OF VERSTAPPEN AND THE FERRARI DUO.\n\nBORN INTO A SUPPORTIVE ENVIRONMENT THAT NURTURED HIS TALENT FROM AN EARLY AGE, NORRIS REMAINS DEEPLY COMMITTED TO THE MCLAREN FAMILY, HAVING REJECTED NUMEROUS OVERTURES FROM RIVAL TEAMS TO STAY TRUE TO THE SQUAD THAT BROUGHT HIM INTO F1. OFF THE TRACK, HE HAS BECOME A MATURE VOICE FOR MENTAL HEALTH AWARENESS WITHIN THE HIGH-PRESSURE ENVIRONMENT OF ELITE MOTORSPORT, ALL WHILE MAINTAINING HIS STATUS AS A GLOBAL ICON FOR THE YOUNGER GENERATION OF FANS. AS THE 2025 SEASON PROGRESSES, THE EXPECTATIONS FOR LANDO ARE NO LONGER JUST ABOUT POTENTIAL—THEY ARE ABOUT THE CULMINATION OF A DECADE-LONG JOURNEY TOWARD THE CROWN, AND WITH NORRIS, THE FEELING PERSISTS THAT HIS BEST IS YET TO COME.",
  bioPhotos: ["images/driver-bio/norris-photo.jpg", "images/driver-bio/norris-helmet.jpg"]
},
{
  id: "piastri",
  name: "OSCAR PIASTRI",
  team: "MCLAREN",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #ff8c00, #b84e00)",
  detailGradient: "linear-gradient(135deg, #ff7a00, #3a1600)",
  cardImage: "images/oscar.piastri.png",
  portrait: "images/oscar.piastri.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "antonelli",
  name: "KIMI ANTONELLI",
  team: "MERCEDES",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #00c2a8, #003f38)",
  detailGradient: "linear-gradient(135deg, #00d8bb, #001c18)",
  cardImage: "images/kimi.antonelli.png",
  portrait: "images/kimi.antonelli.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "russell",
  name: "GEORGE RUSSELL",
  team: "MERCEDES",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #00c2a8, #003f38)",
  detailGradient: "linear-gradient(135deg, #00d8bb, #001c18)",
  cardImage: "images/george.russell.png",
  portrait: "images/george.russell.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "albon",
  name: "ALEX ALBON",
  team: "WILLIAMS",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #1e90ff, #003c80)",
  detailGradient: "linear-gradient(135deg, #339dff, #001b40)",
  cardImage: "images/alex.albon.png",
  portrait: "images/alex.albon.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "sainz",
  name: "CARLOS SAINZ",
  team: "WILLIAMS",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #1e90ff, #003c80)",
  detailGradient: "linear-gradient(135deg, #339dff, #001b40)",
  cardImage: "images/carlos.sainz.png",
  portrait: "images/carlos.sainz.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "alonso",
  name: "FERNANDO ALONSO",
  team: "ASTON MARTIN ARAMCO FORMULA ONE TEAM",
  dob: "29/07/1981",
  pob: "OVIEDO, SPAIN",
  gradient: "linear-gradient(135deg, #006b3c, #001f12)",
  detailGradient: "linear-gradient(135deg, #008a4d, #000f08)",
  cardImage: "images/fernando.alonso.png",
  portrait: "images/fernando.alonso.png",
  bio: "THE ETERNAL WARRIOR OF THE GRID. ENTERING THE 2025 SEASON AS THE MOST EXPERIENCED DRIVER IN THE HISTORY OF THE SPORT, ALONSO DEFIES THE LAWS OF TIME. THE TWO-TIME WORLD CHAMPION REMAINS AS HUNGRY AND SHARP AS HE WAS ON HIS DEBUT OVER TWO DECADES AGO. KNOWN FOR HIS UNMATCHED RACE CRAFT AND THE ABILITY TO EXTRACT 101% FROM ANY MACHINE, FERNANDO CONTINUES TO BE THE BENCHMARK FOR AGGRESSION AND ADAPTABILITY ON THE GRID, PROVING THAT AGE IS IRRELEVANT WHEN YOU HAVE THE HEART OF A LION.\n\nWITH ASTON MARTIN´S AMBITIOUS PROJECT HITTING A CRITICAL PHASE IN 2025, ALONSO SERVES AS BOTH THE ELITE SPEARHEAD AND THE MASTER TACTICIAN. HIS ABILITY TO READ A RACE IS LEGENDARY, OFTEN ACTING AS HIS OWN STRATEGIST FROM BEHIND THE WHEEL WHILE MAINTAINING BLISTERING PACE. DESPITE BEING THE SENIOR STATESMAN, HIS REFLEXES REMAIN RAZOR-SHARP. FOR ALONSO, 2025 ISN´T ABOUT A FAREWELL TOUR; IT´S ABOUT PROVING THAT THE FIRE OF A TRUE CHAMPION NEVER FADES, NO MATTER HOW MANY GENERATIONS OF DRIVERS HE OUTLASTS.\n\nTHE SON OF A MINE EXPLOSIVES EXPERT AND A DEPARTMENT STORE EMPLOYEE, RACING HAS BEEN HIS ENTIRE LIFE SINCE HE FIRST STEPPED INTO A KART AT AGE THREE. DESPITE HIS GLOBAL FAME AND FIERCE REPUTATION ON TRACK, ALONSO REMAINS DEEPLY CONNECTED TO HIS ASTURIAN ROOTS AND IS KNOWN FOR HIS SHREWD INTELLIGENCE AND WITTY PADDOCK PRESENCE. HAVING ALREADY SECURED HIS STATUS AS ONE OF THE GREATEST TO EVER GRACE THE SPORT, HIS QUEST FOR THE ELUSIVE THIRD TITLE CONTINUES TO DRIVE HIM – AND WITH FERNANDO, THE IMPOSSIBLE ALWAYS FEELS WITHIN REACH.",
  bioPhotos: ["images/driver-bio/alonso-rab.jpg", "images/driver-bio/alonso-photo.jpg"]
},
{
  id: "stroll",
  name: "LANCE STROLL",
  team: "ASTON MARTIN",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #006b3c, #001f12)",
  detailGradient: "linear-gradient(135deg, #008a4d, #000f08)",
  cardImage: "images/lance.stroll.png",
  portrait: "images/lance.stroll.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "hulkenberg",
  name: "NICO HÜLKENBERG",
  team: "KICK SAUBER",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #39ff14, #0b3d00)",
  detailGradient: "linear-gradient(135deg, #2cff00, #031800)",
  cardImage: "images/nico.hulkenberg.png",
  portrait: "images/nico.hulkenberg.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "bortoleto",
  name: "GABRIEL BORTOLETO",
  team: "KICK SAUBER",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #39ff14, #0b3d00)",
  detailGradient: "linear-gradient(135deg, #2cff00, #031800)",
  cardImage: "images/gabriel.bortoleto.png",
  portrait: "images/gabriel.bortoleto.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "gasly",
  name: "PIERRE GASLY",
  team: "ALPINE",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #ff3cac, #5b006e)",
  detailGradient: "linear-gradient(135deg, #ff5cc0, #2b0033)",
  cardImage: "images/pierre.gasly.png",
  portrait: "images/pierre.gasly.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  
  id: "colapinto",
  name: "FRANCO COLAPINTO",
  team: "ALPINE",
  dob: "27/05/2003",
  pob: "PILAR, ARGENTINA",
  gradient: "linear-gradient(135deg, #ff3cac, #5b006e)",
  detailGradient: "linear-gradient(135deg, #ff5cc0, #2b0033)",
  cardImage: "images/franco.colapinto.png",
  portrait: "images/franco.colapinto.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]


},
{
  id: "lawson",
  name: "LIAM LAWSON",
  team: "VISA RB",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #0090ff, #002f5c)",
  detailGradient: "linear-gradient(135deg, #00a2ff, #001826)",
  cardImage: "images/liam.lawson.png",
  portrait: "images/liam.lawson.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "hadjar",
  name: "ISACK HADJAR",
  team: "VISA RB",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #0090ff, #002f5c)",
  detailGradient: "linear-gradient(135deg, #00a2ff, #001826)",
  cardImage: "images/isack.hadjar.png",
  portrait: "images/isack.hadjar.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"] 
},
{
  id: "ocon",
  name: "ESTEBAN OCON",
  team: "HAAS",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #ffffff, #000000)",
  detailGradient: "linear-gradient(135deg, #8d8a8a, #000000)",
  cardImage: "images/esteban.ocon.png",
  portrait: "images/esteban.ocon.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
},
{
  id: "bearman",
  name: "OLLIE BEARMAN",
  team: "HAAS",
  dob: "",
  pob: "",
  gradient: "linear-gradient(135deg, #ffffff, #000000)",
  detailGradient: "linear-gradient(135deg, #8d8a8a, #000000)",
  cardImage: "images/ollie.bearman.png",
  portrait: "images/ollie.bearman.png",
  bio: "Odstavec 1...\n\nOdstavec 2...\n\nOdstavec 3...",
  bioPhotos: ["images/franco.colapinto.png", "images/bio/franco2.jpg"]
}

  

];

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

// TEAMS PODSTRÁNKA // 

// // ===== DATA (zatím 2 týmy jako ukázka – doplníš zbytek 10) =====
// const teams = [
//   {
//     id: "ferrari",
//     name: "FERRARI",
//     gradient: "linear-gradient(135deg, #7a0000, #2a0000)",
//     detailGradient: "linear-gradient(135deg, #7a0000, #100008)",
//     cardCar: "images/cars/ferrari.png",
//     heroLogo: "images/logos/ferrari.png",
//     heroCar: "images/cars/ferrari.png",
//     drivers: [
//       { name: "CHARLES LECLERC", id: "leclerc", img: "images/drivers/charles.leclerc.png" },
//       { name: "LEWIS HAMILTON", id: "hamilton", img: "images/drivers/lewis.hamilton.png" }
//     ],
//     profile: {
//       fullName: "SCUDERIA FERRARI",
//       base: "MARANELLO, ITALY",
//       chief: "—",
//       chassis: "—",
//       powerUnit: "FERRARI",
//       entry: "1950"
//     },
//     bio: "Sem dej text o týmu (může být dlouhý).\n\nDalší odstavec…",
//     photos: ["images/teams/ferrari1.jpg", "images/teams/ferrari2.jpg"]
//   },
//   {
//     id: "redbull",
//     name: "RED BULL RACING",
//     gradient: "linear-gradient(135deg, #1218c9, #070718)",
//     detailGradient: "linear-gradient(135deg, #1218c9, #070718)",
//     cardCar: "images/cars/redbull.png",
//     heroLogo: "images/logos/redbull.png",
//     heroCar: "images/cars/redbull.png",
//     drivers: [
//       { name: "MAX VERSTAPPEN", id: "verstappen", img: "images/drivers/max.verstappen.png" },
//       { name: "YUKI TSUNODA", id: "tsunoda", img: "images/drivers/yuki.tsunoda.png" }
//     ],
//     profile: {
//       fullName: "ORACLE RED BULL RACING",
//       base: "MILTON KEYNES, UNITED KINGDOM",
//       chief: "LAURENT MEKIES",
//       chassis: "RB21",
//       powerUnit: "HONDA RBPT",
//       entry: "1997"
//     },
//     bio: "Red Bull šel do F1 jako projekt…\n\nSem dej tvůj text (odstavce dělej přes \\n\\n).",
//     photos: ["images/teams/redbull1.jpg", "images/teams/redbull2.jpg"]
//   }
// ];

// // ===== ELEMENTY =====

// const listEl = document.getElementById("teamsList");
// const detailEl = document.getElementById("teamDetail");
// const backBtn = document.getElementById("backToTeams");

// const tHero = document.getElementById("tHero");
// const tHeroLogo = document.getElementById("tHeroLogo");
// const tHeroCar = document.getElementById("tHeroCar");
// const tDrivers = document.getElementById("tDrivers");

// const tpFullName = document.getElementById("tpFullName");
// const tpBase = document.getElementById("tpBase");
// const tpChief = document.getElementById("tpChief");
// const tpChassis = document.getElementById("tpChassis");
// const tpPU = document.getElementById("tpPU");
// const tpEntry = document.getElementById("tpEntry");

// const tBio = document.getElementById("tBio");
// const tPhoto1 = document.getElementById("tPhoto1");
// const tPhoto2 = document.getElementById("tPhoto2");

// function renderTeamsList(){
//   if (!listEl) return;

//   listEl.innerHTML = teams.map(t => `
//     <article class="team-card" data-id="${t.id}" style="--grad:${t.gradient}">
//       <div class="team-card__driverLeft">${t.drivers?.[0]?.name || ""}</div>
//       <div class="team-card__driverRight">${t.drivers?.[1]?.name || ""}</div>
//       <h3 class="team-card__title">${t.name}</h3>
//       <img class="team-card__car" src="${t.cardCar}" alt="${t.name} car">
//     </article>
//   `).join("");

//   listEl.querySelectorAll(".team-card").forEach(card => {
//     card.addEventListener("click", () => openTeam(card.dataset.id));
//   });
// }

// function openTeam(id){
//   const t = teams.find(x => x.id === id);
//   if (!t) return;

//   // show/hide
//   const listWrap = document.querySelector(".teams-best");
//   if (listWrap) listWrap.classList.add("is-hidden");
//   if (detailEl) detailEl.classList.remove("is-hidden");

//   // hero
//   if (detailEl) detailEl.style.setProperty("--detail-grad", t.detailGradient || t.gradient || "");
//   if (tHeroLogo) { tHeroLogo.src = t.heroLogo || ""; tHeroLogo.style.display = t.heroLogo ? "block" : "none"; }
//   if (tHeroCar) { tHeroCar.src = t.heroCar || ""; }

//   // drivers mini cards (klik -> drivers.html#id)
//   if (tDrivers) {
//     tDrivers.innerHTML = (t.drivers || []).map(d => `
//       <article class="driver-mini" data-driver="${d.id}">
//         <div class="driver-mini__name">${d.name}</div>
//         <img class="driver-mini__img" src="${d.img}" alt="${d.name}">
//       </article>
//     `).join("");

//     tDrivers.querySelectorAll(".driver-mini").forEach(el => {
//       el.addEventListener("click", () => {
//         const driverId = el.dataset.driver;
//         // změň "drivers.html" pokud máš jiný název souboru
//         window.location.href = `drivers.html#${driverId}`;
//       });
//     });
//   }

//   // profile
//   const p = t.profile || {};
//   if (tpFullName) tpFullName.textContent = p.fullName || "—";
//   if (tpBase) tpBase.textContent = p.base || "—";
//   if (tpChief) tpChief.textContent = p.chief || "—";
//   if (tpChassis) tpChassis.textContent = p.chassis || "—";
//   if (tpPU) tpPU.textContent = p.powerUnit || "—";
//   if (tpEntry) tpEntry.textContent = p.entry || "—";

//   // bio + photos
//   if (tBio) tBio.innerHTML = (t.bio || "").replace(/\n\n/g, "<br><br>");
//   const ph1 = t.photos?.[0] || "";
//   const ph2 = t.photos?.[1] || "";

//   if (tPhoto1) { tPhoto1.style.display = ph1 ? "block" : "none"; if (ph1) tPhoto1.src = ph1; }
//   if (tPhoto2) { tPhoto2.style.display = ph2 ? "block" : "none"; if (ph2) tPhoto2.src = ph2; }

//   // hash
//   history.replaceState(null, "", `#${t.id}`);

//   // žádné skákání dolů: scroll nahoru
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// function backToTeams(){
//   if (detailEl) detailEl.classList.add("is-hidden");
//   const listWrap = document.querySelector(".teams-best");
//   if (listWrap) listWrap.classList.remove("is-hidden");
//   history.replaceState(null, "", "#");
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// if (backBtn) backBtn.addEventListener("click", backToTeams);

// renderTeamsList();

// // open from hash
// if (location.hash) {
//   const id = location.hash.replace("#", "");
//   if (teams.some(t => t.id === id)) openTeam(id);
// }





const races = [
  {
    track: "FORMULA 1 LOUIS VUITTON AUSTRALIAN GRAND PRIX 2025",
    date: "14–16 MARCH",
    flag: "images/flags/aus-f.jpg", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 3, name: "GEORGE RUSSELL", img: "images/george.russell.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 3, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 4, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 5, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 6, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 7, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 8, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 9, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 10, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 11, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 12, name: "YUKI TSUNODA", team: "RB" },
      { pos: 13, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 14, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 15, name: "LIAM LAWSON (DNF)", team: "RED BULL" },
      { pos: 16, name: "GABRIEL BORTOLETO (DNF)", team: "FERRARI" },
      { pos: 17, name: "FERNANDO ALONSO (DNF)", team: "MERCEDES" },
      { pos: 18, name: "CARLOS SAINZ (DNF)", team: "WILLIAMS" },
      { pos: 19, name: "JACK DOOHAN (DNF)", team: "ALPINE" },
      { pos: 20, name: "ISACK HADJAR (DNF)", team: "RB" }
    ]
  },
  {
    track: "FORMULA 1 HEINEKEN CHINESE GRAND PRIX 2025",
    date: "21–23 MARCH",
    flag: "images/flags/chi-f.png", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "GEORGE RUSSELL", img: "images/george.russell.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 4, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 5, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 6, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 7, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 8, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 9, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 10, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 11, name: "ISACK HADJAR", team: "RB" },
      { pos: 12, name: "LIAM LAWSON", team: "RED BULL" },
      { pos: 13, name: "JACK DOOHAN", team: "ALPINE" },
      { pos: 14, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 15, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 16, name: "YUKI TSUNODA", team: "RB" },
      { pos: 17, name: "FERNANDO ALONSO (DNF)", team: "MERCEDES" },
      { pos: 18, name: "CHARLES LECLERC (DSQ)", team: "FERRARI" },
      { pos: 19, name: "LEWIS HAMILTON (DSQ)", team: "FERRARI" },
      { pos: 20, name: "PIERRE GASLY (DSQ)", team: "ALPINE" }
    ]
  },
  {
    track: "FORMULA 1 LENOVO JAPANESE GRAND PRIX 2025",
    date: "04-06 APRIL",
    flag: "images/flags/jap-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 7, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 8, name: "ISACK HADJAR", team: "RB" },
      { pos: 9, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 10, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 11, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 12, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 13, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 14, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 15, name: "JACK DOOHAN", team: "ALPINE" },
      { pos: 16, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 17, name: "LIAM LAWSON", team: "RB" },
      { pos: 18, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 19, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 20, name: "LANCE STROLL", team: "MERCEDES" }
    ]
  },
  {
    track: "FORMULA 1 GULF AIR BAHRAIN <br> GRAND PRIX 2025",
    date: "11-13 APRIL",
    flag: "images/flags/bah-f.jpg", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "GEORGE RUSSELL", img: "images/george.russell.png" },
      { pos: 3, name: "LANDO NORRIS", img: "images/lando.norris.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 3, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 6, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 7, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 8, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 9, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 10, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 11, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 12, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 13, name: "ISACK HADJAR", team: "RB" },
      { pos: 14, name: "JACK DOOHAN", team: "ALPINE" },
      { pos: 15, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 16, name: "LIAM LAWSON", team: "RB" },
      { pos: 17, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 18, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 19, name: "CARLOS SAINZ (DNF)", team: "WILLIAMS" },
      { pos: 20, name: "NICO HULKENBERG (DNF)", team: "FERRARI" }
    ]

  },
  {
    track: "FORMULA 1 STC SAUDI ARABIAN GRAND PRIX 2025",
    date: "18-20 APRIL",
    flag: "images/flags/sau-f.png", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 3, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 3, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 4, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 7, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 8, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 9, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 10, name: "ISACK HADJAR", team: "RB" },
      { pos: 11, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 12, name: "LIAM LAWSON", team: "RB" },
      { pos: 13, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 14, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 15, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 16, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 17, name: "JACK DOOHAN", team: "ALPINE" },
      { pos: 18, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 19, name: "YUKI TSUNODA (DNF)", team: "RED BULL" },
      { pos: 20, name: "PIERRE GASLY (DNF)", team: "ALPINE" }
    ]

  },
  {
    track: "FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2025",
    date: "02-04 MAY",
    flag: "images/flags/usa-f.png", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "GEORGE RUSSELL", img: "images/george.russell.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 4, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 5, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 6, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 7, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 10, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 11, name: "ISACK HADJAR", team: "RB" },
      { pos: 12, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 13, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 14, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 15, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 16, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 17, name: "LIAM LAWSON (DNF)", team: "RB" },
      { pos: 18, name: "GABRIEL BORTOLETO (DNF)", team: "FERRARI" },
      { pos: 19, name: "OLIVER BEARMAN (DNF)", team: "FERRARI" },
      { pos: 20, name: "JACK DOOHAN (DNF)", team: "ALPINE" }
    ]

  },
  {
    track: "FORMULA 1 AWS GRAN PREMIO DEL EMILIA-ROMAGNA 2025",
    date: "16-18 MAY",
    flag: "images/flags/ita-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 4, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 5, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 6, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 7, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 8, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 9, name: "ISACK HADJAR", team: "RB" },
      { pos: 10, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 11, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 12, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 13, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 14, name: "LIAM LAWSON", team: "RB" },
      { pos: 15, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 16, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 17, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 18, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 19, name: "KIMI ANTONELLI (DNF)", team: "MERCEDES" },
      { pos: 20, name: "ESTEBAN OCON (DNF)", team: "FERRARI" }
    ]

  },
  {
    track: "FORMULA 1 TAG HEUER GRAND PRIX DE MONACO 2025",
    date: "23-25 MAY",
    flag: "images/flags/mon-f.png", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" },
      { pos: 3, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 3, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 4, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 5, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 6, name: "ISACK HADJAR", team: "RB" },
      { pos: 7, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 8, name: "LIAM LAWSON", team: "RB" },
      { pos: 9, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 10, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 11, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 12, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 13, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 14, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 15, name: "LANCE STROLL", team: "MERCEDES" },
      { pos: 16, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 17, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 18, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 19, name: "FERNANDO ALONSO (DNF)", team: "MERCEDES" },
      { pos: 20, name: "PIERRE GASLY (DNF)", team: "ALPINE" }
    ]

  },
  {
    track: "FORMULA 1 ARAMCO GRAN PREMIO DE ESPAÑA 2025 ",
    date: "30 MAY-01 JUN",
    flag: "images/flags/spa-f.png", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 4, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 5, name: "NICO HULKENBERG", team: "FERRARI" },
      { pos: 6, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 7, name: "ISACK HADJAR", team: "RB" },
      { pos: 8, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 9, name: "FERNANDO ALONSO", team: "MERCEDES" },
      { pos: 10, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 11, name: "LIAM LAWSON", team: "RB" },
      { pos: 12, name: "GABRIEL BORTOLETO", team: "FERRARI" },
      { pos: 13, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 14, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 15, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 16, name: "ESTEBAN OCON", team: "FERRARI" },
      { pos: 17, name: "OLIVER BEARMAN", team: "FERRARI" },
      { pos: 18, name: "KIMI ANTONELLI (DNF)", team: "MERCEDES" },
      { pos: 19, name: "ALEXANDER ALBON (DNF)", team: "WILLIAMS" }
    ]

  },
  {
    track: "FORMULA 1 PIRELLI GRAND PRIX DU CANADA 2025",
    date: "13-15 JUN",
    flag: "images/flags/can-f.png", 
    winner: "GEORGE RUSSELL",
    podium: [
      { pos: 1, name: "GEORGE RUSSELL", img: "images/george.russell.png" },
      { pos: 2, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 3, name: "KIMI ANTONELLI", img: "images/kimi.antonelli.png" }
    ],

    results20: [
      { pos: 1, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 2, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 3, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 4, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 5, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 6, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 7, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 8, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 9, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 10, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 11, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 12, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 13, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 14, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 15, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 16, name: "ISACK HADJAR", team: "RB" },
      { pos: 17, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 18, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 19, name: "LIAM LAWSON (DNF)", team: "RB" },
      { pos: 20, name: "ALEXANDER ALBON (DNF)", team: "WILLIAMS" }
    ]

  },{
    track: "FORMULA 1 MSC CRUISES AUSTRIAN GRAND PRIX 2025",
    date: "27-29 Jun",
    flag: "images/flags/aun-f.jpg", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 3, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 3, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 4, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "LIAM LAWSON", team: "RB" },
      { pos: 7, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 8, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 9, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 10, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 11, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 12, name: "ISACK HADJAR", team: "RB" },
      { pos: 13, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 14, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 15, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 16, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 17, name: "ALEXANDER ALBON (DNF)", team: "WILLIAMS" },
      { pos: 18, name: "MAX VERSTAPPEN (DNF)", team: "RED BULL" },
      { pos: 19, name: "KIMI ANTONELLI (DNF)", team: "MERCEDES" },
      { pos: 20, name: "CARLOS SAINZ (DNF)", team: "WILLIAMS" }
    ]

  },
  {
    track: "FORMULA 1 QATAR AIRWAYS BRITISH GRAND PRIX 2025",
    date: "04-06 Jul",
    flag: "images/flags/uni-f.png", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 3, name: "NICO HULKENBERG", img: "images/nico.hulkenberg.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 3, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 4, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 5, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 6, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 7, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 8, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 9, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 10, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 11, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 12, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 13, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 14, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 15, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 16, name: "KIMI ANTONELLI (DNF)", team: "MERCEDES" },
      { pos: 17, name: "ISACK HADJAR (DNF)", team: "RB" },
      { pos: 18, name: "GABRIEL BORTOLETO (DNF)", team: "SAUBER" },
      { pos: 19, name: "LIAM LAWSON (DNF)", team: "RB" },
      { pos: 20, name: "FRANCO COLAPINTO (DNF)", team: "ALPINE" }
    ]

  },
  {
    track: "FORMULA 1 MOËT & CHANDON BELGIAN GRAND PRIX 2025",
    date: "25-27 Jul",
    flag: "images/flags/bel-f.jpg", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 4, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 7, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 8, name: "LIAM LAWSON", team: "RB" },
      { pos: 9, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 10, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 11, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 12, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 13, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 14, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 15, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 16, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 17, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 18, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 19, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 20, name: "ISACK HADJAR", team: "RB" }
    ]

  },
  {
    track: "FORMULA 1 LENOVO HUNGARIAN GRAND PRIX 2025",
    date: "01-03 Aug",
    flag: "images/flags/hun-f.png", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 3, name: "GEORGE RUSSELL", img: "images/george.russell.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 3, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 6, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 7, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 8, name: "LIAM LAWSON", team: "RB" },
      { pos: 9, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 10, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 11, name: "ISACK HADJAR", team: "RB" },
      { pos: 12, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 13, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 14, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 15, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 16, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 17, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 18, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 19, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 20, name: "OLIVER BEARMAN (DNF)", team: "HAAS" }
    ]
  },
  {
    track: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2025",
    date: "29-31 Aug",
    flag: "images/flags/net-f.png", 
    winner: "OSCAR PIASTRI",
    podium: [
      { pos: 1, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 2, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 3, name: "ISACK HADJAR", img: "images/isack.hadjar.png" }
    ],

    results20: [
      { pos: 1, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 2, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 3, name: "ISACK HADJAR", team: "RB" },
      { pos: 4, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 5, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 6, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 7, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 8, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 9, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 10, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 11, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 12, name: "LIAM LAWSON", team: "RB" },
      { pos: 13, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 14, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 15, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 16, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 17, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 18, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 19, name: "CHARLES LECLERC (DNF)", team: "FERRARI" },
      { pos: 20, name: "LEWIS HAMILTON (DNF)", team: "FERRARI" }
    ]

  },
  {
    track: "FORMULA 1 PIRELLI GRAN PREMIO D’ITALIA 2025",
    date: "05-07 Sep",
    flag: "images/flags/ita-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 7, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 8, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 9, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 10, name: "ISACK HADJAR", team: "RB" },
      { pos: 11, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 12, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 13, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 14, name: "LIAM LAWSON", team: "RB" },
      { pos: 15, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 16, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 17, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 18, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 19, name: "FERNANDO ALONSO (DNF)", team: "ASTON MARTIN" },
      { pos: 20, name: "NICO HULKENBERG (DNF)", team: "SAUBER" }
    ]

  },
  {
    track: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2025",
    date: "19-21 Sep",
    flag: "images/flags/aze-f.jpg", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "GEORGE RUSSELL", img: "images/george.russell.png" },
      { pos: 3, name: "CARLOS SAINZ", img: "images/carlos.sainz.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 3, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 4, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 5, name: "LIAM LAWSON", team: "RB" },
      { pos: 6, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 7, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 10, name: "ISACK HADJAR", team: "RB" },
      { pos: 11, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 12, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 13, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 14, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 15, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 16, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 17, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 18, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 19, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 20, name: "OSCAR PIASTRI (DNF)", team: "MCLAREN" }
    ]

  },
  {
    track: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2025",
    date: "03-05 Oct",
    flag: "images/flags/sin-f.png", 
    winner: "GEORGE RUSSELL",
    podium: [
      { pos: 1, name: "GEORGE RUSSELL", img: "images/george.russell.png" },
      { pos: 2, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 3, name: "LANDO NORRIS", img: "images/lando.norris.png" }
    ],

    results20: [
      { pos: 1, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 2, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 3, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 4, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 5, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 6, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 7, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 10, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 11, name: "ISACK HADJAR", team: "RB" },
      { pos: 12, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 13, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 14, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 15, name: "LIAM LAWSON", team: "RB" },
      { pos: 16, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 17, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 18, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 19, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 20, name: "NICO HULKENBERG", team: "SAUBER" }
    ]

  },
  {
    track: "FORMULA 1 MSC CRUISES UNITED STATES GRAND PRIX 2025",
    date: "17-19 Oct",
    flag: "images/flags/usa-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 3, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 3, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 4, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 5, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 6, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 7, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 8, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 9, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 10, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 11, name: "LIAM LAWSON", team: "RB" },
      { pos: 12, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 13, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 14, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 15, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 16, name: "ISACK HADJAR", team: "RB" },
      { pos: 17, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 18, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 19, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 20, name: "CARLOS SAINZ (DNF)", team: "WILLIAMS" }
    ]

  },
  {
    track: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2025",
    date: "24-26 Oct",
    flag: "images/flags/mex-f.png", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "CHARLES LECLERC", img: "images/charles.leclerc.png" },
      { pos: 3, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 3, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 4, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 5, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 6, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 7, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 10, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 11, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 12, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 13, name: "ISACK HADJAR", team: "RB" },
      { pos: 14, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 15, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 16, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 17, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 18, name: "FERNANDO ALONSO (DNF)", team: "ASTON MARTIN" },
      { pos: 19, name: "NICO HULKENBERG (DNF)", team: "SAUBER" },
      { pos: 20, name: "LIAM LAWSON (DNF)", team: "RB" }
    ]

  },
  {
    track: "FORMULA 1 MSC CRUISES GRANDE PRÊMIO DE SÃO PAULO 2025",
    date: "07-09 Nov",
    flag: "images/flags/bra-f.png", 
    winner: "LANDO NORRIS",
    podium: [
      { pos: 1, name: "LANDO NORRIS", img: "images/lando.norris.png" },
      { pos: 2, name: "KIMI ANTONELLI", img: "images/kimi.antonelli.png" },
      { pos: 3, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" }
    ],

    results20: [
      { pos: 1, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 2, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 3, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 4, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 5, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 6, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 7, name: "LIAM LAWSON", team: "RB" },
      { pos: 8, name: "ISACK HADJAR", team: "RB" },
      { pos: 9, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 10, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 11, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 12, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 13, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 14, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 15, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 16, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 17, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 18, name: "LEWIS HAMILTON (DNF)", team: "FERRARI" },
      { pos: 19, name: "CHARLES LECLERC (DNF)", team: "FERRARI" },
      { pos: 20, name: "GABRIEL BORTOLETO (DNF)", team: "SAUBER" }
    ]

  },
  {
    track: "FORMULA 1 HEINEKEN LAS VEGAS GRAND PRIX 2025",
    date: "20-22 Nov",
    flag: "images/flags/usa-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "GEORGE RUSSELL", img: "images/george.russell.png" },
      { pos: 3, name: "KIMI ANTONELLI", img: "images/kimi.antonelli.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 3, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 6, name: "ISACK HADJAR", team: "RB" },
      { pos: 7, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 10, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 11, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 12, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 13, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 14, name: "LIAM LAWSON", team: "RB" },
      { pos: 15, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 16, name: "ALEXANDER ALBON (DNF)", team: "WILLIAMS" },
      { pos: 17, name: "GABRIEL BORTOLETO (DNF)", team: "SAUBER" },
      { pos: 18, name: "LANCE STROLL (DNF)", team: "ASTON MARTIN" },
      { pos: 19, name: "LANDO NORRIS (DSQ)", team: "MCLAREN" },
      { pos: 20, name: "OSCAR PIASTRI (DSQ)", team: "MCLAREN" }
    ]

  },
  {
    track: "FORMULA 1 QATAR AIRWAYS QATAR GRAND PRIX 2025",
    date: "28-30 Nov",
    flag: "images/flags/qat-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 3, name: "CARLOS SAINZ", img: "images/carlos.sainz.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 3, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 4, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 5, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 6, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 7, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 8, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 9, name: "LIAM LAWSON", team: "RB" },
      { pos: 10, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 11, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 12, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 13, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 14, name: "FRANCO COLAPINTO", team: "ALPINE" },
      { pos: 15, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 16, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 17, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 18, name: "ISACK HADJAR", team: "RB" },
      { pos: 19, name: "OLIVER BEARMAN (DNF)", team: "HAAS" },
      { pos: 20, name: "NICO HULKENBERG (DNF)", team: "SAUBER" }
    ]

  },
  {
    track: "FORMULA 1 ETIHAD AIRWAYS ABU DHABI GRAND PRIX 2025",
    date: "05-07 Dec",
    flag: "images/flags/abu-f.png", 
    winner: "MAX VERSTAPPEN",
    podium: [
      { pos: 1, name: "MAX VERSTAPPEN", img: "images/max.verstappen.png" },
      { pos: 2, name: "OSCAR PIASTRI", img: "images/oscar.piastri.png" },
      { pos: 3, name: "LANDO NORRIS", img: "images/lando.norris.png" }
    ],

    results20: [
      { pos: 1, name: "MAX VERSTAPPEN", team: "RED BULL" },
      { pos: 2, name: "OSCAR PIASTRI", team: "MCLAREN" },
      { pos: 3, name: "LANDO NORRIS", team: "MCLAREN" },
      { pos: 4, name: "CHARLES LECLERC", team: "FERRARI" },
      { pos: 5, name: "GEORGE RUSSELL", team: "MERCEDES" },
      { pos: 6, name: "FERNANDO ALONSO", team: "ASTON MARTIN" },
      { pos: 7, name: "ESTEBAN OCON", team: "HAAS" },
      { pos: 8, name: "LEWIS HAMILTON", team: "FERRARI" },
      { pos: 9, name: "NICO HULKENBERG", team: "SAUBER" },
      { pos: 10, name: "LANCE STROLL", team: "ASTON MARTIN" },
      { pos: 11, name: "GABRIEL BORTOLETO", team: "SAUBER" },
      { pos: 12, name: "OLIVER BEARMAN", team: "HAAS" },
      { pos: 13, name: "CARLOS SAINZ", team: "WILLIAMS" },
      { pos: 14, name: "YUKI TSUNODA", team: "RED BULL" },
      { pos: 15, name: "KIMI ANTONELLI", team: "MERCEDES" },
      { pos: 16, name: "ALEXANDER ALBON", team: "WILLIAMS" },
      { pos: 17, name: "ISACK HADJAR", team: "RB" },
      { pos: 18, name: "LIAM LAWSON", team: "RB" },
      { pos: 19, name: "PIERRE GASLY", team: "ALPINE" },
      { pos: 20, name: "FRANCO COLAPINTO", team: "ALPINE" }
    ]

  },

  

  // Přidej další tratě stejným stylem...
  // { trac
  // k: "CHINA", date: "...", flag:"...", winner:"...", podium:[...], results20:[...] }
];

// ===== ELEMENTY =====
const racesView = document.getElementById("racesView");
const detailView = document.getElementById("detailView");
const racesList = document.getElementById("racesList");

const backBtn = document.getElementById("backBtn");
const detailTitle = document.getElementById("detailTitle");

const podium1 = document.getElementById("podium1");
const podium2 = document.getElementById("podium2");
const podium3 = document.getElementById("podium3");

const resultsTable = document.getElementById("resultsTable");

// ===== GENERUJ LIST KARET =====
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

// ===== OTEVŘI DETAIL =====
function openRace(index) {
  const race = races[index];

  racesView.classList.add("hidden");
  detailView.classList.remove("hidden");

  detailTitle.textContent = race.track;

  // Pódium (2,1,3 jako na screenu)
  const p1 = race.podium.find(p => p.pos === 1);
  const p2 = race.podium.find(p => p.pos === 2);
  const p3 = race.podium.find(p => p.pos === 3);

  podium1.innerHTML = podiumHTML(p1);
  podium2.innerHTML = podiumHTML(p2);
  podium3.innerHTML = podiumHTML(p3);

  // Výsledky 4–20 (ale můžeš klidně zobrazit všech 1–20)
  resultsTable.innerHTML = "";
  race.results20
    .filter(r => r.pos >= 4) // aby to odpovídalo screenu (pódium zvlášť)
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



// ===== ZPĚT =====
backBtn.addEventListener("click", () => {
  detailView.classList.add("hidden");
  racesView.classList.remove("hidden");
});

// INIT
renderRacesList();


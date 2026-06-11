/**
 * HEAVEN CRAWLER - Presskit Data Configuration (Multilingual)
 * 
 * Instructions:
 * - Update the values below with your game and studio details.
 * - This file supports multiple languages. You can easily add more under the `localized` object (e.g. `fr`, `it`, `ja`).
 * - For lists (like platforms, features, screenshots), keep the array format [ "item1", "item2" ].
 * - To see changes, save this file and refresh index.html in your browser!
 */

const PRESSKIT_DATA = {
  // --- CORE LINKS (GLOBAL / UNLOCALIZED) ---
  logo: "images/LOGO_HD.png", // Path to your logo (transparent PNG recommended, e.g., "images/logo.png")
  icon: "images/HC_Icon.png", // Path to your square icon/avatar (e.g., "images/icon.png")
  downloadZipUrl: "https://drive.google.com/drive/folders/1Cz93-WHIEscwkJKIfIhX-TP6RJ_A4G2u?usp=drive_link", // Your Google Drive asset folder link

  factsheetGlobal: {
    developerLink: "https://www.carbonmachina.com/",
    websites: [
      { label: "Kickstarter Page", url: "https://www.kickstarter.com/projects/carbonmachina/heaven-crawler-immersive-exploration-based-dungeon-crawler" },
      { label: "Steam Store", url: "https://store.steampowered.com/app/3036360/Heaven_Crawler" }
    ]
  },

  // --- LIST OF AVAILABLE LANGUAGES ---
  // To add a new language, append it here and add its corresponding translation block below.
  languages: [
    { code: "en", label: "English" },
    { code: "es", label: "Español" }
  ],
  defaultLanguage: "en",

  // --- VIDEOS & TRAILERS (GLOBAL) ---
  // You can use YouTube video IDs (the part after v= in the URL, e.g., "dQw4w9WgXcQ")
  videos: [
    {
      title: "Kickstarer Announcement Trailer - LAGS 2026",
      youtubeId: "_GxUC5dlLF4"
    },
    {
      title: "Teaser Trailer - LAGS 2024",
      youtubeId: "-A5Z86Qi9-o"
    }
  ],

  // --- CONTACT DETAILS (GLOBAL) ---
  contact: {
    email: "carbonmachina@gmail.com",
    twitter: "@Heaven_Crawler",
    twitterUrl: "https://x.com/Heaven_Crawler",
    instagramUrl: "https://www.instagram.com/heavencrawlergame/",
  },

  // ==========================================================
  // --- LOCALIZED DATA (TRANSLATIONS) ---
  // ==========================================================
  localized: {

    // --- ENGLISH ---
    en: {
      gameName: "Heaven Crawler",
      tagline: "Heaven has taken enough. Time to take it back.",

      description: {
        short: "Explore, fight, and uncover the secrets of a mysterious tower using unique Mechanical Arms as you climb your way through a deeply personal journey.",
        full: "Explore The Womb, a forgotten man-made tower built to reach the heavens. Wield Mechanical Arms to overcome deadly enemies and carve your path upward on a deeply personal journey. And remember: bring her back."
      },

      factsheet: {
        developer: "Carbon Machina",
        basedIn: "México",
        releaseDate: "TBA 2027",
        platforms: [
          "PC / Steam"
        ],
        regularPrice: "$19.99 USD",
        monetization: "Single purchase. No microtransactions or pay-to-win mechanics."
      },

      history: [
        {
          date: "2018",
          description: "Concept. Heaven Crawler is first prototyped by Miguel Cerda during his weekends and free time."
        },
        {
          date: "March 2024",
          description: "Pre-production. Carbon Machina joins the project to bring Heaven Crawler to life."
        },
        {
          date: "June 2024",
          description: "Heaven Crawler is officially announced with a teaser trailer."
        },
        {
          date: "October 2025",
          description: "Heaven Crawler wins the national Indie Game Dev Challenge by unanimous decision."
        },
        {
          date: "June 2026",
          description: "Heaven Crawler announces its Kickstarter campaign."
        }
      ],

      features: [
        "ASCEND A LIVING TOWER. Explore The Womb, a colossal man-made structure built to reach the heavens. Every layer presents new challenges, secrets, and dangers to overcome.",
        "MODULAR COMBAT WITH MECHANICAL ARMS. Customize your loadout, discover powerful synergies, and develop a combat style that is uniquely your own.",
        "DYNAMIC ENEMIES AND EMERGENT ENCOUNTERS. Mechanical animals roam the Tower, each with distinct behaviors, attacks, and interactions that create unpredictable situations.",
        "EVERY DEATH CHANGES THE JOURNEY. Unlock new abilities, content, and opportunities with every attempt, while the Tower grows more dangerous alongside you.",
        "A ROGUELITE ABOUT LOSS AND GROWTH. Experience a deeply personal story told through exploration, gameplay, and environmental storytelling, where every detail matters."
      ],

      // English screenshot captions
      screenshots: [
        {
          caption: "Dynamic 3rd Person Camera.",
          url: "images/CameraChange_01.gif"
        },
        {
          caption: "Mechanical Arm-Based Modular Combat.",
          url: "images/LAGS2026_GorillaCrawlers_01.gif"
        },
        {
          caption: "Mix and Match Equipment.",
          url: "images/Bodygear_04.gif"
        },
        {
          caption: "Colossal Mechanical Guardians.",
          url: "images/BossCinematic_04.gif"
        },
        {
          caption: "A Living Liminal Mega Structure.",
          url: "images/RoomChanges_03.gif"
        },
        {
          caption: "Expansive Persistent HUB.",
          url: "images/NPC_02.gif"
        },
        {
          caption: "Stylized Analog Inventory.",
          url: "images/HeavenCrawler_Inventory_SS_001.gif"
        },
        {
          caption: "An Emotional Adventure Awaits.",
          url: "images/LAGS2026_Intro_02.gif"
        },
        {
          caption: "Support Us on Kickstarter.",
          url: "images/LAGS2026_ElevatorKickstarter_01.gif"
        }
      ],

      awards: [
        {
          title: "Indie Showcase Selection",
          event: "Mexican Entertainment System 2025-2026"
        },
        {
          title: "Most Anticipated Game Nominee",
          event: "Game Effect Awards 2025"
        },
        {
          title: "Best Indie Dev Pitch",
          event: "Supernova Game Devs Challenge 2025"
        }
      ],

      quotes: [], // Keeps quotes empty / disabled as in your original file

      aboutDeveloper: "Carbon Machina is an independent game studio dedicated to crafting challenging, highly interactive & immersive action-adventure RPGs. Founded in 2019 by Diego Muñoz, we focus on meaningful player expression, deep gameplay systems, and creating games that stand the test of time."
    },

    // --- ESPAÑOL ---
    es: {
      gameName: "Heaven Crawler",
      tagline: "El cielo se ha llevado suficiente. Es hora de recuperarlo.",

      description: {
        short: "Explora, lucha y descubre los secretos de una misteriosa torre usando brazos mecánicos únicos mientras escalas en un viaje profundamente personal.",
        full: "Explora La Matriz (The Womb), una torre olvidada construida por el hombre para alcanzar los cielos. Blande brazos mecánicos para superar a enemigos letales y forja tu camino hacia arriba en un viaje profundamente personal. Y recuerda: tráela de vuelta."
      },

      factsheet: {
        developer: "Carbon Machina",
        basedIn: "México",
        releaseDate: "Por anunciar 2027",
        platforms: [
          "PC / Steam"
        ],
        regularPrice: "$19.99 USD",
        monetization: "Compra única. Sin microtransacciones ni mecánicas pay-to-win."
      },

      history: [
        {
          date: "2018",
          description: "Concepto. Heaven Crawler es prototipado por primera vez por Miguel Cerda durante sus fines de semana y tiempo libre."
        },
        {
          date: "Marzo 2024",
          description: "Preproducción. Carbon Machina se une al proyecto para dar vida a Heaven Crawler."
        },
        {
          date: "Junio 2024",
          description: "Heaven Crawler es anunciado oficialmente con un teaser trailer."
        },
        {
          date: "Octubre 2025",
          description: "Heaven Crawler gana el concurso nacional Indie Game Dev Challenge por decisión unánime."
        },
        {
          date: "Junio 2026",
          description: "Heaven Crawler anuncia su campaña de Kickstarter."
        }
      ],

      features: [
        "ASCIENDE POR UNA TORRE VIVA. Explora La Matriz (The Womb), una estructura colosal construida por el hombre para alcanzar los cielos. Cada nivel presenta nuevos desafíos, secretos y peligros que superar.",
        "COMBATE MODULAR CON BRAZOS MECÁNICOS. Personaliza tu equipamiento, descubre sinergias poderosas y desarrolla un estilo de combate que sea únicamente tuyo.",
        "ENEMIGOS DINÁMICOS Y ENCUENTROS EMERGENTES. Animales mecánicos deambulan por la Torre, cada uno con comportamientos, ataques e interacciones distintas que crean situaciones impredecibles.",
        "CADA MUERTE CAMBIA EL VIAJE. Desbloquea nuevas habilidades, contenido y oportunidades con cada intento, mientras la Torre se vuelve más peligrosa a la par contigo.",
        "UN ROGUELITE SOBRE LA PÉRDIDA Y EL CRECIMIENTO. Vive una historia profundamente personal narrada a través de la exploración, la jugabilidad y la narrativa ambiental, donde cada detalle importa."
      ],

      // Spanish screenshot captions
      screenshots: [
        {
          caption: "Cámara dinámica en tercera persona.",
          url: "images/CameraChange_01.gif"
        },
        {
          caption: "Combate modular basado en brazos mecánicos.",
          url: "images/LAGS2026_GorillaCrawlers_01.gif"
        },
        {
          caption: "Combina y mezcla equipamiento.",
          url: "images/Bodygear_04.gif"
        },
        {
          caption: "Guardianes mecánicos colosales.",
          url: "images/BossCinematic_04.gif"
        },
        {
          caption: "Una megaestructura liminal viva.",
          url: "images/RoomChanges_03.gif"
        },
        {
          caption: "HUB persistente y expansivo.",
          url: "images/NPC_02.gif"
        },
        {
          caption: "Inventario analógico estilizado.",
          url: "images/HeavenCrawler_Inventory_SS_001.gif"
        },
        {
          caption: "Una aventura emotiva te espera.",
          url: "images/LAGS2026_Intro_02.gif"
        },
        {
          caption: "Apóyanos en Kickstarter.",
          url: "images/LAGS2026_ElevatorKickstarter_01.gif"
        }
      ],

      awards: [
        {
          title: "Selección de la Muestra Indie",
          event: "Sistema de Entretenimiento Mexicano 2025-2026"
        },
        {
          title: "Nominado al Juego Más Anticipado",
          event: "Premios Game Effect 2025"
        },
        {
          title: "Mejor Pitch de Desarrollador Indie",
          event: "Concurso Supernova Game Devs 2025"
        }
      ],

      quotes: [],

      aboutDeveloper: "Carbon Machina es un estudio de videojuegos independiente dedicado a crear RPGs de acción y aventura desafiantes, altamente interactivos e inmersivos. Fundado en 2019 por Diego Muñoz, nos enfocamos en la expresión significativa del jugador, sistemas de juego profundos y la creación de juegos que resistan el paso del tiempo."
    }
  }
};

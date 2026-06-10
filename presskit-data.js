/**
 * HEAVEN CRAWLER - Presskit Data Configuration
 * 
 * Instructions:
 * - Update the values below with your game and studio details.
 * - For lists (like platforms, features, screenshots), keep the array format [ "item1", "item2" ].
 * - To see changes, simply save this file and refresh index.html in your browser!
 */

const PRESSKIT_DATA = {
  // --- FACTSHEET ---
  factsheet: {
    developer: "Carbon Machina",
    developerLink: "https://www.carbonmachina.com/",
    basedIn: "México",
    releaseDate: "TBA 2027",
    platforms: [
      "PC / Steam"
    ],
    website: "https://www.kickstarter.com/projects/carbonmachina/heaven-crawler-immersive-exploration-based-dungeon-crawler",
    regularPrice: "$19.99 USD",
    monetization: "Single purchase. No microtransactions or pay-to-win mechanics."
  },

// --- GAME DESCRIPTION ---
gameName: "Heaven Crawler",
tagline: "Heaven has taken enough. Time to take it back.",

description: {
  short: "Explore, fight, and uncover the secrets of a mysterious tower using unique Mechanical Arms as you climb your way through a deeply personal journey.",
  
  full: "Explore The Womb, a forgotten man-made tower built to reach the heavens. Wield Mechanical Arms to overcome deadly enemies and carve your path upward on a deeply personal journey. And remember: bring her back."
},

// --- HISTORY ---
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

  // --- KEY FEATURES ---
features: [
"ASCEND A LIVING TOWER. Explore The Womb, a colossal man-made structure built to reach the heavens. Every layer presents new challenges, secrets, and dangers to overcome.",

"MODULAR COMBAT WITH MECHANICAL ARMS. Customize your loadout, discover powerful synergies, and develop a combat style that is uniquely your own.",

"DYNAMIC ENEMIES AND EMERGENT ENCOUNTERS. Mechanical animals roam the Tower, each with distinct behaviors, attacks, and interactions that create unpredictable situations.",

"EVERY DEATH CHANGES THE JOURNEY. Unlock new abilities, content, and opportunities with every attempt, while the Tower grows more dangerous alongside you.",

"A ROGUELITE ABOUT LOSS AND GROWTH. Experience a deeply personal story told through exploration, gameplay, and environmental storytelling, where every detail matters."
]

  // --- VIDEOS & TRAILERS ---
  // You can use YouTube video IDs (the part after v= in the URL, e.g., "dQw4w9WgXcQ")
  videos: [
   
    {
      title: "Kickstarer Announcement Trailer - LAGS 2026",
      youtubeId: "_GxUC5dlLF4" // Replace with your YouTube video ID
    },
	{
      title: "Teaser Trailer - LAGS 2024",
      youtubeId: "-A5Z86Qi9-o" // Replace with your YouTube video ID
    }
  ],

  // --- IMAGES & SCREENSHOTS ---
  // Store these images in your `/images` folder, then list their filenames here.
  // We've put placeholder URLs from Unsplash so you can see how it looks out-of-the-box!
  logo: "images/LOGO_HD.png", // Path to your logo (transparent PNG recommended, e.g., "images/logo.png")
  icon: "images/HC_Icon.png", // Path to your square icon/avatar (e.g., "images/icon.png")
  
  // High-res screenshots (recommended size: 1920x1080)
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
  
  // GIFS
 /* gifs: [
    {
      caption: "Expansive Persistent HUB.",
      url: "images/NPC_02.gif"
    },
    {
      caption: "Colossal Mechanical Guardians.",
      url: "images/BossCinematic_04.gif"
    },
    {
      caption: "Dynamic 3rd Person Camera.",
      url: "images/CameraChange_01.gif"
    },
    {
      caption: "A Livig Liminal Structure.",
      url: "images/RoomChange_03.gif"
    }
  ],*/

  // --- LOGOS & OTHER ASSETS ZIP ---
  // Link to a .zip file containing all your marketing assets (logos, screenshots, icons)
  downloadZipUrl: "#https://drive.google.com/drive/folders/1Cz93-WHIEscwkJKIfIhX-TP6RJ_A4G2u?usp=drive_link", // e.g., "assets/heaven_crawler_presskit.zip" or a Google Drive link

  // --- AWARDS & RECOGNITION ---
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

  // --- SELECTED ARTICLES & QUOTES ---
  /*quotes: [
    {
      text: "Heaven Crawler mixes tight platforming mechanics with the best elements of roguelikes. It's a breath of fresh air.",
      author: "Indie Game Critic",
      website: "IndieGameCritic.com",
      url: "https://example.com"
    },
    {
      text: "Scaling the vertical sky ruins feels exhilarating. The skill interactions are immensely satisfying.",
      author: "Pixel Enthusiast",
      website: "PixelEnthusiast.net",
      url: "https://example.com"
    }
  ],*/

  // --- THE STUDIO / DEVELOPER INFO ---
  aboutDeveloper: "Carbon Machina is an independent game studio dedicated to crafting challenging, highly interactive & immersive action-adventure RPGs. Founded in 2019 by Diego Muñoz, we focus on meaningful player expression, deep gameplay systems, and creating games that stand the test of time.",
  
  // --- CONTACT & SOCIALS ---
  contact: {
    email: "carbonmachina@gmail.com",
    twitter: "@Heaven_Crawler",
    twitterUrl: "https://x.com/Heaven_Crawler",
    instagramUrl: "https://www.instagram.com/heavencrawlergame/",
  }
};

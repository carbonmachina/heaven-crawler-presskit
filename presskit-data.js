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
    website: "https://heavencrawler.com",
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
    "Vertical Dungeon Crawling: Navigate upwards through vertical rooms, using grappling mechanics and jump boots to scale towering arenas.",
    "Dynamic Deckbuilding: Choose and evolve skills dynamically as you climb. Combine wind dashes, lightning strikes, and shield parries to create broken builds.",
    "Deicide Boss Fights: Engage in multi-phase, screen-filling battles against corrupt celestial guardians.",
    "Procedural Sky Layers: No two climbs are the same. Wind currents, falling debris, and celestial gravity shifts keep you on your toes.",
    "Stunning Retro-Modern Aesthetics: Hand-drawn pixel art characters combined with modern volumetric lighting and particle systems."
  ],

  // --- VIDEOS & TRAILERS ---
  // You can use YouTube video IDs (the part after v= in the URL, e.g., "dQw4w9WgXcQ")
  videos: [
    {
      title: "Teaser Trailer - LAGS 2024",
      youtubeId: "https://youtu.be/-A5Z86Qi9-o" // Replace with your YouTube video ID
    },
    {
      title: "Kickstarer Announcement Trailer - LAGS 2026",
      youtubeId: "https://youtu.be/_GxUC5dlLF4" // Replace with your YouTube video ID
    }
  ],

  // --- IMAGES & SCREENSHOTS ---
  // Store these images in your `/images` folder, then list their filenames here.
  // We've put placeholder URLs from Unsplash so you can see how it looks out-of-the-box!
  logo: "images/LOGO_HD.png", // Path to your logo (transparent PNG recommended, e.g., "images/logo.png")
  icon: "images/Heaven_crawler_STEAM_3_MAIN.png", // Path to your square icon/avatar (e.g., "images/icon.png")
  
  // High-res screenshots (recommended size: 1920x1080)
  screenshots: [
    {
      caption: "Ascending the fractured steps of the first heaven.",
      url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&auto=format&fit=crop&q=80"
    },
    {
      caption: "A chaotic battle against the lightning gargoyles.",
      url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80"
    },
    {
      caption: "Customizing active skills at the celestial campfire.",
      url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&auto=format&fit=crop&q=80"
    },
    {
      caption: "Facing the Arch-Seraph, Guardian of the Fourth Layer.",
      url: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=1200&auto=format&fit=crop&q=80"
    }
  ],

  // --- LOGOS & OTHER ASSETS ZIP ---
  // Link to a .zip file containing all your marketing assets (logos, screenshots, icons)
  downloadZipUrl: "#", // e.g., "assets/heaven_crawler_presskit.zip" or a Google Drive link

  // --- AWARDS & RECOGNITION ---
  awards: [
    {
      title: "Indie Showcase Selection",
      event: "Awesome Game Festival 2025"
    },
    {
      title: "Best Gameplay Nominee",
      event: "Starlight Indie Awards 2025"
    }
  ],

  // --- SELECTED ARTICLES & QUOTES ---
  quotes: [
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
  ],

  // --- THE STUDIO / DEVELOPER INFO ---
  aboutDeveloper: "We are an independent game studio passionate about making challenging, physics-based action games with rich customization systems. Founded in 2024, our mission is to create memorable worlds that players love climbing, fighting, and exploring.",
  
  // --- CONTACT & SOCIALS ---
  contact: {
    email: "contact@yourstudio.com",
    pressInquiries: "press@yourstudio.com",
    twitter: "@HeavenCrawler",
    twitterUrl: "https://twitter.com/yourhandle",
    facebookUrl: "https://facebook.com/yourpage",
    instagramUrl: "https://instagram.com/yourpage",
    discordUrl: "https://discord.gg/yourserver"
  }
};

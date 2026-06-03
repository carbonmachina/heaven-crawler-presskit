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
    developerLink: "https://yourstudio.com",
    basedIn: "City, Country",
    releaseDate: "TBA / Coming Soon",
    platforms: [
      "PC / Steam",
      "Nintendo Switch",
      "PlayStation 5",
      "Xbox Series X/S"
    ],
    website: "https://heavencrawler.com",
    regularPrice: "$19.99 USD",
    monetization: "Single purchase. No microtransactions or pay-to-win mechanics."
  },

  // --- GAME DESCRIPTION ---
  gameName: "Heaven Crawler",
  tagline: "Climb the heavens. Purge the celestial realm. Survive the descent.",
  
  description: {
    short: "An intense, action-packed dungeon crawler set in a vertical, fractured celestial world where you climb to dethrone corrupt deities.",
    full: "Heaven Crawler is a fast-paced vertical action roguelike / dungeon crawler. Players step into the boots of a fallen warrior seeking redemption by ascending the steps of the Shattered Heavens. Battle through procedurally generated celestial layers, harvest divine essence to upgrade your arsenal, and challenge the grand guardians of the sky. With tactical, physics-based combat and a rich deckbuilding skill system, every climb presents a unique trial."
  },

  // --- HISTORY ---
  history: [
    {
      date: "January 2025",
      description: "Concept phase begins. The team decides to mix traditional crawler elements with vertical movement mechanics."
    },
    {
      date: "June 2025",
      description: "Alpha version completed. First closed playtests show highly positive reception for the physics-based combat."
    },
    {
      date: "October 2025",
      description: "Heaven Crawler is officially announced with a cinematic teaser trailer."
    },
    {
      date: "Q3 2026",
      description: "Target launch date on Steam Early Access."
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
      title: "Official Announcement Trailer",
      youtubeId: "dQw4w9WgXcQ" // Replace with your YouTube video ID
    },
    {
      title: "Early Alpha Gameplay Showcase",
      youtubeId: "dQw4w9WgXcQ" // Replace with your YouTube video ID
    }
  ],

  // --- IMAGES & SCREENSHOTS ---
  // Store these images in your `/images` folder, then list their filenames here.
  // We've put placeholder URLs from Unsplash so you can see how it looks out-of-the-box!
  logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80", // Path to your logo (transparent PNG recommended, e.g., "images/logo.png")
  icon: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=200&auto=format&fit=crop&q=80", // Path to your square icon/avatar (e.g., "images/icon.png")
  
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

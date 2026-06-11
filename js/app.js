document.addEventListener("DOMContentLoaded", () => {
  // Ensure PRESSKIT_DATA is loaded
  if (typeof PRESSKIT_DATA === "undefined") {
    console.error("PRESSKIT_DATA is not defined. Make sure presskit-data.js is loaded first.");
    return;
  }

  const data = PRESSKIT_DATA;

  // --- UI Translation Dictionaries ---
  const UI_TRANSLATIONS = {
    en: {
      sidebarSubtitle: "Official Press Kit",
      navAbout: "About",
      navHistory: "History",
      navFeatures: "Features",
      navVideos: "Videos",
      navScreenshots: "Screenshots",
      navLogos: "Logo & Icon",
      navQuotes: "Quotes",
      navAwards: "Awards",
      navDeveloper: "Developer",
      titleAbout: "About the Game",
      titleHistory: "Brief History",
      titleFeatures: "Key Features",
      titleVideos: "Videos & Trailers",
      titleScreenshots: "Screenshots",
      titleLogos: "Logo & Icon Assets",
      titleQuotes: "Selected Articles & Quotes",
      titleAwards: "Awards & Recognition",
      titleDeveloper: "About the Developer",
      factsheetTitle: "Factsheet",
      pressAssetsTitle: "Press Assets",
      pressAssetsDesc: "Download all transparent logos, standard color codes, and high-res screenshots in a single package.",
      downloadZipBtn: "Download ZIP File",
      contactTitle: "Contact",
      themeToggle: "Theme Toggle",
      dlLogoBtn: "Download Logo PNG",
      dlIconBtn: "Download Icon PNG",
      
      // Factsheet labels
      labelDeveloper: "Developer",
      labelBasedIn: "Based in",
      labelReleaseDate: "Release Date",
      labelPlatforms: "Platforms",
      labelWebsite: "Website",
      labelPrice: "Regular Price",
      labelMonetization: "Monetization"
    },
    es: {
      sidebarSubtitle: "Material de Prensa Oficial",
      navAbout: "Acerca de",
      navHistory: "Historia",
      navFeatures: "Características",
      navVideos: "Videos",
      navScreenshots: "Capturas",
      navLogos: "Logo e Ícono",
      navQuotes: "Frases",
      navAwards: "Premios",
      navDeveloper: "Desarrollador",
      titleAbout: "Acerca del Juego",
      titleHistory: "Breve Historia",
      titleFeatures: "Características Clave",
      titleVideos: "Videos y Trailers",
      titleScreenshots: "Capturas de Pantalla",
      titleLogos: "Logos e Íconos",
      titleQuotes: "Artículos y Frases Seleccionados",
      titleAwards: "Premios y Reconocimientos",
      titleDeveloper: "Acerca del Desarrollador",
      factsheetTitle: "Ficha Técnica",
      pressAssetsTitle: "Material de Prensa",
      pressAssetsDesc: "Descarga todos los logos transparentes, códigos de color y capturas en alta resolución en un solo archivo.",
      downloadZipBtn: "Descargar archivo ZIP",
      contactTitle: "Contacto",
      themeToggle: "Cambiar Tema",
      dlLogoBtn: "Descargar Logo PNG",
      dlIconBtn: "Descargar Ícono PNG",

      // Factsheet labels
      labelDeveloper: "Desarrollador",
      labelBasedIn: "Basado en",
      labelReleaseDate: "Fecha de Lanzamiento",
      labelPlatforms: "Plataformas",
      labelWebsite: "Sitio Web",
      labelPrice: "Precio Regular",
      labelMonetization: "Monetización"
    }
  };

  // --- Determine Active Language ---
  let currentLanguage = localStorage.getItem("presskit_lang");
  if (!currentLanguage) {
    const browserLang = navigator.language.slice(0, 2);
    const availableCodes = data.languages.map(l => l.code);
    currentLanguage = availableCodes.includes(browserLang) ? browserLang : data.defaultLanguage;
  }

  // --- Render Language Selectors ---
  const langSelectDesktop = document.getElementById("language-select");
  const langSelectMobile = document.getElementById("language-select-mobile");

  function populateDropdowns() {
    const optionsHtml = data.languages
      .map(lang => `<option value="${lang.code}">${lang.label}</option>`)
      .join("");
    
    if (langSelectDesktop) {
      langSelectDesktop.innerHTML = optionsHtml;
      langSelectDesktop.value = currentLanguage;
    }
    if (langSelectMobile) {
      langSelectMobile.innerHTML = optionsHtml;
      langSelectMobile.value = currentLanguage;
    }
  }

  // --- Main Render Function ---
  function renderContent(lang) {
    const activeData = data.localized[lang] || data.localized[data.defaultLanguage];
    const trans = UI_TRANSLATIONS[lang] || UI_TRANSLATIONS[data.defaultLanguage];

    // 1. Static UI elements translation (via data-i18n attribute)
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (trans[key]) {
        element.textContent = trans[key];
      }
    });

    // 2. Set Game Title, Tagline, and Document Title
    document.title = `${activeData.gameName} - Press Kit`;
    document.querySelectorAll(".data-game-name").forEach(el => el.textContent = activeData.gameName);
    document.querySelectorAll(".data-tagline").forEach(el => el.textContent = activeData.tagline);

    // 3. Set Descriptions
    const shortDescEl = document.getElementById("game-short-desc");
    if (shortDescEl) shortDescEl.textContent = activeData.description.short;

    const fullDescEl = document.getElementById("game-full-desc");
    if (fullDescEl) fullDescEl.textContent = activeData.description.full;

    // 4. Render Factsheet
    const factsheetList = document.getElementById("factsheet-list");
    if (factsheetList && activeData.factsheet) {
      const fs = activeData.factsheet;
      const fsItems = [
        { label: trans.labelDeveloper, value: `<a href="${data.factsheetGlobal.developerLink}" target="_blank" rel="noopener">${fs.developer}</a>` },
        { label: trans.labelBasedIn, value: fs.basedIn },
        { label: trans.labelReleaseDate, value: fs.releaseDate },
        { label: trans.labelPlatforms, value: fs.platforms.join("<br>") },
        { 
          label: trans.labelWebsite, 
          value: data.factsheetGlobal.websites
            .map(site => `<a href="${site.url}" target="_blank" rel="noopener" style="display: block; margin-bottom: 0.25rem;">${site.label}</a>`)
            .join("") 
        },
        { label: trans.labelPrice, value: fs.regularPrice },
        { label: trans.labelMonetization, value: fs.monetization }
      ];

      factsheetList.innerHTML = fsItems
        .map(item => `
          <div class="factsheet-item">
            <span class="factsheet-label">${item.label}</span>
            <span class="factsheet-value">${item.value}</span>
          </div>
        `).join("");
    }

    // 5. Render History Timeline
    const historyList = document.getElementById("history-list");
    if (historyList && activeData.history) {
      historyList.innerHTML = activeData.history
        .map(item => `
          <div class="history-item">
            <div class="history-marker"></div>
            <div class="history-content">
              <span class="history-date">${item.date}</span>
              <p class="history-desc">${item.description}</p>
            </div>
          </div>
        `).join("");
    }

    // 6. Render Key Features
    const featuresList = document.getElementById("features-list");
    if (featuresList && activeData.features) {
      featuresList.innerHTML = activeData.features
        .map(feat => `<li><i class="fa-solid fa-angle-right feature-icon"></i> <span>${feat}</span></li>`)
        .join("");
    }

    // 7. Render Screenshots Gallery (Localized captions)
    const screenshotsGrid = document.getElementById("screenshots-grid");
    if (screenshotsGrid && activeData.screenshots) {
      screenshotsGrid.innerHTML = activeData.screenshots
        .map((screenshot, idx) => `
          <div class="screenshot-card" data-index="${idx}">
            <div class="screenshot-img-wrapper">
              <img src="${screenshot.url}" alt="${screenshot.caption}" loading="lazy">
              <div class="screenshot-overlay">
                <span class="view-btn"><i class="fa-solid fa-expand"></i> View Fullscreen</span>
              </div>
            </div>
            <p class="screenshot-caption">${screenshot.caption}</p>
          </div>
        `).join("");
    }

    // 8. Render Selected Quotes
    const quotesList = document.getElementById("quotes-list");
    const quotesSection = document.getElementById("quotes");
    if (quotesList && quotesSection && activeData.quotes) {
      quotesSection.style.display = "block";
      if (activeData.quotes.length === 0) {
        const placeholderText = lang === "es" 
          ? "Las menciones y artículos seleccionados aparecerán aquí pronto." 
          : "Selected articles and quotes will appear here soon.";
        quotesList.innerHTML = `
          <div class="quote-card" style="border-left-color: var(--text-muted); opacity: 0.6;">
            <p class="quote-text" style="font-style: italic; font-size: 0.95rem;">${placeholderText}</p>
          </div>
        `;
      } else {
        quotesList.innerHTML = activeData.quotes
          .map(q => `
            <div class="quote-card">
              <p class="quote-text">"${q.text}"</p>
              <div class="quote-author">
                <span>— ${q.author}, </span>
                <a href="${q.url}" target="_blank" rel="noopener" class="quote-link">${q.website}</a>
              </div>
            </div>
          `).join("");
      }
    }

    // 9. Render Awards
    const awardsList = document.getElementById("awards-list");
    const awardsSection = document.getElementById("awards");
    if (awardsList && awardsSection && activeData.awards) {
      if (activeData.awards.length === 0) {
        awardsSection.style.display = "none";
      } else {
        awardsSection.style.display = "block";
        awardsList.innerHTML = activeData.awards
          .map(award => `
            <div class="award-item">
              <i class="fa-solid fa-trophy award-icon"></i>
              <div>
                <span class="award-title">${award.title}</span>
                <span class="award-event">${award.event}</span>
              </div>
            </div>
          `).join("");
      }
    }

    // 10. Render About Developer (Company Info)
    const devDesc = document.getElementById("developer-desc");
    if (devDesc) devDesc.textContent = activeData.aboutDeveloper;

    // --- Dynamic DOM update trigger effects ---
    const mainContainer = document.querySelector(".sections-container");
    if (mainContainer) {
      mainContainer.style.opacity = 0;
      setTimeout(() => {
        mainContainer.style.transition = "opacity 0.4s ease";
        mainContainer.style.opacity = 1;
      }, 50);
    }
  }

  // --- Render Global Elements (Unlocalized) ---
  function renderGlobalElements() {
    // Set Dynamic Background Images on root document
    if (data.backgroundImageDark) {
      document.documentElement.style.setProperty("--bg-image-dark", `url(${data.backgroundImageDark})`);
    }
    if (data.backgroundImageLight) {
      document.documentElement.style.setProperty("--bg-image-light", `url(${data.backgroundImageLight})`);
    }

    // Set Header Banner or Fallback Title
    const bannerContainer = document.getElementById("presskit-banner-container");
    const fallbackHeader = document.getElementById("presskit-header-fallback");
    if (bannerContainer && data.banner) {
      // Load banner image and recreate overlay container dynamically
      bannerContainer.innerHTML = `
        <img src="${data.banner}" alt="${data.gameName} Banner" class="banner-img">
        <div class="banner-overlay">
          <h1 class="game-title data-game-name">${data.localized[currentLanguage].gameName}</h1>
          <p class="game-tagline data-tagline">${data.localized[currentLanguage].tagline}</p>
        </div>
      `;
      bannerContainer.style.display = "block";
      if (fallbackHeader) fallbackHeader.style.display = "none";
    } else {
      if (bannerContainer) bannerContainer.style.display = "none";
      if (fallbackHeader) fallbackHeader.style.display = "block";
    }

    // Set Sidebar Logo
    const sidebarLogoContainer = document.getElementById("sidebar-logo-container");
    if (sidebarLogoContainer && data.icon) {
      sidebarLogoContainer.innerHTML = `<img src="${data.icon}" alt="${data.gameName} Icon" style="width: 80px; height: 80px; border-radius: 16px; margin-bottom: 0.5rem; object-fit: cover; box-shadow: var(--shadow-sm);">`;
    }

    // Set page favicon
    if (data.icon) {
      let faviconLink = document.querySelector("link[rel~='icon']");
      if (!faviconLink) {
        faviconLink = document.createElement("link");
        faviconLink.rel = "icon";
        faviconLink.type = "image/png";
        document.head.appendChild(faviconLink);
      }
      faviconLink.href = data.icon;
    }

    // Set Logos & Icons Assets
    const logoImg = document.getElementById("presskit-logo");
    const iconImg = document.getElementById("presskit-icon");
    const logoLink = document.getElementById("logo-download-link");
    const iconLink = document.getElementById("icon-download-link");

    if (logoImg && data.logo) {
      logoImg.src = data.logo;
      logoImg.alt = `${data.gameName} Logo`;
      if (logoLink) logoLink.href = data.logo;
    }
    if (iconImg && data.icon) {
      iconImg.src = data.icon;
      iconImg.alt = `${data.gameName} Icon`;
      if (iconLink) iconLink.href = data.icon;
    }

    // ZIP Download Button
    const zipButton = document.getElementById("download-zip-btn");
    if (zipButton && data.downloadZipUrl) {
      zipButton.href = data.downloadZipUrl;
      if (data.downloadZipUrl === "#") {
        zipButton.addEventListener("click", (e) => {
          e.preventDefault();
          alert("This is a placeholder button. You can link your actual marketing asset ZIP file inside presskit-data.js under the 'downloadZipUrl' property!");
        });
      }
    }

    // Render Contact Info (Global)
    const contactDetails = document.getElementById("contact-details");
    if (contactDetails && data.contact) {
      const c = data.contact;
      const cItems = [];
      if (c.email) cItems.push(`<li><strong>General Inquiries:</strong> <a href="mailto:${c.email}">${c.email}</a></li>`);
      if (c.pressInquiries) cItems.push(`<li><strong>Press Contact:</strong> <a href="mailto:${c.pressInquiries}">${c.pressInquiries}</a></li>`);
      if (c.twitter) cItems.push(`<li><strong>Twitter:</strong> <a href="${c.twitterUrl}" target="_blank" rel="noopener">${c.twitter}</a></li>`);
      
      contactDetails.innerHTML = cItems.join("");

      const socialLinksContainer = document.getElementById("sidebar-socials");
      if (socialLinksContainer) {
        let socialsHtml = "";
        if (c.twitterUrl) socialsHtml += `<a href="${c.twitterUrl}" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>`;
        if (c.facebookUrl) socialsHtml += `<a href="${c.facebookUrl}" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>`;
        if (c.instagramUrl) socialsHtml += `<a href="${c.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>`;
        if (c.discordUrl) socialsHtml += `<a href="${c.discordUrl}" target="_blank" rel="noopener" aria-label="Discord"><i class="fa-brands fa-discord"></i></a>`;
        
        socialLinksContainer.innerHTML = socialsHtml;
      }
    }

    // Render Videos
    const videosGrid = document.getElementById("videos-grid");
    if (videosGrid && data.videos) {
      videosGrid.innerHTML = data.videos
        .map(video => `
          <div class="video-card">
            <h4 class="video-title">${video.title}</h4>
            <div class="video-container">
              <iframe 
                src="https://www.youtube.com/embed/${video.youtubeId}" 
                title="${video.title}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        `).join("");
    }
  }

  // --- Handle Language Changes ---
  function changeLanguage(newLang) {
    currentLanguage = newLang;
    localStorage.setItem("presskit_lang", newLang);
    
    // Sync dropdown states
    if (langSelectDesktop) langSelectDesktop.value = newLang;
    if (langSelectMobile) langSelectMobile.value = newLang;

    renderContent(newLang);
  }

  if (langSelectDesktop) {
    langSelectDesktop.addEventListener("change", (e) => changeLanguage(e.target.value));
  }
  if (langSelectMobile) {
    langSelectMobile.addEventListener("change", (e) => changeLanguage(e.target.value));
  }

  // --- Initial Page Population ---
  populateDropdowns();
  renderGlobalElements();
  renderContent(currentLanguage);

  // --- Theme Toggle Manager ---
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "dark";

  // Initialize theme
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      let theme = document.documentElement.getAttribute("data-theme");
      let newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    if (theme === "dark") {
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i> <span data-i18n="themeToggle">Theme Toggle</span>';
      themeToggle.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i> <span data-i18n="themeToggle">Theme Toggle</span>';
      themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
    }
  }

  // --- Scroll Spy Navigation ---
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // --- Screenshot Lightbox/Modal ---
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalDownload = document.getElementById("modal-download");
  const modalPrev = document.getElementById("modal-prev");
  const modalNext = document.getElementById("modal-next");
  const modalClose = document.getElementById("modal-close");
  const screenshotsGrid = document.getElementById("screenshots-grid");

  let currentImgIndex = 0;

  if (modal && screenshotsGrid) {
    // Open Modal
    screenshotsGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".screenshot-card");
      if (!card) return;

      currentImgIndex = parseInt(card.getAttribute("data-index"), 10);
      openLightbox();
    });

    // Close Modal
    modalClose.addEventListener("click", closeLightbox);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLightbox();
    });

    // Prev/Next Navigation
    modalPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      showPrevImage();
    });
    modalNext.addEventListener("click", (e) => {
      e.stopPropagation();
      showNextImage();
    });

    // Keyboard Shortcuts
    document.addEventListener("keydown", (e) => {
      if (!modal.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrevImage();
      if (e.key === "ArrowRight") showNextImage();
    });
  }

  function openLightbox() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Disable background scrolling
    updateLightboxImage();
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scrolling
  }

  function updateLightboxImage() {
    const activeData = data.localized[currentLanguage] || data.localized[data.defaultLanguage];
    const screenshot = activeData.screenshots[currentImgIndex];
    modalImg.src = screenshot.url;
    modalCaption.textContent = screenshot.caption;
    modalDownload.href = screenshot.url;
    modalDownload.setAttribute("download", `heaven_crawler_screenshot_${currentImgIndex + 1}.jpg`);
  }

  function showPrevImage() {
    const activeData = data.localized[currentLanguage] || data.localized[data.defaultLanguage];
    currentImgIndex = (currentImgIndex - 1 + activeData.screenshots.length) % activeData.screenshots.length;
    updateLightboxImage();
  }

  function showNextImage() {
    const activeData = data.localized[currentLanguage] || data.localized[data.defaultLanguage];
    currentImgIndex = (currentImgIndex + 1) % activeData.screenshots.length;
    updateLightboxImage();
  }
});

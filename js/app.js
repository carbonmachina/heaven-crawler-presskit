document.addEventListener("DOMContentLoaded", () => {
  // Ensure PRESSKIT_DATA is loaded
  if (typeof PRESSKIT_DATA === "undefined") {
    console.error("PRESSKIT_DATA is not defined. Make sure presskit-data.js is loaded first.");
    return;
  }

  // --- Dynamic Content Rendering ---
  const data = PRESSKIT_DATA;

  // Set page titles and names
  document.title = `${data.gameName} - Press Kit`;
  const gameNameElements = document.querySelectorAll(".data-game-name");
  gameNameElements.forEach(el => el.textContent = data.gameName);

  const taglineElements = document.querySelectorAll(".data-tagline");
  taglineElements.forEach(el => el.textContent = data.tagline);

  // Set Short & Full Descriptions
  const shortDescEl = document.getElementById("game-short-desc");
  if (shortDescEl) shortDescEl.textContent = data.description.short;

  const fullDescEl = document.getElementById("game-full-desc");
  if (fullDescEl) fullDescEl.textContent = data.description.full;

  // Render Factsheet
  const factsheetList = document.getElementById("factsheet-list");
  if (factsheetList && data.factsheet) {
    const fs = data.factsheet;
    const fsItems = [
      { label: "Developer", value: `<a href="${fs.developerLink}" target="_blank" rel="noopener">${fs.developer}</a>` },
      { label: "Based in", value: fs.basedIn },
      { label: "Release Date", value: fs.releaseDate },
      { label: "Platforms", value: fs.platforms.join("<br>") },
      { label: "Website", value: `<a href="${fs.website}" target="_blank" rel="noopener">${fs.website.replace(/^https?:\/\//, "")}</a>` },
      { label: "Regular Price", value: fs.regularPrice },
      { label: "Monetization", value: fs.monetization }
    ];

    factsheetList.innerHTML = fsItems
      .map(item => `
        <div class="factsheet-item">
          <span class="factsheet-label">${item.label}</span>
          <span class="factsheet-value">${item.value}</span>
        </div>
      `).join("");
  }

  // Render Logo & Icon Section
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

  // Set ZIP download link
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

  // Render History Timeline
  const historyList = document.getElementById("history-list");
  if (historyList && data.history) {
    historyList.innerHTML = data.history
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

  // Render Key Features
  const featuresList = document.getElementById("features-list");
  if (featuresList && data.features) {
    featuresList.innerHTML = data.features
      .map(feat => `<li><i class="fa-solid fa-angle-right feature-icon"></i> <span>${feat}</span></li>`)
      .join("");
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

  // Render Screenshots Gallery
  const screenshotsGrid = document.getElementById("screenshots-grid");
  if (screenshotsGrid && data.screenshots) {
    screenshotsGrid.innerHTML = data.screenshots
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

  // Render Awards
  const awardsList = document.getElementById("awards-list");
  if (awardsList && data.awards) {
    if (data.awards.length === 0) {
      document.getElementById("awards").style.display = "none";
    } else {
      awardsList.innerHTML = data.awards
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

  // Render Selected Articles/Quotes
  const quotesList = document.getElementById("quotes-list");
  if (quotesList && data.quotes) {
    if (data.quotes.length === 0) {
      document.getElementById("quotes").style.display = "none";
    } else {
      quotesList.innerHTML = data.quotes
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

  // Render About Developer (Company Info)
  const devDesc = document.getElementById("developer-desc");
  if (devDesc) devDesc.textContent = data.aboutDeveloper;

  // Render Contact Info
  const contactDetails = document.getElementById("contact-details");
  if (contactDetails && data.contact) {
    const c = data.contact;
    const cItems = [];
    if (c.email) cItems.push(`<li><strong>General Inquiries:</strong> <a href="mailto:${c.email}">${c.email}</a></li>`);
    if (c.pressInquiries) cItems.push(`<li><strong>Press Contact:</strong> <a href="mailto:${c.pressInquiries}">${c.pressInquiries}</a></li>`);
    if (c.twitter) cItems.push(`<li><strong>Twitter:</strong> <a href="${c.twitterUrl}" target="_blank" rel="noopener">${c.twitter}</a></li>`);
    
    contactDetails.innerHTML = cItems.join("");

    // Set sidebar contact/social icons
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
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      themeToggle.setAttribute("aria-label", "Switch to Light Mode");
    } else {
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
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
    const screenshot = data.screenshots[currentImgIndex];
    modalImg.src = screenshot.url;
    modalCaption.textContent = screenshot.caption;
    modalDownload.href = screenshot.url;
    modalDownload.setAttribute("download", `heaven_crawler_screenshot_${currentImgIndex + 1}.jpg`);
  }

  function showPrevImage() {
    currentImgIndex = (currentImgIndex - 1 + data.screenshots.length) % data.screenshots.length;
    updateLightboxImage();
  }

  function showNextImage() {
    currentImgIndex = (currentImgIndex + 1) % data.screenshots.length;
    updateLightboxImage();
  }
});

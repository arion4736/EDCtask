// Keeping page content in arrays makes it easier to update and understand.
document.documentElement.classList.add("motion-ready");

const milestones = [
  { year: "1976", title: "Apple’s first steps", text: "Jobs and Steve Wozniak start Apple and sell the Apple I as a circuit board. Their goal is to make computers useful at home and work.", source: "https://guides.loc.gov/this-month-in-business-history/april/apple-computer-founded" },
  { year: "1977", title: "Apple II brings color", text: "Apple releases the Apple II, a complete personal computer with color graphics. It helps the young company grow beyond its first kit computer.", source: "https://guides.loc.gov/this-month-in-business-history/april/apple-computer-founded" },
  { year: "1984", title: "Macintosh arrives", text: "Apple introduces Macintosh with a graphical interface and mouse. Jobs helps present the computer as a more approachable way to use technology.", source: "https://computerhistory.org/apple-timeline/" },
  { year: "1985", title: "A new chapter at NeXT", text: "After leaving Apple following disagreements, Jobs starts NeXT. The company builds powerful computers and software for education and business.", source: "https://guides.loc.gov/this-month-in-business-history/april/apple-computer-founded" },
  { year: "1986", title: "Pixar becomes independent", text: "Jobs buys Lucasfilm’s computer graphics division and establishes it as Pixar. Its artists and engineers continue developing computer animation.", source: "https://www.pixar.com/our-story" },
  { year: "1995", title: "Toy Story makes history", text: "Pixar releases Toy Story, the first feature-length film made entirely with computer animation. Jobs helped support the studio, while its film team created the story and animation.", source: "https://www.pixar.com/our-story" },
  { year: "1997", title: "A return to Apple", text: "Apple acquires NeXT, bringing Jobs back. NeXT’s software helps address Apple’s operating-system needs, and Jobs later becomes CEO.", source: "https://guides.loc.gov/this-month-in-business-history/april/apple-computer-founded" },
  { year: "2001", title: "Music goes portable", text: "Apple introduces iPod, designed to put up to 1,000 songs in a pocket and sync them with iTunes. Jobs leads Apple as it moves into digital music.", source: "https://www.apple.com/newsroom/2001/10/23Apple-Presents-iPod/" },
  { year: "2007", title: "The iPhone launch", text: "Apple introduces iPhone as a phone, an iPod, and an internet communicator in one device. Jobs presents the idea at Macworld.", source: "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/" },
  { year: "2010", title: "Introducing iPad", text: "Apple launches iPad, a touch-screen device for browsing, reading, video, music, and apps. Jobs is CEO; a large team develops the product.", source: "https://www.apple.com/newsroom/2010/01/27Apple-Launches-iPad/" }
];

const ventures = [
  {
    name: "Apple", label: "PERSONAL TECHNOLOGY", icon: "A", years: "1976 · 1997–2011",
    summary: "He co-founded Apple and later returned to lead it. Select to learn more.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Steve_Jobs_(Apple_computer)_(LOC).jpg?width=1000",
    imageAlt: "Steve Jobs pictured with an Apple computer in 1984",
    caption: "Apple, 1984 · Jobs with an Apple computer",
    imageCredit: "Bernard Gotfryd / Library of Congress",
    imageSource: "https://commons.wikimedia.org/wiki/File:Steve_Jobs_(Apple_computer)_(LOC).jpg",
    detail: "Jobs and Steve Wozniak founded Apple in 1976. Jobs helped shape product direction and public presentations. The Macintosh arrived in 1984; after Jobs returned to Apple in 1997, the company later introduced iPod and iPhone. Designers, engineers, and other teams made these products together.",
    link: "https://www.apple.com/", linkLabel: "Visit Apple"
  },
  {
    name: "Pixar", label: "ANIMATION", icon: "✳", years: "1986–2006",
    summary: "He helped turn a computer graphics group into Pixar. Select to learn more.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pixar_White_House_1998.jpg?width=1000",
    imageAlt: "Steve Jobs with members of the Pixar A Bug's Life team at the White House in 1998",
    caption: "Pixar, 1998 · A Bug’s Life team at the White House",
    imageCredit: "Sharon Farmer / U.S. White House",
    imageSource: "https://commons.wikimedia.org/wiki/File:Pixar_White_House_1998.jpg",
    detail: "Jobs bought Lucasfilm’s computer graphics division in 1986 and helped establish it as Pixar. He supported the business as it grew from a computer graphics company into an animation studio. Pixar’s artists and technologists made Toy Story and other films; Jobs was the company’s chairman and major investor.",
    link: "https://www.pixar.com/our-story", linkLabel: "Read Pixar’s story"
  },
  {
    name: "NeXT", label: "COMPUTING & SOFTWARE", icon: "N", years: "1985–1997",
    summary: "He founded NeXT to build computers and software. Select to learn more.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/NeXTcube.jpg?width=1000",
    imageAlt: "A NeXTcube workstation, a computer made by Jobs's NeXT company",
    caption: "NeXT, 1990 · A NeXTcube workstation (product image)",
    imageCredit: "GeWalt / All About Apple Museum",
    imageSource: "https://commons.wikimedia.org/wiki/File:NeXTcube.jpg",
    detail: "Jobs founded NeXT in 1985 after leaving Apple. The company made high-end computers and NeXTSTEP software for education and business. The NeXTcube shown here is a product image, not a photograph of Jobs. Apple acquired NeXT in 1997, and its software technology became an important foundation for later Apple systems.",
    link: "https://computerhistory.org/apple-timeline/", linkLabel: "Explore Apple’s timeline"
  }
];

// Build the timeline from the milestones array above.
const timelineList = document.querySelector("#timeline-list");
timelineList.innerHTML = milestones.map((item) => `
  <li class="timeline-item">
    <span class="timeline-dot" aria-hidden="true"></span>
    <span class="timeline-year">${item.year}</span>
    <h3>${item.title}</h3>
    <p>${item.text} <a class="inline-source" href="${item.source}" target="_blank" rel="noopener noreferrer" aria-label="Source for ${item.year} milestone">Source ↗</a></p>
  </li>
`).join("");

// Create accessible venture buttons; selecting one reveals its extra details.
const ventureList = document.querySelector("#venture-list");
ventureList.innerHTML = ventures.map((venture, index) => `
  <article class="venture-card">
    <figure class="venture-photo">
      <img src="${venture.image}" alt="${venture.imageAlt}" loading="lazy">
      <figcaption><span>${venture.caption}</span><a href="${venture.imageSource}" target="_blank" rel="noopener noreferrer" aria-label="Image source: ${venture.imageCredit}">Photo credit ↗</a></figcaption>
    </figure>
    <button class="venture-toggle" type="button" aria-expanded="false" aria-controls="venture-detail-${index}">
      <span class="venture-meta"><span>${venture.label}</span><span>${venture.years}</span></span>
      <span class="venture-main"><span class="venture-icon" aria-hidden="true">${venture.icon}</span><span class="venture-title-group"><span class="toggle-mark" aria-hidden="true">+</span><h3>${venture.name}</h3></span></span>
    </button>
    <span class="venture-summary">${venture.summary}</span>
    <div class="venture-details" id="venture-detail-${index}"><div class="venture-details-inner"><p>${venture.detail}</p><a href="${venture.link}" target="_blank" rel="noopener noreferrer">${venture.linkLabel} ↗</a></div></div>
  </article>
`).join("");

ventureList.addEventListener("click", (event) => {
  const toggle = event.target.closest(".venture-toggle");
  if (!toggle) return;
  const card = toggle.closest(".venture-card");
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isExpanded));
  card.classList.toggle("is-expanded", !isExpanded);
});

// Reveal page sections in a gentle cascade as visitors scroll down.
const revealTargets = document.querySelectorAll(
  ".intro-grid > *, .story-heading, .story-copy p, .section-heading, " +
  ".timeline-item, .moment-card, .venture-card, .impact-grid > *, .sources-grid > *"
);
revealTargets.forEach((item) => item.classList.add("reveal"));

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        setTimeout(() => entry.target.classList.add("settled"), 1400);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });

  revealTargets.forEach((item) => revealObserver.observe(item));
}

// Keep the matching navigation link gently highlighted as each section enters view.
const navLinks = [...document.querySelectorAll(".site-header nav a[href^='#']")];
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function markCurrentSection(section) {
  navLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === `#${section.id}`;
    link.classList.toggle("is-current", isCurrent);
    if (isCurrent) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

if ("IntersectionObserver" in window && navSections.length) {
  const navObserver = new IntersectionObserver(() => {
    const visibleSections = navSections
      .map((section) => ({ section, bounds: section.getBoundingClientRect() }))
      .filter(({ bounds }) => bounds.top < window.innerHeight * 0.62 && bounds.bottom > window.innerHeight * 0.28);

    if (!visibleSections.length) return;
    const current = visibleSections.reduce((nearest, item) =>
      Math.abs(item.bounds.top - window.innerHeight * 0.3) < Math.abs(nearest.bounds.top - window.innerHeight * 0.3)
        ? item
        : nearest
    );
    markCurrentSection(current.section);
  }, { threshold: 0, rootMargin: "-20% 0px -35% 0px" });

  navSections.forEach((section) => navObserver.observe(section));
}

// ---- Polish layer: card tilt, scroll progress, header state, timeline line ----
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const calmMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Cards that tilt toward the pointer and show a soft glare.
const tiltTargets = document.querySelectorAll(".portrait-card, .moment-card, .venture-card, .impact-card, .lesson-card");
tiltTargets.forEach((el) => el.classList.add("tilt"));

if (finePointer && !calmMotion) {
  tiltTargets.forEach((el) => {
    el.addEventListener("pointermove", (event) => {
      const box = el.getBoundingClientRect();
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      el.style.setProperty("--ry", `${((x - 0.5) * 8).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * 8).toFixed(2)}deg`);
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      el.classList.add("is-tilting");
    });
    el.addEventListener("pointerleave", () => {
      el.classList.remove("is-tilting");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  });
}

// Scroll progress bar, shrinking header, and the timeline line that draws itself.
const siteHeader = document.querySelector(".site-header");
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
progressBar.setAttribute("aria-hidden", "true");
siteHeader.append(progressBar);

let scrollQueued = false;
function updateOnScroll() {
  scrollQueued = false;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.setProperty("--p", maxScroll > 0 ? (window.scrollY / maxScroll).toFixed(4) : 0);
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
  const box = timelineList.getBoundingClientRect();
  const drawn = (window.innerHeight * 0.6 - box.top) / box.height;
  timelineList.style.setProperty("--tl", Math.min(1, Math.max(0, drawn)).toFixed(3));
}
window.addEventListener("scroll", () => {
  if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(updateOnScroll); }
}, { passive: true });
window.addEventListener("resize", updateOnScroll);
updateOnScroll();

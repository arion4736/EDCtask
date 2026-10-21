# Steve Jobs — Entrepreneur Showcase

A responsive biographical profile of Steve Jobs, his work at Apple, NeXT, and Pixar, and the products and teams connected to his career. The page includes a ten-step timeline, company profiles, and a gallery of product presentations with captions and image credits.

## View the webpage

Open `index.html` in a modern web browser. The page uses plain HTML, CSS, and JavaScript; there is no build step or server requirement. It uses Cinzel for the Roman-style title, Cormorant Garamond for section headings, Newsreader for body text, and Manrope for small labels and navigation, with Georgia and system fonts as fallbacks. The Google Fonts load when online.

The design uses warm ivory, deep blue-black, sea-glass card colors, and a persimmon accent for a fresh vintage editorial feel. Venture cards gently grow when hovered or keyboard-focused. A small scroll reveal makes page elements appear in a staggered cascade; visitors who prefer reduced motion see the content without animation or scaling.

## Animations and polish

- **Hero entrance:** CSS keyframes stagger the title, text, and button on load while the portrait photo slowly settles into place.
- **Hover enlargement and tilt:** cards grow and lift on hover, photos zoom inside their frames, and a small JavaScript block tilts each card toward the mouse with a soft light glare. This only runs for mouse users.
- **Smooth expand:** company cards open with an animated height change (`grid-template-rows: 0fr` to `1fr`) instead of snapping.
- **Scroll effects:** a progress bar sits under the header, the header shrinks after scrolling, and the timeline line draws itself as you scroll, with each dot popping in.
- **Reduced motion:** visitors who prefer reduced motion get none of the movement.

## Publish it on Vercel

The simplest method is to import a GitHub repository:

1. Create a new GitHub repository and upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder into its top level.
2. Sign in to Vercel, choose **Add New → Project**, and import that GitHub repository.
3. Choose **Other** as the Framework Preset. Leave the Build Command blank and use `.` (the project root) as the Output Directory.
4. Select **Deploy**. Vercel will give you a public website link. Later commits to the connected GitHub repository can trigger new deployments.

If you keep these files inside a folder named `outputs` in your GitHub repository, set Vercel's **Root Directory** to `outputs`. The easier setup is to place the website files and `assets` folder at the repository's top level.

## How the interaction works

The `ventures` array in `script.js` holds the name, photo, caption, short summary, extra details, and links for each card. JavaScript loops through that array to create the cards. When a card is clicked, its `aria-expanded` value changes, and CSS reveals the extra details. The timeline is created from the `milestones` array in the same way.

## Sources and image credit

The Sources section links to institutional and company-history sources and credits the photographs. The main portrait is credited to David Paul Morris / Getty Images; the product-presentation gallery credits Blake Patterson, Matthew Yohe, and Matt Buchanan. Other images link to their source pages, which provide additional context and licensing information.

## AI use and authorship

AI tools supported research and information gathering, as well as identifying image sources. Tools included Claude, Llama 3.2 (3B parameters) run locally with Ollama, and ChatGPT. ChatGPT also assisted with writing, and Claude helped add the animations. I designed and wrote the main HTML body manually.

**Name:** Arman Ahmed  
**Roll number:** 2500911540015


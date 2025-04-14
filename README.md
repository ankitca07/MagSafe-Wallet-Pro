# Product Landing Page: MagSafe Wallet Pro with Stand (Advanced GSAP Animations)

This repository contains the code for a modern, responsive product landing page for the "MagSafe Wallet Pro with Stand". It's built with HTML, CSS, and JavaScript, featuring advanced scroll-based animations powered by **GSAP (GreenSock Animation Platform)** and its **ScrollTrigger** plugin to create a dynamic and engaging user experience, inspired by the clean aesthetic of sites like Capes India.

---

## Table of Contents

*   [Live Demo](#live-demo)
*   [Video Demonstration](#video-demonstration)
*   [Project Overview](#project-overview)
*   [Key Features](#key-features)
*   [Technologies & Libraries Used](#technologies--libraries-used)
*   [Folder Structure](#folder-structure)
*   [Setup & Usage](#setup--usage)
*   [Code Explanation](#code-explanation)
    *   [Animation Strategy](#animation-strategy)
    *   [Responsiveness](#responsiveness)
*   [Potential Improvements](#potential-improvements)
*   [License](#license)

---

## Live Demo

**(Required: Replace with your live deployment link, e.g., from GitHub Pages, Netlify, Vercel)**

➡️ **[View Live Demo](https://your-username.github.io/your-repo-name/)** ⬅️

*(Note: Replace the link above with the actual URL where your project is hosted.)*

---

## Video Demonstration

**(Required by Assignment: Replace with your video link or embed a GIF)**

A short video demonstrating the landing page, its responsiveness across different screen sizes, and the implemented scroll animations in action.

➡️ **[Watch Demo Video on YouTube/Loom/Vimeo](https://www.example.com/your-video-link)** ⬅️

*Or embed a GIF:*

![Project Demo GIF](https://example.com/link/to/your/demo.gif)

*(Note: Replace the link or embedded GIF above with your actual demonstration.)*

---

## Project Overview

The primary objective of this project was to build a visually appealing and user-friendly landing page for a specific product (MagSafe Wallet Pro). Key requirements included:

1.  **Modern UI/UX:** Creating a clean, intuitive interface with consistent styling, typography, and spacing, inspired by the reference link.
2.  **Responsiveness:** Ensuring the layout adapts seamlessly to various devices (desktops, tablets, mobiles).
3.  **Advanced Scroll Animations:** Implementing sophisticated animations using GSAP and ScrollTrigger to enhance user engagement and showcase the product dynamically. This goes beyond basic fade/slide effects to include parallax and scrub-linked animations.
4.  **Interactivity:** Adding elements like a sticky navigation bar that hides/shows on scroll and a functional mobile menu.

---

## Key Features

*   **Responsive Design:** Fully adaptable layout using CSS Flexbox, Grid, and Media Queries.
*   **Hero Section:** Engaging introduction with:
    *   **Animated Text Reveal:** Headline lines slide up sequentially.
    *   **Image Scale-In:** Product image subtly scales and fades into view.
    *   **Subtle Parallax:** Hero image moves slightly on scroll for depth.
*   **Feature Section:** Highlights key product benefits with icons and text, animated with a staggered fade-in effect.
*   **Showcase Section:** Displays product images with a **parallax effect** (images move vertically at a different rate than the scroll).
*   **Detailed Feature Sections:** Alternating image/text layout with **slide-in animations** triggered as they enter the viewport.
*   **Call to Action (CTA):** Clear and prominent section encouraging user action, with a fade-in effect.
*   **Sticky Navigation Bar:** Remains fixed at the top, hides intelligently on scroll down, and reappears on scroll up for better screen real estate.
*   **Mobile Navigation:** Includes a functional hamburger menu toggle for smaller screens.
*   **Smooth Scrolling:** Internal page links (`#hash`) navigate smoothly to the corresponding section.
*   **GSAP ScrollTrigger Integration:** Manages all scroll-based animations, providing fine-grained control over triggers, scrubbing, and timing.

---

## Technologies & Libraries Used

*   **HTML5:** Semantic structure for the content.
*   **CSS3:** Custom styling, layout (Flexbox, Grid), media queries, and base animation states.
*   **JavaScript (ES6+):** DOM manipulation, event handling, and orchestration of animations.
*   **GSAP (GreenSock Animation Platform):** Core library for high-performance JavaScript animations.
    *   [GSAP Website](https://greensock.com/gsap/)
*   **ScrollTrigger (GSAP Plugin):** Plugin for creating scroll-based animations easily and powerfully.
    *   [ScrollTrigger Documentation](https://greensock.com/scrolltrigger/)
*   **Google Fonts:** Used for typography (Poppins).

*(Libraries are loaded via CDN, no build step required).*

---

## Folder Structure
MagSafe-Wallet-Pro/
├── images/
├── index.html # Main HTML file (Page Structure)
├── style.css # CSS file (Styling, Layout, Base Animation States)
├── script.js # JavaScript file (GSAP Animations, Interactivity, Mobile Menu)
└── README.md # This file (Project Documentation)

*(Note: This version uses image URLs directly from the internet as requested, so there is no local `images/` folder).*

---

## Setup & Usage

No complex setup or build process is needed as the project uses standard web technologies and loads libraries via CDNs.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ankitca07/MagSafe-Wallet-Pro.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd MagSafe-Wallet-Pro
    ```
3.  **Open `index.html` in your web browser:**
    *   Simply double-click the `index.html` file, or
    *   Use a local development server (like VS Code's Live Server extension) for the best experience.

---

## Code Explanation

### Animation Strategy

*   **GSAP Timelines & Tweens:** GSAP's `gsap.from()` and `gsap.to()` methods are used to define animations (tweens). For more complex sequences (though not heavily used here), `gsap.timeline()` could be employed.
*   **ScrollTrigger:** This plugin is the core of the scroll-based effects.
    *   **Trigger Element:** Each animation is linked to a specific HTML element (`trigger`).
    *   **Start/End Points:** `start` and `end` properties define when the animation should begin and end relative to the trigger element and the viewport (e.g., `"top 80%"` means start when the top of the trigger hits 80% down from the top of the viewport).
    *   **`toggleActions`:** Controls playback behavior (e.g., `play none none none` plays the animation once when entering the viewport).
    *   **`scrub`:** Links the animation's progress directly to the scroll position, creating smooth parallax and scrubbing effects (used for image parallax).
    *   **`stagger`:** Used in functions like `fadeInUp` to apply a small delay between animations on multiple selected elements (e.g., feature items).
*   **CSS Base States:** CSS is used to set the initial state of elements before animation (e.g., `opacity: 0`, `transform: translateY(50px)`). GSAP then animates *from* or *to* these states.
*   **Performance:** `will-change` CSS property is used sparingly as a hint to the browser for elements undergoing transform/opacity changes. GSAP itself is highly optimized.

### Responsiveness

*   **CSS Media Queries:** `style.css` uses `@media` rules to adjust layout, font sizes, spacing, and sometimes animation parameters for different screen sizes (e.g., stacking elements, changing grid columns).
*   **GSAP's `matchMedia()` (Optional):** For more complex scenarios, GSAP's `ScrollTrigger.matchMedia()` could be used to create entirely different animations or disable specific ones for certain screen sizes directly within JavaScript (not implemented in this version but a powerful feature).
*   **Testing:** Manual testing was performed using browser developer tools to simulate various device widths.

---

## Potential Improvements

*   **Accessibility (A11y):** Perform a full accessibility audit. Add necessary ARIA attributes, ensure proper focus management, and check color contrast ratios. Add `prefers-reduced-motion` media query to disable or reduce animations for users who prefer it.
*   **Performance Optimization:** Optimize image loading (e.g., using WebP format, lazy loading if images were hosted locally). Minify CSS and JS for production.
*   **More Interactivity:** Add subtle hover effects on more elements, perhaps interactive product feature highlights.
*   **Form Integration:** Add a functional contact or order form (would require backend or serverless function).
*   **Cross-Browser Testing:** Test thoroughly on a wider range of browsers and versions.
*   **Refactor JS:** For larger projects, organize JavaScript into modules.

---

## License

This project is open-source. Feel free to use the code as a learning resource. If no specific license is chosen, standard copyright laws apply.

*(Optional: Choose a specific license like MIT if desired)*

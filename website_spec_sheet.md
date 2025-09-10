# Simple Website Spec Sheet

## Project Definition
Please fill out these fields to define your project:

**Project Name:** _____________________
**Client/Artist Name:** _____________________
**Target Audience:** _____________________
**Primary Purpose:** _____________________
**Style Description:** _____________________
**Color Palette Theme:** _____________________
**Typography Style:** _____________________
**Key Features Needed:** _____________________
**Content Focus:** _____________________
**Multilingual?:** _____________________
**Special Requirements:** _____________________
**Accessibility Needs:** _____________________
**Mobile Priority?:** _____________________
**Visual References:** _____________________

This specification document outlines the structure and components needed for creating a simple website. Use this spec sheet as a reference to set up the complete project structure.

## Project Overview
A minimalist, elegant website with:
- Clean typography
- Responsive design
- Event/tour dates section
- Social media integration
- Mobile-friendly interface

## Folder Structure

```
/
├── index.html
├── style.css
├── .gitignore
├── assets/ 
│   ├── images/ 
│   │   ├── l/ 
│   │   │   ├── jpg/ 
│   │   │   └── webp/ 
│   │   ├── m/ 
│   │   │   ├── jpg/
│   │   │   └── webp/
│   │   ├── s/ 
│   │   │   ├── jpg/
│   │   │   └── webp/
│   │   ├── xl/ 
│   │   │   ├── jpg/
│   │   │   └── webp/
│   │   └── logos/ 
│   ├── meta-images/ 
│   │   └── favicon/ 
│   │       ├── android-chrome-512x512.png
│   │       ├── apple-touch-icon.png
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── favicon.ico
│   │       ├── logo-source-1080x1080.png
│   │       ├── mstile-150x150.png
│   │       └── site.webmanifest
│   └── videos/ 
├── css/
│   ├── _main.css
│   ├── architecture.css
│   ├── backgroundImage.css
│   ├── dates.css
│   ├── fonts.css
│   ├── mediaqueries.css
│   ├── posoroko.css
│   ├── reset.css
│   ├── slideShow.css
│   └── variables.css
├── js/
│   ├── appState.js
│   ├── config.js
│   ├── domReferences.js
│   ├── main.js
│   └── utils.js
├── pages/
│   └── mentions-legales.html
└── sources/
    └── originals/
    └── project specifications.md
```

## HTML Structure

### list of metat tags


## CSS Files

### _main.css
```css
@import url('./fonts.css');
@import url('./variables.css');
@import url('./reset.css');
@import url('./architecture.css');
@import url('./posoroko.css');
@import url('./mediaqueries.css');

```

### variables.css
```css
/* Color variables for site */
:root {
  /* Colors */
  --text-color-light: ;
  --text-color-dark: ;
  --bg-color-primary: ;
  --bg-color-secondary: ;
  --accent-color-1: ;
  --accent-color-2: ;
  --link-color: ;
  --link-hover-color: ;
  --header-color: ;
  --footer-color: ;
  --error-color: ;
  --success-color: ;
  --border-color: ;
  --shadow-color: ;
  
  /* Typography */
  --font-primary: ;
  --font-secondary: ;
  --font-size-base: ;
  --font-weight-normal: ;
  --font-weight-bold: ;
  --line-height-base: ;
  
  /* Spacing */
  --spacing-xs: ;
  --spacing-sm: ;
  --spacing-md: ;
  --spacing-lg: ;
  --spacing-xl: ;
  
  /* Borders */
  --border-radius-sm: ;
  --border-radius-md: ;
  --border-radius-lg: ;
  --border-width-default: ;
  
  /* Breakpoints */
  --breakpoint-xs: 480px;
  --breakpoint-sm: 768px;
  --breakpoint-md: 992px;
  --breakpoint-lg: 1200px;
  --breakpoint-xl: 1400px;
  
  /* Z-index */
  --z-index-dropdown: 1000;
  --z-index-sticky: 1020;
  --z-index-fixed: 1030;
  --z-index-modal-backdrop: 1040;
  --z-index-modal: 1050;
  --z-index-popover: 1060;
  --z-index-tooltip: 1070;
}
```

### mediaqueries.css
```css
/* Media Queries */

/* XS devices (phones, 480px and down) */
@media only screen and (max-width: var(--breakpoint-xs)) {
  /* XS device styles */
}

/* Small devices (portrait tablets and large phones, 768px and down) */
@media only screen and (max-width: var(--breakpoint-sm)) {
  /* Small device styles */
}

/* Medium devices (landscape tablets, 992px and down) */
@media only screen and (max-width: var(--breakpoint-md)) {
  /* Medium device styles */
}

/* Large devices (laptops/desktops, 1200px and down) */
@media only screen and (max-width: var(--breakpoint-lg)) {
  /* Large device styles */
}

/* Extra large devices (large laptops and desktops, 1400px and down) */
@media only screen and (max-width: var(--breakpoint-xl)) {
  /* Extra large device styles */
}

/* Media queries for minimum widths */
@media only screen and (min-width: var(--breakpoint-xs)) {
  /* Styles for devices wider than XS breakpoint */
}

@media only screen and (min-width: var(--breakpoint-sm)) {
  /* Styles for devices wider than SM breakpoint */
}

@media only screen and (min-width: var(--breakpoint-md)) {
  /* Styles for devices wider than MD breakpoint */
}

@media only screen and (min-width: var(--breakpoint-lg)) {
  /* Styles for devices wider than LG breakpoint */
}

/* Print styles */
@media print {
  /* Print-specific styles */
  body {
    print-color-adjust: exact;
  }
  
  .no-print {
    display: none !important;
  }
}

/* Prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

### reset.css
```css
/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    background: none;
    overflow: hidden;
}

img {
    display: block;
    max-width: 100%;
    height: auto;
}

ul, ol {
    list-style: none;
}

button, input, select, textarea {
    font: inherit;
    color: inherit;
    background: none;
    border: none;
    outline: none;
}

a {
    color: inherit;
    text-decoration: none;
}

html {
    scroll-behavior: smooth;
}


:focus {
    outline: none;
}

CREATE HERE: make scroll bars small for all browsers
```

### architecture.css
```css



```

### posoroko.css (utility classes)
```css
.full {width: 100%; height: 100%;}
.w100 {width: 100%;}
.h100 {height: 100%;}
.w40 {width: 40%;}
.w50 {width: 50%;}
.h50 {height: 50%;}
.h100vh {height: 100vh;}
.fullViewPort { width: 100vw; height: 100vh; }

.block {display: block;}
.inline {display: inline;}
.inlineBlock {display: inline-block;}
.inlineFlex {display: inline-flex;}

.flex {display: flex;}
.column {flex-direction: column;}
.row {flex-direction: row;}
.rowReverse {flex-direction: row-reverse;}
.wrap {flex-wrap: wrap;}
.nowrap {flex-wrap: nowrap;}
.wrapReverse {flex-wrap: wrap-reverse;}

.justifyCenter {justify-content: center;}
.justifyStart {justify-content: flex-start;}
.justifyEnd {justify-content: flex-end;}
.justifyBetween {justify-content: space-between;}
.justifyAround {justify-content: space-around;}
.justifyEvenly {justify-content: space-evenly;}

.alignCenter {align-items: center;}
.alignStart {align-items: flex-start;}
.alignEnd {align-items: flex-end;}
.alignStretch {align-items: stretch;}
.alignEvenly {align-items: space-evenly;}
.alignBetween {align-items: space-between;}
.alignAround {align-items: space-around;}

.marLeftAuto {margin-left: auto;}
.marRightAuto {margin-right: auto;}

.shrink {flex-shrink: 1;}
.shrink0 {flex-shrink: 0;}

.grow {flex-grow: 1;}
.grow1 {flex-grow: 1;}
.grow2 {flex-grow: 2;}
.grow3 {flex-grow: 3;}
.grow4 {flex-grow: 4;}

.gap5 {gap: 5px;}
.gap10 {gap: 10px;}
.gap15 {gap: 15px;}
.gap20 {gap: 20px;}
.gap25 {gap: 25px;}
.gap30 {gap: 30px;}
.gap50 {gap: 50px;}

.centered {display: grid;place-items: center;}

.relative {position: relative;}
.absolute {position: absolute;}
.fixed {position: fixed;}
.sticky {position: sticky;}

.top0 {top: 0;}
.top20 {top: 20px;}
.top50 {top: 50%;}
.right0 {right: 0;}
.right20 {right: 20px;}
.right50 {right: 0; }
.left0 {left: 0;}
.left50 {left: 50%;}
.bottom0 {bottom: 0;}
.bottom50 {bottom: 0;}

.pointer {cursor: pointer;}
.noPointer {cursor: not-allowed;}
.noSelection {user-select: none;}

.relative {position: relative;}
.absolute {position: absolute;}
.absolutlyCentered {position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
.absoluteFull {position: absolute; top: 0; left: 0; right: 0; bottom: 0;}

.overflowHidden {overflow: hidden;}
.objectFitCover { width: 100%; height: 100%; object-fit: cover;}
.objectFitContained {width: 100%; height: 100%; object-fit: contain;}
.objectFitContain {width: 100%;height: 100%;object-fit: contain;}

.marTop5 {margin-top: min(5px, 0.5vw);}
.marTop10 {margin-top: min(10px, 1vw);}
.marTop20 {margin-top: min(20px, 3vw);}
.marTop50 { margin-top: min(50px, 4vw); }
.marTop100 { margin-top: min(100px, 6vw); }
.marTop150 { margin-top: min(150px, 8vw);}
.marTop200 { margin-top: min(200px, 10vw); }
.marTop250 { margin-top: min(250px, 12vw); }

.marBot5 {margin-bottom: min(5px, 0.5vw);}
.marBot10 {margin-bottom: min(10px, 1vw);}
.marBot20 {margin-bottom: min(20px,0.9vw);}
.marBot50 { margin-bottom: min(50px, 4vw); }
.marBot100 { margin-bottom: min(100px, 6vw); }
.marBot150 { margin-bottom: min(150px, 8vw);}
.marBot200 { margin-bottom: min(200px, 10vw); }
.marBot250 { margin-bottom: min(250px, 12vw); }

.pad5 { padding: 5px; }
.pad10 {padding: 10px;}
.pad15 {padding: 15px;}
.pad20 {padding: 20px;}

/* text and fonts */
.textAlignRight {text-align: right;}
.textAlignCenter {text-align: center;}

.italic {font-style: italic;}
.underline {text-decoration: underline;}
.uppercase {text-transform: uppercase;}
.lowercase {text-transform: lowercase;}
.capitalize {text-transform: capitalize;}

.ellipsis {white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}

.weight1 {font-weight: 100;}
.weight2 {font-weight: 200;}
.weight3 {font-weight: 300;}
.weight4 {font-weight: 400;}
.weight5 {font-weight: 500;}
.weight6 {font-weight: 600;}
.weight7 {font-weight: 700;}
.weight8 {font-weight: 800;}
.Weight9 {font-weight: 900;}

.fS10 { font-size: 10px; }
.fS12 { font-size: 12px; }
.fS14 { font-size: 14px; }
.fS16 { font-size: 16px; }
.fS18 { font-size: 18px; }
.fS20 { font-size: 20px; }
.fS22 { font-size: 22px; }
.fS24 { font-size: 24px; }
.fS26 { font-size: 26px; }
.fS28 { font-size: 28px; }
.fS30 { font-size: 30px; }
.fS32 { font-size: 32px; }
.fS34 { font-size: 34px; }

.pointer {cursor: pointer;}
.defaultCursor {cursor: default;}
.noPointer {cursor: not-allowed;}
.noSelection {user-select: none;}
.noEvents { pointer-events: none; }
.allEvents { pointer-events: all; }
.noEvents_kidsEvents { pointer-events: none; }
.noEvents_kidsEvents * { pointer-events: all; }

.isolate { isolation: isolate; }
.z_0000  { z-index: 0; }
.z_1000 { z-index: 1000; }
.z_2000 { z-index: 2000; }
.z_3000 { z-index: 3000; }
.z_4000 { z-index: 4000; }
.z_5000 { z-index: 5000; }

.noScroll { overflow: hidden; }

label.hiddenInput { position: relative; }
label.hiddenInput input {
    width: 1px;
    height: 1px;
    position: absolute;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
}
```

## JavaScript Structure

### main.js
```javascript
```


### utils.js
```javascript
export function checkBottomSectionVisibility() {
    // Function to check visibility of bottom section and apply relevant styles
    // Can be expanded based on specific requirements
}
```


## Additional Files

### .gitignore
```
# Ignore the sources folder
sources/
```

### site.webmanifest
```json
{
  "name": "[ARTIST NAME] - [PROJECT NAME]",
  "short_name": "[ARTIST NAME]",
  "description": "[ARTIST DESCRIPTION]",
  "icons": [
    {
      "src": "/assets/meta-images/favicon/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/assets/meta-images/favicon/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait",
  "theme_color": "#000000",
  "background_color": "#000000",
  "lang": "fr-FR",
  "dir": "ltr"
}
```

## Meta Tags Structure

For SEO and social sharing, include these meta tags in the head section:

```html
<!-- Basic Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="Content-Language" content="fr">
<meta name="language" content="French">

<!-- SEO Meta Tags -->
<meta name="description" content="[DESCRIPTION]">
<meta name="keywords" content="[KEYWORDS]">
<meta name="author" content="[AUTHOR]">
<meta name="robots" content="index, follow">
<meta name="geo.region" content="FR">
<meta name="geo.placename" content="[REGION]">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.[DOMAIN].com/">
<meta property="og:title" content="[TITLE]">
<meta property="og:description" content="[DESCRIPTION]">
<meta property="og:image" content="https://www.[DOMAIN].com/assets/meta-images/og-image.jpg">
<meta property="og:locale" content="fr_FR">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.[DOMAIN].com/">
<meta property="twitter:title" content="[TITLE]">
<meta property="twitter:description" content="[DESCRIPTION]">
<meta property="twitter:image" content="https://www.[DOMAIN].com/assets/meta-images/twitter-card.jpg">

<!-- Canonical Link -->
<link rel="canonical" href="https://www.[DOMAIN].com/">

<!-- Favicon Links -->
<link rel="apple-touch-icon" sizes="180x180" href="./assets/meta-images/favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="./assets/meta-images/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="./assets/meta-images/favicon/favicon-16x16.png">
<link rel="manifest" href="./assets/meta-images/favicon/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
```

## Project Implementation Instructions

1. Create the folder structure as outlined above
2. Set up the HTML files with the provided templates
3. Create all CSS files with the provided styles
4. Implement the JavaScript functionality
5. Add placeholder images and assets as needed
6. Test responsiveness across different device sizes
7. Verify that the agenda/dates section populates correctly
8. Ensure smooth scrolling works as expected
9. Validate HTML and check for any CSS/JS errors

## Customization Points

- Color scheme in variables.css
- Font selections in fonts.css
- Event dates in config.js
- Social media links in index.html
- Images and media assets
- Site copy and text content

---

This spec sheet provides a comprehensive guide for setting up a simple artist website with a clean, modern design. Adjust as needed for specific project requirements.

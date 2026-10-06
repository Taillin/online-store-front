# IAIDEvelopment — Online Gadget & Hardware Store (Kazakhstan)

**Course:** Front-End Web Development (Midterm Project)  
**Project Topic:** Multi-page responsive online gadget and computer hardware store.

---

## 1. Project and Student Information

- **Project Title:** IAIDevelopment
- **Topic:** Online Shop: clothes, gadgets, cosmetics
- **Group Member Names:** Yermakov Ilya, Khametov Ilyas, Askar Azamat
- **Published Website Link:** https://taillin.github.io/final-project-front/
---

## 2. Short Description of the Project

IAIDev is a multi-page responsive web store developed from scratch using semantic HTML5, custom CSS3, and the Bootstrap 5 grid system.

The project is designed for students, software developers, and tech enthusiasts in Kazakhstan. Both the product catalog and comparison table feature real-world hardware models:
- Laptops: ASUS Vivobook S14, ASUS Zenbook 14 OLED
- Graphics Card: NVIDIA GeForce RTX 4060 8GB
- Processor: AMD Ryzen 5 5600
- Cooling: Deepcool AK400
- RAM: Kingston Fury Beast DDR4 16GB
- Storage & Power: Kingston KC3000 1TB NVMe, Deepcool PK650D 650W

---

## 3. Features Implemented

### Multi-page Structure (5 Connected Pages):
1. **`index.html` (Home Page):** Features a hero section, popular featured gadgets, store advantages, and footer navigation.
2. **`catalog.html` (Catalog):** Displays all real hardware devices using CSS Grid, category filter buttons, and navigation links to the comparison table.
3. **`compare.html` (Comparison):** Contains an HTML specification table comparing 4 devices, formatted with alternating row background colors.
4. **`about.html` (About Us):** Presents project background, key numbers/statistics, development stack, and quality standards for the Kazakhstan market.
5. **`contact.html` (Contact Us):** An interactive feedback form with inputs, select dropdowns, text area, and regional branch addresses.

### Core Technical Requirements:
- **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements across all pages.
- **Single External Stylesheet:** All styles are defined in `css/style.css` without inline or internal styling.
- **CSS Variables (`:root`):** Configured with a custom Burgundy palette (`--color-primary: #6b1d2f`), gold accent (`--color-accent: #c59b27`), light cream background (`--color-bg-light: #fbf9f6`), and typography variables.
- **Flexbox and CSS Grid Demonstration:**
  - Header navigation menu uses **Flexbox** (`display: flex; justify-content: space-between`).
  - Catalog product layout uses **CSS Grid** (`display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`).
- **Positioning Technique:** Product badges ("HIT" and "SALE") use `position: absolute` placed inside a parent card with `position: relative`.
- **Interactive Pseudo-classes (`:hover` and `:focus`):**
  - Buttons and cards have smooth hover transformations and shadow elevations.
  - Form input elements highlight with a subtle burgundy border and shadow on `:focus`.
- **Alternating Table Rows:** The `:nth-child(even)` pseudo-class provides a zebra-stripe effect on the comparison table in `compare.html`.
- **Image Optimization:** All below-the-fold product photos include the `loading="lazy"` attribute.
- **Responsive Web Design:**
  - Standard Bootstrap 12-column grid (`container`, `row`, `col-*`).
  - Two custom `@media` query breakpoints (768px for tablets and 576px for mobile phones) to adjust header alignment, typography sizing, and card layout.

---

## 4. Technologies Used

- **HTML5:** Semantic elements, forms, tables, links, lists.
- **CSS3:** Custom properties (`:root`), Flexbox, CSS Grid, absolute/relative positioning, pseudo-classes, media queries.
- **Bootstrap 5.3 (CSS):** Grid containers, rows, responsive columns, and spacing utility classes.
- **Git & GitHub:** Version control and hosting via GitHub Pages.

---

## 5. Individual Contribution of Each Group Member
- **Member 1 (Yermakov Ilya):** HTML structure for `index.html` and `catalog.html`. layout styling with CSS Grid, and `:root` variables in `css/style.css`.
- **Member 2 (Khametov Ilyas):** HTML structure for `compare.html`, `contact.html`, and `about.html`.
- **Member 3 (Azamat Askar):** Table styling with `:nth-child(even)`, form focus styling, and responsive media queries. Layout styling with CSS Grid, and `:root` variables in `css/style.css`

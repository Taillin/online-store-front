# IAIDEvelopment — Online Gadget & Hardware Store

**Course:** Front-End Web Development — Endterm Project
**Topic:** A responsive gadget and computer hardware store for Kazakhstan.

## Description

This endterm extends the existing midterm website with JavaScript and jQuery. The original five pages, burgundy design, CSS Grid catalog, Bootstrap grid and responsive styles are preserved.

## Pages and features

- `index.html`: home page, featured products and store advantages.
- `catalog.html`: instant case-insensitive search by product text, category buttons working together with search, result count and empty state.
- `compare.html`: original specification comparison plus a personal product list with full CRUD. Add products, edit or cancel changes, and confirm deletion. Rows are rendered from an array and saved in localStorage.
- `contact.html`: original feedback form with required-field and email validation, plus a registration form. Registration checks name, email with RegEx, password length and confirmation. The weak / medium / strong indicator updates while typing. Bootstrap validation classes and text show errors and success.
- `about.html`: Bootstrap image gallery with an enlarged modal view, previous/next buttons, arrow keys, Escape to close, and jQuery fadeOut/fadeIn transitions.

All JavaScript is in `js/script.js`. The project uses simple functions, loops and jQuery selectors, without a build system or code comments.

The project is designed for students, common people, designers and so on. The product have catalog and comparison table feature real-world hardware models:
- Laptops: ASUS Vivobook S14, ASUS Zenbook 14 OLED
- Graphics Card: NVIDIA GeForce RTX 4060 8GB
- Processor: AMD Ryzen 5 5600
- Cooling: Deepcool AK400
- RAM: Kingston Fury Beast DDR4 16GB
- Storage & Power: Kingston KC3000 1TB NVMe, Deepcool PK650D 650W

## Technologies

HTML5, CSS3, Bootstrap 5.3.3, JavaScript, jQuery 3.7.1, localStorage, Git and GitHub.

## Layout and responsiveness

### Multi-page Structure (5 Connected Pages):
1. **`index.html` (Home Page):** Features a hero section, popular featured gadgets, store, and footer navigation.
2. **`catalog.html` (Catalog):** Displays all real hardware devices using CSS Grid, category filter buttons, and navigation links to the comparison table.
3. **`compare.html` (Comparison):** Contains an HTML specification table comparing 4 devices.
4. **`about.html` (About Us):** Presents project background, development stack and quality standards for the Kazakhstan market.
5. **`contact.html` (Contact Us):** An interactive feedback form with inputs, text area and regional branch addresses.

### Core Technical Requirements:
- **Semantic HTML5:** Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements across all pages.
- **Single External Stylesheet:** All styles are defined in `css/style.css` without inline or internal styling.
- **CSS Variables (`:root`):** Configured with a custom color (`--color-primary: #6b1d2f`), gold accent (`--color-accent: #c59b27`), light cream background (`--color-bg-light: #fbf9f6`), and typography variables.
- **Flexbox and CSS Grid Demonstration:**
  - Header navigation menu uses **Flexbox** (`display: flex; justify-content: space-between`).
  - Catalog product layout uses **CSS Grid** (`display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`).
- **Positioning Technique:** Product badges ("HIT" and "SALE") use `position: absolute` placed inside a parent card with `position: relative`.
- **Interactive Pseudo-classes (`:hover` and `:focus`):**
  - Buttons and cards have smooth hover transformations and shadow elevations.
  - Form input elements highlight with a subtle border and shadow on `:focus`.
- **Alternating Table Rows:** The `:nth-child(even)` pseudo-class provides a zebra-stripe effect on the comparison table in `compare.html`.
- **Image Optimization:** All below-the-fold product photos include the `loading="lazy"` attribute.
- **Responsive Web Design:**
  - Standard Bootstrap 12-column grid (`container`, `row`, `col-*`).
  - Two custom `@media` query breakpoints (768px for tablets and 576px for mobile phones) to adjust header alignment, typography sizing, and card layout.

## Run locally

Open `index.html` in a browser. Internet access is needed for the jQuery and Bootstrap CDNs, Google Fonts and the existing Unsplash images.

For consistent localStorage behavior, serve the project with a local HTTP server such as VS Code Live Server. No installation or build step is required for the website.

## Try the features

1. Open Catalog, type `asus`, then choose Laptops or Processors. Search and category are applied together. Choose All and clear the query to restore all products.
2. Open Contacts and submit empty forms. Try an invalid email and different passwords. Passwords need at least 8 characters without whitespace; medium adds letters and numbers, and strong needs at least 12 characters, lowercase and uppercase letters, a number and a symbol.
3. Open Comparison, add a product, edit it, cancel an edit, and delete it with confirmation. Reload to check that the list is saved.
4. Open About, select a gallery image, use the navigation buttons or arrow keys, and close with Escape.

The forms demonstrate client-side validation only: they do not create accounts or send messages. Passwords are not stored. The personal product list is separate from the static catalog and comparison specifications. If browser storage is unavailable, changes remain in memory until reload.

## Group members and contributions

| Member | Midterm contribution | Endterm contribution |
| --- | --- | --- |
| Yermakov Ilya | Home and catalog HTML, catalog grid and CSS variables | [Add completed tasks] |
| Khametov Ilyas | Comparison, contacts and about pages | [Add completed tasks] |
| Askar Azamat | Table and form styling, grid and responsive media queries | [Add completed tasks] |
| [Additional member, if applicable] | [Contribution] | [Add completed tasks] |

## Deployment

**Published Endterm website:** [INSERT DEPLOYMENT URL]

Update the existing repository and publish its root folder using GitHub Pages or Netlify. Replace the placeholder with the verified published URL before submission.

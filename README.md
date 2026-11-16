# IAIDev - Final Project

A small electronics store website for Kazakhstan. The Final extends our Midterm and Endterm and keeps the same five pages, team and burgundy design.

- Website: https://taillin.github.io/online-store-front/
- Repository: https://github.com/Taillin/online-store-front
- Team: Yermakov Ilya, Khametov Ilyas, Askar Azamat.
- Technologies: HTML5, CSS3, Bootstrap 5.3.3, JavaScript, jQuery 3.7.1.

## Pages and features

| Page | Features |
| --- | --- |
| `index.html` | Home, featured products, navigation |
| `catalog.html` | Search, category filters, live DummyJSON product selection |
| `compare.html` | Specification table and personal list with add/edit/delete and localStorage |
| `about.html` | Project information, gallery, six animated FAQ answers, sources and AI credit |
| `contact.html` | Local sign-in, profile, registration validation, contact form |

## Final additions

- Light/dark theme on all pages, saved after reload and navigation.
- Validated sign-in with name/email, persistent profile and sign-out.
- FAQ using jQuery `.slideToggle()` and + / minus indicators.
- Real `fetch()` requests to `https://dummyjson.com/products/category/laptops?limit=6` and the `smartphones` category. Category selection, refresh, loading, empty and error states.
- Local copies of Bootstrap, jQuery and static photographs; responsive layout.

`js/script.js` keeps the Endterm features. `js/theme.js` restores the theme before rendering. `js/final.js` contains the four Final features in named, straightforward functions. Styles remain in `css/style.css`. No framework, build step or backend is required.

## Run and demonstrate

Run `python -m http.server 8000 --bind 127.0.0.1` in the project folder, then visit http://localhost:8000. VS Code Live Server also works. Use an HTTP server for consistent browser storage across pages. The live API needs internet access; static resources are local.

1. Switch theme, reload and open another page.
2. Select **Войти**, try an invalid email, then use `Demo Student` / `student@example.com`. Reload, navigate, then sign out.
3. Open **О нас** and expand/collapse FAQ questions.
4. Open **Каталог**, choose laptops/smartphones in the online selection and refresh. Block the API in DevTools to demonstrate the error; unblock it and retry.

## Team responsibilities

| Member | Endterm contribution from the original README | Final study and demonstration responsibility |
| --- | --- | --- |
| Yermakov Ilya | Home/catalog, search/filtering, image gallery | Public API, categories, JSON and request errors |
| Khametov Ilyas | Comparison/contact/about pages, registration validation | Sign-in validation, saved profile and sign-out |
| Askar Azamat | Styling, responsiveness, CRUD and localStorage | Theme persistence, FAQ animation and responsive checks |

The Final column distributes preparation and demonstration work; it does not claim that AI-assisted changes were independently written by those members. Every student should understand the full code before defense.

## Materials

- [Group report with screenshots](docs/REPORT.md) and [PDF report](docs/Final_Project_Report.pdf).
- [Russian defense guide](DEFENSE_RU.md): three-minute demo, questions and file map.
- [Requirement/check list](docs/CHECKLIST.md).
- [Resource sources and library licenses](ASSETS.md).

This is a classroom demonstration: sign-in is not secure authentication, passwords are not stored, and forms do not send messages or process purchases. Name/email, theme and the comparison list are saved in this browser. DummyJSON products and USD prices are sample data, separate from the example KZT catalog.

## AI acknowledgement

OpenAI ChatGPT / Codex assisted with the Final implementation, debugging, browser checks and preparation of the report and defense guide. This assistance is acknowledged on every page and in the report. The team must review the changes and be able to explain them.

Submission deadline supplied by the team: **18 November 2026** (exact time is in LMS). Each member must submit both links individually. All submission commits must precede the LMS cutoff.

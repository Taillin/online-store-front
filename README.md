# IAIDev

A student website for browsing and comparing laptops and PC parts.
Built with HTML, CSS, Bootstrap, JavaScript and jQuery.

[Live website](https://taillin.github.io/online-store-front/) | [GitHub](https://github.com/Taillin/online-store-front)

## Team

Yermakov Ilya, Khametov Ilyas and Askar Azamat.

## Features

- Five pages: Home, Catalog, Compare, About and Contact.
- Product search, category filters and a saved product list.
- Light and dark themes, saved in localStorage.
- Demo sign-in with name and email, plus sign-out.
- Form validation, a photo gallery and six FAQ questions.
- Products from the DummyJSON API, with categories and a refresh button.

The layout works on phones, tablets and computers. This is a demo: there are no real orders, payments or accounts. Passwords are not stored.

## Run locally

Open the project folder in a terminal:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Then open [localhost:8000](http://localhost:8000). The API needs internet access. Other files are included in the project.

## Credits

Bootstrap 5.3.3 and jQuery 3.7.1 are included in `vendor` with their licenses. Photos are from [Unsplash](https://unsplash.com); online products are from [DummyJSON](https://dummyjson.com/docs/products).

OpenAI ChatGPT / Codex helped with code, testing, translation and project materials.

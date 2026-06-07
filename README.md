# 🌾 Kazinga Agri — Website

A modern, mobile-first website for the **Kazinga Agri Entrepreneurship Initiative**, a VSLA in Gayaza-Kasangati, Wakiso District, Uganda. Built with clean HTML5, CSS3 and vanilla JavaScript — no frameworks, no build step, fast on 4G.

## ✨ Features

- **6 pages + 4 blog articles** — Home, About, Services, Shop, Blog, Contact
- **WhatsApp-first** — floating button + pre-filled message links on every page
- **Donation** — prominent gold "Donate" button everywhere (PesaPal / Airtel / MTN ready)
- **8 services** — beekeeping, poultry, mushrooms, BSF, coffee, urban farming, piggery, training
- **Shop** — e-books, courses and tiered memberships (Gumroad / WhatsApp checkout)
- **Blog** — searchable, filterable hub with full articles
- **Forms → WhatsApp** — contact & training forms hand off to WhatsApp with details pre-filled
- **Editable SVG placeholders** — open in Canva/Figma/Inkscape, edit, re-export
- **Responsive & fast** — mobile-first, lazy-loaded images, scroll-reveal animations, SEO meta tags
- **Google Map + Luganda support note** on the contact page

## 📁 Structure

```
.
├── index.html                 # Homepage
├── pages/                     # about · services · shop · contact
├── blog/                      # blog hub + article folders
├── assets/
│   ├── css/style.css          # Full design system (CSS variables)
│   ├── js/main.js             # Nav, reveal, blog filter, form handoff, central config
│   └── images/placeholders/   # Editable SVG illustrations
├── .nojekyll                  # Serve files as-is on GitHub Pages
└── BLUEPRINT.md               # Original plan
```

## ⚙️ Configure (do this first)

All contact details live in **one place** — edit the `KAZINGA` object at the top of `assets/js/main.js`:

```js
const KAZINGA = {
  whatsapp: '256700000000',        // ← your WhatsApp number (country code, no + or spaces)
  phoneDisplay: '+256 700 000 000',
  email: 'info@kazingaagri.ug',
  donateMsg: 'Hello Kazinga Agri! I would like to make a donation...',
};
```

> The phone/email shown in page text and footers is demo data (`+256 700 000 000`, `info@kazingaagri.ug`). Search & replace these when your real details are ready.

## 🖼️ Replacing images

Every image is an editable `.svg` in `assets/images/placeholders/`. To use your own photos:
1. Drop your photo (e.g. `hero.jpg`) into `assets/images/placeholders/`.
2. Update the matching `src="..."` in the HTML (or the `background` url for the hero in `style.css`).

## 🚀 Deploy to GitHub Pages (free)

1. Push this branch and merge to `main`.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Choose **`main` / `(root)`** and **Save**.
4. Live in ~1 minute at `https://<user>.github.io/kazinga-agri-landing-page/`.

**Custom domain (optional):** add a `CNAME` file containing your domain (e.g. `kazingaagri.ug`) and point a DNS CNAME record at your GitHub Pages URL.

## 🔌 Next integrations (optional)

- **Formspree** — for email form submissions (currently forms hand off to WhatsApp).
- **Gumroad** — embed product checkout instead of the WhatsApp "Buy/Order" links.
- **waCRM / Evolution Bot** — automate WhatsApp replies and Luganda support.

---
© Kazinga Agri Entrepreneurship Initiative

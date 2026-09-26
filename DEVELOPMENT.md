# CreativeWeb

> Transforming ideas into digital experiences.

CreativeWeb is a portfolio and services website for a freelance web studio. It shows the work (websites, mobile apps, ERP systems, branding) and introduces **YatuMobile**, the studio's payment gateway for businesses and developers.

**Live site:** https://creative-web.chellahtrey.workers.dev/

---

## What it does

- **Catalogue (home):** rotating headline, a rotating showcase of past work, and a full-width YatuMobile "did you know?" band.
- **Services:** templates you can open live, branding samples, a "Build it. Run it. Get paid." section, and what's included with each service.
- **Apps:** mobile apps and web projects, with store badges and status labels (Live, Coming Soon, In Development, Planned).
- **Contact:** contact form, quick links, and availability card.
- **Template detail:** a page per template with features, a live demo link, and a request button.
- **Light / dark mode:** a sun and moon switch in every header. The choice is saved and follows the visitor's device setting on first visit.

## Tech stack

| Area | Tool |
|---|---|
| UI | React |
| Routing | `react-router-dom` (hash routes, e.g. `#/services`) |
| Icons | `lucide-react`, plus Font Awesome on the Apps page |
| Font | Poppins (Google Fonts) |
| Styling | Inline styles plus a small `<style>` block per page, driven by CSS variables |
| Hosting | Cloudflare Workers |

## Pages and routes

| Route | File | Purpose |
|---|---|---|
| `/` | `Catalogue.jsx` | Home / catalogue |
| `/services` | `Services.jsx` | Services and templates |
| `/apps` | `Apps.jsx` | Apps and web projects |
| `/Contact-me` | `Contact.jsx` | Contact |
| template route (uses `:templateId`) | `TemplateDetail.jsx` | Single template page |

Template demos live at `#/testing`, `#/realtor`, `#/soccer`, `#/e-commerce`, `#/startup` and `#/portfolio`.

## Project structure

Based on how the files currently import each other:

```
src/
├── Catalogue.jsx
└── Components/
    ├── Services.jsx
    ├── Apps.jsx
    ├── Contact.jsx
    ├── TemplateDetail.jsx
    └── shared/
        ├── BottomTabBar.jsx   # fixed mobile-style tab bar on every page
        ├── ThemeToggle.jsx    # sun/moon switch + useTheme() hook
        ├── ThemeTokens.jsx    # the whole light/dark palette (single source of truth)
        └── YatuMobile.jsx     # YatuMobile band, strip and logo
public/                        # images, template previews, logos
```

## Design system: Aubergine & Champagne

The palette lives in **one place**: `Components/shared/ThemeTokens.jsx`. Every page renders `<ThemeTokens/>` at the top, which defines the colours as CSS variables and applies the saved theme.

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--primary` | `#4A1A5C` aubergine | `#D4A9E6` lilac | links, accents, active states |
| `--complement` | `#8F6B2E` gold | `#E0C088` champagne | secondary accent |
| `--accent` | `#B45F2B` copper | `#E39A6A` | highlights, "NEW" tags |
| `--bg` | `#FBF9F6` | `#0E0A13` | page background |
| `--surface` | `#FFFFFF` | `#181220` | cards |
| `--btn-grad` | aubergine to mulberry | mulberry to orchid | buttons |

### Rules to follow when editing

1. **Never hard-code a colour hex in a page.** Use `var(--primary)`, `var(--text)`, `var(--surface)` and so on, so both modes keep working.
2. **Gradient text** must use `backgroundImage: 'var(--text-grad)'` together with `WebkitBackgroundClip: 'text'`. Do not use the `background` shorthand: with a CSS variable it resets the clipping and the text turns into a solid block.
3. **White buttons on purple banners** keep fixed colours (`#fff` background, `#4A1A5C` text) so they stay readable in dark mode.
4. **Logo tiles stay light** in both modes, because the logo images are dark-on-light.
5. For a tinted colour from a variable, use the `mix(color, percent)` helper (CSS `color-mix`) instead of adding hex-alpha to a variable.

## YatuMobile

YatuMobile is hosted on its own site and is still in development. This site only promotes it and links out. Set these two constants at the top of `Components/shared/YatuMobile.jsx`:

```js
export const YATU_URL  = 'https://…';        // your live YatuMobile page
export const YATU_LOGO = '/yatumobile.png';  // logo filename inside /public
```

The checkout card in the band is a static preview, not a real integration. Update it if the supported payment methods change.

## Running locally

```bash
npm install
npm run dev     # scripts may differ, check package.json
```

---

## Things to change

### 1. Light-mode background is too white

**Problem:** in light mode the page reads as almost pure white. It should feel warmer, either **cream** or **light grey**.

**Where to change it:** the `:root` block in `Components/shared/ThemeTokens.jsx`.

- [x] Pick a direction: cream (for example `--bg: #F4EEE3`) or light grey (for example `--bg: #ECEAE7`).
- [x] Change `--bg`, `--surface-2` and `--nav-bg` **together**, so the header and page still match. `--nav-bg` is the same colour as `--bg` at about 90% opacity.
- [x] Make cards (`--surface`) one step lighter than the new page background, not pure `#FFFFFF`, or they will glare against it.
- [x] Re-check text contrast on the new background (`--muted` and `--faint` are the risky ones).
- [x] Confirm which gradient looked too white. If it is a soft fade behind the hero or the decorative polygons rather than the flat page colour, note where, and adjust it separately.

### 2. Mobile screen shifts / shakes sideways

**Problem:** on phones the page can be dragged or wobbles horizontally. It is not yet known whether the cause is `BottomTabBar`, `Catalogue.jsx` or `Services.jsx`. These are the suspects, roughly in order of likelihood:

- [ ] **Something is wider than the screen.** Find it by running this in the browser console on a phone-sized view, then check which elements it lists:
  ```js
  [...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > innerWidth)
  ```
- [ ] **No sideways-scroll guard on the page.** `Catalogue.jsx` hides overflow on `.page-wrap` only, and `Services.jsx` has no guard at all. Add `html, body { overflow-x: clip; }` to both pages, or to a global stylesheet.
- [ ] **Services header is too wide on small phones.** It holds the logo, three text links, the theme toggle and a button in one row. Hide the text links below about 600px, since `BottomTabBar` already handles navigation there.
- [ ] **Rotating headline word (Catalogue).** Words such as "Payment Gateways" can wrap onto a second line, which changes the hero height and pushes everything down. Reserve a fixed minimum height for the headline.
- [ ] **`BottomTabBar` is tight on narrow screens.** Five tabs at up to 72px each with 12px side padding fill a 360px screen exactly. Reduce the side padding to about 6px.
- [ ] **`100vh` on mobile browsers.** The address bar changes the viewport height as you scroll. Use `100dvh` for `.page-wrap` (`min-height`) in both pages.
- [ ] **Fixed decorative background.** `NeonPolygons` is a full-screen `position: fixed` layer, which can jitter on iOS Safari. Try adding `contain: paint` to it, or make it `position: absolute` inside the page wrapper.
- [ ] **Viewport tag.** Make sure `index.html` contains `<meta name="viewport" content="width=device-width, initial-scale=1">`.

Test on a real phone as well as browser dev tools, at widths of 360px, 390px and 430px.

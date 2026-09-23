# Changelog

All notable changes to CreativeWeb are recorded here, newest first.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions use [Semantic Versioning](https://semver.org/): **MAJOR** for a redesign or breaking change, **MINOR** for new features, **PATCH** for fixes.

**How to add an entry:** when you change something, add a line under `[Unreleased]` in the right group (Added, Changed, Fixed, Removed). When you publish, rename `[Unreleased]` to the new version and date, then start a fresh `[Unreleased]` above it.

---

## [Unreleased]

### To do
- Light mode: make the background cream or light grey instead of near-white (`--bg`, `--surface-2` and `--nav-bg` in `ThemeTokens.jsx`).
- Mobile: stop the screen shifting sideways. Suspects are the Services header width, the missing overflow guard, the rotating headline word, and `BottomTabBar` padding (see `DEVELOPMENT.md`).
- Set the real YatuMobile URL and logo filename in `Components/shared/YatuMobile.jsx`.
- Replace the placeholder feature lists for Mobile Apps and ERP with what is actually delivered.
- Finish the logo rebrand: review the draft, then export PNG favicon, app icon and one-colour versions.
- Add the YatuMobile link to the contact table in `README.md`.

---

## [1.1.0] - 2026-09-23

Rebrand: new colour identity, dark mode, and YatuMobile.

### Added
- **Dark mode** with a sun/moon toggle switch in the header of every page. The choice is saved and follows the device setting on the first visit.
- **YatuMobile** payment gateway promotion:
  - Full-width "Did you know? I also built a payment gateway" band on the Catalogue page.
  - Slim "NEW" pill under the Services heading.
  - "Build it. Run it. Get paid." section on Services, with an "I'm a business / I'm a developer" switch that reorders the page.
  - "Blockchain payments" roadmap card.
- Rotating hero headline on the Catalogue page: Digital Experiences, Mobile Apps, ERP Systems, Payment Gateways.
- **Mobile Apps** and **ERP & Business Systems** service cards on the Catalogue and Services pages.
- Shared components: `ThemeToggle.jsx`, `ThemeTokens.jsx` and `YatuMobile.jsx`.
- Draft logo (`assets/logo.svg`): a gold "C" flowing into an ivory "W" on aubergine, with the tagline "Websites · Apps · Payments".
- `README.md` (about the business), `CHANGELOG.md` and `DEVELOPMENT.md` (developer notes and the to-do list).

### Changed
- **New colour palette, "Aubergine & Champagne".** The bright violet and cyan are replaced by deep aubergine, champagne gold and copper. Buttons use a muted aubergine-to-mulberry gradient instead of the generic purple.
- Light mode uses a warm ivory background; dark mode uses a near-black plum.
- All palette colours now live in one file, `ThemeTokens.jsx`, and every page reads from it. Colours are no longer repeated per page.
- Theming applied to Catalogue, Services, Apps, Contact, Template Detail and the bottom tab bar.
- Apps page: Google Play button recoloured to the brand gradient, the Portfolio card pink softened to rose, and status pills now adapt to light and dark.
- Services header spacing tightened to fit the new toggle.

### Fixed
- Gradient text (header logo, "Digital Experiences", footer "CreativeWeb") showed as solid blocks. It now uses `backgroundImage` so the text clipping is preserved.
- The bottom tab bar stayed white in dark mode.
- The Contact form's sending spinner did not spin because its animation was never defined.

---

## [1.0.0] - Initial release

- Catalogue (home), Services, Apps, Contact and Template Detail pages.
- Live template previews, branding samples and project showcase.
- Bottom tab bar navigation, WhatsApp / email / LinkedIn contact options.
- Hosted on Cloudflare Workers.

> Earlier history before this changelog was started is not recorded.

[Unreleased]: #
[1.1.0]: #
[1.0.0]: #

import React, { useLayoutEffect } from 'react';
import { getInitialTheme } from './ThemeToggle.jsx';

/*
  Single source of truth for the CreativeWeb palette (Aubergine & Champagne).
  Render <ThemeTokens/> once at the top of every page. It also applies the
  saved theme on mount, so pages without a toggle still respect the choice.
*/
const CSS = `
:root {
  --primary:#4A1A5C; --primary-rgb:74,26,92; --secondary:#7A3B82;
  --complement:#8F6B2E; --accent:#B45F2B;
  --primary-tint:rgba(74,26,92,.07); --complement-tint:rgba(143,107,46,.1); --accent-tint:rgba(180,95,43,.09);
  --bg:#FBF9F6; --surface:#FFFFFF; --surface-2:#F3EFEA; --logo-bg:#F6F1F8; --input-bg:#FAF7FB;
  --text:#1E1526; --muted:#6B6472; --faint:#7E7786;
  --success:#0F7A55; --err:#DC2626;
  --nav-bg:rgba(251,249,246,.9); --cta-bg:#1E1226; --badge-bg:#1E1226; --disabled-bg:#E7E2EC;
  --btn-grad:linear-gradient(135deg,#3E1450,#6B2F76);
  --text-grad:linear-gradient(135deg,#4A1A5C,#9A7B45);
  --cta-grad:linear-gradient(135deg,#3E1450,#6B2F76 55%,#9A7B45);
  --banner-grad:linear-gradient(135deg,#1E1226,#2E1B3A);
  --toggle-track:rgba(74,26,92,.07); --toggle-border:rgba(74,26,92,.18);
  color-scheme:light;
}
:root[data-theme="dark"] {
  --primary:#D4A9E6; --primary-rgb:212,169,230; --secondary:#B57CC4;
  --complement:#E0C088; --accent:#E39A6A;
  --primary-tint:rgba(212,169,230,.1); --complement-tint:rgba(224,192,136,.1); --accent-tint:rgba(227,154,106,.1);
  --bg:#0E0A13; --surface:#181220; --surface-2:#1A1423; --logo-bg:#F1ECF5; --input-bg:#120D18;
  --text:#F3EEF7; --muted:#B0A5BA; --faint:#857A90;
  --success:#6EE7B7; --err:#F87171;
  --nav-bg:rgba(14,10,19,.85); --cta-bg:#1A1223; --badge-bg:#2A2233; --disabled-bg:#2A2233;
  --btn-grad:linear-gradient(135deg,#6E3580,#94508F);
  --text-grad:linear-gradient(135deg,#D4A9E6,#E0C088);
  --cta-grad:linear-gradient(135deg,#4A1F5C,#6E3580 55%,#8F6B2E);
  --banner-grad:linear-gradient(135deg,#1A1223,#241A2E);
  --toggle-track:rgba(212,169,230,.1); --toggle-border:rgba(212,169,230,.25);
  color-scheme:dark;
}
body { background:var(--bg); color:var(--text); transition:background .3s, color .3s; }
::placeholder { color:var(--faint); opacity:1; }
`;

export default function ThemeTokens() {
  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', getInitialTheme());
  }, []);
  return <style>{CSS}</style>;
}

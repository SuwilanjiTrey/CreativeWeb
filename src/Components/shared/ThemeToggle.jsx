import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'cw-theme';

export function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (_) { /* storage blocked – fall through */ }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/* Shared hook – use it anywhere you need to know / change the theme */
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  return { theme, isDark: theme === 'dark', toggle };
}

/* Sun ⇄ Moon switch */
export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  const W = 58, H = 30, K = 24, PAD = 3;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggle}
      style={{
        position: 'relative', width: W, height: H, borderRadius: 99, padding: 0,
        border: '1px solid var(--toggle-border)', background: 'var(--toggle-track)',
        cursor: 'pointer', flexShrink: 0, transition: 'background .3s, border-color .3s',
      }}
    >
      {/* resting icons in the track */}
      <Sun  size={13} color="var(--muted)" style={{ position: 'absolute', left: 9,  top: 8, opacity: .55 }} />
      <Moon size={13} color="var(--muted)" style={{ position: 'absolute', right: 9, top: 8, opacity: .55 }} />

      {/* sliding knob – shows the icon for the current mode */}
      <span
        style={{
          position: 'absolute', top: PAD, left: isDark ? W - K - PAD - 2 : PAD,
          width: K, height: K, borderRadius: '50%',
          background: 'var(--btn-grad)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(var(--primary-rgb),.35)',
          transition: 'left .3s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {isDark ? <Moon size={13} strokeWidth={2.2} /> : <Sun size={13} strokeWidth={2.2} />}
      </span>
    </button>
  );
}

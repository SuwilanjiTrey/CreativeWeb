import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Layers, Mail, User, Smartphone } from 'lucide-react';

const tabs = [
  { label: 'Home',     icon: Home,        path: '/'           },
  { label: 'Services', icon: Layers,      path: '/services'   },
  { label: 'Apps',     icon: Smartphone,  path: '/apps'       },
  { label: 'Contact',  icon: Mail,        path: '/Contact-me' },
  { label: 'About',    icon: User,        path: null, href: 'https://suwilanjitreychellah.vercel.app/' },
];

const BottomTabBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Main navigation"
      style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(109,40,217,0.1)',
        boxShadow: '0 -4px 30px rgba(109,40,217,0.07)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '8px 0 max(8px, env(safe-area-inset-bottom))',
      }}
    >
      {tabs.map(({ label, icon: Icon, path, href }) => {
        const active = path && pathname === path;
        const handleClick = () => {
          if (href) { window.open(href, '_blank', 'noopener noreferrer'); return; }
          navigate(path);
        };
        return (
          <button
            key={label}
            onClick={handleClick}
            aria-label={label}
            aria-current={active ? 'page' : undefined}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: 3, border: 'none', background: 'none', cursor: 'pointer',
              padding: '4px 12px', borderRadius: 12,
              transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
              flex: 1, maxWidth: 72,
            }}
          >
            <span style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 34, height: 34, borderRadius: 10,
              background: active ? 'rgba(109,40,217,0.12)' : 'transparent',
              transition: 'background 0.2s',
            }}>
              <Icon
                size={19}
                strokeWidth={active ? 2.5 : 1.8}
                color={active ? '#6D28D9' : '#9CA3AF'}
              />
            </span>
            <span style={{
              fontSize: 10, fontWeight: active ? 700 : 500,
              letterSpacing: '0.02em',
              color: active ? '#6D28D9' : '#9CA3AF',
              whiteSpace: 'nowrap',
            }}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomTabBar;

import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle } from 'lucide-react';

/* ═════════ SET THESE TWO ═════════ */
export const YATU_URL  = 'https://yatumobile.example.com'; // ← your live YatuMobile page
export const YATU_LOGO = '/yatumobile.png';                // ← logo filename inside /public
/* ═════════════════════════════════ */

/* Logo, with a text fallback if the image path is wrong */
export function YatuLogo({ height = 70 }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span style={{ fontWeight:800, fontSize:height * .6, color:'#4A1A5C', letterSpacing:'-.02em' }}>YatuMobile</span>;
  }
  return <img src={YATU_LOGO} alt="YatuMobile" onError={() => setFailed(true)}
    style={{ height, width:'auto', display:'block'}}/>;
}

/* Slim "did you know?" pill – for under headings */
export function YatuStrip() {
  return (
    <a href={YATU_URL} target="_blank" rel="noopener noreferrer"
      style={{ display:'inline-flex', alignItems:'center', gap:10, flexWrap:'wrap', marginTop:16,
        padding:'7px 12px', borderRadius:99, textDecoration:'none',
        background:'var(--complement-tint)', border:'1px solid rgba(var(--primary-rgb),.16)' }}>
      <span style={{ fontSize:9, fontWeight:800, letterSpacing:'.08em', background:'#B45F2B',
        color:'#fff', padding:'3px 8px', borderRadius:99 }}>NEW</span>
      <span style={{ fontSize:12, fontWeight:600, color:'var(--text)' }}>
        Also from CreativeWeb: <b style={{ color:'var(--primary)' }}>YatuMobile</b> payment gateway
      </span>
      <span style={{ display:'inline-flex', alignItems:'center', gap:3, fontSize:12, fontWeight:700, color:'var(--primary)' }}>
        Explore <ArrowUpRight size={12}/>
      </span>
    </a>
  );
}

/* Full flagship band */
export function YatuBand() {
  return (
    <div className="yb" style={{ position:'relative', overflow:'hidden', borderRadius:28,
      background:'var(--cta-bg)', border:'1px solid rgba(224,192,136,.28)', padding:'clamp(24px,4vw,44px)' }}>
      <style>{`
        .yb-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:36px;align-items:center}
        @media(max-width:820px){.yb-grid{grid-template-columns:1fr}}
        @keyframes ybBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
        @keyframes ybPulse{0%,100%{opacity:1}50%{opacity:.35}}
        .yb-card{animation:ybBob 5s ease-in-out infinite}
        .yb-btn{transition:transform .2s}.yb-btn:hover{transform:translateY(-2px)}
        @media(prefers-reduced-motion:reduce){.yb-card{animation:none}}
      `}</style>

      {/* gold glow */}
      <div aria-hidden="true" style={{ position:'absolute', top:-120, right:-80, width:380, height:380, borderRadius:'50%',
        background:'radial-gradient(circle,rgba(224,192,136,.22),transparent 68%)', pointerEvents:'none' }}/>

      <div className="yb-grid" style={{ position:'relative' }}>
        {/* ── copy ── */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:20 }}>
            <div style={{ borderRadius:12, padding:'8px 14px' }}><YatuLogo height={130}/></div>
            <span style={{ fontSize:10, fontWeight:800, letterSpacing:'.08em', background:'#B45F2B', color:'#fff',
              padding:'4px 10px', borderRadius:99 }}>NEW</span>
            <span style={{ display:'inline-flex', alignItems:'center', gap:6, fontSize:11, fontWeight:600,
              color:'rgba(255,255,255,.75)' }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#E0C088', animation:'ybPulse 2s infinite' }}/>
              In development · early access
            </span>
          </div>

          <h2 style={{ fontSize:'clamp(1.6rem,4vw,2.5rem)', fontWeight:800, color:'#fff',
            letterSpacing:'-.03em', lineHeight:1.1, marginBottom:14 }}>
            Did you know? we also built a{' '}
            <span style={{ backgroundImage:'linear-gradient(135deg,#D4A9E6,#E0C088)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              payment gateway.
            </span>
          </h2>

          <p style={{ fontSize:'clamp(13px,2vw,15px)', color:'rgba(255,255,255,.72)', lineHeight:1.75,
            marginBottom:20, maxWidth:520 }}>
            YatuMobile lets businesses and developers accept payments online — built by the same
            hands that build your website, so it fits in from day one.
          </p>

          <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:26 }}>
            {['For businesses', 'For developers', 'Blockchain · coming later'].map(t => (
              <span key={t} style={{ fontSize:11, fontWeight:600, color:'rgba(255,255,255,.85)', padding:'5px 12px',
                borderRadius:99, border:'1px solid rgba(255,255,255,.2)', background:'rgba(255,255,255,.06)' }}>{t}</span>
            ))}
          </div>

          <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
            <a href={YATU_URL} target="_blank" rel="noopener noreferrer" className="yb-btn"
              style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#FFFFFF', color:'#4A1A5C',
                padding:'13px 26px', borderRadius:99, fontWeight:700, fontSize:14, textDecoration:'none' }}>
              Explore YatuMobile <ArrowUpRight size={16}/>
            </a>
            <a href="#/Contact-me" className="yb-btn"
              style={{ display:'inline-flex', alignItems:'center', gap:8, color:'#fff',
                padding:'12px 24px', borderRadius:99, fontWeight:600, fontSize:14, textDecoration:'none',
                border:'1.5px solid rgba(255,255,255,.35)' }}>
              Integrate it with my site <ArrowRight size={15}/>
            </a>
          </div>
        </div>

        {/* ── checkout preview ── */}
        <div className="yb-card" aria-hidden="true" style={{ borderRadius:20, padding:22,
          background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.16)',
          boxShadow:'0 24px 60px rgba(0,0,0,.35)' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'rgba(255,255,255,.55)', letterSpacing:'.08em' }}>CHECKOUT</span>
            <span style={{ fontSize:9, fontWeight:800, color:'#E0C088', border:'1px solid rgba(224,192,136,.5)',
              padding:'2px 8px', borderRadius:99, letterSpacing:'.08em' }}>PREVIEW</span>
          </div>
          <div style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginBottom:4 }}>Order #1042</div>
          <div style={{ fontSize:32, fontWeight:800, color:'#fff', letterSpacing:'-.03em', marginBottom:18 }}>K 1,250.00</div>
          <div style={{ display:'flex', gap:8, marginBottom:18 }}>
            {['Mobile money', 'Card'].map((m, i) => (
              <span key={m} style={{ flex:1, textAlign:'center', fontSize:12, fontWeight:600, padding:'9px 0', borderRadius:10,
                color: i === 0 ? '#fff' : 'rgba(255,255,255,.6)',
                background: i === 0 ? 'linear-gradient(135deg,#6E3580,#94508F)' : 'rgba(255,255,255,.06)',
                border: i === 0 ? 'none' : '1px solid rgba(255,255,255,.14)' }}>{m}</span>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:8, padding:'11px 14px', borderRadius:10,
            background:'rgba(110,231,183,.1)', border:'1px solid rgba(110,231,183,.25)' }}>
            <CheckCircle size={16} color="#6EE7B7"/>
            <span style={{ fontSize:12, fontWeight:600, color:'#6EE7B7' }}>Payment confirmed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

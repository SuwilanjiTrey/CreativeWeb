import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, Code, Palette, Layers, Sparkles, ExternalLink, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomTabBar from './Components/shared/BottomTabBar.jsx';

/* ─── Neon Polygons ─── */
const NeonPolygons = () => (
  <div aria-hidden="true" style={{ position:'fixed',inset:0,zIndex:0,pointerEvents:'none',overflow:'hidden' }}>
    <svg width="100%" height="100%" style={{ position:'absolute',inset:0 }}>
      <defs>
        <filter id="gpv"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="gpc"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="gpa"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <polygon points="60,15 110,15 135,57 110,99 60,99 35,57" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeOpacity="0.45" filter="url(#gpv)" style={{animation:'cFloatA 14s ease-in-out infinite'}}/>
      <polygon points="74,30 96,30 107,49 96,68 74,68 63,49" fill="none" stroke="#8B5CF6" strokeWidth="0.7" strokeOpacity="0.28" style={{animation:'cFloatA 14s ease-in-out infinite'}}/>
      <polygon points="87%,2% 94%,16% 80%,16%" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.55" filter="url(#gpc)" style={{animation:'cFloatB 11s ease-in-out infinite'}}/>
      <polygon points="94%,37% 97%,43% 94%,49% 91%,43%" fill="none" stroke="#06B6D4" strokeWidth="1.1" strokeOpacity="0.42" filter="url(#gpc)" style={{animation:'cFloatC 9s ease-in-out infinite'}}/>
      <polygon points="82%,74% 87%,71% 92%,75% 92%,82% 87%,86% 82%,86% 77%,82% 77%,75%" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeOpacity="0.35" filter="url(#gpv)" style={{animation:'cFloatD 16s ease-in-out infinite'}}/>
      <polygon points="4%,80% 9%,71% 15%,80%" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.48" filter="url(#gpa)" style={{animation:'cFloatB 12s ease-in-out infinite reverse'}}/>
      <polygon points="3%,44% 7%,41% 11%,44% 9%,49% 5%,49%" fill="none" stroke="#8B5CF6" strokeWidth="1.1" strokeOpacity="0.35" style={{animation:'cFloatC 10s ease-in-out infinite reverse'}}/>
      <polygon points="70%,10% 72%,12% 70%,14% 68%,12%" fill="#06B6D4" fillOpacity="0.38" style={{animation:'cFloatD 8s ease-in-out infinite'}}/>
      <polygon points="23%,26% 25%,28% 23%,30% 21%,28%" fill="#8B5CF6" fillOpacity="0.32" style={{animation:'cFloatB 7s ease-in-out infinite reverse'}}/>
      <polygon points="58%,87% 60%,89% 58%,91% 56%,89%" fill="#F59E0B" fillOpacity="0.38" style={{animation:'cFloatC 9s ease-in-out infinite'}}/>
      <polygon points="40%,4% 60%,4% 50%,20%" fill="none" stroke="#6D28D9" strokeWidth="0.7" strokeOpacity="0.15" style={{animation:'cFloatA 20s ease-in-out infinite'}}/>
    </svg>
  </div>
);

/* ─── All work batches — 3 items per batch for the grid ─── */
/* Layout key per batch: slot sizes = [tall, half, half] then [half, half, wide] etc.
   We rotate through 3-item "screens" every 5s */
const ALL_ITEMS = [
  // ── Batch A ──
  [
    { type:'template', id:'agency-template',      label:'Agency Landing',   sub:'Web Design',   thumb:'/template/Agency.jpg',       demo:'#/testing',    accent:'#6D28D9', span:'tall' },
    { type:'template', id:'ecommerce-template',   label:'E-commerce Store', sub:'Web Design',   thumb:'/template/ecommerce.jpg',    demo:'#/e-commerce', accent:'#06B6D4', span:'half' },
    { type:'template', id:'startup-template',     label:'Startup Landing',  sub:'SaaS',         thumb:'/template/startup.jpg',      demo:'#/startup',    accent:'#8B5CF6', span:'half' },
  ],
  // ── Batch B ──
  [
    { type:'template', id:'real-estate-template', label:'Real Estate',      sub:'Web Design',   thumb:'/houses/4.jpeg',             demo:'#/realtor',    accent:'#F59E0B', span:'tall' },
    { type:'logo',     id:'corporate-identity',   label:'Corporate ID',     sub:'Branding',     thumb:'/logos/2.png',               demo:null,           accent:'#6D28D9', span:'half' },
    { type:'logo',     id:'startup-branding',     label:'Startup Brand',    sub:'Branding',     thumb:'/logos/13.png',              demo:null,           accent:'#8B5CF6', span:'half' },
  ],
  // ── Batch C ──
  [
    { type:'template', id:'portfolio-template',   label:'Portfolio',        sub:'Web Design',   thumb:'/template/portfolio.jpg',    demo:'#/portfolio',  accent:'#8B5CF6', span:'tall' },
    { type:'logo',     id:'minimalist-logo',      label:'Minimalist Logo',  sub:'Branding',     thumb:'/logos/4.png',               demo:null,           accent:'#F59E0B', span:'half' },
    { type:'template', id:'soccer-template',      label:'Soccer Club',      sub:'Sports',       thumb:'/template/soccersite.jpg',   demo:'#/soccer',     accent:'#06B6D4', span:'half' },
  ],
  // ── Batch D ──
  [
    { type:'logo',     id:'brand-guidelines',     label:'Brand Guidelines', sub:'Branding',     thumb:'/logos/14.png',              demo:null,           accent:'#F59E0B', span:'half' },
    { type:'template', id:'ecommerce-template',   label:'E-commerce',       sub:'Web Design',   thumb:'/template/ecommerce.jpg',    demo:'#/e-commerce', accent:'#06B6D4', span:'half' },
    { type:'template', id:'agency-template',      label:'Agency + Branding','sub':'Full package',thumb:'/template/Agency.jpg',     demo:'#/testing',    accent:'#6D28D9', span:'wide' },
  ],
];

/* ─── Animated Bento Showcase ─── */
function BentoShowcase() {
  const [batchIdx, setBatchIdx]   = useState(0);
  const [visible,  setVisible]    = useState(true);   // for cross-fade
  const INTERVAL = 5000;

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);                              // fade out
      setTimeout(() => {
        setBatchIdx(p => (p + 1) % ALL_ITEMS.length);
        setVisible(true);                             // fade in next
      }, 350);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const batch = ALL_ITEMS[batchIdx];

  /* progress dots */
  return (
    <div>
      {/* dots */}
      <div style={{ display:'flex', gap:6, marginBottom:14, justifyContent:'flex-end' }}>
        {ALL_ITEMS.map((_, i) => (
          <button key={i} onClick={() => { setVisible(false); setTimeout(()=>{ setBatchIdx(i); setVisible(true); },200); }}
            aria-label={`Show batch ${i+1}`}
            style={{ width: i===batchIdx ? 20 : 6, height:6, borderRadius:99,
              border:'none', cursor:'pointer', padding:0, transition:'all .35s',
              background: i===batchIdx ? '#6D28D9' : 'rgba(109,40,217,.2)' }}/>
        ))}
      </div>

      {/* grid */}
      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(6,1fr)',
        gridTemplateRows:'auto',
        gap:10,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition:'opacity .35s ease, transform .35s ease',
      }}>
        {batch.map((item, i) => {
          // span logic
          const colSpan =
            item.span === 'tall' ? '1 / 4' :
            item.span === 'wide' ? '1 / 7' :
            i === 1              ? '4 / 7' :
                                   '4 / 7';   // fallback half

          // row logic: tall item spans 2 rows, others fill rows
          const rowSpan = item.span === 'tall' ? 'span 2' : 'span 1';

          const isLogo = item.type === 'logo';
          const height = item.span === 'tall' ? 300 : item.span === 'wide' ? 180 : 144;

          return (
            <div key={`${batchIdx}-${i}`}
              style={{
                gridColumn: colSpan,
                gridRow: rowSpan,
                borderRadius:16, overflow:'hidden', position:'relative',
                height, cursor:'pointer',
                border:'1.5px solid rgba(109,40,217,.1)',
                background: isLogo ? '#F9F9FF' : '#1a1a2e',
                transition:'transform .22s, box-shadow .22s',
              }}
              onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow=`0 12px 32px ${item.accent}25`; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow=''; }}
            >
              <img
                src={item.thumb}
                alt={item.label}
                loading={i === 0 && batchIdx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                style={{
                  width:'100%', height:'100%', display:'block',
                  objectFit: isLogo ? 'contain' : 'cover',
                  padding: isLogo ? 20 : 0,
                  transition:'transform .4s',
                }}
                onMouseEnter={e=>{ if(!isLogo) e.currentTarget.style.transform='scale(1.05)'; }}
                onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}
              />

              {/* overlay + labels — only on template cards */}
              {!isLogo && (
                <>
                  <div style={{ position:'absolute',inset:0,
                    background:'linear-gradient(to top,rgba(10,8,25,.75) 0%,rgba(10,8,25,.05) 55%,transparent 100%)' }}/>
                  <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'12px 14px',
                    display:'flex',alignItems:'flex-end',justifyContent:'space-between' }}>
                    <div>
                      <div style={{ fontSize:8,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>
                        {item.sub.toUpperCase()}
                      </div>
                      <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>{item.label}</div>
                    </div>
                    {item.demo && (
                      <a href={item.demo} target="_blank" rel="noopener noreferrer"
                        onClick={e=>e.stopPropagation()}
                        style={{ width:26,height:26,borderRadius:7,
                          background:'rgba(255,255,255,.18)',border:'1px solid rgba(255,255,255,.3)',
                          display:'flex',alignItems:'center',justifyContent:'center',
                          textDecoration:'none',flexShrink:0 }}>
                        <ExternalLink size={11} color="#fff"/>
                      </a>
                    )}
                  </div>
                </>
              )}

              {/* logo label */}
              {isLogo && (
                <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'8px 12px',
                  background:'rgba(255,255,255,.9)',backdropFilter:'blur(6px)',
                  borderTop:'1px solid rgba(109,40,217,.08)' }}>
                  <div style={{ fontSize:8,color:'#9CA3AF',fontWeight:700,letterSpacing:'.07em',marginBottom:1 }}>
                    {item.sub.toUpperCase()}
                  </div>
                  <div style={{ fontSize:11,fontWeight:700,color:'#1F2937' }}>{item.label}</div>
                </div>
              )}

              {/* accent dot */}
              <div style={{ position:'absolute',top:10,left:10,
                width:6,height:6,borderRadius:'50%',background:item.accent,
                boxShadow:`0 0 8px ${item.accent}` }}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Animated counter ─── */
function Counter({ end, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let cur = 0;
      const step = end / 40;
      const t = setInterval(() => {
        cur = Math.min(cur + step, end);
        setVal(Math.floor(cur));
        if (cur >= end) clearInterval(t);
      }, 40);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Main component ─── */
export default function LandingPageCatalog() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        :root { --primary:#6D28D9; --secondary:#8B5CF6; --complement:#06B6D4; --accent:#F59E0B; --neutral:#1F2937; }
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { background:#fff; color:#1F2937; font-family:'Poppins',system-ui,sans-serif; }
        img  { display:block; max-width:100%; }
        .page-wrap { padding-bottom:88px; min-height:100vh; overflow-x:hidden; }

        @keyframes cFloatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(8px,-14px) rotate(3deg)} 66%{transform:translate(-6px,10px) rotate(-2deg)} }
        @keyframes cFloatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-10px,-18px) rotate(5deg)} }
        @keyframes cFloatC { 0%,100%{transform:translate(0,0)} 40%{transform:translate(12px,8px)} 80%{transform:translate(-8px,-6px)} }
        @keyframes cFloatD { 0%,100%{transform:translate(0,0) rotate(0deg)} 25%{transform:translate(6px,14px) rotate(-4deg)} 75%{transform:translate(-10px,-6px) rotate(3deg)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes floatBob{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }

        .fade-up { animation:fadeUp .6s ease both; }
        .bob     { animation:floatBob 4s ease-in-out infinite; }

        .hover-lift { transition:transform .22s,box-shadow .22s; }
        .hover-lift:hover { transform:translateY(-4px); box-shadow:0 14px 36px rgba(109,40,217,.12); }

        .nav-link { color:#4B5563; text-decoration:none; font-size:13px; font-weight:600; transition:color .2s; }
        .nav-link:hover { color:#6D28D9; }

        /* Section divider */
        .section-label {
          font-size:10px; font-weight:700; color:#6D28D9;
          letter-spacing:.12em; margin-bottom:10px; display:block;
        }

        /* Service cards */
        .svc-card { background:rgba(242, 241, 240); border-radius:18px; padding:24px;
          border:1.5px solid rgba(109,40,217,.09); transition:all .22s; }
        .svc-card:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(109,40,217,.1); border-color:rgba(109,40,217,.22); }

        /* Portfolio card */
        .port-card { border-radius:16px; overflow:hidden; position:relative;
          border:1.5px solid rgba(109,40,217,.1); cursor:pointer; transition:transform .25s,box-shadow .25s; }
        .port-card:hover { transform:translateY(-4px); box-shadow:0 16px 40px rgba(109,40,217,.14); }
        .port-card img { width:100%; height:100%; object-fit:cover; transition:transform .4s; }
        .port-card:hover img { transform:scale(1.05); }
        .port-overlay { position:absolute; inset:0;
          background:linear-gradient(to top,rgba(10,8,25,.7) 0%,transparent 60%); }
      `}</style>

      <NeonPolygons/>

      {/* ── STICKY NAV ── */}
      <nav aria-label="Site navigation" style={{
        position:'sticky', top:0, zIndex:50,
        background:'rgba(255,255,255,.93)', backdropFilter:'blur(18px)', WebkitBackdropFilter:'blur(18px)',
        borderBottom:'1px solid rgba(109,40,217,.08)', padding:'0 20px',
      }}>
        <div style={{ maxWidth:1160, margin:'0 auto', height:56, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="#/" style={{ fontSize:20, fontWeight:800, textDecoration:'none',
            background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            CreativeWeb
          </a>
          <div style={{ display:'flex', gap:22, alignItems:'center' }}>
            <a href="#/apps" style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6)', color:'#fff',
              padding:'8px 20px', borderRadius:99, fontSize:12, fontWeight:700, textDecoration:'none' }}>
              Apps
            </a>
          </div>
        </div>
      </nav>

      <div className="page-wrap">

        {/* ══════════════════════════════════════════
            1. HERO — headline + rotating bento grid
        ══════════════════════════════════════════ */}
        <section style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'0 auto', padding:'52px 20px 20px' }}>

          {/* Intro copy */}
          <div className="fade-up" style={{ maxWidth:680, marginBottom:36 }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:7,
              background:'rgba(109,40,217,.07)', border:'1px solid rgba(109,40,217,.18)',
              borderRadius:99, padding:'5px 14px', marginBottom:18 }}>
              <Sparkles size={12} color="#6D28D9"/>
              <span style={{ fontSize:11, fontWeight:700, color:'#6D28D9', letterSpacing:'.05em' }}>
                Available for new projects
              </span>
            </div>

            <h1 style={{ fontSize:'clamp(2rem,5.5vw,3.6rem)', fontWeight:800, color:'#1F2937',
              letterSpacing:'-.03em', lineHeight:1.08, marginBottom:16 }}>
              Transforming Ideas into{' '}
              <span style={{ background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Digital Experiences
              </span>
            </h1>

            <p style={{ fontSize:'clamp(13px,2vw,16px)', color:'#6B7280', lineHeight:1.75, marginBottom:24, maxWidth:560 }}>
              Stunning, functional websites that elevate your brand and engage your audience —
              built with performance and accessibility at the core.
            </p>

            {/* Stats inline */}
            <div style={{ display:'flex', gap:'clamp(18px,4vw,44px)', flexWrap:'wrap', marginBottom:28 }}>
              {[['50+','Projects','#6D28D9'],['30+','Clients','#06B6D4'],['99%','Satisfaction','#F59E0B']].map(([n,l,c])=>(
                <div key={l}>
                  <div style={{ fontSize:'clamp(1.5rem,3.5vw,2.2rem)', fontWeight:800, color:c, lineHeight:1 }}>
                    <Counter end={parseInt(n)} suffix={n.replace(/\d/g,'')}/>
                  </div>
                  <div style={{ fontSize:11, color:'#9CA3AF', fontWeight:500, marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              <a href="#/services" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'linear-gradient(135deg,#6D28D9,#8B5CF6)', color:'#fff',
                padding:'13px 26px', borderRadius:99, fontWeight:700, fontSize:14, textDecoration:'none',
                boxShadow:'0 8px 24px rgba(109,40,217,.3)', transition:'transform .2s',
              }}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform=''}>
                View Services <ArrowRight size={15}/>
              </a>
              <a href="https://suwilanjitreychellah.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                border:'1.5px solid rgba(109,40,217,.25)', color:'#6D28D9',
                padding:'12px 24px', borderRadius:99, fontWeight:700, fontSize:14, textDecoration:'none',
                transition:'all .2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(109,40,217,.05)';e.currentTarget.style.borderColor='rgba(109,40,217,.5)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='';e.currentTarget.style.borderColor='rgba(109,40,217,.25)'}}>
                About me <ArrowUpRight size={14}/>
              </a>
            </div>
          </div>

          {/* ── THE ROTATING BENTO SHOWCASE ── */}
          <div className="fade-up" style={{ animationDelay:'.18s' }}>
            <BentoShowcase/>
          </div>

          {/* See more button */}
          <div style={{ textAlign:'center', marginTop:28 }}>
            <a href="#/services" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'#fff', color:'#6D28D9',
              border:'1.5px solid rgba(109,40,217,.25)',
              padding:'12px 28px', borderRadius:99, fontWeight:700, fontSize:13, textDecoration:'none',
              transition:'all .2s', boxShadow:'0 4px 16px rgba(109,40,217,.08)',
            }}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(109,40,217,.05)';e.currentTarget.style.borderColor='#6D28D9';e.currentTarget.style.boxShadow='0 8px 24px rgba(109,40,217,.14)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='#fff';e.currentTarget.style.borderColor='rgba(109,40,217,.25)';e.currentTarget.style.boxShadow='0 4px 16px rgba(109,40,217,.08)'}}>
              See all templates <ArrowRight size={14}/>
            </a>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            2. WHAT I BUILD — service cards
        ══════════════════════════════════════════ */}
        <section style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'60px auto 0', padding:'0 20px' }}>
          <span className="section-label">WHAT I BUILD</span>
          <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.2rem)', fontWeight:800, color:'#1F2937',
            letterSpacing:'-.025em', marginBottom:28 }}>
            Full-stack digital solutions
          </h2>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:16 }}>
            {[
              { icon:Code,    color:'#6D28D9', light:'rgba(109,40,217,.08)', title:'Web Development',
                desc:'React, Next.js, and full-stack builds. Fast, accessible, SEO-optimised.',
                tags:['React / Next.js','Full-stack','API Integration','SEO'] },
              { icon:Palette, color:'#F59E0B', light:'rgba(245,158,11,.08)', title:'Branding & Identity',
                desc:'Logos, colour systems, and brand guidelines that make you stand out.',
                tags:['Logo Design','Brand Guide','Vector','Revisions'] },
              { icon:Layers,  color:'#06B6D4', light:'rgba(6,182,212,.08)',  title:'Web Services',
                desc:'Email setup, CRM integration, cloud databases, and custom APIs.',
                tags:['Email','CRM','API Dev','Cloud DB'] },
            ].map(({ icon:Icon, color, light, title, desc, tags })=>(
              <div key={title} className="svc-card" color="#808080" >
                <div style={{ width:46,height:46,borderRadius:12,background:light,
                  display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16 }}>
                  <Icon size={22} color={color} strokeWidth={1.8}/>
                </div>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#1F2937', marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:13, color:'#6B7280', lineHeight:1.65, marginBottom:16 }}>{desc}</p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
                  {tags.map(t=>(
                    <span key={t} style={{ fontSize:10, fontWeight:700, padding:'3px 10px', borderRadius:99,
                      background:light, color:color, border:`1px solid ${color}20` }}>{t}</span>
                  ))}
                </div>
                <a href="#/services" style={{ display:'inline-flex', alignItems:'center', gap:6,
                  fontSize:12, fontWeight:700, color:color, textDecoration:'none' }}>
                  Learn more <ArrowRight size={12}/>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            3. PORTFOLIO STRIP — 3 featured pieces
        ══════════════════════════════════════════ */}
        <section style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'60px auto 0', padding:'0 20px' }}>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:12, marginBottom:20 }}>
            <div>
              <span className="section-label">PORTFOLIO</span>
              <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.2rem)', fontWeight:800, color:'#1F2937', letterSpacing:'-.025em' }}>
                Recent projects
              </h2>
            </div>
            <a href="#/services" style={{ display:'inline-flex', alignItems:'center', gap:6,
              fontSize:12, fontWeight:700, color:'#6D28D9', textDecoration:'none' }}>
              See all <ArrowRight size={12}/>
            </a>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
            {[
              { thumb:'/template/ecommerce.jpg', title:'E-commerce Platform', tech:'React · Stripe', demo:'#/e-commerce' },
              { thumb:'/template/startup.jpg',   title:'Startup Landing',     tech:'Next.js · Tailwind', demo:'#/startup' },
              { thumb:'/houses/4.jpeg',          title:'Real Estate Site',    tech:'React · Framer Motion', demo:'#/realtor' },
            ].map(({ thumb,title,tech,demo })=>(
              <div key={title} className="port-card" style={{ height:220 }} onClick={()=>window.open(demo,'_blank')}>
                <img src={thumb} alt={title} loading="lazy" decoding="async" width={400} height={220}/>
                <div className="port-overlay"/>
                <div style={{ position:'absolute',bottom:0,left:0,right:0,padding:'16px' }}>
                  <div style={{ fontSize:10,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.07em',marginBottom:3 }}>
                    {tech.toUpperCase()}
                  </div>
                  <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                    <span style={{ fontSize:14,fontWeight:700,color:'#fff' }}>{title}</span>
                    <ArrowUpRight size={14} color="rgba(255,255,255,.7)"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            4. START A PROJECT — dark CTA
        ══════════════════════════════════════════ */}
        <section style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'60px auto 0', padding:'0 20px' }}>
          <div style={{
            background:'#1F2937', borderRadius:24, padding:'clamp(32px,5vw,52px) clamp(24px,5vw,56px)',
            display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between', gap:24,
            position:'relative', overflow:'hidden',
          }}>
            <svg aria-hidden="true" style={{ position:'absolute',right:0,top:0,opacity:.06,pointerEvents:'none' }} width="300" height="220">
              <polygon points="150,10 290,80 290,180 150,210 10,180 10,80" fill="none" stroke="#8B5CF6" strokeWidth="2"/>
              <polygon points="150,35 255,90 255,165 150,190 45,165 45,90" fill="none" stroke="#06B6D4" strokeWidth="1"/>
            </svg>
            <div style={{ position:'relative', zIndex:1 }}>
              <h2 style={{ fontSize:'clamp(1.4rem,3.5vw,2.2rem)', fontWeight:800, color:'#fff',
                letterSpacing:'-.025em', lineHeight:1.15, marginBottom:10 }}>
                Ready to start a project?
              </h2>
              <p style={{ fontSize:14, color:'rgba(255,255,255,.6)', lineHeight:1.7, maxWidth:420 }}>
                Custom websites, brand identities, or backend integrations —
                let's talk about what you need and build it right.
              </p>
            </div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap', position:'relative', zIndex:1 }}>
              <a href="#/Contact-me" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                background:'linear-gradient(135deg,#6D28D9,#8B5CF6)', color:'#fff',
                padding:'13px 26px', borderRadius:99, fontWeight:700, fontSize:14, textDecoration:'none',
                boxShadow:'0 8px 24px rgba(109,40,217,.35)', transition:'transform .2s',
              }}
                onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                onMouseLeave={e=>e.currentTarget.style.transform=''}>
                <Send size={14}/> Let's talk
              </a>
              <a href="#/services" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                border:'1.5px solid rgba(255,255,255,.18)', color:'rgba(255,255,255,.85)',
                padding:'12px 24px', borderRadius:99, fontWeight:700, fontSize:14, textDecoration:'none',
                transition:'all .2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.07)';e.currentTarget.style.borderColor='rgba(255,255,255,.35)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='';e.currentTarget.style.borderColor='rgba(255,255,255,.18)'}}>
                Browse services
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            5. FOOTER
        ══════════════════════════════════════════ */}
        <footer style={{ position:'relative', zIndex:1, maxWidth:1160, margin:'0 auto', padding:'48px 20px 24px' }}>
          <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:20, paddingBottom:24,
            borderBottom:'1px solid rgba(109,40,217,.08)' }}>
            <div>
              <div style={{ fontSize:20, fontWeight:800, marginBottom:4,
                background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                CreativeWeb
              </div>
              <p style={{ fontSize:12, color:'#9CA3AF' }}>Transforming ideas into digital experiences</p>
            </div>
            <nav aria-label="Footer links" style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
              {[
                ['LinkedIn','https://www.linkedin.com/in/suwilanji-chellah-01a534239'],
                ['Services','#/services'],
                ['Apps','#/apps'],
                ['Contact','#/Contact-me'],
              ].map(([l,h])=>(
                <a key={l} href={h} style={{ color:'#9CA3AF', textDecoration:'none', fontSize:13, fontWeight:500, transition:'color .2s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#6D28D9'}
                  onMouseLeave={e=>e.currentTarget.style.color='#9CA3AF'}>{l}</a>
              ))}
            </nav>
          </div>
          <p style={{ textAlign:'center', marginTop:20, fontSize:11, color:'#D1D5DB' }}>
            © {new Date().getFullYear()} CreativeWeb — All rights reserved.
          </p>
        </footer>

      </div>
      <BottomTabBar/>
    </>
  );
}

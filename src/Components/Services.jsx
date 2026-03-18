import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomTabBar from './shared/BottomTabBar.jsx';

/* ── Neon Polygons ── */
const NeonPolygons = () => (
  <div aria-hidden="true" style={{ position:'fixed',inset:0,zIndex:0,pointerEvents:'none',overflow:'hidden' }}>
    <svg width="100%" height="100%" style={{ position:'absolute',inset:0 }}>
      <defs>
        <filter id="sv"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="sc"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <filter id="sa"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <polygon points="55,12 105,12 130,54 105,96 55,96 30,54" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeOpacity="0.5" filter="url(#sv)" style={{animation:'floatA 14s ease-in-out infinite'}}/>
      <polygon points="68,28 92,28 104,48 92,68 68,68 56,48" fill="none" stroke="#8B5CF6" strokeWidth="0.7" strokeOpacity="0.3" style={{animation:'floatA 14s ease-in-out infinite'}}/>
      <polygon points="88%,2% 95%,16% 81%,16%" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeOpacity="0.6" filter="url(#sc)" style={{animation:'floatB 11s ease-in-out infinite'}}/>
      <polygon points="93%,35% 96%,41% 93%,47% 90%,41%" fill="none" stroke="#06B6D4" strokeWidth="1.1" strokeOpacity="0.4" filter="url(#sc)" style={{animation:'floatC 9s ease-in-out infinite'}}/>
      <polygon points="82%,74% 87%,71% 92%,75% 92%,82% 87%,86% 82%,86% 77%,82% 77%,75%" fill="none" stroke="#6D28D9" strokeWidth="1.5" strokeOpacity="0.38" filter="url(#sv)" style={{animation:'floatD 16s ease-in-out infinite'}}/>
      <polygon points="4%,80% 9%,71% 15%,80%" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.5" filter="url(#sa)" style={{animation:'floatB 12s ease-in-out infinite reverse'}}/>
      <polygon points="3%,44% 7%,41% 11%,44% 9%,49% 5%,49%" fill="none" stroke="#8B5CF6" strokeWidth="1.1" strokeOpacity="0.38" style={{animation:'floatC 10s ease-in-out infinite reverse'}}/>
      <polygon points="70%,11% 72%,13% 70%,15% 68%,13%" fill="#06B6D4" fillOpacity="0.38" style={{animation:'floatD 8s ease-in-out infinite'}}/>
      <polygon points="23%,26% 25%,28% 23%,30% 21%,28%" fill="#8B5CF6" fillOpacity="0.32" style={{animation:'floatB 7s ease-in-out infinite reverse'}}/>
      <polygon points="58%,87% 60%,89% 58%,91% 56%,89%" fill="#F59E0B" fillOpacity="0.38" style={{animation:'floatC 9s ease-in-out infinite'}}/>
    </svg>
  </div>
);

/* ── Data ── */
const WEB_TEMPLATES = [
  { id:'agency-template',     name:'Agency Landing',  category:'Web Design',  thumb:'/template/Agency.jpg',     demo:'#/testing'    },
  { id:'real-estate-template',name:'Real Estate',     category:'Web Design',  thumb:'/houses/4.jpeg',           demo:'#/realtor'    },
  { id:'ecommerce-template',  name:'E-commerce Store',category:'Web Design',  thumb:'/template/ecommerce.jpg',  demo:'#/e-commerce' },
  { id:'startup-template',    name:'Startup Landing', category:'Web Design',  thumb:'/template/startup.jpg',    demo:'#/startup'    },
  { id:'portfolio-template',  name:'Portfolio',       category:'Web Design',  thumb:'/template/portfolio.jpg',  demo:'#/portfolio'  },
  { id:'soccer-template',     name:'Soccer Club',     category:'Sports',      thumb:'/template/soccersite.jpg', demo:'#/soccer'     },
];

const BRAND_SAMPLES = [
  { id:'corporate-identity', name:'Corporate', thumb:'/logos/2.png'  },
  { id:'startup-branding',   name:'Startup',   thumb:'/logos/13.png' },
  { id:'minimalist-logo',    name:'Minimal',   thumb:'/logos/4.png'  },
  { id:'brand-guidelines',   name:'Brand Kit', thumb:'/logos/14.png' },
];

const SERVICE_DETAILS = [
  {
    title:'Custom Website Design',
    color:'#6D28D9', colorLight:'rgba(109,40,217,.08)',
    features:['Responsive Design','Modern UI/UX','SEO Optimisation','Performance Tuning','Accessibility'],
  },
  {
    title:'Branding & Logo Design',
    color:'#F59E0B', colorLight:'rgba(245,158,11,.08)',
    features:['Logo Design','Brand Style Guide','Vector Formats','Unlimited Revisions','Color Systems'],
  },
  {
    title:'Web Services & Integrations',
    color:'#06B6D4', colorLight:'rgba(6,182,212,.08)',
    features:['Custom Email Domains','CRM Integration','API Development','Cloud Databases','Email Marketing'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        :root { --primary:#6D28D9; --secondary:#8B5CF6; --complement:#06B6D4; --accent:#F59E0B; --neutral:#1F2937; }
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { background:#fff; color:#1F2937; font-family:'Poppins',system-ui,sans-serif; }
        img  { display:block; max-width:100%; }
        .page-wrap { padding-bottom:88px; min-height:100vh; }

        @keyframes floatA { 0%,100%{transform:translate(0,0) rotate(0deg)} 33%{transform:translate(8px,-14px) rotate(3deg)} 66%{transform:translate(-6px,10px) rotate(-2deg)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0) rotate(0deg)} 50%{transform:translate(-10px,-18px) rotate(5deg)} }
        @keyframes floatC { 0%,100%{transform:translate(0,0)} 40%{transform:translate(12px,8px)} 80%{transform:translate(-8px,-6px)} }
        @keyframes floatD { 0%,100%{transform:translate(0,0) rotate(0deg)} 25%{transform:translate(6px,14px) rotate(-4deg)} 75%{transform:translate(-10px,-6px) rotate(3deg)} }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }

        .fade-up { animation:fadeUp .5s ease both; }

        /* Template card */
        .tpl-card { position:relative; border-radius:16px; overflow:hidden; cursor:pointer;
          border:1.5px solid rgba(109,40,217,.1); background:#f3f4f6;
          transition:transform .25s, box-shadow .25s; }
        .tpl-card:hover { transform:translateY(-4px); box-shadow:0 14px 36px rgba(109,40,217,.14); }
        .tpl-card img { width:100%; height:100%; object-fit:cover; display:block;
          transition:transform .4s cubic-bezier(.4,0,.2,1); }
        .tpl-card:hover img { transform:scale(1.06); }
        .tpl-card .overlay { position:absolute; inset:0;
          background:linear-gradient(to top,rgba(15,10,30,.72) 0%,rgba(15,10,30,.08) 55%,transparent 100%); }
        .tpl-card .card-info { position:absolute; bottom:0; left:0; right:0; padding:14px 14px;
          display:flex; align-items:flex-end; justify-content:space-between; }
        .tpl-card .preview-btn { position:absolute; top:10px; right:10px; opacity:0; transition:opacity .2s;
          background:rgba(255,255,255,.15); backdrop-filter:blur(8px);
          border:1px solid rgba(255,255,255,.3); border-radius:99px;
          padding:4px 10px; font-size:9px; font-weight:700; color:#fff;
          display:flex; align-items:center; gap:4px; text-decoration:none; }
        .tpl-card:hover .preview-btn { opacity:1; }

        /* Shimmer placeholder */
        .img-wrap { position:absolute; inset:0; background:#e5e7eb; overflow:hidden; }
        .img-wrap::after { content:''; position:absolute; inset:0;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
          animation:shimmer 1.5s infinite; }
        .img-wrap.loaded::after { display:none; }

        /* Bento grid */
        .bento { display:grid; gap:10px; grid-template-columns:repeat(6,1fr); }
        .b-tall  { grid-column:span 2; grid-row:span 2; }
        .b-half  { grid-column:span 3; }
        .b-third { grid-column:span 2; }
        .b-full  { grid-column:span 6; }
        @media(max-width:640px) {
          .b-tall  { grid-column:span 6; grid-row:span 1; }
          .b-half  { grid-column:span 6; }
          .b-third { grid-column:span 3; }
          .b-full  { grid-column:span 6; }
        }
        @media(min-width:641px) and (max-width:900px) {
          .b-tall  { grid-column:span 3; }
          .b-half  { grid-column:span 3; }
          .b-third { grid-column:span 3; }
        }

        .hover-lift { transition:transform .22s,box-shadow .22s; }
        .hover-lift:hover { transform:translateY(-3px); box-shadow:0 12px 30px rgba(109,40,217,.12); }
        .nav-link { color:#4B5563; text-decoration:none; font-size:13px; font-weight:600; transition:color .2s; }
        .nav-link:hover { color:#6D28D9; }
        .feat-chip { display:inline-flex; align-items:center; gap:5px;
          padding:5px 12px; border-radius:99px; font-size:11px; font-weight:600; }
      `}</style>

      <NeonPolygons/>

      {/* ── NAV ── */}
      <nav aria-label="Site navigation" style={{
        position:'sticky',top:0,zIndex:50,
        background:'rgba(255,255,255,.93)',backdropFilter:'blur(18px)',WebkitBackdropFilter:'blur(18px)',
        borderBottom:'1px solid rgba(109,40,217,.09)',padding:'0 20px',
      }}>
        <div style={{ maxWidth:1160,margin:'0 auto',height:56,display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <a href="#/" style={{ fontSize:20,fontWeight:800,textDecoration:'none',
            background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
            C.Web
          </a>
          <div style={{ display:'flex',gap:24,alignItems:'center' }}>
            {[['Home','#/'],['Services','#/services'],['About','https://suwilanjitreychellah.vercel.app/']].map(([l,h])=>(
              <a key={l} href={h} className="nav-link">{l}</a>
            ))}
            <a href="#/Contact-me" style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',color:'#fff',
              padding:'8px 20px',borderRadius:99,fontSize:12,fontWeight:700,textDecoration:'none' }}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="page-wrap" style={{ position:'relative' }}>

        {/* ══════════════════════════════════
            HERO — short headline then BENTO
        ══════════════════════════════════ */}
        <section style={{ position:'relative',zIndex:1,maxWidth:1160,margin:'0 auto',padding:'36px 16px 16px' }}>

          {/* 2-line intro — enough to orient, nothing more */}
          <div className="fade-up" style={{ marginBottom:24 }}>
            <p style={{ fontSize:11,fontWeight:700,color:'#6D28D9',letterSpacing:'.1em',marginBottom:8 }}>SERVICES</p>
            <h1 style={{ fontSize:'clamp(1.8rem,5vw,2.8rem)',fontWeight:800,color:'#1F2937',
              letterSpacing:'-.025em',lineHeight:1.1,marginBottom:10 }}>
              Here's what I can{' '}
              <span style={{ background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
                build for you.
              </span>
            </h1>
            <p style={{ fontSize:13,color:'#6B7280',maxWidth:460 }}>
              Tap any template to see it live. What you see is what you get.
            </p>
          </div>

          {/* ── BENTO TEMPLATE GRID — the hero IS the work ── */}
          <div className="bento" style={{ marginBottom:12 }}>

            {/* Tall hero — Agency */}
            <div className="tpl-card b-tall fade-up" style={{ minHeight:300,animationDelay:'.08s' }}>
              <div className="img-wrap">
                <img src="/template/Agency.jpg" alt="Agency Landing Page" loading="eager" fetchpriority="high" decoding="async" width={360} height={600}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/testing" className="preview-btn" target="_blank" rel="noopener noreferrer">
                Live preview <ExternalLink size={9}/>
              </a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>WEB DESIGN</div>
                  <div style={{ fontSize:14,fontWeight:700,color:'#fff' }}>Agency Landing</div>
                </div>
                <Link to="/templates/agency-template" onClick={e=>e.stopPropagation()}
                  style={{ width:28,height:28,borderRadius:8,background:'rgba(255,255,255,.18)',
                    border:'1px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',
                    justifyContent:'center',textDecoration:'none',flexShrink:0 }}>
                  <ArrowUpRight size={12} color="#fff"/>
                </Link>
              </div>
            </div>

            {/* Right of tall — top: E-commerce, bottom: Startup */}
            <div className="tpl-card b-half fade-up" style={{ minHeight:145,animationDelay:'.12s' }}>
              <div className="img-wrap">
                <img src="/template/ecommerce.jpg" alt="E-commerce Store" loading="lazy" decoding="async" width={480} height={180}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/e-commerce" className="preview-btn" target="_blank" rel="noopener noreferrer">
                Live preview <ExternalLink size={9}/>
              </a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>E-COMMERCE</div>
                  <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>Online Store</div>
                </div>
                <Link to="/templates/ecommerce-template" onClick={e=>e.stopPropagation()}
                  style={{ width:26,height:26,borderRadius:7,background:'rgba(255,255,255,.18)',
                    border:'1px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',
                    justifyContent:'center',textDecoration:'none',flexShrink:0 }}>
                  <ArrowUpRight size={11} color="#fff"/>
                </Link>
              </div>
            </div>

            <div className="tpl-card b-half fade-up" style={{ minHeight:145,animationDelay:'.16s' }}>
              <div className="img-wrap">
                <img src="/template/startup.jpg" alt="Startup Landing Page" loading="lazy" decoding="async" width={480} height={180}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/startup" className="preview-btn" target="_blank" rel="noopener noreferrer">
                Live preview <ExternalLink size={9}/>
              </a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>STARTUP · SAAS</div>
                  <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>Startup Landing</div>
                </div>
                <Link to="/templates/startup-template" onClick={e=>e.stopPropagation()}
                  style={{ width:26,height:26,borderRadius:7,background:'rgba(255,255,255,.18)',
                    border:'1px solid rgba(255,255,255,.3)',display:'flex',alignItems:'center',
                    justifyContent:'center',textDecoration:'none',flexShrink:0 }}>
                  <ArrowUpRight size={11} color="#fff"/>
                </Link>
              </div>
            </div>

            {/* Bottom row — Real Estate, Portfolio, Soccer, CTA */}
            <div className="tpl-card b-third fade-up" style={{ minHeight:160,animationDelay:'.2s' }}>
              <div className="img-wrap">
                <img src="/houses/4.jpeg" alt="Real Estate" loading="lazy" decoding="async" width={260} height={200}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/realtor" className="preview-btn" target="_blank" rel="noopener noreferrer">Live preview <ExternalLink size={9}/></a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>REAL ESTATE</div>
                  <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>Property Listings</div>
                </div>
              </div>
            </div>

            <div className="tpl-card b-third fade-up" style={{ minHeight:160,animationDelay:'.24s' }}>
              <div className="img-wrap">
                <img src="/template/portfolio.jpg" alt="Portfolio" loading="lazy" decoding="async" width={260} height={200}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/portfolio" className="preview-btn" target="_blank" rel="noopener noreferrer">Live preview <ExternalLink size={9}/></a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>PORTFOLIO</div>
                  <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>Portfolio Site</div>
                </div>
              </div>
            </div>

            <div className="tpl-card b-third fade-up" style={{ minHeight:160,animationDelay:'.28s' }}>
              <div className="img-wrap">
                <img src="/template/soccersite.jpg" alt="Soccer Club" loading="lazy" decoding="async" width={260} height={200}
                  onLoad={e=>e.currentTarget.parentElement.classList.add('loaded')}/>
              </div>
              <div className="overlay"/>
              <a href="#/soccer" className="preview-btn" target="_blank" rel="noopener noreferrer">Live preview <ExternalLink size={9}/></a>
              <div className="card-info">
                <div>
                  <div style={{ fontSize:9,color:'rgba(255,255,255,.55)',fontWeight:700,letterSpacing:'.08em',marginBottom:2 }}>SPORTS</div>
                  <div style={{ fontSize:13,fontWeight:700,color:'#fff' }}>Soccer Club</div>
                </div>
              </div>
            </div>

          </div>{/* end bento */}
        </section>

        {/* ══════════════════════════════════
            BRANDING SECTION
        ══════════════════════════════════ */}
        <section aria-label="Branding samples" style={{ position:'relative',zIndex:1,maxWidth:1160,margin:'0 auto',padding:'36px 16px' }}>
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16,flexWrap:'wrap',gap:10 }}>
            <div>
              <p style={{ fontSize:11,fontWeight:700,color:'#F59E0B',letterSpacing:'.1em',marginBottom:4 }}>BRANDING</p>
              <h2 style={{ fontSize:'clamp(1.1rem,3vw,1.5rem)',fontWeight:800,color:'#1F2937',letterSpacing:'-.02em' }}>
                Logo & Brand Identity
              </h2>
            </div>
          </div>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))',gap:10 }}>
            {BRAND_SAMPLES.map((b,i)=>(
              <Link to={`/templates/${b.id}`} key={b.id} className="hover-lift"
                style={{ borderRadius:14,overflow:'hidden',border:'1.5px solid rgba(109,40,217,.1)',
                  background:'#F9F9FF',aspectRatio:'1',display:'flex',
                  alignItems:'center',justifyContent:'center',textDecoration:'none',
                  animationDelay:`${i*0.06}s` }}>
                <img src={b.thumb} alt={b.name} loading="lazy" decoding="async"
                  width={160} height={160} style={{ width:'100%',height:'100%',objectFit:'contain',padding:14 }}/>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════
            WHAT'S INCLUDED — now user knows
            what they're buying, post-visuals
        ══════════════════════════════════ */}
        <section aria-label="Service details" style={{ position:'relative',zIndex:1,
          background:'rgba(242, 241, 240)',borderTop:'1px solid rgba(109,40,217,.07)',
          borderBottom:'1px solid rgba(109,40,217,.07)',padding:'44px 16px' }}>
          <div style={{ maxWidth:1160,margin:'0 auto' }}>
            <p style={{ fontSize:11,fontWeight:700,color:'#6D28D9',letterSpacing:'.1em',marginBottom:8 }}>WHAT'S INCLUDED</p>
            <h2 style={{ fontSize:'clamp(1.2rem,3vw,1.7rem)',fontWeight:800,color:'#1F2937',
              letterSpacing:'-.02em',marginBottom:28 }}>
              Every project comes with
            </h2>

            <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:16 }}>
              {SERVICE_DETAILS.map(svc=>(
                <div key={svc.title} className="hover-lift" style={{
                  background:'#fff',borderRadius:18,padding:'24px',
                  border:`1.5px solid ${svc.color}22`,
                  boxShadow:`0 2px 14px ${svc.color}0a`,
                }}>
                  <h3 style={{ fontSize:15,fontWeight:700,color:'#1F2937',marginBottom:16 }}>{svc.title}</h3>
                  <div style={{ display:'flex',flexWrap:'wrap',gap:7 }}>
                    {svc.features.map(f=>(
                      <span key={f} className="feat-chip"
                        style={{ background:svc.colorLight,color:svc.color,border:`1px solid ${svc.color}20` }}>
                        <CheckCircle size={10} strokeWidth={2.5}/>{f}
                      </span>
                    ))}
                  </div>
                  <a href="#/Contact-me" style={{
                    display:'inline-flex',alignItems:'center',gap:6,marginTop:18,
                    background:`linear-gradient(135deg,${svc.color},${svc.color}cc)`,
                    color:'#fff',padding:'9px 18px',borderRadius:99,
                    fontWeight:700,fontSize:12,textDecoration:'none',
                  }}>
                    Get started <ArrowRight size={12}/>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            CTA BANNER
        ══════════════════════════════════ */}
        <div style={{ position:'relative',zIndex:1,maxWidth:1160,margin:'0 auto',padding:'36px 16px 48px' }}>
          <div style={{
            background:'linear-gradient(135deg,#6D28D9,#8B5CF6 55%,#06B6D4)',
            borderRadius:22,padding:'clamp(28px,5vw,48px) clamp(20px,5vw,56px)',
            display:'flex',flexWrap:'wrap',alignItems:'center',
            justifyContent:'space-between',gap:20,
            position:'relative',overflow:'hidden',
          }}>
            <svg aria-hidden="true" style={{ position:'absolute',right:0,top:0,opacity:.1,pointerEvents:'none' }} width="220" height="160">
              <polygon points="110,8 210,60 210,140 110,155 10,140 10,60" fill="none" stroke="#fff" strokeWidth="1.5"/>
              <polygon points="110,28 180,68 180,128 110,140 40,128 40,68" fill="none" stroke="#fff" strokeWidth="0.7"/>
            </svg>
            <div style={{ position:'relative',zIndex:1 }}>
              <h2 style={{ fontSize:'clamp(1.3rem,3vw,2rem)',fontWeight:800,color:'#fff',
                letterSpacing:'-.02em',lineHeight:1.15,marginBottom:8 }}>
                Ready to build yours?
              </h2>
              <p style={{ color:'rgba(255,255,255,.78)',fontSize:14 }}>
                Custom site, custom price. Let's talk.
              </p>
            </div>
            <a href="#/Contact-me" style={{
              display:'inline-flex',alignItems:'center',gap:8,
              background:'#fff',color:'#6D28D9',
              padding:'12px 28px',borderRadius:99,fontWeight:800,
              fontSize:14,textDecoration:'none',flexShrink:0,
              boxShadow:'0 6px 24px rgba(0,0,0,.14)',
              transition:'transform .2s',position:'relative',zIndex:1,
            }} onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
               onMouseLeave={e=>e.currentTarget.style.transform=''}>
              Book a free call <ArrowRight size={15}/>
            </a>
          </div>
        </div>

      </div>
      <BottomTabBar/>
    </>
  );
}

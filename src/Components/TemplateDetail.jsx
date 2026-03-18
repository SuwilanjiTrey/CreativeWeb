import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import BottomTabBar from './shared/BottomTabBar.jsx';

const templates = {
  'agency-template':     { name:'Agency Landing Page',   desc:'Modern, sleek design for digital agencies',  image:'/template/Agency.jpg',    demo:'#/testing',    category:'Web Design' },
  'real-estate-template':{ name:'Real Estate Landing',   desc:'Elegant layout for real estate professionals',image:'/houses/4.jpeg',          demo:'#/realtor',    category:'Web Design' },
  'soccer-template':     { name:'Football Fan/Manager',  desc:'Dynamic platform for soccer clubs',          image:'/template/soccersite.jpg', demo:'#/soccer',     category:'Web Design' },
  'ecommerce-template':  { name:'E-Commerce Platform',   desc:'High-converting online store template',      image:'/template/ecommerce.jpg',  demo:'#/e-commerce', category:'Web Design' },
  'startup-template':    { name:'Startup Landing Page',  desc:'Vibrant design for tech startups',           image:'/template/startup.jpg',    demo:'#/startup',    category:'Web Design' },
  'portfolio-template':  { name:'Portfolio Website',     desc:'Clean, minimalist portfolio showcase',       image:'/template/portfolio.jpg',  demo:'#/portfolio',  category:'Web Design' },
};

const features = ['Responsive Design','Dark/Light Mode','Performance Optimised','Easy Customisation','SEO Ready','Accessible'];

/* ── SVG bg ── */
const BlobBg = () => (
  <svg aria-hidden="true" focusable="false"
    style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0,overflow:'visible' }}>
    <defs>
      <radialGradient id="tdg1"><stop offset="0%" stopColor="#6D28D9" stopOpacity="0.1"/><stop offset="100%" stopColor="#6D28D9" stopOpacity="0"/></radialGradient>
      <radialGradient id="tdg2"><stop offset="0%" stopColor="#06B6D4" stopOpacity="0.09"/><stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="5%"  cy="15%" rx="40%" ry="32%" fill="url(#tdg1)"/>
    <ellipse cx="95%" cy="85%" rx="36%" ry="28%" fill="url(#tdg2)"/>
  </svg>
);

export default function TemplateDetail() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const tmpl = templates[templateId];

  if (!tmpl) return (
    <div style={{ minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',
      justifyContent:'center',gap:20,fontFamily:'system-ui,sans-serif',color:'#1F2937' }}>
      <h1 style={{ fontSize:28,fontWeight:800 }}>Template not found</h1>
      <Link to="/services" style={{ color:'#6D28D9',fontWeight:700,textDecoration:'none' }}>← Back to Services</Link>
    </div>
  );

  return (
    <>
      <style>{`
        :root{--primary:#6D28D9;--secondary:#8B5CF6;--complement:#06B6D4;--accent:#F59E0B;--neutral:#1F2937}
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#fff;color:#1F2937;font-family:'Segoe UI',system-ui,sans-serif}
        .page-wrap{padding-bottom:80px;min-height:100vh}
        img{display:block;max-width:100%}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .6s ease both}
      `}</style>

      {/* NAV */}
      <nav role="navigation" aria-label="Site navigation"
        style={{ position:'sticky',top:0,zIndex:50,background:'rgba(255,255,255,0.95)',
          backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(109,40,217,.1)',padding:'0 20px' }}>
        <div style={{ maxWidth:1100,margin:'0 auto',height:60,display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <a href="#/" style={{ fontSize:20,fontWeight:800,textDecoration:'none',
            background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
            CreativeWeb
          </a>
          <button onClick={() => navigate('/services')}
            style={{ display:'flex',alignItems:'center',gap:6,border:'none',background:'none',
              cursor:'pointer',color:'#6D28D9',fontWeight:700,fontSize:13 }}>
            <ArrowLeft size={16}/> All Services
          </button>
        </div>
      </nav>

      <div className="page-wrap" style={{ position:'relative',overflow:'hidden' }}>
        <BlobBg/>

        {/* Breadcrumb */}
        <div style={{ position:'relative',zIndex:1,maxWidth:1000,margin:'0 auto',padding:'20px 20px 0' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize:12,color:'#9CA3AF' }}>
            <Link to="/services" style={{ color:'#6D28D9',textDecoration:'none',fontWeight:600 }}>Services</Link>
            {' / '}
            <span style={{ color:'#9CA3AF' }}>{tmpl.name}</span>
          </nav>
        </div>

        {/* Main card */}
        <main style={{ position:'relative',zIndex:1,maxWidth:1000,margin:'24px auto 60px',padding:'0 20px' }}>
          <article style={{ background:'#fff',borderRadius:24,overflow:'hidden',
            border:'1.5px solid rgba(109,40,217,.1)',boxShadow:'0 8px 48px rgba(109,40,217,.1)' }}>

            {/* Hero image */}
            <div style={{ position:'relative',height:'clamp(220px,40vw,480px)',overflow:'hidden' }}>
              <img
                src={tmpl.image}
                alt={`${tmpl.name} preview`}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                width={1000}
                height={480}
                style={{ width:'100%',height:'100%',objectFit:'cover' }}
              />
              <div style={{ position:'absolute',inset:0,
                background:'linear-gradient(to bottom,transparent 50%,rgba(0,0,0,.4))' }}/>
              <div style={{ position:'absolute',bottom:20,left:24 }}>
                <span style={{ background:'rgba(109,40,217,.9)',color:'#fff',fontSize:11,fontWeight:700,
                  padding:'4px 12px',borderRadius:99,letterSpacing:'.06em' }}>
                  {tmpl.category.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding:'36px' }}>
              <h1 className="fade-up" style={{ fontSize:'clamp(1.6rem,3.5vw,2.4rem)',fontWeight:800,
                color:'#1F2937',letterSpacing:'-.02em',marginBottom:10 }}>
                {tmpl.name}
              </h1>
              <p style={{ color:'#6B7280',fontSize:15,lineHeight:1.7,marginBottom:32,maxWidth:600 }}>
                {tmpl.desc}
              </p>

              <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:32 }}>
                {/* Features */}
                <div>
                  <h2 style={{ fontSize:14,fontWeight:700,color:'#9CA3AF',letterSpacing:'.07em',marginBottom:16 }}>
                    INCLUDED FEATURES
                  </h2>
                  <ul style={{ listStyle:'none',display:'flex',flexDirection:'column',gap:10 }}>
                    {features.map(f => (
                      <li key={f} style={{ display:'flex',alignItems:'center',gap:10 }}>
                        <CheckCircle size={16} color="#6D28D9" strokeWidth={2.5}/>
                        <span style={{ fontSize:14,color:'#1F2937',fontWeight:500 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTAs */}
                <div style={{ display:'flex',flexDirection:'column',gap:12,justifyContent:'center' }}>
                  <a href={tmpl.demo} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                      background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',color:'#fff',
                      padding:'14px 24px',borderRadius:12,fontWeight:700,fontSize:15,
                      textDecoration:'none',boxShadow:'0 8px 24px rgba(109,40,217,.28)',
                      transition:'transform .2s' }}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
                    onMouseLeave={e=>e.currentTarget.style.transform=''}>
                    <ExternalLink size={17}/> View Live Demo
                  </a>
                  <a href="#/Contact-me"
                    style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                      background:'#F59E0B',color:'#fff',padding:'14px 24px',borderRadius:12,
                      fontWeight:700,fontSize:15,textDecoration:'none',transition:'transform .2s' }}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.03)'}
                    onMouseLeave={e=>e.currentTarget.style.transform=''}>
                    Request This Template
                  </a>
                  <Link to="/services"
                    style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:6,
                      border:'1.5px solid rgba(109,40,217,.2)',color:'#6D28D9',padding:'13px 24px',
                      borderRadius:12,fontWeight:700,fontSize:14,textDecoration:'none',
                      background:'rgba(109,40,217,.04)',transition:'all .2s' }}>
                    <ArrowLeft size={15}/> Browse All Templates
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>

      <BottomTabBar/>
    </>
  );
}

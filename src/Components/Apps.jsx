//components/Apps.jsx
import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Globe, ChevronRight, Mail, BriefcaseBusiness, Building2, Rocket, Landmark } from 'lucide-react';
import BottomTabBar from './shared/BottomTabBar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faAndroid, faGooglePlay, faAppStore } from '@fortawesome/free-brands-svg-icons';
import { faFutbol, faBasketShopping } from '@fortawesome/free-solid-svg-icons';

/* ── OS Detection ── */
function detectOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera || '';
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
  if (/android/i.test(ua)) return 'android';
  return 'other';
}

/* ── SVG Blob Background ── */
const BlobBg = () => (
  <svg aria-hidden="true" focusable="false"
    style={{ position:'absolute',inset:0,width:'100%',height:'100%',
      pointerEvents:'none',zIndex:0,overflow:'visible' }}>
    <defs>
      <radialGradient id="ag1"><stop offset="0%" stopColor="#6D28D9" stopOpacity="0.13"/><stop offset="100%" stopColor="#6D28D9" stopOpacity="0"/></radialGradient>
      <radialGradient id="ag2"><stop offset="0%" stopColor="#06B6D4" stopOpacity="0.11"/><stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/></radialGradient>
      <radialGradient id="ag3"><stop offset="0%" stopColor="#F59E0B" stopOpacity="0.09"/><stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/></radialGradient>
      <radialGradient id="ag4"><stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.10"/><stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="8%"  cy="18%" rx="42%" ry="34%" fill="url(#ag1)"/>
    <ellipse cx="92%" cy="22%" rx="36%" ry="30%" fill="url(#ag2)"/>
    <ellipse cx="55%" cy="80%" rx="44%" ry="30%" fill="url(#ag3)"/>
    <ellipse cx="5%"  cy="88%" rx="28%" ry="22%" fill="url(#ag4)"/>
  </svg>
);

/* ── Store Badges ── */
const AppleBadge = ({ disabled }) => (
  <button disabled={disabled}
    style={{ display:'inline-flex',alignItems:'center',gap:12,
      background: disabled ? '#E5E7EB' : '#1F2937',
      color: disabled ? '#9CA3AF' : '#fff',
      border:'none',borderRadius:14,padding:'12px 22px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: disabled ? 'none' : '0 6px 20px rgba(0,0,0,.18)',
      position:'relative', minWidth:180,
      transition:'transform .2s,box-shadow .2s' }}
    onMouseEnter={e=>{ if(!disabled){ e.currentTarget.style.transform='scale(1.04)'; }}}
    onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}>
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
      <path d="M18.066 13.816c-.03-3.26 2.664-4.84 2.785-4.917-1.52-2.22-3.882-2.524-4.716-2.553-2-.205-3.918 1.19-4.935 1.19-1.02 0-2.587-1.165-4.261-1.133-2.183.033-4.203 1.283-5.322 3.24-2.27 3.94-.58 9.763 1.632 12.956 1.08 1.567 2.365 3.323 4.044 3.26 1.626-.066 2.235-1.047 4.198-1.047 1.963 0 2.52 1.047 4.232 1.012 1.748-.03 2.854-1.584 3.924-3.157 1.24-1.81 1.75-3.564 1.78-3.657-.04-.016-3.41-1.308-3.44-5.194z" fill={disabled?'#9CA3AF':'white'}/>
      <path d="M14.752 4.48C15.64 3.4 16.24 1.91 16.07.4c-1.304.056-2.88.87-3.81 1.966-.836.966-1.57 2.51-1.372 3.99 1.456.112 2.945-.74 3.864-1.876z" fill={disabled?'#9CA3AF':'white'}/>
    </svg>
    <div style={{ textAlign:'left' }}>
      <div style={{ fontSize:9,fontWeight:500,opacity:.75,letterSpacing:'.04em' }}>
        {disabled ? 'COMING SOON' : 'DOWNLOAD ON THE'}
      </div>
      <div style={{ fontSize:16,fontWeight:700,lineHeight:1.1 }}>App Store</div>
    </div>
    {disabled && (
      <span style={{ position:'absolute',top:-7,right:-7,background:'#F59E0B',color:'#fff',
        fontSize:9,fontWeight:800,padding:'2px 7px',borderRadius:99 }}>SOON</span>
    )}
  </button>
);

const PlayBadge = ({ disabled }) => (
  <button disabled={disabled}
    style={{ display:'inline-flex',alignItems:'center',gap:12,
      background: disabled ? '#E5E7EB' : '#1F2937',
      color: disabled ? '#9CA3AF' : '#fff',
      border:'none',borderRadius:14,padding:'12px 22px',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: disabled ? 'none' : '0 6px 20px rgba(0,0,0,.18)',
      position:'relative', minWidth:180,
      transition:'transform .2s' }}
    onMouseEnter={e=>{ if(!disabled){ e.currentTarget.style.transform='scale(1.04)'; }}}
    onMouseLeave={e=>{ e.currentTarget.style.transform=''; }}>
    <svg width="20" height="22" viewBox="0 0 22 24" fill="none">
      <path d="M1.22 0.396C0.852 0.771 0.63 1.354 0.63 2.107V21.893C0.63 22.646 0.852 23.229 1.22 23.604L1.315 23.696L12.626 12.386V12.107L1.315 0.303L1.22 0.396Z" fill={disabled?'#9CA3AF':'#4FC3F7'}/>
      <path d="M16.472 16.234L12.626 12.386V12.107L16.472 8.259L16.586 8.323L21.169 10.922C22.458 11.651 22.458 12.842 21.169 13.572L16.586 16.171L16.472 16.234Z" fill={disabled?'#9CA3AF':'#FFCA28'}/>
      <path d="M16.587 16.17L12.626 12.247L1.22 23.604C1.652 24.062 2.364 24.119 3.163 23.663L16.587 16.17Z" fill={disabled?'#9CA3AF':'#F44336'}/>
      <path d="M16.587 8.323L3.163 0.83C2.364 0.375 1.652 0.432 1.22 0.89L12.626 12.247L16.587 8.323Z" fill={disabled?'#9CA3AF':'#4CAF50'}/>
    </svg>
    <div style={{ textAlign:'left' }}>
      <div style={{ fontSize:9,fontWeight:500,opacity:.75,letterSpacing:'.04em' }}>
        {disabled ? 'COMING SOON' : 'GET IT ON'}
      </div>
      <div style={{ fontSize:16,fontWeight:700,lineHeight:1.1 }}>Google Play</div>
    </div>
    {disabled && (
      <span style={{ position:'absolute',top:-7,right:-7,background:'#F59E0B',color:'#fff',
        fontSize:9,fontWeight:800,padding:'2px 7px',borderRadius:99 }}>SOON</span>
    )}
  </button>
);

/* ── App data ── */
const apps = [
  {
    id: 'truth-storage',
    name: 'Truth Storage',
    tagline: 'Your Vision, Enhanced',
    desc: 'A sleek dark-mode AI-powered app with animated transitions and intelligent navigation. Built cross-platform with React Native.',
    category: 'Productivity',
    status: 'live',
    platforms: ['ios', 'android'],
    icon: '🔮',
    image: '/cloud.jpg',
    iconBg: 'linear-gradient(135deg,#6D28D9,#8B5CF6)',
    tech: ['React Native', 'AI Integration', 'Framer Motion'],
    color: '#6D28D9',
    downloadable: true,
    path: '/apps/TruthStorage.apk'
  },
  {
    id: 'creativeweb-companion',
    name: 'CreativeWeb Companion',
    tagline: 'Your projects, in your pocket',
    desc: 'Browse your portfolio, share projects with clients, and get real-time update notifications — all from your phone.',
    category: 'Business',
    status: 'in-development',
    platforms: ['android'],
    icon: '🌐',
    iconBg: '#040B23',
    tech: ['React Native', 'Firebase', 'Push Notifications'],
    color: '#06B6D4',
    downloadable: false
  },
  {
    id: 'websnap',
    name: 'WebSnap Viewer',
    tagline: 'Preview web templates on mobile',
    desc: 'Instantly preview web templates on your device. Annotate screens, share feedback with clients, and export reports.',
    category: 'Developer Tools',
    status: 'planned',
    platforms: ['ios', 'android'],
    icon: '📱',
    iconBg: 'linear-gradient(135deg,#F59E0B,#D97706)',
    tech: ['React Native', 'WebView', 'Cloud Storage'],
    color: '#F59E0B',
    downloadable: false
  },
];

const statusConfig = {
  'coming-soon':    { label:'Coming Soon',    bg:'#FEF3C7', color:'#D97706', dot:'#F59E0B' },
  'in-development': { label:'In Development', bg:'#EDE9FE', color:'#6D28D9', dot:'#8B5CF6' },
  'planned':        { label:'Planned',         bg:'#E0F2FE', color:'#0369A1', dot:'#06B6D4' },
  'live':           { label:'Live',            bg:'#D1FAE5', color:'#065F46', dot:'#10B981' },
};

export default function AppsPage() {
  const [os, setOs] = useState('other');
  const [notified, setNotified] = useState({});

  useEffect(() => { setOs(detectOS()); }, []);

  const showApple   = os === 'ios'     || os === 'other';
  const showAndroid = os === 'android' || os === 'other';

  const handleNotify = (app) => {
    setNotified(p => ({ ...p, [app.id]: true }));
    const msg = encodeURIComponent(`Hi! I'd love to be notified when ${app.name} launches on the app store 🚀`);
    window.open(`https://wa.me/+260971168716?text=${msg}`, '_blank', 'noopener noreferrer');
  };

  return (
    <>
      <style>{`
        :root{--primary:#6D28D9;--secondary:#8B5CF6;--complement:#06B6D4;--accent:#F59E0B;--neutral:#1F2937}
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#fff;color:#1F2937;font-family:'Segoe UI',system-ui,sans-serif}
        .page-wrap{padding-bottom:88px;min-height:100vh}
        @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .6s ease both}
        .app-card{transition:transform .25s cubic-bezier(.4,0,.2,1),box-shadow .25s}
        .app-card:hover{transform:translateY(-5px);box-shadow:0 16px 44px rgba(109,40,217,.12)}
        .web-link{transition:all .2s}
        .web-link:hover{transform:translateY(-2px)}
      `}</style>

      {/* ── NAV ── */}
      <nav aria-label="Site navigation"
        style={{ position:'sticky',top:0,zIndex:50,background:'rgba(255,255,255,0.95)',
          backdropFilter:'blur(16px)',WebkitBackdropFilter:'blur(16px)',
          borderBottom:'1px solid rgba(109,40,217,.1)',padding:'0 20px' }}>
        <div style={{ maxWidth:1100,margin:'0 auto',height:60,display:'flex',
          alignItems:'center',justifyContent:'space-between' }}>
          <a href="#/" style={{ fontSize:20,fontWeight:800,textDecoration:'none',
            background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
            CreativeWeb
          </a>
          <a href="#/Contact-me" style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',
            color:'#fff',padding:'8px 20px',borderRadius:99,fontSize:13,fontWeight:700,textDecoration:'none' }}>
            Contact
          </a>
        </div>
      </nav>

      <div className="page-wrap" style={{ position:'relative',overflow:'hidden' }}>
        <BlobBg/>

        {/* ── HERO ── */}
        <header style={{ position:'relative',zIndex:1,textAlign:'center',padding:'60px 20px 52px' }}>
          <div className="fade-up" style={{ display:'inline-flex',alignItems:'center',gap:7,
            background:'rgba(109,40,217,.08)',border:'1px solid rgba(109,40,217,.18)',
            borderRadius:99,padding:'6px 16px',marginBottom:24 }}>
            <Smartphone size={13} color="#6D28D9"/>
            <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.05em' }}>
              {os === 'ios' ? 'iOS Apps' : os === 'android' ? 'Android Apps' : 'Mobile Apps'}
            </span>
          </div>

          <h1 className="fade-up" style={{ fontSize:'clamp(2rem,5vw,3.4rem)',fontWeight:800,
            color:'#1F2937',letterSpacing:'-.025em',lineHeight:1.1,animationDelay:'.1s' }}>
            Apps Built for{' '}
            <span style={{ background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              Real People
            </span>
          </h1>
          <p className="fade-up" style={{ marginTop:16,color:'#6B7280',fontSize:16,
            maxWidth:500,marginInline:'auto',lineHeight:1.7,animationDelay:'.2s' }}>
            Mobile apps built with React Native — cross-platform, performant, and crafted with
            the same attention to detail as my web work.
          </p>
          {os !== 'other' && (
            <p className="fade-up" style={{ marginTop:14,fontSize:12,color:'#6B7280',animationDelay:'.3s' }}>
              🎯 Detected:{' '}
              <strong style={{ color:'#6D28D9' }}>{os === 'ios' ? 'iOS / iPhone' : 'Android'}</strong>
              {' '}— showing relevant store options
            </p>
          )}
        </header>

        {/* ── STORE BANNER ── */}
        <div style={{ position:'relative',zIndex:1,maxWidth:680,margin:'0 auto 56px',padding:'0 20px' }}>
          <div style={{ background:'linear-gradient(135deg,#1F2937,#374151)',borderRadius:24,padding:'32px',textAlign:'center' }}>
            <p style={{ fontSize:11,fontWeight:700,color:'#6B7280',letterSpacing:'.08em',marginBottom:6 }}>AVAILABLE ON</p>
            <p style={{ fontSize:18,fontWeight:800,color:'#fff',marginBottom:24 }}>Store listings coming soon</p>
            <div style={{ display:'flex',flexWrap:'wrap',gap:14,justifyContent:'center' }}>
              {showApple   && <AppleBadge disabled/>}
              {showAndroid && <PlayBadge  disabled/>}
            </div>
            <p style={{ fontSize:12,color:'#6B7280',marginTop:16,lineHeight:1.6 }}>
              Developer accounts are being set up.{' '}
              <a href="#/Contact-me" style={{ color:'#8B5CF6',fontWeight:600,textDecoration:'none' }}>
                Get notified when apps launch →
              </a>
            </p>
          </div>
        </div>

        {/* ── APP CARDS ── */}
        <section aria-label="App products"
          style={{ position:'relative',zIndex:1,maxWidth:1100,margin:'0 auto',padding:'0 20px 60px' }}>
          <h2 style={{ fontSize:'clamp(1.3rem,3vw,1.8rem)',fontWeight:800,color:'#1F2937',
            letterSpacing:'-.02em',marginBottom:28 }}>
            Products in the Pipeline
          </h2>

          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:24 }}>
            {apps.map((app, i) => {
              const st = statusConfig[app.status];
              const done = notified[app.id];
              return (
                <article key={app.id} className="app-card"
                  style={{ background:'#fff',borderRadius:22,border:'1.5px solid rgba(109,40,217,.1)',
                    padding:'28px',boxShadow:'0 4px 20px rgba(109,40,217,.06)',
                    animationDelay:`${i * 0.08}s` }}>

                  {/* Header row */}
                  <div style={{ display:'flex',gap:14,alignItems:'flex-start',marginBottom:16 }}>
                    <div style={{ width:60,height:60,borderRadius:16,flexShrink:0,
                      background:app.iconBg,display:'flex',alignItems:'center',justifyContent:'center',
                      fontSize:26,boxShadow:`0 6px 18px ${app.color}30` }}>
                      {app.image ?
                        <img
                        	src={app.image}
                        	alt={app.name}
                        	style={{borderRadius:20}}
                        />
                      	:
                      	app.icon
                      }
                    </div>
                    <div>
                      <div style={{ display:'flex',alignItems:'center',flexWrap:'wrap',gap:7,marginBottom:4 }}>
                        <h3 style={{ fontSize:17,fontWeight:800,color:'#1F2937' }}>{app.name}</h3>
                        <span style={{ fontSize:10,fontWeight:700,padding:'3px 9px',borderRadius:99,
                          background:st.bg,color:st.color,display:'inline-flex',alignItems:'center',gap:4 }}>
                          <span style={{ width:5,height:5,borderRadius:'50%',background:st.dot,display:'inline-block' }}/>
                          {st.label}
                        </span>
                      </div>
                      <p style={{ fontSize:12,color:app.color,fontWeight:600 }}>{app.tagline}</p>
                    </div>
                  </div>

                  {/* Chips */}
                  <div style={{ display:'flex',gap:7,marginBottom:14,flexWrap:'wrap' }}>
                    <span style={{ fontSize:11,fontWeight:600,padding:'3px 10px',borderRadius:99,
                      background:'#F3F4F6',color:'#4B5563' }}>{app.category}</span>
                    {app.platforms.map(p => (
                      <span key={p} style={{ fontSize:11,fontWeight:600,padding:'3px 10px',borderRadius:99,
                        background:`${app.color}10`,color:app.color }}>
                        {p === 'ios' ? 
                        <p>
                          IOS <FontAwesomeIcon icon={faApple} />  
                        </p>                     
                        : 
                        <p>
                         Android <FontAwesomeIcon icon={faAndroid} /> 
                        </p>
                         }
                      </span>
                    ))}
                  </div>

                  <p style={{ fontSize:13,color:'#6B7280',lineHeight:1.7,marginBottom:16 }}>{app.desc}</p>

                  {/* Tech tags */}
                  <div style={{ display:'flex',flexWrap:'wrap',gap:6,marginBottom:20 }}>
                    {app.tech.map(t => (
                      <span key={t} style={{ fontSize:10,fontWeight:700,padding:'3px 9px',borderRadius:99,
                        border:`1px solid ${app.color}25`,color:app.color,letterSpacing:'.03em' }}>{t}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div style={{ borderTop:'1px solid rgba(109,40,217,.08)',paddingTop:16 }}>
                    {/* Mini disabled store buttons */}
					<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
					  {/* Apple Store Button */}
					  {app.platforms.includes('ios') && showApple && (
						<span
						  style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 5,
							background: '#F3F4F6',
							borderRadius: 9,
							padding: '6px 12px',
							fontSize: 11,
							fontWeight: 700,
							color: '#9CA3AF',
						  }}
						>
						  <FontAwesomeIcon icon={faAppStore} /> App Store — Soon
						</span>
					  )}

					  {/* Android / Google Play Button */}
					  {app.platforms.includes('android') && showAndroid && (
						<span
						  style={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 5,
							background: '#068ec4',
							borderRadius: 9,
							padding: '6px 12px',
							fontSize: 11,
							fontWeight: 700,
							color: 'white',
						  }}
						>
						  {app.downloadable ? (
							<a href={app.path} download style={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
							  <Download size={13} />
							  <span style={{ marginLeft: 5 }}>Download APK</span>
							</a>
						  ) : (
							<>
							  <FontAwesomeIcon icon={faGooglePlay} /> Google Play — Soon
							</>
						  )}
						</span>
					  )}
					</div>
                    {done ? (
                      <p style={{ fontSize:12,color:'#10B981',fontWeight:700 }}>✓ We'll notify you at launch!</p>
                    ) : (
                      <button onClick={() => handleNotify(app)}
                        style={{ display:'inline-flex',alignItems:'center',gap:7,
                          background:'none',border:`1.5px solid ${app.color}30`,
                          color:app.color,borderRadius:10,padding:'8px 14px',
                          cursor:'pointer',fontSize:12,fontWeight:700,transition:'all .2s' }}
                        onMouseEnter={e=>{e.currentTarget.style.background=`${app.color}0e`;e.currentTarget.style.borderColor=app.color}}
                        onMouseLeave={e=>{e.currentTarget.style.background='none';e.currentTarget.style.borderColor=`${app.color}30`}}>
                        <Download size={13}/> Notify me at launch
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── WEB PROJECTS STRIP ── */}
        <section aria-label="Web projects"
          style={{ background:'#FAFAFA',borderTop:'1px solid rgba(109,40,217,.08)',padding:'52px 20px 56px' }}>
          <div style={{ maxWidth:1100,margin:'0 auto' }}>
            <div style={{ display:'flex',justifyContent:'space-between',alignItems:'center',
              flexWrap:'wrap',gap:12,marginBottom:24 }}>
              <div>
                <h2 style={{ fontSize:'clamp(1.3rem,3vw,1.8rem)',fontWeight:800,color:'#1F2937',letterSpacing:'-.02em' }}>
                  Web Projects
                </h2>
                <p style={{ fontSize:13,color:'#6B7280',marginTop:4 }}>Live — preview right now on your device</p>
              </div>
              <a href="#/services" style={{ display:'inline-flex',alignItems:'center',gap:5,
                color:'#6D28D9',fontWeight:700,fontSize:13,textDecoration:'none' }}>
                All services <ChevronRight size={14}/>
              </a>
            </div>

            <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))',gap:14 }}>
              {[
                { name:'Agency Landing Page',   path:'#/testing',    icon:<Landmark size={30}/>, color:'#6D28D9' },
                { name:'Real Estate Landing page',      path:'#/realtor',    icon:<Building2 size={30} />, color:'#06B6D4' },
                { name:'Soccer Club',      path:'#/soccer',     icon:<FontAwesomeIcon icon={faFutbol} />, color:'#10B981' },
                { name:'E-commerce Store', path:'#/e-commerce', icon:<FontAwesomeIcon icon={faBasketShopping} />, color:'#F59E0B' },
                { name:'Startup Landing page',  path:'#/startup',    icon:<Rocket size={30}/>, color:'#8B5CF6' },
                { name:'Portfolio template',        path:'#/portfolio',  icon:<BriefcaseBusiness size={30}/>, color:'#EC4899' },
              ].map(w => (
                <a key={w.name} href={w.path} className="web-link"
                  style={{ display:'flex',alignItems:'center',gap:12,background:'#fff',
                    borderRadius:14,padding:'14px 16px',border:'1.5px solid rgba(109,40,217,.08)',
                    textDecoration:'none',boxShadow:'0 2px 10px rgba(0,0,0,.04)' }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=`${w.color}45`;e.currentTarget.style.boxShadow=`0 8px 24px ${w.color}15`}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(109,40,217,.08)';e.currentTarget.style.boxShadow='0 2px 10px rgba(0,0,0,.04)'}}>
                  <span style={{ fontSize:20 }}>{w.icon}</span>
                  <span style={{ flex:1,fontSize:13,fontWeight:700,color:'#1F2937' }}>{w.name}</span>
                  <Globe size={13} color={w.color}/>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div style={{ maxWidth:1100,margin:'0 auto',padding:'40px 20px 60px',position:'relative',zIndex:1 }}>
          <div style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6,#06B6D4)',
            borderRadius:24,padding:'48px 32px',textAlign:'center',alignItems:'center',justifyContent:'center' }}>
            <div style={{ fontSize:28,marginBottom:12,marginLeft:'45%' }}>
             <Mail size={40} color={'#f7fbfc'} />
            </div>
            <h2 style={{ fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:800,color:'#fff',marginBottom:12 }}>
              Want a Custom App Built?
            </h2>
            <p style={{ color:'rgba(255,255,255,.85)',fontSize:15,maxWidth:460,
              marginInline:'auto',lineHeight:1.7,marginBottom:28 }}>
              I build native-feeling mobile apps with React Native. Let's discuss your idea.
            </p>
            <a href="#/Contact-me" style={{ display:'inline-flex',alignItems:'center',gap:8,
              background:'#fff',color:'#6D28D9',padding:'13px 32px',borderRadius:99,
              fontWeight:800,fontSize:15,textDecoration:'none' }}>
              Start a Conversation <ChevronRight size={16}/>
            </a>
          </div>
        </div>
      </div>

      <BottomTabBar/>
    </>
  );
}

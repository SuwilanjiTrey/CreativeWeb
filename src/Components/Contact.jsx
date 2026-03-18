import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, MessageCircle, Phone, Clock } from 'lucide-react';
import BottomTabBar from './shared/BottomTabBar.jsx';

const WHATSAPP_NUMBER = '+260571919051';

/* ── SVG background ── */
const BlobBg = () => (
  <svg aria-hidden="true" focusable="false"
    style={{ position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:0,overflow:'visible' }}>
    <defs>
      <radialGradient id="cng1"><stop offset="0%" stopColor="#6D28D9" stopOpacity="0.13"/><stop offset="100%" stopColor="#6D28D9" stopOpacity="0"/></radialGradient>
      <radialGradient id="cng2"><stop offset="0%" stopColor="#06B6D4" stopOpacity="0.11"/><stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/></radialGradient>
      <radialGradient id="cng3"><stop offset="0%" stopColor="#F59E0B" stopOpacity="0.08"/><stop offset="100%" stopColor="#F59E0B" stopOpacity="0"/></radialGradient>
    </defs>
    <ellipse cx="8%"  cy="20%" rx="38%" ry="30%" fill="url(#cng1)"/>
    <ellipse cx="92%" cy="80%" rx="35%" ry="28%" fill="url(#cng2)"/>
    <ellipse cx="50%" cy="50%" rx="40%" ry="32%" fill="url(#cng3)"/>
  </svg>
);

const inputStyle = {
  width:'100%',padding:'12px 16px',borderRadius:12,border:'1.5px solid rgba(109,40,217,.15)',
  fontSize:14,color:'#1F2937',outline:'none',background:'#faf9ff',
  transition:'border-color .2s, box-shadow .2s',fontFamily:'inherit',
};

export default function ContactPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [status, setStatus] = useState({ done:false, ok:false, msg:'', loading:false });

  const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const sendWA = () => {
    const msg = encodeURIComponent(
      `*New Project Inquiry*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Phone:* ${form.phone||'—'}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}\n\n---\n_Sent from CreativeWeb Contact Form_`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener noreferrer');
    setStatus({ done:true, ok:true, msg:'Opening WhatsApp with your message pre-filled…', loading:false });
    setTimeout(() => {
      setForm({ name:'', email:'', phone:'', subject:'', message:'' });
      setStatus({ done:false, ok:false, msg:'', loading:false });
    }, 3500);
  };

  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ done:true, ok:false, msg:'Please fill in the required fields.', loading:false });
      return;
    }
    setStatus(p=>({...p,loading:true}));
    sendWA();
  };

  const quickLinks = [
    { icon:MessageCircle, label:'WhatsApp', sub:'Quick response guaranteed', color:'#6D28D9',
      href:`https://wa.me/${WHATSAPP_NUMBER}`, linkText:'Send Message' },
    { icon:Mail, label:'Email', sub:'Professional inquiries', color:'#06B6D4',
      href:'mailto:suwilanjichellah0228@gmail.com', linkText:'suwilanjichellah0228@gmail.com' },
    { icon:Linkedin, label:'LinkedIn', sub:'Professional network', color:'#F59E0B',
      href:'https://www.linkedin.com/in/suwilanji-chellah-01a534239', linkText:'Connect with me' },
  ];

  return (
    <>
      <style>{`
        :root{--primary:#6D28D9;--secondary:#8B5CF6;--complement:#06B6D4;--accent:#F59E0B;--neutral:#1F2937}
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#fff;color:#1F2937;font-family:'Segoe UI',system-ui,sans-serif}
        .page-wrap{padding-bottom:80px;min-height:100vh}
        textarea{resize:vertical;min-height:130px}
        input:focus,textarea:focus{border-color:#6D28D9!important;box-shadow:0 0 0 3px rgba(109,40,217,.12)!important}
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .fade-up{animation:fadeUp .6s ease both}
      `}</style>

      {/* ── NAV ── */}
      <nav role="navigation" aria-label="Site navigation"
        style={{ position:'sticky',top:0,zIndex:50,background:'rgba(255,255,255,0.95)',
          backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(109,40,217,.1)',padding:'0 20px' }}>
        <div style={{ maxWidth:1100,margin:'0 auto',height:60,display:'flex',alignItems:'center',justifyContent:'space-between' }}>
          <a href="#/" style={{ fontSize:20,fontWeight:800,textDecoration:'none',
            background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
            WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
            CreativeWeb
          </a>
          <a href="#/services"
            style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',color:'#fff',
              padding:'8px 20px',borderRadius:99,fontSize:13,fontWeight:700,textDecoration:'none' }}>
            Services
          </a>
        </div>
      </nav>

      <div className="page-wrap" style={{ position:'relative',overflow:'hidden' }}>
        <BlobBg/>

        {/* ── HEADER ── */}
        <header style={{ position:'relative',zIndex:1,textAlign:'center',padding:'56px 20px 48px' }}>
          <div className="fade-up">
            <span style={{ display:'inline-block',background:'rgba(109,40,217,.08)',
              border:'1px solid rgba(109,40,217,.2)',borderRadius:99,padding:'5px 16px',
              fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.06em',marginBottom:20 }}>
              GET IN TOUCH
            </span>
          </div>
          <h1 className="fade-up" style={{ fontSize:'clamp(2rem,5vw,3.2rem)',fontWeight:800,
            color:'#1F2937',letterSpacing:'-.02em',animationDelay:'.1s' }}>
            Let's{' '}
            <span style={{ background:'linear-gradient(135deg,#6D28D9,#06B6D4)',
              WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text' }}>
              Connect
            </span>
          </h1>
          <p className="fade-up" style={{ marginTop:14,color:'#6B7280',fontSize:16,maxWidth:480,
            marginInline:'auto',lineHeight:1.7,animationDelay:'.2s' }}>
            Have a project in mind? I'd love to hear from you and bring your vision to life.
          </p>
        </header>

        {/* ── CONTENT GRID ── */}
        <div style={{ position:'relative',zIndex:1,maxWidth:1100,margin:'0 auto',
          padding:'0 20px 60px',display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:32,alignItems:'start' }}>

          {/* Quick contacts */}
          <div style={{ display:'flex',flexDirection:'column',gap:16 }}>
            {quickLinks.map(({ icon:Icon, label, sub, color, href, linkText }) => (
              <div key={label} style={{ background:'#fff',borderRadius:20,padding:'22px 24px',
                border:'1.5px solid rgba(109,40,217,.1)',boxShadow:'0 4px 20px rgba(109,40,217,.05)',
                transition:'box-shadow .2s,transform .2s' }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow=`0 8px 32px ${color}22`;e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow='0 4px 20px rgba(109,40,217,.05)';e.currentTarget.style.transform=''}}>
                <div style={{ display:'flex',alignItems:'center',gap:14,marginBottom:12 }}>
                  <div style={{ width:44,height:44,borderRadius:12,background:`${color}14`,
                    display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0 }}>
                    <Icon size={20} color={color} strokeWidth={1.8}/>
                  </div>
                  <div>
                    <div style={{ fontWeight:700,fontSize:15,color:'#1F2937' }}>{label}</div>
                    <div style={{ fontSize:12,color:'#9CA3AF' }}>{sub}</div>
                  </div>
                </div>
                <a href={href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize:13,fontWeight:600,color:color,textDecoration:'none',
                    display:'inline-flex',alignItems:'center',gap:4 }}>
                  {linkText} <Send size={12}/>
                </a>
              </div>
            ))}

            {/* Availability */}
            <div style={{ background:'#1F2937',borderRadius:20,padding:'22px 24px',color:'#fff' }}>
              <div style={{ display:'flex',alignItems:'center',gap:12,marginBottom:14 }}>
                <div style={{ width:44,height:44,borderRadius:12,background:'rgba(245,158,11,.15)',
                  display:'flex',alignItems:'center',justifyContent:'center' }}>
                  <Clock size={20} color="#F59E0B" strokeWidth={1.8}/>
                </div>
                <div>
                  <div style={{ fontWeight:700,fontSize:15 }}>Availability</div>
                  <div style={{ fontSize:12,color:'#9CA3AF' }}>Ready for new projects</div>
                </div>
              </div>
              <div style={{ fontSize:13,color:'#D1D5DB',lineHeight:1.8 }}>
                <div>Mon – Fri: 9AM – 6PM</div>
                <div>Sat – Sun: By appointment</div>
                <div style={{ marginTop:8,color:'#6EE7B7',fontWeight:600 }}>✓ Currently accepting projects</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ background:'#fff',borderRadius:24,padding:'36px',
            border:'1.5px solid rgba(109,40,217,.12)',boxShadow:'0 8px 40px rgba(109,40,217,.08)' }}>
            <h2 style={{ fontSize:22,fontWeight:800,color:'#1F2937',marginBottom:24 }}>Send a Message</h2>

            {status.done && status.ok ? (
              <div style={{ textAlign:'center',padding:'32px 16px' }}>
                <CheckCircle size={56} color="#10B981" style={{ margin:'0 auto 16px' }}/>
                <h3 style={{ fontSize:20,fontWeight:700,color:'#1F2937',marginBottom:8 }}>Message Prepared!</h3>
                <p style={{ color:'#6B7280',fontSize:14 }}>{status.msg}</p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate aria-label="Contact form">
                {status.done && !status.ok && (
                  <div style={{ background:'#FEF2F2',border:'1px solid #FECACA',borderRadius:12,
                    padding:'12px 16px',marginBottom:20,display:'flex',alignItems:'center',gap:10 }}>
                    <AlertCircle size={18} color="#EF4444"/>
                    <span style={{ fontSize:13,color:'#DC2626' }}>{status.msg}</span>
                  </div>
                )}

                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16 }}>
                  {[
                    { name:'name',    label:'Name *',   type:'text', ph:'Your full name',          required:true },
                    { name:'email',   label:'Email *',  type:'email',ph:'your@email.com',          required:true },
                    { name:'phone',   label:'Phone',    type:'tel',  ph:'+260 xxx xxx xxx',         required:false },
                    { name:'subject', label:'Subject',  type:'text', ph:"What's this about?",      required:false },
                  ].map(f => (
                    <div key={f.name} style={{ gridColumn: f.name==='name'||f.name==='email' ? undefined : '1 / -1' }}>
                      {/* Actually let's do 2-col for name/email, full width for phone/subject */}
                    </div>
                  ))}
                  {/* Name */}
                  <label style={{ display:'flex',flexDirection:'column',gap:6 }}>
                    <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.04em' }}>NAME *</span>
                    <input name="name" type="text" value={form.name} onChange={change}
                      required placeholder="Your full name" style={inputStyle} aria-required="true"/>
                  </label>
                  {/* Email */}
                  <label style={{ display:'flex',flexDirection:'column',gap:6 }}>
                    <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.04em' }}>EMAIL *</span>
                    <input name="email" type="email" value={form.email} onChange={change}
                      required placeholder="your@email.com" style={inputStyle} aria-required="true"/>
                  </label>
                </div>

                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16 }}>
                  <label style={{ display:'flex',flexDirection:'column',gap:6 }}>
                    <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.04em' }}>PHONE</span>
                    <input name="phone" type="tel" value={form.phone} onChange={change}
                      placeholder="+260 123 456 789" style={inputStyle}/>
                  </label>
                  <label style={{ display:'flex',flexDirection:'column',gap:6 }}>
                    <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.04em' }}>SUBJECT</span>
                    <input name="subject" type="text" value={form.subject} onChange={change}
                      placeholder="Project type…" style={inputStyle}/>
                  </label>
                </div>

                <label style={{ display:'flex',flexDirection:'column',gap:6,marginBottom:24 }}>
                  <span style={{ fontSize:12,fontWeight:700,color:'#6D28D9',letterSpacing:'.04em' }}>MESSAGE *</span>
                  <textarea name="message" value={form.message} onChange={change}
                    required placeholder="Tell me about your project, timeline, budget…"
                    aria-required="true"
                    style={{ ...inputStyle,resize:'vertical',minHeight:130 }}/>
                </label>

                <button type="submit" disabled={status.loading}
                  style={{ width:'100%',background:'linear-gradient(135deg,#6D28D9,#8B5CF6)',
                    color:'#fff',border:'none',padding:'14px',borderRadius:12,fontWeight:700,
                    fontSize:15,cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:8,
                    boxShadow:'0 8px 24px rgba(109,40,217,.28)',transition:'transform .2s,box-shadow .2s',
                    opacity:status.loading?0.7:1 }}>
                  {status.loading
                    ? <><div style={{ width:18,height:18,border:'2px solid #fff',borderTopColor:'transparent',
                        borderRadius:'50%',animation:'spin 0.8s linear infinite' }}/> Sending…</>
                    : <><MessageCircle size={18}/> Send via WhatsApp <Send size={16}/></>
                  }
                </button>
                <p style={{ fontSize:11,color:'#9CA3AF',textAlign:'center',marginTop:12 }}>
                  You'll be redirected to WhatsApp with your message pre-formatted.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Why section */}
        <section aria-label="Why choose CreativeWeb"
          style={{ position:'relative',zIndex:1,maxWidth:1100,margin:'0 auto 60px',padding:'0 20px' }}>
          <div style={{ background:'linear-gradient(135deg,#6D28D9,#8B5CF6,#06B6D4)',borderRadius:24,
            padding:'48px 32px',textAlign:'center' }}>
            <h2 style={{ fontSize:'clamp(1.4rem,3vw,2rem)',fontWeight:800,color:'#fff',marginBottom:36 }}>
              Why CreativeWeb?
            </h2>
            <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:28 }}>
              {[
                { icon:Send,         label:'Quick Response',       desc:'Hear back within 24 hrs via WhatsApp or email' },
                { icon:CheckCircle,  label:'Quality Guaranteed',   desc:'Professional work with modern standards' },
                { icon:Phone,        label:'Direct Communication', desc:'Work directly with me throughout your project' },
              ].map(({ icon:Icon, label, desc }) => (
                <div key={label} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:12 }}>
                  <div style={{ width:52,height:52,borderRadius:'50%',background:'rgba(255,255,255,.18)',
                    display:'flex',alignItems:'center',justifyContent:'center' }}>
                    <Icon size={24} color="#fff" strokeWidth={1.8}/>
                  </div>
                  <div style={{ fontWeight:700,fontSize:15,color:'#fff' }}>{label}</div>
                  <p style={{ fontSize:13,color:'rgba(255,255,255,.8)',lineHeight:1.6,maxWidth:200 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <BottomTabBar/>
    </>
  );
}

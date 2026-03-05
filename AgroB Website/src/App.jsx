import { useState, useMemo } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=DM+Serif+Display:ital@0;1&display=swap');
:root {
  --white:#FFFFFF;--off:#F8F9F7;--bg:#F2F4F1;--bdr:#DDE1DA;
  --tx:#111714;--tx2:#4A5248;--tx3:#8A9188;
  --g1:#1A7A3C;--g2:#135C2C;--g3:#E8F5EE;--g4:#52A96E;
  --ev:#1C2B4A;--ev2:#E8EBF2;
  --r:12px;--rs:8px;--mx:1180px;
  --shadow:0 2px 16px rgba(0,0,0,0.07);--shadow-md:0 8px 40px rgba(0,0,0,0.10);
}
html,body,#root{height:100%;margin:0;padding:0}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;background:var(--white);color:var(--tx);-webkit-font-smoothing:antialiased}
@keyframes up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
@keyframes cartIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
@keyframes checkPop{0%{transform:scale(0)}70%{transform:scale(1.2)}100%{transform:scale(1)}}
@keyframes confetti{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(60px) rotate(360deg);opacity:0}}

.nav{background:var(--white);border-bottom:1px solid var(--bdr);position:sticky;top:0;z-index:200}
.nav-in{max-width:var(--mx);margin:0 auto;padding:0 32px;display:flex;align-items:center;height:64px;gap:32px}
.logo-wrap{display:flex;align-items:center;cursor:pointer;flex-shrink:0}
.logo-mark{width:34px;height:34px;background:var(--g1);border-radius:8px;display:flex;align-items:center;justify-content:center}
.logo-text{display:flex;flex-direction:column;line-height:1;margin-left:10px}
.logo-a{font-size:15px;font-weight:800;color:var(--tx);letter-spacing:-0.03em;transition:color .15s}
.logo-b{font-size:10px;font-weight:500;color:var(--tx3);letter-spacing:.05em;text-transform:uppercase}
.logo-wrap:hover .logo-a{color:var(--g1)}
.nav-links{display:flex;gap:2px;flex:1}
.nl{padding:7px 14px;color:var(--tx2);font-size:13.5px;font-weight:500;cursor:pointer;border-radius:var(--rs);border:none;background:none;font-family:inherit;transition:all .15s;display:flex;align-items:center;gap:4px}
.nl:hover{color:var(--tx);background:var(--bg)}
.nl.act{color:var(--g1);font-weight:600;background:var(--g3)}
.nav-right{display:flex;gap:8px;align-items:center;margin-left:auto}
.moodle-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 13px 6px 8px;border:1.5px solid #F98012;border-radius:20px;cursor:pointer;background:#FFF4E6;font-family:inherit;transition:all .15s;text-decoration:none}
.moodle-btn:hover{background:#FDEBD0}
.moodle-icon{width:20px;height:20px;background:#F98012;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;color:white;font-weight:800;flex-shrink:0}
.moodle-text{font-size:12px;font-weight:700;color:#B45309}
.nav-cta{padding:8px 20px;background:var(--g1);color:white;border:none;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
.nav-cta:hover{background:var(--g2)}
.nav-icon-btn{width:36px;height:36px;border-radius:50%;border:1.5px solid var(--bdr);background:var(--off);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;transition:all .15s;position:relative}
.nav-icon-btn:hover{border-color:var(--g1);background:var(--g3)}
.nav-badge{position:absolute;top:-4px;right:-4px;width:16px;height:16px;background:#DC2626;border-radius:50%;font-size:9px;font-weight:800;color:white;display:flex;align-items:center;justify-content:center;border:2px solid white}
.dropdown{position:relative}
.dropdown-menu{position:absolute;top:calc(100% + 8px);left:0;background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);box-shadow:var(--shadow-md);min-width:200px;z-index:300;overflow:hidden}
.dropdown-item{display:flex;align-items:center;gap:9px;padding:10px 16px;font-size:13.5px;font-weight:500;color:var(--tx2);cursor:pointer;border:none;background:none;font-family:inherit;width:100%;text-align:left}
.dropdown-item:hover{background:var(--off);color:var(--tx)}
.di-icon{font-size:15px;width:22px;text-align:center}
.di-label{display:block;font-weight:600;color:var(--tx)}
.di-desc{font-size:11px;color:var(--tx3);display:block;margin-top:1px}

.hero{background:var(--tx);overflow:hidden;position:relative}
.hero::before{content:'';position:absolute;top:-120px;right:-80px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(26,122,60,0.18) 0%,transparent 65%);pointer-events:none}
.hero::after{content:'';position:absolute;bottom:-80px;left:30%;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(28,43,74,0.15) 0%,transparent 65%);pointer-events:none}
.hero-grid{max-width:var(--mx);margin:0 auto;padding:72px 32px 80px;display:grid;grid-template-columns:1fr 420px;gap:64px;align-items:center;position:relative;z-index:1}
.hero h1{font-family:'DM Serif Display',serif;font-size:46px;line-height:1.08;color:white;letter-spacing:-0.02em;margin-bottom:20px}
.hero h1 em{color:var(--g4);font-style:italic}
.hero-sub{font-size:16px;color:rgba(255,255,255,0.48);line-height:1.7;margin-bottom:36px;max-width:460px}
.hero-btns{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:52px}
.hbtn{padding:12px 26px;border-radius:var(--rs);font-size:13.5px;font-weight:600;cursor:pointer;border:none;font-family:inherit;transition:all .2s}
.hbtn-p{background:var(--g1);color:white}.hbtn-p:hover{background:var(--g4)}
.hbtn-s{background:rgba(255,255,255,0.07);color:rgba(255,255,255,0.8);border:1px solid rgba(255,255,255,0.12)}.hbtn-s:hover{background:rgba(255,255,255,0.12)}
.hero-stats{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,0.07);padding-top:24px}
.hs-v{font-family:'DM Serif Display',serif;font-size:28px;color:white}
.hs-l{font-size:11px;color:rgba(255,255,255,0.32);margin-top:2px}
.hero-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:16px;padding:28px}
.hc-label{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--g4);margin-bottom:16px}
.hc-title{font-family:'DM Serif Display',serif;font-size:22px;color:white;line-height:1.2;margin-bottom:8px}
.hc-sub{font-size:13px;color:rgba(255,255,255,0.45);line-height:1.6;margin-bottom:22px}
.hc-items{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
.hc-item{display:flex;align-items:center;gap:10px;font-size:13px;color:rgba(255,255,255,0.7)}
.hc-check{width:20px;height:20px;background:var(--g3);border-radius:5px;display:flex;align-items:center;justify-content:center;font-size:11px;color:var(--g1);flex-shrink:0}
.hc-price{display:flex;align-items:baseline;gap:8px;padding:14px 16px;background:rgba(26,122,60,0.18);border-radius:var(--rs);border:1px solid rgba(82,169,110,0.2);margin-bottom:14px}
.hc-price-v{font-family:'DM Serif Display',serif;font-size:30px;color:white}
.hc-price-old{font-size:14px;color:rgba(255,255,255,0.3);text-decoration:line-through}
.hc-price-info{font-size:11px;color:rgba(255,255,255,0.35);margin-top:2px}
.hc-btn{width:100%;padding:11px;background:var(--g1);color:white;border:none;border-radius:var(--rs);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}
.hc-btn:hover{background:var(--g4)}
.trust{background:var(--white);border-bottom:1px solid var(--bdr);padding:0 32px}
.trust-in{max-width:var(--mx);margin:0 auto;display:flex;align-items:stretch}
.trust-item{display:flex;align-items:center;gap:10px;padding:18px 24px;border-right:1px solid var(--bdr);flex:1;transition:background .15s}
.trust-item:last-child{border-right:none}
.trust-item:hover{background:var(--off)}
.trust-icon-wrap{width:34px;height:34px;border-radius:8px;background:var(--g3);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.trust-text strong{display:block;font-size:12.5px;font-weight:700;color:var(--tx);line-height:1.2}
.trust-text span{font-size:11px;color:var(--tx3);white-space:nowrap}
.sec{padding:72px 32px}
.sec-in{max-width:var(--mx);margin:0 auto}
.sec-eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--g1);margin-bottom:8px}
.sec-title{font-family:'DM Serif Display',serif;font-size:34px;line-height:1.1;letter-spacing:-0.02em;margin-bottom:10px}
.sec-sub{font-size:15px;color:var(--tx2);max-width:520px;line-height:1.65}
.sec-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px;gap:24px}
.link-btn{font-size:13px;font-weight:600;color:var(--g1);background:none;border:none;cursor:pointer;font-family:inherit;white-space:nowrap}
.link-btn:hover{color:var(--g2)}
.courses-grid-home{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.cc{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);overflow:hidden;cursor:pointer;transition:all .2s;display:flex;flex-direction:column}
.cc:hover{transform:translateY(-3px);box-shadow:var(--shadow-md);border-color:var(--g4)}
.cc-thumb{height:180px;position:relative;overflow:hidden;flex-shrink:0}
.cc-thumb-ph{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,#e4ede3 0%,#c8d9c6 100%)}
.cc-ph-icon{font-size:42px;opacity:.5}
.cc-ph-label{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3)}
.cc-tl{position:absolute;top:10px;left:10px;display:flex;gap:5px;align-items:center}
.cc-badge{padding:4px 10px;border-radius:6px;font-size:10.5px;font-weight:700;background:rgba(255,255,255,0.92);color:var(--tx);display:inline-flex;align-items:center;line-height:1}
.cc-promo{padding:4px 8px;border-radius:5px;font-size:10.5px;font-weight:700;background:#DC2626;color:white;display:inline-flex;align-items:center;line-height:1}
.cc-body{padding:16px 18px 12px;flex:1;display:flex;flex-direction:column}
.cc-areas{display:flex;gap:5px;margin-bottom:9px;flex-wrap:wrap}
.cc-area{font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;padding:2px 8px;border-radius:4px}
.cc-area-Agrícola{background:#E8F5EE;color:#1A7A3C}
.cc-area-Pecuária{background:#FFF4E6;color:#B45309}
.cc-area-Agroindustrial{background:#EEF0FA;color:#4338CA}
.cc-area-Gestão{background:#F0F9FF;color:#0369A1}
.cc-area-Turismo{background:#FDF4FF;color:#7E22CE}
.cc-tipo{font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;padding:2px 8px;border-radius:4px;background:#F1F3F2;color:#8A9188}
.cc-name{font-family:'DM Serif Display',serif;font-size:17px;line-height:1.25;margin-bottom:10px;color:var(--tx);flex:1}
.cc-formador{display:flex;align-items:center;gap:7px;margin-bottom:12px}
.cc-av{width:26px;height:26px;border-radius:50%;background:var(--g3);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:var(--g1);flex-shrink:0}
.cc-fname{font-size:12px;color:var(--tx2);font-weight:500}
.cc-meta{display:flex;gap:14px;padding:0 18px 14px;flex-wrap:wrap}
.cc-meta span{font-size:12px;color:var(--tx2);display:flex;align-items:center;gap:4px}
.cc-divider{border:none;border-top:1px solid var(--bdr)}
.cc-pricing{padding:12px 18px 14px;display:flex;align-items:center;justify-content:space-between}
.cc-price-old{font-size:12px;color:var(--tx3);text-decoration:line-through;display:block;line-height:1;margin-bottom:1px}
.cc-price{font-family:'DM Serif Display',serif;font-size:24px;color:var(--tx)}
.cc-ver{padding:8px 16px;background:var(--white);color:var(--tx);border:1.5px solid var(--bdr);border-radius:var(--rs);font-size:12.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}
.cc-ver:hover{border-color:var(--g1);color:var(--g1);background:var(--g3)}
.mission{background:var(--g2);padding:56px 32px}
.mission .sec-eyebrow{color:var(--g4)}
.mission .sec-title{color:white}
.mission-text{max-width:640px;margin-bottom:48px}
.mission-text p{font-size:15px;color:rgba(255,255,255,0.65);line-height:1.9;margin-bottom:22px}
.mission-text p strong{color:white;font-weight:600}
.mission-pillars{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.pillar{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);overflow:hidden}
.pillar-thumb{height:100px;display:flex;align-items:center;justify-content:center;font-size:40px}
.pillar-thumb-1{background:linear-gradient(135deg,#E8F5EE,#C8E6D4)}
.pillar-thumb-2{background:linear-gradient(135deg,#FEF9E7,#FAE9A0)}
.pillar-thumb-3{background:linear-gradient(135deg,#EEF0FA,#D4D8F5)}
.pillar-thumb-4{background:linear-gradient(135deg,#FEF2F2,#FDDCDC)}
.pillar-body{padding:14px 16px}
.pillar-title{font-size:13px;font-weight:700;color:var(--tx);margin-bottom:4px}
.pillar-desc{font-size:12px;color:var(--tx3);line-height:1.5}
.tests-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.tc{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);padding:22px}
.tc-stars{color:#B08D2A;font-size:13px;margin-bottom:12px}
.tc-q{font-size:14px;line-height:1.65;color:var(--tx);margin-bottom:14px;font-style:italic}
.tc-author{display:flex;align-items:center;gap:10px}
.tc-av{width:32px;height:32px;border-radius:50%;background:var(--g3);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--g1);flex-shrink:0}
.tc-name{font-size:13px;font-weight:700}
.tc-course{font-size:11px;color:var(--tx3)}
.faq-sec{background:var(--off)}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:start}
.faq-item{border-bottom:1px solid var(--bdr)}
.faq-q{width:100%;padding:16px 0;font-size:14.5px;font-weight:600;display:flex;justify-content:space-between;align-items:center;gap:16px;cursor:pointer;border:none;background:none;font-family:inherit;color:var(--tx);text-align:left}
.faq-q:hover{color:var(--g1)}
.faq-ic{font-size:16px;color:var(--tx3);transition:transform .2s;flex-shrink:0}
.faq-ic.open{transform:rotate(45deg);color:var(--g1)}
.faq-a{padding:0 0 16px;font-size:13.5px;line-height:1.7;color:var(--tx2)}
.faq-aside{position:sticky;top:80px}
.faq-aside-card{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);padding:28px;box-shadow:var(--shadow)}
.faq-aside-card h3{font-family:'DM Serif Display',serif;font-size:22px;margin-bottom:8px}
.faq-aside-card p{font-size:13.5px;color:var(--tx2);line-height:1.65;margin-bottom:20px}
.faq-aside-btns{display:flex;flex-direction:column;gap:8px}
.faq-btn-p{padding:11px;background:var(--g1);color:white;border:none;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
.faq-btn-p:hover{background:var(--g2)}
.faq-btn-s{padding:11px;background:none;color:var(--g1);border:1px solid var(--bdr);border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit}
.faq-btn-s:hover{border-color:var(--g1);background:var(--g3)}
.cta-band{background:linear-gradient(135deg,var(--g2) 0%,#1F5C38 100%);padding:72px 32px;position:relative;overflow:hidden}
.cta-in{max-width:640px;margin:0 auto;text-align:center;position:relative;z-index:1}
.cta-in h2{font-family:'DM Serif Display',serif;font-size:36px;color:white;margin-bottom:12px;letter-spacing:-0.02em}
.cta-in p{font-size:15px;color:rgba(255,255,255,0.5);line-height:1.65;margin-bottom:28px}
.cta-btns{display:flex;gap:10px;justify-content:center;flex-wrap:wrap}
.foot{background:var(--tx);padding:56px 32px 28px}
.foot-in{max-width:var(--mx);margin:0 auto}
.foot-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;margin-bottom:48px}
.foot-brand p{font-size:13px;color:rgba(255,255,255,0.38);line-height:1.65;max-width:280px;margin-bottom:16px}
.foot-contact{font-size:13px;color:rgba(255,255,255,0.35);line-height:1.8}
.foot h4{font-size:13px;font-weight:700;color:white;margin-bottom:14px}
.foot a{display:block;font-size:13px;color:rgba(255,255,255,0.38);text-decoration:none;padding:3px 0}
.foot a:hover{color:rgba(255,255,255,.8)}
.foot-ev{display:flex;align-items:center;gap:8px;padding:12px 14px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:var(--rs);margin-top:14px}
.foot-ev p{font-size:11.5px;color:rgba(255,255,255,0.35);line-height:1.4}
.foot-ev span{font-weight:600;color:rgba(255,255,255,0.6)}
.foot-bot{border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px}
.foot-bot p{font-size:12px;color:rgba(255,255,255,0.2)}
.foot-certs{display:flex;gap:8px}
.cert-badge{padding:3px 10px;border:1px solid rgba(255,255,255,0.1);border-radius:4px;font-size:10.5px;color:rgba(255,255,255,0.3);font-weight:600}
.page-hero{background:var(--tx);padding:48px 32px 52px;position:relative;overflow:hidden}
.page-hero::before{content:'';position:absolute;top:-80px;right:-60px;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(26,122,60,0.18) 0%,transparent 65%);pointer-events:none}
.page-hero-in{max-width:var(--mx);margin:0 auto;position:relative;z-index:1}
.page-hero-eyebrow{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--g4);margin-bottom:10px}
.page-hero h1{font-family:'DM Serif Display',serif;font-size:40px;color:white;line-height:1.1;margin-bottom:10px;letter-spacing:-0.02em}
.page-hero p{font-size:15px;color:rgba(255,255,255,0.45);max-width:480px;line-height:1.6}
.catalog-wrap{max-width:var(--mx);margin:0 auto;padding:32px 32px 80px}
.filter-bar{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);padding:20px 24px;margin-bottom:28px}
.filter-search-row{display:flex;gap:12px;margin-bottom:16px}
.filter-search{flex:1;padding:10px 14px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:14px;font-family:inherit;outline:none;transition:border .15s;background:var(--off)}
.filter-search:focus{border-color:var(--g1);background:var(--white)}
.filter-selects-row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
.filter-select{flex:1;min-width:140px;padding:9px 12px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:13px;font-family:inherit;color:var(--tx2);outline:none;background:var(--white);cursor:pointer;transition:border .15s}
.filter-select:focus{border-color:var(--g1)}
.filter-select.active{border-color:var(--g1);color:var(--g1);background:var(--g3);font-weight:600}
.sb-clear{font-size:12px;color:var(--g1);font-weight:600;cursor:pointer;border:none;background:none;font-family:inherit;white-space:nowrap;padding:0 12px}
.results-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;gap:16px;flex-wrap:wrap}
.results-count{font-size:14px;color:var(--tx2)}
.results-count strong{color:var(--tx);font-weight:700}
.sort-select{padding:8px 12px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:13px;font-family:inherit;color:var(--tx2);outline:none;background:var(--white);cursor:pointer}
.view-btns{display:flex;gap:4px}
.vbtn{width:32px;height:32px;border:1px solid var(--bdr);border-radius:var(--rs);background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px;transition:all .15s}
.vbtn.act{background:var(--g1);border-color:var(--g1);color:white}
.vbtn:not(.act):hover{background:var(--off)}
.active-filters{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px}
.af-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--g3);border:1px solid rgba(26,122,60,.2);border-radius:20px;font-size:11.5px;font-weight:600;color:var(--g1)}
.af-tag button{background:none;border:none;cursor:pointer;color:var(--g1);font-size:13px;line-height:1;padding:0}
.courses-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.courses-grid.list-view{grid-template-columns:1fr}
.courses-grid.list-view .cc{flex-direction:row}
.courses-grid.list-view .cc-thumb{width:180px;height:auto;min-height:120px;flex-shrink:0}
.no-results{text-align:center;padding:64px 24px;color:var(--tx3)}
.no-results .nr-icon{font-size:48px;margin-bottom:16px}
.no-results h3{font-family:'DM Serif Display',serif;font-size:22px;color:var(--tx);margin-bottom:8px}
.cd-wrap{max-width:var(--mx);margin:0 auto;padding:28px 32px 80px}
.cd-back{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--tx2);cursor:pointer;border:none;background:none;font-family:inherit;margin-bottom:20px;font-weight:500;padding:0}
.cd-back:hover{color:var(--g1)}
.cd-grid{display:grid;grid-template-columns:1fr 320px;gap:48px;align-items:start}
.cd-video{background:#1a1a1a;border-radius:var(--r);height:320px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;position:relative;overflow:hidden;cursor:pointer}
.cd-video-play{width:60px;height:60px;background:rgba(255,255,255,0.15);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:22px;backdrop-filter:blur(4px);border:2px solid rgba(255,255,255,0.25);transition:all .2s}
.cd-video:hover .cd-video-play{background:rgba(255,255,255,0.25);transform:scale(1.08)}
.cd-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.cd-tag{padding:3px 10px;border-radius:6px;font-size:10.5px;font-weight:700;background:var(--ev2);color:var(--ev)}
.cd-tag-green{background:var(--g3);color:var(--g1)}
.cd-title{font-family:'DM Serif Display',serif;font-size:34px;line-height:1.12;margin-bottom:12px}
.cd-desc{font-size:14.5px;color:var(--tx2);line-height:1.75;margin-bottom:28px}
.cd-specs{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:28px}
.cd-spec{background:var(--off);border:1px solid var(--bdr);border-radius:var(--rs);padding:14px 16px;text-align:center}
.cd-spec-icon{font-size:22px;margin-bottom:6px}
.cd-spec-label{font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--tx3);margin-bottom:3px}
.cd-spec-val{font-size:13.5px;font-weight:700;color:var(--tx)}
.cd-brochure{display:flex;align-items:center;justify-content:space-between;background:var(--tx);border-radius:var(--r);padding:18px 22px;margin-bottom:28px}
.cd-brochure-text strong{display:block;font-size:14px;font-weight:700;color:white;margin-bottom:2px}
.cd-brochure-text span{font-size:12px;color:rgba(255,255,255,0.45)}
.cd-brochure-btn{display:flex;align-items:center;gap:8px;padding:10px 18px;background:white;color:var(--tx);border:none;border-radius:var(--rs);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;white-space:nowrap}
.cd-brochure-btn:hover{background:var(--off)}
.cd-accordion{margin-bottom:8px;border:1px solid var(--bdr);border-radius:var(--rs);overflow:hidden}
.cd-acc-head{width:100%;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;font-size:14.5px;font-weight:600;cursor:pointer;border:none;background:var(--white);font-family:inherit;color:var(--tx);text-align:left}
.cd-acc-head:hover{background:var(--off)}
.cd-acc-ic{font-size:16px;color:var(--tx3);transition:transform .2s}
.cd-acc-ic.open{transform:rotate(180deg);color:var(--g1)}
.cd-acc-body{padding:16px 20px;font-size:14px;line-height:1.75;color:var(--tx2);border-top:1px solid var(--bdr)}
.cd-acc-body ul{padding-left:18px}
.cd-acc-body li{margin-bottom:6px}
.cd-section-title{font-family:'DM Serif Display',serif;font-size:24px;margin:36px 0 18px}
.cd-formadores{display:flex;gap:20px;flex-wrap:wrap;margin-bottom:8px}
.cd-formador{display:flex;align-items:center;gap:12px}
.cd-fav{width:52px;height:52px;border-radius:50%;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid var(--bdr)}
.cd-fname{font-size:14px;font-weight:700;color:var(--tx)}
.cd-frole{font-size:12px;color:var(--tx3)}
.cd-reviews{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:8px}
.cd-review{background:var(--off);border:1px solid var(--bdr);border-radius:var(--rs);padding:16px}
.cd-rev-top{display:flex;align-items:center;gap:8px;margin-bottom:8px}
.cd-rev-av{width:30px;height:30px;border-radius:50%;background:var(--g3);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--g1);flex-shrink:0}
.cd-rev-name{font-size:13px;font-weight:700}
.cd-rev-stars{color:#B08D2A;font-size:11px}
.cd-rev-text{font-size:13px;color:var(--tx2);line-height:1.6}
.cd-related{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.cd-sidebar{position:sticky;top:80px}
.cd-card{background:var(--white);border:1px solid var(--bdr);border-radius:var(--r);overflow:hidden;box-shadow:var(--shadow-md)}
.cd-card-edition{padding:16px 20px;border-bottom:1px solid var(--bdr)}
.cd-card-edition label{display:block;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--tx3);margin-bottom:8px}
.cd-edition-sel{width:100%;padding:9px 12px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:13px;font-family:inherit;color:var(--tx);outline:none;background:var(--white);cursor:pointer}
.cd-edition-sel:focus{border-color:var(--g1)}
.cd-card-price{padding:16px 20px;border-bottom:1px solid var(--bdr)}
.cd-invest-label{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--tx3);margin-bottom:8px}
.cd-price-row{display:flex;align-items:baseline;gap:10px;margin-bottom:4px}
.cd-price-old{font-size:15px;color:var(--tx3);text-decoration:line-through}
.cd-price-new{font-family:'DM Serif Display',serif;font-size:34px;color:var(--tx)}
.cd-price-note{font-size:11.5px;color:var(--g1);font-weight:600}
.cd-card-actions{padding:16px 20px;border-bottom:1px solid var(--bdr);display:flex;flex-direction:column;gap:8px}
.cd-btn-info{width:100%;padding:11px;background:none;color:var(--tx);border:1.5px solid var(--bdr);border-radius:var(--rs);font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}
.cd-btn-info:hover{border-color:var(--g1);color:var(--g1);background:var(--g3)}
.cd-btn-enroll{width:100%;padding:12px;background:var(--tx);color:white;border:none;border-radius:var(--rs);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s}
.cd-btn-enroll:hover{background:#333}
.cd-card-contact{padding:16px 20px;border-bottom:1px solid var(--bdr);text-align:center}
.cd-contact-icon{width:44px;height:44px;background:var(--bg);border-radius:50%;margin:0 auto 8px;display:flex;align-items:center;justify-content:center;font-size:20px}
.cd-contact-title{font-size:13px;font-weight:700;margin-bottom:3px}
.cd-contact-sub{font-size:12px;color:var(--tx3);margin-bottom:10px}
.cd-contact-links{display:flex;flex-direction:column;gap:5px}
.cd-contact-link{display:flex;align-items:center;justify-content:center;gap:6px;font-size:12.5px;color:var(--tx2);font-weight:500}
.cd-btn-wa{width:100%;margin-top:10px;padding:10px;background:#25D366;color:white;border:none;border-radius:var(--rs);font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px}
.cd-btn-wa:hover{background:#1ebe5c}
.cd-card-manager{padding:14px 20px;display:flex;align-items:center;gap:12px}
.cd-mgr-av{width:40px;height:40px;border-radius:50%;background:var(--bg);border:2px solid var(--bdr);display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0}
.cd-mgr-name{font-size:13px;font-weight:700}
.cd-mgr-role{font-size:11px;color:var(--tx3)}
.cd-mgr-avail{font-size:10.5px;color:var(--g1);font-weight:600;margin-top:1px}
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px}
.modal{background:var(--white);border-radius:16px;width:100%;max-width:520px;box-shadow:0 24px 80px rgba(0,0,0,0.18);animation:up .25s ease;overflow:hidden}
.modal-head{padding:24px 28px 0;display:flex;justify-content:space-between;align-items:flex-start}
.modal-head h2{font-family:'DM Serif Display',serif;font-size:22px}
.modal-close{background:none;border:none;font-size:20px;cursor:pointer;color:var(--tx3);padding:2px 6px;border-radius:6px}
.modal-close:hover{background:var(--bg);color:var(--tx)}
.modal-tabs{display:flex;margin:16px 0 0;border-bottom:1px solid var(--bdr);padding:0 28px}
.modal-tab{padding:9px 14px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:none;font-family:inherit;color:var(--tx3);border-bottom:2px solid transparent;margin-bottom:-1px;white-space:nowrap}
.modal-tab.act{color:var(--g1);border-bottom-color:var(--g1)}
.modal-body{padding:24px 28px 28px;max-height:70vh;overflow-y:auto}
.mfield{margin-bottom:14px}
.mfield label{display:block;font-size:12px;font-weight:600;color:var(--tx2);margin-bottom:5px}
.mfield input,.mfield select{width:100%;padding:10px 13px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:14px;font-family:inherit;outline:none;transition:border .15s;background:white;color:var(--tx)}
.mfield input:focus,.mfield select:focus{border-color:var(--g1)}
.mrow2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.msubmit{width:100%;padding:11px;background:var(--g1);color:white;border:none;border-radius:var(--rs);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:4px}
.msubmit:hover{background:var(--g2)}
.m-or{text-align:center;font-size:12px;color:var(--tx3);margin:12px 0}
.m-google{width:100%;padding:10px;border:1px solid var(--bdr);border-radius:var(--rs);font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;background:white;display:flex;align-items:center;justify-content:center;gap:8px}
.m-google:hover{background:var(--off)}
.m-link{font-size:12px;color:var(--tx3);text-align:center;margin-top:14px}
.m-link a{color:var(--g1);cursor:pointer;font-weight:600}
.m-section-title{font-size:13px;font-weight:700;color:var(--tx);margin:20px 0 12px;padding-bottom:8px;border-bottom:1px solid var(--bdr)}
.m-section-title:first-child{margin-top:0}
.inscricao-item{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:var(--off);border-radius:var(--rs);margin-bottom:8px;border:1px solid var(--bdr)}
.inscricao-nome{font-size:13px;font-weight:600;color:var(--tx)}
.inscricao-meta{font-size:11px;color:var(--tx3);margin-top:2px}
.inscricao-badge{padding:3px 9px;border-radius:12px;font-size:10.5px;font-weight:700}
.badge-ativo{background:var(--g3);color:var(--g1)}
.badge-concluido{background:var(--ev2);color:var(--ev)}
.tl-wrap{position:relative;padding-left:24px}
.tl-line{position:absolute;left:4px;top:8px;bottom:8px;width:2px;background:linear-gradient(to bottom,var(--g1) 0%,var(--bdr) 100%);border-radius:2px}
.tl-item{position:relative;padding-bottom:6px;margin-bottom:6px}
.tl-item:last-child{padding-bottom:0;margin-bottom:0}
.tl-node{position:absolute;left:-20px;top:16px;width:10px;height:10px;border-radius:50%;border:2px solid var(--bdr);background:var(--white);transition:all .2s;z-index:1;transform:translateX(-50%)}
.tl-node.act{border-color:var(--g1);background:var(--g1)}
.tl-head{display:flex;align-items:center;gap:10px;cursor:pointer;padding:10px 14px;border-radius:var(--rs);border:1px solid transparent;transition:all .15s;background:var(--white)}
.tl-head:hover{background:var(--off);border-color:var(--bdr)}
.tl-head.act{background:var(--g3);border-color:rgba(26,122,60,.2)}
.tl-num{font-size:10px;font-weight:800;letter-spacing:.08em;color:var(--tx3);white-space:nowrap}
.tl-titulo{font-size:13.5px;font-weight:600;color:var(--tx);flex:1}
.tl-horas{font-size:11px;font-weight:700;padding:2px 9px;background:var(--g3);color:var(--g1);border-radius:10px;white-space:nowrap;flex-shrink:0}
.tl-chevron{font-size:11px;color:var(--tx3);transition:transform .2s;flex-shrink:0}
.tl-chevron.open{transform:rotate(180deg);color:var(--g1)}
.tl-body{margin-top:6px;padding:16px 18px;background:var(--off);border:1px solid var(--bdr);border-radius:var(--rs);border-top-left-radius:0;animation:fadeSlide .2s ease}
.tl-section-label{font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3);margin-bottom:8px;margin-top:14px}
.tl-section-label:first-child{margin-top:0}
.tl-topico{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:var(--tx2);line-height:1.55;margin-bottom:5px}
.tl-dot{width:5px;height:5px;border-radius:50%;background:var(--g1);margin-top:6px;flex-shrink:0}
.tl-recursos{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}
.tl-recurso{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:500;color:var(--tx2);background:var(--white);border:1px solid var(--bdr);border-radius:6px;padding:4px 10px}
.cart-drawer-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.4);z-index:998}
.cart-drawer{position:fixed;top:0;right:0;bottom:0;width:380px;background:#fff;z-index:999;display:flex;flex-direction:column;box-shadow:-4px 0 32px rgba(0,0,0,0.12);animation:cartIn .25s ease}
.cart-drawer-head{padding:20px 24px;border-bottom:1px solid #DDE1DA;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.cart-drawer-title{font-family:'DM Serif Display',serif;font-size:20px;color:#111714}
.cart-drawer-close{background:none;border:none;font-size:22px;line-height:1;cursor:pointer;color:#8A9188;width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center}
.cart-drawer-close:hover{background:#F2F4F1;color:#111714}
.cart-drawer-body{flex:1;overflow-y:auto;padding:0 24px}
.cart-drawer-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 0;gap:10px;text-align:center}
.cart-drawer-empty-icon{font-size:40px;opacity:.3}
.cart-drawer-empty-title{font-family:'DM Serif Display',serif;font-size:18px;color:#111714}
.cart-drawer-empty-sub{font-size:13px;color:#8A9188;line-height:1.6;max-width:180px}
.cart-drawer-item{display:flex;gap:12px;padding:16px 0;border-bottom:1px solid #DDE1DA;align-items:flex-start}
.cart-drawer-item:last-child{border-bottom:none}
.cart-drawer-item-icon{width:46px;height:46px;min-width:46px;border-radius:8px;background:linear-gradient(135deg,#e4ede3,#c8d9c6);display:flex;align-items:center;justify-content:center;font-size:20px}
.cart-drawer-item-name{font-size:13px;font-weight:600;color:#111714;line-height:1.3;margin-bottom:3px}
.cart-drawer-item-meta{font-size:11px;color:#8A9188;margin-bottom:5px}
.cart-drawer-item-price{font-family:'DM Serif Display',serif;font-size:16px;color:#111714}
.cart-drawer-item-remove{background:none;border:none;cursor:pointer;color:#8A9188;font-size:18px;line-height:1;padding:0;flex-shrink:0;margin-top:2px}
.cart-drawer-item-remove:hover{color:#DC2626}
.cart-drawer-foot{padding:16px 24px;border-top:1px solid #DDE1DA;flex-shrink:0}
.cart-drawer-total-row{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px}
.cart-drawer-total-label{font-size:13px;color:#4A5248}
.cart-drawer-total-value{font-family:'DM Serif Display',serif;font-size:24px;color:#111714}
.cart-drawer-note{font-size:11px;color:#8A9188;margin-bottom:14px}
.cart-drawer-btn-primary{display:block;width:100%;padding:12px;background:#1A7A3C;color:white;border:none;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;margin-bottom:8px;text-align:center}
.cart-drawer-btn-primary:hover{background:#135C2C}
.cart-drawer-btn-secondary{display:block;width:100%;padding:10px;background:none;color:#4A5248;border:1.5px solid #DDE1DA;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;font-family:'Inter',sans-serif;text-align:center}
.cart-drawer-btn-secondary:hover{border-color:#1A7A3C;color:#1A7A3C;background:#E8F5EE}

/* ── CHECKOUT ── */
.co-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:1000;display:flex;align-items:center;justify-content:center;padding:16px}
.co-modal{background:#fff;border-radius:20px;width:100%;max-width:760px;max-height:92vh;display:flex;flex-direction:column;box-shadow:0 32px 100px rgba(0,0,0,0.22);animation:up .28s ease;overflow:hidden}
.co-header{padding:20px 28px;border-bottom:1px solid var(--bdr);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.co-header-left{display:flex;align-items:center;gap:12px}
.co-logo{width:30px;height:30px;background:var(--g1);border-radius:7px;display:flex;align-items:center;justify-content:center;font-size:14px}
.co-header-title{font-size:15px;font-weight:700;color:var(--tx)}
.co-header-sub{font-size:12px;color:var(--tx3)}
.co-close{background:none;border:none;font-size:20px;cursor:pointer;color:var(--tx3);width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center}
.co-close:hover{background:var(--bg);color:var(--tx)}
.co-stepper{display:flex;align-items:center;padding:16px 28px;border-bottom:1px solid var(--bdr);flex-shrink:0;gap:0}
.co-step{display:flex;align-items:center;gap:8px;flex:1}
.co-step:last-child{flex:0}
.co-step-num{width:28px;height:28px;border-radius:50%;border:2px solid var(--bdr);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--tx3);background:#fff;flex-shrink:0;transition:all .2s}
.co-step-num.act{border-color:var(--g1);background:var(--g1);color:white}
.co-step-num.done{border-color:var(--g1);background:var(--g3);color:var(--g1)}
.co-step-label{font-size:12px;font-weight:600;color:var(--tx3);white-space:nowrap}
.co-step-label.act{color:var(--tx);font-weight:700}
.co-step-label.done{color:var(--g1)}
.co-step-line{flex:1;height:1px;background:var(--bdr);margin:0 8px}
.co-step-line.done{background:var(--g1)}
.co-body{display:flex;flex:1;overflow:hidden}
.co-main{flex:1;overflow-y:auto;padding:24px 28px}
.co-aside{width:240px;border-left:1px solid var(--bdr);padding:20px;overflow-y:auto;flex-shrink:0;background:var(--off)}
.co-aside-title{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3);margin-bottom:12px}
.co-aside-item{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--bdr)}
.co-aside-item:last-of-type{border-bottom:none}
.co-aside-icon{width:34px;height:34px;min-width:34px;border-radius:7px;background:linear-gradient(135deg,#e4ede3,#c8d9c6);display:flex;align-items:center;justify-content:center;font-size:16px}
.co-aside-name{font-size:12px;font-weight:600;color:var(--tx);line-height:1.3}
.co-aside-meta{font-size:11px;color:var(--tx3);margin-top:1px}
.co-aside-price{font-size:13px;font-weight:700;color:var(--tx);margin-top:3px}
.co-aside-divider{border:none;border-top:1px solid var(--bdr);margin:10px 0}
.co-aside-row{display:flex;justify-content:space-between;font-size:12px;color:var(--tx2);margin-bottom:5px}
.co-aside-total{display:flex;justify-content:space-between;font-size:14px;font-weight:800;color:var(--tx);margin-top:8px}
.co-aside-total span:last-child{font-family:'DM Serif Display',serif;font-size:18px}
.co-section{font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--tx3);margin:0 0 14px}
.co-section+.co-section{margin-top:20px}
.co-grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.co-grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px}
.co-field{margin-bottom:14px}
.co-field label{display:block;font-size:12px;font-weight:600;color:var(--tx2);margin-bottom:5px}
.co-field input,.co-field select{width:100%;padding:10px 13px;border:1.5px solid var(--bdr);border-radius:var(--rs);font-size:14px;font-family:inherit;outline:none;transition:border .15s;background:white;color:var(--tx)}
.co-field input:focus,.co-field select:focus{border-color:var(--g1)}
.co-field input.err,.co-field select.err{border-color:#DC2626}
.co-err{font-size:11px;color:#DC2626;margin-top:3px}
.co-login-card{border:1.5px solid var(--bdr);border-radius:var(--r);padding:16px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;gap:12px}
.co-login-card p{font-size:13px;color:var(--tx2);line-height:1.5}
.co-login-card strong{color:var(--tx)}
.co-login-btn{padding:8px 16px;background:none;border:1.5px solid var(--g1);border-radius:var(--rs);font-size:12.5px;font-weight:700;color:var(--g1);cursor:pointer;font-family:inherit;white-space:nowrap}
.co-login-btn:hover{background:var(--g3)}
.co-pay-method{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}
.co-pm{border:2px solid var(--bdr);border-radius:var(--r);padding:14px 10px;text-align:center;cursor:pointer;transition:all .15s;background:#fff}
.co-pm:hover{border-color:var(--g4)}
.co-pm.sel{border-color:var(--g1);background:var(--g3)}
.co-pm-icon{font-size:24px;margin-bottom:6px}
.co-pm-label{font-size:12px;font-weight:700;color:var(--tx)}
.co-pm-sub{font-size:10.5px;color:var(--tx3);margin-top:2px}
.co-card-fields{background:var(--off);border:1px solid var(--bdr);border-radius:var(--r);padding:16px;margin-bottom:16px;animation:fadeSlide .2s}
.co-mb-fields{background:var(--off);border:1px solid var(--bdr);border-radius:var(--r);padding:16px;margin-bottom:16px;animation:fadeSlide .2s;text-align:center}
.co-mb-ref{font-family:monospace;font-size:22px;font-weight:800;letter-spacing:.12em;color:var(--tx);background:#fff;border:1px solid var(--bdr);border-radius:var(--rs);padding:12px 20px;display:inline-block;margin:8px 0}
.co-mb-info{font-size:12px;color:var(--tx3);line-height:1.6}
.co-notice{display:flex;align-items:flex-start;gap:10px;background:#FFF4E6;border:1px solid #F98012;border-radius:var(--rs);padding:12px 14px;font-size:12.5px;color:#B45309;line-height:1.5;margin-top:12px}
.co-footer{padding:16px 28px;border-top:1px solid var(--bdr);display:flex;align-items:center;justify-content:space-between;flex-shrink:0;gap:12px}
.co-back-btn{padding:10px 20px;background:none;border:1.5px solid var(--bdr);border-radius:var(--rs);font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;color:var(--tx2)}
.co-back-btn:hover{border-color:var(--tx2)}
.co-next-btn{padding:11px 28px;background:var(--g1);color:white;border:none;border-radius:var(--rs);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s}
.co-next-btn:hover{background:var(--g2)}
.co-next-btn:disabled{background:var(--tx3);cursor:default}
.co-secure{display:flex;align-items:center;gap:5px;font-size:11px;color:var(--tx3)}

/* ── CONFIRMATION ── */
.co-confirm{text-align:center;padding:16px 0 8px;position:relative}
.co-confirm-ring{width:80px;height:80px;border-radius:50%;background:var(--g3);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:36px;animation:checkPop .5s ease}
.co-confirm h2{font-family:'DM Serif Display',serif;font-size:28px;color:var(--tx);margin-bottom:8px}
.co-confirm p{font-size:14px;color:var(--tx2);line-height:1.65;max-width:380px;margin:0 auto 24px}
.co-confirm-details{background:var(--off);border:1px solid var(--bdr);border-radius:var(--r);padding:16px 20px;text-align:left;margin-bottom:20px}
.co-confirm-row{display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--bdr);font-size:13px}
.co-confirm-row:last-child{border-bottom:none;font-weight:700}
.co-confirm-row span:first-child{color:var(--tx3)}
.co-confirm-row span:last-child{color:var(--tx);font-weight:600}
.co-confetti{position:absolute;top:0;left:50%;pointer-events:none}
.co-confetti span{position:absolute;width:8px;height:8px;border-radius:2px;animation:confetti 1.2s ease forwards}
`;

const CURSOS = [
  {id:1,nome:"Agricultura Sustentável",area:"Agrícola",tipo:"Nível Elementar",modal:"e-Learning",preco:200,precoPromo:140,horas:50,data:"7 Abr 2026",rat:4.8,nR:142,icon:"🌾",iconLabel:"Campo agrícola",formador:"Prof. João Ferreira"},
  {id:2,nome:"Cultura do Olival",area:"Agrícola",tipo:"Nível Intermédio",modal:"Live-Learning",preco:225,precoPromo:null,horas:50,data:"20 Abr 2026",rat:4.9,nR:98,icon:"🫒",iconLabel:"Olival",formador:"Eng. Ana Matos"},
  {id:3,nome:"Gestão da Empresa Agrícola",area:"Gestão",tipo:"Nível Intermédio",modal:"Live-Learning",preco:270,precoPromo:null,horas:50,data:"5 Mai 2026",rat:4.7,nR:115,icon:"📊",iconLabel:"Gestão",formador:"Dr. Rui Carvalho"},
  {id:4,nome:"Cultura do Castanheiro",area:"Agrícola",tipo:"Nível Intermédio",modal:"Live-Learning",preco:190,precoPromo:null,horas:25,data:"21 Set 2026",rat:4.8,nR:67,icon:"🌰",iconLabel:"Castanheiro",formador:"Eng. Marta Silva"},
  {id:5,nome:"Apicultura",area:"Pecuária",tipo:"Nível Elementar",modal:"Live-Learning",preco:230,precoPromo:null,horas:50,data:"12 Mai 2026",rat:4.9,nR:89,icon:"🐝",iconLabel:"Apicultura",formador:"Prof. António Belo"},
  {id:6,nome:"Segurança e Saúde no Trabalho Agrícola",area:"Agrícola",tipo:"Nível Elementar",modal:"e-Learning",preco:200,precoPromo:140,horas:50,data:"Acesso imediato",rat:4.6,nR:203,icon:"🦺",iconLabel:"Segurança",formador:"Dra. Sofia Lopes"},
  {id:7,nome:"Viticultura e Enologia",area:"Agrícola",tipo:"Nível Avançado",modal:"Live-Learning",preco:310,precoPromo:null,horas:75,data:"14 Jun 2026",rat:4.9,nR:54,icon:"🍇",iconLabel:"Vinha",formador:"Eng. Pedro Nunes"},
  {id:8,nome:"Produção de Bovinos de Carne",area:"Pecuária",tipo:"Nível Intermédio",modal:"Live-Learning",preco:245,precoPromo:null,horas:50,data:"3 Jun 2026",rat:4.7,nR:61,icon:"🐄",iconLabel:"Bovinos",formador:"Dr. Luís Gomes"},
  {id:9,nome:"Transformação e Qualidade Alimentar",area:"Agroindustrial",tipo:"Nível Intermédio",modal:"e-Learning",preco:185,precoPromo:130,horas:50,data:"Acesso imediato",rat:4.5,nR:77,icon:"🏭",iconLabel:"Agroindustrial",formador:"Dra. Carla Reis"},
  {id:10,nome:"Turismo Rural e Agroturismo",area:"Turismo",tipo:"Nível Elementar",modal:"e-Learning",preco:160,precoPromo:null,horas:25,data:"Acesso imediato",rat:4.6,nR:88,icon:"🌿",iconLabel:"Turismo Rural",formador:"Dra. Inês Martins"},
  {id:11,nome:"Solos e Fertilidade",area:"Agrícola",tipo:"Nível Elementar",modal:"e-Learning",preco:200,precoPromo:140,horas:50,data:"Acesso imediato",rat:4.8,nR:130,icon:"🪱",iconLabel:"Solos",formador:"Prof. João Ferreira"},
  {id:12,nome:"Sistemas de Rega e Irrigação",area:"Agrícola",tipo:"Nível Avançado",modal:"Live-Learning",preco:290,precoPromo:null,horas:75,data:"22 Set 2026",rat:4.7,nR:42,icon:"💧",iconLabel:"Irrigação",formador:"Eng. Marta Silva"},
];

const PROGRAMA_MODULOS = [
  {num:"01",titulo:"Introdução à gestão agrícola e agronegócio",horas:"6h",topicos:["Conceitos fundamentais de agronegócio","Estrutura e organização da empresa agrícola","O mercado agrícola em Portugal e na UE"],recursos:["📄 Guia introdutório PDF","🎥 Vídeo-aula gravada"]},
  {num:"02",titulo:"Contabilidade e fiscalidade no setor agrícola",horas:"10h",topicos:["Noções de contabilidade agrícola","Regimes fiscais aplicáveis","IVA, IRC e incentivos fiscais ao setor"],recursos:["📄 Templates de registo contabilístico","📊 Exercícios práticos"]},
  {num:"03",titulo:"Análise de custos e rendibilidade",horas:"8h",topicos:["Identificação de fatores e custos de produção","Cálculo de margens brutas","Análise custo-benefício por cultura"],recursos:["📊 Folha de cálculo de custos","📄 Casos de estudo reais"]},
  {num:"04",titulo:"Planeamento estratégico e business plan",horas:"10h",topicos:["Análise SWOT aplicada à exploração","Definição de objetivos e KPIs","Elaboração de plano de negócios agrícola"],recursos:["📄 Modelo de business plan","🎥 Webinar com especialista"]},
  {num:"05",titulo:"Acesso a apoios e financiamentos (PEPAC)",horas:"10h",topicos:["Medidas PEPAC 23-27 aplicáveis","Elegibilidade e requisitos de candidatura","Preenchimento e submissão de pedidos"],recursos:["📄 Guia PEPAC 2024","🔗 Acesso à plataforma iSAFP"]},
  {num:"06",titulo:"Avaliação final e projeto prático",horas:"6h",topicos:["Elaboração de plano de gestão para exploração real","Apresentação e defesa do projeto","Critérios de avaliação e certificação"],recursos:["📄 Guião do projeto final","✅ Rubrica de avaliação"]},
];

const EBOOKS=[{id:"eb1",nome:"Guia Prático de Gestão Agrícola",preco:19.90,icon:"📗"},{id:"eb2",nome:"Manual de Contabilidade Rural",preco:14.90,icon:"📘"},{id:"eb3",nome:"PEPAC 2023-2027: Guia do Agricultor",preco:12.90,icon:"📙"}];
const TESTS=[{nome:"Helena B.",curso:"Fitossanidade Agrícola",ini:"H",txt:"A formação destacou-se pela qualidade dos formadores e pela forte ligação ao setor agrícola real. Foi uma mais-valia no meu percurso profissional."},{nome:"João S.",curso:"Gestão da Empresa Agrícola",ini:"J",txt:"Gostei muito da formação: muito percetível, muito prática e falámos de temas que não esperava e que foram bastante enriquecedores."},{nome:"Maria T.",curso:"Apicultura",ini:"M",txt:"O curso não só permitiu adquirir bases sólidas, como me motivou a querer saber mais e a iniciar-me como apicultor!"}];
const FAQS=[{q:"Os cursos AgroB são certificados?",a:"Sim. Os participantes aprovados recebem dois certificados: o certificado AgroB (digital, via Moodle) e o certificado de formação profissional emitido pela plataforma SIGO, em conformidade com a Portaria nº 474/2010."},{q:"Quanto custa a formação Jovem Agricultor (150 horas)?",a:"O percurso completo de 150 horas custa €420 (preço promocional, valor original €600). Inclui 3 cursos: Agricultura Sustentável, Segurança e Saúde no Trabalho Agrícola, e Solos e Fertilidade."},{q:"Posso fazer a formação ao meu ritmo?",a:"Depende da modalidade. e-Learning e Video-Learning são assíncronos — aprende ao seu ritmo com 60 dias de acesso. Live-Learning combina sessões assíncronas com videoconferências em datas fixas."},{q:"Os cursos são elegíveis para candidaturas PEPAC?",a:"Muitos dos nossos cursos são elegíveis para candidaturas Jovem Agricultor e Pedido Único ao abrigo do PEPAC 23.27."},{q:"Que métodos de pagamento aceitam?",a:"Aceitamos referência Multibanco, MB WAY, transferência bancária e cartão de crédito/débito. O pagamento é processado de forma segura através do SIBS Gateway."}];
const AREAS=["Agrícola","Pecuária","Agroindustrial","Gestão","Turismo"];
const MODAIS=["e-Learning","Live-Learning","Presencial","Video-Learning"];
const NIVEIS=["Curso Tutorial","Especialização","Nível Avançado","Nível Elementar","Nível Intermédio","Pós-graduação","Prática de Campo","Seminário"];
const MOCK_INSCRICOES=[{nome:"Agricultura Sustentável",data:"Jan 2026",horas:"50h",estado:"ativo"},{nome:"Segurança e Saúde no Trabalho Agrícola",data:"Nov 2025",horas:"50h",estado:"concluido"}];

const Stars = ({r,sz=12}) => <span style={{color:"#B08D2A",fontSize:sz}}>{"★".repeat(Math.floor(r))}{"☆".repeat(5-Math.floor(r))}</span>;

const FAQItem = ({q,a}) => {
  const [o,setO]=useState(false);
  return <div className="faq-item"><button className="faq-q" onClick={()=>setO(!o)}>{q}<span className={`faq-ic${o?" open":""}`}>+</span></button>{o&&<div className="faq-a">{a}</div>}</div>;
};

const AccordionItem = ({title,children}) => {
  const [o,setO]=useState(false);
  return (
    <div className="cd-accordion">
      <button className="cd-acc-head" onClick={()=>setO(!o)}>{title}<span className={`cd-acc-ic${o?" open":""}`}>▾</span></button>
      {o&&<div className="cd-acc-body">{children}</div>}
    </div>
  );
};

const ProgramaTimeline = () => {
  const [active,setActive]=useState(null);
  return (
    <div className="tl-wrap">
      <div className="tl-line"/>
      {PROGRAMA_MODULOS.map((m,i)=>{
        const isOpen=active===i;
        return (
          <div key={i} className="tl-item">
            <div className={`tl-node${isOpen?" act":""}`}/>
            <div className={`tl-head${isOpen?" act":""}`} onClick={()=>setActive(isOpen?null:i)}>
              <span className="tl-num">Módulo {m.num}</span>
              <span className="tl-titulo">{m.titulo}</span>
              <span className="tl-horas">⏱ {m.horas}</span>
              <span className={`tl-chevron${isOpen?" open":""}`}>▾</span>
            </div>
            {isOpen&&(
              <div className="tl-body">
                <div className="tl-section-label">Tópicos</div>
                {m.topicos.map((t,j)=><div key={j} className="tl-topico"><div className="tl-dot"/>{t}</div>)}
                <div className="tl-section-label">Recursos incluídos</div>
                <div className="tl-recursos">{m.recursos.map((r,j)=><span key={j} className="tl-recurso">{r}</span>)}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// ── CHECKOUT MODAL ──────────────────────────────────────────
const CONFETTI_COLORS = ["#1A7A3C","#52A96E","#E8F5EE","#B08D2A","#1C2B4A","#F98012"];

const CheckoutModal = ({items, onClose, onSuccess}) => {
  const [step, setStep] = useState(1); // 1=dados, 2=faturação, 3=pagamento, 4=confirmação
  const [payMethod, setPayMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    nome:"", apelido:"", email:"", telefone:"",
    nif:"", morada:"", cp:"", localidade:"", pais:"Portugal",
    cartao:"", validade:"", cvv:"", titular:"",
    mbwayTel:""
  });

  const upd = (k,v) => { setForm(p=>({...p,[k]:v})); setErrors(p=>({...p,[k]:""})); };

  const total = items.reduce((s,i)=>s+i.preco,0);
  const refMB = "023 1493 5987";

  const validate1 = () => {
    const e={};
    if(!form.nome.trim()) e.nome="Campo obrigatório";
    if(!form.apelido.trim()) e.apelido="Campo obrigatório";
    if(!form.email.trim()||!form.email.includes("@")) e.email="E-mail inválido";
    if(!form.telefone.trim()) e.telefone="Campo obrigatório";
    setErrors(e);
    return Object.keys(e).length===0;
  };
  const validate2 = () => {
    const e={};
    if(!form.nif.trim()) e.nif="Campo obrigatório";
    if(!form.morada.trim()) e.morada="Campo obrigatório";
    if(!form.cp.trim()) e.cp="Campo obrigatório";
    if(!form.localidade.trim()) e.localidade="Campo obrigatório";
    setErrors(e);
    return Object.keys(e).length===0;
  };
  const validate3 = () => {
    if(payMethod==="card"){
      const e={};
      if(!form.cartao.trim()||form.cartao.replace(/\s/g,"").length<16) e.cartao="Número de cartão inválido";
      if(!form.validade.trim()) e.validade="Obrigatório";
      if(!form.cvv.trim()||form.cvv.length<3) e.cvv="CVV inválido";
      if(!form.titular.trim()) e.titular="Campo obrigatório";
      setErrors(e);
      return Object.keys(e).length===0;
    }
    if(payMethod==="mbway"){
      const e={};
      if(!form.mbwayTel.trim()) e.mbwayTel="Campo obrigatório";
      setErrors(e);
      return Object.keys(e).length===0;
    }
    return true; // mb ref — sem campos adicionais
  };

  const handleNext = () => {
    if(step===1&&!validate1()) return;
    if(step===2&&!validate2()) return;
    if(step===3){
      if(!validate3()) return;
      setLoading(true);
      setTimeout(()=>{ setLoading(false); setStep(4); }, 1800);
      return;
    }
    setStep(s=>s+1);
  };

  const stepLabels = ["Dados pessoais","Faturação","Pagamento","Confirmação"];

  const fmtCard = v => v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  const fmtVal  = v => { const d=v.replace(/\D/g,"").slice(0,4); return d.length>2?d.slice(0,2)+"/"+d.slice(2):d; };

  return (
    <div className="co-overlay" onClick={e=>{if(e.target.classList.contains("co-overlay"))onClose()}}>
      <div className="co-modal">
        {/* Header */}
        <div className="co-header">
          <div className="co-header-left">
            <div className="co-logo">🌿</div>
            <div>
              <div className="co-header-title">Finalizar Inscrição</div>
              <div className="co-header-sub">Pagamento seguro · Isento de IVA</div>
            </div>
          </div>
          <button className="co-close" onClick={onClose}>×</button>
        </div>

        {/* Stepper */}
        <div className="co-stepper">
          {stepLabels.map((l,i)=>{
            const n=i+1;
            const done=step>n, act=step===n;
            return (
              <div key={i} className="co-step" style={i===stepLabels.length-1?{flex:0}:{}}>
                <div className={`co-step-num${act?" act":done?" done":""}`}>{done?"✓":n}</div>
                <div className={`co-step-label${act?" act":done?" done":""}`}>{l}</div>
                {i<stepLabels.length-1&&<div className={`co-step-line${done?" done":""}`}/>}
              </div>
            );
          })}
        </div>

        {/* Body */}
        <div className="co-body">
          <div className="co-main">
            {/* STEP 1 — Dados pessoais */}
            {step===1&&(
              <>
                <div className="co-login-card">
                  <p><strong>Já tem conta AgroB?</strong><br/>Inicie sessão para preencher automaticamente.</p>
                  <button className="co-login-btn">Iniciar sessão</button>
                </div>
                <div className="co-section">Dados pessoais</div>
                <div className="co-grid2">
                  <div className="co-field"><label>Nome *</label><input className={errors.nome?"err":""} value={form.nome} onChange={e=>upd("nome",e.target.value)} placeholder="João"/>{errors.nome&&<div className="co-err">{errors.nome}</div>}</div>
                  <div className="co-field"><label>Apelido *</label><input className={errors.apelido?"err":""} value={form.apelido} onChange={e=>upd("apelido",e.target.value)} placeholder="Silva"/>{errors.apelido&&<div className="co-err">{errors.apelido}</div>}</div>
                </div>
                <div className="co-field"><label>E-mail *</label><input type="email" className={errors.email?"err":""} value={form.email} onChange={e=>upd("email",e.target.value)} placeholder="joao@exemplo.pt"/>{errors.email&&<div className="co-err">{errors.email}</div>}</div>
                <div className="co-field"><label>Telefone *</label><input className={errors.telefone?"err":""} value={form.telefone} onChange={e=>upd("telefone",e.target.value)} placeholder="+351 912 345 678"/>{errors.telefone&&<div className="co-err">{errors.telefone}</div>}</div>
              </>
            )}

            {/* STEP 2 — Faturação */}
            {step===2&&(
              <>
                <div className="co-section">Dados de faturação</div>
                <div className="co-field"><label>NIF *</label><input className={errors.nif?"err":""} value={form.nif} onChange={e=>upd("nif",e.target.value)} placeholder="123 456 789"/>{errors.nif&&<div className="co-err">{errors.nif}</div>}</div>
                <div className="co-field"><label>Morada *</label><input className={errors.morada?"err":""} value={form.morada} onChange={e=>upd("morada",e.target.value)} placeholder="Rua das Oliveiras, 12"/>{errors.morada&&<div className="co-err">{errors.morada}</div>}</div>
                <div className="co-grid3">
                  <div className="co-field" style={{gridColumn:"span 1"}}><label>Cód. Postal *</label><input className={errors.cp?"err":""} value={form.cp} onChange={e=>upd("cp",e.target.value)} placeholder="4000-123"/>{errors.cp&&<div className="co-err">{errors.cp}</div>}</div>
                  <div className="co-field" style={{gridColumn:"span 2"}}><label>Localidade *</label><input className={errors.localidade?"err":""} value={form.localidade} onChange={e=>upd("localidade",e.target.value)} placeholder="Porto"/>{errors.localidade&&<div className="co-err">{errors.localidade}</div>}</div>
                </div>
                <div className="co-field"><label>País</label>
                  <select value={form.pais} onChange={e=>upd("pais",e.target.value)}>
                    <option>Portugal</option><option>Espanha</option><option>Brasil</option><option>Outro</option>
                  </select>
                </div>
              </>
            )}

            {/* STEP 3 — Pagamento */}
            {step===3&&(
              <>
                <div className="co-section">Método de pagamento</div>
                <div className="co-pay-method">
                  {[["card","💳","Cartão","Visa / Mastercard"],["mb","🏧","Multibanco","Referência MB"],["mbway","📱","MB WAY","Pagamento móvel"]].map(([id,ic,lb,sb])=>(
                    <div key={id} className={`co-pm${payMethod===id?" sel":""}`} onClick={()=>{setPayMethod(id);setErrors({});}}>
                      <div className="co-pm-icon">{ic}</div>
                      <div className="co-pm-label">{lb}</div>
                      <div className="co-pm-sub">{sb}</div>
                    </div>
                  ))}
                </div>

                {payMethod==="card"&&(
                  <div className="co-card-fields">
                    <div className="co-field"><label>Número do cartão *</label><input className={errors.cartao?"err":""} value={form.cartao} onChange={e=>upd("cartao",fmtCard(e.target.value))} placeholder="0000 0000 0000 0000" maxLength={19}/>{errors.cartao&&<div className="co-err">{errors.cartao}</div>}</div>
                    <div className="co-grid2">
                      <div className="co-field"><label>Validade *</label><input className={errors.validade?"err":""} value={form.validade} onChange={e=>upd("validade",fmtVal(e.target.value))} placeholder="MM/AA" maxLength={5}/>{errors.validade&&<div className="co-err">{errors.validade}</div>}</div>
                      <div className="co-field"><label>CVV *</label><input type="password" className={errors.cvv?"err":""} value={form.cvv} onChange={e=>upd("cvv",e.target.value.replace(/\D/g,"").slice(0,4))} placeholder="•••" maxLength={4}/>{errors.cvv&&<div className="co-err">{errors.cvv}</div>}</div>
                    </div>
                    <div className="co-field"><label>Nome no cartão *</label><input className={errors.titular?"err":""} value={form.titular} onChange={e=>upd("titular",e.target.value)} placeholder="JOAO SILVA"/>{errors.titular&&<div className="co-err">{errors.titular}</div>}</div>
                  </div>
                )}

                {payMethod==="mb"&&(
                  <div className="co-mb-fields">
                    <div style={{fontSize:12,color:"var(--tx3)",marginBottom:6}}>Referência gerada para este pedido</div>
                    <div style={{fontSize:11,color:"var(--tx3)"}}>Entidade</div>
                    <div className="co-mb-ref">21 069</div>
                    <div style={{fontSize:11,color:"var(--tx3)",marginTop:8}}>Referência</div>
                    <div className="co-mb-ref">{refMB}</div>
                    <div style={{fontSize:11,color:"var(--tx3)",marginTop:8}}>Montante</div>
                    <div className="co-mb-ref">€ {total.toFixed(2)}</div>
                    <div className="co-mb-info" style={{marginTop:12}}>Válida por 72 horas. Após confirmação do pagamento receberá acesso imediato por e-mail.</div>
                  </div>
                )}

                {payMethod==="mbway"&&(
                  <div className="co-card-fields">
                    <div className="co-field"><label>Número de telemóvel MB WAY *</label><input className={errors.mbwayTel?"err":""} value={form.mbwayTel} onChange={e=>upd("mbwayTel",e.target.value)} placeholder="+351 912 345 678"/>{errors.mbwayTel&&<div className="co-err">{errors.mbwayTel}</div>}</div>
                    <div style={{fontSize:12.5,color:"var(--tx3)",lineHeight:1.6}}>Após confirmar, receberá uma notificação na app MB WAY para aprovar o pagamento de <strong style={{color:"var(--tx)"}}>€{total.toFixed(2)}</strong>.</div>
                  </div>
                )}

                <div className="co-notice">🔒 <span>Este pagamento é processado de forma segura via <strong>SIBS Gateway</strong>. Os seus dados nunca são armazenados nos nossos servidores.</span></div>
              </>
            )}

            {/* STEP 4 — Confirmação */}
            {step===4&&(
              <div className="co-confirm">
                <div className="co-confetti">
                  {Array.from({length:12}).map((_,i)=>(
                    <span key={i} style={{background:CONFETTI_COLORS[i%CONFETTI_COLORS.length],left:`${(i-6)*18}px`,animationDelay:`${i*0.08}s`,animationDuration:`${1+i*0.1}s`}}/>
                  ))}
                </div>
                <div className="co-confirm-ring">✅</div>
                <h2>Inscrição confirmada!</h2>
                <p>Obrigado, <strong>{form.nome||"formando"}</strong>! A sua inscrição foi processada com sucesso. Receberá um e-mail de confirmação em <strong>{form.email||"o seu e-mail"}</strong> com os detalhes de acesso.</p>
                <div className="co-confirm-details">
                  {items.map((it,i)=>(
                    <div key={i} className="co-confirm-row">
                      <span>{it.icon} {it.nome}</span>
                      <span>€{it.preco.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="co-confirm-row"><span>Método de pagamento</span><span>{{card:"Cartão de crédito",mb:"Multibanco",mbway:"MB WAY"}[payMethod]}</span></div>
                  <div className="co-confirm-row"><span>Total pago</span><span>€{total.toFixed(2)}</span></div>
                </div>
                <button className="co-next-btn" onClick={onSuccess} style={{width:"100%",padding:"13px"}}>Ir para a minha área de formação →</button>
              </div>
            )}
          </div>

          {/* Aside — resumo */}
          {step<4&&(
            <div className="co-aside">
              <div className="co-aside-title">Resumo do pedido</div>
              {items.map((it,i)=>(
                <div key={i} className="co-aside-item">
                  <div className="co-aside-icon">{it.icon}</div>
                  <div>
                    <div className="co-aside-name">{it.nome}</div>
                    <div className="co-aside-meta">{it.modal} · {it.horas}</div>
                    <div className="co-aside-price">€{it.preco.toFixed(2)}</div>
                  </div>
                </div>
              ))}
              <hr className="co-aside-divider"/>
              <div className="co-aside-row"><span>Subtotal</span><span>€{total.toFixed(2)}</span></div>
              <div className="co-aside-row"><span>IVA</span><span>Isento</span></div>
              <div className="co-aside-total"><span>Total</span><span>€{total.toFixed(2)}</span></div>
              <div style={{marginTop:14,padding:"10px 12px",background:"#E8F5EE",borderRadius:8,fontSize:11.5,color:"#1A7A3C",fontWeight:600,lineHeight:1.5}}>🎓 Certificação SIGO incluída</div>
            </div>
          )}
        </div>

        {/* Footer */}
        {step<4&&(
          <div className="co-footer">
            <div className="co-secure">🔒 Pagamento 100% seguro</div>
            <div style={{display:"flex",gap:10}}>
              {step>1&&<button className="co-back-btn" onClick={()=>setStep(s=>s-1)}>← Voltar</button>}
              <button className="co-next-btn" onClick={handleNext} disabled={loading}>
                {loading ? "A processar…" : step===3 ? (payMethod==="mb"?"Confirmar pedido →":"Pagar agora →") : "Continuar →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ── CART DRAWER ─────────────────────────────────────────────
const CartDrawer = ({items, onRemove, onClose, onCheckout}) => {
  const total = items.reduce((s,i)=>s+i.preco,0);
  return (
    <>
      <div className="cart-drawer-overlay" onClick={onClose}/>
      <div className="cart-drawer">
        <div className="cart-drawer-head">
          <span className="cart-drawer-title">O meu carrinho{items.length>0&&<span style={{fontSize:13,fontWeight:600,color:"#8A9188",marginLeft:6}}>({items.length})</span>}</span>
          <button className="cart-drawer-close" onClick={onClose}>×</button>
        </div>
        <div className="cart-drawer-body">
          {items.length===0?(
            <div className="cart-drawer-empty">
              <div className="cart-drawer-empty-icon">🛒</div>
              <div className="cart-drawer-empty-title">Carrinho vazio</div>
              <div className="cart-drawer-empty-sub">Ainda não adicionou nenhum curso ao carrinho.</div>
            </div>
          ):items.map(it=>(
            <div key={it.id} className="cart-drawer-item">
              <div className="cart-drawer-item-icon">{it.icon}</div>
              <div style={{flex:1,minWidth:0}}>
                <div className="cart-drawer-item-name">{it.nome}</div>
                <div className="cart-drawer-item-meta">{it.modal} · {it.horas}</div>
                <div className="cart-drawer-item-price">€{it.preco.toFixed(2)}</div>
              </div>
              <button className="cart-drawer-item-remove" onClick={()=>onRemove(it.id)}>×</button>
            </div>
          ))}
        </div>
        {items.length>0&&(
          <div className="cart-drawer-foot">
            <div className="cart-drawer-total-row"><span className="cart-drawer-total-label">Total</span><span className="cart-drawer-total-value">€{total.toFixed(2)}</span></div>
            <div className="cart-drawer-note">Isento de IVA · Pagamento seguro via SIBS</div>
            <button className="cart-drawer-btn-primary" onClick={onCheckout}>Finalizar inscrição →</button>
            <button className="cart-drawer-btn-secondary" onClick={onClose}>Continuar a explorar</button>
          </div>
        )}
      </div>
    </>
  );
};

const NavDropdown = ({label,items}) => {
  const [open,setOpen]=useState(false);
  return (
    <div className="dropdown" onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
      <button className={`nl${open?" act":""}`}>{label} <span style={{fontSize:9,opacity:.6}}>{open?"▲":"▼"}</span></button>
      {open&&<div className="dropdown-menu">{items.map((it,i)=><button key={i} className="dropdown-item" onClick={()=>{setOpen(false);it.onClick&&it.onClick();}}><span className="di-icon">{it.icon}</span><span><span className="di-label">{it.label}</span>{it.desc&&<span className="di-desc">{it.desc}</span>}</span></button>)}</div>}
    </div>
  );
};

const ClientModal = ({onClose}) => {
  const [tab,setTab]=useState("login");
  const [logged,setLogged]=useState(false);
  const [ct,setCt]=useState("historico");
  if(!logged) return (
    <div className="modal-overlay" onClick={e=>{if(e.target.classList.contains("modal-overlay"))onClose()}}>
      <div className="modal">
        <div className="modal-head"><h2>{tab==="login"?"Bem-vindo de volta":"Criar conta"}</h2><button className="modal-close" onClick={onClose}>×</button></div>
        <div className="modal-tabs"><button className={`modal-tab${tab==="login"?" act":""}`} onClick={()=>setTab("login")}>Entrar</button><button className={`modal-tab${tab==="register"?" act":""}`} onClick={()=>setTab("register")}>Registar</button></div>
        <div className="modal-body">
          {tab==="login"?(<><div className="mfield"><label>E-mail</label><input type="email" placeholder="o-seu@email.pt"/></div><div className="mfield"><label>Palavra-passe</label><input type="password" placeholder="••••••••"/></div><button className="msubmit" onClick={()=>setLogged(true)}>Entrar na minha conta</button><div className="m-or">ou</div><button className="m-google">🔵 Continuar com Google</button><div className="m-link">Esqueceu a palavra-passe? <a>Recuperar</a></div></>)
          :(<><div className="mfield"><label>Nome completo</label><input type="text" placeholder="João Silva"/></div><div className="mfield"><label>E-mail</label><input type="email" placeholder="o-seu@email.pt"/></div><div className="mfield"><label>Palavra-passe</label><input type="password" placeholder="Mín. 8 caracteres"/></div><button className="msubmit">Criar conta</button><div className="m-link" style={{marginTop:10}}>Ao registar aceita os <a>Termos e Condições</a></div></>)}
        </div>
      </div>
    </div>
  );
  return (
    <div className="modal-overlay" onClick={e=>{if(e.target.classList.contains("modal-overlay"))onClose()}}>
      <div className="modal">
        <div className="modal-head"><div style={{display:"flex",alignItems:"center",gap:9}}><div style={{width:32,height:32,borderRadius:"50%",background:"var(--g3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:"var(--g1)"}}>J</div><div><div style={{fontSize:14,fontWeight:700}}>João Silva</div><div style={{fontSize:11,color:"var(--tx3)"}}>joao.silva@email.pt</div></div></div><button className="modal-close" onClick={onClose}>×</button></div>
        <div className="modal-tabs"><button className={`modal-tab${ct==="historico"?" act":""}`} onClick={()=>setCt("historico")}>📋 Inscrições</button><button className={`modal-tab${ct==="perfil"?" act":""}`} onClick={()=>setCt("perfil")}>👤 Perfil</button><button className={`modal-tab${ct==="faturacao"?" act":""}`} onClick={()=>setCt("faturacao")}>🧾 Faturação</button></div>
        <div className="modal-body">
          {ct==="historico"&&MOCK_INSCRICOES.map((it,i)=><div key={i} className="inscricao-item"><div><div className="inscricao-nome">{it.nome}</div><div className="inscricao-meta">{it.data} · {it.horas}</div></div><span className={`inscricao-badge ${it.estado==="ativo"?"badge-ativo":"badge-concluido"}`}>{it.estado==="ativo"?"Em curso":"Concluído"}</span></div>)}
          {ct==="perfil"&&<><div className="m-section-title">Dados pessoais</div><div className="mrow2"><div className="mfield"><label>Nome</label><input defaultValue="João" type="text"/></div><div className="mfield"><label>Apelido</label><input defaultValue="Silva" type="text"/></div></div><div className="mfield"><label>E-mail</label><input defaultValue="joao.silva@email.pt" type="email"/></div><button className="msubmit">Guardar</button></>}
          {ct==="faturacao"&&<><div className="m-section-title">Dados de faturação</div><div className="mfield"><label>NIF</label><input defaultValue="123 456 789" type="text"/></div><div className="mfield"><label>Morada</label><input defaultValue="Rua das Oliveiras, 12" type="text"/></div><div className="mrow2"><div className="mfield"><label>Código Postal</label><input defaultValue="4000-123" type="text"/></div><div className="mfield"><label>Localidade</label><input defaultValue="Porto" type="text"/></div></div><button className="msubmit">Guardar</button></>}
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({c,onDetail}) => {
  const desconto=c.precoPromo?Math.round((1-c.precoPromo/c.preco)*100):null;
  const ini=c.formador.split(" ").pop()[0];
  return (
    <div className="cc" onClick={()=>onDetail&&onDetail(c)}>
      <div className="cc-thumb">
        <div className="cc-thumb-ph"><span className="cc-ph-icon">{c.icon}</span><span className="cc-ph-label">{c.iconLabel}</span></div>
        <div className="cc-tl"><span className="cc-badge">{c.modal}</span>{desconto&&<span className="cc-promo">-{desconto}%</span>}</div>
      </div>
      <div className="cc-body">
        <div className="cc-areas"><span className={`cc-area cc-area-${c.area}`}>{c.area}</span><span className="cc-tipo">{c.tipo}</span></div>
        <div className="cc-name">{c.nome}</div>
        <div className="cc-formador"><div className="cc-av">{ini}</div><span className="cc-fname">{c.formador}</span></div>
        <div style={{display:"flex",alignItems:"center",gap:4,fontSize:11.5,color:"var(--tx2)"}}><Stars r={c.rat}/><span style={{marginLeft:2}}>{c.rat} ({c.nR})</span></div>
      </div>
      <div className="cc-meta"><span>⏱ {c.horas}h</span><span>📅 {c.data}</span></div>
      <hr className="cc-divider"/>
      <div className="cc-pricing">
        <div>{c.precoPromo&&<span className="cc-price-old">€{c.preco.toFixed(2)}</span>}<span className="cc-price">€{(c.precoPromo||c.preco).toFixed(2)}</span></div>
        <button className="cc-ver" onClick={e=>{e.stopPropagation();onDetail&&onDetail(c)}}>Ver Detalhes →</button>
      </div>
    </div>
  );
};

const Navbar = ({page,setPage,setShowModal,setShowCart,cartCount}) => (
  <nav className="nav">
    <div className="nav-in">
      <div className="logo-wrap" onClick={()=>setPage("home")}>
        <div className="logo-mark"><span style={{color:"white",fontSize:17}}>🌿</span></div>
        <div className="logo-text"><span className="logo-a">AgroB</span><span className="logo-b">Business School</span></div>
      </div>
      <div className="nav-links">
        <button className={`nl${page==="catalog"?" act":""}`} onClick={()=>setPage("catalog")}>Cursos</button>
        <button className="nl">E-books</button><button className="nl">Sobre Nós</button>
        <NavDropdown label="Media" items={[{icon:"✍️",label:"Blog",desc:"Artigos e dicas do setor"},{icon:"📅",label:"Eventos",desc:"Webinars e sessões ao vivo"}]}/>
        <button className="nl">Contactos</button>
      </div>
      <div className="nav-right">
        <a className="moodle-btn" href="#"><div className="moodle-icon">M</div><div className="moodle-text">Plataforma de ensino</div></a>
        <button className="nav-icon-btn" onClick={()=>setShowCart(true)}>🛒{cartCount>0&&<span className="nav-badge">{cartCount}</span>}</button>
        <button className="nav-icon-btn" onClick={()=>setShowModal(true)}>👤</button>
        <button className="nav-cta">Pedir contacto</button>
      </div>
    </div>
  </nav>
);

const Footer = ({setPage}) => (
  <footer className="foot">
    <div className="foot-in">
      <div className="foot-top">
        <div className="foot-brand">
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14,cursor:"pointer"}} onClick={()=>setPage("home")}>
            <div className="logo-mark"><span style={{color:"white",fontSize:17}}>🌿</span></div>
            <div className="logo-text"><span className="logo-a" style={{color:"white"}}>AgroB</span><span className="logo-b">Business School</span></div>
          </div>
          <p>Escola de formação profissional certificada nas áreas agrícola, agroindustrial e de turismo rural.</p>
          <div className="foot-contact">+351 224 509 055<br/>info@agrob.pt</div>
          <div className="foot-ev"><div style={{width:28,height:28,background:"var(--ev)",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:"white",fontWeight:800,flexShrink:0}}>EV</div><p><span>Espaço Visual</span> — consultoria agrícola e gestão rural</p></div>
        </div>
        <div><h4>Formação</h4><a href="#" onClick={e=>{e.preventDefault();setPage("catalog")}}>Todos os Cursos</a><a href="#">Jovem Agricultor</a><a href="#">E-books</a><a href="#">Empresas</a></div>
        <div><h4>Informação</h4><a href="#">Sobre a AgroB</a><a href="#">Formadores</a><a href="#">Certificação SIGO</a><a href="#">FAQ</a></div>
        <div><h4>Recursos</h4><a href="#">Blog</a><a href="#">Glossário</a><a href="#">Espaço Visual</a><a href="#">Contactos</a></div>
      </div>
      <div className="foot-bot">
        <p>© 2026 AgroB Business School · Espaço Visual · Todos os direitos reservados</p>
        <div className="foot-certs"><span className="cert-badge">DGERT</span><span className="cert-badge">SIGO</span><span className="cert-badge">PEPAC</span></div>
      </div>
    </div>
  </footer>
);

const HomePage = ({setPage}) => (
  <>
    <section className="hero">
      <div className="hero-grid">
        <div>
          <h1>Formação que<br/>acompanha<br/><em>o seu ritmo.</em></h1>
          <p className="hero-sub">Cursos certificados em agricultura, pecuária e gestão agrícola — em modalidade e-Learning, Live-Learning e presencial.</p>
          <div className="hero-btns">
            <button className="hbtn hbtn-p" onClick={()=>setPage("catalog")}>Ver catálogo de cursos</button>
            <button className="hbtn hbtn-s">Sobre a AgroB →</button>
          </div>
          <div className="hero-stats">
            <div><div className="hs-v">14.393</div><div className="hs-l">Alunos certificados</div></div>
            <div><div className="hs-v">94</div><div className="hs-l">Cursos em catálogo</div></div>
            <div><div className="hs-v">4.8★</div><div className="hs-l">Avaliação média</div></div>
            <div><div className="hs-v">31</div><div className="hs-l">Anos de experiência</div></div>
          </div>
        </div>
        <div className="hero-card">
          <div className="hc-label">★ Destaque · Jovem Agricultor</div>
          <div className="hc-title">Percurso 150 Horas PEPAC</div>
          <div className="hc-sub">Formação obrigatória para candidatos à medida Jovem Agricultor. Acesso imediato após inscrição.</div>
          <div className="hc-items">
            <div className="hc-item"><div className="hc-check">✓</div>Agricultura Sustentável (50h)</div>
            <div className="hc-item"><div className="hc-check">✓</div>Segurança no Trabalho Agrícola (50h)</div>
            <div className="hc-item"><div className="hc-check">✓</div>Solos e Fertilidade (50h)</div>
          </div>
          <div className="hc-price">
            <div><div className="hc-price-v">€420</div><div className="hc-price-info">Isento de IVA</div></div>
            <span className="hc-price-old">€600</span>
            <span style={{marginLeft:"auto",padding:"3px 9px",background:"rgba(93,224,122,0.15)",color:"#5DE07A",fontSize:11,fontWeight:700,borderRadius:6}}>-30%</span>
          </div>
          <button className="hc-btn">Saber mais</button>
        </div>
      </div>
    </section>
    <div className="trust">
      <div className="trust-in">
        {[["🎓","Certificação SIGO","Reconhecida a nível nacional"],["✅","Formação certificada","Válida para candidaturas"],["⚡","Acesso imediato","Nos cursos e-Learning"],["🔒","Pagamento seguro","Via SIBS Gateway"],["📞","Apoio pedagógico","Equipa disponível para ajudar"]].map(([ic,t,s],i)=>(
          <div key={i} className="trust-item"><div className="trust-icon-wrap">{ic}</div><div className="trust-text"><strong>{t}</strong><span>{s}</span></div></div>
        ))}
      </div>
    </div>
    <section className="sec">
      <div className="sec-in">
        <div className="sec-head">
          <div><div className="sec-eyebrow">Catálogo</div><div className="sec-title">Cursos em destaque</div><div className="sec-sub">Formação profissional certificada nas áreas agrícola e pecuária.</div></div>
          <button className="link-btn" onClick={()=>setPage("catalog")}>Ver todos os cursos →</button>
        </div>
        <div className="courses-grid-home">{CURSOS.slice(0,6).map(c=><CourseCard key={c.id} c={c} onDetail={()=>setPage("detail")}/>)}</div>
      </div>
    </section>
    <section className="mission">
      <div className="sec-in">
        <div className="sec-eyebrow">A Nossa Missão</div>
        <div className="sec-title">Formação que chega onde o setor precisa.</div>
        <div className="mission-text">
          <p>A AgroB nasceu da necessidade de <strong>aproximar o conhecimento técnico de quem trabalha no terreno</strong>.</p>
          <p>Todos os conteúdos são desenvolvidos por <strong>formadores com experiência de campo</strong>, validados pela equipa técnica da <strong>Espaço Visual</strong> — com 31 anos de experiência no setor.</p>
        </div>
        <div className="mission-pillars">
          {[["🏆","pillar-thumb-1","Cursos de excelência","Conteúdos rigorosos desenvolvidos por especialistas"],["🤝","pillar-thumb-2","Acompanhamento personalizado","Apoio próximo ao longo do percurso formativo"],["✨","pillar-thumb-3","Experiências inspiradoras","Aprendizagem prática que motiva e transforma"],["🌍","pillar-thumb-4","Comunidade fortalecida","Rede de profissionais do mundo rural em crescimento"]].map(([ic,cls,t,d],i)=>(
            <div key={i} className="pillar"><div className={`pillar-thumb ${cls}`}>{ic}</div><div className="pillar-body"><div className="pillar-title">{t}</div><div className="pillar-desc">{d}</div></div></div>
          ))}
        </div>
      </div>
    </section>
    <section className="sec" style={{background:"var(--off)"}}>
      <div className="sec-in">
        <div className="sec-head"><div><div className="sec-eyebrow">Testemunhos</div><div className="sec-title">O que dizem os nossos formandos</div></div></div>
        <div className="tests-grid">{TESTS.map((t,i)=>(
          <div key={i} className="tc"><div className="tc-stars">★★★★★</div><div className="tc-q">"{t.txt}"</div><div className="tc-author"><div className="tc-av">{t.ini}</div><div><div className="tc-name">{t.nome}</div><div className="tc-course">{t.curso}</div></div></div></div>
        ))}</div>
      </div>
    </section>
    <section className="sec faq-sec">
      <div className="sec-in">
        <div className="faq-grid">
          <div><div className="sec-eyebrow">FAQ</div><div className="sec-title" style={{marginBottom:28}}>Perguntas frequentes</div>{FAQS.map((f,i)=><FAQItem key={i} q={f.q} a={f.a}/>)}</div>
          <div className="faq-aside"><div className="faq-aside-card"><h3>Pronto para começar?</h3><p>Explore o catálogo completo ou fale connosco para perceber qual o percurso formativo mais adequado.</p><div className="faq-aside-btns"><button className="faq-btn-p" onClick={()=>setPage("catalog")}>Ver todos os cursos</button><button className="faq-btn-s">Falar com a equipa</button></div></div></div>
        </div>
      </div>
    </section>
    <section className="cta-band">
      <div className="cta-in">
        <h2>Invista no seu projeto agrícola</h2>
        <p>Formação certificada em e-Learning, Live-Learning e presencial.</p>
        <div className="cta-btns">
          <button className="hbtn hbtn-p" style={{padding:"13px 30px"}} onClick={()=>setPage("catalog")}>Ver catálogo completo</button>
          <button className="hbtn hbtn-s" style={{padding:"13px 30px"}}>Falar com a equipa</button>
        </div>
      </div>
    </section>
  </>
);

const CatalogPage = ({setPage}) => {
  const [search,setSearch]=useState("");
  const [area,setArea]=useState("");
  const [modal,setModal]=useState("");
  const [nivel,setNivel]=useState("");
  const [sort,setSort]=useState("relevancia");
  const [gridView,setGridView]=useState(true);
  const clearAll=()=>{setSearch("");setArea("");setModal("");setNivel("");};
  const filtered=useMemo(()=>{
    let r=CURSOS.filter(c=>{
      if(search&&!c.nome.toLowerCase().includes(search.toLowerCase())&&!c.formador.toLowerCase().includes(search.toLowerCase())) return false;
      if(area&&c.area!==area) return false;
      if(modal&&c.modal!==modal) return false;
      if(nivel&&c.tipo!==nivel) return false;
      return true;
    });
    if(sort==="preco_asc") r=[...r].sort((a,b)=>(a.precoPromo||a.preco)-(b.precoPromo||b.preco));
    if(sort==="preco_desc") r=[...r].sort((a,b)=>(b.precoPromo||b.preco)-(a.precoPromo||a.preco));
    if(sort==="avaliacao") r=[...r].sort((a,b)=>b.rat-a.rat);
    if(sort==="horas") r=[...r].sort((a,b)=>b.horas-a.horas);
    return r;
  },[search,area,modal,nivel,sort]);
  const activeTags=[...(area?[{label:area,clear:()=>setArea("")}]:[]),...(modal?[{label:modal,clear:()=>setModal("")}]:[]),...(nivel?[{label:nivel,clear:()=>setNivel("")}]:[])];
  const hasFilters=activeTags.length>0||search.length>0;
  return (<>
    <div className="page-hero"><div className="page-hero-in"><div className="page-hero-eyebrow">Catálogo completo</div><h1>Todos os cursos</h1><p>{CURSOS.length} cursos certificados em agricultura, pecuária, gestão e mais.</p></div></div>
    <div className="catalog-wrap">
      <div className="filter-bar">
        <div className="filter-search-row"><input className="filter-search" placeholder="🔍  Pesquisar cursos ou formadores…" value={search} onChange={e=>setSearch(e.target.value)}/>{hasFilters&&<button className="sb-clear" onClick={clearAll}>Limpar tudo</button>}</div>
        <div className="filter-selects-row">
          <select className={`filter-select${area?" active":""}`} value={area} onChange={e=>setArea(e.target.value)}><option value="">Todas as áreas</option>{AREAS.map(a=><option key={a}>{a}</option>)}</select>
          <select className={`filter-select${nivel?" active":""}`} value={nivel} onChange={e=>setNivel(e.target.value)}><option value="">Todos os níveis</option>{NIVEIS.map(n=><option key={n}>{n}</option>)}</select>
          <select className={`filter-select${modal?" active":""}`} value={modal} onChange={e=>setModal(e.target.value)}><option value="">Todas as modalidades</option>{MODAIS.map(m=><option key={m}>{m}</option>)}</select>
        </div>
      </div>
      <div className="results-top">
        <div className="results-count"><strong>{filtered.length}</strong> curso{filtered.length!==1?"s":""} encontrado{filtered.length!==1?"s":""}</div>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <select className="sort-select" value={sort} onChange={e=>setSort(e.target.value)}><option value="relevancia">Relevância</option><option value="avaliacao">Melhor avaliação</option><option value="preco_asc">Preço: menor → maior</option><option value="preco_desc">Preço: maior → menor</option><option value="horas">Mais horas</option></select>
          <div className="view-btns"><button className={`vbtn${gridView?" act":""}`} onClick={()=>setGridView(true)}>⊞</button><button className={`vbtn${!gridView?" act":""}`} onClick={()=>setGridView(false)}>☰</button></div>
        </div>
      </div>
      {activeTags.length>0&&<div className="active-filters">{activeTags.map((t,i)=><span key={i} className="af-tag">{t.label}<button onClick={t.clear}>×</button></span>)}</div>}
      {filtered.length===0?(<div className="no-results"><div className="nr-icon">🔍</div><h3>Nenhum curso encontrado</h3><p>Tente ajustar os filtros.</p><button onClick={clearAll} style={{marginTop:16,padding:"9px 20px",background:"var(--g1)",color:"white",border:"none",borderRadius:"var(--rs)",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Limpar filtros</button></div>)
      :(<div className={`courses-grid${gridView?"":" list-view"}`}>{filtered.map(c=><CourseCard key={c.id} c={c} onDetail={()=>setPage("detail")}/>)}</div>)}
    </div>
  </>);
};

const UpsellModal = ({course,onClose,onAddAndClose,cartItems,addToCart}) => {
  const [added,setAdded]=useState([]);
  const suggestions=CURSOS.filter(c=>c.area===course.areaRef&&c.id!==course.id).slice(0,2);
  const toggle=item=>setAdded(prev=>prev.find(i=>i.id===item.id)?prev.filter(i=>i.id!==item.id):[...prev,item]);
  const isAdded=id=>added.some(i=>i.id===id);
  const handleConfirm=()=>{added.forEach(item=>addToCart(item));onAddAndClose();};
  return (
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.45)",zIndex:600,display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:"#fff",borderRadius:16,width:"100%",maxWidth:480,boxShadow:"0 24px 80px rgba(0,0,0,0.18)",animation:"up .2s ease",overflow:"hidden"}}>
        <div style={{padding:"22px 24px 0",display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div><div style={{fontSize:11,fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:"#1A7A3C",marginBottom:4}}>✓ Adicionado ao carrinho</div><div style={{fontFamily:"'DM Serif Display',serif",fontSize:20,color:"#111714",lineHeight:1.2}}>{course.nome}</div></div>
          <button onClick={onClose} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#8A9188",padding:"2px 6px",borderRadius:6,flexShrink:0}}>×</button>
        </div>
        <div style={{padding:"20px 24px 24px"}}>
          <div style={{fontSize:13,fontWeight:700,color:"#111714",marginBottom:12}}>Complete a sua formação</div>
          {suggestions.length>0&&<>
            <div style={{fontSize:10,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8A9188",marginBottom:8}}>Cursos relacionados</div>
            {suggestions.map(s=>{
              const sel=isAdded(s.id),already=cartItems.some(i=>i.id===s.id);
              return (
                <div key={s.id} onClick={()=>!already&&toggle({id:s.id,nome:s.nome,modal:s.modal,horas:s.horas+"h",preco:s.precoPromo||s.preco,icon:s.icon})}
                  style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:8,border:`1.5px solid ${sel?"#1A7A3C":"#DDE1DA"}`,background:sel?"#E8F5EE":already?"#F8F9F7":"#fff",cursor:already?"default":"pointer",marginBottom:8,transition:"all .15s"}}>
                  <div style={{width:38,height:38,borderRadius:8,background:"linear-gradient(135deg,#e4ede3,#c8d9c6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{s.icon}</div>
                  <div style={{flex:1,minWidth:0}}><div style={{fontSize:12.5,fontWeight:600,color:"#111714",lineHeight:1.3}}>{s.nome}</div><div style={{fontSize:11,color:"#8A9188"}}>{s.modal} · {s.horas}h</div></div>
                  <div style={{textAlign:"right",flexShrink:0}}>{s.precoPromo&&<div style={{fontSize:10,color:"#8A9188",textDecoration:"line-through"}}>€{s.preco}</div>}<div style={{fontSize:14,fontFamily:"'DM Serif Display',serif",color:"#111714"}}>€{s.precoPromo||s.preco}</div></div>
                  <div style={{width:20,height:20,borderRadius:5,border:`2px solid ${sel||already?"#1A7A3C":"#8A9188"}`,background:sel||already?"#1A7A3C":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:11,color:"white"}}>{sel||already?"✓":""}</div>
                </div>
              );
            })}
          </>}
          <div style={{fontSize:10,fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",color:"#8A9188",margin:"14px 0 8px"}}>E-books relacionados</div>
          {EBOOKS.slice(0,2).map(eb=>{
            const sel=isAdded(eb.id);
            return (
              <div key={eb.id} onClick={()=>toggle({id:eb.id,nome:eb.nome,modal:"E-book",horas:"–",preco:eb.preco,icon:eb.icon})}
                style={{display:"flex",alignItems:"center",gap:12,padding:"10px 12px",borderRadius:8,border:`1.5px solid ${sel?"#1A7A3C":"#DDE1DA"}`,background:sel?"#E8F5EE":"#fff",cursor:"pointer",marginBottom:8,transition:"all .15s"}}>
                <div style={{width:38,height:38,borderRadius:8,background:"linear-gradient(135deg,#EEF0FA,#D4D8F5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0}}>{eb.icon}</div>
                <div style={{flex:1,minWidth:0}}><div style={{fontSize:12.5,fontWeight:600,color:"#111714",lineHeight:1.3}}>{eb.nome}</div><div style={{fontSize:11,color:"#8A9188"}}>E-book · Download imediato</div></div>
                <div style={{fontSize:14,fontFamily:"'DM Serif Display',serif",color:"#111714",flexShrink:0}}>€{eb.preco.toFixed(2)}</div>
                <div style={{width:20,height:20,borderRadius:5,border:`2px solid ${sel?"#1A7A3C":"#8A9188"}`,background:sel?"#1A7A3C":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:11,color:"white"}}>{sel?"✓":""}</div>
              </div>
            );
          })}
          <div style={{display:"flex",gap:8,marginTop:18}}>
            <button onClick={onClose} style={{flex:1,padding:"10px",background:"none",color:"#4A5248",border:"1.5px solid #DDE1DA",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>Ver carrinho</button>
            <button onClick={handleConfirm} style={{flex:2,padding:"10px",background:"#1A7A3C",color:"white",border:"none",borderRadius:8,fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
              {added.length>0?`Adicionar ${added.length} item${added.length>1?"s":""}  →`:"Finalizar inscrição →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseDetailPage = ({setPage,addToCart,cartItems=[],setShowCart}) => {
  const [edition,setEdition]=useState("ed1");
  const [showUpsell,setShowUpsell]=useState(false);
  const course={id:3,nome:"Gestão da Empresa Agrícola",modal:"Live-Learning",horas:"50h",preco:270,icon:"📊",areaRef:"Gestão"};
  const inCart=cartItems.some(i=>i.id===course.id);
  const related=CURSOS.filter(c=>c.area==="Gestão"||c.area==="Agrícola").slice(0,2);
  return (
    <div className="cd-wrap">
      <button className="cd-back" onClick={()=>setPage("catalog")}>← Voltar aos cursos</button>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:6,fontSize:13,color:"var(--tx3)"}}>
        <Stars r={4.7} sz={13}/><span style={{fontWeight:700,color:"var(--tx)"}}>4.7</span><span>(115 classificações) · 1.404 alunos</span>
      </div>
      <div className="cd-grid">
        <div className="cd-main">
          <div className="cd-video">
            <div style={{position:"absolute",inset:0,background:"linear-gradient(135deg,#1a2a1a,#2a3a2a)",display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:64,opacity:.15}}>📊</span></div>
            <div className="cd-video-play">▶</div>
          </div>
          <div className="cd-tags"><span className="cd-tag cd-tag-green">Formação para Candidaturas</span><span className="cd-tag">UFCD 2889</span><span className="cd-tag">Gestão</span><span className="cd-tag">Nível Intermédio</span></div>
          <h1 className="cd-title">Gestão da Empresa Agrícola</h1>
          <p className="cd-desc">Adquira conhecimentos essenciais para a gestão direta de uma exploração agrícola, sendo capaz de definir e gerir as estratégias mais adequadas ao agronegócio, alcançando o crescimento, desenvolvimento e competitividade da sua empresa.</p>
          <div className="cd-specs">
            <div className="cd-spec"><div className="cd-spec-icon">⏱</div><div className="cd-spec-label">Duração</div><div className="cd-spec-val">50 horas</div></div>
            <div className="cd-spec"><div className="cd-spec-icon">💻</div><div className="cd-spec-label">Formato</div><div className="cd-spec-val">Online – Live</div></div>
            <div className="cd-spec"><div className="cd-spec-icon">📈</div><div className="cd-spec-label">Nível</div><div className="cd-spec-val">Intermédio</div></div>
            <div className="cd-spec"><div className="cd-spec-icon">🕐</div><div className="cd-spec-label">Horário</div><div className="cd-spec-val">Pós-laboral</div></div>
          </div>
          <div className="cd-brochure"><div className="cd-brochure-text"><strong>Descarregue a brochura completa</strong><span>Conheça todos os detalhes sobre o curso</span></div><button className="cd-brochure-btn">📥 Descarregar brochura</button></div>
          <AccordionItem title="Enquadramento"><p>Para que o empresário seja capaz de realizar uma gestão agrícola eficaz, deve munir-se de conhecimentos ao nível de três áreas fundamentais: económica, financeira e de tesouraria.</p><p style={{marginTop:12}}>Ao longo do curso, os participantes aprenderão a aplicar conceitos de contabilidade e fiscalidade específicos no setor agrícola, a identificar fatores e custos de produção, e a elaborar ciclos económicos e financeiros.</p></AccordionItem>
          <AccordionItem title="Programa"><ProgramaTimeline/></AccordionItem>
          <AccordionItem title="Requisitos"><ul><li>Idade mínima: 18 anos</li><li>Escolaridade mínima: 9.º ano de escolaridade</li><li>Conhecimentos básicos de informática</li><li>Ligação à atividade agrícola (recomendado)</li></ul></AccordionItem>
          <div className="cd-section-title">Formadores</div>
          <div className="cd-formadores"><div className="cd-formador"><div className="cd-fav">👨‍🌾</div><div><div className="cd-fname">Dr. Rui Carvalho</div><div className="cd-frole">Engenheiro Agrónomo · Gestor Rural</div></div></div><div className="cd-formador"><div className="cd-fav">👩‍💼</div><div><div className="cd-fname">Dra. Ana Ferreira</div><div className="cd-frole">Economista · Especialista PEPAC</div></div></div></div>
          <div className="cd-section-title">O que dizem os nossos alunos?</div>
          <div className="cd-reviews">{[{ini:"S",nome:"Sónia M.",rat:4.9,txt:"Esta formação foi fantástica, aprendi muito e o formador é top. Os temas abordados foram muito práticos e aplicáveis ao dia-a-dia da exploração."},{ini:"P",nome:"Pedro A.",rat:4.5,txt:"Curso muito bem estruturado. Gostei especialmente dos módulos de análise financeira e do apoio prestado durante todo o percurso formativo."}].map((r,i)=>(
            <div key={i} className="cd-review"><div className="cd-rev-top"><div className="cd-rev-av">{r.ini}</div><div><div className="cd-rev-name">{r.nome}</div><div className="cd-rev-stars"><Stars r={r.rat}/></div></div></div><div className="cd-rev-text">{r.txt}</div></div>
          ))}</div>
          <div className="cd-section-title">Também pode gostar…</div>
          <div className="cd-related">{related.map(c=><CourseCard key={c.id} c={c} onDetail={()=>{}}/>)}</div>
        </div>
        <div className="cd-sidebar">
          <div className="cd-card">
            <div className="cd-card-edition"><label>Selecione a Edição</label><select className="cd-edition-sel" value={edition} onChange={e=>setEdition(e.target.value)}><option value="ed1">Edição 1 — 5 Mai a 20 Jun 2026</option><option value="ed2">Edição 2 — 15 Set a 30 Out 2026</option></select></div>
            <div className="cd-card-price"><div className="cd-invest-label">Investimento</div><div className="cd-price-row"><span className="cd-price-old">300,00 €</span><span className="cd-price-new">270,00 €</span></div><div className="cd-price-note">Desconto até 30 de abril de 2026</div></div>
            <div className="cd-card-actions">
              <button className="cd-btn-info">Pedir informações</button>
              <button className="cd-btn-enroll" onClick={()=>{if(!inCart){addToCart(course);setShowUpsell(true);}}} style={inCart?{background:"var(--g1)",cursor:"default"}:{}}>{inCart?"✓ Adicionado ao carrinho":"Inscrever-me"}</button>
            </div>
            {showUpsell&&<UpsellModal course={course} cartItems={cartItems} addToCart={addToCart} onClose={()=>{setShowUpsell(false);setShowCart(true);}} onAddAndClose={()=>{setShowUpsell(false);setShowCart(true);}}/>}
            <div className="cd-card-contact"><div className="cd-contact-icon">🎧</div><div className="cd-contact-title">Tem dúvidas?</div><div className="cd-contact-sub">Fale com a nossa equipa</div><div className="cd-contact-links"><div className="cd-contact-link">📞 +351 224 509 055</div><div className="cd-contact-link">✉️ info@agrob.pt</div></div><button className="cd-btn-wa">💬 Chat WhatsApp</button></div>
            <div className="cd-card-manager"><div className="cd-mgr-av">👨‍💼</div><div><div className="cd-mgr-name">Pedro Oliveira</div><div className="cd-mgr-role">Gestor de Formação</div><div className="cd-mgr-avail">Disponível seg–sex, 9h–18h</div></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [page,setPage]=useState("home");
  const [showModal,setShowModal]=useState(false);
  const [showCart,setShowCart]=useState(false);
  const [showCheckout,setShowCheckout]=useState(false);
  const [cartItems,setCartItems]=useState([]);
  const addToCart=item=>setCartItems(prev=>prev.find(i=>i.id===item.id)?prev:[...prev,item]);
  const removeFromCart=id=>setCartItems(prev=>prev.filter(i=>i.id!==id));
  const handleSetPage=p=>setPage(p);
  const handleCheckoutSuccess=()=>{ setShowCheckout(false); setCartItems([]); setPage("home"); };
  return (
    <>
      <style>{CSS}</style>
      <Navbar page={page} setPage={handleSetPage} setShowModal={setShowModal} setShowCart={setShowCart} cartCount={cartItems.length}/>
      {page==="home"&&<HomePage setPage={handleSetPage}/>}
      {page==="catalog"&&<CatalogPage setPage={handleSetPage}/>}
      {page==="detail"&&<CourseDetailPage setPage={handleSetPage} addToCart={addToCart} cartItems={cartItems} setShowCart={setShowCart}/>}
      <Footer setPage={handleSetPage}/>
      {showModal&&<ClientModal onClose={()=>setShowModal(false)}/>}
      {showCart&&!showCheckout&&<CartDrawer items={cartItems} onRemove={removeFromCart} onClose={()=>setShowCart(false)} onCheckout={()=>{setShowCart(false);setShowCheckout(true);}}/>}
      {showCheckout&&<CheckoutModal items={cartItems} onClose={()=>setShowCheckout(false)} onSuccess={handleCheckoutSuccess}/>}
    </>
  );
}

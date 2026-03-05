import { useState } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --bg:#FAFAF7;--surface:#FFFFFF;--warm:#F6F1EB;--warm-2:#EDE5DA;--border:#E2DAD0;
  --text:#1E1B16;--text-2:#5C5549;--text-3:#9A9085;
  --green:#3A6B34;--green-d:#2A4F26;--green-l:#E6F0E4;--green-m:#6FA368;
  --gold:#B08D2A;--gold-l:#FBF6E8;
  --terra:#8B5A3C;--terra-d:#6B4630;--terra-l:#F5EDE5;--terra-m:#A87A5A;
  --blue:#2D5A8A;--blue-l:#EBF2FA;
  --amber:#92640A;--amber-l:#FFF8E7;
  --vi:#5B3F8F;--vi-d:#47307A;--vi-l:#F0EBF8;--vi-m:#7E5DB8;
  --teal:#1A7A6E;--teal-d:#145F55;--teal-l:#E6F5F3;--teal-m:#2EA898;
  --r:14px;--rs:8px;--max:1200px;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Plus Jakarta Sans',sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased}

/* NAV */
.nav{background:var(--text);position:sticky;top:0;z-index:100}
.nav-in{max-width:var(--max);margin:0 auto;padding:0 28px;display:flex;align-items:center;justify-content:space-between;height:68px}
.logo{display:flex;align-items:baseline;gap:3px;text-decoration:none;cursor:pointer}
.logo-main{font-family:'Source Serif 4',serif;font-size:19px;font-weight:700;color:white;letter-spacing:-0.03em}
.logo-dot{color:var(--green-m);font-size:24px;line-height:1}
.nlinks{display:flex;gap:2px}
.nlink{padding:8px 16px;color:rgba(255,255,255,0.55);font-size:14px;font-weight:400;cursor:pointer;border-radius:8px;transition:all .15s;border:none;background:none;font-family:inherit}
.nlink:hover{color:white;background:rgba(255,255,255,0.06)}
.nlink.act{color:white;font-weight:600;background:rgba(255,255,255,0.08)}
.nright{display:flex;gap:10px;align-items:center}
.nicon{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5);cursor:pointer;font-size:14px;transition:all .15s;background:none}
.nicon:hover{border-color:rgba(255,255,255,0.3);color:white}
.nbtn{padding:9px 22px;background:var(--green);color:white;border:none;border-radius:var(--rs);font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}
.nbtn:hover{background:var(--green-d)}
.nlink-wrap{position:relative}
.nlink-wrap:hover .ndropdown{display:block}
.ndropdown{display:none;position:absolute;top:100%;left:0;background:#2A2720;border:1px solid rgba(255,255,255,0.08);border-radius:var(--rs);min-width:160px;padding:6px;z-index:200;margin-top:4px}
.ndropdown a{display:block;padding:9px 14px;color:rgba(255,255,255,0.6);font-size:13px;text-decoration:none;border-radius:6px;transition:all .15s;cursor:pointer}
.ndropdown a:hover{background:rgba(255,255,255,0.06);color:white}
.nlink-arrow{font-size:9px;margin-left:4px;opacity:.5}

/* HERO HOME */
.hero{background:linear-gradient(160deg,#1E1B16 0%,#2D3A1F 40%,#1E3318 100%);padding:0 28px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at 70% 20%,rgba(106,163,104,0.12) 0%,transparent 60%),radial-gradient(ellipse at 20% 80%,rgba(176,141,42,0.06) 0%,transparent 50%)}
.hero-in{max-width:var(--max);margin:0 auto;padding:80px 0 0;position:relative;z-index:1;min-height:400px}
.hero-left{padding-bottom:80px;max-width:680px}
.hero-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:6px 16px 6px 10px;border-radius:24px;font-size:13px;color:rgba(255,255,255,0.6);margin-bottom:28px;backdrop-filter:blur(4px)}
.hero-pill .live{width:7px;height:7px;background:#7BD46A;border-radius:50%;animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
.hero h1{font-family:'Source Serif 4',serif;font-size:50px;font-weight:700;color:white;line-height:1.14;letter-spacing:-0.03em;margin-bottom:22px}
.hero h1 .accent{color:var(--green-m);font-style:italic}
.hero-p{font-size:17px;color:rgba(255,255,255,0.5);line-height:1.65;margin-bottom:36px;max-width:480px;font-weight:300}
.hero-ctas{display:flex;gap:14px;margin-bottom:48px}
.cta-main{padding:15px 36px;background:var(--green);color:white;border:none;border-radius:var(--rs);font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s}
.cta-main:hover{background:#4A8042;transform:translateY(-2px);box-shadow:0 6px 24px rgba(58,107,52,0.4)}
.cta-sec{padding:15px 36px;background:transparent;color:white;border:1.5px solid rgba(255,255,255,0.18);border-radius:var(--rs);font-size:15px;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s}
.cta-sec:hover{border-color:rgba(255,255,255,0.45);background:rgba(255,255,255,0.04)}
.hero-right{display:flex;flex-direction:column;justify-content:flex-end;position:relative}
.hero-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding-bottom:40px}
.hero-card{background:rgba(255,255,255,0.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.08);border-radius:var(--r);padding:20px;transition:all .25s;cursor:pointer}
.hero-card:hover{background:rgba(255,255,255,0.1);border-color:rgba(255,255,255,0.15);transform:translateY(-2px)}
.hc-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:12px}
.hc-title{font-size:14px;font-weight:600;color:white;margin-bottom:4px}
.hc-desc{font-size:12px;color:rgba(255,255,255,0.4);line-height:1.5}

/* STATS */
.stats{background:var(--surface);border-bottom:1px solid var(--border)}
.stats-in{max-width:var(--max);margin:0 auto;padding:0 28px;display:grid;grid-template-columns:repeat(4,1fr)}
.stat{padding:32px 0;text-align:center;position:relative}
.stat:not(:last-child)::after{content:'';position:absolute;right:0;top:25%;bottom:25%;width:1px;background:var(--border)}
.stat-num{font-family:'Source Serif 4',serif;font-size:36px;font-weight:700;color:var(--green-d);letter-spacing:-0.03em}
.stat-lab{font-size:13px;color:var(--text-3);margin-top:4px}

/* SECTIONS */
.sec{max-width:var(--max);margin:0 auto;padding:72px 28px}
.sec-lab{font-size:11px;text-transform:uppercase;letter-spacing:0.14em;color:var(--green);font-weight:700;margin-bottom:10px}
.sec-t{font-family:'Source Serif 4',serif;font-size:34px;font-weight:700;letter-spacing:-0.03em;line-height:1.2;margin-bottom:8px}
.sec-sub{font-size:16px;color:var(--text-2);max-width:540px;line-height:1.6;margin-bottom:40px}
.sec-header{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:32px}
.sec-link{font-size:14px;color:var(--green);font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;border:none;background:none;font-family:inherit}
.sec-link:hover{text-decoration:underline}

/* SERVICE CARDS */
.srv-grid-home{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.srv-home{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px 24px;transition:all .25s;cursor:pointer;position:relative;overflow:hidden}
.srv-home:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,0.08);border-color:var(--green-m)}
.srv-home::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--green);transform:scaleX(0);transition:transform .3s}
.srv-home:hover::after{transform:scaleX(1)}
.srv-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:18px}
.srv-home h3{font-family:'Source Serif 4',serif;font-size:17px;font-weight:600;margin-bottom:8px;letter-spacing:-0.01em}
.srv-home p{font-size:13.5px;color:var(--text-2);line-height:1.55}

/* COURSES */
.cur-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.cur{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;transition:all .25s;cursor:pointer}
.cur:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,0.08)}
.cur-top{padding:24px 22px 14px}
.cur-tags{display:flex;gap:5px;margin-bottom:10px;flex-wrap:wrap}
.tag{padding:3px 10px;border-radius:20px;font-size:10.5px;font-weight:700;letter-spacing:.02em}
.tag-g{background:var(--green-l);color:var(--green)}
.tag-t{background:var(--terra-l);color:var(--terra)}
.tag-p{background:#FEF2F2;color:#DC2626}
.cur-name{font-family:'Source Serif 4',serif;font-size:18px;font-weight:700;line-height:1.3;margin-bottom:4px;letter-spacing:-0.01em}
.cur-ufcd{font-size:12px;color:var(--text-3);margin-bottom:8px}
.cur-desc{font-size:13px;color:var(--text-2);line-height:1.5;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.cur-bot{padding:14px 22px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(180deg,var(--warm) 0%,var(--surface) 100%)}
.cur-price{font-family:'Source Serif 4',serif;font-size:22px;font-weight:700;color:var(--green-d)}
.cur-old{font-size:13px;color:var(--text-3);text-decoration:line-through;margin-left:8px}
.cur-meta{font-size:12px;color:var(--text-3);display:flex;align-items:center;gap:6px}
.cur-date{padding:10px 22px 16px;font-size:13px;display:flex;align-items:center;justify-content:space-between}
.cur-date span{color:var(--text-2);font-weight:500}
.cur-btn{padding:7px 18px;background:var(--green);color:white;border:none;border-radius:var(--rs);font-size:12.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .15s}
.cur-btn:hover{background:var(--green-d)}

/* TESTEMUNHOS */
.test-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px}
.test{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px}
.test-stars{color:var(--gold);font-size:14px;margin-bottom:14px;letter-spacing:2px}
.test-q{font-family:'Source Serif 4',serif;font-size:15px;font-style:italic;line-height:1.6;color:var(--text);margin-bottom:18px}
.test-who{display:flex;align-items:center;gap:10px}
.test-av{width:36px;height:36px;border-radius:50%;background:var(--green-l);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--green-d)}
.test-name{font-size:13px;font-weight:600}
.test-role{font-size:11.5px;color:var(--text-3)}

/* BLOG */
.blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.blog-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;cursor:pointer;transition:all .25s}
.blog-card:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,0,0,0.07)}
.blog-img{height:160px;background:var(--warm-2);display:flex;align-items:center;justify-content:center}
.blog-img span{font-size:40px;opacity:.4}
.blog-body{padding:20px 22px}
.blog-tag{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--green);font-weight:700;margin-bottom:8px}
.blog-title{font-family:'Source Serif 4',serif;font-size:17px;font-weight:600;line-height:1.35;margin-bottom:8px;letter-spacing:-0.01em}
.blog-excerpt{font-size:13px;color:var(--text-2);line-height:1.55;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}

/* CTA FINAL */
.cta-final{background:linear-gradient(135deg,#2A4F26 0%,#1E3318 100%);padding:80px 28px;text-align:center;position:relative;overflow:hidden}
.cta-final::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(106,163,104,0.15) 0%,transparent 60%)}
.cta-final-in{position:relative;z-index:1;max-width:600px;margin:0 auto}
.cta-final h2{font-family:'Source Serif 4',serif;font-size:34px;font-weight:700;color:white;margin-bottom:14px;letter-spacing:-0.02em}
.cta-final p{font-size:16px;color:rgba(255,255,255,0.5);line-height:1.6;margin-bottom:32px}
.cta-form{display:flex;gap:10px;max-width:460px;margin:0 auto}
.cta-form input{flex:1;padding:14px 18px;border:1px solid rgba(255,255,255,0.15);border-radius:var(--rs);background:rgba(255,255,255,0.06);color:white;font-size:14px;font-family:inherit;backdrop-filter:blur(4px)}
.cta-form input::placeholder{color:rgba(255,255,255,0.3)}
.cta-form input:focus{outline:none;border-color:var(--green-m)}
.cta-form button{padding:14px 28px;background:white;color:var(--green-d);border:none;border-radius:var(--rs);font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;white-space:nowrap}
.cta-form button:hover{background:var(--green-l);transform:translateY(-1px)}

/* HERO BASE (páginas internas) */
.phero{padding:0 28px;position:relative;overflow:hidden}
.phero-in{max-width:var(--max);margin:0 auto;padding:64px 0 72px;position:relative;z-index:1}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,0.35);margin-bottom:28px;background:none;border:none;padding:0}
.breadcrumb span{cursor:pointer;background:none}
.breadcrumb span:hover{color:rgba(255,255,255,0.7)}
.breadcrumb .cur{color:rgba(255,255,255,0.65);font-weight:500;cursor:default;background:none;border:none;padding:0;border-radius:0}
.breadcrumb .sep{font-size:10px;cursor:default}
.phero h1{font-family:'Source Serif 4',serif;font-size:46px;font-weight:700;color:white;line-height:1.15;letter-spacing:-0.03em;margin-bottom:18px;max-width:720px}
.phero-sub{font-size:17px;color:rgba(255,255,255,0.78);line-height:1.65;max-width:620px;font-weight:300;margin-bottom:32px}
.phero-stats{display:flex;gap:40px;padding-top:28px;border-top:1px solid rgba(255,255,255,0.12)}
.phs-val{font-family:'Source Serif 4',serif;font-size:30px;font-weight:700;color:white}
.phs-lab{font-size:12.5px;color:rgba(255,255,255,0.6);margin-top:3px}

/* SIDEBAR LAYOUT */
.page-layout{max-width:var(--max);margin:0 auto;padding:48px 28px 0;display:grid;grid-template-columns:240px 1fr;gap:48px}
.side-nav{position:sticky;top:88px;align-self:start}
.side-nav-title{font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:var(--text-3);font-weight:700;margin-bottom:14px}
.side-link{display:block;padding:10px 16px;font-size:14px;color:var(--text-2);border-radius:var(--rs);cursor:pointer;transition:all .15s;border:none;background:none;font-family:inherit;width:100%;text-align:left;margin-bottom:2px}
.side-link:hover{background:var(--warm);color:var(--text)}
.main-col{min-width:0}

/* SEC internos */
.sec-t2{font-family:'Source Serif 4',serif;font-size:32px;font-weight:700;letter-spacing:-0.03em;line-height:1.2;margin-bottom:8px}
.sec-sub2{font-size:15.5px;color:var(--text-2);max-width:580px;line-height:1.6;margin-bottom:36px}

/* STEPS */
.steps{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative}
.steps::before{content:'';position:absolute;top:28px;left:10%;right:10%;height:2px;background:var(--border);z-index:0}
.step{text-align:center;position:relative;z-index:1;padding:0 12px}
.step-num{width:56px;height:56px;border-radius:50%;background:var(--green);color:white;display:flex;align-items:center;justify-content:center;font-family:'Source Serif 4',serif;font-size:22px;font-weight:700;margin:0 auto 16px;border:4px solid var(--bg);box-shadow:0 2px 12px rgba(58,107,52,0.2)}
.step-title{font-size:14px;font-weight:700;margin-bottom:6px}
.step-desc{font-size:12.5px;color:var(--text-2);line-height:1.5}

/* MEDIDAS */
.medidas-controls{display:flex;gap:10px;margin-bottom:16px;align-items:center}
.medidas-search{flex:1;position:relative}
.medidas-search input{width:100%;padding:9px 14px 9px 36px;border:1px solid var(--border);border-radius:var(--rs);background:var(--surface);font-size:13.5px;font-family:inherit;color:var(--text)}
.medidas-search input:focus{outline:none;border-color:var(--green-m)}
.medidas-search .search-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);color:var(--text-3);font-size:13px;pointer-events:none}
.filter-select{padding:9px 30px 9px 12px;border:1px solid var(--border);border-radius:var(--rs);background:var(--surface);font-size:13px;font-family:inherit;color:var(--text-2);cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%239A9085' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px center}
.filter-select:focus{outline:none;border-color:var(--green-m)}
.filter-select.has-value{border-color:var(--green);color:var(--green-d);background-color:var(--green-l);font-weight:600}
.medidas-meta{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--text-3);margin-bottom:14px}
.medidas-meta .clear-btn{background:none;border:none;font-family:inherit;font-size:13px;color:var(--green);cursor:pointer;padding:0}
.medidas-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.medida{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;transition:all .25s;cursor:pointer;display:flex;flex-direction:column}
.medida:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,0.08);border-color:var(--green-m)}
.medida-header{padding:22px 24px 16px;flex:1}
.medida-badge{display:inline-flex;padding:3px 10px;border-radius:20px;font-size:10.5px;font-weight:700;margin-bottom:10px}
.badge-aberta{background:#EDFBF2;color:#1A7A3A}
.badge-prevista{background:var(--gold-l);color:var(--gold)}
.badge-encerrada{background:#F5F5F4;color:var(--text-3)}
.medida-cod{font-size:12px;color:var(--text-3);font-weight:600;margin-bottom:4px;letter-spacing:.02em}
.medida h3{font-family:'Source Serif 4',serif;font-size:17px;font-weight:700;line-height:1.3;margin-bottom:8px;letter-spacing:-.01em}
.medida p{font-size:13px;color:var(--text-2);line-height:1.5}
.medida-footer{padding:14px 24px;border-top:1px solid var(--border);background:var(--warm);display:flex;justify-content:space-between;align-items:center;font-size:12.5px;flex-shrink:0}
.medida-footer .taxa{font-weight:700;color:var(--green-d)}
.medida-footer .range{color:var(--text-3)}
.pagination{display:flex;justify-content:center;align-items:center;gap:6px;margin-top:28px}
.page-btn{width:36px;height:36px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface);font-size:13px;font-family:inherit;color:var(--text-2);cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center}
.page-btn:hover{border-color:var(--green-m);color:var(--green)}
.page-btn.active{background:var(--green);border-color:var(--green);color:white;font-weight:700}
.page-btn:disabled{opacity:.35;cursor:not-allowed}

/* TWO-COL */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:stretch}
.info-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px;display:flex;flex-direction:column}
.info-card h3{font-family:'Source Serif 4',serif;font-size:20px;font-weight:700;margin-bottom:16px}
.info-list{list-style:none;flex:1}
.info-list li{padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;line-height:1.55;display:flex;gap:10px}
.info-list li:last-child{border-bottom:none}

/* PILLARS */
.pillars{display:grid;gap:18px}
.pillar{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px 28px;transition:all .25s;position:relative;overflow:hidden}
.pillar:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,0.08)}
.pillar-icon{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:20px}
.pillar h3{font-family:'Source Serif 4',serif;font-size:20px;font-weight:700;margin-bottom:12px;letter-spacing:-.01em}
.pillar p{font-size:14px;color:var(--text-2);line-height:1.6;margin-bottom:16px}
.pillar-items{list-style:none}
.pillar-items li{font-size:13px;color:var(--text-2);padding:5px 0;display:flex;gap:8px;align-items:baseline}
.pillar-items li::before{content:'✓';color:var(--green);font-weight:700;font-size:12px;flex-shrink:0}

/* DIFFS */
.diffs{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.diff{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;display:flex;gap:18px}
.diff-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.diff h4{font-size:15px;font-weight:700;margin-bottom:6px}
.diff p{font-size:13.5px;color:var(--text-2);line-height:1.55}

/* SECTORS */
.sectors{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.sector{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:24px 20px;text-align:center;transition:all .25s}
.sector:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,0.06)}
.sector-icon{font-size:28px;margin-bottom:12px}
.sector h4{font-size:14px;font-weight:700;margin-bottom:4px}
.sector p{font-size:12px;color:var(--text-3);line-height:1.45}

/* LIC */
.lic-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.lic{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;transition:all .25s;display:flex;flex-direction:column}
.lic:hover{box-shadow:0 8px 28px rgba(0,0,0,0.06);border-color:var(--amber)}
.lic-tag{display:inline-flex;padding:3px 10px;border-radius:20px;font-size:10.5px;font-weight:700;margin-bottom:10px;align-self:flex-start}
.tag-agri{background:var(--green-l);color:var(--green)}
.tag-ind{background:#EEF2FF;color:#4338CA}
.tag-com{background:var(--amber-l);color:var(--amber)}
.tag-solo{background:var(--terra-l);color:var(--terra)}
.tag-cert{background:#F0FDF4;color:#15803D}
.lic h3{font-family:'Source Serif 4',serif;font-size:17px;font-weight:700;margin-bottom:8px;letter-spacing:-.01em}
.lic p{font-size:13.5px;color:var(--text-2);line-height:1.55;margin-bottom:14px}
.lic-items{list-style:none;margin-bottom:20px}
.lic-items li{font-size:12.5px;color:var(--text-2);padding:4px 0;display:flex;gap:8px;align-items:baseline}
.lic-items li::before{content:'→';color:var(--amber);font-weight:700;font-size:11px;flex-shrink:0}
.lic-cta{display:inline-flex;align-items:center;gap:6px;margin-top:auto;padding:9px 16px;border:1.5px solid var(--amber);border-radius:var(--rs);font-size:13px;font-weight:600;color:var(--amber);background:none;font-family:inherit;cursor:pointer;transition:all .15s;align-self:flex-start}
.lic-cta:hover{background:var(--amber-l)}
.areas{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin-bottom:36px}
.area-tab{padding:14px 12px;background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r);text-align:center;cursor:pointer;transition:all .2s;font-family:inherit;font-size:13px;font-weight:500;color:var(--text-2)}
.area-tab:hover{border-color:var(--amber);color:var(--text)}
.area-tab.active{border-color:var(--amber);background:var(--amber-l);color:var(--amber);font-weight:700}
.area-tab .ico{font-size:22px;display:block;margin-bottom:6px}

/* MARKETING */
.srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.srv{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px 24px;transition:all .25s;cursor:default;position:relative;overflow:hidden}
.srv:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(0,0,0,0.07);border-color:var(--vi-m)}
.srv::after{content:'';position:absolute;bottom:0;left:0;right:0;height:3px;background:var(--vi);transform:scaleX(0);transition:transform .3s}
.srv:hover::after{transform:scaleX(1)}
.srv-ico{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px}
.srv h3{font-size:16px;font-weight:700;margin-bottom:6px}
.srv p{font-size:13px;color:var(--text-2);line-height:1.55}
.port-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.port{border-radius:var(--r);overflow:hidden;cursor:pointer;transition:all .25s;position:relative;aspect-ratio:1}
.port:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,0.1)}
.port-bg{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:40px}
.port-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,0.7) 0%,transparent 60%);display:flex;flex-direction:column;justify-content:flex-end;padding:16px;opacity:0;transition:opacity .25s}
.port:hover .port-overlay{opacity:1}
.port-overlay h4{font-size:14px;font-weight:700;color:white;margin-bottom:2px}
.port-overlay span{font-size:11px;color:rgba(255,255,255,0.6)}

/* PLANOS */
.pillar-row{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.pln-pillar{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:32px}
.pln-pillar h3{font-family:'Source Serif 4',serif;font-size:20px;font-weight:700;margin-bottom:16px}
.pillar-list{list-style:none}
.pillar-list li{padding:10px 0;border-bottom:1px solid var(--border);font-size:14px;line-height:1.55;display:flex;gap:10px}
.pillar-list li:last-child{border-bottom:none}
.use-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.use-case{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;transition:all .25s}
.use-case:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,0.06);border-color:var(--terra)}
.use-ico{font-size:28px;margin-bottom:14px}
.use-case h4{font-size:15px;font-weight:700;margin-bottom:6px}
.use-case p{font-size:13px;color:var(--text-2);line-height:1.55}
.deliv-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.deliv{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:24px;display:flex;gap:16px;align-items:start}
.deliv-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.deliv h4{font-size:14px;font-weight:700;margin-bottom:4px}
.deliv p{font-size:13px;color:var(--text-2);line-height:1.5}

/* FAQ */
.faq-list{max-width:780px}
.faq-item{border-bottom:1px solid var(--border)}
.faq-q{padding:20px 0;font-size:16px;font-weight:600;cursor:pointer;display:flex;justify-content:space-between;align-items:center;border:none;background:none;width:100%;text-align:left;font-family:inherit;color:var(--text);transition:color .15s}
.faq-arrow{transition:transform .2s;font-size:18px;color:var(--text-3);flex-shrink:0;margin-left:16px}
.faq-arrow.open{transform:rotate(180deg)}
.faq-a{padding:0 0 20px;font-size:14.5px;line-height:1.7;color:var(--text-2);max-width:680px}

/* CTA BAND */
.cta-band{padding:72px 28px;position:relative;overflow:hidden}
.cta-in{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:1fr 420px;gap:60px;align-items:center;position:relative;z-index:1}
.cta-left h2{font-family:'Source Serif 4',serif;font-size:32px;font-weight:700;color:white;margin-bottom:14px;letter-spacing:-.02em;line-height:1.2}
.cta-left p{font-size:15px;color:rgba(255,255,255,0.5);line-height:1.6;margin-bottom:24px}
.trust{display:flex;gap:24px}
.trust-item{font-size:13px;color:rgba(255,255,255,0.4);display:flex;align-items:center;gap:6px}
.cta-form-card{background:rgba(255,255,255,0.06);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.1);border-radius:var(--r);padding:32px}
.cta-form-card h3{font-size:18px;font-weight:700;color:white;margin-bottom:4px}
.cta-form-card .sub{font-size:13px;color:rgba(255,255,255,0.4);margin-bottom:24px}
.ff{margin-bottom:14px}
.ff label{display:block;font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,0.45);font-weight:600;margin-bottom:5px}
.ff input,.ff select,.ff textarea{width:100%;padding:11px 14px;border:1px solid rgba(255,255,255,0.12);border-radius:var(--rs);background:rgba(255,255,255,0.05);color:white;font-size:14px;font-family:inherit}
.ff input::placeholder,.ff textarea::placeholder{color:rgba(255,255,255,0.25)}
.ff input:focus,.ff select:focus,.ff textarea:focus{outline:none;background:rgba(255,255,255,0.08)}
.ff select{appearance:none}
.ff select option{background:var(--text);color:white}
.ff textarea{min-height:90px;resize:vertical}
.form-submit{width:100%;padding:14px;color:white;border:none;border-radius:var(--rs);font-size:15px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .2s;margin-top:4px}
.form-submit:hover{transform:translateY(-1px)}

/* SOBRE NÓS */
.sobre-hero{background:linear-gradient(160deg,#1E1B16 0%,#2A3D1E 50%,#1E3318 100%);padding:0 28px;position:relative;overflow:hidden}
.sobre-intro{max-width:var(--max);margin:0 auto;padding:48px 28px;background:var(--bg)}
.sobre-intro p{font-size:16px;color:var(--text-2);line-height:1.8;margin-bottom:16px;max-width:720px}
.sobre-intro p{font-size:17px;color:var(--text-2);line-height:1.8;margin-bottom:16px}
.sobre-intro p:first-of-type{font-size:19px;color:var(--text);font-weight:500;line-height:1.7}
.timeline{display:flex;gap:0;overflow-x:auto;padding-bottom:24px;scrollbar-width:none;position:relative}
.timeline::-webkit-scrollbar{display:none}
.timeline::before{content:'';position:absolute;top:28px;left:0;right:0;height:2px;background:var(--border);z-index:0}
.tl-item{display:flex;flex-direction:column;align-items:center;min-width:200px;flex:1;position:relative;z-index:1;padding:0 16px}
.tl-dot{width:56px;height:56px;border-radius:50%;background:var(--green-l);border:3px solid var(--green);display:flex;align-items:center;justify-content:center;font-family:'Source Serif 4',serif;font-size:13px;font-weight:700;color:var(--green-d);flex-shrink:0;margin-bottom:16px;background:var(--bg);border:3px solid var(--green)}
.tl-body{text-align:center}
.tl-body h4{font-size:14px;font-weight:700;margin-bottom:6px}
.tl-body p{font-size:13px;color:var(--text-2);line-height:1.55}
.team-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.team-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;text-align:center;transition:all .25s}
.team-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(0,0,0,0.08)}
.team-av{height:120px;display:flex;align-items:center;justify-content:center;font-size:48px}
.team-body{padding:18px}
.team-name{font-family:'Source Serif 4',serif;font-size:16px;font-weight:700;margin-bottom:2px}
.team-role{font-size:12.5px;color:var(--text-3);margin-bottom:8px}
.team-areas{font-size:12px;color:var(--text-2);line-height:1.5}
.values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.value-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;text-align:center;transition:all .25s}
.value-card:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,0.06)}
.value-ico{font-size:32px;margin-bottom:14px}
.value-card h4{font-family:'Source Serif 4',serif;font-size:17px;font-weight:700;margin-bottom:8px}
.value-card p{font-size:13.5px;color:var(--text-2);line-height:1.6}
.parceiros{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.parceiro{background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:14px 22px;font-size:13px;font-weight:600;color:var(--text-2);transition:all .15s}
.parceiro:hover{border-color:var(--green-m);color:var(--green)}

/* FOOTER */
.foot{background:var(--text);padding:56px 28px 36px;color:rgba(255,255,255,0.45);font-size:13px}
.foot-in{max-width:var(--max);margin:0 auto;display:grid;grid-template-columns:2.5fr 1fr 1fr 1fr;gap:48px}
.foot h4{color:white;font-size:14px;font-weight:600;margin-bottom:18px}
.foot a{color:rgba(255,255,255,0.45);text-decoration:none;display:block;padding:4px 0;font-size:13px;transition:color .15s;cursor:pointer}
.foot a:hover{color:white}
.foot-desc{line-height:1.65;margin-bottom:16px}
.foot-bot{max-width:var(--max);margin:36px auto 0;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07);text-align:center;font-size:12px;color:rgba(255,255,255,0.25)}

@keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.rise{animation:rise .5s ease forwards}
.rise-d1{animation:rise .5s ease .08s forwards;opacity:0}
.rise-d2{animation:rise .5s ease .16s forwards;opacity:0}
.rise-d3{animation:rise .5s ease .24s forwards;opacity:0}
.rise-d4{animation:rise .5s ease .32s forwards;opacity:0}
`;

// ─── DATA ────────────────────────────────────────────────────────────────────

const MEDIDAS = [
  { cod:"C.2.2.1", nome:"Prémio Instalação Jovens Agricultores", desc:"Prémio à primeira instalação de jovens agricultores (18-40 anos). Fundo perdido até €55.000.", status:"Aberta", taxa:"100%", taxaGrupo:"≥80%", range:"até €55.000", area:"Agricultura", tipo:"Prémio" },
  { cod:"C.2.2.2", nome:"Investimento Produtivo Jovens Agricultores", desc:"Apoio ao investimento em explorações de jovens agricultores. Máquinas, equipamentos e construções.", status:"Aberta", taxa:"60%", taxaGrupo:"50-69%", range:"até €400.000", area:"Agricultura", tipo:"Investimento" },
  { cod:"C.2.1.1", nome:"Investimento Produtivo Agrícola — Modernização", desc:"Modernização de explorações agrícolas existentes. Ativos físicos, digitais e intangíveis.", status:"Aberta", taxa:"50-60%", taxaGrupo:"50-69%", range:"até €400.000", area:"Agricultura", tipo:"Investimento" },
  { cod:"C.3.1.1", nome:"Investimento na Bioeconomia — Modernização", desc:"Investimento produtivo na bioeconomia e agroindústria. Transformação e comercialização.", status:"Prevista", taxa:"45-55%", taxaGrupo:"40-49%", range:"até €2M", area:"Agroindústria", tipo:"Investimento" },
  { cod:"C.1.1.6", nome:"Apoio à Apicultura para a Biodiversidade", desc:"Investimentos em apicultura com foco na conservação da biodiversidade e polinização.", status:"Aberta", taxa:"80%", taxaGrupo:"≥80%", range:"até €40.000", area:"Agricultura", tipo:"Investimento" },
  { cod:"D.1.1.1.1", nome:"Pequenos Investimentos na Exploração Agrícola", desc:"Investimentos de pequena escala via GAL/LEADER. Candidaturas por região.", status:"Aberta", taxa:"55-60%", taxaGrupo:"50-69%", range:"€2.000–€50.000", area:"Agricultura", tipo:"Investimento" },
  { cod:"C.4.1.1", nome:"Desenvolvimento de Sistemas de Regadio", desc:"Modernização e construção de infraestruturas de regadio coletivo e individual.", status:"Aberta", taxa:"65%", taxaGrupo:"50-69%", range:"até €500.000", area:"Agricultura", tipo:"Infraestrutura" },
  { cod:"C.5.2.1", nome:"Apoio à Floresta — Arborização e Rearborização", desc:"Instalação de novas áreas florestais e reabilitação de áreas ardidas ou degradadas.", status:"Aberta", taxa:"80%", taxaGrupo:"≥80%", range:"até €150.000", area:"Floresta", tipo:"Investimento" },
  { cod:"C.5.3.1", nome:"Prevenção de Incêndios Florestais", desc:"Investimentos em gestão de combustível, faixas de gestão e infraestruturas de proteção.", status:"Prevista", taxa:"85%", taxaGrupo:"≥80%", range:"até €200.000", area:"Floresta", tipo:"Infraestrutura" },
  { cod:"D.2.1.1", nome:"Turismo Rural — Criação e Requalificação", desc:"Criação, ampliação e requalificação de empreendimentos de turismo no espaço rural.", status:"Encerrada", taxa:"45%", taxaGrupo:"40-49%", range:"até €300.000", area:"Turismo Rural", tipo:"Investimento" },
  { cod:"C.3.2.1", nome:"Transformação e Comercialização de Produtos Agrícolas", desc:"Melhoria do desempenho global das empresas ligadas à transformação de produtos agrícolas.", status:"Aberta", taxa:"50%", taxaGrupo:"50-69%", range:"até €1M", area:"Agroindústria", tipo:"Investimento" },
  { cod:"C.1.2.1", nome:"Modos de Produção Biológica", desc:"Apoio à conversão e manutenção de práticas de produção agrícola em modo biológico.", status:"Aberta", taxa:"100%", taxaGrupo:"≥80%", range:"por ha/ano", area:"Agricultura", tipo:"Prémio" },
];

const LICENCAS = [
  { cat:"Agricultura e Pecuária", tag:"tag-agri", items:[
    { nome:"Utilização de Recursos Hídricos", desc:"Autorização para prospeção, pesquisa e utilização de recursos hídricos — poços, furos, charcas e infraestruturas hidráulicas.", steps:["Enquadramento legal e técnico","Instrução do processo no SILIAMB","Acompanhamento até obtenção da autorização"] },
    { nome:"Atividade Pecuária (REAP)", desc:"Licenciamento para exercício da atividade pecuária conforme o Regime de Exercício da Atividade Pecuária.", steps:["Enquadramento (tipo 1, 2 ou 3)","Instrução do processo no SNIRA","Acompanhamento junto da entidade regional"] },
    { nome:"Viveiros — Operador Profissional", desc:"Registo e licenciamento para produção e comercialização de materiais de propagação frutícolas, hortícolas e vitícolas.", steps:["Enquadramento (produtor / comercializador)","Instrução e submissão do processo","Relatórios anuais de atividade"] },
    { nome:"Agricultura de Precisão e Drones", desc:"Autorização para utilização de aeronaves não tripuladas (drones) em operações agrícolas.", steps:["Registo na ANAC","Obtenção de licença de operador","Acompanhamento do processo"] },
  ]},
  { cat:"Atividades Industriais", tag:"tag-ind", items:[
    { nome:"Atividade Industrial (REAI)", desc:"Licenciamento para exercício de atividade industrial — agroindústrias, unidades de transformação e processamento.", steps:["Enquadramento (tipo 1, 2 ou 3)","Instrução do processo no SIR","Acompanhamento até título digital"] },
    { nome:"Instalações de Biogás e Compostagem", desc:"Licenciamento de unidades de valorização de resíduos orgânicos agrícolas.", steps:["Enquadramento ambiental e industrial","Instrução junto da APA e DGEG","Acompanhamento até licença de exploração"] },
  ]},
  { cat:"Comércio", tag:"tag-com", items:[
    { nome:"Produtos Fitofarmacêuticos", desc:"Licenciamento de estabelecimentos de venda, distribuição e aplicação terrestre de produtos fitofarmacêuticos.", steps:["Preparação do processo","Instrução junto da entidade regional","Acompanhamento e esclarecimentos"] },
    { nome:"Venda Direta de Produtos Agrícolas", desc:"Registo e autorização para venda direta de produtos da exploração agrícola ao consumidor final.", steps:["Enquadramento legal","Instrução do processo na DGAV","Obtenção do registo de operador"] },
  ]},
  { cat:"Uso do Solo e Ambiente", tag:"tag-solo", items:[
    { nome:"Reserva Agrícola Nacional (RAN)", desc:"Pedido de utilização não agrícola de solos classificados em RAN.", steps:["Enquadramento legal do pedido","Instrução junto da ERRAN","Acompanhamento até decisão"] },
    { nome:"Reserva Ecológica Nacional (REN)", desc:"Autorização de investimentos em áreas classificadas como REN.", steps:["Enquadramento e análise técnica","Instrução junto da entidade regional","Acompanhamento do processo"] },
    { nome:"ICNF — Áreas Classificadas", desc:"Autorização para operações em áreas geográficas classificadas pelo ICNF.", steps:["Avaliação do enquadramento","Instrução do pedido junto do ICNF","Acompanhamento até autorização"] },
    { nome:"Avaliação de Impacte Ambiental (AIA)", desc:"Instrução de processos de AIA para projetos agrícolas ou agroindustriais.", steps:["Elaboração do Estudo de Impacte Ambiental","Submissão junto da APA","Acompanhamento da consulta pública e decisão"] },
  ]},
  { cat:"Qualidade e Certificações", tag:"tag-cert", items:[
    { nome:"GlobalG.A.P.", desc:"Implementação do referencial de boas práticas agrícolas reconhecido internacionalmente.", steps:["Diagnóstico e plano de ação","Implementação de procedimentos","Acompanhamento até certificação"] },
    { nome:"Modo de Produção Biológico", desc:"Apoio na conversão e manutenção da certificação em Modo de Produção Biológico.", steps:["Análise de elegibilidade","Plano de conversão","Acompanhamento do processo de certificação"] },
  ]},
];

const CURSOS = [
  { nome:"Agricultura Sustentável", ufcd:"UFCD 11026", horas:50, preco:200, promo:140, modal:"e-Learning", eleg:"PEPAC", data:"7 Abr 2026", rating:4.8, nrev:142, desc:"Princípios da produção agrícola sustentável. Formação elegível para candidaturas Jovem Agricultor.", tags:["PEPAC","-30%"] },
  { nome:"Cultura do Olival", ufcd:"UFCD 7662", horas:50, preco:225, promo:null, modal:"Live-Learning", eleg:"PEPAC", data:"20 Abr 2026", rating:4.9, nrev:98, desc:"Instalação, condução e gestão do olival. Técnicas de poda, rega e proteção fitossanitária.", tags:["PEPAC"] },
  { nome:"Gestão da Empresa Agrícola", ufcd:"UFCD 2889", horas:50, preco:270, promo:null, modal:"Live-Learning", eleg:"PEPAC", data:"5 Mai 2026", rating:4.7, nrev:115, desc:"Contabilidade agrícola, custos de produção e planeamento financeiro do agronegócio.", tags:["PEPAC"] },
  { nome:"Apicultura", ufcd:"UFCD 4432", horas:50, preco:230, promo:null, modal:"Live-Learning", eleg:"PEPAC", data:"12 Mai 2026", rating:4.9, nrev:89, desc:"Técnicas de maneio apícola, desde a instalação do apiário até à colheita do mel.", tags:["PEPAC"] },
  { nome:"Solos e Fertilidade", ufcd:"UFCD 4436", horas:50, preco:200, promo:140, modal:"e-Learning", eleg:"PEPAC", data:"Acesso imediato", rating:4.8, nrev:178, desc:"Caracterização de solos, interpretação de análises e definição de planos de fertilização.", tags:["PEPAC","-30%"] },
  { nome:"Segurança no Trabalho Agrícola", ufcd:"UFCD 6366", horas:50, preco:200, promo:140, modal:"e-Learning", eleg:"PEPAC", data:"Acesso imediato", rating:4.6, nrev:203, desc:"Normas de segurança, higiene e saúde. Utilização correta de EPI nas operações agrícolas.", tags:["PEPAC","-30%"] },
];

const TESTEMUNHOS = [
  { nome:"Miguel F.", ini:"MF", papel:"Jovem Agricultor, Viana do Castelo", texto:"A Espaço Visual tratou de toda a candidatura Jovem Agricultor — da documentação à submissão. Foi aprovada na primeira tentativa e recebi €55.000 de fundo perdido. Recomendo sem hesitar." },
  { nome:"Carla M.", ini:"CM", papel:"Produtora de Azeite, Trás-os-Montes", texto:"Conseguimos financiamento PEPAC para modernizar o nosso lagar. A equipa conhece os programas ao detalhe e acompanhou-nos em cada passo. O projeto foi aprovado em menos de 6 meses." },
  { nome:"Rui A.", ini:"RA", papel:"Promotor de Turismo Rural, Douro", texto:"Sem o apoio da Espaço Visual não teria conseguido avançar com a nossa quinta de turismo. Trataram do licenciamento, do plano de negócio e da candidatura. Um parceiro mesmo de confiança." },
];

const BLOG = [
  { tag:"Candidaturas", titulo:"Como preparar uma candidatura Jovem Agricultor em 2026", excerpt:"Tudo o que precisa saber sobre o processo de candidatura, documentação necessária e prazos para o PEPAC 23.27.", icon:"📋" },
  { tag:"Culturas", titulo:"Quais as culturas mais rentáveis em Portugal?", excerpt:"Análise comparativa das culturas com maior retorno por hectare, desde o olival ao castanheiro e pequenos frutos.", icon:"🌱" },
  { tag:"Formação", titulo:"Formação obrigatória para Jovens Agricultores: guia completo", excerpt:"Percurso formativo de 150 horas, cursos elegíveis e como conciliar formação com a candidatura.", icon:"🎓" },
];

const FAQ_PROJ = [
  { q:"Quanto custa o serviço de consultoria para candidaturas?", a:"O valor depende da complexidade do projeto e da medida de apoio. Fazemos uma análise inicial gratuita e sem compromisso para avaliar a elegibilidade do seu projeto." },
  { q:"Qual a taxa de sucesso das vossas candidaturas?", a:"Temos uma taxa de aprovação superior a 90% nas candidaturas que submetemos, resultado de 31 anos de experiência e mais de 4.400 projetos aprovados." },
  { q:"Quanto tempo demora a preparar uma candidatura PEPAC?", a:"O prazo típico varia entre 4 a 8 semanas, dependendo da complexidade do projeto e da documentação necessária." },
  { q:"Que documentos preciso para iniciar a candidatura?", a:"Tipicamente inclui: identificação pessoal/empresarial, caderneta predial, certificado de registo na atividade agrícola, demonstrações financeiras e orçamentos de investimento." },
];

const FAQ_LIC = [
  { q:"Quanto tempo demora a obter um licenciamento pecuário (REAP)?", a:"Para o tipo 3 pode ser resolvido em 4 a 8 semanas. Para os tipos 1 e 2 o processo pode demorar 3 a 6 meses." },
  { q:"Preciso de licenciamento para abrir um furo de água na minha exploração?", a:"Sim. Qualquer captação de água subterrânea requer autorização de utilização de recursos hídricos, tramitada na plataforma SILIAMB." },
  { q:"A Espaço Visual acompanha o processo até à obtenção do licenciamento?", a:"Sim. O nosso serviço inclui todo o ciclo: enquadramento legal, preparação da documentação, instrução do processo e acompanhamento até à obtenção do título." },
];

const FAQ_PLAN = [
  { q:"Quanto custa um plano de negócio?", a:"O valor depende da complexidade e do âmbito do estudo. Apresentamos uma proposta clara após reunião inicial gratuita." },
  { q:"O plano de negócio serve para candidaturas a fundos comunitários?", a:"Sim. Os nossos planos de negócio são elaborados com o rigor exigido pelas entidades financiadoras (PEPAC, Portugal 2030) e pela banca." },
  { q:"Quanto tempo demora a elaborar um plano de negócio?", a:"Tipicamente entre 3 a 6 semanas, dependendo da complexidade e da disponibilidade de informação." },
];

const FAQ_CONT = [
  { q:"Quanto custa o serviço de contabilidade?", a:"Trabalhamos com avença mensal fixa e sem custos escondidos — o preço inclui todas as obrigações fiscais correntes. Fazemos uma proposta personalizada após análise inicial gratuita." },
  { q:"Posso transferir a contabilidade da minha empresa para a Espaço Visual?", a:"Sim, o processo de transição é simples e tratamos de toda a logística. Não há interrupção nas obrigações fiscais da empresa." },
  { q:"A contabilidade agrícola tem especificidades?", a:"Sim, várias. O setor agrícola tem regimes especiais de IVA, particularidades no IRC, legislação laboral específica e obrigações como o SIRCA e a caderneta de campo." },
];

const FAQ_MKT = [
  { q:"Quanto custa criar um logótipo?", a:"O valor depende da complexidade do projeto. Apresentamos proposta após briefing inicial." },
  { q:"Fazem websites para empresas fora do setor agrícola?", a:"Sim. Desenvolvemos websites e estratégias digitais para empresas de qualquer setor." },
  { q:"Criam rótulos e embalagens para produtos agrícolas?", a:"Sim, é uma das nossas especialidades. Desenhamos rótulos para vinhos, azeites, mel, compotas e outros produtos regionais." },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const Bullet = ({ color }) => <span style={{ width:6, height:6, borderRadius:"50%", background:color, flexShrink:0, marginTop:7, display:"inline-block" }} />;

const FAQItem = ({ q, a, accent }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-q" onClick={() => setOpen(!open)}
        onMouseEnter={e => e.currentTarget.style.color = accent}
        onMouseLeave={e => e.currentTarget.style.color = ""}>
        {q}<span className={`faq-arrow ${open?"open":""}`}>▾</span>
      </button>
      {open && <div className="faq-a">{a}</div>}
    </div>
  );
};

const CursoCard = ({ c }) => (
  <div className="cur">
    <div className="cur-top">
      <div className="cur-tags">
        {c.eleg && <span className="tag tag-g">{c.eleg}</span>}
        {c.tags.includes("-30%") && <span className="tag tag-p">-30%</span>}
        <span className="tag tag-t">{c.modal}</span>
      </div>
      <div className="cur-name">{c.nome}</div>
      <div className="cur-ufcd">{c.ufcd} · {c.horas}h</div>
      <div className="cur-desc">{c.desc}</div>
    </div>
    <div className="cur-bot">
      <div><span className="cur-price">€{c.promo||c.preco}</span>{c.promo && <span className="cur-old">€{c.preco}</span>}</div>
      <div className="cur-meta"><span style={{ color:"var(--gold)", fontWeight:700 }}>★ {c.rating}</span><span>({c.nrev})</span></div>
    </div>
    <div className="cur-date"><span>{c.data}</span><button className="cur-btn">Inscrever</button></div>
  </div>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────

const Footer = ({ nav }) => (
  <footer className="foot">
    <div className="foot-in">
      <div>
        <h4>Espaço Visual</h4>
        <p className="foot-desc">Consultoria especializada e formação profissional para os setores agrícola, agroindustrial e de turismo rural. Há 31 anos a desenvolver o mundo rural português.</p>
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          <span>📞 +351 224 509 047</span>
          <span>✉️ geral@espaco-visual.pt</span>
        </div>
      </div>
      <div>
        <h4>Consultoria</h4>
        <a onClick={() => nav("projetos")}>Projetos e Candidaturas</a>
        <a onClick={() => nav("contabilidade")}>Contabilidade e Gestão</a>
        <a onClick={() => nav("licenciamentos")}>Licenciamentos</a>
        <a onClick={() => nav("planos")}>Planos de Negócio</a>
        <a onClick={() => nav("marketing")}>Design e Marketing</a>
      </div>
      <div>
        <h4>Formação AgroB</h4>
        <a>Todos os Cursos</a><a>Jovem Agricultor</a><a>Cursos Tutoriais</a><a>E-books</a><a>Formação Empresas</a>
      </div>
      <div>
        <h4>Recursos</h4>
        <a onClick={() => nav("sobre")}>Sobre Nós</a>
        <a>Blog</a><a>FAQ</a><a>Contactos</a>
      </div>
    </div>
    <div className="foot-bot">© 2026 Espaço Visual — Todos os direitos reservados · Política de Privacidade · Termos e Condições</div>
  </footer>
);

// ─── PÁGINA INICIAL ───────────────────────────────────────────────────────────

const HomePage = ({ nav }) => (
  <>
    <section className="hero">
      <div className="hero-in">
        <div className="hero-left">
          <h1 className="rise-d1">Consultoria agrícola e formação certificada desde 1995</h1>
          <p className="hero-p rise-d2">Ajudamos agricultores, empresas e investidores a concretizar projetos nos setores agrícola, agroindustrial e de turismo rural. Da candidatura à formação profissional.</p>
          <div className="hero-ctas rise-d3">
            <button className="cta-main" onClick={() => nav("projetos")}>Contactar um Consultor</button>
            <button className="cta-sec">Quero Fazer Formação →</button>
          </div>
        </div>

      </div>
    </section>

    <section className="stats">
      <div className="stats-in">
        <div className="stat"><div className="stat-num">4.455</div><div className="stat-lab">Candidaturas aprovadas</div></div>
        <div className="stat"><div className="stat-num">4.799</div><div className="stat-lab">Negócios lançados</div></div>
        <div className="stat"><div className="stat-num">10.000+</div><div className="stat-lab">Formandos certificados</div></div>
        <div className="stat"><div className="stat-num">31</div><div className="stat-lab">Anos de experiência</div></div>
      </div>
    </section>

    <section className="sec">
      <div className="sec-header">
        <div>
          <div className="sec-lab">O que fazemos</div>
          <div className="sec-t">Soluções completas para o setor agrícola</div>
          <div className="sec-sub" style={{ marginBottom:0 }}>Do planeamento à execução, acompanhamos todas as fases do seu investimento com serviços especializados.</div>
        </div>
        <button className="sec-link" onClick={() => nav("projetos")}>Ver todos os serviços →</button>
      </div>
      <div className="srv-grid-home">
        {[
          { bg:"var(--green-l)", ico:"📊", t:"Projetos e Candidaturas", d:"Preparação e submissão de candidaturas para Jovem Agricultor, PEPAC e medidas de apoio. Mais de 4.400 candidaturas aprovadas.", page:"projetos" },
          { bg:"var(--gold-l)", ico:"📈", t:"Contabilidade e Gestão", d:"Serviços de contabilidade especializados nos setores agrícola, turismo, indústria e serviços. 305 empresas acompanhadas.", page:"contabilidade" },
          { bg:"var(--vi-l)", ico:"✏️", t:"Design e Marketing", d:"Identidade visual, rótulos, websites e estratégia digital para marcas do mundo rural.", page:"marketing" },
          { bg:"var(--terra-l)", ico:"📚", t:"Formação AgroB", d:"135+ cursos online certificados em agricultura, pecuária e turismo rural. Elegíveis para candidaturas PEPAC.", page:null },
        ].map((s,i) => (
          <div key={i} className="srv-home" onClick={() => nav(s.page)}>
            <div className="srv-icon" style={{ background:s.bg }}>{s.ico}</div>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background:"var(--warm)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="sec">
        <div className="sec-header">
          <div>
            <div className="sec-lab">Medidas de apoio</div>
            <div className="sec-t">Candidaturas abertas agora</div>
            <div className="sec-sub" style={{ marginBottom:0 }}>Estas são as medidas PEPAC com candidaturas abertas mais recentes. Fale connosco para perceber se o seu projeto é elegível.</div>
          </div>
          <button className="sec-link" onClick={() => nav("projetos")}>Ver todas as medidas →</button>
        </div>
        <div className="medidas-grid">
          {MEDIDAS.filter(m => m.status==="Aberta").slice(0,3).map((m,i) => (
            <div key={i} className="medida" onClick={() => nav("projetos")}>
              <div className="medida-header">
                <div className="medida-badge badge-aberta">● Aberta</div>
                <div className="medida-cod">{m.cod}</div>
                <h3>{m.nome}</h3>
                <p>{m.desc}</p>
              </div>
              <div className="medida-footer">
                <span className="taxa">Taxa: {m.taxa}</span>
                <span className="range">{m.range}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec">
      <div className="sec-lab">Testemunhos</div>
      <div className="sec-t">O que dizem os nossos clientes</div>
      <div className="sec-sub">Milhares de profissionais já trabalharam connosco. Estas são algumas das suas palavras.</div>
      <div className="test-grid">
        {TESTEMUNHOS.map((t,i) => (
          <div key={i} className="test">
            <div className="test-stars">★★★★★</div>
            <div className="test-q">"{t.texto}"</div>
            <div className="test-who">
              <div className="test-av">{t.ini}</div>
              <div><div className="test-name">{t.nome}</div><div className="test-role">{t.papel}</div></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background:"var(--warm)", borderTop:"1px solid var(--border)" }}>
      <div className="sec">
        <div className="sec-header">
          <div>
            <div className="sec-lab">Recursos</div>
            <div className="sec-t">Artigos e guias práticos</div>
            <div className="sec-sub" style={{ marginBottom:0 }}>Informação útil para agricultores e empreendedores do setor agrícola em Portugal.</div>
          </div>
          <button className="sec-link">Ver todos os artigos →</button>
        </div>
        <div className="blog-grid">
          {BLOG.map((b,i) => (
            <div key={i} className="blog-card">
              <div className="blog-img"><span>{b.icon}</span></div>
              <div className="blog-body">
                <div className="blog-tag">{b.tag}</div>
                <div className="blog-title">{b.titulo}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-final">
      <div className="cta-final-in">
        <h2>Tem um projeto agrícola?<br />Vamos conversar.</h2>
        <p>Deixe o seu email e entraremos em contacto nas próximas 24 horas. Sem compromisso, sem custos.</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, maxWidth:520, margin:"0 auto 10px" }}>
          <input style={{ padding:"13px 16px", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"var(--rs)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, fontFamily:"inherit" }} placeholder="Nome" />
          <input style={{ padding:"13px 16px", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"var(--rs)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, fontFamily:"inherit" }} placeholder="Telefone" />
          <input type="email" style={{ padding:"13px 16px", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"var(--rs)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, fontFamily:"inherit", gridColumn:"1/-1" }} placeholder="Email" />
          <textarea style={{ padding:"13px 16px", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"var(--rs)", background:"rgba(255,255,255,0.06)", color:"white", fontSize:14, fontFamily:"inherit", gridColumn:"1/-1", minHeight:90, resize:"vertical" }} placeholder="Mensagem" />
        </div>
        <button style={{ padding:"14px 36px", background:"white", color:"var(--green-d)", border:"none", borderRadius:"var(--rs)", fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Pedir Contacto</button>
      </div>
    </section>
  </>
);

// ─── SOBRE NÓS ───────────────────────────────────────────────────────────────

const SobrePage = ({ nav }) => (
  <>
    <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#2A3D1E 50%,#1E3318 100%)" }}>
      <div className="phero-in">
        <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span className="cur">Sobre Nós</span></div>
        <h1>Há 31 anos a desenvolver o mundo rural português</h1>
        <p className="phero-sub">A Espaço Visual nasceu em 1995 com uma missão clara: apoiar agricultores, empresas e investidores a navegar a complexidade do setor agrícola português, com rigor, proximidade e resultados comprovados.</p>
        <div className="phero-stats">
          <div><div className="phs-val">1995</div><div className="phs-lab">Ano de fundação</div></div>
          <div><div className="phs-val">305</div><div className="phs-lab">Clientes ativos</div></div>
          <div><div className="phs-val">4.455</div><div className="phs-lab">Candidaturas aprovadas</div></div>
          <div><div className="phs-val">€400M+</div><div className="phs-lab">Investimento captado</div></div>
        </div>
      </div>
    </section>

    <section className="sobre-intro">
      <p>Somos uma empresa de consultoria sediada em Gondomar, especializada nos setores agrícola, agroindustrial e de turismo rural, com clientes em todo o território nacional.</p>
      <p>Em 31 anos de atividade, desenvolvemos um conjunto de serviços pensados para responder às necessidades reais dos nossos clientes: candidaturas a fundos comunitários, contabilidade e gestão, licenciamentos, planos de negócio e design. Tudo com a mesma equipa, o mesmo rigor e a mesma proximidade.</p>
    </section>

    <section style={{ background:"var(--warm)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="sec">
        <div className="sec-lab">A nossa história</div>
        <div className="sec-t">Três décadas ao serviço do rural</div>
        <div className="sec-sub">Uma trajetória de crescimento contínuo, sempre acompanhando as transformações do setor agrícola português.</div>
        <div className="timeline">
          {[
            { ano:"1995", t:"Fundação", d:"A Espaço Visual é fundada em Ponte de Lima com foco em consultoria agrícola e apoio a candidaturas a fundos europeus." },
            { ano:"2000", t:"Expansão de serviços", d:"Alargamento para serviços de contabilidade e gestão especializada para o setor agrícola e agroindustrial." },
            { ano:"2008", t:"Licenciamentos", d:"Criação da área de licenciamentos, respondendo à crescente complexidade regulatória do setor." },
            { ano:"2015", t:"AgroB — Formação Online", d:"Lançamento da plataforma de formação profissional certificada AgroB, pioneira no setor agrícola português." },
            { ano:"2020", t:"Design e Marketing Digital", d:"Criação da área criativa especializada em marcas, rótulos e estratégia digital para o mundo rural." },
            { ano:"2026", t:"Hoje", d:"Mais de 305 clientes ativos, 4.455 candidaturas aprovadas e 10.000+ formandos certificados em Portugal." },
          ].map((item,i) => (
            <div key={i} className="tl-item">
              <div className="tl-dot">{item.ano}</div>
              <div className="tl-body"><h4>{item.t}</h4><p>{item.d}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec">
      <div className="sec-lab">Os nossos valores</div>
      <div className="sec-t">O que nos guia todos os dias</div>
      <div className="sec-sub">Mais do que uma empresa de consultoria, somos parceiros de longo prazo dos nossos clientes.</div>
      <div className="values-grid">
        {[
          { ico:"🎯", t:"Rigor", d:"Cada candidatura, cada processo de licenciamento, cada plano de negócio é tratado com o máximo rigor técnico e atenção ao detalhe." },
          { ico:"🤝", t:"Proximidade", d:"Conhecemos os nossos clientes pelo nome e pela história. A relação de confiança é o alicerce de tudo o que fazemos." },
          { ico:"💡", t:"Inovação", d:"Fomos pioneiros na formação agrícola online em Portugal e continuamos a investir em soluções digitais para o setor rural." },
          { ico:"🌿", t:"Compromisso com o rural", d:"Acreditamos no potencial do mundo rural português e trabalhamos todos os dias para que mais projetos se tornem realidade." },
          { ico:"📊", t:"Transparência", d:"Sem custos escondidos, sem promessas vazias. Apresentamos propostas claras e comunicamos com honestidade em todas as etapas." },
          { ico:"🏆", t:"Resultados", d:"Mais de 90% de taxa de aprovação nas candidaturas que submetemos. Os números falam por nós." },
        ].map((v,i) => (
          <div key={i} className="value-card">
            <div className="value-ico">{v.ico}</div>
            <h4>{v.t}</h4>
            <p>{v.d}</p>
          </div>
        ))}
      </div>
    </section>

    <section style={{ background:"var(--warm)", borderTop:"1px solid var(--border)", borderBottom:"1px solid var(--border)" }}>
      <div className="sec">
        <div className="sec-lab">A nossa equipa</div>
        <div className="sec-t">Especialistas ao seu serviço</div>
        <div className="sec-sub">Uma equipa multidisciplinar com experiência comprovada nas principais áreas do setor agrícola e rural.</div>
        <div className="team-grid">
          {[
            { ico:"👨‍💼", nome:"José Fernandes", role:"Fundador & Diretor Geral", areas:"Candidaturas PEPAC, Planos de Negócio, Estratégia" },
            { ico:"👩‍💼", nome:"Ana Silva", role:"Diretora de Contabilidade", areas:"Contabilidade Agrícola, Fiscalidade, Gestão Empresarial" },
            { ico:"👨‍🌾", nome:"Pedro Costa", role:"Consultor Sénior de Projetos", areas:"Candidaturas PEPAC, Licenciamentos, Jovem Agricultor" },
            { ico:"👩‍🎨", nome:"Margarida Lopes", role:"Diretora Criativa", areas:"Design, Identidade Visual, Marketing Digital" },
            { ico:"👨‍🏫", nome:"Rui Almeida", role:"Coordenador de Formação AgroB", areas:"Formação Profissional, Cursos Certificados, E-Learning" },
            { ico:"👩‍⚖️", nome:"Catarina Matos", role:"Gestora de Licenciamentos", areas:"RAN, REN, REAP, REAI, Ambiente" },
            { ico:"👨‍💻", nome:"Tiago Rocha", role:"Consultor de Marketing Digital", areas:"SEO, Google Ads, Redes Sociais, Websites" },
            { ico:"👩‍🔬", nome:"Sofia Nunes", role:"Consultora de Projetos", areas:"Agroindústria, Turismo Rural, Estudos de Viabilidade" },
          ].map((m,i) => (
            <div key={i} className="team-card">
              <div className="team-av">{m.ico}</div>
              <div className="team-body">
                <div className="team-name">{m.nome}</div>
                <div className="team-role">{m.role}</div>
                <div className="team-areas">{m.areas}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec">
      <div className="sec-lab">Parceiros e certificações</div>
      <div className="sec-t">Com quem trabalhamos</div>
      <div className="sec-sub">Relações estabelecidas com as principais entidades do setor agrícola e organismos reguladores em Portugal.</div>
      <div className="parceiros">
        {["IFAP", "DGAV", "DRAP Norte", "DRAP Centro", "APA", "ICNF", "DGADR", "ERRAN", "OCC", "IEFP", "ANAC", "Portugal 2030"].map((p,i) => (
          <div key={i} className="parceiro">{p}</div>
        ))}
      </div>
    </section>

    <section className="cta-band" style={{ background:"linear-gradient(135deg,#2A4F26 0%,#1E3318 100%)" }}>
      <div className="cta-in">
        <div className="cta-left">
          <h2>Quer conhecer-nos melhor?</h2>
          <p>Agende uma reunião sem compromisso com a nossa equipa. Analisamos o seu projeto e apresentamos como podemos ajudar.</p>
          <div className="trust">
            <div className="trust-item"><span style={{ color:"var(--green-m)", fontWeight:700 }}>✓</span> Reunião gratuita</div>
            <div className="trust-item"><span style={{ color:"var(--green-m)", fontWeight:700 }}>✓</span> Sem compromisso</div>
          </div>
        </div>
        <div className="cta-form-card">
          <h3>Marcar reunião</h3>
          <div className="sub">Resposta em 24 horas</div>
          <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
          <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
          <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
          <div className="ff"><label>Mensagem</label><textarea placeholder="Em que podemos ajudar?" /></div>
          <button className="form-submit" style={{ background:"var(--green)" }}>Enviar Mensagem</button>
        </div>
      </div>
    </section>
  </>
);

// ─── PROJETOS ─────────────────────────────────────────────────────────────────

const ProjetosPage = ({ nav }) => {
  const [search, setSearch] = useState("");
  const [filterTaxa, setFilterTaxa] = useState("Todas");
  const [filterArea, setFilterArea] = useState("Todas");
  const [page, setPage] = useState(1);
  const PER = 6;
  const hasFilters = search || filterTaxa !== "Todas" || filterArea !== "Todas";
  const clearAll = () => { setSearch(""); setFilterTaxa("Todas"); setFilterArea("Todas"); setPage(1); };
  const filtered = MEDIDAS.filter(m => {
    const q = search.toLowerCase();
    return (!q || m.nome.toLowerCase().includes(q) || m.cod.toLowerCase().includes(q)) &&
      (filterTaxa === "Todas" || m.taxaGrupo === filterTaxa) &&
      (filterArea === "Todas" || m.area === filterArea);
  });
  const totalPages = Math.ceil(filtered.length / PER);
  const paginated = filtered.slice((page-1)*PER, page*PER);

  return <>
    <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#2A3D1E 50%,#1E3318 100%)" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 80% 30%,rgba(106,163,104,0.1) 0%,transparent 55%)" }} />
      <div className="phero-in">
        <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span>Consultoria</span><span className="sep">›</span><span className="cur">Projetos e Candidaturas</span></div>
        <h1>Candidaturas a fundos comunitários para o setor agrícola</h1>
        <p className="phero-sub">Preparamos e submetemos candidaturas a medidas de apoio PEPAC, PDR e outros programas de financiamento para projetos nos setores agrícola, agroindustrial e de turismo rural em Portugal.</p>
        <div className="phero-stats">
          <div><div className="phs-val">4.455</div><div className="phs-lab">Candidaturas aprovadas</div></div>
          <div><div className="phs-val">&gt;90%</div><div className="phs-lab">Taxa de aprovação</div></div>
          <div><div className="phs-val">31</div><div className="phs-lab">Anos de experiência</div></div>
          <div><div className="phs-val">€400M+</div><div className="phs-lab">Investimento captado</div></div>
        </div>
      </div>
    </section>

    <div className="page-layout">
      <aside className="side-nav">
        <div className="side-nav-title">Serviços de Consultoria</div>
        {[["projetos","Projetos e Candidaturas"],["licenciamentos","Licenciamentos"],["planos","Planos de Negócio"]].map(([k,l]) =>
          <button key={k} className="side-link" style={k==="projetos"?{background:"var(--green-l)",color:"var(--green)"}:{}} onClick={() => nav(k)}>{l}</button>
        )}
      </aside>
      <div className="main-col">
        <div style={{ marginBottom:64 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green)", fontWeight:700, marginBottom:10 }}>Como funciona</div>
          <div className="sec-t2">O nosso processo em 5 passos</div>
          <div className="sec-sub2">Da primeira conversa à aprovação do projeto, acompanhamos cada fase com rigor e transparência.</div>
          <div className="steps">
            {[{n:"1",t:"Consulta Inicial",d:"Reunião gratuita para avaliar elegibilidade e identificar as medidas mais adequadas."},{n:"2",t:"Análise e Estratégia",d:"Estudo de viabilidade, definição da estratégia e seleção do programa."},{n:"3",t:"Elaboração do Projeto",d:"Preparação completa do dossier: plano de investimento, análise financeira e documentação."},{n:"4",t:"Submissão",d:"Submissão da candidatura no Balcão dos Fundos da Agricultura."},{n:"5",t:"Acompanhamento",d:"Gestão pós-aprovação: pedidos de pagamento e relatórios de execução."}].map((s,i) => (
              <div key={i} className="step">
                <div className="step-num">{s.n}</div>
                <div className="step-title">{s.t}</div>
                <div className="step-desc">{s.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom:64 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green)", fontWeight:700, marginBottom:10 }}>Medidas de apoio</div>
          <div className="sec-t2">Programas de financiamento disponíveis</div>
          <div className="sec-sub2">Candidaturas a concursos PEPAC e outros programas. Estado atualizado regularmente.</div>
          <div className="medidas-controls">
            <div className="medidas-search"><span className="search-icon">🔍</span><input placeholder="Pesquisar…" value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} /></div>
            <select className={`filter-select ${filterTaxa!=="Todas"?"has-value":""}`} value={filterTaxa} onChange={e => { setFilterTaxa(e.target.value); setPage(1); }}>
              <option value="Todas">Taxa de Apoio</option>
              <option value="≥80%">≥ 80%</option>
              <option value="50-69%">50 – 69%</option>
              <option value="40-49%">40 – 49%</option>
            </select>
            <select className={`filter-select ${filterArea!=="Todas"?"has-value":""}`} value={filterArea} onChange={e => { setFilterArea(e.target.value); setPage(1); }}>
              <option value="Todas">Área</option>
              <option value="Agricultura">Agricultura</option>
              <option value="Agroindústria">Agroindústria</option>
              <option value="Floresta">Floresta</option>
              <option value="Turismo Rural">Turismo Rural</option>
            </select>
          </div>
          <div className="medidas-meta">
            <span>{filtered.length} medida{filtered.length!==1?"s":""} encontrada{filtered.length!==1?"s":""}</span>
            {hasFilters && <button className="clear-btn" onClick={clearAll}>Limpar filtros</button>}
          </div>
          <div className="medidas-grid">
            {paginated.length===0 ? <div style={{ textAlign:"center", padding:"48px", color:"var(--text-3)", gridColumn:"1/-1" }}>Nenhuma medida encontrada.</div>
              : paginated.map((m,i) => (
                <div key={i} className="medida">
                  <div className="medida-header">
                    <div className={`medida-badge ${m.status==="Aberta"?"badge-aberta":m.status==="Prevista"?"badge-prevista":"badge-encerrada"}`}>{m.status==="Aberta"?"● ":""}{m.status}</div>
                    <div className="medida-cod">{m.cod}</div>
                    <h3>{m.nome}</h3>
                    <p>{m.desc}</p>
                  </div>
                  <div className="medida-footer"><span className="taxa">Taxa: {m.taxa}</span><span className="range">{m.range}</span></div>
                </div>
              ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button className="page-btn" onClick={() => setPage(p=>p-1)} disabled={page===1}>‹</button>
              {Array.from({length:totalPages},(_,i) => <button key={i} className={`page-btn ${page===i+1?"active":""}`} onClick={() => setPage(i+1)}>{i+1}</button>)}
              <button className="page-btn" onClick={() => setPage(p=>p+1)} disabled={page===totalPages}>›</button>
            </div>
          )}
        </div>

        <div style={{ marginBottom:64 }}>
          <div className="two-col">
            <div className="info-card"><h3>Para quem é este serviço</h3><ul className="info-list">{["Jovens agricultores (18-40 anos) a iniciar a primeira exploração","Agricultores e empresas agrícolas que queiram modernizar","Investidores no setor agroindustrial e de transformação","Promotores de projetos de turismo rural e enoturismo","Cooperativas e organizações de produtores"].map((item,i) => <li key={i}><Bullet color="var(--green)" /><span>{item}</span></li>)}</ul></div>
            <div className="info-card"><h3>O que está incluído</h3><ul className="info-list">{["Análise de elegibilidade gratuita e sem compromisso","Estudo de viabilidade económica e financeira do projeto","Elaboração completa do plano de investimento","Preparação e organização de toda a documentação","Submissão da candidatura no Balcão dos Fundos","Acompanhamento pós-aprovação e pedidos de pagamento"].map((item,i) => <li key={i}><Bullet color="var(--green)" /><span>{item}</span></li>)}</ul></div>
          </div>
        </div>

        <div style={{ marginBottom:48 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green)", fontWeight:700, marginBottom:10 }}>Perguntas frequentes</div>
          <div className="sec-t2">Dúvidas sobre candidaturas?</div>
          <div className="faq-list">{FAQ_PROJ.map((f,i) => <FAQItem key={i} q={f.q} a={f.a} accent="var(--green)" />)}</div>
        </div>
      </div>
    </div>

    <section className="cta-band" style={{ background:"linear-gradient(135deg,#2A4F26 0%,#1E3318 100%)" }}>
      <div className="cta-in">
        <div className="cta-left">
          <h2>Tem um projeto agrícola?<br />Vamos analisar a sua elegibilidade.</h2>
          <p>Preencha o formulário e a nossa equipa entrará em contacto para uma análise inicial gratuita e sem compromisso.</p>
          <div className="trust"><div className="trust-item"><span style={{ color:"var(--green-m)", fontWeight:700 }}>✓</span> Análise gratuita</div><div className="trust-item"><span style={{ color:"var(--green-m)", fontWeight:700 }}>✓</span> Sem compromisso</div></div>
        </div>
        <div className="cta-form-card">
          <h3>Pedir análise de elegibilidade</h3>
          <div className="sub">Resposta em 24 horas</div>
          <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
          <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
          <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
          <div className="ff"><label>Tipo de projeto</label><select><option>Jovem Agricultor</option><option>Modernização exploração</option><option>Turismo Rural</option><option>Agroindustrial</option><option>Outro</option></select></div>
          <div className="ff"><label>Breve descrição</label><textarea placeholder="Descreva brevemente o seu projeto…" /></div>
          <button className="form-submit" style={{ background:"var(--green)" }}>Enviar Pedido de Análise</button>
        </div>
      </div>
    </section>
  </>;
};

// ─── CONTABILIDADE ────────────────────────────────────────────────────────────

const ContabilidadePage = ({ nav }) => {
  const [sub, setSub] = useState("contabilidade");
  const accent = sub==="contabilidade" ? "var(--blue)" : "var(--teal)";
  const accentL = sub==="contabilidade" ? "var(--blue-l)" : "var(--teal-l)";
  return <>
    <section className="phero" style={{ background: sub==="contabilidade" ? "linear-gradient(160deg,#1E1B16 0%,#1E2A3A 50%,#1A2840 100%)" : "linear-gradient(160deg,#1E1B16 0%,#1A3330 50%,#122520 100%)" }}>
      <div style={{ position:"absolute", inset:0, background: sub==="contabilidade" ? "radial-gradient(ellipse at 75% 25%,rgba(45,90,138,0.12) 0%,transparent 55%)" : "radial-gradient(ellipse at 75% 25%,rgba(26,122,110,0.12) 0%,transparent 55%)" }} />
      <div className="phero-in">
        <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span className="cur">{sub==="contabilidade"?"Contabilidade e Gestão":"Seguros"}</span></div>
        <h1>{sub==="contabilidade"?"Contabilidade e gestão especializada para o setor agrícola":"Seguros para explorações agrícolas e empresas"}</h1>
        <p className="phero-sub">{sub==="contabilidade"?"Serviços de contabilidade e gestão empresarial para explorações agrícolas, empresas agroindustriais e turismo rural.":"Mediação de seguros especializada para o setor agrícola e agroindustrial."}</p>
        <div className="phero-stats">
          <div><div className="phs-val">305</div><div className="phs-lab">Empresas acompanhadas</div></div>
          <div><div className="phs-val">31</div><div className="phs-lab">Anos de atividade</div></div>
          <div><div className="phs-val">4</div><div className="phs-lab">Setores de especialização</div></div>
          <div><div className="phs-val">0</div><div className="phs-lab">Custos escondidos</div></div>
        </div>
      </div>
    </section>
    <div className="page-layout">
      <aside className="side-nav">
        <div className="side-nav-title">Serviços</div>
        {[["contabilidade","Contabilidade e Gestão"],["seguros","Seguros"]].map(([k,l]) =>
          <button key={k} className="side-link" style={sub===k?{background:accentL,color:accent}:{}} onClick={() => setSub(k)}>{l}</button>
        )}
      </aside>
      <div className="main-col">
        <div style={{ marginBottom:64 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--blue)", fontWeight:700, marginBottom:10 }}>O serviço</div>
          <div className="sec-t2">{sub==="contabilidade"?"Contabilidade e gestão sem surpresas":"Proteção completa para a sua exploração"}</div>
          <p style={{ fontSize:16, lineHeight:1.75, color:"var(--text-2)", maxWidth:720 }}>{sub==="contabilidade"?"A Espaço Visual presta serviços de contabilidade e gestão empresarial a mais de 300 empresas em Portugal, com especialização nos setores agrícola, agroindustrial e de turismo rural. Com 31 anos de experiência e equipas com certificação OCC, garantimos conformidade fiscal completa e acompanhamento estratégico de gestão, com avença mensal fixa e sem custos adicionais.":"A Espaço Visual atua como mediadora de seguros, ajudando agricultores, empresas agroindustriais e promotores de turismo rural a encontrar as coberturas mais adequadas às suas necessidades. Com 31 anos de experiência no setor agrícola, conhecemos os riscos específicos de cada atividade."}</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <div className="pillars" style={{ gridTemplateColumns:"1fr 1fr" }}>
            {sub==="contabilidade" ? <>
              <div className="pillar"><div className="pillar-icon" style={{ background:"var(--blue-l)" }}>📊</div><h3>Contabilidade</h3><p>Conformidade fiscal completa e pontual.</p><ul className="pillar-items"><li>Declarações de IVA periódicas</li><li>IRC / IRS e relatórios anuais</li><li>Gestão de despesas e conciliação bancária</li><li>Contribuições Segurança Social</li><li>IES, Modelo 22, Modelo 3</li></ul></div>
              <div className="pillar"><div className="pillar-icon" style={{ background:"var(--green-l)" }}>📈</div><h3>Gestão Empresarial</h3><p>Da criação da empresa à expansão.</p><ul className="pillar-items"><li>Constituição e registo de empresas</li><li>Planeamento fiscal e otimização</li><li>Balancetes mensais e relatórios de gestão</li><li>Indicadores de rentabilidade e liquidez</li><li>Apoio a processos de financiamento</li></ul></div>
            </> : <>
              <div className="pillar"><div className="pillar-icon" style={{ background:"var(--green-l)" }}>🌾</div><h3>Seguros Agrícolas</h3><p>Coberturas especializadas para explorações agrícolas.</p><ul className="pillar-items"><li>Seguros de exploração agrícola</li><li>Seguros de colheita (granizo, geada, seca)</li><li>Seguros de gado e animais</li><li>Equipamentos e máquinas agrícolas</li><li>Responsabilidade civil da exploração</li></ul></div>
              <div className="pillar"><div className="pillar-icon" style={{ background:"var(--gold-l)" }}>🏢</div><h3>Seguros Empresariais</h3><p>Proteção completa para a sua empresa.</p><ul className="pillar-items"><li>Acidentes de trabalho</li><li>Responsabilidade civil empresarial</li><li>Seguro multirriscos empresarial</li><li>Seguro de frota e viaturas</li><li>Análise e otimização de apólices existentes</li></ul></div>
            </>}
          </div>
        </div>
        <div style={{ marginBottom:48 }}>
          <div className="sec-t2">Perguntas frequentes</div>
          <div className="faq-list">{(sub==="contabilidade"?FAQ_CONT:[{q:"Que tipos de seguros tratam?",a:"Cobrimos seguros de exploração agrícola, colheita, gado, acidentes de trabalho, responsabilidade civil e multirriscos empresarial."},{q:"A mediação de seguros tem custo adicional?",a:"Não. O serviço de mediação é remunerado pelas seguradoras, sem qualquer custo adicional para o cliente."},{q:"Podem analisar os meus seguros atuais?",a:"Sim. Fazemos uma análise gratuita das apólices existentes e apresentamos alternativas mais vantajosas sempre que existam."}]).map((f,i) => <FAQItem key={i} q={f.q} a={f.a} accent="var(--blue)" />)}</div>
        </div>
      </div>
    </div>
    <section className="cta-band" style={{ background: sub==="contabilidade" ? "linear-gradient(135deg,#1A2840 0%,#1E3348 100%)" : "linear-gradient(135deg,#122520 0%,#1A3330 100%)" }}>
      <div className="cta-in">
        <div className="cta-left">
          <h2>{sub==="contabilidade"?"Precisa de um contabilista que perceba o seu setor?":"Quer rever os seus seguros ou contratar novos?"}</h2>
          <p>{sub==="contabilidade"?"Analisamos o seu caso e apresentamos uma avença adaptada à dimensão e complexidade do seu negócio.":"Analisamos gratuitamente as suas necessidades de proteção ou as apólices que já tem."}</p>
          <div className="trust"><div className="trust-item"><span style={{ color:"#7EB3E0", fontWeight:700 }}>✓</span> Proposta gratuita</div><div className="trust-item"><span style={{ color:"#7EB3E0", fontWeight:700 }}>✓</span> Avença fixa</div></div>
        </div>
        <div className="cta-form-card">
          <h3>{sub==="contabilidade"?"Pedir proposta de contabilidade":"Pedir análise de seguros"}</h3>
          <div className="sub">Resposta personalizada em 24 horas</div>
          <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
          <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
          <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
          <div className="ff"><label>Mensagem</label><textarea placeholder="Descreva brevemente a sua atividade…" /></div>
          <button className="form-submit" style={{ background: sub==="contabilidade" ? "var(--blue)" : "var(--teal)" }}>{sub==="contabilidade"?"Pedir Proposta":"Pedir Análise de Seguros"}</button>
        </div>
      </div>
    </section>
  </>;
};

// ─── LICENCIAMENTOS ───────────────────────────────────────────────────────────

const LicenciamentosPage = ({ nav }) => {
  const [areaIdx, setAreaIdx] = useState(null);
  const [page, setPage] = useState(1);
  const PER = 6;
  const areas = [{ico:"🌾",nome:"Agri. e Pecuária"},{ico:"🏭",nome:"Industrial"},{ico:"🛒",nome:"Comércio"},{ico:"🗺️",nome:"Uso do Solo"},{ico:"✅",nome:"Certificações"}];
  const allItems = (areaIdx===null ? LICENCAS : [LICENCAS[areaIdx]]).flatMap(cat => cat.items.map(l => ({...l, tag:cat.tag, cat:cat.cat})));
  const totalPages = Math.ceil(allItems.length / PER);
  const paginated = allItems.slice((page-1)*PER, page*PER);

  return <>
    <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#3A2E1A 50%,#2E2010 100%)" }}>
      <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 75% 30%,rgba(146,100,10,0.1) 0%,transparent 55%)" }} />
      <div className="phero-in">
        <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span>Consultoria</span><span className="sep">›</span><span className="cur">Licenciamentos</span></div>
        <h1>Licenciamentos e enquadramento legal para o setor agrícola</h1>
        <p className="phero-sub">Tratamos de todo o processo de licenciamento para explorações agrícolas, unidades pecuárias, agroindústrias e turismo rural — da análise ao acompanhamento até à obtenção do título.</p>
        <div className="phero-stats">
          <div><div className="phs-val">5</div><div className="phs-lab">Áreas de licenciamento</div></div>
          <div><div className="phs-val">10+</div><div className="phs-lab">Tipos de processo</div></div>
          <div><div className="phs-val">31</div><div className="phs-lab">Anos de experiência</div></div>
          <div><div className="phs-val">100%</div><div className="phs-lab">Acompanhamento incluído</div></div>
        </div>
      </div>
    </section>
    <div className="page-layout">
      <aside className="side-nav">
        <div className="side-nav-title">Serviços de Consultoria</div>
        {[["projetos","Projetos e Candidaturas"],["licenciamentos","Licenciamentos"],["planos","Planos de Negócio"]].map(([k,l]) =>
          <button key={k} className="side-link" style={k==="licenciamentos"?{background:"var(--amber-l)",color:"var(--amber)"}:{}} onClick={() => nav(k)}>{l}</button>
        )}
      </aside>
      <div className="main-col">
        <div style={{ marginBottom:64 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--amber)", fontWeight:700, marginBottom:10 }}>O serviço</div>
          <div className="sec-t2">Licenciamentos sem complicações</div>
          <p style={{ fontSize:16, lineHeight:1.75, color:"var(--text-2)", maxWidth:720 }}>Navegar pela burocracia dos licenciamentos agrícolas e ambientais é complexo e moroso. Na Espaço Visual tratamos de todo o processo — desde o enquadramento legal até à obtenção do título. Com 31 anos de experiência e relações estabelecidas com as principais entidades reguladoras (APA, DGAV, DRAP, ICNF, ERRAN), garantimos processos bem instruídos e total transparência em cada etapa.</p>
        </div>
        <div style={{ marginBottom:64 }}>
          <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--amber)", fontWeight:700, marginBottom:10 }}>Áreas de licenciamento</div>
          <div className="sec-t2">Todos os licenciamentos que o seu projeto precisa</div>
          <div className="sec-sub2">Filtre por área ou explore todos os tipos de licenciamento que tratamos.</div>
          <div className="areas">
            <button className={`area-tab ${areaIdx===null?"active":""}`} onClick={() => { setAreaIdx(null); setPage(1); }}><span className="ico">📋</span>Todos</button>
            {areas.map((a,i) => <button key={i} className={`area-tab ${areaIdx===i?"active":""}`} onClick={() => { setAreaIdx(areaIdx===i?null:i); setPage(1); }}><span className="ico">{a.ico}</span>{a.nome}</button>)}
          </div>
          <div className="lic-grid">
            {paginated.map((l,li) => (
              <div key={li} className="lic">
                <span className={`lic-tag ${l.tag}`}>{l.cat}</span>
                <h3>{l.nome}</h3>
                <p>{l.desc}</p>
                <ul className="lic-items">{l.steps.map((s,si) => <li key={si}>{s}</li>)}</ul>
                <button className="lic-cta">Pedir informação →</button>
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="pagination">
              <button className="page-btn" onClick={() => setPage(p=>p-1)} disabled={page===1}>‹</button>
              {Array.from({length:totalPages},(_,i) => <button key={i} className={`page-btn ${page===i+1?"active":""}`} style={page===i+1?{background:"var(--amber)",borderColor:"var(--amber)"}:{}} onClick={() => setPage(i+1)}>{i+1}</button>)}
              <button className="page-btn" onClick={() => setPage(p=>p+1)} disabled={page===totalPages}>›</button>
            </div>
          )}
        </div>
        <div style={{ marginBottom:48 }}>
          <div className="sec-t2">Perguntas frequentes</div>
          <div className="faq-list">{FAQ_LIC.map((f,i) => <FAQItem key={i} q={f.q} a={f.a} accent="var(--amber)" />)}</div>
        </div>
      </div>
    </div>
    <section className="cta-band" style={{ background:"linear-gradient(135deg,#2E2010 0%,#3A2E1A 100%)" }}>
      <div className="cta-in">
        <div className="cta-left">
          <h2>Precisa de tratar licenciamentos para o seu projeto?</h2>
          <p>Identificamos todos os licenciamentos necessários e apresentamos uma proposta clara.</p>
          <div className="trust"><div className="trust-item"><span style={{ color:"#D4A84B", fontWeight:700 }}>✓</span> Análise gratuita</div><div className="trust-item"><span style={{ color:"#D4A84B", fontWeight:700 }}>✓</span> Acompanhamento total</div></div>
        </div>
        <div className="cta-form-card">
          <h3>Pedir análise de licenciamento</h3>
          <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
          <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
          <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
          <div className="ff"><label>Tipo de licenciamento</label><select><option>Recursos hídricos</option><option>Atividade pecuária (REAP)</option><option>Industrial (REAI)</option><option>Parecer RAN / REN</option><option>Outro</option></select></div>
          <div className="ff"><label>Descrição</label><textarea placeholder="Descreva brevemente o que precisa de licenciar…" /></div>
          <button className="form-submit" style={{ background:"var(--amber)" }}>Enviar Pedido</button>
        </div>
      </div>
    </section>
  </>;
};

// ─── PLANOS ───────────────────────────────────────────────────────────────────

const PlanosPage = ({ nav }) => <>
  <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#3A2820 50%,#2D1E15 100%)" }}>
    <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 75% 30%,rgba(168,122,90,0.1) 0%,transparent 55%)" }} />
    <div className="phero-in">
      <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span>Consultoria</span><span className="sep">›</span><span className="cur">Planos de Negócio</span></div>
      <h1>Planos de negócio e assessoria ao investimento</h1>
      <p className="phero-sub">Estudamos a viabilidade do seu projeto, construímos o modelo de negócio e acompanhamos a implementação — desde a ideia até à operação.</p>
      <div className="phero-stats">
        <div><div className="phs-val">4.799</div><div className="phs-lab">Negócios lançados</div></div>
        <div><div className="phs-val">31</div><div className="phs-lab">Anos de experiência</div></div>
        <div><div className="phs-val">€400M+</div><div className="phs-lab">Investimento assessorado</div></div>
      </div>
    </div>
  </section>
  <div className="page-layout">
    <aside className="side-nav">
      <div className="side-nav-title">Serviços de Consultoria</div>
      {[["projetos","Projetos e Candidaturas"],["licenciamentos","Licenciamentos"],["planos","Planos de Negócio"]].map(([k,l]) =>
        <button key={k} className="side-link" style={k==="planos"?{background:"var(--terra-l)",color:"var(--terra)"}:{}} onClick={() => nav(k)}>{l}</button>
      )}
    </aside>
    <div className="main-col">
      <div style={{ marginBottom:64 }}>
        <div className="sec-t2">Da análise à implementação</div>
        <div className="sec-sub2">Dois eixos de atuação complementares para garantir o sucesso do seu investimento.</div>
        <div className="pillar-row">
          <div className="pln-pillar"><h3>Planos de Negócio e Estudos</h3><ul className="pillar-list">{["Estudos técnico-económicos e análise de viabilidade","Análises financeiras e projeções de rentabilidade","Planos de negócio completos (técnico, estratégico, financeiro)","Planos estratégicos com definição de objetivos e KPIs","Dossiers de candidatura a financiamento (PEPAC, PT2030)"].map((item,i) => <li key={i}><Bullet color="var(--terra)" /><span>{item}</span></li>)}</ul></div>
          <div className="pln-pillar"><h3>Assessoria ao Investimento</h3><ul className="pillar-list">{["Diversificação de atividades e novas linhas de negócio","Planos de internacionalização e inovação empresarial","Preparação de dossier e negociação com a banca","Identificação de linhas de crédito e apoios disponíveis","Acompanhamento da implementação e arranque do negócio"].map((item,i) => <li key={i}><Bullet color="var(--terra)" /><span>{item}</span></li>)}</ul></div>
        </div>
      </div>
      <div style={{ marginBottom:64 }}>
        <div className="sec-t2">Quando é que precisa deste serviço?</div>
        <div className="sec-sub2">Situações reais em que os nossos clientes recorrem a planos de negócio e assessoria.</div>
        <div className="use-grid">
          {[{ico:"🌱",t:"Lançar um novo negócio",d:"Tem uma ideia e quer perceber se é viável e como estruturar o projeto antes de avançar."},{ico:"🏡",t:"Investir em turismo",d:"Quer avaliar a viabilidade de um projeto turístico — alojamento, experiências ou gastronomia."},{ico:"📈",t:"Expandir o negócio",d:"A empresa está a crescer e precisa de um plano estratégico para estruturar a próxima fase."},{ico:"🔄",t:"Diversificar atividades",d:"Quer complementar o negócio principal com novas linhas de receita."},{ico:"🏦",t:"Obter financiamento bancário",d:"O banco exige um plano de negócio sólido para aprovar o crédito ao seu investimento."},{ico:"🌍",t:"Internacionalizar",d:"Quer levar o seu produto ou serviço a novos mercados."}].map((c,i) => (
            <div key={i} className="use-case"><div className="use-ico">{c.ico}</div><h4>{c.t}</h4><p>{c.d}</p></div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom:48 }}>
        <div className="sec-t2">Perguntas frequentes</div>
        <div className="faq-list">{FAQ_PLAN.map((f,i) => <FAQItem key={i} q={f.q} a={f.a} accent="var(--terra)" />)}</div>
      </div>
    </div>
  </div>
  <section className="cta-band" style={{ background:"linear-gradient(135deg,#2D1E15 0%,#3A2820 100%)" }}>
    <div className="cta-in">
      <div className="cta-left">
        <h2>Tem uma ideia de negócio no mundo rural?</h2>
        <p>Fazemos uma primeira análise de viabilidade e apresentamos uma proposta de trabalho adequada à sua situação.</p>
        <div className="trust"><div className="trust-item"><span style={{ color:"var(--terra-m)", fontWeight:700 }}>✓</span> Reunião inicial gratuita</div><div className="trust-item"><span style={{ color:"var(--terra-m)", fontWeight:700 }}>✓</span> Proposta detalhada</div></div>
      </div>
      <div className="cta-form-card">
        <h3>Pedir análise do projeto</h3>
        <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
        <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
        <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
        <div className="ff"><label>Descreva a sua ideia</label><textarea placeholder="Que negócio pretende iniciar ou expandir?" /></div>
        <button className="form-submit" style={{ background:"var(--terra)" }}>Enviar Pedido</button>
      </div>
    </div>
  </section>
</>;

// ─── MARKETING ────────────────────────────────────────────────────────────────

const MarketingPage = ({ nav }) => <>
  <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#251E38 50%,#1A1530 100%)" }}>
    <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 70% 25%,rgba(126,93,184,0.12) 0%,transparent 55%)" }} />
    <div className="phero-in">
      <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span className="cur">Design e Marketing Digital</span></div>
      <h1>Design e marketing digital para o mundo rural</h1>
      <p className="phero-sub">Criamos marcas, websites e estratégias digitais que fazem crescer negócios agrícolas, turísticos e agroindustriais.</p>
      <div className="phero-stats">
        <div><div className="phs-val">31</div><div className="phs-lab">Anos de experiência</div></div>
        <div><div className="phs-val">200+</div><div className="phs-lab">Marcas criadas</div></div>
        <div><div className="phs-val">9</div><div className="phs-lab">Serviços criativos</div></div>
      </div>
    </div>
  </section>
  <div className="page-layout">
    <aside className="side-nav">
      <div className="side-nav-title">Serviços de Consultoria</div>
      <button className="side-link" style={{ background:"var(--vi-l)", color:"var(--vi)" }}>Design e Marketing</button>
    </aside>
    <div className="main-col">
      <div style={{ marginBottom:64 }}>
        <div className="sec-t2">Tudo o que a sua marca precisa</div>
        <div className="sec-sub2">Do conceito à execução, cobrimos toda a cadeia criativa e digital.</div>
        <div className="srv-grid">
          {[{ico:"✏️",bg:"var(--vi-l)",t:"Identidade Visual",d:"Logótipos, manuais de normas e identidade de marca completa."},{ico:"🏷️",bg:"#FFF3E0",t:"Labels & Packaging",d:"Rótulos para vinhos, azeites, mel e produtos regionais."},{ico:"🖨️",bg:"var(--green-l)",t:"Design para Impressão",d:"Materiais publicitários, merchandising e artes finais."},{ico:"🌐",bg:"#EBF2FA",t:"Websites",d:"Criação de sites e landing pages em WordPress."},{ico:"📱",bg:"var(--vi-l)",t:"Redes Sociais",d:"Planeamento, criação e gestão de conteúdos."},{ico:"📣",bg:"var(--gold-l)",t:"Publicidade Digital",d:"Campanhas Google Ads, Facebook Ads e Instagram Ads."},{ico:"📷",bg:"var(--terra-l)",t:"Fotografia",d:"Captação e edição de fotografia de produto e institucional."},{ico:"🎬",bg:"#FEE2E2",t:"Vídeo",d:"Produção de vídeos promocionais para marcas e produtos."},{ico:"📊",bg:"var(--warm)",t:"Estratégia Digital",d:"Diagnóstico de presença digital e plano de crescimento online."}].map((s,i) => (
            <div key={i} className="srv"><div className="srv-ico" style={{ background:s.bg }}>{s.ico}</div><h3>{s.t}</h3><p>{s.d}</p></div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom:48 }}>
        <div className="sec-t2">Perguntas frequentes</div>
        <div className="faq-list">{FAQ_MKT.map((f,i) => <FAQItem key={i} q={f.q} a={f.a} accent="var(--vi)" />)}</div>
      </div>
    </div>
  </div>
  <section className="cta-band" style={{ background:"linear-gradient(135deg,#1A1530 0%,#251E38 100%)" }}>
    <div className="cta-in">
      <div className="cta-left">
        <h2>Quer dar mais visibilidade ao seu negócio?</h2>
        <p>Conte-nos o que precisa — desde um logótipo até uma estratégia digital completa.</p>
        <div className="trust"><div className="trust-item"><span style={{ color:"var(--vi-m)", fontWeight:700 }}>✓</span> Proposta gratuita</div><div className="trust-item"><span style={{ color:"var(--vi-m)", fontWeight:700 }}>✓</span> Especialistas no rural</div></div>
      </div>
      <div className="cta-form-card">
        <h3>Pedir proposta criativa</h3>
        <div className="ff"><label>Nome</label><input placeholder="O seu nome completo" /></div>
        <div className="ff"><label>Email</label><input type="email" placeholder="email@exemplo.pt" /></div>
        <div className="ff"><label>Telefone</label><input placeholder="+351 ..." /></div>
        <div className="ff"><label>O que procura</label><select><option>Logótipo / Identidade visual</option><option>Rótulos / Packaging</option><option>Website</option><option>Gestão de redes sociais</option><option>Outro</option></select></div>
        <div className="ff"><label>Descreva o seu projeto</label><textarea placeholder="Que marca ou negócio quer promover?" /></div>
        <button className="form-submit" style={{ background:"var(--vi)" }}>Enviar Pedido</button>
      </div>
    </div>
  </section>
</>;

// ─── CONTACTOS ───────────────────────────────────────────────────────────────

const ContactosPage = ({ nav }) => <>
  <section className="phero" style={{ background:"linear-gradient(160deg,#1E1B16 0%,#2A3D1E 50%,#1E3318 100%)" }}>
    <div className="phero-in">
      <div className="breadcrumb"><span onClick={() => nav("home")}>Início</span><span className="sep">›</span><span className="cur">Contactos</span></div>
      <h1>Fale connosco</h1>
      <p className="phero-sub">Estamos disponíveis para responder a todas as suas questões. Contacte-nos por telefone, email ou preencha o formulário e entraremos em contacto em 24 horas.</p>
    </div>
  </section>

  <div className="sec" style={{ paddingBottom:0 }}>
    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:48 }}>

      <div>
        <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green)", fontWeight:700, marginBottom:24 }}>Informações de contacto</div>
        <div style={{ display:"flex", flexDirection:"column", gap:16, marginBottom:40 }}>
          {[
            { ico:"📍", t:"Morada", d:"Rua da Espaço Visual, 123\n4420-000 Gondomar, Portugal" },
            { ico:"📞", t:"Telefone", d:"+351 224 509 047" },
            { ico:"✉️", t:"Email geral", d:"geral@espaco-visual.pt" },
            { ico:"🕒", t:"Horário", d:"Segunda a Sexta: 9h00 – 18h00\nSábado: 9h00 – 13h00" },
          ].map((item,i) => (
            <div key={i} style={{ display:"flex", gap:16, alignItems:"flex-start", padding:"20px 24px", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r)" }}>
              <div style={{ width:44, height:44, borderRadius:12, background:"var(--green-l)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{item.ico}</div>
              <div>
                <div style={{ fontSize:12, fontWeight:700, color:"var(--text-3)", textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:4 }}>{item.t}</div>
                <div style={{ fontSize:14, color:"var(--text)", lineHeight:1.6, whiteSpace:"pre-line" }}>{item.d}</div>
              </div>
            </div>
          ))}
        </div>


      </div>

      <div style={{ background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"var(--r)", padding:36 }}>
        <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green)", fontWeight:700, marginBottom:6 }}>Formulário de contacto</div>
        <div style={{ fontFamily:"'Source Serif 4',serif", fontSize:24, fontWeight:700, marginBottom:4, letterSpacing:"-0.02em" }}>Envie-nos uma mensagem</div>
        <p style={{ fontSize:14, color:"var(--text-2)", marginBottom:24, lineHeight:1.6 }}>Resposta garantida em 24 horas úteis.</p>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
          <div>
            <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--text-3)", fontWeight:600, marginBottom:5 }}>Nome</label>
            <input style={{ width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"var(--rs)", background:"var(--bg)", fontSize:14, fontFamily:"inherit", color:"var(--text)" }} placeholder="O seu nome completo" />
          </div>
          <div>
            <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--text-3)", fontWeight:600, marginBottom:5 }}>Telefone</label>
            <input style={{ width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"var(--rs)", background:"var(--bg)", fontSize:14, fontFamily:"inherit", color:"var(--text)" }} placeholder="+351 ..." />
          </div>
          <div style={{ gridColumn:"1/-1" }}>
            <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--text-3)", fontWeight:600, marginBottom:5 }}>Email</label>
            <input type="email" style={{ width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"var(--rs)", background:"var(--bg)", fontSize:14, fontFamily:"inherit", color:"var(--text)" }} placeholder="email@exemplo.pt" />
          </div>
          <div style={{ gridColumn:"1/-1" }}>
            <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--text-3)", fontWeight:600, marginBottom:5 }}>Assunto</label>
            <select style={{ width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"var(--rs)", background:"var(--bg)", fontSize:14, fontFamily:"inherit", color:"var(--text-2)", appearance:"none" }}>
              <option>Projetos e Candidaturas</option>
              <option>Contabilidade e Gestão</option>
              <option>Licenciamentos</option>
              <option>Planos de Negócio</option>
              <option>Design e Marketing</option>
              <option>Formação AgroB</option>
              <option>Outro</option>
            </select>
          </div>
          <div style={{ gridColumn:"1/-1" }}>
            <label style={{ display:"block", fontSize:11, textTransform:"uppercase", letterSpacing:"0.08em", color:"var(--text-3)", fontWeight:600, marginBottom:5 }}>Mensagem</label>
            <textarea style={{ width:"100%", padding:"11px 14px", border:"1px solid var(--border)", borderRadius:"var(--rs)", background:"var(--bg)", fontSize:14, fontFamily:"inherit", color:"var(--text)", minHeight:120, resize:"vertical" }} placeholder="Descreva brevemente o que procura…" />
          </div>
          <div style={{ gridColumn:"1/-1" }}>
            <button style={{ width:"100%", padding:"14px", background:"var(--green)", color:"white", border:"none", borderRadius:"var(--rs)", fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"inherit" }}>Enviar Mensagem</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style={{ maxWidth:"var(--max)", margin:"48px auto", padding:"0 28px 72px" }}>
    <div style={{ background:"var(--text)", borderRadius:"var(--r)", padding:"48px 36px", display:"flex", justifyContent:"space-between", alignItems:"center", gap:32 }}>
      <div>
        <div style={{ fontSize:11, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--green-m)", fontWeight:700, marginBottom:10 }}>Recrutamento</div>
        <div style={{ fontFamily:"'Source Serif 4',serif", fontSize:26, fontWeight:700, color:"white", marginBottom:10, letterSpacing:"-0.02em" }}>Quer juntar-se à Espaço Visual?</div>
        <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.7, maxWidth:520 }}>Estamos sempre à procura de pessoas com paixão pelo mundo rural e vontade de fazer a diferença. Se tem experiência em consultoria agrícola, contabilidade, licenciamentos ou design, envie-nos a sua candidatura espontânea.</p>
      </div>
      <a href="mailto:geral@espaco-visual.pt?subject=Candidatura Espontânea" style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"14px 28px", background:"var(--green)", color:"white", borderRadius:"var(--rs)", fontSize:14, fontWeight:700, textDecoration:"none", whiteSpace:"nowrap", flexShrink:0 }}>Enviar candidatura →</a>
    </div>
  </div>
</>;

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState("home");
  const isConsultoria = ["projetos","licenciamentos","planos"].includes(page);

  return (
    <>
      <style>{CSS}</style>
      <nav className="nav">
        <div className="nav-in">
          <div className="logo" onClick={() => setPage("home")}>
            <span className="logo-main">Espaço Visual</span><span className="logo-dot">.</span>
          </div>
          <div className="nlinks">
            <div className="nlink-wrap">
              <button className={`nlink ${isConsultoria?"act":""}`}>Consultoria <span className="nlink-arrow">▾</span></button>
              <div className="ndropdown">
                <a onClick={() => setPage("projetos")}>Projetos e Candidaturas</a>
                <a onClick={() => setPage("licenciamentos")}>Licenciamentos</a>
                <a onClick={() => setPage("planos")}>Planos de Negócio</a>
              </div>
            </div>
            <button className={`nlink ${page==="contabilidade"?"act":""}`} onClick={() => setPage("contabilidade")}>Contabilidade</button>
            <button className="nlink">Formação</button>
            <button className={`nlink ${page==="marketing"?"act":""}`} onClick={() => setPage("marketing")}>Design e Marketing</button>
            <button className={`nlink ${page==="sobre"?"act":""}`} onClick={() => setPage("sobre")}>Sobre Nós</button>
            <button className={`nlink ${page==="contactos"?"act":""}`} onClick={() => setPage("contactos")}>Contactos</button>
          </div>
          <div className="nright">
            <button className="nicon" title="CentralGest" style={{ fontSize:11, fontWeight:700, letterSpacing:"-0.02em", color:"rgba(255,255,255,0.5)" }}>CG</button>
            <button className="nicon" title="Área de Cliente">👤</button>
            <button className="nbtn">Pedir Contacto</button>
          </div>
        </div>
      </nav>

      {page==="home" && <HomePage nav={setPage} />}
      {page==="sobre" && <SobrePage nav={setPage} />}
      {page==="projetos" && <ProjetosPage nav={setPage} />}
      {page==="contabilidade" && <ContabilidadePage nav={setPage} />}
      {page==="licenciamentos" && <LicenciamentosPage nav={setPage} />}
      {page==="planos" && <PlanosPage nav={setPage} />}
      {page==="marketing" && <MarketingPage nav={setPage} />}
      {page==="contactos" && <ContactosPage nav={setPage} />}

      <Footer nav={setPage} />
    </>
  );
}

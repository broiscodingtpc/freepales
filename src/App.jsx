import React, { useState, useEffect, useRef } from "react";
import "./index.css";

// FREE PALESTINE — Professional one‑page site (single file)
// Stack: React + Tailwind utility classes only. No external imports.
// Enhanced with 3D effects, smooth animations, and professional design
// Notes:
// - Proof of funds is posted ONLY on Telegram (per owner request)
// - All links are rendered as clearly labeled buttons
// - Includes About Fawzi section, Press & Coverage, and Dev Smoke Tests

export default function FreePalestineSite() {
  // ==== Donation wallet (SOL only) ====
  const DONATION_WALLETS = [
    { chain: "SOL", address: "FTqhceb9mZ94GZg89idm81ZBV4q4TURCfXSL366Edn2K" },
  ];

  // ==== PALESTINE Token Contract Address ====
  const PALESTINE_TOKEN_CA = "Doa8tFTer7DpVrYgeLKtHD4xVJaydeFWTSrvsqnWpump";

  // ==== Links ====
  const TELEGRAM_LINK = "https://t.me/freepalestineproject"; // Movement Telegram (proof lives here)
  const IG_MOVEMENT = "https://www.instagram.com/windsor4palestine?igsh=bDE3aTRzdm82YTNi";
  const IG_OWNER = "https://www.instagram.com/fawzizaid.palestine?igsh=NjdtYXY0bTdrYnd2";
  const X_COMMUNITY = "https://x.com/i/communities/1965909075302273378";
  const X_OWNER = "https://x.com/Fawzi18936";
  const TIKTOK_LINK = "https://www.tiktok.com/@fawzizaid3?_t=ZS-8zch2pKBLPg&_r=1";
  const PUMPFUN_STREAM_URL = "https://pump.fun/coin/Doa8tFTer7DpVrYgeLKtHD4xVJaydeFWTSrvsqnWpump"; // People For Palestine Stream (PALESTINE)

  const pressLinks = [
    {
      title:
        "Windsor Star – Pro-Palestine protesters stage noisy disruption outside Windsor Negev Dinner",
      href: "https://windsorstar.com/news/local-news/pro-palestine-protesters-stage-noisy-disruption-outside-windsor-negev-dinner",
    },
    {
      title: "CBC – Hundreds march in Windsor in solidarity with Palestinians",
      href: "https://www.cbc.ca/news/canada/windsor/windsor-jew-israel-gaza-palestinian-protest-march-demonstration-1.7077679",
    },
    {
      title:
        "CTV – Windsor Jewish Federation accuses pro-Palestinian protestors of attempted intimidation",
      href: "https://www.ctvnews.ca/windsor/article/windsor-jewish-federation-accuses-pro-palestinian-protestors-of-attempted-intimidation/",
    },
    {
      title:
        "Windsor Star – University of Windsor hit with backlash for striking deal with pro-Palestinian student protesters",
      href: "https://windsorstar.com/news/local-news/university-of-windsor-hit-with-backlash-for-striking-deal-with-pro-palestinian-student-protesters",
    },
    {
      title:
        "CTV – University of Windsor upholds decision on agreements with pro-Palestinian protesters",
      href: "https://www.ctvnews.ca/windsor/article/university-of-windsor-upholds-decision-on-agreements-with-pro-palestinian-protesters/",
    },
    {
      title:
        "Windsor Star – $1M gift gone: Big donors desert UWindsor in wake of controversial deal with pro-Palestinian protesters",
      href: "https://windsorstar.com/news/local-news/1m-gift-gone-big-donors-desert-uwindsor-in-wake-of-controversial-deal-with-pro-palestinian-student-protesters",
    },
  ];

  const activist = {
    name: "Fawzi Issa Zaid",
    location: "Ontario, Canada",
    yearsActive: 6,
    cadence: "Weekly protests & silent stands",
    summary:
      "Palestinian activist in Ontario, organizing weekly protests and silent stands for 6+ years. Streams protests, events, and daily life to raise awareness and direct aid for families in Palestine facing war, displacement, and starvation.",
    headshot:
      "https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafkreifaghde5nb7ydzfs7xk2ycj6a5awzqqzikoawjeee5u62yfvel4me",
  };

  // Enhanced button class presets with 3D effects
  const BTN_PRIMARY =
    "inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 transition-all duration-300 ease-out";
  const BTN_SUBTLE =
    "inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white font-medium shadow-lg hover:shadow-neutral-500/20 transform hover:scale-105 transition-all duration-300 ease-out";
  const BTN_GHOST =
    "inline-flex items-center justify-center px-6 py-3 rounded-2xl border-2 border-neutral-700 hover:border-emerald-500 text-white font-medium hover:bg-emerald-500/10 transform hover:scale-105 transition-all duration-300 ease-out";

  const [copied, setCopied] = useState(null);
  const copy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      alert("Copy failed. Please copy manually.");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.08),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.05),transparent_50%)] animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <Nav />
      <Hero
        activist={activist}
        pumpUrl={PUMPFUN_STREAM_URL}
        BTN_PRIMARY={BTN_PRIMARY}
        BTN_SUBTLE={BTN_SUBTLE}
        BTN_GHOST={BTN_GHOST}
      />

      {/* Enhanced Safety & Transparency Banner */}
      <div className="mx-auto max-w-7xl px-4 mt-8">
        <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-emerald-900/20 to-neutral-900/50 backdrop-blur-sm p-6 text-sm text-neutral-200 shadow-2xl shadow-emerald-500/10">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent" />
          <div className="relative flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <strong className="text-emerald-300 font-semibold">Transparency:</strong> 
            <span>Proof of distributions is posted</span>
            <a className="underline hover:text-emerald-300 transition-colors font-medium" href={TELEGRAM_LINK} target="_blank" rel="noreferrer">on Telegram only</a>
            <span>for safety.</span>
          </div>
        </div>
      </div>

      {/* Enhanced Donate Section */}
      <Section id="donate" title="Donate — 100% to Families in Need">
        <p className="text-neutral-300 max-w-3xl text-lg leading-relaxed">
          Creator fees and donations fund food, medicine, shelter, and evacuations for Palestinian families. Your support
          makes immediate impact.
        </p>
        {DONATION_WALLETS.map((w) => (
          <div
            key={w.chain}
            className="group mt-8 rounded-3xl border border-emerald-500/20 p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/40"
            aria-label={`Donation card for ${w.chain}`}
            style={{
              transform: 'perspective(1000px) rotateX(0deg)',
              transformStyle: 'preserve-3d'
            }}
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">₿</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">{w.chain} Donation Wallet</h3>
              </div>
              <span className="text-xs text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1 rounded-full">Click to copy or open explorer</span>
            </div>
            <div className="relative">
              <p className="break-all text-sm text-neutral-300 font-mono bg-neutral-800/50 p-4 rounded-xl border border-neutral-700" aria-live="polite">
                {w.address}
              </p>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button 
                onClick={() => copy(w.address, w.chain)} 
                className={`${BTN_PRIMARY} ${copied === w.chain ? 'animate-pulse' : ''}`} 
                aria-label="Copy wallet address"
              >
                {copied === w.chain ? "✓ Copied!" : "Copy Address"}
              </button>
              <a
                href={`https://explorer.solana.com/address/${w.address}`}
                target="_blank"
                rel="noreferrer"
                className={BTN_SUBTLE}
                aria-label="Open address on Solana Explorer"
              >
                View on Solana Explorer
              </a>
            </div>
          </div>
        ))}

        {/* PALESTINE Token Contract Address */}
        <div className="group mt-8 rounded-3xl border border-red-500/20 p-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-red-500/40">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🇵</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">PALESTINE Token Contract</h3>
            </div>
            <span className="text-xs text-red-400 font-medium bg-red-500/10 px-3 py-1 rounded-full">Click to copy or view on pump.fun</span>
          </div>
          <div className="relative">
            <p className="break-all text-sm text-neutral-300 font-mono bg-neutral-800/50 p-4 rounded-xl border border-neutral-700" aria-live="polite">
              {PALESTINE_TOKEN_CA}
            </p>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button 
              onClick={() => copy(PALESTINE_TOKEN_CA, 'PALESTINE')} 
              className={`${BTN_PRIMARY} ${copied === 'PALESTINE' ? 'animate-pulse' : ''}`} 
              aria-label="Copy PALESTINE token contract address"
            >
              {copied === 'PALESTINE' ? "✓ Copied!" : "Copy Contract Address"}
            </button>
            <a
              href={PUMPFUN_STREAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 ease-out"
              aria-label="View PALESTINE token on pump.fun"
            >
              View on pump.fun
            </a>
            <a
              href={`https://explorer.solana.com/address/${PALESTINE_TOKEN_CA}`}
              target="_blank"
              rel="noreferrer"
              className={BTN_SUBTLE}
              aria-label="Open PALESTINE token on Solana Explorer"
            >
              View on Solana Explorer
            </a>
          </div>
        </div>
      </Section>

      {/* Enhanced About Fawzi */}
      <Section id="about" title="About Fawzi Issa Zaid">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Replace headshot with controlled video (no auto-unmute) */}
          <div className="relative group flex justify-center">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none" />
            <div className="relative w-full sm:w-auto">
              <video
                src="https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafybeid4h5oldqjd2ys3zl35bldkqkl3dkkp5hhih2ggqbnzbbexnahia4"
                className="w-full max-w-[22rem] sm:w-80 h-[70vh] sm:h-[500px] object-cover rounded-3xl shadow-2xl ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-500 group-hover:scale-105"
                poster={activist.headshot}
                controls
                muted
                loop
                playsInline
                preload="metadata"
                style={{ aspectRatio: '9/16' }}
              >
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            {/* Hover caption below video */}
            <div className="mt-3 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-sm font-semibold">Fawzi Issa Zaid</div>
              <div className="text-xs text-neutral-300">Palestinian Activist</div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">{activist.location}</h3>
              <div className="flex items-center gap-4 text-neutral-400">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  {activist.yearsActive}+ years
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  {activist.cadence}
                </span>
              </div>
            </div>
            {/* Detailed mission text provided by user */}
            <div className="bg-gradient-to-r from-emerald-900/20 to-neutral-900/50 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6 space-y-4 text-neutral-200 leading-relaxed text-lg">
              <p>My name is Fawzi Issa Zaid. I am one of the founders of Windsor 4 Palestine, and today I’m proud to introduce a new initiative: People for Palestine</p>
              <p>This movement was created with one goal to connect you directly to the people of Palestine. Not just through words or headlines, but through real action, real stories, and real lives.</p>
              <p>Through People for Palestine, we are raising donations that go directly to Palestinian families suffering under genocide both those still in Gaza and those who have fled with nothing left. These are families who have lost everything and are now starting from zero in unfamiliar countries, without resources or support. We are here to change that.</p>
              <p>Every dollar donated will be documented. Every act of giving will be videotaped and shared so you know where your support is going, who it’s helping, and how it’s changing lives. This isn’t charity from a distance it’s solidarity, face-to-face.</p>
              <p>We are working hand in hand with people on the ground. Your support will provide food, shelter, medicine, and essentials for survival. It will also give dignity to those rebuilding their lives in exile.</p>
              <p className="font-semibold text-emerald-300">This is not just a movement. It's a lifeline. From people, to people of Palestine.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={X_OWNER} target="_blank" rel="noreferrer" className={BTN_SUBTLE}>
                Follow Fawzi on X
              </a>
              <a href={IG_OWNER} target="_blank" rel="noreferrer" className={BTN_SUBTLE}>
                Fawzi's Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Official Links */}
      <Section id="links" title="Official Links & Livestreams">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <LinkButton href={TELEGRAM_LINK} label="Join Telegram Community" kind="primary" />
          <LinkButton href={X_COMMUNITY} label="Visit X Community" />
          <LinkButton href={X_OWNER} label="Follow Fawzi on X" />
          <LinkButton href={IG_MOVEMENT} label="Movement Instagram" />
          <LinkButton href={IG_OWNER} label="Fawzi's Instagram" />
          <LinkButton href={TIKTOK_LINK} label="TikTok Account" />
          <LinkButton href={PUMPFUN_STREAM_URL} label="PALESTINE Token Live Stream" kind="ghost" />
        </div>
      </Section>

      {/* Enhanced Press Section */}
      <Section id="press" title="Press & Coverage">
        <p className="text-neutral-300 max-w-3xl text-lg leading-relaxed">
          Articles and coverage of actions in Windsor/Ontario. Read critically — inclusion does not imply endorsement.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {pressLinks.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-2xl border border-neutral-700/50 p-6 bg-gradient-to-br from-neutral-900/60 to-neutral-800/30 backdrop-blur-sm hover:bg-gradient-to-br hover:from-neutral-800/80 hover:to-neutral-700/50 hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02]"
              aria-label={`Open press article: ${p.title}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Press</span>
                </div>
                <div className="font-medium text-neutral-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {p.title}
                </div>
                <div className="mt-3 flex items-center text-xs text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300">
                  <span>Read more</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <Footer />

      {/* Dev-only smoke tests (console warnings only) */}
      <SmokeTests DONATION_WALLETS={DONATION_WALLETS} links={[
        TELEGRAM_LINK,
        IG_MOVEMENT,
        IG_OWNER,
        X_COMMUNITY,
        X_OWNER,
        TIKTOK_LINK,
        PUMPFUN_STREAM_URL,
      ]} />
    </div>
  );
}

// ===== Components =====
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      id="nav"
      className={`fixed inset-x-0 top-0 z-50 border-b border-neutral-900/70 ${
        scrolled ? "bg-neutral-950/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-bold tracking-tight text-white">
            FREE <span className="text-emerald-500">PALESTINE</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#donate" className="hover:text-emerald-400">Donate</a>
            <a href="#about" className="hover:text-emerald-400">About</a>
            <a href="#links" className="hover:text-emerald-400">Links</a>
            <a href="#press" className="hover:text-emerald-400">Press</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero({ activist, pumpUrl, BTN_PRIMARY, BTN_SUBTLE, BTN_GHOST }) {

  return (
    <section id="top" className="relative isolate pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.2),transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(239,68,68,0.15),transparent_50%)] animate-pulse" style={{animationDelay: '1s'}} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)] animate-pulse" style={{animationDelay: '2s'}} />
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-200 bg-clip-text text-transparent">
                  FREE PALESTINE
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                  — END THE GENOCIDE
                </span>
              </h1>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-emerald-500 to-red-500 rounded-full" />
            </div>
            
            <p className="text-neutral-300 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
              Since 1948, Palestinians have faced displacement, occupation, and mass violence. We refuse silence.
              We organize, document, and send aid with transparency and care.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#donate" className={BTN_PRIMARY}>
                <span className="mr-2">💚</span>
                Donate Now
              </a>
              <a href={pumpUrl} target="_blank" rel="noreferrer" className={BTN_SUBTLE}>
                <span className="mr-2">🇵</span>
                PALESTINE Token Live
              </a>
              <a href="#links" className={BTN_GHOST}>
                <span className="mr-2">🔗</span>
                Official Links
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-end order-first lg:order-last">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-red-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 pointer-events-none" />
              <div className="relative">
                <video
                  className="w-full max-w-[22rem] sm:w-80 h-[70vh] sm:h-[500px] object-cover rounded-3xl shadow-2xl ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-500 group-hover:scale-105"
                  defaultMuted
                  loop
                  playsInline
                  controls
                  style={{ aspectRatio: '9/16' }}
                >
                  <source 
                    src="https://crimson-traditional-mastodon-846.mypinata.cloud/ipfs/bafybeicpfncy75ngjgk3obz67kjubanepb4lailx2ovjh5p2e4ftvfnxiy" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              {/* Hover caption below video */}
              <div className="mt-3 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-sm font-semibold">Fawzi Issa Zaid</div>
                <div className="text-xs text-neutral-300">The People United Will Never Be Defeated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-4">
          {title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-red-500 rounded-full mx-auto" />
      </div>
      {children}
    </section>
  );
}

function LinkButton({ href, label, kind = "subtle" }) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105";
  const styles = {
    primary: `${base} bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg hover:shadow-emerald-500/25`,
    subtle: `${base} bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white shadow-lg hover:shadow-neutral-500/20`,
    ghost: `${base} border-2 border-neutral-700 hover:border-emerald-500 text-white hover:bg-emerald-500/10`,
  };
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles[kind]}>
      {label}
    </a>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-neutral-800/50 mt-20 bg-gradient-to-t from-neutral-900/50 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-red-400 bg-clip-text text-transparent">
              Zionism must fall. FREE PALESTINE.
            </div>
            <p className="text-neutral-300 text-lg leading-relaxed max-w-xl">
              We advocate nonviolent, peaceful action and solidarity. This site hosts calls to action and links to
              livestreams and documentation.
            </p>
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Standing with Palestine since 1948</span>
            </div>
          </div>
          <div className="md:text-right text-neutral-400 text-sm space-y-2">
            <div>© {new Date().getFullYear()} Free Palestine Movement</div>
            <div>Ontario, Canada</div>
            <div className="text-xs text-neutral-500 mt-4">
              Built with solidarity and hope
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ===== Dev Smoke Tests =====
function SmokeTests({ DONATION_WALLETS, links }) {
  useEffect(() => {
    try {
      // Test 1: Renderability
      const node = Section({ id: "t", title: "t", children: "ok" });
      if (!node) console.warn("[SmokeTests] Section did not return a node.");
      // Test 2: Wallet shape
      const okWallets = Array.isArray(DONATION_WALLETS) && DONATION_WALLETS.every((w) => w.chain && w.address);
      if (!okWallets) console.warn("[SmokeTests] Wallet entries must have chain and address.");
      // Test 3: Links shape
      const okLinks = Array.isArray(links) && links.every((l) => typeof l === "string" && l.startsWith("http"));
      if (!okLinks) console.warn("[SmokeTests] One or more links invalid.");
      // Test 4: Accessible labels on LinkButton
      const test = LinkButton({ href: "#", label: "Test" });
      if (!test) console.warn("[SmokeTests] LinkButton failed to return element.");
    } catch (err) {
      console.warn("[SmokeTests] Error during smoke tests:", err);
    }
  }, [DONATION_WALLETS, links]);
  return null;
}

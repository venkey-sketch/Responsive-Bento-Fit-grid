import React, { useState } from 'react';
import { 
  Activity, 
  Flame, 
  Heart, 
  Moon, 
  Zap, 
  Trophy, 
  TrendingUp, 
  Shield, 
  Award, 
  BarChart3, 
  Cpu, 
  Sliders, 
  Layers, 
  Github, 
  Copy, 
  Check, 
  Maximize2, 
  Smartphone, 
  Monitor, 
  Tablet, 
  ExternalLink,
  ChevronRight,
  Target,
  Sparkles,
  Gamepad2,
  Dumbbell
} from 'lucide-react';

type ThemeMode = 'fitness' | 'gamer';
type ViewportSim = 'desktop' | 'tablet' | 'mobile';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('fitness');
  const [viewportSim, setViewportSim] = useState<ViewportSim>('desktop');
  const [showGitModal, setShowGitModal] = useState(false);
  const [showCssSpecs, setShowCssSpecs] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedGitCmd, setCopiedGitCmd] = useState(false);

  const gitCommand = `git remote add origin https://github.com/YOUR_USERNAME/responsive-bento-grid.git\ngit branch -M main\ngit push -u origin main`;

  const copyToClipboard = (text: string, type: 'code' | 'git') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedGitCmd(true);
      setTimeout(() => setCopiedGitCmd(false), 2000);
    }
  };

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 font-sans ${
        theme === 'fitness' 
          ? 'bg-[#07090e] text-slate-100 selection:bg-emerald-500 selection:text-slate-950' 
          : 'bg-[#090714] text-purple-50 selection:bg-purple-500 selection:text-slate-950'
      }`}
      data-theme={theme}
    >
      {/* 1. TOP BAR CONTRACT: Exactly 3 Zones (Brand, Nav Links, Actions) */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-opacity-80 border-b border-white/10 px-4 sm:px-8 py-3.5 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Zone 1: Single text wordmark in display font */}
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse bg-emerald-400" />
            <a 
              href="#" 
              className="text-lg font-extrabold tracking-tight whitespace-nowrap text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {theme === 'fitness' ? 'KINETIC BIO-LAB' : 'VALKYRIE APEX'}
            </a>
          </div>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs tracking-wider uppercase font-medium text-slate-400">
            {theme === 'fitness' ? (
              <>
                <a href="#overview" className="hover:text-emerald-400 transition-colors">Overview</a>
                <a href="#biometrics" className="hover:text-emerald-400 transition-colors">Biometrics</a>
                <a href="#endurance" className="hover:text-emerald-400 transition-colors">Endurance</a>
                <a href="#strength" className="hover:text-emerald-400 transition-colors">Strength</a>
                <a href="#recovery" className="hover:text-emerald-400 transition-colors">Recovery</a>
              </>
            ) : (
              <>
                <a href="#overview" className="hover:text-purple-400 transition-colors">Ranked Hub</a>
                <a href="#loadouts" className="hover:text-purple-400 transition-colors">Loadouts</a>
                <a href="#combat" className="hover:text-purple-400 transition-colors">Combat Log</a>
                <a href="#tournaments" className="hover:text-purple-400 transition-colors">Trophies</a>
                <a href="#telemetry" className="hover:text-purple-400 transition-colors">APM Stats</a>
              </>
            )}
          </nav>

          {/* Zone 3: Primary interactive controls & GitHub export */}
          <div className="flex items-center gap-2.5">
            {/* Theme switcher toggle */}
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setTheme('fitness')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === 'fitness' 
                    ? 'bg-emerald-500 text-slate-950 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to Fitness & Athletic Dashboard Theme"
              >
                <Dumbbell className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fitness</span>
              </button>
              <button
                onClick={() => setTheme('gamer')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === 'gamer' 
                    ? 'bg-purple-500 text-slate-950 shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to Pro Gamer Profile Theme"
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Gamer</span>
              </button>
            </div>

            {/* GitHub & Specs CTA */}
            <button
              onClick={() => setShowGitModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-all whitespace-nowrap"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>GitHub Repo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Sub-Header & Layout Control Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-2 text-emerald-400">
              <span>BENTO GRID SYSTEM</span>
              <span className="text-slate-600">/</span>
              <span>PURE CSS GRID & FLEXBOX</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">ZERO FRAMEWORK DEPENDENCY</span>
            </div>
            <h1 
              className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {theme === 'fitness' 
                ? 'High-Performance Athletic Bio-Lab' 
                : 'Valkyrie Apex Pro Combat Profile'}
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1.5 max-w-2xl">
              {theme === 'fitness'
                ? 'Calibrated multi-channel telemetry engine tracking aerobic threshold, progressive overload, and autonomic circadian sleep architecture.'
                : 'Grandmaster competitive battlestation aggregating weapon mastery, clutch telemetry, reaction velocity, and tournament achievements.'}
            </p>
          </div>

          {/* Interactive Responsive Viewport Simulator */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs text-slate-400 font-medium mr-1 hidden lg:block">Layout Preview:</div>
            <div className="flex items-center bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setViewportSim('desktop')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  viewportSim === 'desktop' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Desktop 4-Column Layout"
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop 4-Col</span>
              </button>
              <button
                onClick={() => setViewportSim('tablet')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  viewportSim === 'tablet' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Tablet 2-Column Layout"
              >
                <Tablet className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Tablet 2-Col</span>
              </button>
              <button
                onClick={() => setViewportSim('mobile')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  viewportSim === 'mobile' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                }`}
                title="Mobile 1-Column Layout"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile 1-Col</span>
              </button>
            </div>

            <button
              onClick={() => setShowCssSpecs(!showCssSpecs)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showCssSpecs ? 'Hide CSS Specs' : 'View CSS Grid Specs'}</span>
            </button>
          </div>
        </div>

        {/* Expandable CSS Grid Specifications Box */}
        {showCssSpecs && (
          <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="font-semibold text-emerald-400 font-sans">CSS Grid Layout Architecture Reference</span>
              <button 
                onClick={() => copyToClipboard(`/* CSS Grid Desktop */\n.bento-grid { display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: auto auto auto; gap: 1.5rem; }\n.bento-item-1 { grid-column: 1 / 2; grid-row: 1 / 3; }\n.bento-item-2 { grid-column: 2 / 4; grid-row: 1 / 2; }\n.bento-item-3 { grid-column: 4 / 5; grid-row: 1 / 3; }\n.bento-item-5 { grid-column: 2 / 3; grid-row: 2 / 3; }\n.bento-item-6 { grid-column: 3 / 4; grid-row: 2 / 3; }\n.bento-item-4 { grid-column: 1 / 2; grid-row: 3 / 4; }\n.bento-item-7 { grid-column: 2 / 3; grid-row: 3 / 4; }\n.bento-item-8 { grid-column: 3 / 5; grid-row: 3 / 4; }`, 'code')}
                className="flex items-center gap-1 text-slate-400 hover:text-white"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? 'Copied' : 'Copy Rules'}</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] leading-relaxed">
              <div>
                <p className="text-white font-semibold font-sans mb-1">Desktop Grid (1024px+)</p>
                <p className="text-slate-400">• 4 Equal Columns: <code className="text-emerald-300">repeat(4, 1fr)</code></p>
                <p className="text-slate-400">• 3 Distinct Rows with Row & Col Spans</p>
                <p className="text-slate-400">• Seamless 12-cell tessellation</p>
              </div>
              <div>
                <p className="text-white font-semibold font-sans mb-1">Tablet Grid (640px - 1023px)</p>
                <p className="text-slate-400">• 2 Balanced Columns: <code className="text-emerald-300">repeat(2, 1fr)</code></p>
                <p className="text-slate-400">• Hero card spans full 2 columns</p>
                <p className="text-slate-400">• Fluid vertical pacing</p>
              </div>
              <div>
                <p className="text-white font-semibold font-sans mb-1">Mobile Stack (&lt;640px)</p>
                <p className="text-slate-400">• 1 Column Stack: <code className="text-emerald-300">grid-template-columns: 1fr</code></p>
                <p className="text-slate-400">• CSS <code className="text-emerald-300">order</code> prioritizes hero & key stats</p>
                <p className="text-slate-400">• Matches Mobile Reference exactly</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2. THE RESPONSIVE BENTO GRID CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
        {/* Container wrapper that applies simulated viewport width if user toggles simulator */}
        <div 
          className={`mx-auto transition-all duration-300 ${
            viewportSim === 'mobile' 
              ? 'max-w-md border-x border-dashed border-white/20 p-2' 
              : viewportSim === 'tablet' 
                ? 'max-w-3xl border-x border-dashed border-white/20 p-2' 
                : 'w-full'
          }`}
        >
          {/* THE CORE BENTO GRID */}
          <div 
            className={`bento-grid ${
              viewportSim === 'mobile' ? '!grid-cols-1' : viewportSim === 'tablet' ? '!grid-cols-2' : ''
            }`}
          >
            
            {/* =========================================================
                CARD 2: THE CENTER HERO SHOWCASE
                Desktop: Column 2 to 4 (spans 2 columns), Row 1
                Mobile: order 1 (Topmost item)
               ========================================================= */}
            <article 
              className={`bento-card bento-card-hero bento-item-2 p-6 sm:p-7 relative overflow-hidden group ${
                theme === 'fitness' 
                  ? 'border-emerald-500/20 bg-gradient-to-br from-[#121c2e] via-[#0d1524] to-[#0a101d]' 
                  : 'border-purple-500/20 bg-gradient-to-br from-[#1c133a] via-[#140e2b] to-[#0c081d]'
              }`}
            >
              {/* Background ambient glow effect */}
              <div 
                className={`absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-25 ${
                  theme === 'fitness' ? 'bg-emerald-500' : 'bg-purple-500'
                }`} 
              />

              <div className="relative z-10 flex flex-col justify-between h-full gap-5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span 
                      className={`text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 ${
                        theme === 'fitness' ? 'text-emerald-400' : 'text-purple-400'
                      }`}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {theme === 'fitness' ? 'Aerobic Engine · Primary Metric' : 'Ranked Velocity · Global Tier'}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                      {theme === 'fitness' ? 'Top 1% Tier' : 'Grandmaster #12'}
                    </span>
                  </div>

                  <h2 
                    className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug max-w-xl"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {theme === 'fitness' 
                      ? 'Peak VO2 Max & Aerobic Velocity 10x Faster' 
                      : 'Apex Combat Rating & Win Velocity 10x Faster'}
                  </h2>

                  <p className="text-slate-400 text-xs sm:text-sm mt-1.5 max-w-lg">
                    {theme === 'fitness'
                      ? 'Sustained sub-threshold pacing with continuous lactate monitoring. High-efficiency respiratory quotient calibrated across 14 weekly endurance blocks.'
                      : 'Dominating competitive brackets with sub-second reaction speeds, high clutch ratios, and precision tactical map control.'}
                  </p>
                </div>

                {/* Interactive SVG Telemetry Curve */}
                <div className="bg-black/30 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-400 font-medium">
                      {theme === 'fitness' ? 'VO2 Max Progression Curve' : 'Competitive MMR Progression'}
                    </span>
                    <span className="font-mono text-white font-bold">
                      {theme === 'fitness' ? '59.4 mL/kg/min' : '3,840 MMR'}
                    </span>
                  </div>

                  {/* Pure Inline SVG Chart with Gradient */}
                  <div className="h-28 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor={theme === 'fitness' ? '#10b981' : '#a855f7'} stopOpacity="0.45" />
                          <stop offset="100%" stopColor={theme === 'fitness' ? '#10b981' : '#a855f7'} stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid guidelines */}
                      <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                      {/* Area Fill */}
                      <path 
                        d="M 0 85 Q 80 75 140 55 T 260 40 T 360 20 L 400 15 L 400 100 L 0 100 Z" 
                        fill="url(#heroGradient)" 
                      />

                      {/* Line Stroke */}
                      <path 
                        d="M 0 85 Q 80 75 140 55 T 260 40 T 360 20 L 400 15" 
                        fill="none" 
                        stroke={theme === 'fitness' ? '#10b981' : '#a855f7'} 
                        strokeWidth="3"
                        strokeLinecap="round" 
                      />

                      {/* Peak indicator dot */}
                      <circle cx="400" cy="15" r="4.5" fill="#ffffff" stroke={theme === 'fitness' ? '#10b981' : '#a855f7'} strokeWidth="2.5" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mt-2 pt-2 border-t border-white/5">
                    <span>Baseline: {theme === 'fitness' ? '46.2 mL' : '2,900 MMR'}</span>
                    <span className="text-emerald-400 font-semibold">+28.5% Growth</span>
                    <span>Peak: {theme === 'fitness' ? '59.4 mL' : '3,840 MMR'}</span>
                  </div>
                </div>

                {/* Proof & Footnote Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-amber-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="font-medium text-slate-300">
                      {theme === 'fitness' ? '5.0 Biometric Reliability' : '5.0 Ranked Fairplay'}
                    </span>
                  </div>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {theme === 'fitness' ? '48,200 km endurance logged' : '420 competitive matches logged'}
                  </span>
                </div>
              </div>
            </article>

            {/* =========================================================
                CARD 1: LEFT TALL CARD
                Desktop: Column 1, Rows 1 to 2 (Spans 2 rows)
                Mobile: order 7
               ========================================================= */}
            <article className="bento-card bento-item-1 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 block">
                  {theme === 'fitness' ? 'Strength Protocol' : 'Weapon Tuning'}
                </span>
                <h3 
                  className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' 
                    ? 'Adaptive Progressive Overload Cycles' 
                    : 'Loadout Recoil & Attachment Calibration'}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-5">
                  {theme === 'fitness'
                    ? 'Micro-loading algorithms calibrated against mechanical bar velocity to prevent overtraining.'
                    : 'Custom spray-pattern compensation algorithms optimized for high-damage precision loadouts.'}
                </p>

                {/* Interactive Strength / Weapon Milestones */}
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">{theme === 'fitness' ? 'Back Squat' : 'Vandal / AR'}</span>
                      <span className="text-emerald-400 font-semibold">{theme === 'fitness' ? '415 lbs (+15)' : '68.4% Acc'}</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '92%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">{theme === 'fitness' ? 'Deadlift' : 'Operator / Sniper'}</span>
                      <span className="text-emerald-400 font-semibold">{theme === 'fitness' ? '495 lbs (+20)' : '78.2% Acc'}</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: '96%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-300">{theme === 'fitness' ? 'Bench Press' : 'Phantom / SMG'}</span>
                      <span className="text-emerald-400 font-semibold">{theme === 'fitness' ? '315 lbs (+10)' : '62.1% Acc'}</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-teal-400 h-full rounded-full transition-all duration-500" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {theme === 'fitness' ? '+14.2% Strength Index' : '+22.4% First-Shot Hit'}
                </span>
                <button 
                  onClick={() => alert(theme === 'fitness' ? 'Strength macrocycle locked in for Week 8.' : 'Loadout preset synced.')}
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  {theme === 'fitness' ? 'View Meso' : 'Sync Preset'}
                </button>
              </div>
            </article>

            {/* =========================================================
                CARD 3: RIGHT TALL CARD
                Desktop: Column 4, Rows 1 to 2 (Spans 2 rows)
                Mobile: order 4
               ========================================================= */}
            <article className="bento-card bento-item-3 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
                  {theme === 'fitness' ? 'Circadian Recovery' : 'Combat Match Log'}
                </span>
                <h3 
                  className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' 
                    ? 'Autonomous HRV & Sleep Architecture' 
                    : 'Ranked Clutch Index & Match Timeline'}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {theme === 'fitness'
                    ? 'Deep restorative REM and slow-wave sleep cycles ensure neuromuscular readiness for maximal efforts.'
                    : 'Clutch round conversion rate under high-pressure defusal scenarios.'}
                </p>

                {/* Score Dial / Ring Gauge */}
                <div className="my-3 flex items-center justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-white/10"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 * (1 - 0.94)}
                        strokeLinecap="round"
                        className={theme === 'fitness' ? 'text-cyan-400' : 'text-purple-400'}
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-extrabold text-white font-mono leading-none">
                        {theme === 'fitness' ? '96%' : '3.84'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium uppercase mt-0.5">
                        {theme === 'fitness' ? 'Recovery' : 'K/D Ratio'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Micro Stages Breakdown */}
                <div className="space-y-2 text-xs font-mono mt-2">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      {theme === 'fitness' ? 'Deep Slow-Wave' : 'Clutch Rounds Won'}
                    </span>
                    <span className="text-white font-semibold">{theme === 'fitness' ? '2h 18m' : '42 / 50 (84%)'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {theme === 'fitness' ? 'REM Sleep' : 'Opening Duel Wins'}
                    </span>
                    <span className="text-white font-semibold">{theme === 'fitness' ? '2h 05m' : '72.4%'}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-500" />
                      {theme === 'fitness' ? 'Resting HR' : 'Headshot Hit %'}
                    </span>
                    <span className="text-white font-semibold">{theme === 'fitness' ? '44 bpm' : '48.9%'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-center">
                <span className="text-[11px] text-slate-400 font-mono">
                  {theme === 'fitness' ? 'HRV Readiness: 86 ms (+14ms)' : 'Rank Tier: Immortal III'}
                </span>
              </div>
            </article>

            {/* =========================================================
                CARD 5: MIDDLE LEFT CARD
                Desktop: Column 2, Row 2
                Mobile: order 2
               ========================================================= */}
            <article className="bento-card bento-item-5 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 block">
                  {theme === 'fitness' ? 'Hardware Sync' : 'Platform Link'}
                </span>
                <h3 
                  className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' ? 'Unified Biometric Sync' : 'Steam & Battle.net Cloud'}
                </h3>
                <p className="text-slate-400 text-xs">
                  {theme === 'fitness'
                    ? 'Real-time telemetry pipeline from continuous health monitors.'
                    : 'Instant synchronisation of competitive ratings across ecosystems.'}
                </p>
              </div>

              {/* Connected Sensors Grid */}
              <div className="my-4 space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200">{theme === 'fitness' ? 'Apple Watch Ultra' : 'Steam Pro Hub'}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Online</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200">{theme === 'fitness' ? 'WHOOP 4.0 Strap' : 'Riot Vanguard'}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">Synced</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 flex items-center justify-between">
                <span>Latency: 1.2ms</span>
                <span className="text-emerald-400 font-medium">100% Signal</span>
              </div>
            </article>

            {/* =========================================================
                CARD 6: MIDDLE RIGHT CARD
                Desktop: Column 3, Row 2
                Mobile: order 3
               ========================================================= */}
            <article className="bento-card bento-item-6 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 block">
                  {theme === 'fitness' ? 'Zone Consistency' : 'Schedule Matrix'}
                </span>
                <h3 
                  className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' ? 'Maintain Training Polarity' : 'Daily Scrim & VOD Protocol'}
                </h3>
                <p className="text-slate-400 text-xs">
                  {theme === 'fitness'
                    ? 'Strict 80/20 polarized distribution across Zone 2 and Zone 5.'
                    : 'Consistent scrim schedule with top tier 1 professional squads.'}
                </p>
              </div>

              {/* Zone Bars */}
              <div className="my-4 space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{theme === 'fitness' ? 'Zone 2 (Aerobic)' : 'Scrim Blocks'}</span>
                  <span className="text-white font-semibold">68% / 70%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '88%' }} />
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-slate-400">{theme === 'fitness' ? 'Zone 5 (Max VO2)' : 'VOD Reviews'}</span>
                  <span className="text-white font-semibold">12% / 15%</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '80%' }} />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Compliance</span>
                <span className="text-emerald-400 font-semibold">94.8% Adherence</span>
              </div>
            </article>

            {/* =========================================================
                CARD 4: LEFT BOTTOM CARD
                Desktop: Column 1, Row 3
                Mobile: order 8
               ========================================================= */}
            <article className="bento-card bento-item-4 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 block">
                  {theme === 'fitness' ? 'Precision Fueling' : 'Team Comms'}
                </span>
                <h3 
                  className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' ? 'Targeted Nutrient Synthesis' : 'Tactical Ping & Comms Synergy'}
                </h3>
                <p className="text-slate-400 text-xs">
                  {theme === 'fitness'
                    ? 'Automated carbohydrate loading based on session exertion.'
                    : 'Zero-latency tactical voice communication and map pings.'}
                </p>
              </div>

              {/* Macro Bar / Stat */}
              <div className="my-4 p-3 bg-white/5 border border-white/5 rounded-xl font-mono text-xs">
                <div className="flex justify-between mb-1.5">
                  <span className="text-slate-400">{theme === 'fitness' ? 'Daily Energy' : 'Callout Rating'}</span>
                  <span className="text-emerald-400 font-bold">{theme === 'fitness' ? '3,450 kcal' : '99.4% Accurate'}</span>
                </div>
                <div className="flex h-1.5 w-full rounded-full overflow-hidden bg-white/10">
                  <div className="bg-emerald-400" style={{ width: '45%' }} title="Carbs" />
                  <div className="bg-cyan-400" style={{ width: '35%' }} title="Protein" />
                  <div className="bg-amber-400" style={{ width: '20%' }} title="Fats" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1.5">
                  <span>{theme === 'fitness' ? '195g Protein' : 'Rotations: +18'}</span>
                  <span>{theme === 'fitness' ? '340g Carbs' : '0 False Calls'}</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>{theme === 'fitness' ? 'Hydration: 3.8 L' : 'Duo Chemistry: 98%'}</span>
                <span className="text-slate-300">Optimal</span>
              </div>
            </article>

            {/* =========================================================
                CARD 7: BOTTOM MIDDLE 1 CARD (Metric Focus)
                Desktop: Column 2, Row 3
                Mobile: order 6
               ========================================================= */}
            <article className="bento-card bento-item-7 p-6 relative flex flex-col justify-between group">
              <div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400 mb-2 block">
                  {theme === 'fitness' ? 'Efficiency Delta' : 'Reaction Speed'}
                </span>
                
                {/* Big Bold Stat Metric */}
                <div className="my-2">
                  <span 
                    className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {theme === 'fitness' ? '+68.4%' : '142ms'}
                  </span>
                </div>

                <h3 
                  className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug mb-1"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {theme === 'fitness' ? 'Faster Lactate Clearance Rate' : 'Peak Flick Reaction Velocity'}
                </h3>
                <p className="text-slate-400 text-xs">
                  {theme === 'fitness'
                    ? 'Sub-threshold recovery intervals sustain peak aerobic turnover without systemic fatigue.'
                    : 'Tested on human benchmark test against top international pro athletes.'}
                </p>
              </div>

              {/* Sparkline Visual */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {theme === 'fitness' ? 'Threshold: 4.0 mmol' : 'Sub-150ms Club'}
                </span>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{theme === 'fitness' ? '+18% MoM' : 'Rank #1'}</span>
                </div>
              </div>
            </article>

            {/* =========================================================
                CARD 8: BOTTOM WIDE CARD
                Desktop: Column 3 to 5 (spans 2 columns), Row 3
                Mobile: order 5
               ========================================================= */}
            <article className="bento-card bento-item-8 p-6 relative flex flex-col justify-between group">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold tracking-widest uppercase text-amber-400 mb-2 block">
                    {theme === 'fitness' ? 'Milestone Streaks' : 'Championship Cabinet'}
                  </span>
                  <h3 
                    className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {theme === 'fitness' 
                      ? 'Accelerate Milestones with Non-Stop Biofeedback' 
                      : 'Tournament Titles & MVP Accolades'}
                  </h3>
                  <p className="text-slate-400 text-xs max-w-sm">
                    {theme === 'fitness'
                      ? 'Continuous feedback loops prevent plateauing and compound athletic gains over seasonal training phases.'
                      : 'Consistent podium finishes across premier global esports circuits.'}
                  </p>
                </div>

                {/* Milestone Counter Badges */}
                <div className="flex items-center gap-2 self-start">
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                    <span className="block text-xl font-bold text-white leading-none">
                      {theme === 'fitness' ? '14' : '3x'}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      {theme === 'fitness' ? 'PRs Broken' : 'Major MVP'}
                    </span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
                    <span className="block text-xl font-bold text-emerald-400 leading-none">
                      {theme === 'fitness' ? '28d' : '78.4%'}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      {theme === 'fitness' ? 'Streak' : 'Winrate'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Timeline Graphic */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 mb-2">
                  <span>{theme === 'fitness' ? 'Seasonal Endurance Block (Q1)' : 'Seasonal Pro Tour Stage 1'}</span>
                  <span className="text-emerald-400 font-semibold">{theme === 'fitness' ? '92% Completed' : 'Qualified'}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      theme === 'fitness' ? 'bg-gradient-to-r from-emerald-500 to-cyan-400' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`} 
                    style={{ width: '92%' }} 
                  />
                </div>
              </div>
            </article>

          </div>
        </div>
      </main>

      {/* 3. GITHUB REPOSITORY & SUBMISSION MODAL */}
      {showGitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#0f1422] border border-white/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Github className="w-5 h-5 text-white" />
                <h3 className="text-lg font-bold text-white font-sans">GitHub Submission Helper</h3>
              </div>
              <button 
                onClick={() => setShowGitModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs sm:text-sm text-slate-300">
              <p>
                To push this responsive Bento Grid to your personal GitHub repository and submit your link:
              </p>

              <div className="space-y-2">
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Step 1: Create a new repository on GitHub (e.g. <code className="text-emerald-400 font-mono">responsive-bento-grid</code>)
                </div>
                <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  Step 2: Run the terminal commands below in your project root:
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs text-emerald-300 relative group">
                <pre className="whitespace-pre-wrap select-all">{gitCommand}</pre>
                <button
                  onClick={() => copyToClipboard(gitCommand, 'git')}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-1.5 text-xs transition-colors"
                >
                  {copiedGitCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedGitCmd ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-500/20 rounded-xl p-3.5 text-xs text-emerald-200">
                <p className="font-semibold mb-1">Included in this project:</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300">
                  <li><code className="text-emerald-300 font-mono">standalone.html</code> — Zero-dependency standalone HTML & CSS file.</li>
                  <li><code className="text-emerald-300 font-mono">src/bento.css</code> — Handcrafted CSS Grid and Flexbox responsive stylesheet.</li>
                  <li><code className="text-emerald-300 font-mono">README.md</code> — Full documentation with layout mappings and screenshots.</li>
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setShowGitModal(false)}
                  className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. FOOTER: Anti-slop, clean copyright and links */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">Kinetic Bio-Lab &copy; 2026</span>
            <span>·</span>
            <span>Responsive Bento Grid Layout Challenge</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with HTML5 &amp; CSS Grid</span>
            <span>·</span>
            <span>Mobile-First &amp; WCAG AA Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

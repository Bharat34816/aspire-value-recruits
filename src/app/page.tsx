'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Building2,
  Search,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Users,
  FileText,
  ChevronRight,
  MessageSquare,
  Sparkles,
  ChevronDown,
  Layers,
  Check,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  Radar,
  Terminal,
  Activity,
  Cpu,
  Globe2,
  Compass,
} from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: '1',
    slug: 'principal-cloud-architect-aws-azure',
    title: 'Principal Cloud Architect (AWS / Azure)',
    company: 'Tier-1 Global Capability Center',
    isConfidential: true,
    location: 'Hyderabad (Hitec City)',
    category: 'Cloud',
    workType: 'Hybrid',
    experience: '12-16 Yrs',
    salary: '₹55L - ₹75L PA',
    skills: ['AWS', 'Terraform', 'Distributed Systems', 'Kubernetes'],
    posted: '2 days ago',
    matchScore: '99.4%',
  },
  {
    id: '2',
    slug: 'staff-generative-ai-engineer',
    title: 'Staff Generative AI / LLM Engineer',
    company: 'Enterprise AI Innovation Hub',
    isConfidential: false,
    location: 'Bengaluru (Bellandur)',
    category: 'AI',
    workType: 'Hybrid',
    experience: '7-11 Yrs',
    salary: '₹48L - ₹65L PA',
    skills: ['Python', 'LangChain', 'PyTorch', 'Vector DBs', 'RAG'],
    posted: '1 day ago',
    matchScore: '98.8%',
  },
  {
    id: '3',
    slug: 'lead-devops-platform-engineer',
    title: 'Lead DevOps & Platform Engineer',
    company: 'FinTech GCC',
    isConfidential: true,
    location: 'Hyderabad (Financial District)',
    category: 'Cloud',
    workType: 'Hybrid',
    experience: '8-12 Yrs',
    skills: ['Kubernetes', 'CI/CD', 'Docker', 'Go', 'GCP'],
    salary: '₹38L - ₹50L PA',
    posted: '3 days ago',
    matchScore: '97.9%',
  },
  {
    id: '4',
    slug: 'head-of-product-engineering',
    title: 'Head of Product Engineering',
    company: 'High-Growth Global SaaS',
    isConfidential: false,
    location: 'Bengaluru (Whitefield)',
    category: 'GCC',
    workType: 'Full-time',
    experience: '14-18 Yrs',
    salary: '₹70L - ₹95L PA',
    skills: ['Engineering Leadership', 'Microservices', 'System Design'],
    posted: 'Just now',
    matchScore: '99.1%',
  },
];

const PRACTICE_CORRIDORS = [
  {
    code: 'GCC',
    title: 'Global Capability Centers',
    description: 'Turnkey engineering ramp-ups from initial seed pods to 100+ engineer centers in Hitec City & Outer Ring Road.',
    count: '32 Active Mandates',
    color: 'from-blue-600/30 via-indigo-950/70 to-slate-900 border-blue-500/50 text-cyan-400',
    glowColor: 'shadow-blue-500/20',
    salaryBand: '₹40L - ₹90L PA',
    roles: ['Director of Engineering', 'Platform Architect', 'Staff Microservices Eng'],
    hotSkills: ['System Design', 'Enterprise Multi-tenant', 'Kubernetes'],
    activeHub: 'Hyderabad & Bengaluru ORR',
  },
  {
    code: 'AI',
    title: 'Generative AI & LLM Systems',
    description: 'Staff ML researchers, custom fine-tuning specialists, production RAG engineers, and vector database architects.',
    count: '19 Active Mandates',
    color: 'from-purple-600/30 via-slate-900 to-indigo-950 border-purple-500/50 text-purple-400',
    glowColor: 'shadow-purple-500/20',
    salaryBand: '₹45L - ₹85L PA',
    roles: ['Staff GenAI Engineer', 'MLOps Lead', 'RAG Pipeline Architect'],
    hotSkills: ['LangChain', 'vLLM', 'Pinecone/Qdrant', 'PyTorch'],
    activeHub: 'Bellandur & Financial District',
  },
  {
    code: 'SRE',
    title: 'Cloud Platforms & DevOps',
    description: 'Multi-cloud AWS & Azure architects, GitOps practitioners, Kubernetes operators, and platform resilience leads.',
    count: '24 Active Mandates',
    color: 'from-emerald-600/30 via-slate-900 to-slate-950 border-emerald-500/50 text-emerald-400',
    glowColor: 'shadow-emerald-500/20',
    salaryBand: '₹35L - ₹75L PA',
    roles: ['Principal Cloud Architect', 'SRE Practice Lead', 'DevSecOps Specialist'],
    hotSkills: ['AWS Well-Architected', 'Terraform', 'Kubernetes', 'Go'],
    activeHub: 'Hitec City Knowledge Park',
  },
  {
    code: 'PAY',
    title: 'FinTech & Core Banking',
    description: 'High-frequency trading engineers, zero-fault payment gateways, and core banking microservices.',
    count: '15 Active Mandates',
    color: 'from-amber-600/30 via-slate-900 to-amber-950/40 border-amber-500/50 text-amber-400',
    glowColor: 'shadow-amber-500/20',
    salaryBand: '₹38L - ₹70L PA',
    roles: ['Core Banking Eng Lead', 'FinTech Security Architect', 'Latency Engineer'],
    hotSkills: ['Distributed Ledger', 'Zero-Fault Kafka', 'PCI-DSS', 'Java/Go'],
    activeHub: 'Hyderabad Financial District',
  },
];

const CALIBRATION_STAGES = [
  {
    stage: '01',
    hours: 'Hour 00 - 24',
    title: 'Architectural Scoping & ICP Mapping',
    desc: 'We map system design expectations, cultural markers, tech stack prerequisites, and salary tolerance bounds.',
    action: 'Comprehensive Mandate Calibration Call with Hiring Engineering Director.',
    deliverable: 'Ideal Candidate Profile (ICP) calibrated document with mutual sign-off.',
    metric: '100% Alignment SLA',
  },
  {
    stage: '02',
    hours: 'Hour 24 - 48',
    title: 'Algorithmic Sourcing & Deep Screening',
    desc: 'Our technical recruiter partners tap private invite-only talent vaults across Hyderabad & Bengaluru.',
    action: 'Hands-on system design inquiry, architectural code review, and background vetting.',
    deliverable: 'Pool narrowed from 60+ potential profiles down to top 5 pre-screened finalists.',
    metric: 'Top 3% Talent Filtered',
  },
  {
    stage: '03',
    hours: 'Hour 48 - 72',
    title: 'Notice Period Lock & Compensation Audit',
    desc: 'We verify buy-out feasibility, notice period commitment, and counter-offer likelihood.',
    action: 'Direct conversation on relocation, notice period buyout approvals, and expectations lock.',
    deliverable: 'Affirmative DPDP candidate consent recorded and confidential dossiers finalized.',
    metric: '94% Offer Acceptance Predictability',
  },
  {
    stage: '04',
    hours: 'Hour 72+',
    title: 'Calibrated Slate Dispatch & 90-Day Guarantee',
    desc: 'Dossiers arrive in your inbox with executive summaries, verified compensation, and immediate availability.',
    action: 'Direct calendar integration for interviews; candidate retained under AVR 90-day guarantee.',
    deliverable: '3-5 interview-ready candidates backed by free unconditional replacement warranty.',
    metric: '90-Day Unconditional Warranty',
  },
];

export default function HomePage() {
  // World States
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeCorridor, setActiveCorridor] = useState<string | null>('GCC');
  const [activeStage, setActiveStage] = useState<number>(1);
  const [founderPillarsOpen, setFounderPillarsOpen] = useState(false);
  const [jobFilter, setJobFilter] = useState('ALL');

  // Interactive Calibration Simulator States
  const [simRole, setSimRole] = useState('GenAI & LLM Lead');
  const [simExp, setSimExp] = useState(9);
  const [simHub, setSimHub] = useState('Hyderabad (Hitec City)');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [countdown, setCountdown] = useState({ h: 71, m: 59, s: 48, ms: 92 });

  // Canvas Ref for Constellation Starfield / Neural Mesh
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Audio Synthesizer Context (Native HTML5 Web Audio, zero external assets)
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSynthBeep = (freq = 520, type: OscillatorType = 'sine', duration = 0.08) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio fallback silent
    }
  };

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      setTimeout(() => playSynthBeep(660, 'sine', 0.15), 50);
    }
  };

  // Live SLA Millisecond Countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let nextMs = prev.ms - 4;
        let nextS = prev.s;
        let nextM = prev.m;
        let nextH = prev.h;

        if (nextMs < 0) {
          nextMs = 99;
          nextS -= 1;
        }
        if (nextS < 0) {
          nextS = 59;
          nextM -= 1;
        }
        if (nextM < 0) {
          nextM = 59;
          nextH = prev.h > 0 ? prev.h - 1 : 71;
        }

        return { h: nextH, m: nextM, s: nextS, ms: nextMs };
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  // Neural World Interactive Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes representing talent nodes across Hyderabad & Bengaluru
    const nodeCount = Math.min(Math.floor(width / 22), 65);
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const colors = ['#00f0ff', '#6366f1', '#38bdf8', '#a855f7', '#10b981'];
    const hubs = ['HYD-NODE', 'BLR-NODE', 'GCC-GATE', 'GENAI-CORE', 'SRE-HUB'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        color: colors[i % colors.length],
        label: i < 5 ? hubs[i] : undefined,
      });
    }

    let mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;

        if (a.x < 0 || a.x > width) a.vx *= -1;
        if (a.y < 0 || a.y > height) a.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.radius, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = a.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label special telemetry hubs
        if (a.label) {
          ctx.font = '8px monospace';
          ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
          ctx.fillText(a.label, a.x + 5, a.y - 4);
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Mouse magnetic connection aura
        if (mouse.active) {
          const mdx = a.x - mouse.x;
          const mdy = a.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 140) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.45 * (1 - mdist / 140)})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Trigger Calibration Simulator Scan
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    playSynthBeep(880, 'triangle', 0.25);

    setTimeout(() => {
      playSynthBeep(440, 'sine', 0.1);
    }, 400);

    setTimeout(() => {
      playSynthBeep(660, 'sine', 0.15);
    }, 900);

    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      playSynthBeep(1046, 'sine', 0.3); // High affirmative chime
    }, 1600);
  };

  // Filter jobs
  const filteredJobs = FEATURED_JOBS.filter((job) => {
    if (jobFilter === 'ALL') return true;
    if (jobFilter === 'CLOUD') return job.category === 'Cloud';
    if (jobFilter === 'AI') return job.category === 'AI';
    if (jobFilter === 'GCC') return job.category === 'GCC';
    if (jobFilter === 'HYDERABAD') return job.location.includes('Hyderabad');
    if (jobFilter === 'BENGALURU') return job.location.includes('Bengaluru');
    return true;
  });

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* 1. INTERACTIVE FULL-SCREEN NEURAL CONSTELLATION CANVAS */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-60"
      />

      {/* 2. SUBTLE MATRIX / CRT SCANLINE OVERLAY */}
      <div className="fixed inset-0 hologram-scanline pointer-events-none z-[1] opacity-35" />

      {/* 3. AMBIENT ATMOSPHERIC AURORA ORBS */}
      <div className="fixed top-1/4 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none animate-float-slow z-0" />
      <div className="fixed bottom-1/4 -right-40 w-[30rem] h-[30rem] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow z-0" />
      <div className="fixed top-2/3 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none z-0" />

      {/* CONTENT LAYER */}
      <div className="relative z-10 space-y-24 pb-28">

        {/* ========================================================================= */}
        {/* WORLD HUD & TELEMETRY CONTROL RIBBON */}
        {/* ========================================================================= */}
        <div className="bg-slate-950/80 backdrop-blur-md border-b border-cyan-500/20 py-2 px-4 sticky top-20 z-40 shadow-lg">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            {/* Live Telemetry Corridors */}
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                HYD-HITEC: <strong className="text-white">ONLINE</strong> (142 Mandates)
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-indigo-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                BLR-BELLANDUR: <strong className="text-white">ONLINE</strong> (218 Mandates)
              </span>
              <span className="hidden md:inline text-slate-600">|</span>
              <span className="hidden md:flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                DPDP 2023 ENCRYPTED
              </span>
            </div>

            {/* Live Controls: Sound World & Calibration Latency */}
            <div className="flex items-center gap-3">
              <div className="text-[11px] text-slate-400 hidden lg:flex items-center gap-1 bg-slate-900/80 px-2.5 py-0.5 rounded border border-slate-800">
                <Clock className="w-3 h-3 text-cyan-400" />
                SLA DISPATCH:
                <span className="text-cyan-300 font-bold">
                  {String(countdown.h).padStart(2, '0')}:
                  {String(countdown.m).padStart(2, '0')}:
                  {String(countdown.s).padStart(2, '0')}.{String(countdown.ms).padStart(2, '0')}
                </span>
              </div>

              {/* Sound World Synth Audio Toggle */}
              <button
                onClick={toggleSound}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                  soundEnabled
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-sm shadow-cyan-500/30'
                    : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-slate-200'
                }`}
                title="Toggle futuristic micro-sound effects synthesized in browser"
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
                <span>SFX WORLD: {soundEnabled ? 'ONLINE' : 'MUTED'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* HERO COMMAND SECTION: WORLD ENTRANCE */}
        {/* ========================================================================= */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-10">
          <div className="max-w-6xl mx-auto text-center space-y-8">
            
            {/* Live Hologram Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-xl box-glow-cyan backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span>AVR PRECISION TALENT CALIBRATION ENGINE</span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-300 font-semibold">ZERO RESUME SPAM</span>
            </div>

            {/* Hero Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
              Bridging High-Caliber Minds with India’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 text-glow-cyan">
                Elite Tech Corridors & GCCs
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              We reject transactional staffing. Aspire Value Recruits deploys an algorithmic calibration matrix delivering pre-screened candidate dossiers within <strong className="text-cyan-400 font-bold">72 hours</strong>, backed by an unconditional <strong className="text-emerald-400 font-bold">90-day replacement warranty</strong>.
            </p>

            {/* Quick World CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/hire-talent"
                onClick={() => playSynthBeep(600, 'square', 0.1)}
                className="shimmer-button px-8 py-4 rounded-2xl text-white font-extrabold text-sm shadow-xl shadow-blue-500/30 transition transform hover:-translate-y-1 hover:scale-105"
              >
                🚀 I&apos;m Hiring (Submit Mandate Brief)
              </Link>
              <Link
                href="/jobs"
                onClick={() => playSynthBeep(450, 'sine', 0.08)}
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-white font-extrabold text-sm transition transform hover:-translate-y-0.5 shadow-lg backdrop-blur-md"
              >
                🔍 Explore Verified Roles (₹0 Fee)
              </Link>
              <Link
                href="/insights"
                onClick={() => playSynthBeep(520, 'sine', 0.08)}
                className="px-6 py-4 rounded-2xl bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-700/50 text-indigo-300 font-bold text-sm transition"
              >
                📖 Founder Blueprint & Vision
              </Link>
            </div>

            {/* 4 Key Metas: Telemetry Counters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105">
                <span className="text-3xl font-black text-cyan-400 block font-mono">72 hrs</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">First Shortlist SLA</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-emerald-500/50 transition-all hover:scale-105">
                <span className="text-3xl font-black text-emerald-400 block font-mono">94.2%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">12-Month Retention</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all hover:scale-105">
                <span className="text-3xl font-black text-indigo-400 block font-mono">450+</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Tech Leaders Placed</span>
              </div>
              <div className="glass-panel p-4 rounded-2xl border border-slate-800 hover:border-amber-500/50 transition-all hover:scale-105">
                <span className="text-3xl font-black text-amber-400 block font-mono">₹0 Fee</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Candidate Guarantee</span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE AVR TALENT CALIBRATION MATRIX (SIMULATOR TERMINAL) */}
        {/* ========================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-gradient-border shadow-2xl p-[1.5px] rounded-3xl">
            <div className="bg-slate-950/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
              
              {/* Terminal Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500/80" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs font-bold text-cyan-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    AVR-NEURAL-SIMULATOR // V3.2
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CALIBRATION RADAR: READY</span>
                </div>
              </div>

              {/* Terminal Simulator Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Controls Column (Interactive Inputs) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      Simulate Your 72-Hour Mandate Calibration
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      Select your target engineering vertical and seniority. Our calibration engine will calculate the active candidate depth and SLA delivery metrics.
                    </p>
                  </div>

                  {/* 1. Target Role Vertical */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      1. SELECT ENGINEERING DOMAIN
                    </label>
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                      {[
                        { name: 'GenAI & LLM Lead', tag: 'AI/ML' },
                        { name: 'Principal Cloud Architect', tag: 'Cloud/SRE' },
                        { name: 'Director of Engineering (GCC)', tag: 'GCC Scale' },
                        { name: 'FinTech Quant Lead', tag: 'High-Freq' },
                      ].map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            setSimRole(item.name);
                            playSynthBeep(520, 'sine', 0.05);
                          }}
                          className={`p-3 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                            simRole === item.name
                              ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/20 font-bold'
                              : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                          }`}
                        >
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-[10px] text-cyan-400 font-mono mt-0.5">{item.tag}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Experience Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold text-slate-300 flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-purple-400" />
                        2. EXPERIENCE BENCHMARK:
                      </span>
                      <span className="text-cyan-400 font-bold text-sm bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60">
                        {simExp}+ Years
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={18}
                      value={simExp}
                      onChange={(e) => {
                        setSimExp(Number(e.target.value));
                        playSynthBeep(400 + Number(e.target.value) * 20, 'sine', 0.03);
                      }}
                      className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                      <span>5 Yrs (Senior Eng)</span>
                      <span>10 Yrs (Staff / Architect)</span>
                      <span>18+ Yrs (VP / Director)</span>
                    </div>
                  </div>

                  {/* 3. Regional Corridor */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-300 font-mono flex items-center gap-1.5">
                      <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                      3. TARGET TECH CORRIDOR
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        'Hyderabad (Hitec City)',
                        'Bengaluru (Bellandur/ORR)',
                        'Dual-Corridor Sync',
                      ].map((hub) => (
                        <button
                          key={hub}
                          onClick={() => {
                            setSimHub(hub);
                            playSynthBeep(480, 'sine', 0.05);
                          }}
                          className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition cursor-pointer ${
                            simHub === hub
                              ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/20'
                              : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {hub}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Action Scan Trigger */}
                  <div className="pt-2">
                    <button
                      onClick={handleTriggerScan}
                      disabled={isScanning}
                      className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isScanning
                          ? 'bg-slate-800 text-cyan-400 border border-cyan-500/50 animate-pulse'
                          : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-xl shadow-cyan-500/25 hover:scale-[1.02]'
                      }`}
                    >
                      {isScanning ? (
                        <>
                          <Radar className="w-5 h-5 animate-spin" />
                          <span>ALGORITHMIC RADAR SCANNING 14,000+ PROFILES...</span>
                        </>
                      ) : (
                        <>
                          <Zap className="w-5 h-5 text-amber-300" />
                          <span>EXECUTE 72-HOUR CALIBRATION SCAN ↗</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Holographic Radar & Telemetry Display */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative overflow-hidden">
                  
                  {/* Radar Screen Visual */}
                  <div className="relative w-52 h-52 rounded-full border-2 border-cyan-500/30 bg-slate-950/80 flex items-center justify-center shadow-inner overflow-hidden">
                    {/* Concentric Radar Rings */}
                    <div className="absolute inset-4 rounded-full border border-cyan-500/20" />
                    <div className="absolute inset-10 rounded-full border border-cyan-500/20" />
                    <div className="absolute inset-16 rounded-full border border-cyan-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-[1px] bg-cyan-500/20" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-[1px] bg-cyan-500/20" />
                    </div>

                    {/* Rotating Radar Sweep Beam */}
                    <div className="absolute inset-0 origin-center animate-radar-sweep pointer-events-none">
                      <div className="w-1/2 h-1/2 bg-gradient-to-br from-cyan-400/40 via-cyan-400/10 to-transparent rounded-tl-full" />
                    </div>

                    {/* Simulated Candidate Radar Blips */}
                    <div className="absolute top-12 left-14 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                    <div className="absolute top-12 left-14 w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <div className="absolute bottom-14 right-12 w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="absolute top-20 right-16 w-2 h-2 rounded-full bg-indigo-400" />

                    {/* Center Core */}
                    <div className="w-3 h-3 rounded-full bg-white shadow-lg shadow-cyan-400 z-10" />
                  </div>

                  {/* Telemetry Output Numbers */}
                  <div className="w-full space-y-3 pt-6 font-mono text-xs">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">TARGET MATCH SIGNAL:</span>
                      <span className="text-emerald-400 font-bold text-sm">
                        {scanComplete ? '99.4% VERIFIED' : isScanning ? 'COMPUTING...' : '98.7% SIGNAL'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">ESTIMATED CTC BAND:</span>
                      <span className="text-cyan-400 font-bold">
                        ₹{simExp * 4 + 10}L - ₹{simExp * 5 + 20}L PA
                      </span>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                      <span className="text-slate-400">72-HR SHORTLIST SLA:</span>
                      <span className="text-amber-400 font-bold">3 - 5 DOSSIERS</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">WARRANTY CLAUSE:</span>
                      <span className="text-indigo-400 font-bold">90-DAY REPLACEMENT</span>
                    </div>
                  </div>

                  {scanComplete && (
                    <div className="mt-4 w-full p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs text-center font-bold animate-pulse">
                      ✓ CALIBRATION SUCCESS: Ready for mandate intake!
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VISHNU VARDHAN REDDY ALAVALA: HOLOGRAPHIC FOUNDER COMMAND DECK */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animated-gradient-border shadow-2xl p-[1.5px] rounded-3xl">
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950/80 to-slate-950 p-8 sm:p-12 rounded-3xl relative overflow-hidden space-y-6">
              
              {/* Giant Background Hologram Quote Mark */}
              <div className="absolute right-6 bottom-4 text-9xl text-indigo-500/10 font-serif font-black select-none pointer-events-none">
                “
              </div>

              {/* Top Founder Banner with Audio Visualizer */}
              <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black text-cyan-400 tracking-widest font-mono uppercase bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
                    ✦ LEADERSHIP COMMAND & PHILOSOPHY
                  </span>
                  
                  {/* Live Soundwave Audio Visualizer Bars */}
                  <div className="flex items-center gap-1 h-6">
                    <span className="w-1 bg-cyan-400 rounded-full wave-bar-1" />
                    <span className="w-1 bg-indigo-400 rounded-full wave-bar-2" />
                    <span className="w-1 bg-blue-400 rounded-full wave-bar-3" />
                    <span className="w-1 bg-emerald-400 rounded-full wave-bar-4" />
                    <span className="w-1 bg-cyan-300 rounded-full wave-bar-5" />
                  </div>
                </div>

                {/* Expandable Toggle Button */}
                <button
                  onClick={() => {
                    setFounderPillarsOpen(!founderPillarsOpen);
                    playSynthBeep(founderPillarsOpen ? 420 : 640, 'sine', 0.08);
                  }}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{founderPillarsOpen ? 'Close Blueprint' : 'Inspect 3 Pillars of Ignition'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${founderPillarsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* The Canonical Quotation */}
              <blockquote className="text-xl sm:text-3xl font-semibold text-slate-100 italic leading-relaxed relative z-10">
                &ldquo;Recruitment is never merely about filling open seats. It is the art of ignition — aligning extraordinary minds with audacious enterprise visions to transform what is technically possible.&rdquo;
              </blockquote>

              {/* Expandable 3 Pillars Drawer */}
              {founderPillarsOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 relative z-10 animate-fadeIn">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/40 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase">PILLAR 01</div>
                    <div className="text-sm font-bold text-white">High-Signal Matching</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      We reject keyword scrapers. Candidates are evaluated by experienced tech leaders against system architecture and real problems.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-indigo-500/40 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-indigo-400 uppercase">PILLAR 02</div>
                    <div className="text-sm font-bold text-white">Honest Calibration</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Transparent notice periods, buyout feasibility checks, and realistic compensation bands with zero inflated promises.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">PILLAR 03</div>
                    <div className="text-sm font-bold text-white">Long-Horizon Value</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Every placement is insured by our 90-day free replacement guarantee. We prioritize 12-month retention over quick commission.
                    </p>
                  </div>
                </div>
              )}

              {/* Founder Sign-off & Credentials */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-600 to-indigo-600 flex items-center justify-center font-black text-white text-xl shadow-lg shadow-cyan-500/25 border border-white/20">
                    VR
                  </div>
                  <div>
                    <div className="font-extrabold text-white text-base">Vishnu Vardhan Reddy Alavala</div>
                    <div className="text-xs text-cyan-400 font-medium">Founder & Managing Director, Aspire Value Recruits</div>
                    <div className="text-[11px] text-slate-400">Hitec City, Hyderabad • Outer Ring Road, Bengaluru</div>
                  </div>
                </div>

                <Link
                  href="/insights"
                  onClick={() => playSynthBeep(520, 'sine', 0.08)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 border border-slate-700 hover:border-cyan-400 transition flex items-center gap-2"
                >
                  <span>Read Full Leadership Story</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE 3D PRACTICE CORRIDORS SHOWCASE */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-cyan-400 tracking-widest font-mono uppercase">
              {'// DOMAIN ARCHITECTURE & HUBS'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Specialized Tech & GCC Corridors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Click any corridor to spotlight technical requirements, compensation brackets, and local hiring density.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_CORRIDORS.map((corridor) => {
              const isSelected = activeCorridor === corridor.code;
              return (
                <div
                  key={corridor.code}
                  onClick={() => {
                    setActiveCorridor(corridor.code);
                    playSynthBeep(480, 'sine', 0.08);
                  }}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? `bg-gradient-to-b ${corridor.color} ring-2 ring-cyan-400 shadow-2xl scale-[1.03]`
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center font-black text-lg text-cyan-400 shadow-md">
                        {corridor.code}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 border border-slate-800">
                        {corridor.count}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-lg text-white leading-snug">
                      {corridor.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {corridor.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-400">HUB:</span>
                      <span className="text-slate-200 font-semibold">{corridor.activeHub}</span>
                    </div>
                    <div className="flex justify-between text-[11px] font-mono">
                      <span className="text-slate-400">BAND:</span>
                      <span className="text-emerald-400 font-bold">{corridor.salaryBand}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Corridor Deep Dive Drawer */}
          {activeCorridor && (
            <div className="p-6 rounded-3xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl space-y-4 animate-fadeIn">
              {(() => {
                const c = PRACTICE_CORRIDORS.find((x) => x.code === activeCorridor)!;
                return (
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                          ACTIVE CORRIDOR SPOTLIGHT: {c.code}
                        </span>
                        <h4 className="text-lg font-black text-white">{c.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {c.hotSkills.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-medium bg-slate-950 text-slate-300 px-3 py-1 rounded-lg border border-slate-800"
                          >
                            ✓ {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 shrink-0">
                      <Link
                        href={`/jobs?corridor=${c.code}`}
                        className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-md transition"
                      >
                        View {c.count} Roles
                      </Link>
                      <Link
                        href="/hire-talent"
                        className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
                      >
                        Commission Mandate
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE 4-STAGE 72-HOUR SLA CALIBRATION SCRUBBER */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-blue-950/80 border border-indigo-800/50 rounded-3xl p-6 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-black text-cyan-400 tracking-widest font-mono uppercase">
                {'// THE 72-HOUR CALIBRATION PROTOCOL'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How We Deliver Calibrated Slates in 72 Hours
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Click across the phases below to inspect our hourly calibration gates and deliverables.
              </p>
            </div>

            {/* Interactive Progress Bar */}
            <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-emerald-400 h-full transition-all duration-500"
                style={{ width: `${activeStage * 25}%` }}
              />
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CALIBRATION_STAGES.map((s, idx) => {
                const stageNum = idx + 1;
                const isSelected = activeStage === stageNum;
                return (
                  <button
                    key={s.stage}
                    onClick={() => {
                      setActiveStage(stageNum);
                      playSynthBeep(440 + stageNum * 60, 'sine', 0.06);
                    }}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400 shadow-xl ring-2 ring-cyan-400/40 scale-[1.02]'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold text-cyan-400">
                        STAGE {s.stage}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                        {s.hours}
                      </span>
                    </div>
                    <div className="font-extrabold text-white text-sm mt-2">{s.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">{s.desc}</div>
                  </button>
                );
              })}
            </div>

            {/* Stage Deep Dive Details Panel */}
            <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4">
              {(() => {
                const cur = CALIBRATION_STAGES[activeStage - 1];
                return (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                        ACTIVE PROTOCOL ACTION:
                      </span>
                      <p className="text-xs text-slate-200 font-medium">{cur.action}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">
                        DELIVERABLE TO CLIENT:
                      </span>
                      <p className="text-xs text-slate-200 font-medium">{cur.deliverable}</p>
                    </div>
                    <div className="space-y-1 md:text-right">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                        BENCHMARK SLA:
                      </span>
                      <div className="text-sm font-extrabold text-emerald-300">{cur.metric}</div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* VERIFIED LIVE ROLES WITH REAL-TIME CLIENT FILTERS */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                {'// VERIFIED MANDATES'}
              </span>
              <h2 className="text-3xl font-black text-white mt-1">Live Calibrated Opportunities</h2>
              <p className="text-xs text-slate-400">Strictly ₹0 candidate fee with verified compensation packages.</p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'All Roles', value: 'ALL' },
                { label: 'Cloud / SRE', value: 'CLOUD' },
                { label: 'Generative AI', value: 'AI' },
                { label: 'GCC Scale', value: 'GCC' },
                { label: 'Hyderabad', value: 'HYDERABAD' },
                { label: 'Bengaluru', value: 'BENGALURU' },
              ].map((pill) => (
                <button
                  key={pill.value}
                  onClick={() => {
                    setJobFilter(pill.value);
                    playSynthBeep(520, 'sine', 0.05);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    jobFilter === pill.value
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-md font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-slate-200'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="text-base sm:text-lg font-black text-white hover:text-cyan-400 transition"
                    >
                      {job.title}
                    </Link>
                    {job.isConfidential ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        CONFIDENTIAL MANDATE
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800">
                        VERIFIED CLIENT
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {job.matchScore} Match Signal
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300 font-semibold">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>{job.experience}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-extrabold">{job.salary}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] bg-slate-950 text-slate-300 px-2.5 py-0.5 rounded-md border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs shadow-md transition transform hover:scale-105"
                  >
                    View & Apply →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 underline"
            >
              <span>Explore All Verified Engineering Mandates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WORLD FOOTER DOCK & PERSISTENT WHATSAPP CONNECT */}
        {/* ========================================================================= */}
        <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <a
            href="https://wa.me/919876543210?text=Hi%20Aspire%20Value%20Recruits,%20I%20would%20like%20to%20discuss%20a%20hiring%20mandate"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSynthBeep(700, 'sine', 0.1)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-500/40 transition transform hover:scale-105 border border-emerald-400/40 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            <span>Direct WhatsApp Radar</span>
          </a>
        </aside>

      </div>
    </div>
  );
}

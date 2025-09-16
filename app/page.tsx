"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Github, Globe, Sparkles, ExternalLink, Star, LayoutGrid, FlaskConical, LineChart, Rocket, MapPin } from "lucide-react";
import Link from "next/link";

const PROFILE = {
  name: "Hikmat Ullah",
  title: "AI-First Web Designer",
  tagline: "I design and ship high-performance websites that blend design systems, AI-augmented workflows, and cloud-level precision — turning traffic into measurable growth.",
  location: "Remote (Pakistan & UAE clients)",
  email: "itcombat97@gmail.com",
  phone: "+92 302 8888953",
  github: "https://github.com/hikmat-art",
};

const PROJECTS = [
  {
    title: "Sultania.pk — E‑Commerce",
    url: "https://sultania.pk",
    img: "/screens/sultania-placeholder.jpg",
    ai: "AI funnel copy/A-B tests",
    outcomes: ["-20% abandon", "+12% AOV"],
    summary: "Checkout-focused UX with WhatsApp support, refined product cards, and SEO schema.",
    case: {
      problem: "High cart abandonment and checkout drop-offs.",
      solution: "AI-driven funnel analysis, variant microcopy, redesigned product cards, WhatsApp support.",
      outcome: "–20% cart abandonment · +12% average order value · Higher engagement."
    }
  },
  {
    title: "EZxprt.com — Online Academy",
    url: "https://ezxprt.com",
    img: "/screens/ezxprt-placeholder.jpg",
    ai: "AI keyword/schema/content",
    outcomes: ["+30% sign-ups", "98/100 Lighthouse"],
    summary: "Modular design system with SEO-structured content and mobile-first performance.",
    case: {
      problem: "Needed scalable, SEO-friendly platform to drive enrollments.",
      solution: "AI keyword research, schema markup, content scaffolds; modular system; mobile-first.",
      outcome: "+30% sign-ups · Lighthouse 98/100 · Improved search ranking."
    }
  },
  {
    title: "Bin Hashim Online — Retail",
    url: "https://binhashimonline.pk",
    img: "/screens/binhashim-placeholder.jpg",
    ai: "AI heatmap simulations",
    outcomes: ["↑ catalog engagement"],
    summary: "Optimized catalog navigation, faster pages, AI-refined prototypes for consistency.",
    case: {
      problem: "Complex catalog navigation slowed product discovery.",
      solution: "AI heatmap simulations to refine flow, frontend redesign, branded visuals.",
      outcome: "Higher catalog engagement · More consistent funnels · Faster UX."
    }
  },
  {
    title: "Chashma Sugar Mills — Corporate",
    url: "https://chashmasugarmills.com",
    img: "/screens/csm-placeholder.jpg",
    ai: "AI competitor research/schema",
    outcomes: ["<100ms TTFB"],
    summary: "Bilingual-ready brochure site with schema and strong CTAs for stakeholders.",
    case: {
      problem: "Outdated digital presence that lacked professionalism.",
      solution: "AI competitive research, SEO schema, clean bilingual-ready site.",
      outcome: "<100ms TTFB · Improved keyword visibility · Polished corporate identity."
    }
  },
];

const HIGHLIGHTS = [
  { value: "+30%", label: "Course sign-ups (EZxprt)" },
  { value: "-20%", label: "Cart abandonment (Sultania)" },
  { value: "<100ms", label: "TTFB (Chashma Sugar Mills)" },
  { value: "+12%", label: "Avg. order value (Sultania)" },
];

const SERVICES = [
  { icon: LayoutGrid, title: "High-Conversion Web Design", desc: "Responsive, funnel-optimized UX/UI that ships fast." },
  { icon: FlaskConical, title: "AI-Augmented Workflows", desc: "Content scaffolds, schema, funnel insights from day one." },
  { icon: LineChart, title: "SEO & Performance", desc: "Core Web Vitals, structured data, 95+ Lighthouse." },
  { icon: Rocket, title: "Funnel Automation", desc: "HubSpot, n8n, Zapier integrations to reduce busywork." },
];

export default function Page() {
  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/40 border-b border-zinc-200/50 dark:border-zinc-800/60">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Hikmat Ullah</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <a href="#contact" className="btn">Let’s Talk <ArrowUpRight className="w-4 h-4" /></a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-30 dark:opacity-20 bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-emerald-400" />
        </div>
        <div className="container py-20 md:py-28 grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">{PROFILE.title}</h1>
            <p className="mt-4 max-w-2xl text-lg opacity-90">{PROFILE.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="badge"><MapPin className="w-3.5 h-3.5 mr-1"/> {PROFILE.location}</span>
              <Link href={`mailto:${PROFILE.email}`} className="badge"><Mail className="w-3.5 h-3.5 mr-1"/> {PROFILE.email}</Link>
              <Link href={`tel:${PROFILE.phone}`} className="badge"><Phone className="w-3.5 h-3.5 mr-1"/> {PROFILE.phone}</Link>
              <Link href={PROFILE.github} target="_blank" className="badge"><Github className="w-3.5 h-3.5 mr-1"/> GitHub</Link>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="btn">View My Work</a>
              <a href="#contact" className="btn">Let’s Talk</a>
            </div>
          </div>
          <div className="justify-self-center">
            <Image src="/hikmat.jpg" alt="Hikmat Ullah" width={220} height={220} className="rounded-full border" priority />
          </div>
        </div>
      </section>

      {/* Work Grid */}
      <section id="work" className="container py-16">
        <div className="mb-8">
          <div className="mb-2 text-sm uppercase tracking-widest opacity-70">Selected Work</div>
          <h2 className="text-3xl md:text-5xl">Case Studies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <a key={p.title} href={p.url} target="_blank" className="card group overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-zinc-200/40 to-zinc-100/40 dark:from-zinc-800/40 dark:to-zinc-900/40 flex items-center justify-center">
                <Image src={p.img} alt={p.title} width={1200} height={750} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="text-xs badge">{p.ai}</span>
                </div>
                <p className="mt-2 text-sm opacity-90">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {p.outcomes.map((o) => <span key={o} className="badge">{o}</span>)}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">View project <ExternalLink className="w-4 h-4" /></div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="container py-6">
        <div className="grid md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="card p-6 text-center">
              <div className="text-2xl font-semibold">{h.value}</div>
              <div className="opacity-70 text-sm mt-1">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-16">
        <div className="mb-8">
          <div className="mb-2 text-sm uppercase tracking-widest opacity-70">What I Do</div>
          <h2 className="text-3xl md:text-5xl">Design & Delivery</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-6">
              <s.icon className="w-6 h-6" />
              <div className="mt-3 text-lg font-semibold">{s.title}</div>
              <div className="mt-1 text-sm opacity-90">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="container py-16">
        <div className="mb-8">
          <div className="mb-2 text-sm uppercase tracking-widest opacity-70">About</div>
          <h2 className="text-3xl md:text-5xl">Design with engineering rigor</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="card p-6">
            <p className="text-sm leading-7 opacity-90">
              I’m a Cloud Engineer by profession and a Web Designer by passion. Since 2022, I’ve delivered AI-driven websites for e-commerce, education, and corporate clients — blending technical precision, UX craft, and measurable outcomes.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {["Figma","WordPress","Elementor","Shopify","Next.js","Tailwind","HubSpot","Zapier","n8n","Cursor","MCP","Claude Code","Webflow AI","Relume","GA","Hotjar","Vercel","Netlify"].map(t => <span key={t} className="badge">{t}</span>)}
            </div>
          </div>
          <div className="card p-6">
            <div className="text-lg font-semibold">Capabilities</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Cloud-ready hosting & deployment (Vercel, Netlify, AWS)</li>
              <li>Performance-first builds (Core Web Vitals, Lighthouse 95+)</li>
              <li>Secure, scalable setups (SSL, CDN, backups, monitoring)</li>
            </ul>
            <div className="mt-6 text-lg font-semibold">Recent Wins</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Shipped AI-assisted academy site; sign-ups up ~30%.</li>
              <li>Cut checkout drop-off by ~20% via copy & UX refinements.</li>
              <li>Deployed sub-100ms TTFB corporate site with schema.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-16">
        <div className="mb-8">
          <div className="mb-2 text-sm uppercase tracking-widest opacity-70">Let’s build</div>
          <h2 className="text-3xl md:text-5xl">Tell me about your project</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 card p-6">
            <p className="text-sm leading-7 opacity-90">
              Whether it’s building a new high-conversion website, optimizing an existing funnel, or exploring AI workflows, I can help you move from idea → design → live site in days, not quarters.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <Link href={`mailto:${PROFILE.email}`} className="badge"><Mail className="w-4 h-4"/> {PROFILE.email}</Link>
              <Link href={`tel:${PROFILE.phone}`} className="badge"><Phone className="w-4 h-4"/> {PROFILE.phone}</Link>
              <Link href={PROFILE.github} target="_blank" className="badge"><Github className="w-4 h-4"/> GitHub</Link>
            </div>
          </div>
          <div className="md:col-span-2 card p-6">
            <div className="text-sm opacity-80">Prefer WhatsApp? Message me anytime.</div>
            <div className="mt-2 text-lg font-semibold">+92 302 8888953</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="opacity-80">© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#work" className="hover:opacity-70">Work</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

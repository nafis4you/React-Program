import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code2,
  Layers,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Monitor,
  Smartphone,
  ChevronRight,
  Send,
  FileText,
  Languages,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';

/**
 * Complete React.js Portfolio for Nafis Mohammad
 * Strictly crafted using verified resume details:
 * - Frontend Developer | Web Designer | WordPress & Shopify Developer
 * - Indore, India | +91 8949047441 | nafis4you@gmail.com
 */

const RESUME_DATA = {
  name: 'Nafis Mohammad',
  shortName: 'Nafis',
  headline: 'Frontend Developer | Web Designer | WordPress & Shopify Developer',
  location: 'Indore, India',
  phone: '+91 8949047441',
  phoneRaw: '+918949047441',
  email: 'nafis4you@gmail.com',
  summary:
    'Frontend Developer and Web Designer with 5+ years of professional experience building responsive websites across WordPress, Shopify, and modern frontend technologies. Hands-on with HTML5, CSS3, JavaScript, Bootstrap 5, and jQuery, with 2 years of Shopify experience and page-builder experience with Elementor, Avada, and Divi. Additional training and project exposure in Angular 8, with familiarity in React JS. Experienced in contributing to live client website projects within professional development teams.',
  moreProjectsUrl:
    'https://docs.google.com/document/d/1eVIxz9kJUuInFwcSRm0iN74-u2IbnObMsdqLWbXskUk/edit?usp=sharing',
  stats: [
    { label: 'Web & Frontend Experience', value: '7+ Years', accent: 'text-emerald-400' },
    { label: 'Shopify Storefront Experience', value: '3+ Years', accent: 'text-cyan-400' },
    { label: 'WordPress Page Builders', value: 'Elementor • Avada • Divi', accent: 'text-white' },
    { label: 'Academic Qualification', value: 'MCA Graduate', accent: 'text-teal-300' },
  ],
  skills: [
    {
      category: 'CMS & E-Commerce Platforms',
      subtitle: 'Storefronts & Content Systems',
      accent: 'emerald',
      items: ['WordPress Development', 'Shopify Development'],
    },
    {
      category: 'Page Builders',
      subtitle: 'Visual Layout & Custom Themes',
      accent: 'cyan',
      items: ['Elementor', 'Avada', 'Divi'],
    },
    {
      category: 'Frontend Core',
      subtitle: 'Responsive UI & Interactivity',
      accent: 'emerald',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'jQuery', 'Responsive Web Design'],
    },
    {
      category: 'Modern Frameworks',
      subtitle: 'Component-Based Applications',
      accent: 'cyan',
      items: ['Angular 8', 'React JS'],
    },
  ],
  projects: [
    {
      id: 'orthomosa',
      title: 'Orthomosa',
      url: 'https://orthomosa.nl',
      filterGroup: 'WordPress',
      badge: 'WordPress',
      description: 'Contributed to the WordPress site for this SaaS messaging platform.',
      highlights: [
        'Responsive frontend layout implementation for a SaaS messaging platform',
        'WordPress theme customization and cross-browser UI alignment',
        'Clean, structured content presentation tailored for business users',
      ],
      tech: ['WordPress', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      id: 'savannah-tech',
      title: 'Savannah Technical College',
      url: 'https://www.savannahtech.edu/',
      filterGroup: 'WordPress',
      badge: 'WordPress (Avada)',
      description: 'Worked on the Avada-based website.',
      highlights: [
        'Page layout structuring and visual styling using Avada Fusion Builder',
        'Responsive adjustments across desktop, tablet, and mobile breakpoints',
        'Maintained visual consistency across institutional web pages',
      ],
      tech: ['WordPress', 'Avada', 'CSS3', 'Responsive Web Design'],
    },
    {
      id: 'shop-madel',
      title: 'Shop Madel',
      url: 'https://shopmadel.com/',
      filterGroup: 'Shopify',
      badge: 'Shopify',
      description: 'Worked on the Shopify storefront.',
      highlights: [
        'Shopify storefront customization and responsive product page layouts',
        'Theme styling and frontend enhancements using HTML5, CSS3, and JavaScript',
        'Optimized visual hierarchy for seamless e-commerce browsing',
      ],
      tech: ['Shopify', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
      id: 'rockets-cycling',
      title: 'Rockets Cycling',
      url: 'https://rocketscycling.com/',
      filterGroup: 'Shopify',
      badge: 'Shopify',
      description: 'Contributed to the Shopify storefront.',
      highlights: [
        'Storefront UI customization and responsive merchandising sections',
        'Cross-device testing and frontend layout refinements',
        'Delivered clean, brand-aligned e-commerce visual templates',
      ],
      tech: ['Shopify', 'CSS3', 'JavaScript', 'Responsive UI'],
    },
    {
      id: 'wirtshaus-rosine',
      title: 'Wirtshaus Rosine',
      url: 'https://wirtshaus-rosine.de/',
      filterGroup: 'WordPress',
      badge: 'WordPress (Divi)',
      description: 'Contributed to the Divi-based business website.',
      highlights: [
        'Built and styled business sections using the Divi visual builder',
        'Responsive design adaptation for mobile and desktop visitors',
        'Custom CSS refinements for typography and section spacing',
      ],
      tech: ['WordPress', 'Divi', 'HTML5', 'CSS3'],
    },
    {
      id: 'shiksha-pravesh',
      title: 'Shiksha Pravesh',
      url: null,
      filterGroup: 'Angular 8',
      badge: 'Angular 8',
      description: 'Applied Angular 8 in frontend development.',
      highlights: [
        'Component-based frontend development built with Angular 8',
        'Structured UI views using HTML5, CSS3, and Bootstrap 5',
        'Applied formal Angular 8 training to practical application workflows',
      ],
      tech: ['Angular 8', 'HTML5', 'CSS3', 'Bootstrap 5'],
    },
  ],
  experience: [
    {
      role: 'Web Designer',
      company: 'Muteweb Pvt Ltd',
      location: 'Indore',
      period: 'Sep 2020 – Present',
      current: true,
      responsibilities: [
        'Developed and customized responsive WordPress websites using Elementor, Avada, and Divi page builders',
        'Worked on Shopify storefront development and customization, drawing on 2 years of Shopify experience',
        'Translated design mockups into HTML5, CSS3, JavaScript, Bootstrap, and jQuery implementations',
        'Contributed to selected frontend projects using Angular 8, supported by formal Angular 8 training',
        'Collaborated with designers and developers within a professional development team to contribute to live client website builds',
      ],
    },
    {
      role: 'Web Designer',
      company: 'Aculance Pvt Ltd',
      location: 'Indore',
      period: 'Apr 2019 – Aug 2020',
      current: false,
      responsibilities: [
        'Developed and styled responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap',
        'Built and customized WordPress websites for client projects',
        'Implemented interactive front-end features using jQuery',
      ],
    },
  ],
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'IGNOU, Delhi',
      year: '2009',
    },
    {
      degree: 'Bachelor of Arts (BA)',
      institution: 'MDS University, Ajmer',
      year: '',
    },
  ],
  training: [
    {
      course: 'Frontend Development in Angular 8',
      institute: 'Indeyes Pvt. Ltd.',
      duration: '3 months',
    },
    {
      course: 'Web Designing',
      institute: 'ReEasy Animation Pvt. Ltd.',
      duration: '6 months',
    },
  ],
  academicExperience: [
    {
      role: 'Assistant Lecturer',
      institution: 'Eklavya College, Jhalawar, Rajasthan',
      duration: '6 years',
    },
    {
      role: 'Assistant Lecturer',
      institution: 'Gyan Vihar College, Bhesodamandi, Madhya Pradesh',
      duration: '5 years',
    },
  ],
  languages: ['Hindi', 'English', 'Urdu'],
};

const CAPABILITY_PILLARS = [
  {
    id: 'wordpress',
    tabLabel: 'WordPress & Page Builders',
    badge: 'Elementor • Avada • Divi',
    title: 'Custom WordPress Websites & Page-Builder Architecture',
    description:
      '5+ years of hands-on experience building, customizing, and maintaining live client WordPress websites using Elementor, Avada, and Divi—delivering clean layouts across SaaS, education, and hospitality domains.',
    deliverables: [
      'Pixel-accurate page builds in Elementor, Avada & Divi',
      'Custom CSS3 & jQuery refinements for tailored UI behavior',
      'Cross-browser & mobile-first responsive optimization',
    ],
    featuredExample: 'Orthomosa (SaaS), Savannah Technical College (Avada), Wirtshaus Rosine (Divi)',
  },
  {
    id: 'shopify',
    tabLabel: 'Shopify Storefronts',
    badge: '2 Years Shopify Experience',
    title: 'E-Commerce Storefront Development & Customization',
    description:
      '2 years of dedicated Shopify experience focused on customizing storefront templates, structuring product & collection layouts, and translating visual brand designs into high-converting online stores.',
    deliverables: [
      'Shopify theme & storefront section customization',
      'Responsive product & merchandising UI with HTML5, CSS3 & JS',
      'Seamless mobile shopping experience & layout polish',
    ],
    featuredExample: 'Shop Madel (shopmadel.com) & Rockets Cycling (rocketscycling.com)',
  },
  {
    id: 'frontend',
    tabLabel: 'Modern Frontend Engineering',
    badge: 'HTML5 • JS • Angular 8 • React JS',
    title: 'Design-to-Code & Component-Driven Web Applications',
    description:
      'Translating design mockups into structured, responsive interfaces with HTML5, CSS3, JavaScript, Bootstrap 5, and jQuery, alongside component-based development in Angular 8 and React JS.',
    deliverables: [
      'Mockup-to-code implementation with Bootstrap 5 & CSS3',
      'Interactive UI enhancements with JavaScript & jQuery',
      'Modular frontend architecture in Angular 8 & React JS',
    ],
    featuredExample: 'Shiksha Pravesh (Angular 8) & Team Client Web Builds',
  },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [activePillar, setActivePillar] = useState('wordpress');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [copiedField, setCopiedField] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'WordPress Website (Elementor / Avada / Divi)',
    message: '',
  });

  // Trigger transient toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
  };

  useEffect(() => {
    if (!toastMessage) return;
    const timer = setTimeout(() => setToastMessage(''), 3200);
    return () => clearTimeout(timer);
  }, [toastMessage]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Safe clipboard helper with fallback
  const handleCopy = (text, fieldKey, label) => {
    const fallbackCopy = () => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        setCopiedField(fieldKey);
        triggerToast(`${label} copied to clipboard!`);
        setTimeout(() => setCopiedField(''), 2000);
      } catch (err) {
        triggerToast(`Unable to copy ${label}`);
      }
      document.body.removeChild(textarea);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedField(fieldKey);
          triggerToast(`${label} copied to clipboard!`);
          setTimeout(() => setCopiedField(''), 2000);
        })
        .catch(fallbackCopy);
    } else {
      fallbackCopy();
    }
  };

  const filterCategories = ['All', 'WordPress', 'Shopify', 'Angular 8'];

  const filteredProjects =
    activeFilter === 'All'
      ? RESUME_DATA.projects
      : RESUME_DATA.projects.filter((project) => project.filterGroup === activeFilter);

  const currentPillarData =
    CAPABILITY_PILLARS.find((item) => item.id === activePillar) || CAPABILITY_PILLARS[0];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;
    triggerToast(`Thank you, ${formState.name}! Your inquiry has been received.`);
    setFormState({
      name: '',
      email: '',
      service: 'WordPress Website (Elementor / Avada / Divi)',
      message: '',
    });
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#capabilities', label: 'Capabilities' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans antialiased selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Subtle Background Grid & Ambient Radial Glows */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      <div className="fixed top-[-10%] left-[15%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[10%] w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 text-sm text-white shadow-2xl shadow-emerald-950/50 transition-all">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. STICKY GLASSMORPHIC NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Monogram */}
          <a href="#about" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#0B0F19] rounded-xl flex items-center justify-center font-mono font-bold text-emerald-400 text-base group-hover:bg-transparent group-hover:text-[#0B0F19] transition-colors">
                NQ
              </div>
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg tracking-tight text-white block leading-none">
                Nafis<span className="text-emerald-400">.dev</span>
              </span>
              <span className="font-mono text-[11px] text-slate-400">Indore, India</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 bg-[#0B0F19]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-slate-300 hover:bg-slate-800/70 hover:text-emerald-400 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] font-semibold text-sm"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO & PERSONAL DETAILS SECTION */}
      <section
        id="about"
        className="relative z-10 pt-14 pb-20 sm:pt-24 sm:pb-28 border-b border-slate-800/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Intro Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{RESUME_DATA.location}</span>
                <span className="text-slate-600">|</span>
                <span>5+ Years Experience</span>
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15]">
                  {RESUME_DATA.name}
                </h1>
                <p className="mt-3 text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  {RESUME_DATA.headline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
                {RESUME_DATA.summary}
              </p>

              {/* Direct Interactive Contact Pills (Phone & Email with Click-to-Copy + Direct Links) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <div className="inline-flex items-center rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden">
                  <a
                    href={`tel:${RESUME_DATA.phoneRaw}`}
                    className="flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{RESUME_DATA.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.phone, 'hero-phone', 'Phone number')}
                    aria-label="Copy phone number"
                    className="px-3 py-2.5 border-l border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === 'hero-phone' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="inline-flex items-center rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden">
                  <a
                    href={`mailto:${RESUME_DATA.email}`}
                    className="flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{RESUME_DATA.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.email, 'hero-email', 'Email address')}
                    aria-label="Copy email address"
                    className="px-3 py-2.5 border-l border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    {copiedField === 'hero-email' ? (
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0B0F19] font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  <span>View Selected Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href={RESUME_DATA.moreProjectsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-500/50 font-medium text-sm transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>Additional Projects Archive</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Profile Card & Quick Stat Highlights */}
            <div className="lg:col-span-5 space-y-5">
              {/* Developer Profile Summary Card */}
              <div className="rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs text-slate-400">developer.profile.jsx</span>
                </div>

                <pre className="font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                  <code>
                    <span className="text-cyan-400">const</span>{' '}
                    <span className="text-emerald-400">developer</span> = {'{\n'}
                    {'  '}name: <span className="text-amber-300">"Nafis Mohammad"</span>,{'\n'}
                    {'  '}role: <span className="text-amber-300">"Frontend & Web Designer"</span>,{'\n'}
                    {'  '}location: <span className="text-amber-300">"Indore, India"</span>,{'\n'}
                    {'  '}cmsPlatforms: [<span className="text-amber-300">"WordPress"</span>,{' '}
                    <span className="text-amber-300">"Shopify"</span>],{'\n'}
                    {'  '}builders: [<span className="text-amber-300">"Elementor"</span>,{' '}
                    <span className="text-amber-300">"Avada"</span>,{' '}
                    <span className="text-amber-300">"Divi"</span>],{'\n'}
                    {'  '}frameworks: [<span className="text-amber-300">"Angular 8"</span>,{' '}
                    <span className="text-amber-300">"React JS"</span>],{'\n'}
                    {'  '}education: <span className="text-amber-300">"MCA (IGNOU, 2009)"</span>
                    {'\n}'};
                  </code>
                </pre>
              </div>

              {/* 2x2 Stat Highlights Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {RESUME_DATA.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-2xl bg-slate-900/75 border border-slate-800/90 hover:border-slate-700 transition-colors"
                  >
                    <div className={`text-base sm:text-lg font-bold font-mono ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL & CORE SKILLS SECTION */}
      <section id="skills" className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
            // Core & Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Stack & Platforms
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Specialized in building responsive websites across WordPress page builders, Shopify storefronts, and modern frontend technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {RESUME_DATA.skills.map((group) => {
            const isEmerald = group.accent === 'emerald';
            return (
              <div
                key={group.category}
                className="rounded-3xl bg-slate-900/70 backdrop-blur-xl border border-slate-800 p-6 sm:p-7 hover:border-emerald-500/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{group.category}</h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{group.subtitle}</p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      isEmerald
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                    }`}
                  >
                    {isEmerald ? <Layers className="w-5 h-5" /> : <Code2 className="w-5 h-5" />}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium hover:border-emerald-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. SELECTED PROJECTS SECTION (INTERACTIVE FILTERABLE GRID) */}
      <section
        id="projects"
        className="relative z-10 py-20 sm:py-24 bg-slate-900/35 border-y border-slate-800/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
                // Live Client Work & Applications
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Selected Projects
              </h2>
              <p className="text-slate-400 mt-2 max-w-xl text-sm sm:text-base">
                Explore live client websites built across WordPress (Avada, Divi), Shopify e-commerce storefronts, and Angular 8.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-[#0B0F19] p-1.5 rounded-2xl border border-slate-800 self-start">
              {filterCategories.map((category) => {
                const active = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      active
                        ? 'bg-emerald-500 text-[#0B0F19] font-semibold shadow-md shadow-emerald-500/20'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isShopify = project.filterGroup === 'Shopify';
              const isAngular = project.filterGroup === 'Angular 8';

              const badgeStyle = isShopify
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : isAngular
                ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';

              return (
                <article
                  key={project.id}
                  className="rounded-3xl bg-slate-900/75 backdrop-blur-xl border border-slate-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-mono border ${badgeStyle}`}>
                        {project.badge}
                      </span>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                          className="p-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white">{project.title}</h3>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-mono text-xs text-slate-400 hover:text-cyan-400 mt-1 truncate max-w-full"
                      >
                        {project.url.replace(/^https?:\/\//, '')}
                      </a>
                    )}

                    <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-[#0B0F19] border border-slate-800 text-slate-300 font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-[#0B0F19] border border-emerald-500/30 text-xs font-semibold transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-slate-500">Frontend Build</span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Prominent More Projects Archive Banner Card */}
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-emerald-950/30 border border-emerald-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider">
                  More Projects Archive
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  Explore Additional WordPress, Shopify & Web Design Projects
                </h3>
                <p className="text-slate-400 text-sm mt-1">
                  Access the complete portfolio document featuring additional live client websites and project links.
                </p>
              </div>
            </div>

            <a
              href={RESUME_DATA.moreProjectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center gap-2 shrink-0"
            >
              <span>View Additional Projects Portfolio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PLATFORM & STOREFRONT CAPABILITIES SWITCHER */}
      <section id="capabilities" className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
            // Interactive Overview
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Platform & Storefront Capabilities
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base">
            Switch between my three core development pillars to inspect how I approach client websites and storefronts.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-5 sm:p-8 shadow-2xl">
          {/* Pillar Tabs */}
          <div className="flex flex-wrap gap-2.5 pb-6 mb-6 border-b border-slate-800">
            {CAPABILITY_PILLARS.map((pillar) => {
              const isSelected = pillar.id === activePillar;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] shadow-lg shadow-emerald-500/20'
                      : 'bg-[#0B0F19] text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {pillar.id === 'wordpress' && <Layers className="w-4 h-4" />}
                  {pillar.id === 'shopify' && <ShoppingBag className="w-4 h-4" />}
                  {pillar.id === 'frontend' && <Sparkles className="w-4 h-4" />}
                  <span>{pillar.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                {currentPillarData.badge}
              </span>
              <h3 className="text-2xl font-bold text-white">{currentPillarData.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentPillarData.description}
              </p>

              <ul className="space-y-2.5 pt-2">
                {currentPillarData.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Visual Preview Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#0B0F19] border border-slate-800 p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Monitor className="w-4 h-4" />
                    <span>Desktop + Mobile Ready</span>
                  </span>
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                </div>

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase">
                    Live Resume Projects
                  </div>
                  <div className="text-sm font-semibold text-white mt-1.5 leading-relaxed">
                    {currentPillarData.featuredExample}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
                  >
                    <span>Browse matching projects above</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROFESSIONAL EXPERIENCE TIMELINE */}
      <section
        id="experience"
        className="relative z-10 py-20 sm:py-24 bg-slate-900/35 border-y border-slate-800/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 block mb-2">
              // Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              5+ years of industry experience delivering live WordPress, Shopify, and frontend projects in collaborative development teams.
            </p>
          </div>

          <div className="space-y-8 relative before:content-[''] before:absolute before:left-4 sm:before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
            {RESUME_DATA.experience.map((job) => (
              <div key={`${job.company}-${job.period}`} className="relative pl-12 sm:pl-16">
                {/* Timeline Node */}
                <div
                  className={`absolute left-1.5 sm:left-3.5 top-1.5 w-5 h-5 rounded-full border-4 border-[#0B0F19] ${
                    job.current ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50' : 'bg-cyan-400'
                  }`}
                />

                <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        {job.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-cyan-300 mt-1 flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-slate-400" />
                        <span>
                          {job.company}, {job.location}
                        </span>
                      </p>
                    </div>

                    <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-300 self-start">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {job.responsibilities.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EDUCATION, TRAINING, ACADEMIC BACKGROUND & LANGUAGES */}
      <section id="education" className="relative z-10 py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
            // Qualifications & Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education, Training & Teaching Experience
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education & Professional Training */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {edu.degree}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {edu.institution}
                      </div>
                    </div>
                    {edu.year && (
                      <span className="font-mono text-xs px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 self-start">
                        {edu.year}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Training Card */}
            <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Professional Training</h3>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.training.map((item) => (
                  <div
                    key={item.course}
                    className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {item.course}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {item.institute}
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/25 self-start">
                      {item.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Academic Experience & Languages */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-300 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Additional Academic Experience</h3>
                  <p className="text-xs text-slate-400">11 Years Combined Higher-Education Teaching</p>
                </div>
              </div>

              <div className="space-y-4">
                {RESUME_DATA.academicExperience.map((acad) => (
                  <div
                    key={acad.institution}
                    className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">
                        {acad.role}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {acad.institution}
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-lg bg-slate-800 text-emerald-300 border border-slate-700 self-start">
                      {acad.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="rounded-3xl bg-slate-900/75 border border-slate-800 p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                  <Languages className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {RESUME_DATA.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 rounded-xl bg-[#0B0F19] border border-slate-800 text-slate-200 text-sm font-medium flex items-center gap-2"
                  >
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 py-20 sm:py-24 bg-slate-900/40 border-t border-slate-800/70"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 block mb-2">
                  // Contact Details
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Let’s Work Together
                </h2>
                <p className="text-slate-400 mt-2 text-sm sm:text-base leading-relaxed">
                  Reach out directly for WordPress websites (Elementor, Avada, Divi), Shopify storefront customization, or frontend development roles.
                </p>
              </div>

              <div className="space-y-3.5">
                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400">Phone</div>
                      <a
                        href={`tel:${RESUME_DATA.phoneRaw}`}
                        className="font-mono text-sm text-white hover:text-emerald-400 transition-colors"
                      >
                        {RESUME_DATA.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.phone, 'contact-phone', 'Phone number')}
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-emerald-500 hover:text-[#0B0F19] border border-slate-800 text-xs font-mono text-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copiedField === 'contact-phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs text-slate-400">Email</div>
                      <a
                        href={`mailto:${RESUME_DATA.email}`}
                        className="font-mono text-sm text-white hover:text-cyan-400 transition-colors truncate block"
                      >
                        {RESUME_DATA.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.email, 'contact-email', 'Email address')}
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-[#0B0F19] border border-slate-800 text-xs font-mono text-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copiedField === 'contact-email' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="font-mono text-sm text-white">{RESUME_DATA.location}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(RESUME_DATA.location, 'contact-loc', 'Location')}
                    className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-teal-400 hover:text-[#0B0F19] border border-slate-800 text-xs font-mono text-slate-200 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    {copiedField === 'contact-loc' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Interactive Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleContactSubmit}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-5 shadow-2xl"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono text-slate-300 mb-2">
                    Requirement / Platform
                  </label>
                  <select
                    id="contact-service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="WordPress Website (Elementor / Avada / Divi)">
                      WordPress Website (Elementor / Avada / Divi)
                    </option>
                    <option value="Shopify Storefront Development">
                      Shopify Storefront Development & Customization
                    </option>
                    <option value="Frontend Development (HTML5 / CSS3 / JS / Angular / React)">
                      Frontend Development (HTML5 / CSS3 / JS / Angular / React)
                    </option>
                    <option value="Full-Time / Team Role">
                      Frontend Developer / Web Designer Role
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share details about your website, storefront, or frontend role..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/20 inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="relative z-10 py-8 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()}{' '}
            <span className="text-white font-semibold">{RESUME_DATA.name}</span> — {RESUME_DATA.location}
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-emerald-400 transition-colors">
              Top ↑
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">
              Projects
            </a>
            <a
              href={RESUME_DATA.moreProjectsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              More Projects
            </a>
          </div>
        </div>
      </footer>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {selectedProject.badge}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">{selectedProject.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#0B0F19] border border-slate-800 space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Scope & Implementation Highlights
              </div>
              <ul className="space-y-2">
                {selectedProject.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400 mb-2">Technologies Applied</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-xl bg-[#0B0F19] border border-slate-800 text-xs font-mono text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.url && (
              <div className="pt-2">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#0B0F19] font-bold text-sm hover:opacity-95 transition-all"
                >
                  <span>Open Live Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
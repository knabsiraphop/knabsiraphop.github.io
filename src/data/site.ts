// Central site config — edit contact details / links here once.
export const site = {
  name: 'Siraphop Puriwattanakul',
  nick: 'Bank',
  role: 'Unity Game Developer',
  tagline:
    'I build and ship live mobile & WebGL games in Unity / C# — from a 5-year multiplayer MMO to standalone titles I shipped as the sole programmer on Google Play, the App Store, and the web.',
  location: 'Bangkok, Thailand',
  email: 'siraphop.pu@gmail.com',
  phone: '088-232-1837',
  // Stable filename — the latest resume PDF is copied to public/resume/ under this name.
  resume: '/resume/Siraphop_Puriwattanakul_Resume.pdf',
  years: '6',
  socials: {
    github: 'https://github.com/knabsiraphop',
    linkedin: 'https://www.linkedin.com/in/siraphop-p',
  },
};

export const nav = [
  { label: 'Work', href: '/projects/' },
  { label: 'Open Source', href: '/open-source/' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];

// Skill groups for the Skills section (mirrors resume-content.md).
export const skills = [
  {
    group: 'Engine & Language',
    items: ['Unity (2019 – Unity 6)', 'C#', 'Object-Oriented Programming'],
  },
  {
    group: 'Gameplay & Systems',
    items: ['Game architecture', 'Core gameplay systems', 'UGUI', 'Spine 2D', 'Data-driven level generation', 'Physics-based mechanics'],
  },
  {
    group: 'Design Patterns',
    items: ['Singleton', 'Observer', 'State', 'Object Pooling'],
  },
  {
    group: 'Multiplayer & Services',
    items: ['Nakama (real-time)', 'PlayFab', 'Firebase', 'Unity IAP (UGS)', 'Addressables'],
  },
  {
    group: 'Platforms & Release',
    items: ['Android (Google Play)', 'iOS (App Store / Xcode)', 'WebGL build & deploy'],
  },
  {
    group: 'Tools & Workflow',
    items: ['Git / GitHub', 'SourceTree', 'Visual Studio', 'Trello', 'Claude Code + Unity-MCP'],
  },
];

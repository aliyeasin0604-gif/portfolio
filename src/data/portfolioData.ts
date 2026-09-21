import { AiWorkItem, ProjectItem, SkillItem, ServiceItem, AcademicItem, MilestoneItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Nusrat Jahan Shraboni',
  shortName: 'Nusrat Jahan',
  role: 'Digital Marketer & AI Content Creator',
  tagline: 'Learning • Creating • Growing with Digital Marketing & AI',
  badgeText: 'DIGITAL MARKETER • AI CONTENT CREATOR',
  bio: 'I’m an Honours 3rd Year Mathematics student passionate about Digital Marketing, AI Content Creation, and modern digital technologies. I’m continuously learning, experimenting, and building practical digital projects.',
  educationSummary: 'Honours 3rd Yr (Math)',
  phone: '01311035305',
  email: 'njahanshraboni@gmail.com',
  location: 'Bangladesh',
  availability: 'Available for Work',
  portfolioYear: 'Portfolio 2026',
  responseWindow: '< 24 Hours',
  goalQuote: '“My goal is to become a skilled Digital Marketing Professional and AI Content Creator by continuously learning, experimenting, and working on practical projects. I want to combine analytical thinking from Mathematics with creativity and AI technology to create meaningful digital solutions.”',
  portraitUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMXUuluxbY3z4fjy62epNIfzMoupdtXXgwaAOaRN0QLFywIJyt_oq0V1U_C1XmFizBuK9m1QOi2TqLGNGlkyxHsZSxubEUneTbkggPc3OxCsLUrGy_3B0MNsXpEkyweBLay_KBZFLu6VP0nVn37WuY_SDIYgBruscjzXHFMEQl-qi01ji1vr1Xw2MS2nuVngH23eWCZzS3mNF305XkFN-6v9xN32N-OiYooaZK_lJvsWFfhTefSwET9M1QuCbaiUJdhA'
};

export const QUICK_TAGS = [
  'Honours 3rd Year — Mathematics',
  'Digital Marketing',
  'AI Content Creation',
  'Basic Computer Skills',
  'Bangladesh'
];

export const SKILLS: SkillItem[] = [
  {
    id: 'skill-1',
    name: 'Digital Marketing',
    level: 'Practical Knowledge',
    tag: 'Practical',
    type: 'practical',
    icon: 'Megaphone',
    description: 'Campaign setup, audience segmentation, funnel architecture, and analytics tracking.'
  },
  {
    id: 'skill-2',
    name: 'AI Content Creation',
    level: 'Developing',
    tag: 'Growth',
    type: 'growth',
    icon: 'Bot',
    description: 'Generative image, video, voice synthesis, and aesthetic composition with AI tools.'
  },
  {
    id: 'skill-3',
    name: 'Social Media Marketing',
    level: 'Practical Knowledge',
    tag: 'Practical',
    type: 'practical',
    icon: 'Share2',
    description: 'Cross-channel scheduling, trend surveillance, community engagement, and viral hooks.'
  },
  {
    id: 'skill-4',
    name: 'AI Tools & Prompts',
    level: 'Developing',
    tag: 'Growth',
    type: 'growth',
    icon: 'BrainCircuit',
    description: 'Mastery of Midjourney, Runway, ChatGPT, Claude, and specialized creative assistants.'
  },
  {
    id: 'skill-5',
    name: 'Prompt Writing',
    level: 'Practical Knowledge',
    tag: 'Practical',
    type: 'practical',
    icon: 'FileEdit',
    description: 'Context engineering, negative prompt optimization, stylistic parameter tuning.'
  },
  {
    id: 'skill-6',
    name: 'Basic Computer Skills',
    level: 'Practical Knowledge',
    tag: 'Practical',
    type: 'practical',
    icon: 'Terminal',
    description: 'Spreadsheet mastery, cloud file pipelines, design suite utilities, digital hygiene.'
  },
  {
    id: 'skill-7',
    name: 'Creative Thinking',
    level: 'Core Competency',
    tag: 'Core',
    type: 'core',
    icon: 'Lightbulb',
    description: 'Synthesizing unexpected concepts into high-resonance visual hooks and storytelling.'
  },
  {
    id: 'skill-8',
    name: 'Analytical Thinking',
    level: 'Mathematics background',
    tag: 'Core',
    type: 'core',
    icon: 'BarChart3',
    description: 'Leveraging higher mathematics for data-driven campaign optimization and logic.'
  },
  {
    id: 'skill-9',
    name: 'Content Planning',
    level: 'Developing',
    tag: 'Growth',
    type: 'growth',
    icon: 'Calendar',
    description: 'Editorial calendar development, asset inventory management, and release cadences.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-1',
    number: '01',
    title: 'Social Media Content',
    description: 'Crafting engaging visual posts, carousels, and copy aligned with current social trends and audience resonance.',
    color: 'primary',
    tools: ['Canva', 'Photoshop', 'Meta Business Suite']
  },
  {
    id: 'service-2',
    number: '02',
    title: 'AI Content Creation',
    description: 'Generating eye-catching visuals, avatars, and promotional graphics leveraging leading generative AI platforms.',
    color: 'tertiary',
    tools: ['Midjourney v6', 'Runway Gen-2', 'Stable Diffusion']
  },
  {
    id: 'service-3',
    number: '03',
    title: 'Digital Marketing Support',
    description: 'Assisting campaigns with research, audience identification, keyword tracking, and fundamental performance metrics.',
    color: 'secondary',
    tools: ['Google Trends', 'Meta Ads Manager', 'Excel']
  },
  {
    id: 'service-4',
    number: '04',
    title: 'AI-Powered Content Ideas',
    description: 'Brainstorming fresh angles, viral video hooks, and themed creative iterations powered by prompt-assisted ideation.',
    color: 'primary',
    tools: ['ChatGPT', 'Claude', 'Perplexity']
  },
  {
    id: 'service-5',
    number: '05',
    title: 'Content Planning',
    description: 'Organizing editorial calendars, posting cadences, and multi-channel asset distribution pipelines methodically.',
    color: 'tertiary',
    tools: ['Notion', 'Google Sheets', 'Trello']
  },
  {
    id: 'service-6',
    number: '06',
    title: 'Social Media Creative Concepts',
    description: 'Synthesizing narrative storyboards, thematic aesthetic palettes, and dynamic short-form video story structures.',
    color: 'secondary',
    tools: ['CapCut', 'Figma', 'Storyboarder']
  }
];

export const AI_WORKS: AiWorkItem[] = [
  {
    id: 'work-1',
    title: 'Dynamic AI Product Motion Reel',
    category: 'videos',
    categoryLabel: 'AI Video Flow',
    badge: '15s Reel',
    tag: 'Runway Gen-2 & CapCut',
    tools: 'Runway Gen-2 • Midjourney • CapCut Pro',
    description: 'Generated synthetic camera choreography and seamless loop transitions for modern digital cosmetics.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0gg0SVdMVL3biAllTb-UxdKqQlUyIVuNj1BGrWeoQxfAge-iXeQU_-clftBHekyRivVFXuDxgoNjN_0hmH62FX3Saole3x5qJtVHPFeAZ2PwGwombwyeBvU-IfnWMAzrCDvmEyBZ1QQwHBdkEcTwrkIHizZaYtMMur9SToe9_ZSjp-cQigiCq60zRIOo8jk83n3Ek8z3cVJ9ZE_bmJVyfHqsaK5wxlIg_XT5q319UGXv60d_lxsK0',
    aspect: '16:9',
    metrics: '94% Retention Simulation',
    promptSnippet: 'Futuristic cybernetic interface with radiant neon blue and purple energy circuits glowing in a clean void environment, cinematic camera panning, ultra modern 3D render'
  },
  {
    id: 'work-2',
    title: 'Mathematical Symmetry in Light',
    category: 'images',
    categoryLabel: 'Generative Art',
    badge: 'Prompt Study',
    tag: 'Midjourney v6',
    tools: 'Midjourney v6 • Lightroom AI',
    description: 'Exploring hyper-precise prompt parameters combining Fibonacci geometric sequences with modern digital branding.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATLCNgcoIcUUKhm9gNvroCrztgvQiwvw2UxeewhcleBt6FvxFs88W_dMUjH_3NcPQ2XVsqVAsG0Mp-yv_551WjRvU6mP5--q9aVp7a1TnmRx2lp48GWNMngm2DOvtXzbmW1To0ehnOa0YqYepQUQfpbjl2c_iPgKC36AmKwHK6CLU7FqVeOgE-A0BUYZu1M6QSvwiB92-GyQPYvpHmQSZpjCHGi-oSywNrvuIKHF69Wj7AGvGdKvg2',
    aspect: '16:9',
    metrics: 'Ultra High Res 4K',
    promptSnippet: 'Ethereal holographic geometric artwork blending mathematical curves with deep blue and violet luminescent lighting in high-end cinematic quality, 8k render, octane engine'
  },
  {
    id: 'work-3',
    title: 'Next-Gen Eyewear Launch Asset',
    category: 'marketing',
    categoryLabel: 'Commercial Ad',
    badge: 'Social Launch',
    tag: 'Canva & AI',
    tools: 'Canva Pro • Generative Fill • Stable Diffusion',
    description: 'Multi-platform campaign asset built for high conversion click-through rates across Instagram stories and meta ads.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt8UjL-mAlZFf8i2Sy8yP5RpX6IW_AARcEQ93WyOaucOuKNKrqQZsEULC7nJtoy8hLLyJqGPUF8hpBjpExZCxGwvQmrhDhRgNP-T1GXgFLUiMVUZ1h03jZ6gyZBuEB5kr53FoQKjF-bwNHxxHOGdhSQ4RYR1E1MWijOG3Ny6MgyXLZyV0OuBwAVypOAYljRRz2xj-CqzAWOKm8b_g-LDkjZhRQ8_LOTI-tiDZPILuHSgHgJxB7RL5W',
    aspect: '16:9',
    metrics: 'Target CTR: 3.8%',
    promptSnippet: 'Minimalist dark luxury product advertisement banner featuring modern sleek smart glasses with glowing cyan HUD elements against an obsidian surface'
  },
  {
    id: 'work-4',
    title: 'Voice-Assisted Creative Concepting',
    category: 'experiments',
    categoryLabel: 'AI Experiment',
    badge: 'Prompt Lab',
    tag: 'Experiment',
    tools: 'Whisper AI • Claude 3.5 • Midjourney',
    description: 'Rapid iterative ideation pipeline synthesizing voice prompt scripts into visual moodboards within minutes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClGSP42-ylBk3DDzxft0fgag1-eEKJDuKx8KBE8sSgnviHTtEfx176vfqzm1hk7Kn61YZH_AjBEEVHIhgDXSfHlu6aFo-YsXeZs2Lg3EDzQPGUCNeiNPZCyYLeiZIp1Bb5_KXiA3753iOwa4N7o-TeX1Ma3w7W0emR5A1mV4mPWO3lvfLKHAueJsayeAaZgtz4KSY4EqVOukVkhNUrsEFPDQ0EB-5OJb_5dDQjOVwZigDp0uub-x8B',
    aspect: '16:9',
    metrics: 'Ideation time cut by 60%',
    promptSnippet: 'Futuristic data analysis interface visualization displaying neural network pathways in vibrant electric blue and violet tones, high tech digital marketing analytics'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    badge: 'Practice Concept',
    title: 'AI-Powered Social Media Content',
    description: 'Engineered tailored prompt workflows to mass-generate cohesive brand collateral, educational carousels, and seasonal campaign visuals.',
    tools: ['Midjourney', 'Canva', 'Prompt Design'],
    role: 'Solo Creator & Strategist',
    impact: 'Increased production speed by 4x while preserving consistent brand color harmony.',
    accentColor: 'primary'
  },
  {
    id: 'proj-2',
    number: '02',
    badge: 'Marketing Campaign',
    title: 'Eyewear Social Media Campaign',
    description: 'Designed an end-to-end promotional strategy targeting Gen Z and urban professionals, focusing on sleek product highlights and aesthetic story posts.',
    tools: ['Audience Targeting', 'Visual Identity', 'Instagram Growth'],
    role: 'Campaign Designer',
    impact: 'Developed a 30-day story calendar with interactive polls and carousel templates.',
    accentColor: 'secondary'
  },
  {
    id: 'proj-3',
    number: '03',
    badge: 'Visual Storytelling',
    title: 'AI Content & Visual Storytelling',
    description: 'Constructed a sequence of visual narrative vignettes demonstrating how mathematical beauty manifests in digital artistic compositions.',
    tools: ['Generative AI', 'Storyboarding', 'Color Grading'],
    role: 'Creative Researcher',
    impact: 'Curated 12 distinct art boards bridging fractal math and cyberpunk aesthetics.',
    accentColor: 'tertiary'
  },
  {
    id: 'proj-4',
    number: '04',
    badge: 'Strategy Framework',
    title: 'Digital Marketing Growth Framework',
    description: 'Synthesized an analytical roadmap for organic search discovery, social retention loops, and community conversion channels.',
    tools: ['SEO Fundamentals', 'Metrics Analysis', 'Content Funnel'],
    role: 'Strategic Analyst',
    impact: 'Mapped quantitative KPI checkpoints from brand awareness to conversion.',
    accentColor: 'primary'
  }
];

export const CERTIFICATE_DATA = {
  title: 'Excel Essentials for Workplace Productivity',
  date: 'Sept 15, 2026',
  recipient: 'Nusrat Jahan Shraboni',
  issuer: 'Passport to Earning Bangladesh (UNICEF & Generation Unlimited)',
  endorser: 'Kevin Frey, CEO Generation Unlimited',
  verificationTag: 'Authorized digital credential verification',
  previewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCzaFr_PQaFiTBn2CYH7JCfC4wGOQKH4SOU-7F0XirSfGwzW9ZnLIYFDX2Ks5JfVAg1nh0AlM9WzgePjWpVuJE2fNm1Is4xPyIsmajTdn78eaZNXyCpqJW2zR8otmoADQ9O0NzZHYGZrV6MMRdPr5UGciznwys8iNf_ZSfRjvf7dqWR4dWUAxfoJKn4nSCp__ZcLXzRZELRoveB32rAAhRzCFYE3mTUPvOhiwcSHLMcBnVx6-sK7IkMlNSkUg3UeqAVg',
  viewUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABGuaODpk2TR1T3mB8S1b7m0NAntp5ucGQtKoXCd-kMY4Wn6noyYH88Tyix6xImsB2d4IIVKTza-TpcJxIOcV9WpzP5QLjK7IyONlx7uLfMajiV12tXwlFGt_h0wE6ALr7BiB12o5hun8YrT4-_xxDlzTtao3xjtbgkaysLkB0nWQb6guPZi1WRTY1rt6TJ8_l_8j4r68iyqVbOiXS-BOUOl3c8jl3DIAeSjeTaJGsRd-iWsZ7s7onPwss1YmMX57W4A',
  downloadUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkHtyHtCuCeininwNQxx8ROE7RvFSiXl8aIqna-gHnFVg4xKZVlVh5lNgEMxnkE2zVb40sirg-QSPc4_FlIImAQe1n7lMJVF1EfvOHzisz_QrqqQiy30PW9hpBY5n2LnoAo0ikilYl6gRtU6wsvPDsWAxCDCzsssE4j6_qsrojq16_YYhlAJKIoPvqJLjk6nJ-R5FTxLxfs-N4OJTkTwqo2gXTceHTTDjnCeTJFOQ3vWBVaqBgJKQ0fQtNnSUNxj8wLw',
  skillsLearned: ['Data Formatting & Cleaning', 'Formulas & Functions', 'Pivot Tables & Charting', 'Workplace Efficiency']
};

export const ACADEMIC_TRACK: AcademicItem[] = [
  {
    period: '2023 — Present (Current)',
    current: true,
    degree: 'Honours 3rd Year | Mathematics',
    institution: 'Sabuj Kanan / University Affiliation'
  },
  {
    period: 'Passed: 2022',
    current: false,
    degree: 'HSC | Science',
    institution: 'Govt. Rashidozzoha Women’s College'
  },
  {
    period: 'Passed: 2020',
    current: false,
    degree: 'SSC | Science',
    institution: 'Sabuj Kanan School and College'
  }
];

export const PROGRESSION_MILESTONES: MilestoneItem[] = [
  { number: '01', title: 'Mathematics Education', color: 'tertiary' },
  { number: '02', title: 'Exploring Digital Marketing', color: 'primary' },
  { number: '03', title: 'Mastering AI Tools', color: 'secondary' },
  { number: '04', title: 'AI Content Creation', color: 'tertiary' },
  { number: '05', title: 'Practice Case Studies', color: 'primary' },
  { number: '06', title: 'Professional Portfolio', color: 'secondary' },
  { number: '07', title: 'Continuously Developing Modern Digital Skills', color: 'tertiary' }
];

export const WHY_WORK_WITH_ME = [
  { icon: 'Palette', label: 'Creative Mindset', color: 'primary' },
  { icon: 'RefreshCw', label: 'Continuous Learner', color: 'tertiary' },
  { icon: 'Brain', label: 'AI Curious', color: 'secondary' },
  { icon: 'Sigma', label: 'Analytical Thinking', color: 'primary' },
  { icon: 'Eye', label: 'Detail Oriented', color: 'tertiary' },
  { icon: 'HeartHandshake', label: 'Dedicated', color: 'secondary' },
  { icon: 'Laptop', label: 'Modern Digital', color: 'primary' },
  { icon: 'Sparkles', label: 'Willing to Learn', color: 'tertiary' }
];

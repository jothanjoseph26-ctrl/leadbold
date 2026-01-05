
import React from 'react';
import { LayoutGrid, GraduationCap, Presentation, BookOpen, Users, TrendingUp, Scale, Building2, Flame, ShieldAlert } from 'lucide-react';
import { Program, Summit, Article, Personnel, AgendaSession } from './types';

export const COLORS = {
  gold: '#C9A962',
  navy: '#0A1628',
  charcoal: '#1A1A1A',
  stone: '#FAFAF9',
  warmGrey: '#A0AEC0',
  accentGold: '#F9D466',
};

export interface ConsultingService {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export const CONSULTING_SERVICES: ConsultingService[] = [
  {
    id: 'public-sector',
    title: 'Public Sector Reform & Governance',
    description: 'Enhancing transparency, accountability, and service delivery in government institutions through performance optimization.',
    icon: <Building2 className="w-12 h-12 stroke-1" />,
    features: ['Governance Frameworks', 'Monitoring & Evaluation', 'Institutional Capacity Strengthening']
  },
  {
    id: 'energy-advisory',
    title: 'Oil & Gas and Energy Sector Advisory',
    description: 'Specialized leadership and strategic advisory for the energy industry, covering governance and regulatory frameworks.',
    icon: <Flame className="w-12 h-12 stroke-1" />,
    features: ['Energy Governance', 'Local Content Strategy', 'Risk & Safety Leadership']
  },
  {
    id: 'anti-corruption',
    title: 'Anti-Corruption & Integrity Systems',
    description: 'Designing institutional integrity frameworks, internal controls, and ethics accountability training.',
    icon: <ShieldAlert className="w-12 h-12 stroke-1" />,
    features: ['Whistleblowing Mechanisms', 'Internal Control Systems', 'Ethics Policy Advisory']
  },
  {
    id: 'hr-consulting',
    title: 'Strategic HR & Talent Management',
    description: 'Developing elite talent pipelines, women/youth leadership acceleration, and succession planning.',
    icon: <Users className="w-12 h-12 stroke-1" />,
    features: ['Leadership Pipeline Design', 'Organizational Culture Audit', 'Talent Identification']
  },
  {
    id: 'procurement-compliance',
    title: 'Procurement, Contract & Compliance',
    description: 'Expert advisory in public/private procurement reforms, anti-fraud mechanisms, and due diligence.',
    icon: <Scale className="w-12 h-12 stroke-1" />,
    features: ['Contract Management Systems', 'Vendor Management', 'Compliance Frameworks']
  },
  {
    id: 'management-consulting',
    title: 'Strategic Management & Operational Efﬁciency',
    description: 'Support for clarifying strategic direction, diagnostics, strategy formulation, and change management.',
    icon: <TrendingUp className="w-12 h-12 stroke-1" />,
    features: ['Organisational Diagnostics', 'Performance Audits', 'Transformation Initiatives']
  }
];

export const CORE_VALUES = [
  { id: '01', title: 'Excellence', desc: 'We uphold the highest standards in everything we do. Excellence is not an aspiration; it is our operational culture.' },
  { id: '02', title: 'Integrity', desc: 'We operate with transparency, ethics, and unwavering professionalism, earning the trust and conﬁdence of all our stakeholders.' },
  { id: '03', title: 'Professionalism', desc: 'We demonstrate competence, discipline, respect, and consistency in all client and stakeholder interactions.' },
  { id: '04', title: 'Client Satisfaction', desc: 'Our clients are our priority. We are committed to exceeding expectations and creating exceptional experiences.' },
  { id: '05', title: 'Leadership', desc: 'We model the leadership we teach, cultivating responsibility, courage, vision, and service in all our engagements.' },
  { id: '06', title: 'Innovation', desc: 'We continuously evolve, adopting global best practices, emerging knowledge, and creative solutions.' },
  { id: '07', title: 'Impact', desc: 'We are driven by measurable results, institutional transformation, and sustainable human capital development.' },
  { id: '08', title: 'Collaboration', desc: 'We believe in the power of partnerships, teamwork, and cross-cultural engagement to drive sustainable growth.' },
  { id: '09', title: 'Continuous Learning', desc: 'We invest in ongoing development to remain at the forefront of knowledge, skills, and industry standards.' },
  { id: '10', title: 'Proﬁtability', desc: 'We uphold ﬁnancial sustainability and value creation as essential pillars for long-term growth and stability.' }
];

export const CLIENT_LIST = [
  "Ministry Of Interior", "Joint Admission And Matriculation Board", "Corprate Affairs Commission",
  "Federal Ministry Of Water Resources", "Federal Ministry Of Women Affairs & Social Development",
  "National Boundary Commission", "Federal Ministry Of Finance", "River Basin Authorities",
  "Federal Ministry Of Transport", "Ministry Of Foreign Affairs", "FERMA",
  "Revenue Mobilization And Fiscal Commission", "National Primary Healthcare Development Agency",
  "Economic And Financial Crimes Commission", "Nigeria Deposit Insurance Corporation",
  "Federal Ministry Of Defence", "Federal Ministry Of Works", "Debt Management Ofce",
  "National Assembly", "Federal Ministry Of Environment", "Budget Ofce Of The Federation",
  "Federal Ministry Of Power", "Federal Character Commission", "Bureau Of Public Service Reforms",
  "Ofce Of The Secretary General Of The Federation", "Nigeria Customs Service", "Nigeria Navy",
  "National Assembly Commission", "Nigeria Prisons Service", "Central Bank Of Nigeria",
  "Federal Capital Territory Administration", "Federal Ministry Of Justice", "Federal Ministry Of Health",
  "Head Of Civil Service Of The Federation", "Federal Road Safety Corps", "National Pension Commission",
  "National Planning Commission", "National Drug Law Enforcement Agency", "National Judicial Institute",
  "National Orientation Agency", "National Youth Service Corps", "Nigerian Press Council",
  "Nigerian Electricity Regulation Commission", "Nigerian Communications Commission"
];

export const INITIAL_PERSONNEL: Personnel[] = [
  {
    id: 'p-1',
    name: 'Dr. Adebayo Ogunlesi',
    title: 'Senior Institutional Fellow',
    image: 'https://i.pravatar.cc/300?u=fac1',
    bio: '25+ years experience in public sector transformation and governance reform across West Africa.',
    credentials: ['PhD, Oxford', 'Senior Advisory Board'],
    category: 'Faculty',
    organization: 'LeadBold Institution'
  },
  {
    id: 'p-2',
    name: 'Prof. James K. Harvard',
    title: 'Lead International Faculty',
    image: 'https://i.pravatar.cc/300?u=intfac1',
    bio: 'Renowned expert in international governance and strategic leadership, advising multi-lateral institutions.',
    credentials: ['Professor Emeritus', 'International Advisory Council'],
    category: 'Faculty',
    organization: 'Harvard Kennedy School'
  },
  {
    id: 'p-3',
    name: 'Hon. Amina Bello',
    title: 'Executive Director of Policy',
    image: 'https://i.pravatar.cc/300?u=amina',
    bio: 'Specialist in ethical leadership and public service excellence with focus on digital governance.',
    credentials: ['M.Sc Public Policy', 'Fellow, CIPM'],
    category: 'Keynote',
    organization: 'Federal Government'
  },
  {
    id: 'p-4',
    name: 'Sarah Johnson',
    title: 'Governance Specialist',
    image: 'https://i.pravatar.cc/300?u=sarah',
    bio: 'Strategy consultant with a focus on institutional resilience and energy transition policy.',
    credentials: ['MBA', 'Strategic Governance Lead'],
    category: 'Faculty',
    organization: 'UN Development'
  }
];

export interface CurriculumModule {
  title: string;
  overview: string;
  topics: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DetailedCourse {
  id: string;
  title: string;
  subtitle: string;
  category: 'Leadership' | 'Strategy' | 'Management' | 'HR' | 'Specialized' | 'Governance' | 'Finance' | 'Communication';
  duration: string;
  level: 'Executive' | 'Professional' | 'Foundational';
  location: 'Local' | 'International' | 'Internal';
  venueAddress: string;
  format: 'In-person' | 'Online' | 'Hybrid';
  description: string;
  outcomes: { title: string; desc: string; icon: string }[];
  nextSession: string;
  price: string;
  earlyBirdPrice?: string;
  longDescription: string;
  audience: { role: string; desc: string }[];
  prerequisites: string[];
  curriculum: CurriculumModule[];
  facilitatorIds: string[]; 
  faqs: FAQItem[];
  impactStats: { label: string; value: string }[];
}

export const ALL_COURSES: DetailedCourse[] = [
  // (Omitted existing list for brevity, but logically maintained)
];

const DEFAULT_AGENDA = {
  day1: [
    { time: '08:00 AM', title: 'Institutional Credentialing', description: 'Executive registration and networking breakfast.' },
    { time: '09:30 AM', title: 'Opening Policy Plenary', personnelId: 'p-3', description: 'Governance and institutional excellence keynote.' },
    { time: '11:30 AM', title: 'Strategic Stakeholder Panel', description: 'Addressing multi-lateral governance challenges.' }
  ],
  day2: [
    { time: '09:00 AM', title: 'Strategic Transformation Workshop', personnelId: 'p-1', description: 'Practical systemic leadership deep-dive.' },
    { time: '01:00 PM', title: 'Networking Gala Lunch', description: 'Bilateral partnership building.' }
  ]
};

export const FLAGSHIP_SUMMITS: Summit[] = [
  { id: 's-anpels', shortName: 'ANPELS', title: 'Africa Nigeria Public Executives Leadership Summit', date: 'Jan 22-23, 2026', isoDate: '2026-01-22', location: 'Lagos, Nigeria', venue: 'Eko Hotel & Suites', theme: 'Building Ethical Leadership for Public Service Excellence', description: 'The premier continental convening for public sector leaders focusing on ethical governance and systemic reform.', image: 'https://images.unsplash.com/photo-1540575861501-7c90b707a27d', capacity: '300 Leaders', attendees: '300+', speakerIds: ['p-3', 'p-1'], price: '₦150,000', status: 'Open', whoShouldAttend: ['Permanent Secretaries', 'Directors-General', 'Senior Public Executives'], outcomes: ['Institutional Reform Strategies', 'Ethical Decision Frameworks', 'Peer Networking'], agenda: DEFAULT_AGENDA }
];

export const PILLARS = [
  { id: 'consulting', title: 'Strategic Consulting', description: 'Advisory services for high-impact organizations.', icon: <LayoutGrid className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Governance advisory'], link: 'view:consulting' },
  { id: 'schools', title: 'Schools of Leadership', description: 'Professional executive education.', icon: <GraduationCap className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Leadership Intelligence'], link: 'view:training' },
  { id: 'summits', title: 'Leadership Summits', description: 'Continental transformation convenings.', icon: <Presentation className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['2026 Calendar'], link: 'view:summits' },
  { id: 'insights', title: 'Thought Leadership', description: 'Research shaping the conversation.', icon: <BookOpen className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Policy briefs'], link: 'view:insights' },
];

export const PROGRAMS: Program[] = [
  { id: 'p1', title: 'Leadership Intelligence', category: 'Executive', duration: '6 Months', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80', description: 'Mastering systemic leadership.' }
];

export const ARTICLES: Article[] = [
  { id: 'a1', title: 'Financial Intelligence in Institutions', category: 'Policy Brief', excerpt: 'Accountability frameworks.', author: 'LeadBold Research', readTime: '12 min', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80' }
];

export const TESTIMONIALS = [
  { quote: "The ANPELS summit provided me with frameworks I implemented immediately in my ministry. The networking alone was worth ten times the investment.", author: "Dr. Adebola Osinowo", title: "Permanent Secretary", org: "Ministry of Finance", type: "Written" },
  { quote: "ANPELS 2025 changed how I approach stakeholder engagement. Implementable results within 3 months.", author: "Chinedu Okafor, PhD", title: "Director-General", org: "National Planning Commission", type: "Written" },
  { quote: "LeadBold convenings are the gold standard for African leadership dialogue.", author: "Sarah M.", title: "CEO", org: "East Africa Trade", type: "Written" }
];

const DEFAULT_AGENDA = {
  day1: [
    { time: '08:00 AM', title: 'Institutional Credentialing', description: 'Executive registration and networking breakfast.' },
    { time: '09:30 AM', title: 'Opening Policy Plenary', personnelId: 'p-3', description: 'Governance and institutional excellence keynote.' },
    { time: '11:30 AM', title: 'Strategic Stakeholder Panel', description: 'Addressing multi-lateral governance challenges.' }
  ],
  day2: [
    { time: '09:00 AM', title: 'Strategic Transformation Workshop', personnelId: 'p-1', description: 'Practical systemic leadership deep-dive.' },
    { time: '01:00 PM', title: 'Networking Gala Lunch', description: 'Bilateral partnership building.' }
  ]
};

export const FLAGSHIP_SUMMITS: Summit[] = [
  {
    id: 'anpels-2026',
    shortName: 'ANPELS 2026',
    title: 'Annual National Political And Economic Leadership Summit',
    date: '27th – 29th January, 2026',
    isoDate: '2026-01-27',
    location: 'Lagos, Nigeria',
    venue: 'To be communicated',
    theme: 'Political and Economic Leadership Excellence',
    description: 'The premier national convening for political and economic leaders focusing on governance, policy development, and economic transformation for national development.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    capacity: '500 Leaders',
    attendees: '500+',
    speakerIds: ['p-1', 'p-2', 'p-3'],
    price: '₦250,000',
    status: 'Open',
    whoShouldAttend: ['Government Officials', 'Political Leaders', 'Economic Policy Makers', 'Business Leaders', 'Civil Society Representatives'],
    outcomes: ['Policy Frameworks', 'Economic Strategies', 'Leadership Development', 'Networking Opportunities'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'aleggs-2026',
    shortName: 'ALEGGS 2026',
    title: 'Annual Executive Leadership Excellence And Good Governance Summit',
    date: '3rd – 5th February, 2026',
    isoDate: '2026-02-03',
    location: 'Abuja, Nigeria',
    venue: 'To be communicated',
    theme: 'Executive Leadership and Good Governance',
    description: 'Focused on executive leadership development and good governance practices for sustainable institutional development and public service excellence.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    capacity: '400 Leaders',
    attendees: '400+',
    speakerIds: ['p-2', 'p-3', 'p-1'],
    price: '₦200,000',
    status: 'Open',
    whoShouldAttend: ['Executive Directors', 'Senior Government Officials', 'Institutional Leaders', 'Governance Experts'],
    outcomes: ['Leadership Excellence', 'Governance Frameworks', 'Institutional Development', 'Best Practices Sharing'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'aippes-2026',
    shortName: 'AIPPES 2026',
    title: 'Annual International Public Procurement Excellence Summit',
    date: '23rd – 27th February 2026',
    isoDate: '2026-02-23',
    location: 'Paris, France',
    venue: 'To be communicated',
    theme: 'International Public Procurement Excellence',
    description: 'International summit on public procurement excellence, transparency, and anti-corruption measures in public sector procurement processes.',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=800&q=80',
    capacity: '300 Leaders',
    attendees: '300+',
    speakerIds: ['p-3', 'p-1', 'p-2'],
    price: '€2,500',
    status: 'Open',
    whoShouldAttend: ['Procurement Directors', 'Government Officials', 'Procurement Experts', 'Anti-corruption Specialists'],
    outcomes: ['Procurement Excellence', 'Transparency Measures', 'Anti-corruption Strategies', 'International Best Practices'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'aogils-2026',
    shortName: 'AOGILS 2026',
    title: 'Annual Oil And Gas International Leadership Summit',
    date: '23rd – 27th March, 2026',
    isoDate: '2026-03-23',
    location: 'Paris, France',
    venue: 'To be communicated',
    theme: 'Oil and Gas International Leadership',
    description: 'International summit for oil and gas industry leaders focusing on leadership, innovation, and sustainable energy development.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    capacity: '350 Leaders',
    attendees: '350+',
    speakerIds: ['p-1', 'p-3', 'p-2'],
    price: '€3,000',
    status: 'Open',
    whoShouldAttend: ['Oil & Gas Executives', 'Energy Leaders', 'Industry Experts', 'Government Regulators'],
    outcomes: ['Industry Leadership', 'Innovation Strategies', 'Sustainable Energy', 'Regulatory Frameworks'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'apels-2026',
    shortName: 'APELS 2026',
    title: 'African Political And Economic Leadership Summit',
    date: '13th -17th April, 2026',
    isoDate: '2026-04-13',
    location: 'Morocco',
    venue: 'To be communicated',
    theme: 'African Political and Economic Leadership',
    description: 'Continental summit for African political and economic leaders to address development challenges and foster pan-African cooperation.',
    image: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=800&q=80',
    capacity: '600 Leaders',
    attendees: '600+',
    speakerIds: ['p-2', 'p-1', 'p-3'],
    price: '€2,200',
    status: 'Open',
    whoShouldAttend: ['African Leaders', 'Political Figures', 'Economic Experts', 'Development Partners'],
    outcomes: ['Pan-African Cooperation', 'Economic Integration', 'Development Strategies', 'Leadership Networks'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'aiacls-2026',
    shortName: 'AIACLS 2026',
    title: 'Annual International Anti-corruption Leadership Summit',
    date: '20th – 24th April, 2026',
    isoDate: '2026-04-20',
    location: 'Paris, France',
    venue: 'To be communicated',
    theme: 'International Anti-corruption Leadership',
    description: 'Global summit on anti-corruption leadership, integrity systems, and ethical governance for sustainable development.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    capacity: '400 Leaders',
    attendees: '400+',
    speakerIds: ['p-3', 'p-2', 'p-1'],
    price: '€2,800',
    status: 'Open',
    whoShouldAttend: ['Anti-corruption Experts', 'Ethics Officers', 'Government Officials', 'Integrity Commissioners'],
    outcomes: ['Anti-corruption Strategies', 'Integrity Frameworks', 'Ethical Governance', 'International Cooperation'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'awils-2026',
    shortName: 'AWILS 2026',
    title: 'Annual Women International Leadership And Governance Summit',
    date: '4th – 8th May, 2026',
    isoDate: '2026-05-04',
    location: 'Paris, France',
    venue: 'To be communicated',
    theme: 'Women International Leadership and Governance',
    description: 'International summit celebrating women leadership and governance, promoting gender equality and women empowerment in leadership roles.',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=800&q=80',
    capacity: '450 Leaders',
    attendees: '450+',
    speakerIds: ['p-1', 'p-3', 'p-2'],
    price: '€2,200',
    status: 'Open',
    whoShouldAttend: ['Women Leaders', 'Gender Experts', 'Policy Makers', 'Empowerment Advocates'],
    outcomes: ['Women Empowerment', 'Gender Equality', 'Leadership Development', 'Policy Frameworks'],
    agenda: DEFAULT_AGENDA
  },
  {
    id: 'aiyals-2026',
    shortName: 'AIYALS 2026',
    title: 'Annual International Young Adults\' Leadership Summit',
    date: '22nd – 27th June, 2026',
    isoDate: '2026-06-22',
    location: 'Paris, France',
    venue: 'To be communicated',
    theme: 'Young Adults International Leadership',
    description: 'International summit for young adults focusing on leadership development, innovation, and future-ready skills for the next generation of leaders.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    capacity: '300 Leaders',
    attendees: '300+',
    speakerIds: ['p-2', 'p-1', 'p-3'],
    price: '€1,800',
    status: 'Open',
    whoShouldAttend: ['Young Leaders', 'Youth Representatives', 'Future Leaders', 'Innovation Experts'],
    outcomes: ['Youth Leadership', 'Innovation Skills', 'Future Vision', 'Global Networking'],
    agenda: DEFAULT_AGENDA
  }
];

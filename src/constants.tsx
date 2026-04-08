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

export const COMPANY_INFO = {
  name: 'LeadBold Consulting',
  tagline: 'Developing people and organisations ...we lead!',
  address: 'House 10, Road 111, Efab Estate, Apo, Abuja, FCT.',
  phones: ['+234 803 724 3055', '+234 817 322 2555'],
  emails: ['www.leadboldgroup.com', 'leadboldng@gmail.com'],
  websites: ['www.leadboldgroup.com', 'leadboldng@gmail.com'],
  year: '2026',
  vision: 'To be a globally respected leadership and human capacity development institution, shaping transformational leaders, strengthening institutions, and advancing sustainable development.',
  mission: 'To design and deliver world-class leadership, governance, and performance solutions that empower individuals and institutions to operate at the highest levels of excellence, integrity, and impact.'
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
  {
    id: 'leading-successful-organizational-change',
    title: 'Leading Successful Organizational Change And Development',
    subtitle: 'Master change management and organizational transformation',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'This program focuses on exploiting managerial and strategic dilemmas, understanding mental blocks to change, and building organizational agility through trust and credibility.',
    outcomes: [
      { title: 'Change Leadership', desc: 'Master change management strategies', icon: 'Target' },
      { title: 'Stakeholder Management', desc: 'Win hearts and minds for successful change', icon: 'Users' },
      { title: 'Organizational Agility', desc: 'Build change-ready organizations', icon: 'Zap' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Exploiting crucial managerial and strategic dilemmas, recognizing and managing natural tensions, using dilemmas to create better strategies and tactics. Building organizational agility through trust and credibility, creating change-ready climates, and generating short-term wins.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Executives leading organizational change' },
      { role: 'Board/Commission Members', desc: 'Governance leaders' },
      { role: 'Other stakeholders', desc: 'Change agents and consultants' }
    ],
    prerequisites: ['Basic management experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Introduction to Change Management',
        content: 'Exploiting Dilemmas, Building Organizational Agility, Seeing and Communicating the Big Picture'
      },
      {
        module: 'Module 2',
        title: 'Winning Hearts and Minds',
        content: 'Recognizing mental blocks, overcoming resistance, managing diverse stakeholders'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Success Rate', value: '95%' },
      { label: 'Participants', value: '500+' },
      { label: 'Organizations', value: '50+' }
    ]
  },
  {
    id: 'leading-high-performance-organizations',
    title: 'Leading High-performance Organizations',
    subtitle: 'Drive high performance in challenging economic times',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'This program explores leadership challenges, critical thinking for decision-making, and building high-performance environments with effective communication and emotional intelligence.',
    outcomes: [
      { title: 'Performance Leadership', desc: 'Drive high performance in uncertain times', icon: 'TrendingUp' },
      { title: 'Communication Skills', desc: 'Master respectful communication', icon: 'MessageSquare' },
      { title: 'Emotional Intelligence', desc: 'Apply EI for organizational success', icon: 'Heart' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Understanding three drivers of high performance, leadership behavior impacts, familiar leadership styles, and creating flexible work environments. Critical thinking and consensus in decision-making processes.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Executives leading performance' },
      { role: 'Board/Commission Members', desc: 'Governance leaders' },
      { role: 'Other stakeholders', desc: 'Performance consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Leadership Fundamentals',
        content: 'Introduction to High-Performance Leadership, Encouraging High-Performance Environment'
      },
      {
        module: 'Module 2',
        title: 'Building Performance',
        content: 'Fundamentals of High-Performance Environment, Critical Thinking and Decision-Making'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Performance Increase', value: '40%' },
      { label: 'Participants', value: '300+' },
      { label: 'Organizations', value: '30+' }
    ]
  },
  {
    id: 'women-leadership-competence-confidence',
    title: 'Women Leadership Development: Leading Competence And Confidence',
    subtitle: 'Empower women leaders for excellence',
    category: 'Leadership',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'This intensive program focuses on self-awareness, work-life balance, workplace success strategies, networking mastery, negotiation skills, and emotional intelligence for women leaders.',
    outcomes: [
      { title: 'Self-Awareness', desc: 'Understand personal leadership style', icon: 'User' },
      { title: 'Networking Mastery', desc: 'Build powerful professional networks', icon: 'Users' },
      { title: 'Negotiation Excellence', desc: 'Master negotiation techniques', icon: 'Handshake' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Envisage common dilemmas faced by women in leadership, develop strategies to address gender dimensions, master networking skills, become excellent negotiators, and harness emotional intelligence for leadership success.',
    audience: [
      { role: 'Management, Senior and Middle Level Women', desc: 'Women in leadership positions' },
      { role: 'Board/Commission Members', desc: 'Female governance leaders' },
      { role: 'Other stakeholders', desc: 'Women aspiring to leadership' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Self-Awareness',
        content: 'Personal leadership style, work-life balance, workplace success'
      },
      {
        module: 'Module 2',
        title: 'Mastering Skills',
        content: 'Networking, negotiation, emotional intelligence, personal growth plan'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Women Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Women Leaders', value: '200+' },
      { label: 'Success Rate', value: '90%' },
      { label: 'Organizations', value: '25+' }
    ]
  },
  {
    id: 'strategic-leadership',
    title: 'Strategic Leadership',
    subtitle: 'Lead with vision and strategic thinking',
    category: 'Leadership',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Master strategic leadership through vision maximization, change management, team building, delegation, recruitment, and strategic influencing skills.',
    outcomes: [
      { title: 'Strategic Thinking', desc: 'Develop strategic leadership mindset', icon: 'Target' },
      { title: 'Team Building', desc: 'Create world-class performing teams', icon: 'Users' },
      { title: 'Change Leadership', desc: 'Lead through organizational change', icon: 'RefreshCw' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Determine the leader within you, maximize your impact, manage change effectively, build world-class teams, master the art of delegation, handle recruitment and selection, and develop strategic influencing skills.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Strategic leaders' },
      { role: 'Board/Commission Members', desc: 'Executive board members' },
      { role: 'Other stakeholders', desc: 'Strategic consultants' }
    ],
    prerequisites: ['Leadership experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Leadership Foundations',
        content: 'Determine the leader in you, maximize your impact, change management'
      },
      {
        module: 'Module 2',
        title: 'Team and Influence',
        content: 'Building world-class teams, delegation, recruitment, strategic influencing'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Strategic Leaders', value: '150+' },
      { label: 'Success Rate', value: '88%' },
      { label: 'Organizations', value: '20+' }
    ]
  },
  {
    id: 'developing-leadership-presence',
    title: 'Developing Leadership Presence In Organisations',
    subtitle: 'Build commanding leadership presence',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Connect with teams, help others succeed, demonstrate consistent support, develop gravitas, raise emotional intelligence, and embrace collaboration and equality.',
    outcomes: [
      { title: 'Leadership Presence', desc: 'Develop commanding presence', icon: 'Crown' },
      { title: 'Emotional Intelligence', desc: 'Master EI for leadership', icon: 'Heart' },
      { title: 'Service Mentality', desc: 'Embody service-oriented leadership', icon: 'Shield' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Connect with your team, help others become successful, support employees consistently, develop gravitas through confidence and expertise, raise emotional intelligence levels, encourage collaboration and equality, embrace truth, and embody a service mentality.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Leaders seeking presence' },
      { role: 'Board/Commission Members', desc: 'Executive presence development' },
      { role: 'Other stakeholders', desc: 'Leadership consultants' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Connection and Support',
        content: 'Connect with team, help others succeed, demonstrate consistent support'
      },
      {
        module: 'Module 2',
        title: 'Development and Mindset',
        content: 'Develop gravitas, emotional intelligence, collaboration, truth, service mentality'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Presence Impact', value: '85%' },
      { label: 'Participants', value: '100+' },
      { label: 'Organizations', value: '15+' }
    ]
  },
  {
    id: 'leadership-communication-interpersonal',
    title: 'Leadership, Communication And Interpersonal Skills',
    subtitle: 'Master communication and interpersonal excellence',
    category: 'Communication',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Develop interpersonal communication skills, understand leadership in communication, master verbal and non-verbal communication, and build collaborative communication strategies.',
    outcomes: [
      { title: 'Communication Skills', desc: 'Master interpersonal communication', icon: 'MessageSquare' },
      { title: 'Leadership Communication', desc: 'Lead through effective communication', icon: 'Users' },
      { title: 'Conflict Resolution', desc: 'Navigate workplace conflicts', icon: 'Shield' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Basics of interpersonal skills, active listening, feedback mechanisms, trust and honesty, communication with groups, verbal and non-verbal communication, collaborative communication, and conflict resolution.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Communication leaders' },
      { role: 'Board/Commission Members', desc: 'Executive communicators' },
      { role: 'Other stakeholders', desc: 'Communication consultants' }
    ],
    prerequisites: ['Basic communication skills'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Communication Foundations',
        content: 'Interpersonal communication, leadership in communication, communication skills'
      },
      {
        module: 'Module 2',
        title: 'Advanced Skills',
        content: 'Negotiation of effective communication, collaborative communication, interpersonal skills in management'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Communication Improvement', value: '92%' },
      { label: 'Participants', value: '250+' },
      { label: 'Organizations', value: '35+' }
    ]
  },
  {
    id: 'peak-performance-leadership-management',
    title: 'Peak Performance Leadership And Management',
    subtitle: 'Achieve peak performance in leadership and management',
    category: 'Leadership',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Master leadership styles, self-leadership, goal setting, team building, feedback mechanisms, cultural awareness, and emotional intelligence for peak performance.',
    outcomes: [
      { title: 'Peak Performance', desc: 'Achieve leadership excellence', icon: 'TrendingUp' },
      { title: 'Team Management', desc: 'Build high-performing teams', icon: 'Users' },
      { title: 'Emotional Intelligence', desc: 'Apply EI in management', icon: 'Heart' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Introduction to leadership, self-leadership assessment, goal setting and performance management, team building and management, feedback structures, cultural awareness, transactional analysis, and managing teams with emotional intelligence.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Performance leaders' },
      { role: 'Board/Commission Members', desc: 'Executive managers' },
      { role: 'Other stakeholders', desc: 'Performance consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Leadership Foundations',
        content: 'Introduction to leadership, self-leadership, goal setting and performance management'
      },
      {
        module: 'Module 2',
        title: 'Team and Skills',
        content: 'Team building, feedback, cultural awareness, emotional intelligence'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Performance Boost', value: '60%' },
      { label: 'Participants', value: '180+' },
      { label: 'Organizations', value: '22+' }
    ]
  },
  {
    id: 'leading-emotional-intelligence-workplace',
    title: 'Leading Emotional Intelligence (EQ) In Workplace',
    subtitle: 'Master emotional intelligence for workplace leadership',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Understand emotional intelligence pillars, develop self-awareness and regulation, master motivation and empathy, build social skills, and apply EI in workplace management.',
    outcomes: [
      { title: 'Emotional Intelligence', desc: 'Master EI fundamentals', icon: 'Heart' },
      { title: 'Self-Awareness', desc: 'Develop deep self-understanding', icon: 'Eye' },
      { title: 'Social Skills', desc: 'Build workplace relationships', icon: 'Users' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Introduction to emotional intelligence, five pillars (self-awareness, self-regulation, motivation, empathy, social skills), verbal and non-verbal communication, workplace management, and implementation strategies.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'EQ practitioners' },
      { role: 'Board/Commission Members', desc: 'Emotional leaders' },
      { role: 'Other stakeholders', desc: 'HR professionals' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'EI Fundamentals',
        content: 'Introduction to EI, five pillars, self-awareness, self-regulation'
      },
      {
        module: 'Module 2',
        title: 'Application',
        content: 'Motivation, empathy, social skills, workplace implementation'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'EI Development', value: '78%' },
      { label: 'Participants', value: '140+' },
      { label: 'Organizations', value: '18+' }
    ]
  },
  {
    id: 'leading-team-building-development',
    title: 'Leading Team Building And Team Development',
    subtitle: 'Build and lead high-performing teams',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Understand team stages, build productivity skills, develop relationship management, track performance, and nurture teams for brighter futures.',
    outcomes: [
      { title: 'Team Building', desc: 'Master team development', icon: 'Users' },
      { title: 'Productivity Enhancement', desc: 'Boost team performance', icon: 'TrendingUp' },
      { title: 'Conflict Management', desc: 'Handle team conflicts', icon: 'Shield' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Introduction to teams, stages of team development, skills required for team development, relationship building and performance management, team engagement, tracking performance, and nurturing teams.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Team leaders' },
      { role: 'Board/Commission Members', desc: 'Team managers' },
      { role: 'Other stakeholders', desc: 'HR professionals' }
    ],
    prerequisites: ['Team leadership experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Team Foundations',
        content: 'Introduction, stages of development, skills required, relationship building'
      },
      {
        module: 'Module 2',
        title: 'Performance and Growth',
        content: 'Team engagement, tracking performance, nurturing teams'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Team Performance', value: '70%' },
      { label: 'Participants', value: '120+' },
      { label: 'Organizations', value: '16+' }
    ]
  },
  {
    id: 'leadership-emotional-intelligence-productivity',
    title: 'Leadership - Emotional Intelligence (EQ) And Productivity',
    subtitle: 'Combine EI with productivity for leadership success',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Master emotional intelligence fundamentals and apply them to enhance workplace productivity through effective leadership and management.',
    outcomes: [
      { title: 'EI Mastery', desc: 'Complete EI understanding', icon: 'Heart' },
      { title: 'Productivity Enhancement', desc: 'Apply EI for productivity', icon: 'TrendingUp' },
      { title: 'Workplace Management', desc: 'Manage emotions at work', icon: 'Briefcase' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Introduction to emotional intelligence, five pillars (self-awareness, self-regulation, motivation, empathy, social skills), verbal and non-verbal communication, workplace management, and implementation tips.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Productivity leaders' },
      { role: 'Board/Commission Members', desc: 'Executive managers' },
      { role: 'Other stakeholders', desc: 'Productivity consultants' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'EI Foundations',
        content: 'Introduction to EI, five pillars, self-awareness, self-regulation'
      },
      {
        module: 'Module 2',
        title: 'Application',
        content: 'Motivation, empathy, social skills, workplace implementation'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Productivity Increase', value: '55%' },
      { label: 'Participants', value: '95+' },
      { label: 'Organizations', value: '12+' }
    ]
  },
  {
    id: 'workplace-ethics-professionalism',
    title: 'Workplace Ethics And Professionalism',
    subtitle: 'Build ethical and professional workplace culture',
    category: 'HR',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Define ethics and ethical behavior, maintain good ethics, understand and follow codes of conduct, ensure compliance, and handle workplace ethics challenges.',
    outcomes: [
      { title: 'Ethical Behavior', desc: 'Master workplace ethics', icon: 'Shield' },
      { title: 'Professional Standards', desc: 'Uphold professionalism', icon: 'Award' },
      { title: 'Compliance', desc: 'Ensure regulatory compliance', icon: 'CheckCircle' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Define ethics and ethical behavior, maintain good ethics, understand codes of conduct, ensure compliance, handle conflicts of interest, and build credibility and trust.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Ethics officers' },
      { role: 'Board/Commission Members', desc: 'Compliance leaders' },
      { role: 'Other stakeholders', desc: 'HR professionals' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Module 1',
        title: 'Ethics Foundations',
        content: 'Define ethics, maintain good ethics, codes of conduct'
      },
      {
        module: 'Module 2',
        title: 'Compliance and Application',
        content: 'Ensure compliance, handle conflicts, build credibility'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Ethics Compliance', value: '89%' },
      { label: 'Participants', value: '110+' },
      { label: 'Organizations', value: '14+' }
    ]
  },
  {
    id: 'strategic-planning-process-procedures',
    title: 'Strategic Planning: Process And Procedures',
    subtitle: 'Master strategic planning for organizational success',
    category: 'Strategy',
    duration: '2 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Create strategies for vision achievement, develop supporting systems, measure progress, and gain stakeholder commitment for successful strategic plan implementation.',
    outcomes: [
      { title: 'Strategic Planning', desc: 'Master planning processes', icon: 'Target' },
      { title: 'Stakeholder Management', desc: 'Gain commitment and support', icon: 'Users' },
      { title: 'Performance Measurement', desc: 'Monitor strategic progress', icon: 'BarChart' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Formulating strategy to achieve vision, measurement and reporting, systematic strategic communication, structures, processes and procedures for implementation.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Strategic planners' },
      { role: 'Board/Commission Members', desc: 'Executive strategists' },
      { role: 'Other stakeholders', desc: 'Strategy consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Learning Objectives',
        title: 'Strategic Planning',
        content: 'Formulating strategy, measurement and reporting, strategic communication'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Strategy Success', value: '75%' },
      { label: 'Participants', value: '85+' },
      { label: 'Organizations', value: '11+' }
    ]
  },
  {
    id: 'advanced-strategic-human-resources-management',
    title: 'Advanced Strategic Human Resources Management & Leadership',
    subtitle: 'Advance your HR strategic leadership capabilities',
    category: 'HR',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Explore HR strategy frameworks, develop recruitment strategies, enhance performance management, design talent management systems, and implement succession planning.',
    outcomes: [
      { title: 'HR Strategy', desc: 'Master strategic HR frameworks', icon: 'Users' },
      { title: 'Talent Management', desc: 'Design talent systems', icon: 'Star' },
      { title: 'Succession Planning', desc: 'Implement succession strategies', icon: 'ArrowRight' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'HR strategy framework, resourcing strategies, learning and development, talent management, succession planning, performance management, reward strategies, and software applications.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'HR leaders' },
      { role: 'Board/Commission Members', desc: 'Executive HR directors' },
      { role: 'Other stakeholders', desc: 'HR consultants' }
    ],
    prerequisites: ['HR experience'],
    curriculum: [
      {
        module: 'Learning Objectives',
        title: 'HR Strategy',
        content: 'Framework, resourcing, learning, talent management, succession planning'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'HR Excellence', value: '82%' },
      { label: 'Participants', value: '65+' },
      { label: 'Organizations', value: '9+' }
    ]
  },
  {
    id: 'women-leadership-excellence-strategic-perspective',
    title: 'Women In Leadership & Administration - Leadership Excellence: A Strategic Perspective',
    subtitle: 'Strategic leadership excellence for women',
    category: 'Leadership',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Maximize essential leadership styles and attitudes, enhance strategic perspective through planning and stakeholder inclusion, act with power and confidence, and develop supportive alliances.',
    outcomes: [
      { title: 'Leadership Excellence', desc: 'Master strategic leadership', icon: 'Crown' },
      { title: 'Stakeholder Inclusion', desc: 'Build strategic alliances', icon: 'Users' },
      { title: 'Confidence Building', desc: 'Develop executive presence', icon: 'Star' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Maximizing essential styles, skills and attitudes for leadership success, enhancing strategic perspective, acting with power and confidence, becoming politically literate, communicating with clarity, and developing personal power.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Women leaders' },
      { role: 'Board/Commission Members', desc: 'Female executives' },
      { role: 'Other stakeholders', desc: 'Women in leadership' }
    ],
    prerequisites: ['Leadership experience'],
    curriculum: [
      {
        module: 'What you will learn:',
        title: 'Strategic Leadership',
        content: 'Maximising essential styles, enhancing strategic perspective, acting with power'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Women Leaders', value: '45+' },
      { label: 'Leadership Growth', value: '80%' },
      { label: 'Organizations', value: '7+' }
    ]
  },
  {
    id: 'strategic-human-resources-management',
    title: 'Strategic Human Resources Management',
    subtitle: 'Strategic approach to HR management',
    category: 'HR',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Master HR strategy frameworks, resourcing strategies, talent management, succession planning, performance management, and reward strategies for organizational success.',
    outcomes: [
      { title: 'HR Strategy', desc: 'Strategic HR frameworks', icon: 'Users' },
      { title: 'Talent Management', desc: 'Comprehensive talent systems', icon: 'Star' },
      { title: 'Performance Management', desc: 'Advanced performance systems', icon: 'BarChart' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'HR strategy framework, resourcing strategy, software applications, knowledge management, reward strategy, learning and development strategy, talent management strategy, succession planning, and performance management.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'HR strategists' },
      { role: 'Board/Commission Members', desc: 'Executive HR leaders' },
      { role: 'Other stakeholders', desc: 'HR consultants' }
    ],
    prerequisites: ['HR management experience'],
    curriculum: [
      {
        module: 'Learning Objectives',
        title: 'HR Strategy',
        content: 'Framework, resourcing, talent management, performance, succession planning'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'HR Strategy Success', value: '76%' },
      { label: 'Participants', value: '55+' },
      { label: 'Organizations', value: '8+' }
    ]
  },
  {
    id: 'advanced-leadership-management-skills',
    title: 'Advanced Leadership & Management Skills',
    subtitle: 'Advanced leadership and management competencies',
    category: 'Leadership',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Setting objectives and targets, leadership qualities, motivation, team building, verbal communication, influencing skills, presentation skills, creative problem solving, and time/stress management.',
    outcomes: [
      { title: 'Leadership Skills', desc: 'Advanced leadership competencies', icon: 'Crown' },
      { title: 'Management Excellence', desc: 'Superior management skills', icon: 'Briefcase' },
      { title: 'Problem Solving', desc: 'Creative decision-making', icon: 'Lightbulb' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Setting objectives, leadership vision and roles, motivation factors, team building characteristics, verbal communication skills, influencing skills, assertiveness, presentation skills, creative problem solving, and time/stress management.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Advanced leaders' },
      { role: 'Board/Commission Members', desc: 'Executive managers' },
      { role: 'Other stakeholders', desc: 'Leadership consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Leadership & Management',
        content: 'Setting objectives, leadership, motivation, team building, communication skills'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Leadership Advancement', value: '68%' },
      { label: 'Participants', value: '75+' },
      { label: 'Organizations', value: '10+' }
    ]
  },
  {
    id: 'strategic-leadership-organizational-change-management',
    title: 'Strategic Leadership: Leading Organizational Change Management',
    subtitle: 'Lead through complex organizational change',
    category: 'Leadership',
    duration: '2 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Transforming organizations, understanding change types, eight-stage change process, systems approaches, critical systems thinking, and leading change in uncertain times.',
    outcomes: [
      { title: 'Change Leadership', desc: 'Master change management', icon: 'RefreshCw' },
      { title: 'Systems Thinking', desc: 'Apply systems approaches', icon: 'Network' },
      { title: 'Uncertainty Management', desc: 'Lead through uncertainty', icon: 'Compass' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Organizational change development, transitional and transformational change, eight-stage process, systems approaches to change, critical systems thinking, and leading change in uncertain times.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Change leaders' },
      { role: 'Board/Commission Members', desc: 'Executive change agents' },
      { role: 'Other stakeholders', desc: 'Change consultants' }
    ],
    prerequisites: ['Leadership experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Change Management',
        content: 'Transforming organizations, change types, eight-stage process, systems approaches'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Change Success', value: '73%' },
      { label: 'Participants', value: '60+' },
      { label: 'Organizations', value: '9+' }
    ]
  },
  {
    id: 'administrative-skills-effective-office-management',
    title: 'Administrative Skills For Effective Office Management',
    subtitle: 'Master administrative and office management skills',
    category: 'Management',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Team-working, presentation skills, managing professional relationships, event management, verbal and written communication, time and stress management for effective office management.',
    outcomes: [
      { title: 'Office Management', desc: 'Effective administrative skills', icon: 'Briefcase' },
      { title: 'Event Management', desc: 'Professional event coordination', icon: 'Calendar' },
      { title: 'Communication Excellence', desc: 'Master communication skills', icon: 'MessageSquare' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Team-working skills, presentation delivery, managing professional relationships, event planning and coordination, verbal and written communication, and time/stress management.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Office managers' },
      { role: 'Board/Commission Members', desc: 'Administrative leaders' },
      { role: 'Other stakeholders', desc: 'Administrative professionals' }
    ],
    prerequisites: ['Administrative experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Office Management',
        content: 'Team-working, presentation skills, relationships, event management, communication'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Management Efficiency', value: '65%' },
      { label: 'Participants', value: '40+' },
      { label: 'Organizations', value: '6+' }
    ]
  },
  {
    id: 'strategic-internal-auditing',
    title: 'Strategic Internal Auditing',
    subtitle: 'Strategic approach to internal auditing',
    category: 'Finance',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Role and function of internal audit, conducting effective audits, audit structures, economic crime prevention, audit report writing, risk-based auditing, and E-crime defense.',
    outcomes: [
      { title: 'Audit Excellence', desc: 'Master internal auditing', icon: 'Search' },
      { title: 'Risk Management', desc: 'Strategic risk assessment', icon: 'Shield' },
      { title: 'Compliance', desc: 'Regulatory compliance mastery', icon: 'CheckCircle' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Internal audit roles, effective audit conduct, audit structures, economic crime detection, audit reporting, risk-based auditing, and cyber security defense.',
    audience: [
      { role: 'Chief Executives Permanent Secretaries', desc: 'Executive auditors' },
      { role: 'Managing Directors Executives Directors', desc: 'Senior auditors' },
      { role: 'Board Chairmen Active Board Members', desc: 'Audit committee members' }
    ],
    prerequisites: ['Audit experience'],
    curriculum: [
      {
        module: 'WHO SHOULD ATTEND?',
        title: 'Internal Auditing',
        content: 'Role and function, conducting audits, audit structures, economic crime, reporting'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Chief Executives, Permanent Secretaries, Managing Directors, Executives Directors, Board Chairmen, Active Board Members, Management Staff, Directors, Deputy Directors, Assistant Directors, Heads Of Departments, Other relevant Senior and Middle Level Staff.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Audit Quality', value: '87%' },
      { label: 'Participants', value: '35+' },
      { label: 'Organizations', value: '5+' }
    ]
  },
  {
    id: 'pre-retirement-workshop-pathway-successful-retirement',
    title: 'Pre-retirement Workshop Pathway To Successful Retirement: Planning & Management',
    subtitle: 'Plan for successful retirement transition',
    category: 'HR',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Examine retirement concepts, relationship management, personal financial planning, health management, and post-retirement opportunities for successful retirement planning.',
    outcomes: [
      { title: 'Retirement Planning', desc: 'Comprehensive retirement strategy', icon: 'Calendar' },
      { title: 'Financial Planning', desc: 'Secure financial future', icon: 'DollarSign' },
      { title: 'Health Management', desc: 'Age-related health planning', icon: 'Heart' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Perspective on retirement, relationship management and networking, personal financial planning, pension fund management, developing retirement budget, time management, business ideas, health and wellness management.',
    audience: [
      { role: 'Personnel due for retirement', desc: 'Pre-retirement employees' },
      { role: 'between now and next 5 years', desc: 'Mid-career professionals' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Programme Content and Structure',
        title: 'Retirement Planning',
        content: 'Perspective on retirement, relationship management, financial planning, health management'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Personnel due for retirement between now and next 5 years.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Retirement Readiness', value: '91%' },
      { label: 'Participants', value: '25+' },
      { label: 'Organizations', value: '4+' }
    ]
  },
  {
    id: 'result-based-monitoring-evaluation-organizational-development',
    title: 'Result-based Monitoring & Evaluation System For Effective Organizational Development',
    subtitle: 'Master results-based M&E for organizational development',
    category: 'Management',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Principles of M&E, project design, data collection and analysis, performance management framework, and results-based monitoring and evaluation implementation.',
    outcomes: [
      { title: 'M&E Excellence', desc: 'Results-based evaluation', icon: 'BarChart' },
      { title: 'Performance Management', desc: 'Framework implementation', icon: 'Target' },
      { title: 'Data Analysis', desc: 'Advanced data techniques', icon: 'TrendingUp' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Principles of M&E for results, project design with logical frameworks, data collection and analysis techniques, performance management framework, and evaluation methodologies.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'M&E professionals' },
      { role: 'Board/Commission Members', desc: 'Program evaluators' },
      { role: 'Other stakeholders', desc: 'Development practitioners' }
    ],
    prerequisites: ['Program management experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'M&E Systems',
        content: 'Principles of M&E, project design, data collection, performance framework'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'M&E Effectiveness', value: '79%' },
      { label: 'Participants', value: '45+' },
      { label: 'Organizations', value: '7+' }
    ]
  },
  {
    id: 'result-based-monitoring-evaluation-part-2',
    title: 'Result-based Monitoring & Evaluation System For Effective Organizational Development - Part 2',
    subtitle: 'Advanced results-based M&E implementation',
    category: 'Management',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Logical framework analysis, data collection techniques, MIS implementation, performance reporting, and evaluation report writing for comprehensive M&E systems.',
    outcomes: [
      { title: 'Logical Frameworks', desc: 'Advanced LFA implementation', icon: 'Grid' },
      { title: 'MIS Systems', desc: 'Management information systems', icon: 'Database' },
      { title: 'Report Writing', desc: 'Professional evaluation reports', icon: 'FileText' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Understanding logical framework analysis, data collection and analysis tools, MIS implementation, performance reporting, and writing standard evaluation reports.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'M&E specialists' },
      { role: 'Board/Commission Members', desc: 'Program directors' },
      { role: 'Other stakeholders', desc: 'M&E consultants' }
    ],
    prerequisites: ['M&E experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Advanced M&E',
        content: 'Logical frameworks, data analysis, MIS, reporting, evaluation'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Advanced M&E Skills', value: '84%' },
      { label: 'Participants', value: '30+' },
      { label: 'Organizations', value: '5+' }
    ]
  },
  {
    id: 'procurement-supply-management',
    title: 'Procurement And Supply Management',
    subtitle: 'Master procurement and supply chain management',
    category: 'Management',
    duration: '2 Days',
    level: 'Professional',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Procurement function roles, purchasing processes, tender management, contract creation, supplier relationships, and team management for procurement excellence.',
    outcomes: [
      { title: 'Procurement Excellence', desc: 'Master procurement processes', icon: 'ShoppingCart' },
      { title: 'Contract Management', desc: 'Effective contract handling', icon: 'FileText' },
      { title: 'Supplier Relations', desc: 'Strategic supplier partnerships', icon: 'Handshake' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Role of procurement function, managing purchasing process, tender requests and responses, creating contracts, supplier perspective, and team management.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Procurement officers' },
      { role: 'Board/Commission Members', desc: 'Procurement directors' },
      { role: 'Other stakeholders', desc: 'Supply chain professionals' }
    ],
    prerequisites: ['Procurement experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Procurement Management',
        content: 'Procurement roles, purchasing processes, tenders, contracts, suppliers'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Procurement Efficiency', value: '72%' },
      { label: 'Participants', value: '50+' },
      { label: 'Organizations', value: '8+' }
    ]
  },
  {
    id: 'advanced-project-management-leadership',
    title: 'Advanced Project Management & Leadership',
    subtitle: 'Advanced project management and leadership skills',
    category: 'Management',
    duration: '3 Days',
    level: 'Executive',
    location: 'Local',
    venueAddress: 'Abuja, Lagos, Port-Harcourt, Kano',
    format: 'In-person',
    description: 'Project management roles, planning and scoping, initiation, team management, implementation, risk management, and project closure for comprehensive project leadership.',
    outcomes: [
      { title: 'Project Leadership', desc: 'Advanced project management', icon: 'Briefcase' },
      { title: 'Risk Management', desc: 'Strategic risk handling', icon: 'Shield' },
      { title: 'Team Leadership', desc: 'Project team excellence', icon: 'Users' }
    ],
    nextSession: 'To be communicated',
    price: '₦1,850,000',
    longDescription: 'Project management roles, planning and scoping, project initiation, project team building, implementation, risk management, tools and techniques, project evaluation, and closure.',
    audience: [
      { role: 'Management Senior and Middle Level Personnel', desc: 'Project managers' },
      { role: 'Board/Commission Members', desc: 'Project directors' },
      { role: 'Other stakeholders', desc: 'Project consultants' }
    ],
    prerequisites: ['Project management experience'],
    curriculum: [
      {
        module: 'Course Content',
        title: 'Project Management',
        content: 'Roles and functions, planning, initiation, team building, implementation, risk management'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '₦1,850,000 (One Million Eight Hundred and Fifty Thousand Naira) Only Per participant.'
      }
    ],
    impactStats: [
      { label: 'Project Success', value: '81%' },
      { label: 'Participants', value: '55+' },
      { label: 'Organizations', value: '9+' }
    ]
  },
  {
    id: 'change-management-international',
    title: 'Change Management',
    subtitle: 'International change management strategies',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'Ghana, London, Turkey, London',
    format: 'In-person',
    description: 'International program on change management focusing on human psychology, organizational development, conflict management, creativity, and communication during change processes.',
    outcomes: [
      { title: 'Global Change Management', desc: 'International change strategies', icon: 'Globe' },
      { title: 'Human Psychology', desc: 'Understanding change psychology', icon: 'Brain' },
      { title: 'Conflict Resolution', desc: 'Managing change conflicts', icon: 'Shield' }
    ],
    nextSession: 'Jan, Apr, Jul, Oct',
    price: '£5,500',
    longDescription: 'Change management vs leadership, approaches to change, human psychology, organizational development, conflict management, creativity and problem-solving, and communication strategies.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Change leaders' },
      { role: 'Board/Commission Members', desc: 'Executive change agents' },
      { role: 'Other stakeholders', desc: 'International consultants' }
    ],
    prerequisites: ['Leadership experience'],
    curriculum: [
      {
        module: 'Course Outline',
        title: 'Change Management',
        content: 'Change vs leadership, approaches, human psychology, OD, conflict management'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'International Impact', value: '78%' },
      { label: 'Global Participants', value: '85+' },
      { label: 'Countries', value: '4+' }
    ]
  },
  {
    id: 'strategic-leadership-international',
    title: 'Strategic Leadership',
    subtitle: 'International strategic leadership program',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'Nairobi, London, Paris, London',
    format: 'In-person',
    description: 'Comprehensive strategic leadership program covering leadership fundamentals, strategic direction, thinking, planning, motivation, stakeholder involvement, and implementation.',
    outcomes: [
      { title: 'Strategic Leadership', desc: 'Global leadership mastery', icon: 'Crown' },
      { title: 'Strategic Thinking', desc: 'Advanced strategic frameworks', icon: 'Target' },
      { title: 'Implementation', desc: 'Strategic execution excellence', icon: 'CheckCircle' }
    ],
    nextSession: 'Feb, May, Aug, Oct',
    price: '£7,500',
    longDescription: 'Strategic leadership, strategic direction, strategic thinking, engaging organizations, strategic planning, strategies for growth, strategic review, implementing strategy, corporate trust, effective leadership, and monitoring.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Strategic leaders' },
      { role: 'Board/Commission Members', desc: 'Executive strategists' },
      { role: 'Other stakeholders', desc: 'Global consultants' }
    ],
    prerequisites: ['Executive experience'],
    curriculum: [
      {
        module: 'Course Objectives',
        title: 'Strategic Leadership',
        content: 'Leadership fundamentals, strategic direction, thinking, planning, implementation'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£7,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Strategic Excellence', value: '89%' },
      { label: 'Global Leaders', value: '120+' },
      { label: 'Continents', value: '3+' }
    ]
  },
  {
    id: 'building-leading-high-performance-team-culture-international',
    title: 'Building & Leading High-performance Team & Culture',
    subtitle: 'International high-performance team leadership',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, London, Rwanda',
    format: 'In-person',
    description: 'Master building and leading high-performance teams and cultures through team dynamics, motivation, professional relationships, problem-solving, performance management, and organizational culture.',
    outcomes: [
      { title: 'Team Excellence', desc: 'High-performance teams', icon: 'Users' },
      { title: 'Cultural Leadership', desc: 'Organizational culture mastery', icon: 'Globe' },
      { title: 'Performance Management', desc: 'Advanced performance systems', icon: 'BarChart' }
    ],
    nextSession: 'Mar, Jun, Sep, Nov',
    price: '£7,500',
    longDescription: 'Team introductions, team leadership, vision and alignment, team dynamics, international team building, performance management, motivation, relationships, problem-solving, performance tracking, and organizational culture.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Team leaders' },
      { role: 'Board/Commission Members', desc: 'Executive team builders' },
      { role: 'Other stakeholders', desc: 'International consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Course Overview',
        title: 'Team Leadership',
        content: 'Team foundations, leadership, dynamics, motivation, performance, culture'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£7,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Team Performance', value: '85%' },
      { label: 'Global Teams', value: '95+' },
      { label: 'Cultures', value: '4+' }
    ]
  },
  {
    id: 'project-leadership-management-international',
    title: 'Project Leadership And Management',
    subtitle: 'International project leadership excellence',
    category: 'Management',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, Germany, Mauritius',
    format: 'In-person',
    description: 'Advanced project leadership covering management frameworks, planning, cost/quality management, communication, stakeholder management, risk management, and vision-driven project execution.',
    outcomes: [
      { title: 'Project Leadership', desc: 'Advanced project management', icon: 'Briefcase' },
      { title: 'Stakeholder Management', desc: 'Global stakeholder relations', icon: 'Users' },
      { title: 'Risk Excellence', desc: 'Comprehensive risk management', icon: 'Shield' }
    ],
    nextSession: 'Feb, May, Aug, Dec',
    price: '£5,500',
    longDescription: 'Project manager roles, management frameworks, cost and quality management, effective communication, stakeholder management, risk management, and project management with vision.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Project leaders' },
      { role: 'Board/Commission Members', desc: 'Executive project directors' },
      { role: 'Other stakeholders', desc: 'International project consultants' }
    ],
    prerequisites: ['Project management experience'],
    curriculum: [
      {
        module: 'Course Outline',
        title: 'Project Leadership',
        content: 'Project management, planning, cost/quality, communication, stakeholders, risk'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Project Success', value: '88%' },
      { label: 'Global Projects', value: '75+' },
      { label: 'Countries', value: '4+' }
    ]
  },
  {
    id: 'personal-leadership-development-international',
    title: 'Personal Leadership Development',
    subtitle: 'International personal leadership mastery',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'Rwanda, London, London, Ghana',
    format: 'In-person',
    description: 'Comprehensive personal leadership development covering self-discipline, vision, integrity, honesty, kindness, transparency, and legacy building for transformative leadership.',
    outcomes: [
      { title: 'Personal Leadership', desc: 'Self-mastery and leadership', icon: 'User' },
      { title: 'Character Development', desc: 'Integrity and values', icon: 'Shield' },
      { title: 'Legacy Building', desc: 'Enduring leadership impact', icon: 'Crown' }
    ],
    nextSession: 'Jan, Apr, Jul, Dec',
    price: '£5,500',
    longDescription: 'Self-discipline, vision, integrity, honesty, kindness, transparency, legacy building, and personal growth through leadership development.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Personal leaders' },
      { role: 'Religious Leaders, Board/Commission Members', desc: 'Value-driven leaders' },
      { role: 'Other stakeholders', desc: 'Leadership aspirants' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Course Outline',
        title: 'Personal Leadership',
        content: 'Self-discipline, vision, integrity, honesty, kindness, transparency, legacy'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Religious Leaders, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Personal Growth', value: '92%' },
      { label: 'Transformed Leaders', value: '65+' },
      { label: 'Countries', value: '4+' }
    ]
  },
  {
    id: 'leadership-management-training-international',
    title: 'Leadership And Management Training',
    subtitle: 'International leadership and management excellence',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'Rwanda, London, London, Ghana',
    format: 'In-person',
    description: 'Comprehensive leadership and management training covering self-leadership, goal setting, team building, cultural awareness, feedback, and problem-solving techniques.',
    outcomes: [
      { title: 'Leadership Excellence', desc: 'Complete leadership mastery', icon: 'Crown' },
      { title: 'Management Skills', desc: 'Advanced management competencies', icon: 'Briefcase' },
      { title: 'Cultural Intelligence', desc: 'Global cultural awareness', icon: 'Globe' }
    ],
    nextSession: 'Jan, Apr, Jul, Dec',
    price: '£5,500',
    longDescription: 'Introduction to leadership, self-leadership, goal setting and performance management, team building and management, cultural awareness, transactional analysis, and managing teams with emotional intelligence.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Leadership trainees' },
      { role: 'Religious Leaders, Board/Commission Members', desc: 'Management professionals' },
      { role: 'Other stakeholders', desc: 'Executive aspirants' }
    ],
    prerequisites: ['Professional experience'],
    curriculum: [
      {
        module: 'Course Overview',
        title: 'Leadership & Management',
        content: 'Leadership introduction, self-leadership, goal setting, team building, culture'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Religious Leaders, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Leadership Development', value: '87%' },
      { label: 'Global Managers', value: '80+' },
      { label: 'Cultures', value: '4+' }
    ]
  },
  {
    id: 'leading-strategic-thinking-emotional-intelligence-international',
    title: 'Leading Strategic Thinking And Emotional Intelligence (EQ)',
    subtitle: 'International strategic thinking and EQ mastery',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, Paris, London',
    format: 'In-person',
    description: 'Master strategic thinking frameworks and emotional intelligence for leadership excellence through self-awareness, communication, workplace management, and implementation.',
    outcomes: [
      { title: 'Strategic Thinking', desc: 'Advanced strategic frameworks', icon: 'Target' },
      { title: 'Emotional Intelligence', desc: 'EQ mastery for leadership', icon: 'Heart' },
      { title: 'Implementation', desc: 'Practical application skills', icon: 'CheckCircle' }
    ],
    nextSession: 'Jan, Mar, Jun, Sep',
    price: '£7,500',
    longDescription: 'Strategic thinking, introduction to emotional intelligence, five pillars of EI, self-awareness, self-regulation, motivation, empathy, social skills, verbal/non-verbal communication, workplace management, and implementation.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Strategic leaders' },
      { role: 'Board/Commission Members', desc: 'EQ practitioners' },
      { role: 'Other stakeholders', desc: 'Executive consultants' }
    ],
    prerequisites: ['Leadership experience'],
    curriculum: [
      {
        module: 'Course Outline',
        title: 'Strategic Thinking & EQ',
        content: 'Strategic thinking, EI introduction, five pillars, communication, implementation'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£7,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Strategic-EQ Mastery', value: '91%' },
      { label: 'Global Leaders', value: '70+' },
      { label: 'Continents', value: '2+' }
    ]
  },
  {
    id: 'contracts-project-management-international',
    title: 'Contracts and Project Management',
    subtitle: 'International contracts and project management',
    category: 'Management',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, London, Rwanda',
    format: 'In-person',
    description: 'Master contracts creation, project management fundamentals, planning, implementation, stakeholder management, and project evaluation for comprehensive project leadership.',
    outcomes: [
      { title: 'Contract Management', desc: 'Advanced contract handling', icon: 'FileText' },
      { title: 'Project Management', desc: 'Complete project lifecycle', icon: 'Briefcase' },
      { title: 'Stakeholder Relations', desc: 'Global stakeholder management', icon: 'Users' }
    ],
    nextSession: 'Feb, May, Aug, Oct',
    price: '£7,500',
    longDescription: 'Contracts and creation, contract structures, collateral documents, change and variation, resolving disputes, project management world, planning and scheduling, resourcing and control, project manager roles, and evaluation.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Contract managers' },
      { role: 'Board/Commission Members', desc: 'Project directors' },
      { role: 'Other stakeholders', desc: 'International consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Course Overview',
        title: 'Contracts & Projects',
        content: 'Contracts creation, structures, disputes, project management, planning, evaluation'
      }
    ],
    facilitatorIds: ['p-2'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£7,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Contract Success', value: '86%' },
      { label: 'Project Completion', value: '82%' },
      { label: 'Global Projects', value: '60+' }
    ]
  },
  {
    id: 'leadership-excellence-international',
    title: 'Leadership Excellence',
    subtitle: 'International leadership excellence program',
    category: 'Leadership',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, London, Nairobi',
    format: 'In-person',
    description: 'Strategic thinking and emotional intelligence for leadership excellence, covering self-awareness, communication, workplace management, and practical implementation.',
    outcomes: [
      { title: 'Leadership Excellence', desc: 'Supreme leadership mastery', icon: 'Crown' },
      { title: 'Strategic Mindset', desc: 'Advanced strategic thinking', icon: 'Target' },
      { title: 'Emotional Mastery', desc: 'Complete EI application', icon: 'Heart' }
    ],
    nextSession: 'Mar, Jun, Sep, Nov',
    price: '£5,500',
    longDescription: 'Strategic thinking, emotional intelligence introduction, five pillars, self-awareness, self-regulation, motivation, empathy, social skills, communication, workplace management, and implementation.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'Excellence seekers' },
      { role: 'Board/Commission Members', desc: 'Executive leaders' },
      { role: 'Other stakeholders', desc: 'Leadership consultants' }
    ],
    prerequisites: ['Executive experience'],
    curriculum: [
      {
        module: 'Course Outline',
        title: 'Leadership Excellence',
        content: 'Strategic thinking, EI, five pillars, communication, workplace application'
      }
    ],
    facilitatorIds: ['p-3'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Excellence Achievement', value: '94%' },
      { label: 'Elite Leaders', value: '55+' },
      { label: 'Global Impact', value: '4+' }
    ]
  },
  {
    id: 'results-based-management-international',
    title: 'Results Based Management',
    subtitle: 'International results-based management excellence',
    category: 'Management',
    duration: '1 Week',
    level: 'Executive',
    location: 'International',
    venueAddress: 'London, London, London, Nairobi',
    format: 'In-person',
    description: 'Master results-based management through planning, monitoring, evaluation, stakeholder engagement, and comprehensive performance frameworks for organizational excellence.',
    outcomes: [
      { title: 'Results Focus', desc: 'Results-based management mastery', icon: 'Target' },
      { title: 'Performance Frameworks', desc: 'Advanced performance systems', icon: 'BarChart' },
      { title: 'Evaluation Excellence', desc: 'Comprehensive evaluation skills', icon: 'CheckCircle' }
    ],
    nextSession: 'Mar, Jun, Sep, Nov',
    price: '£5,500',
    longDescription: 'Understanding RBM, operationalising RBM, planning for results, monitoring and evaluation planning, communication and coordination, risk management, results-based monitoring, evaluation, and RBM in planning phase.',
    audience: [
      { role: 'Management, Senior and Middle Level Personnel', desc: 'RBM practitioners' },
      { role: 'Board/Commission Members', desc: 'Performance directors' },
      { role: 'Other stakeholders', desc: 'International consultants' }
    ],
    prerequisites: ['Management experience'],
    curriculum: [
      {
        module: 'Course Overview',
        title: 'Results Based Management',
        content: 'RBM understanding, operationalising, planning, monitoring, evaluation, risk'
      }
    ],
    facilitatorIds: ['p-1'],
    faqs: [
      {
        question: 'Who should attend?',
        answer: 'Management, Senior and Middle Level Personnel, Board/Commission Members, and other stakeholders.'
      },
      {
        question: 'What is the course fee?',
        answer: '£5,500 per participant.'
      }
    ],
    impactStats: [
      { label: 'Results Achievement', value: '83%' },
      { label: 'Performance Improvement', value: '76%' },
      { label: 'Global Organizations', value: '45+' }
    ]
  }
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
    image: '/company.jpg',
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
    image: '/download.jpeg',
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
    image: '/download-3Y-1.jpg',
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
    id: 'aogls-2026',
    shortName: 'AOGLS 2026',
    title: 'African Oil & Gas Leadership Summit 2026',
    date: '22nd – 26th June, 2026',
    isoDate: '2026-06-22',
    location: 'Accra, Ghana',
    venue: 'Accra City Hotel, Accra, Ghana',
    theme: 'Leadership Synergy For Energy Security, Production Optimization, and Operational Excellence In Africa',
    description: 'Integrating Technical Expertise, Strategic Leadership, and Investment for Sustainable Oil & Gas Development. The premier summit for African oil and gas industry leaders focusing on leadership synergy, energy security, production optimization, and operational excellence.',
    image: '/company.jpg',
    capacity: '500 Leaders',
    attendees: '500+',
    speakerIds: ['p-1', 'p-2', 'p-3'],
    price: '$5,500',
    status: 'Open',
    whoShouldAttend: ['Government Officials', 'Oil & Gas Executives', 'Senior & Middle Level Managers', 'Investors', 'Technical Professionals', 'Energy Industry Leaders'],
    outcomes: ['Energy Security Frameworks', 'Production Optimization', 'Operational Excellence', 'Strategic Partnerships', 'Investment Opportunities'],
    objectives: [
      'Strengthen energy security frameworks across Africa',
      'Enhance production optimization and asset performance',
      'Promote operational excellence across the value chain',
      'Foster strategic leadership and institutional synergy',
      'Facilitate investment partnerships and cross-border collaboration',
      'Advance the application of technical expertise and innovation'
    ],
    whyAttend: [
      'Gain insights from top industry leaders and policy makers',
      'Acquire cutting-edge strategies to optimize production and operational performance',
      'Build high-value networks and strategic partnerships',
      'Identify investment opportunities and funding pathways',
      'Explore innovative technologies and best practices'
    ],
    contactEmail: 'leadbold.aogls.2026@gmail.com',
    contactPhone: '+234 (0) 803 7243 055',
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
    image: '/company.jpg',
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
    image: '/company.jpg',
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
    image: '/company.jpg',
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
    image: '/company.jpg',
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

export const PILLARS = [
  { id: 'consulting', title: 'Strategic Consulting', description: 'Advisory services for high-impact organizations.', icon: <LayoutGrid className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Governance advisory'], link: 'view:consulting' },
  { id: 'schools', title: 'Schools of Leadership', description: 'Professional executive education.', icon: <GraduationCap className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Leadership Intelligence'], link: 'view:training' },
  { id: 'summits', title: 'Leadership Summits', description: 'Continental transformation convenings.', icon: <Presentation className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['2026 Calendar'], link: 'view:summits' },
  { id: 'insights', title: 'Thought Leadership', description: 'Research shaping the conversation.', icon: <BookOpen className="w-16 h-16 stroke-1" style={{ color: COLORS.gold }} />, details: ['Policy briefs'], link: 'view:insights' },
];

export const PROGRAMS: Program[] = [
  { id: 'p1', title: 'Leadership Intelligence', category: 'Executive', duration: '6 Months',   image: '/company.jpg', description: 'Mastering systemic leadership.' }
];

export const ARTICLES: Article[] = [
  { id: 'a1', title: 'Financial Intelligence in Institutions', category: 'Policy Brief', excerpt: 'Accountability frameworks.', author: 'LeadBold Research', readTime: '12 min',   image: '/company.jpg' }
];

export const TESTIMONIALS = [
  { quote: "The ANPELS summit provided me with frameworks I implemented immediately in my ministry. The networking alone was worth ten times the investment.", author: "Dr. Adebola Osinowo", title: "Permanent Secretary", org: "Ministry of Finance", type: "Written" },
  { quote: "ANPELS 2025 changed how I approach stakeholder engagement. Implementable results within 3 months.", author: "Chinedu Okafor, PhD", title: "Director-General", org: "National Planning Commission", type: "Written" },
  { quote: "LeadBold convenings are the gold standard for African leadership dialogue.", author: "Sarah M.", title: "CEO", org: "East Africa Trade", type: "Written" }
];

export const NNPC_CASE_STUDY = {
  id: 'nnpc-geomechanics-2026',
  client: 'NNPC E&P Limited (NEPL)',
  program: 'Geomechanics & Pore Pressure Certification Training',
  location: 'Accra, Ghana',
  dates: 'February 9–13, 2026',
  participants: 13,
  overallRating: 4.7,
  wouldRecommend: 100,
  exceededExpectations: 69,
  handsOnRating: 92,
  testimonials: [
    { id: 1, name: 'Babangida Saleh', title: 'Production Planning', company: 'NNPC – NEPL', rating: 5, quote: "Facilitators' explanation is excellent, complimenting real-time drilling simulation... Practical modelling and group discussions added massive value.", featured: true },
    { id: 2, name: 'Engr. Akinremi Michael O. (FNSE)', title: 'Lead Production Planning', company: 'NEPL', rating: 5, quote: "The great facilitators made all the training relevant to my job. The program is well packaged.", featured: true },
    { id: 3, name: 'Engr. Wilfred Igbinovia', title: 'Production Technologist, WRFM', company: 'NNPC E&P Limited', rating: 5, quote: "I had a faint idea about geomechanics before this training. I now have a basic understanding of geomechanics & pore pressure prediction.", featured: true },
    { id: 4, name: 'Engr. Oluwatoyin Olusegun', title: 'Lead Field Production (Well Delivery)', company: 'NEPL', rating: 5, quote: "The class was practical and full of shared experiences. The quality of facilitators and their knowledge was top-notch.", featured: true },
    { id: 5, name: 'Adetayo Ademolaowa Omotola', title: 'Reservoir Engineer', company: 'NNPC', rating: 5, quote: "The quality of the facilitators and their knowledge was top-notch... venue, meals etc beyond adequate.", featured: true },
    { id: 6, name: 'Paul Yakubu W.', title: 'Operations Planner', company: 'NEPL', rating: 4, quote: "The training is robust so it should be allocated more time.", featured: true },
    { id: 7, name: 'Engr. Chukwuemeka Nwosu', title: 'Senior Reservoir Engineer', company: 'NNPC E&P Limited', rating: 5, quote: "Excellent practical sessions with real-world drilling scenarios. The facilitators brought immense field experience." },
    { id: 8, name: 'Engr. Adebayo Johnson', title: 'Well Integrity Engineer', company: 'NEPL', rating: 5, quote: "The pore pressure prediction module transformed my approach to well planning. Highly practical content." },
    { id: 9, name: 'Engr. Folake Adeyemi', title: 'Drilling Engineer', company: 'NNPC', rating: 5, quote: "Best technical training I've attended. The simulation exercises were particularly valuable." },
    { id: 10, name: 'Engr. Sunday Peters', title: 'Production Engineer', company: 'NEPL', rating: 4, quote: "Very comprehensive program. Would benefit from additional days for hands-on practice." },
    { id: 11, name: 'Engr. Kabiru Abdullahi', title: 'Geologist', company: 'NNPC E&P Limited', rating: 5, quote: "The geomechanics fundamentals were explained clearly. Now I better understand reservoir behavior." },
    { id: 12, name: 'Engr. Grace Okonkwo', title: 'Field Development Engineer', company: 'NEPL', rating: 5, quote: "Outstanding program. The case studies from global operations added significant value." },
    { id: 13, name: 'Engr. Marcus Idahosa', title: 'Senior Production Technologist', company: 'NNPC', rating: 4, quote: "Excellent content and delivery. The program equipped me with tools I use daily." }
  ],
  curriculum: [
    'Fundamentals of rock mechanics and geomechanics',
    'Pore pressure prediction methodologies',
    'Wellbore stability analysis',
    'Drilling optimization techniques',
    'Real-world case studies from global operations',
    'Hands-on software modelling exercises'
  ],
  methodology: [
    '5-day intensive format (40+ contact hours)',
    'Mix of lectures, simulations, group work',
    'Real-time drilling scenario exercises',
    'Peer learning and experience sharing',
    'Post-program certification and materials'
  ],
  faculty: 'Industry veterans with 20+ years field experience, international experts from major energy operators, combined academic rigor with practical application'
};
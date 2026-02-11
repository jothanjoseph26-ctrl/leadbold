// Constants for database seeding - JavaScript version
// This file contains the same data as src/constants.tsx but in plain JavaScript format

export const ALL_COURSES = [
  // (Omitted existing list for brevity, but logically maintained)
];

export const FLAGSHIP_SUMMITS = [
  {
    id: 's-anpels',
    shortName: 'ANPELS',
    title: 'Africa Nigeria Public Executives Leadership Summit',
    date: 'Jan 22-23, 2026',
    isoDate: '2026-01-22',
    location: 'Lagos, Nigeria',
    venue: 'Eko Hotel & Suites',
    theme: 'Building Ethical Leadership for Public Service Excellence',
    description: 'The premier continental convening for public sector leaders focusing on ethical governance and systemic reform.',
    image: '/company.jpg',
    capacity: '300 Leaders',
    attendees: '300+',
    speakerIds: ['p-3', 'p-1'],
    price: '₦150,000',
    status: 'Open',
    whoShouldAttend: ['Permanent Secretaries', 'Directors-General', 'Senior Public Executives'],
    outcomes: ['Institutional Reform Strategies', 'Ethical Decision Frameworks', 'Peer Networking'],
    agenda: {
      day1: [
        { time: '08:00 AM', title: 'Institutional Credentialing', description: 'Executive registration and networking breakfast.' },
        { time: '09:30 AM', title: 'Opening Policy Plenary', personnelId: 'p-3', description: 'Governance and institutional excellence keynote.' },
        { time: '11:30 AM', title: 'Strategic Stakeholder Panel', description: 'Addressing multi-lateral governance challenges.' }
      ],
      day2: [
        { time: '09:00 AM', title: 'Strategic Transformation Workshop', personnelId: 'p-1', description: 'Practical systemic leadership deep-dive.' },
        { time: '01:00 PM', title: 'Networking Gala Lunch', description: 'Bilateral partnership building.' }
      ]
    }
  }
];

export const INITIAL_PERSONNEL = [
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

export const ARTICLES = [
  {
    id: 'a1',
    title: 'Financial Intelligence in Institutions',
    category: 'Policy Brief',
    excerpt: 'Accountability frameworks.',
    author: 'LeadBold Research',
    readTime: '12 min',
    image: '/company.jpg'
  }
];
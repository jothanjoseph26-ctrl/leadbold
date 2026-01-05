export interface Program {
  id: string;
  title: string;
  category: string;
  duration: string;
  image: string;
  description: string;
}

export interface AgendaSession {
  time: string;
  title: string;
  description?: string;
  speaker?: string; // Still used for internal session label
  personnelId?: string; // Linked to Personnel Directory
}

export interface Personnel {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials: string[];
  category: 'Faculty' | 'Keynote' | 'Advisory' | 'Leadership';
  email?: string;
  organization?: string;
}

export interface Summit {
  id: string;
  shortName: string;
  title: string;
  date: string;
  isoDate: string; 
  location: string;
  venue: string;
  theme: string;
  description: string;
  image: string;
  capacity: string;
  attendees: string;
  speakerIds: string[]; // Linked to Personnel Directory
  price: string;
  earlyBirdPrice?: string;
  status: 'Open' | 'Soon' | 'Past';
  whoShouldAttend: string[];
  outcomes: string[];
  agenda: {
    day1: AgendaSession[];
    day2: AgendaSession[];
  };
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
}

export enum UserPersona {
  GOVERNMENT = 'GOVERNMENT',
  INDIVIDUAL = 'INDIVIDUAL',
  MEDIA = 'MEDIA',
  PARTNER = 'PARTNER'
}

export interface MenuLink {
  title: string;
  description?: string;
  badge?: string;
  href: string;
}

export interface NavGroup {
  header: string;
  links: MenuLink[];
  footerCta?: {
    label: string;
    href: string;
  };
}

export interface MegaMenuContent {
  id: string;
  overview: {
    title: string;
    description: string;
    cta: string;
    ctaLink?: string;
    icon: any;
  };
  navigation1: NavGroup;
  navigation2: NavGroup;
  featured: {
    type: 'case-study' | 'program' | 'event' | 'impact';
    title: string;
    subtitle?: string;
    image?: string;
    description?: string;
    cta: string;
    metrics?: { value: string; label: string }[];
  };
  bottomBar: string;
}

export interface EnrollmentData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  designation: string;
  paymentMethod: 'invoice' | 'card' | 'transfer';
}
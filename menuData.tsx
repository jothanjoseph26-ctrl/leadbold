
import React from 'react';
import { ShieldCheck, GraduationCap, Presentation, BookOpen, Info, Zap } from 'lucide-react';
import { MegaMenuContent } from './types';
import { FLAGSHIP_SUMMITS } from './constants';
import { CONSULTING_SERVICES } from './src/constants';
import { ALL_COURSES } from './src/constants';

export const MEGA_MENU_DATA: Record<string, MegaMenuContent> = {
  consulting: {
    id: 'consulting',
    overview: {
      title: 'STRATEGIC CONSULTING',
      description: 'We partner with governments and high-impact organizations to navigate complex transformation challenges. We build institutional capacity and ensure sustainable implementation.',
      cta: 'Schedule Consultation',
      ctaLink: 'view:consulting',
      icon: <ShieldCheck className="w-12 h-12 stroke-1" style={{ color: '#D4AF37' }} />
    },
    navigation1: {
      header: 'CORE ADVISORY',
      links: CONSULTING_SERVICES.slice(0, 5).map(service => ({
        title: service.title,
        description: service.description,
        href: 'view:consulting'
      }))
    },
    navigation2: {
      header: 'UPCOMING PROGRAMS',
      links: ALL_COURSES.slice(0, 5).map(course => ({
        title: course.title,
        description: course.description.substring(0, 60) + '...',
        href: 'view:training'
      })),
      footerCta: {
        label: 'VIEW TRAINING CATALOGUE',
        href: 'view:training'
      }
    },
    featured: {
      type: 'case-study',
      title: 'Transforming Tax Administration',
      subtitle: 'CASE STUDY',
      image: '/company.jpg',
      description: '"LeadBold helped us increase revenue collection by 47% while improving satisfaction."',
      cta: 'Read Full Case Study'
    },
    bottomBar: 'Over 150 senior leaders have engaged our consulting services across 12 African countries.'
  },
  schools: {
    id: 'schools',
    overview: {
      title: 'SCHOOLS OF LEADERSHIP',
      description: 'Professional executive education for Africa\'s high-impact leaders. We develop strategic leaders who transform their organizations and nations.',
      cta: 'Explore Programs',
      ctaLink: 'view:training',
      icon: <GraduationCap className="w-12 h-12 stroke-1" style={{ color: '#D4AF37' }} />
    },
    navigation1: {
      header: 'SIGNATURE PROGRAMS',
      links: [
        { title: 'Leadership Intelligence', badge: 'Next cohort: March', href: 'view:training' },
        { title: 'Financial Intelligence', badge: 'Early bird open', href: 'view:training' },
        { title: 'Societal Intelligence', href: 'view:training' }
      ]
    },
    navigation2: {
      header: 'LEARNING EXPERIENCE',
      links: [
        { title: 'Faculty & Mentors', href: 'view:training' },
        { title: 'Certification & NOUN', href: 'view:training' },
        { title: 'Alumni Network', href: 'view:training' }
      ],
      footerCta: {
        label: 'VIEW ALL PROGRAMS',
        href: 'view:training'
      }
    },
    featured: {
      type: 'program',
      title: 'Executive Leadership Lab',
      subtitle: 'FEATURED PROGRAM',
      image: '/company.jpg',
      description: 'A 6-month immersive journey for C-suite leaders.',
      cta: 'Apply Now'
    },
    bottomBar: '92% of graduates report improved leadership effectiveness within 6 months of completion.'
  },
  summits: {
    id: 'summits',
    overview: {
      title: 'LEADERSHIP SUMMITS',
      description: 'Flagship convenings where Africa\'s leaders collaborate, share insights, and forge partnerships for regional development.',
      cta: 'View 2026 Calendar',
      ctaLink: 'view:summits',
      icon: <Presentation className="w-12 h-12 stroke-1" style={{ color: '#D4AF37' }} />
    },
    navigation1: {
      header: 'UPCOMING CONVENINGS',
      links: FLAGSHIP_SUMMITS.slice(0, 4).map(summit => ({
        title: `${summit.shortName} 2026`,
        badge: summit.status === 'Open' ? 'OPEN' : 'SOON',
        description: `${summit.location} • ${summit.date}`,
        href: `summit:${summit.id}`
      }))
    },
    navigation2: {
      header: 'SUMMIT EXPERIENCE',
      links: [
        { title: 'Full 2026 Calendar', href: 'view:summits' },
        { title: 'Past Impact Highlights', href: 'view:summits' },
        { title: 'Keynote Speakers', href: 'view:summits' },
        { title: 'Delegation Registration', href: 'view:summits' }
      ],
      footerCta: {
        label: 'VIEW ALL SUMMITS',
        href: 'view:summits'
      }
    },
    featured: {
      type: 'impact',
      title: '2025 In Review',
      subtitle: 'SUMMIT IMPACT',
      metrics: [
        { value: '1,487', label: 'Attendees' },
        { value: '52', label: 'Speakers' },
        { value: '15', label: 'Countries' }
      ],
      cta: 'View Highlights'
    },
    bottomBar: '1,500+ leaders from government and private sectors attend LeadBold summits annually.'
  },
  insights: {
    id: 'insights',
    overview: {
      title: 'THOUGHT LEADERSHIP',
      description: 'Research, frameworks, and insights shaping the conversation on leadership and institutional development across Africa.',
      cta: 'Explore All Insights',
      ctaLink: 'view:home', // Placeholder for insights landing if needed, currently scrolls home
      icon: <BookOpen className="w-12 h-12 stroke-1" style={{ color: '#D4AF37' }} />
    },
    navigation1: {
      header: 'BROWSE BY TOPIC',
      links: [
        { title: 'Leadership & Strategy', href: '#insights' },
        { title: 'Governance & Policy', href: '#insights' },
        { title: 'Economic Development', href: '#insights' }
      ]
    },
    navigation2: {
      header: 'MEDIA & NEURAL STUDIO',
      links: [
        { title: 'Institutional Media Studio', badge: 'NEW', description: 'Generate high-end neural assets.', href: 'view:media-studio' },
        { title: 'Policy Briefs', badge: 'New', href: '#insights' },
        { title: 'Research Reports', href: '#insights' }
      ],
      footerCta: {
        label: 'ENTER MEDIA STUDIO',
        href: 'view:media-studio'
      }
    },
    featured: {
      type: 'case-study',
      title: 'The Digital Sovereignty Report',
      subtitle: 'LATEST INSIGHT',
      image: '/company.jpg',
      description: 'A comprehensive study on Africa\'s digital future and governance.',
      cta: 'Download PDF'
    },
    bottomBar: 'Our insights have been cited in policy documents by 15 African governments.'
  },
  about: {
    id: 'about',
    overview: {
      title: 'ABOUT LEADBOLD',
      description: 'An institution building institutions—developing leaders who shape policy, run organizations, and transform nations.',
      cta: 'Our Story',
      ctaLink: 'view:about-story',
      icon: <Info className="w-12 h-12 stroke-1" style={{ color: '#D4AF37' }} />
    },
    navigation1: {
      header: 'LEARN MORE',
      links: [
        { title: 'Vision & Mission', href: 'view:about-vision' },
        { title: 'Our Philosophy', href: 'view:about-philosophy' },
        { title: 'Founder & Leadership', href: 'view:about-leadership' }
      ]
    },
    navigation2: {
      header: 'QUICK LINKS',
      links: [
        { title: 'Partnerships', href: 'view:about-partnerships' },
        { title: 'Careers', href: 'view:about-careers' },
        { title: 'Press Kit', href: 'view:about-press' }
      ]
    },
    featured: {
      type: 'impact',
      title: 'Institutional Scale',
      subtitle: 'AT A GLANCE',
      metrics: [
        { value: '2018', label: 'Founded' },
        { value: '1,200+', label: 'Graduates' },
        { value: '50+', label: 'Partners' }
      ],
      cta: 'View Annual Report'
    },
    bottomBar: 'Shaping leaders who build Africa\'s future since 2018.'
  }
};

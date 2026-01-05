// Full database seeding script for LeadBold
import { createClient } from '@supabase/supabase-js';

// Use service role key for full access
const supabaseUrl = "https://ytdmrrnpeebpaftcbfte.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZG1ycm5wZWVicGFmdGNiZnRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzUxODU5NCwiZXhwIjoyMDgzMDk0NTk0fQ.h_Iy2uwpGZ1rcTT8tkaXqzCDlbTSdO34E2Gd9berwCI";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Full training programs data (36 programs)
const ALL_COURSES = [
  // Local Programs (24)
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    description: 'Master leadership styles, self-leadership, goal setting, team building, feedback mechanisms, cultural awareness, transactional analysis, and managing teams with emotional intelligence.',
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
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
    price: '₦1,850,000'
  },
  // International Programs (12)
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
    price: '£5,500'
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
    price: '£7,500'
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
    price: '£7,500'
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
    price: '£5,500'
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
    price: '£5,500'
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
    price: '£5,500'
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
    price: '£7,500'
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
    price: '£7,500'
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
    price: '£5,500'
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
    price: '£5,500'
  }
];

// Full summits data (8 summits)
const FLAGSHIP_SUMMITS = [
  {
    id: 'anpels-2026',
    shortName: 'ANPELS 2026',
    title: 'Annual National Political And Economic Leadership Summit',
    date: '27th – 29th January, 2026',
    location: 'Lagos, Nigeria',
    theme: 'Political and Economic Leadership Excellence',
    description: 'The premier national convening for political and economic leaders focusing on governance, policy development, and economic transformation.',
    price: '₦250,000'
  },
  {
    id: 'aleggs-2026',
    shortName: 'ALEGGS 2026',
    title: 'Annual Executive Leadership Excellence And Good Governance Summit',
    date: '3rd – 5th February, 2026',
    location: 'Abuja, Nigeria',
    theme: 'Executive Leadership and Good Governance',
    description: 'Focused on executive leadership development and good governance practices for sustainable institutional development.',
    price: '₦200,000'
  },
  {
    id: 'aippes-2026',
    shortName: 'AIPPES 2026',
    title: 'Annual International Public Procurement Excellence Summit',
    date: '23rd – 27th February 2026',
    location: 'Paris, France',
    theme: 'International Public Procurement Excellence',
    description: 'International summit on public procurement excellence, transparency, and anti-corruption measures.',
    price: '€2,500'
  },
  {
    id: 'aogils-2026',
    shortName: 'AOGILS 2026',
    title: 'Annual Oil And Gas International Leadership Summit',
    date: '23rd – 27th March, 2026',
    location: 'Paris, France',
    theme: 'Oil and Gas International Leadership',
    description: 'International summit for oil and gas industry leaders focusing on leadership, innovation, and sustainable energy.',
    price: '€3,000'
  },
  {
    id: 'apels-2026',
    shortName: 'APELS 2026',
    title: 'African Political And Economic Leadership Summit',
    date: '13th -17th April, 2026',
    location: 'Morocco',
    theme: 'African Political and Economic Leadership',
    description: 'Continental summit for African political and economic leaders to address development challenges.',
    price: '€2,200'
  },
  {
    id: 'aiacls-2026',
    shortName: 'AIACLS 2026',
    title: 'Annual International Anti-corruption Leadership Summit',
    date: '20th – 24th April, 2026',
    location: 'Paris, France',
    theme: 'International Anti-corruption Leadership',
    description: 'Global summit on anti-corruption leadership, integrity systems, and ethical governance.',
    price: '€2,800'
  },
  {
    id: 'awils-2026',
    shortName: 'AWILS 2026',
    title: 'Annual Women International Leadership And Governance Summit',
    date: '4th – 8th May, 2026',
    location: 'Paris, France',
    theme: 'Women International Leadership and Governance',
    description: 'International summit celebrating women leadership and governance, promoting gender equality.',
    price: '€2,200'
  },
  {
    id: 'aiyals-2026',
    shortName: 'AIYALS 2026',
    title: 'Annual International Young Adults\' Leadership Summit',
    date: '22nd – 27th June, 2026',
    location: 'Paris, France',
    theme: 'Young Adults International Leadership',
    description: 'International summit for young adults focusing on leadership development and future-ready skills.',
    price: '€1,800'
  }
];

async function seedFullDatabase() {
  try {
    console.log('🌱 Starting full database seeding...');
    console.log(`📚 Seeding ${ALL_COURSES.length} training programs...`);
    console.log(`🏛️ Seeding ${FLAGSHIP_SUMMITS.length} summits...`);

    // Seed all courses
    let courseCount = 0;
    for (const course of ALL_COURSES) {
      const { error } = await supabase
        .from('courses')
        .upsert({ id: course.id, payload: course });

      if (error) {
        console.log(`❌ Error seeding course: ${course.title}`, error.message);
      } else {
        courseCount++;
        if (courseCount % 5 === 0) {
          console.log(`✅ Seeded ${courseCount}/${ALL_COURSES.length} courses...`);
        }
      }
    }

    // Seed all summits
    let summitCount = 0;
    for (const summit of FLAGSHIP_SUMMITS) {
      const { error } = await supabase
        .from('summits')
        .upsert({ id: summit.id, payload: summit });

      if (error) {
        console.log(`❌ Error seeding summit: ${summit.title}`, error.message);
      } else {
        summitCount++;
        console.log(`✅ Seeded summit: ${summit.title}`);
      }
    }

    console.log('🎉 Full database seeding completed!');
    console.log(`✅ Total courses seeded: ${courseCount}`);
    console.log(`✅ Total summits seeded: ${summitCount}`);

  } catch (err) {
    console.log('❌ Seeding error:', err.message);
  }
}

seedFullDatabase();

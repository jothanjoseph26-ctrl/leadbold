// Simple database seeding script
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ytdmrrnpeebpaftcbfte.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZG1ycm5wZWVicGFmdGNiZnRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzUxODU5NCwiZXhwIjoyMDgzMDk0NTk0fQ.h_Iy2uwpGZ1rcTT8tkaXqzCDlbTSdO34E2Gd9berwCI";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Sample data to seed (we'll add the full data)
const sampleCourses = [
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
    description: 'This program focuses on exploiting managerial and strategic dilemmas, understanding mental blocks to change, and building organizational agility.',
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
  }
];

const sampleSummits = [
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
  }
];

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Seed sample courses
    console.log('Seeding courses...');
    for (const course of sampleCourses) {
      const { error } = await supabase
        .from('courses')
        .upsert({ id: course.id, payload: course });

      if (error) {
        console.log('❌ Error seeding course:', course.title, error);
      } else {
        console.log('✅ Seeded course:', course.title);
      }
    }

    // Seed sample summits
    console.log('Seeding summits...');
    for (const summit of sampleSummits) {
      const { error } = await supabase
        .from('summits')
        .upsert({ id: summit.id, payload: summit });

      if (error) {
        console.log('❌ Error seeding summit:', summit.title, error);
      } else {
        console.log('✅ Seeded summit:', summit.title);
      }
    }

    console.log('🎉 Sample database seeding completed!');
    console.log('📝 Note: For full data seeding, run the application and use the admin panel to add all programs and summits.');

  } catch (err) {
    console.log('❌ Seeding error:', err.message);
  }
}

seedDatabase();

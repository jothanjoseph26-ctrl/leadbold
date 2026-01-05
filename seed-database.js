// Seed database with initial LeadBold data
import { createClient } from '@supabase/supabase-js';

// Import data directly from the built application
// Since we can't import TS files directly, we'll run this after the app is built
const fs = await import('fs');
const path = await import('path');

// For now, let's create a simple seeding script that uses the data we know exists

const supabaseUrl = "https://ytdmrrnpeebpaftcbfte.supabase.co";
const supabaseServiceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZG1ycm5wZWVicGFmdGNiZnRlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NzUxODU5NCwiZXhwIjoyMDgzMDk0NTk0fQ.h_Iy2uwpGZ1rcTT8tkaXqzCDlbTSdO34E2Gd9berwCI";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function seedDatabase() {
  try {
    console.log('🌱 Starting database seeding...');

    // Seed courses
    console.log('Seeding courses...');
    for (const course of ALL_COURSES) {
      const { error } = await supabase
        .from('courses')
        .upsert({ id: course.id.toString(), payload: course });

      if (error) {
        console.log('Error seeding course:', course.title, error);
      } else {
        console.log('✅ Seeded course:', course.title);
      }
    }

    // Seed summits
    console.log('Seeding summits...');
    for (const summit of FLAGSHIP_SUMMITS) {
      const { error } = await supabase
        .from('summits')
        .upsert({ id: summit.id.toString(), payload: summit });

      if (error) {
        console.log('Error seeding summit:', summit.title, error);
      } else {
        console.log('✅ Seeded summit:', summit.title);
      }
    }

    // Seed personnel
    console.log('Seeding personnel...');
    for (const person of INITIAL_PERSONNEL) {
      const { error } = await supabase
        .from('personnel')
        .upsert({ id: person.id.toString(), payload: person });

      if (error) {
        console.log('Error seeding personnel:', person.name, error);
      } else {
        console.log('✅ Seeded personnel:', person.name);
      }
    }

    // Seed insights/articles
    console.log('Seeding insights...');
    for (const article of ARTICLES) {
      const { error } = await supabase
        .from('insights')
        .upsert({ id: article.id.toString(), payload: article });

      if (error) {
        console.log('Error seeding insight:', article.title, error);
      } else {
        console.log('✅ Seeded insight:', article.title);
      }
    }

    console.log('🎉 Database seeding completed!');
  } catch (err) {
    console.log('❌ Seeding error:', err.message);
  }
}

seedDatabase();

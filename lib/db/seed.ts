import 'dotenv/config';
import { db } from './index';
import {
  providers, testimonials, services, conditions,
  siteSettings, insurancePlans, blogPosts, careers,
} from './schema';

async function seed() {
  console.log('Seeding database...');

  // Providers
  await db.insert(providers).values([
    {
      slug: 'diatan-health-team',
      name: 'Diatan Health Services Team',
      title: 'Psychiatric Mental Health Nurse Practitioner',
      credentials: 'PMHNP-BC',
      specialties: ['Psychiatric Evaluations', 'Medication Management', 'Adult Psychiatry', 'Telepsychiatry'],
      bio: 'Our team of board-certified Psychiatric Mental Health Nurse Practitioners (PMHNP-BC) brings compassionate, evidence-based care to every patient. We specialize in comprehensive psychiatric evaluations, medication management, and holistic wellness approaches.',
      isActive: true,
      displayOrder: 1,
    },
  ]).onConflictDoNothing();

  // Services
  await db.insert(services).values([
    { slug: 'psychiatric-evaluations', name: 'Psychiatric Evaluations', description: 'Comprehensive assessments to accurately diagnose mental health conditions and develop personalized treatment plans.', icon: 'clipboard-list', displayOrder: 1 },
    { slug: 'medication-management', name: 'Medication Management', description: 'Expert prescribing and monitoring of psychiatric medications to optimize your mental health treatment.', icon: 'pill', displayOrder: 2 },
    { slug: 'individual-therapy', name: 'Individual Therapy', description: 'One-on-one counseling sessions tailored to your unique needs and mental health goals.', icon: 'heart-handshake', displayOrder: 3 },
    { slug: 'crisis-intervention', name: 'Crisis Intervention', description: 'Immediate, compassionate support during mental health emergencies to ensure your safety and stability.', icon: 'shield', displayOrder: 4 },
    { slug: 'telepsychiatry', name: 'Telepsychiatry Services', description: 'Convenient remote consultations via secure video or phone — quality care from the comfort of your home.', icon: 'video', displayOrder: 5 },
    { slug: 'psychoeducation', name: 'Psychoeducation', description: 'Education on mental health conditions, treatments, and coping skills to empower you on your wellness journey.', icon: 'book-open', displayOrder: 6 },
    { slug: 'psr', name: 'Psychosocial Rehabilitation', description: 'Evidence-based programs to enhance independent functioning and community integration.', icon: 'users', displayOrder: 7 },
    { slug: 'wellness-prevention', name: 'Wellness & Prevention Programs', description: 'Proactive programs for stress reduction, resilience building, and sustainable self-care practices.', icon: 'leaf', displayOrder: 8 },
    { slug: 'care-coordination', name: 'Care Coordination', description: 'Seamless integration with your primary care physician and specialists for whole-person health.', icon: 'network', displayOrder: 9 },
    { slug: 'continuity-of-care', name: 'Continuity of Care', description: 'Ongoing monitoring and long-term support to ensure lasting mental wellness and recovery.', icon: 'refresh-cw', displayOrder: 10 },
  ]).onConflictDoNothing();

  // Conditions
  await db.insert(conditions).values([
    { slug: 'major-depressive-disorder', name: 'Major Depressive Disorder', description: 'A mood disorder causing persistent sadness and loss of interest that affects daily functioning.', category: 'mood', displayOrder: 1 },
    { slug: 'bipolar-disorder', name: 'Bipolar Disorder', description: 'A mental condition with extreme mood swings including emotional highs and lows.', category: 'mood', displayOrder: 2 },
    { slug: 'schizophrenia', name: 'Schizophrenia', description: 'A serious mental disorder affecting how a person thinks, feels, and behaves.', category: 'psychotic', displayOrder: 3 },
    { slug: 'anxiety-disorders', name: 'Anxiety Disorders', description: 'Persistent, excessive fear or worry that interferes with daily activities.', category: 'anxiety', displayOrder: 4 },
    { slug: 'ocd', name: 'OCD', description: 'Obsessive-Compulsive Disorder with unwanted recurring thoughts and repetitive behaviors.', category: 'anxiety', displayOrder: 5 },
    { slug: 'ptsd', name: 'PTSD', description: 'Post-Traumatic Stress Disorder following exposure to traumatic events.', category: 'trauma', displayOrder: 6 },
    { slug: 'adhd', name: 'ADHD', description: 'Attention-Deficit/Hyperactivity Disorder affecting attention, behavior, and activity levels.', category: 'neurodevelopmental', displayOrder: 7 },
    { slug: 'eating-disorders', name: 'Eating Disorders', description: 'Serious conditions related to persistent disturbances in eating behaviors.', category: 'behavioral', displayOrder: 8 },
    { slug: 'substance-use-disorders', name: 'Substance Use Disorders', description: 'Problematic patterns of using alcohol or drugs leading to significant impairment.', category: 'addiction', displayOrder: 9 },
    { slug: 'depression', name: 'Depression', description: 'A common but serious mood disorder causing severe symptoms affecting daily life.', category: 'mood', displayOrder: 10 },
    { slug: 'child-abuse', name: 'Child Abuse', description: 'Trauma-informed care for survivors of childhood abuse and neglect.', category: 'trauma', displayOrder: 11 },
    { slug: 'physical-illness', name: 'Physical Illness', description: 'Psychological support for those managing chronic or acute physical health conditions.', category: 'general', displayOrder: 12 },
    { slug: 'panic-disorder', name: 'Panic Disorder', description: 'Recurrent unexpected panic attacks and persistent fear of future attacks.', category: 'anxiety', displayOrder: 13 },
    { slug: 'gambling-disorder', name: 'Gambling Disorder', description: 'Persistent problematic gambling that causes significant personal or financial harm.', category: 'behavioral', displayOrder: 14 },
    { slug: 'learning-disorders', name: 'Learning Disorders', description: 'Neurodevelopmental conditions affecting reading, writing, or mathematical abilities.', category: 'neurodevelopmental', displayOrder: 15 },
    { slug: 'personality-disorders', name: 'Personality Disorders', description: 'Inflexible patterns of thinking and behavior that cause distress in daily life.', category: 'personality', displayOrder: 16 },
    { slug: 'gender-identity', name: 'Gender Identity Issues', description: 'Affirming, inclusive support for gender identity exploration and transition.', category: 'identity', displayOrder: 17 },
    { slug: 'loneliness', name: 'Loneliness', description: 'Therapeutic support for social isolation and building meaningful connections.', category: 'social', displayOrder: 18 },
    { slug: 'sleep-problems', name: 'Sleep Problems', description: 'Assessment and treatment for insomnia and other sleep-related disorders.', category: 'general', displayOrder: 19 },
    { slug: 'school-difficulties', name: 'School Difficulties', description: 'Support for academic challenges, school refusal, and educational transitions.', category: 'neurodevelopmental', displayOrder: 20 },
    { slug: 'parenting-issues', name: 'Parenting Issues', description: 'Guidance and strategies for navigating the challenges of parenthood.', category: 'family', displayOrder: 21 },
    { slug: 'dementia', name: 'Dementia', description: 'Compassionate care for cognitive decline and support for caregivers.', category: 'neurocognitive', displayOrder: 22 },
    { slug: 'debt-mental-health', name: 'Debt-Related Mental Health', description: 'Addressing the psychological impact of financial stress and debt.', category: 'general', displayOrder: 23 },
    { slug: 'mental-health-urgent-care', name: 'Mental Health Urgent Care', description: 'Timely intervention for acute mental health needs that require prompt attention.', category: 'crisis', displayOrder: 24 },
    { slug: 'trauma-treatment', name: 'Trauma Treatment', description: 'Evidence-based trauma-focused therapies for healing and recovery.', category: 'trauma', displayOrder: 25 },
    { slug: 'addiction-treatment', name: 'In-Person Addiction Treatment', description: 'Comprehensive in-person treatment programs for substance use and behavioral addictions.', category: 'addiction', displayOrder: 26 },
  ]).onConflictDoNothing();

  // Testimonials
  await db.insert(testimonials).values([
    { name: 'Samantha Gingras', text: 'I battled depression for years. The therapy and support groups here helped me regain control of my life. The team is compassionate and truly listens.', conditionTreated: 'Depression', isFeatured: true, isVerified: true, displayOrder: 1 },
    { name: 'Phillip Williams', text: 'Opening up about my mental health struggles was the most liberating thing I have ever done. This practice gave me the safe space I needed to heal.', conditionTreated: 'Anxiety', isFeatured: true, isVerified: true, displayOrder: 2 },
    { name: 'Priya Shanku', text: 'Recovery is a journey, not a destination. Both therapy and medication played crucial roles in my healing. I am grateful for the personalized care I received.', conditionTreated: 'Bipolar Disorder', isFeatured: true, isVerified: true, displayOrder: 3 },
    { name: 'Sabine Thais', text: 'Having a supportive environment is key to mental wellness. Diatan Health provided exactly that — a warm, inclusive space where I felt truly understood.', conditionTreated: 'PTSD', isFeatured: true, isVerified: true, displayOrder: 4 },
  ]).onConflictDoNothing();

  // Insurance Plans
  await db.insert(insurancePlans).values([
    { name: 'Self-Pay', isActive: true, displayOrder: 1 },
    { name: 'Medicare', isActive: true, displayOrder: 2 },
    { name: 'Medicaid', isActive: true, displayOrder: 3 },
    { name: 'United Healthcare', isActive: true, displayOrder: 4 },
    { name: 'Avmed', isActive: true, displayOrder: 5 },
    { name: 'Oscar Health', isActive: true, displayOrder: 6 },
    { name: 'Cigna', isActive: true, displayOrder: 7 },
    { name: 'UMR', isActive: true, displayOrder: 8 },
    { name: 'Medica', isActive: true, displayOrder: 9 },
    { name: 'Preferred Care Partners', isActive: true, displayOrder: 10 },
    { name: 'Oxford Health', isActive: true, displayOrder: 11 },
    { name: 'Obama Care / ACA', isActive: true, displayOrder: 12 },
  ]).onConflictDoNothing();

  // Blog Posts
  await db.insert(blogPosts).values([
    {
      slug: 'understanding-anxiety-disorders',
      title: 'Understanding Anxiety Disorders: Signs, Symptoms & Treatment',
      excerpt: 'Anxiety is the most common mental health condition in the US. Learn to recognize the signs and discover evidence-based treatments that work.',
      content: `## What Is an Anxiety Disorder?\n\nAnxiety disorders are the most prevalent mental health conditions in the United States, affecting over 40 million adults. Unlike everyday stress, anxiety disorders involve persistent, excessive fear or worry that interferes significantly with daily life.\n\n## Common Types\n\n**Generalized Anxiety Disorder (GAD)** involves persistent, excessive worry about various aspects of daily life.\n\n**Panic Disorder** is characterized by recurrent, unexpected panic attacks — sudden surges of intense fear with physical symptoms like racing heart and shortness of breath.\n\n**Social Anxiety Disorder** involves intense fear of social situations and scrutiny by others.\n\n## Signs to Watch For\n\n- Persistent, uncontrollable worry\n- Physical symptoms: rapid heart rate, sweating, trembling\n- Avoiding certain situations out of fear\n- Difficulty concentrating or sleeping\n- Irritability or restlessness\n\n## Evidence-Based Treatments\n\nThe good news: anxiety disorders are highly treatable. Effective options include:\n\n1. **Cognitive Behavioral Therapy (CBT)** — proven to be as effective as medication for many people\n2. **Medication** — SSRIs, SNRIs, and other medications can significantly reduce symptoms\n3. **Mindfulness and relaxation techniques**\n4. **Lifestyle modifications** — exercise, sleep hygiene, reduced caffeine\n\n## When to Seek Help\n\nIf anxiety is interfering with your work, relationships, or quality of life, it is time to speak with a mental health professional. You do not have to navigate this alone.`,
      category: 'anxiety' as const,
      tags: ['anxiety', 'mental health', 'CBT', 'treatment'],
      isPublished: true,
      publishedAt: new Date('2024-11-15'),
      readTimeMinutes: 6,
    },
    {
      slug: 'benefits-of-telepsychiatry',
      title: 'The Growing Benefits of Telepsychiatry: Mental Health Care From Home',
      excerpt: 'Telepsychiatry is transforming access to mental health care. Discover how remote psychiatric services can benefit you.',
      content: `## What Is Telepsychiatry?\n\nTelepsychiatry is the delivery of psychiatric assessment and care through telecommunications technology — most commonly video conferencing. Since 2020, it has become a mainstream and widely-accepted standard of care.\n\n## Why Telepsychiatry Works\n\n### Accessibility\nFor many people, getting to a clinic is a major barrier. Telepsychiatry eliminates transportation challenges, childcare needs, and time away from work.\n\n### Comfort and Privacy\nMany patients feel more comfortable opening up about sensitive topics in their own environment. This can actually improve therapeutic outcomes.\n\n### Continuity of Care\nTelehealth prevents treatment gaps during travel, illness, or schedule disruptions.\n\n## What to Expect at Your First Telehealth Appointment\n\n1. You will receive a secure link before your appointment\n2. Log in 5 minutes early to test your connection\n3. Find a private, quiet space\n4. Have your medication list and insurance card ready\n\n## Is Telepsychiatry Right for You?\n\nMost patients do well with telehealth. It is particularly suited for:\n- Medication management follow-ups\n- Therapy sessions\n- Psychoeducation\n- Ongoing monitoring\n\nReach out to our team to find out if telepsychiatry is right for your specific needs.`,
      category: 'telehealth' as const,
      tags: ['telepsychiatry', 'telehealth', 'remote care', 'convenience'],
      isPublished: true,
      publishedAt: new Date('2024-12-01'),
      readTimeMinutes: 5,
    },
    {
      slug: 'breaking-the-stigma-mental-health',
      title: 'Breaking the Stigma: Why Talking About Mental Health Matters',
      excerpt: 'Mental health stigma prevents millions from seeking help. Together, we can change the conversation and save lives.',
      content: `## The Weight of Stigma\n\nOne of the biggest barriers to mental health treatment is not the availability of care — it is stigma. Research shows that stigma and discrimination prevent approximately 60% of people with mental illness from seeking help.\n\n## Where Stigma Comes From\n\nMental health stigma stems from misunderstanding, fear, and longstanding cultural narratives that portray mental illness as weakness, personal failure, or danger.\n\n## The Real Cost\n\n- Delayed treatment (on average, 11 years pass between first symptoms and treatment)\n- Social isolation\n- Employment discrimination\n- Worse health outcomes overall\n\n## How to Fight Stigma\n\n### In Your Own Life\n- Use respectful, person-first language ("person with depression" vs. "depressed person")\n- Challenge myths when you hear them\n- Share your own experiences when you feel safe doing so\n\n### In Your Community\n- Support mental health organizations\n- Advocate for mental health days at work\n- Vote for policies that support mental health funding\n\n## Starting the Conversation\n\nIf you are struggling, reaching out is an act of courage — not weakness. At Diatan Health Services, we provide a judgment-free environment where your mental wellness is our priority.\n\n**Crisis support:** Call or text 988 (Suicide & Crisis Lifeline) anytime.`,
      category: 'wellness' as const,
      tags: ['stigma', 'mental health awareness', 'community', 'recovery'],
      isPublished: true,
      publishedAt: new Date('2025-01-10'),
      readTimeMinutes: 7,
    },
  ]).onConflictDoNothing();

  // Site Settings
  await db.insert(siteSettings).values([
    { key: 'practice_name', value: 'Diatan Health Services, LLC', type: 'string' as const, description: 'Practice name' },
    { key: 'practice_phone', value: '(954) 347-5845', type: 'string' as const, description: 'Main phone number' },
    { key: 'practice_email', value: 'info@diatanhealthservices.com', type: 'string' as const, description: 'Contact email' },
    { key: 'practice_address', value: '4200 NW 16th St. Suite 449, Lauderhill, FL 33313', type: 'string' as const, description: 'Office address' },
    { key: 'practice_hours', value: 'Monday to Friday', type: 'string' as const, description: 'Office hours' },
    { key: 'practice_tagline', value: 'Where mental wellness is our priority', type: 'string' as const, description: 'Tagline' },
    { key: 'crisis_line', value: '988', type: 'string' as const, description: 'Crisis hotline number' },
  ]).onConflictDoNothing();

  // Careers
  await db.insert(careers).values([
    {
      title: 'Psychiatric Mental Health Nurse Practitioner (PMHNP)',
      department: 'Clinical',
      location: 'Lauderhill, FL (Hybrid)',
      type: 'full_time',
      description: 'We are seeking a board-certified PMHNP to join our growing team. You will provide comprehensive psychiatric evaluations, medication management, and individual therapy to a diverse patient population.',
      requirements: ['Active PMHNP-BC certification', 'Florida APRN license', 'Minimum 2 years psychiatric experience', 'EMR proficiency', 'Strong communication skills'],
      status: 'open' as const,
    },
    {
      title: 'Licensed Clinical Social Worker (LCSW)',
      department: 'Clinical',
      location: 'Lauderhill, FL',
      type: 'full_time',
      description: 'Join our multidisciplinary team as an LCSW providing evidence-based individual therapy, psychoeducation, and care coordination services.',
      requirements: ['Florida LCSW license', 'Experience with trauma-informed care', 'Knowledge of CBT/DBT modalities', 'Bilingual (English/Spanish) preferred'],
      status: 'open' as const,
    },
    {
      title: 'Patient Care Coordinator',
      department: 'Administrative',
      location: 'Lauderhill, FL',
      type: 'full_time',
      description: 'Support our clinical team by managing patient scheduling, insurance verification, and providing compassionate front-desk support to patients and families.',
      requirements: ['Healthcare administrative experience', 'Insurance verification knowledge', 'EHR/scheduling software proficiency', 'Compassionate communication skills'],
      status: 'open' as const,
    },
  ]).onConflictDoNothing();

  console.log('Database seeded successfully!');
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});

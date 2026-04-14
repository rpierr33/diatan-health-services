import {
  pgTable,
  pgEnum,
  serial,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ─── Enums ────────────────────────────────────────────────────────────────────

export const appointmentStatusEnum = pgEnum('appointment_status', [
  'new',
  'confirmed',
  'in_progress',
  'completed',
  'cancelled',
]);

export const inquiryStatusEnum = pgEnum('inquiry_status', [
  'new',
  'contacted',
  'resolved',
  'closed',
]);

export const inquirySourceEnum = pgEnum('inquiry_source', [
  'contact_form',
  'appointment_form',
  'careers_form',
  'phone',
  'referral',
  'other',
]);

export const blogCategoryEnum = pgEnum('blog_category', [
  'mental_health',
  'anxiety',
  'depression',
  'trauma',
  'wellness',
  'medication',
  'therapy',
  'telehealth',
  'crisis',
  'substance_use',
]);

export const siteSettingTypeEnum = pgEnum('site_setting_type', [
  'string',
  'number',
  'boolean',
  'json',
]);

export const careerStatusEnum = pgEnum('career_status', [
  'open',
  'closed',
  'filled',
]);

// ─── Tables ───────────────────────────────────────────────────────────────────

export const providers = pgTable('providers', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  credentials: varchar('credentials', { length: 255 }).notNull().default(''),
  specialties: jsonb('specialties').$type<string[]>().default([]),
  bio: text('bio').notNull().default(''),
  photoUrl: varchar('photo_url', { length: 500 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 30 }),
  isActive: boolean('is_active').notNull().default(true),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  patientFirstName: varchar('patient_first_name', { length: 100 }).notNull(),
  patientLastName: varchar('patient_last_name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 30 }).notNull(),
  dateOfBirth: varchar('date_of_birth', { length: 50 }),
  insurance: varchar('insurance', { length: 255 }).notNull().default('self_pay'),
  memberId: varchar('member_id', { length: 100 }),
  focusArea: varchar('focus_area', { length: 255 }).notNull(),
  preferredDate: varchar('preferred_date', { length: 100 }),
  preferredTime: varchar('preferred_time', { length: 50 }),
  appointmentType: varchar('appointment_type', { length: 50 }).notNull().default('in_person'),
  message: text('message'),
  isNewPatient: boolean('is_new_patient').notNull().default(true),
  hipaaConsent: boolean('hipaa_consent').notNull().default(false),
  status: appointmentStatusEnum('status').notNull().default('new'),
  assignedProviderId: integer('assigned_provider_id').references(() => providers.id),
  notes: text('notes'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 30 }),
  message: text('message').notNull(),
  source: inquirySourceEnum('source').notNull().default('contact_form'),
  status: inquiryStatusEnum('status').notNull().default('new'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 500 }).notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),
  coverImageUrl: varchar('cover_image_url', { length: 500 }),
  authorId: integer('author_id').references(() => providers.id),
  category: blogCategoryEnum('category').notNull().default('mental_health'),
  tags: jsonb('tags').$type<string[]>().default([]),
  isPublished: boolean('is_published').notNull().default(false),
  publishedAt: timestamp('published_at'),
  readTimeMinutes: integer('read_time_minutes').notNull().default(5),
  seoTitle: varchar('seo_title', { length: 255 }),
  seoDescription: varchar('seo_description', { length: 500 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  text: text('text').notNull(),
  conditionTreated: varchar('condition_treated', { length: 255 }),
  isVerified: boolean('is_verified').notNull().default(true),
  isFeatured: boolean('is_featured').notNull().default(false),
  displayOrder: integer('display_order').notNull().default(0),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  longDescription: text('long_description'),
  icon: varchar('icon', { length: 100 }).notNull().default('heart'),
  displayOrder: integer('display_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const conditions = pgTable('conditions', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description').notNull(),
  category: varchar('category', { length: 100 }).notNull().default('general'),
  displayOrder: integer('display_order').notNull().default(0),
  isActive: boolean('is_active').notNull().default(true),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const siteSettings = pgTable('site_settings', {
  id: serial('id').primaryKey(),
  key: varchar('key', { length: 255 }).notNull().unique(),
  value: text('value').notNull(),
  type: siteSettingTypeEnum('type').notNull().default('string'),
  description: varchar('description', { length: 500 }),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

export const insurancePlans = pgTable('insurance_plans', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  isActive: boolean('is_active').notNull().default(true),
  displayOrder: integer('display_order').notNull().default(0),
});

export const careers = pgTable('careers', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  department: varchar('department', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }).notNull().default('Lauderhill, FL'),
  type: varchar('type', { length: 100 }).notNull().default('full_time'),
  description: text('description').notNull(),
  requirements: jsonb('requirements').$type<string[]>().default([]),
  status: careerStatusEnum('status').notNull().default('open'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const careerApplications = pgTable('career_applications', {
  id: serial('id').primaryKey(),
  careerId: integer('career_id').references(() => careers.id),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 30 }),
  coverLetter: text('cover_letter'),
  resumeUrl: varchar('resume_url', { length: 500 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// ─── Relations ────────────────────────────────────────────────────────────────

export const providersRelations = relations(providers, ({ many }) => ({
  appointments: many(appointments),
  blogPosts: many(blogPosts),
}));

export const appointmentsRelations = relations(appointments, ({ one }) => ({
  provider: one(providers, {
    fields: [appointments.assignedProviderId],
    references: [providers.id],
  }),
}));

export const blogPostsRelations = relations(blogPosts, ({ one }) => ({
  author: one(providers, {
    fields: [blogPosts.authorId],
    references: [providers.id],
  }),
}));

export const careersRelations = relations(careers, ({ many }) => ({
  applications: many(careerApplications),
}));

export const careerApplicationsRelations = relations(careerApplications, ({ one }) => ({
  career: one(careers, {
    fields: [careerApplications.careerId],
    references: [careers.id],
  }),
}));

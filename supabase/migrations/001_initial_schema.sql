-- =========================================================
-- InfinityTech SA – Initial Database Schema
-- =========================================================

-- Enable extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm"; -- for text search

-- =========================================================
-- PRODUCTS
-- =========================================================
create table public.products (
  id            uuid primary key default uuid_generate_v4(),
  slug          text not null unique,
  title_ar      text not null,
  title_en      text not null,
  description_ar text not null,
  description_en text not null,
  hero_badge_ar  text not null default '',
  hero_badge_en  text not null default '',
  accent_color   text not null default '#00c6ff',
  hero_image_url text,
  overview_image_url text,
  features_ar   jsonb not null default '[]',
  features_en   jsonb not null default '[]',
  stats_ar      jsonb not null default '[]',
  stats_en      jsonb not null default '[]',
  cta_product_url text,
  is_published  boolean not null default true,
  sort_order    integer not null default 0,
  seo_title_ar  text,
  seo_title_en  text,
  seo_description_ar text,
  seo_description_en text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create index products_slug_idx on public.products(slug);
create index products_published_idx on public.products(is_published, sort_order);

-- =========================================================
-- ARTICLES
-- =========================================================
create table public.articles (
  id             uuid primary key default uuid_generate_v4(),
  slug           text not null unique,
  title_ar       text not null,
  title_en       text not null,
  excerpt_ar     text not null default '',
  excerpt_en     text not null default '',
  body_ar        text not null default '',
  body_en        text not null default '',
  hero_image_url text,
  category_ar    text not null default '',
  category_en    text not null default '',
  read_time_minutes integer not null default 5,
  published_at   timestamptz,
  is_published   boolean not null default false,
  related_product_slug text references public.products(slug) on delete set null,
  seo_title_ar   text,
  seo_title_en   text,
  seo_description_ar text,
  seo_description_en text,
  og_image_url   text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create index articles_slug_idx on public.articles(slug);
create index articles_published_idx on public.articles(is_published, published_at desc);

-- =========================================================
-- PROJECTS / PORTFOLIO
-- =========================================================
create table public.projects (
  id           uuid primary key default uuid_generate_v4(),
  title_ar     text not null,
  title_en     text not null,
  description_ar text not null,
  description_en text not null,
  client_name  text not null default '',
  badge_ar     text not null default '',
  badge_en     text not null default '',
  badge_color  text not null default 'rgba(123,47,247,0.9)',
  images       text[] not null default '{}',
  is_published boolean not null default true,
  sort_order   integer not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index projects_published_idx on public.projects(is_published, sort_order);

-- =========================================================
-- TESTIMONIALS
-- =========================================================
create table public.testimonials (
  id         uuid primary key default uuid_generate_v4(),
  name_ar    text not null,
  name_en    text not null,
  role_ar    text not null,
  role_en    text not null,
  content_ar text not null,
  content_en text not null,
  initials   text not null,
  is_published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index testimonials_published_idx on public.testimonials(is_published, sort_order);

-- =========================================================
-- LEADS (contact + demo requests)
-- =========================================================
create table public.leads (
  id            uuid primary key default uuid_generate_v4(),
  full_name     text not null,
  email         text not null,
  phone         text,
  brand_name    text,
  num_locations text,
  country       text,
  message       text,
  wants_demo    boolean not null default false,
  status        text not null default 'new' check (status in ('new', 'read', 'responded')),
  created_at    timestamptz not null default now()
);

create index leads_status_idx on public.leads(status, created_at desc);
create index leads_email_idx on public.leads(email);

-- =========================================================
-- JOB LISTINGS
-- =========================================================
create table public.job_listings (
  id               uuid primary key default uuid_generate_v4(),
  title_ar         text not null,
  title_en         text not null,
  department_ar    text not null,
  department_en    text not null,
  location_ar      text not null,
  location_en      text not null,
  type_ar          text not null default 'دوام كامل',
  type_en          text not null default 'Full Time',
  description_ar   text not null default '',
  description_en   text not null default '',
  requirements_ar  text[] not null default '{}',
  requirements_en  text[] not null default '{}',
  is_published     boolean not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index job_listings_published_idx on public.job_listings(is_published, created_at desc);

-- =========================================================
-- JOB APPLICATIONS
-- =========================================================
create table public.job_applications (
  id              uuid primary key default uuid_generate_v4(),
  job_listing_id  uuid not null references public.job_listings(id) on delete cascade,
  applicant_name  text not null,
  email           text not null,
  phone           text,
  cover_letter    text,
  resume_url      text, -- signed Supabase Storage URL (private bucket)
  status          text not null default 'new' check (status in ('new', 'reviewed', 'shortlisted', 'rejected')),
  created_at      timestamptz not null default now()
);

create index job_applications_job_idx on public.job_applications(job_listing_id, created_at desc);
create index job_applications_status_idx on public.job_applications(status);

-- =========================================================
-- SITE SETTINGS (key-value store)
-- =========================================================
create table public.site_settings (
  id         uuid primary key default uuid_generate_v4(),
  key        text not null unique,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

-- Seed default settings
insert into public.site_settings (key, value) values
  ('logo_url',        '"images/Logo.png"'),
  ('phone',           '"+966 57 429 5925"'),
  ('email',           '"info@infinitytechsa.com"'),
  ('address_ar',      '"الرياض، المملكة العربية السعودية"'),
  ('address_en',      '"Riyadh, Saudi Arabia"'),
  ('social_linkedin', '"#"'),
  ('social_twitter',  '"#"'),
  ('social_instagram','"#"'),
  ('social_youtube',  '"#"'),
  ('footer_tagline_ar', '"نحن شركة متخصصة في حلول التكنولوجيا للمطاعم والمنشآت التجارية في المنطقة العربية والعالم."'),
  ('footer_tagline_en', '"We are a company specialized in technology solutions for restaurants and commercial establishments in the Arab region and worldwide."');

-- =========================================================
-- ACTIVITY LOG (audit trail)
-- =========================================================
create table public.activity_log (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null,
  user_email  text not null,
  action      text not null,  -- 'create' | 'update' | 'delete'
  entity_type text not null,  -- 'product' | 'article' | 'project' | etc.
  entity_id   text,
  details     jsonb,
  created_at  timestamptz not null default now()
);

create index activity_log_user_idx on public.activity_log(user_id, created_at desc);
create index activity_log_entity_idx on public.activity_log(entity_type, entity_id);

-- =========================================================
-- updated_at TRIGGERS
-- =========================================================
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger products_updated_at before update on public.products
  for each row execute function public.handle_updated_at();

create trigger articles_updated_at before update on public.articles
  for each row execute function public.handle_updated_at();

create trigger projects_updated_at before update on public.projects
  for each row execute function public.handle_updated_at();

create trigger testimonials_updated_at before update on public.testimonials
  for each row execute function public.handle_updated_at();

create trigger job_listings_updated_at before update on public.job_listings
  for each row execute function public.handle_updated_at();

create trigger site_settings_updated_at before update on public.site_settings
  for each row execute function public.handle_updated_at();

-- =========================================================
-- ROW LEVEL SECURITY
-- =========================================================
alter table public.products       enable row level security;
alter table public.articles       enable row level security;
alter table public.projects       enable row level security;
alter table public.testimonials   enable row level security;
alter table public.leads          enable row level security;
alter table public.job_listings   enable row level security;
alter table public.job_applications enable row level security;
alter table public.site_settings  enable row level security;
alter table public.activity_log   enable row level security;

-- Public can read published content only
create policy "public_read_products"
  on public.products for select
  using (is_published = true);

create policy "public_read_articles"
  on public.articles for select
  using (is_published = true);

create policy "public_read_projects"
  on public.projects for select
  using (is_published = true);

create policy "public_read_testimonials"
  on public.testimonials for select
  using (is_published = true);

create policy "public_read_job_listings"
  on public.job_listings for select
  using (is_published = true);

create policy "public_read_site_settings"
  on public.site_settings for select
  using (true);

-- Public can insert leads and job applications (no auth needed)
create policy "public_insert_leads"
  on public.leads for insert
  with check (true);

create policy "public_insert_job_applications"
  on public.job_applications for insert
  with check (true);

-- Authenticated admins can do everything
create policy "admin_all_products"
  on public.products for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_articles"
  on public.articles for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_projects"
  on public.projects for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_testimonials"
  on public.testimonials for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_leads"
  on public.leads for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_job_listings"
  on public.job_listings for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_job_applications"
  on public.job_applications for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_site_settings"
  on public.site_settings for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

create policy "admin_all_activity_log"
  on public.activity_log for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

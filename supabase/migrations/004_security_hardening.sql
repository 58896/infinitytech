-- =========================================================
-- Stage 9 Security Hardening
-- =========================================================

-- Tighten job_applications insert policy so anonymous users can only
-- apply to job listings that are currently published.
-- (The server action also enforces this at the application layer, but
-- this RLS policy provides defence-in-depth for any direct API calls.)
drop policy if exists "public_insert_job_applications" on public.job_applications;

create policy "public_insert_job_applications"
  on public.job_applications for insert
  with check (
    exists (
      select 1 from public.job_listings
      where id = job_listing_id
        and is_published = true
    )
  );

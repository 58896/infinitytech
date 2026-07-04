-- Create private resumes bucket for job application uploads
insert into storage.buckets (id, name, public)
values ('resumes', 'resumes', false)
on conflict (id) do nothing;

-- Authenticated admins can read resumes
create policy "admin_read_resumes"
  on storage.objects for select
  using (bucket_id = 'resumes' and auth.role() = 'authenticated');

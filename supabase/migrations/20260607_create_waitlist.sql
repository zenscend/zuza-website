-- Waitlist table for zuzatech.com marketing site
create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  created_at  timestamptz not null default now()
);

-- Index for fast lookup by email
create index if not exists waitlist_email_idx on public.waitlist (email);

-- Allow anonymous inserts from the marketing site (publishable key)
alter table public.waitlist enable row level security;

create policy "Allow public insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Only the service role can read (keep signups private)
create policy "Service role can read"
  on public.waitlist
  for select
  to service_role
  using (true);

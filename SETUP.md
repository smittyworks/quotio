# Quotio Setup Guide

## 1. Supabase Setup

### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Create a new project
3. Wait for the project to be ready

### Get Your Credentials
1. Go to Project Settings > API
2. Copy the `URL` and `anon/public` key
3. Update `.env.local` with these values:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```

### Create the Database Table
1. Go to the SQL Editor in your Supabase dashboard
2. Run this SQL to create the waitlist table:

```sql
-- Create waitlist table
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);

-- Create an index on created_at for sorting
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Create a policy that allows anyone to read (for admin view)
CREATE POLICY "Anyone can view waitlist" ON waitlist
  FOR SELECT
  USING (true);
```

## 2. Resend Setup (Email Sending)

### Get Your API Key
1. Go to [resend.com](https://resend.com) and sign up/login
2. Create an API key
3. Add your domain or use the test domain `onboarding@resend.dev`
4. Update `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

## 3. Run the Application

```bash
npm run dev
```

Visit `http://localhost:3000` to see your landing page!

## 4. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel project settings
5. Deploy!

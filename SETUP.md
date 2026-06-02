# Quotio Setup Guide

## 1. Neon Setup

### Create a Neon Project
1. Go to [neon.tech](https://neon.tech) and sign up/login
2. Create a new project
3. Wait for the project to be ready

### Get Your Connection String
1. Go to your project dashboard
2. Click **Connect** and copy the **pooled connection string**
3. Update `.env.local`:
   ```
   DATABASE_URL=postgresql://user:password@ep-xxx-pooler.region.aws.neon.tech/neondb?sslmode=require
   ```

### Create the Database Table
1. Go to the **SQL Editor** in your Neon dashboard
2. Run this SQL to create the waitlist table:

```sql
CREATE TABLE waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created_at ON waitlist(created_at DESC);
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
npm install
npm run dev
```

Visit `http://localhost:3000` to see your landing page!

## 4. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel project settings (`DATABASE_URL`, `RESEND_API_KEY`)
5. Deploy!

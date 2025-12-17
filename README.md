# Quotio

**Tagline:** Instant quotes. Fewer emails.

A demo SaaS landing page with waitlist functionality, built for portfolio purposes.

## Features

- 🎨 Modern, responsive landing page design
- 📧 Email waitlist capture with Supabase
- ✉️ Automated confirmation emails via Resend
- 📊 Admin dashboard to view signups
- 🚀 Built with Next.js 15, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Email:** Resend
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- A Resend account and API key

### Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and fill in your credentials
   - See `SETUP.md` for detailed instructions on setting up Supabase and Resend

4. Run the database migration (see `SETUP.md`)

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Admin Dashboard

Visit `/admin` to see all waitlist signups.

## Deployment

See `SETUP.md` for instructions on deploying to Vercel.

## Note

Quotio is a fictional product created for demonstration purposes. This project showcases a modern SaaS landing page with full-stack functionality.

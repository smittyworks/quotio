import WaitlistForm from "@/components/WaitlistForm";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import {
  HeroBackground,
  FeaturesBackground,
  WaitlistBackground,
  HowItWorksBackground,
  ProblemsBackground,
} from "@/components/BackgroundPatterns";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-12" />
            <span className="text-xl font-semibold text-text-primary">
              Quotio
            </span>
            <span className="text-sm text-text-tertiary">Beta</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <HeroBackground />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold text-text-primary md:text-5xl lg:text-6xl">
            Create accurate quotes in minutes, not inbox threads.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
            Quotio helps service businesses capture project details, generate
            clean quotes, and respond faster — without spreadsheets or
            back-and-forth emails.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-border-light bg-surface px-8 py-3 font-medium text-text-primary transition-colors hover:bg-surface-alt"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="relative overflow-hidden border-y border-border bg-surface px-6 py-20">
        <ProblemsBackground />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-text-primary">
            Quoting shouldn't be this hard.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-surface-alt p-6">
              <div className="text-2xl">📧</div>
              <h3 className="mt-4 font-semibold text-text-primary">
                Incomplete customer requests
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Endless back-and-forth just to get the details you need.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface-alt p-6">
              <div className="text-2xl">📋</div>
              <h3 className="mt-4 font-semibold text-text-primary">
                Manual copy-paste between tools
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Jumping between email, spreadsheets, and documents wastes time.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-surface-alt p-6">
              <div className="text-2xl">⏰</div>
              <h3 className="mt-4 font-semibold text-text-primary">
                Slow response times that lose deals
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Your competitors are faster, and you're losing opportunities.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-text-secondary">
              Quotio replaces messy email chains with a structured intake and
              quoting workflow that's easy for both you and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden px-6 py-20">
        <FeaturesBackground />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-light">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Structured Intake
              </h3>
              <p className="mt-2 text-text-secondary">
                Capture exactly the information you need with customizable quote
                forms.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-light">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Faster Responses
              </h3>
              <p className="mt-2 text-text-secondary">
                Generate clean, professional quotes in minutes instead of hours.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-light">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Centralized Requests
              </h3>
              <p className="mt-2 text-text-secondary">
                All quote requests in one place — searchable, sortable, and easy
                to manage.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-light">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                Built for Small Teams
              </h3>
              <p className="mt-2 text-text-secondary">
                No bloated CRM. Just the essentials you actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="relative overflow-hidden border-y border-border bg-surface px-6 py-20"
      >
        <HowItWorksBackground />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-text-primary">
            How it works
          </h2>
          <div className="mt-16 space-y-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Customer submits a request
                </h3>
                <p className="mt-2 text-text-secondary">
                  Structured form captures the right details upfront.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  You review & adjust
                </h3>
                <p className="mt-2 text-text-secondary">
                  No chasing info. Everything is already there.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-text-primary">
                  Send a polished quote
                </h3>
                <p className="mt-2 text-text-secondary">
                  Respond faster and win more deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="px-6 py-20">
        <div className="mx-auto max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:p-12">
            {/* <WaitlistBackground /> */}
            <div className="relative">
              <h2 className="text-center text-3xl font-semibold text-text-primary">
                Be the first to try Quotio
              </h2>
              <p className="mt-4 text-center text-text-secondary">
                We're opening early access soon. Join the waitlist to get
                updates and early access when we launch.
              </p>
              <WaitlistForm />
              <p className="mt-4 text-center text-sm text-text-tertiary">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12" />
          </div>
          <p className="text-lg font-semibold text-text-primary">Quotio</p>
          <p className="mt-2 text-sm text-text-tertiary">© 2025 Quotio</p>
          <p className="mt-4 text-xs text-text-tertiary">
            Quotio is a fictional product created for demonstration purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

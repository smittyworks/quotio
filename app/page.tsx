import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl">
            Create accurate quotes in minutes, not inbox threads.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600 md:text-xl">
            Quotio helps service businesses capture project details, generate clean quotes, and respond faster — without spreadsheets or back-and-forth emails.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Join the waitlist
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg border border-neutral-300 bg-white px-8 py-3 font-medium text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="border-y border-neutral-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-neutral-900">
            Quoting shouldn't be this hard.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-2xl">📧</div>
              <h3 className="mt-4 font-semibold text-neutral-900">Incomplete customer requests</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Endless back-and-forth just to get the details you need.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-2xl">📋</div>
              <h3 className="mt-4 font-semibold text-neutral-900">Manual copy-paste between tools</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Jumping between email, spreadsheets, and documents wastes time.
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6">
              <div className="text-2xl">⏰</div>
              <h3 className="mt-4 font-semibold text-neutral-900">Slow response times that lose deals</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Your competitors are faster, and you're losing opportunities.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-600">
              Quotio replaces messy email chains with a structured intake and quoting workflow that's easy for both you and your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">Structured Intake</h3>
              <p className="mt-2 text-neutral-600">
                Capture exactly the information you need with customizable quote forms.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">Faster Responses</h3>
              <p className="mt-2 text-neutral-600">
                Generate clean, professional quotes in minutes instead of hours.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">Centralized Requests</h3>
              <p className="mt-2 text-neutral-600">
                All quote requests in one place — searchable, sortable, and easy to manage.
              </p>
            </div>

            <div className="rounded-lg border border-neutral-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">Built for Small Teams</h3>
              <p className="mt-2 text-neutral-600">
                No bloated CRM. Just the essentials you actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-y border-neutral-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-semibold text-neutral-900">
            How it works
          </h2>
          <div className="mt-16 space-y-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-semibold text-white">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Customer submits a request</h3>
                <p className="mt-2 text-neutral-600">
                  Structured form captures the right details upfront.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-semibold text-white">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">You review & adjust</h3>
                <p className="mt-2 text-neutral-600">
                  No chasing info. Everything is already there.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xl font-semibold text-white">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">Send a polished quote</h3>
                <p className="mt-2 text-neutral-600">
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
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-12">
            <h2 className="text-center text-3xl font-semibold text-neutral-900">
              Be the first to try Quotio
            </h2>
            <p className="mt-4 text-center text-neutral-600">
              We're opening early access soon. Join the waitlist to get updates and early access when we launch.
            </p>
            <WaitlistForm />
            <p className="mt-4 text-center text-sm text-neutral-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg font-semibold text-neutral-900">Quotio</p>
          <p className="mt-2 text-sm text-neutral-500">
            © 2025 Quotio
          </p>
          <p className="mt-4 text-xs text-neutral-400">
            Quotio is a fictional product created for demonstration purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

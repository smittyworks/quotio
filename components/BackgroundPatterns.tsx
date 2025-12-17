export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-accent opacity-10 blur-3xl dark:opacity-20" />
      <div className="absolute -left-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-accent-medium opacity-8 blur-3xl dark:opacity-15" />

      {/* Grid Pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="hero-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 32V0h32"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              className="dark:stroke-neutral-700"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-grid)"
          className="opacity-20 dark:opacity-25"
        />
      </svg>
    </div>
  );
}

export function FeaturesBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dots Pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="features-dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              fill="#94a3b8"
              className="dark:fill-neutral-700"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#features-dots)"
          className="opacity-25 dark:opacity-30"
        />
      </svg>

      {/* Floating Shapes */}
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-accent opacity-8 blur-3xl dark:opacity-10" />
      <div className="absolute left-0 bottom-1/4 h-48 w-48 rounded-full bg-accent-light opacity-8 blur-2xl dark:opacity-10" />
    </div>
  );
}

export function WaitlistBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent-medium/8 dark:from-accent/10 dark:to-accent-medium/10" />

      {/* Geometric Lines */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="waitlist-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 20h40M20 0v40"
              stroke="#94a3b8"
              strokeWidth="1"
              fill="none"
              className="dark:stroke-neutral-700"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#waitlist-lines)"
          className="opacity-5 dark:opacity-25"
        />
      </svg>

      {/* Corner Accent */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent opacity-10 blur-2xl dark:opacity-15" />
    </div>
  );
}

export function HowItWorksBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Diagonal Lines Pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="diagonal-lines"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="60"
              stroke="#94a3b8"
              strokeWidth="1.5"
              className="dark:stroke-neutral-700"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#diagonal-lines)"
          className="opacity-15 dark:opacity-30"
        />
      </svg>

      {/* Gradient Accents */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-3xl dark:from-accent/15" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tl from-accent-medium/10 to-transparent blur-3xl dark:from-accent-medium/15" />
    </div>
  );
}

export function ProblemsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Hexagon Pattern */}
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="hexagons"
            width="50"
            height="43.4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0L50 14.43V28.87L25 43.3L0 28.87V14.43L25 0Z"
              stroke="#94a3b8"
              strokeWidth="1"
              fill="none"
              className="dark:stroke-neutral-700"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hexagons)"
          className="opacity-10 dark:opacity-10"
        />
      </svg>
    </div>
  );
}

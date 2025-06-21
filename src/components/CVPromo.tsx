import Link from 'next/link';

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.651l-4.752-.382-1.831-4.401z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CVPromo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="rounded-lg border border-teal-200/50 bg-gradient-to-br from-teal-50 to-white p-4 dark:border-teal-800/50 dark:from-teal-950/20 dark:to-zinc-900">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-teal-500 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
              <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
            New Service
          </span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <h4 className="mb-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          Resume Analysis
        </h4>
        <p className="mb-3 text-xs text-zinc-600 dark:text-zinc-400">
          9-point analysis with 97% satisfaction rate
        </p>

        <Link
          href="https://cv.katsuba.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 rounded-md bg-teal-500 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-teal-600"
        >
          Try Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl border border-teal-200/50 bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 sm:p-8 dark:border-teal-800/50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-teal-950/20">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 via-transparent to-teal-400/10" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-teal-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" />
                <path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
              New Service
            </span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="size-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Get Your Resume Analyzed
        </h3>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          Professional 9-point resume analysis service. Get detailed feedback across all key
          criteria that technical hiring teams evaluate.
        </p>

        <div className="mb-6 grid grid-cols-2 gap-4 text-xs">
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4 text-teal-500" />
            <span className="text-zinc-700 dark:text-zinc-300">9-point analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4 text-teal-500" />
            <span className="text-zinc-700 dark:text-zinc-300">48h turnaround</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4 text-teal-500" />
            <span className="text-zinc-700 dark:text-zinc-300">97% satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="size-4 text-teal-500" />
            <span className="text-zinc-700 dark:text-zinc-300">450+ analyzed</span>
          </div>
        </div>

        <Link
          href="https://cv.katsuba.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-600 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-zinc-900"
        >
          Try CV Analysis
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

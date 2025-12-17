import Image from "next/image";

export default function Home() {
  return (
    // Uses --color-base for the background
    <div className="flex min-h-screen items-center justify-center bg-base font-sans selection:bg-accent selection:text-white">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-between py-24 px-8 sm:items-start">
        
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <div className="flex flex-col gap-8 w-full">
          <div className="space-y-4">
            {/* Uses --color-heading */}
            <h1 className="text-4xl font-bold tracking-tight text-heading">
              Brand Color Integration Test
            </h1>
            {/* Uses --color-paragraph */}
            <p className="max-w-xl text-lg leading-relaxed text-paragraph">
              Your new theme is now active. This page uses <span className="text-accent font-bold">accent colors</span> for emphasis and <span className="text-success font-semibold">success state</span> indicators.
            </p>
          </div>

          {/* Feature Card Testing --color-feature */}
          <div className="rounded-xl border border-accent/20 bg-feature p-6 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Theme Preview</h3>
            <div className="flex flex-wrap gap-4">
               <span className="px-3 py-1 rounded bg-success text-white text-xs">Success</span>
               <span className="px-3 py-1 rounded bg-warning text-white text-xs">Warning</span>
               <span className="px-3 py-1 rounded bg-failure text-white text-xs">Failure</span>
            </div>
          </div>

          {/* Syntax Highlighting Test Block using --color-code */}
          <div className="w-full overflow-hidden rounded-lg bg-code shadow-lg">
            <div className="flex items-center justify-between bg-toolbar-background px-4 py-2">
              <span className="text-xs font-mono text-language-label">brand-colors.css</span>
            </div>
            <pre className="p-4 font-mono text-sm leading-6 overflow-x-auto">
              <code>
                <span className="text-syntax-keyword">@theme</span> {'{'} <br />
                &nbsp;&nbsp;<span className="text-syntax-property">--color-accent</span>: <span className="text-syntax-string">var(--color-accent-raw)</span>;<br />
                &nbsp;&nbsp;<span className="text-syntax-comment">/* Testing syntax highlighting colors */</span><br />
                {'}'}
              </code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 text-white transition-all hover:brightness-110"
            href="#"
          >
            Primary Action
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-accent px-8 text-link transition-colors hover:bg-accent/5"
            href="#"
          >
            View Docs
          </a>
        </div>

        <footer className="mt-16 text-caption text-sm">
          © Suryansh Singh 2025
        </footer>
      </main>
    </div>
  );
}

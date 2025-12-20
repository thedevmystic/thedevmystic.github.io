import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base font-sans text-body selection:bg-accent selection:text-white transition-colors duration-300">
      <main className="container-fluid py-xl flow">
        
        {/* Header Section */}
        <header className="flex flex-col gap-sm sm:flex-row sm:items-center sm:justify-between border-b border-accent/10 pb-md">
          <div className="flex items-center gap-4">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={24}
              priority
            />
            <span className="text-caption text-xs uppercase tracking-widest border-l pl-4 border-accent/20">
              Dev Suite 2025
            </span>
          </div>
          <nav className="flex gap-md text-sm font-medium text-link">
            <a href="#" className="hover:text-hover transition-colors">Documentation</a>
            <a href="#" className="hover:text-hover transition-colors">Components</a>
          </nav>
        </header>

        {/* Hero Section - Tests Fluid Typography Step 5 & 1 */}
        <section className="py-lg">
          <h1 className="text-4xl font-bold tracking-tight text-heading leading-[1.1]">
            Fluid Design System <span className="text-accent">Integrity Test</span>
          </h1>
          <p className="mt-sm text-lg text-paragraph leading-normal">
            Testing <span className="font-mono text-code bg-code text-paragraph px-1 rounded">fluid-typography.css</span> and <span className="font-mono text-code bg-code text-paragraph px-1 rounded ml-1">brand-colors.css</span>.
	    Resize your browser to watch the typography and spacing scale harmoniously.
          </p>
        </section>

        {/* Color Palette Grid - Tests Semantic Brand Colors */}
        <section className="flow">
          <h2 className="text-2xl font-bold text-heading">Brand Palette</h2>
          <div className="grid grid-cols-2 gap-xs-sm sm:grid-cols-4">
            <ColorCard label="Accent" bg="bg-accent" text="text-white" hex="--color-accent" />
            <ColorCard label="Success" bg="bg-success" text="text-white" hex="--color-success" />
            <ColorCard label="Warning" bg="bg-warning" text="text-white" hex="--color-warning" />
            <ColorCard label="Failure" bg="bg-failure" text="text-white" hex="--color-failure" />
          </div>
        </section>

        {/* Feature & Layout Test - Tests Fluid Spacing & Utilities */}
        <div className="grid-main mt-xl">
          {/* Main Content Area (8 columns) */}
          <div className="col-span-12 lg:col-span-8 bg-feature rounded-2xl p-md-lg border border-accent/10 flow">
            <h3 className="text-xl font-bold text-heading">Component Integration</h3>
            <p className="text-base text-paragraph">
              This card uses <code className="text-paragraph bg-code text-code">p-md-lg</code> for fluid padding and the 
              <code className="text-paragraph bg-code text-code">flow</code> utility for consistent vertical rhythm between elements.
            </p>
            
            <div className="flex flex-wrap gap-sm">
              <button className="h-12 px-lg rounded-full text-white bg-accent text-button font-bold hover:brightness-110 transition-all">
                Primary Button
              </button>
              <button className="h-12 px-lg rounded-full border-2 border-accent text-link font-bold hover:bg-accent/5 transition-all">
                Outline Action
              </button>
            </div>
          </div>

          {/* Sidebar Area (4 columns) */}
          <aside className="col-span-12 lg:col-span-4 space-y-sm">
            <div className="bg-code rounded-xl p-sm border border-accent/5">
              <div className="flex items-center justify-between mb-xs">
                <span className="text-xs font-mono text-language-label">system-check.sh</span>
                <div className="flex gap-1">
                   <div className="w-2 h-2 rounded-full bg-failure/50" />
                   <div className="w-2 h-2 rounded-full bg-warning/50" />
                   <div className="w-2 h-2 rounded-full bg-success/50" />
                </div>
              </div>
              <pre className="text-code leading-code overflow-x-auto">
                <code>
                  <span className="text-syntax-keyword">if</span> [ <span className="text-syntax-string">"$THEME"</span> == <span className="text-syntax-string">"VALID"</span> ]; <span className="text-syntax-keyword">then</span><br />
                  &nbsp;&nbsp;echo <span className="text-syntax-string">"Deploying Fluid UI..."</span><br />
                  <span className="text-syntax-keyword">fi</span>
                </code>
              </pre>
            </div>
            <p className="text-caption text-sm italic">
              * The code block above tests fluid monospace sizing and syntax highlighting colors.
            </p>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-2xl pt-lg border-t border-accent/10 text-center sm:text-left">
          <p className="text-caption text-sm">
            © 2025 Suryansh Singh. Built with Next.js and Custom Fluid Tokens.
          </p>
        </footer>
      </main>
    </div>
  );
}

function ColorCard({ label, bg, text, hex }: { label: string, bg: string, text: string, hex: string }) {
  return (
    <div className={`${bg} ${text} p-xs rounded-lg shadow-sm flex flex-col justify-end min-h-[100px]`}>
      <span className="font-bold text-sm">{label}</span>
      <span className="opacity-80 text-xs font-mono">{hex}</span>
    </div>
  );
}

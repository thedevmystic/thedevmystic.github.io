import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-base font-sans text-body selection:bg-accent selection:text-white transition-colors duration-300">
      <main className="container-fluid py-xl space-y-2xl">
        
        <header className="flex flex-col gap-sm sm:flex-row sm:items-center sm:justify-between border-b border-accent/10 pb-md">
          <div className="flex items-center gap-4">
            <span className="text-caption text-base uppercase tracking-widest border-accent/20">
              TheDevMystic 2025
            </span>
          </div>
          <nav className="flex gap-md text-sm font-medium text-link">
            <a href="#" className="hover:text-hover transition-colors">Documentation</a>
            <a href="#" className="hover:text-hover transition-colors">Components</a>
          </nav>
        </header>

        <section className="py-lg flow">
	  <h1>
              Design System & Typography Test
          </h1>
	  <p>
            <span className="lead">The</span> architecture of this design system prioritizes visual stability and technical performance through advanced CSS strategies. By leveraging <span className="font-mono bg-code px-1 rounded">variable font faces</span> and precise metric overrides, we ensure that the transition between system fallbacks and custom typefaces remains virtually imperceptible to the end user.
          </p>
	  <p>
            Beyond mere aesthetics, the integration of <span className="font-mono bg-code px-1 rounded">fluid-typography.css</span> creates a responsive environment where mathematical scaling governs every element. This ensures that the vertical rhythm and component spacing adapt harmoniously across all viewport dimensions without manual breakpoint intervention.
          </p>
	  <p>
	    The typographic scales are based on Utopia. Creating a harmonious, and modular scaled typographic rhythming. Which in turn, creates a beautiful website. We got quite beautiful link too, like <a href="#">a cool link</a>, and of course <a href="https://github.com/thedevmystic" target="_blank">my GitHub profile</a>.
          </p>
        </section>

        <section className="bg-feature rounded-3xl p-md-lg border border-accent/10 flow">
          <div className="flex items-center gap-3 mb-md">
            <div className="h-2 w-8 bg-accent rounded-full" />
            <h2 className="text-2xl font-heading font-bold text-heading">Font Test</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
            {/* Heading Stack - Montserrat */}
            <div className="p-md bg-base rounded-xl border border-accent/5 flow">
              <h3 className="font-heading text-xs uppercase tracking-widest text-accent font-bold">Heading Stack: Montserrat</h3>
              <div className="space-y-2">
                <p className="font-heading text-xl font-bold">Bold Weight 700</p>
                <p className="font-heading text-xl font-normal italic">Italic Variable 400</p>
              </div>
              <p className="font-heading text-caption text-xs italic opacity-70">Sometimes the worst person we know, lives inside us.</p>
            </div>

            <div className="p-md bg-base rounded-xl border border-accent/5 flow">
              <h3 className="font-body text-xs uppercase tracking-widest text-accent font-bold">Body Stack: Open Sans</h3>
              <div className="space-y-2">
                <p className="font-body text-xl font-bold">Bold Weight 700</p>
                <p className="font-body text-xl font-normal italic">Italic Variable 400</p>
              </div>
              <p className="font-body text-caption text-xs italic opacity-70">Is the world getting bigger, or hearts growing smaller?</p>
            </div>

            {/* Monospace Stack - JetBrains Mono */}
            <div className="p-md bg-code rounded-xl border border-accent/5 flow">
              <h3 className="font-mono text-xs uppercase tracking-widest text-language-label font-bold">Mono Stack: JetBrains Mono</h3>
              <div className="font-mono text-sm leading-code">
                <p><span className="text-syntax-keyword">const</span> font = <span className="text-syntax-string">"JetBrains Mono"</span>;</p>
                <p className="font-bold"><span className="text-syntax-keyword">if</span> (variableWeight) render();</p>
              </div>
              <p className="font-mono text-caption text-xs italic opacity-70">Humans are defined by flaws, not perfection.</p>
            </div>

            {/* Math Stack - Noto Math */}
            <div className="p-md bg-base rounded-xl border border-accent/5 flow col-span-full">
              <h3 className="text-xs uppercase tracking-widest text-accent font-bold">Math Stack: Noto Math</h3>
              <p className="font-math text-xl py-2">
                ∑ (x + y)² ≡ ∂y/∂x ∩ ∏
              </p>
            </div>
          </div>
        </section>

        <section className="bg-feature rounded-3xl p-md-lg border border-accent/10 flow">
          <div className="flex items-center gap-3 mb-md">
            <div className="h-2 w-8 bg-accent rounded-full" />
            <h2 className="text-2xl font-heading font-bold text-heading">Scale Test</h2>
          </div>

          <div className="p-md bg-base rounded-xl border border-accent/5 flow">
            <h1> Heading One </h1>
            <h2> Heading Two </h2>
            <h3> Heading Three </h3>
            <h4> Heading Four </h4>
            <h5> Heading Five </h5>
            <h6> Heading Six </h6>
	  </div>
	</section>

        <section className="bg-feature rounded-3xl p-md-lg border border-accent/10 flow">
          <div className="flex items-center gap-3 mb-md">
            <div className="h-2 w-8 bg-accent rounded-full" />
            <h2 className="text-2xl font-heading font-bold text-heading">Lists</h2>
          </div>

          <div className="p-md bg-base rounded-xl border border-accent/5 flow">
	    <ol>
	      <li>Item 1</li>
	      <li>Item 2</li>
	      <li>Item 3</li>
	      <li>Item 4</li>
	      <li>Item 5</li>
	        <ol>
		  <li>Item 6</li>
		  <li>Item 7</li>
		  <li>Item 8</li>
		  <li>Item 9</li>
		  <li>Item 10</li>
		</ol>
	    </ol>

	    <ul>
	      <li>Item 1</li>
	      <li>Item 2</li>
	      <li>Item 3</li>
	      <li>Item 4</li>
	      <li>Item 5</li>
	        <ul>
		  <li>Item 6</li>
		  <li>Item 7</li>
		  <li>Item 8</li>
		  <li>Item 9</li>
		  <li>Item 10</li>
		</ul>
	    </ul>
	  </div>
	</section>

        <section className="bg-feature rounded-3xl p-md-lg border border-accent/10 flow">
          <div className="flex items-center gap-3 mb-md">
            <div className="h-2 w-8 bg-accent rounded-full" />
            <h2 className="text-2xl font-heading font-bold text-heading">Blockquotes</h2>
          </div>

          <div className="p-md bg-base rounded-xl border border-accent/5 flow">
	    <blockquote>
              <p>Good design is a lot like clear thinking made visual.</p>
              <cite>Edward Tufte</cite>
            </blockquote>
	  </div>

          <div className="p-md bg-base rounded-xl border border-accent/5 flow">
	    <blockquote>
              <p>Fuck you, NVIDIA!</p>
              <cite>Linus Torvalds</cite>
            </blockquote>
	  </div>
	</section>

        <div className="grid-main">
          <section className="col-span-12 lg:col-span-8 flow">
            <h2 className="text-2xl font-bold text-heading">Brand Palette</h2>
            <div className="grid grid-cols-2 gap-xs sm:grid-cols-4">
              <ColorCard label="Accent" bg="bg-accent" text="text-white" hex="--color-accent" />
              <ColorCard label="Success" bg="bg-success" text="text-white" hex="--color-success" />
              <ColorCard label="Warning" bg="bg-warning" text="text-white" hex="--color-warning" />
              <ColorCard label="Failure" bg="bg-failure" text="text-white" hex="--color-failure" />
            </div>
            
            <div className="mt-xl p-md bg-feature rounded-2xl border border-accent/10">
              <h3 className="text-xl font-bold text-heading mb-sm">Component Integration</h3>
              <div className="flex flex-wrap gap-sm">
                <button className="h-12 px-lg rounded-full text-white bg-accent font-bold hover:brightness-110 transition-all">
                  Primary Action
                </button>
                <button className="h-12 px-lg rounded-full border-2 border-accent text-link font-bold hover:bg-accent/5 transition-all">
                  Outline
                </button>
              </div>
            </div>
          </section>

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
                <pre className="leading-code overflow-x-auto font-mono">
                  <code>
                    <span className="text-syntax-keyword">if</span> [ <span className="text-syntax-string">"FONTS"</span> == <span className="text-syntax-string">"LOADED"</span> ]; <span className="text-syntax-keyword">then</span><br />
                    &nbsp;&nbsp;echo <span className="text-syntax-string">"Status: 200 OK"</span><br />
                    <span className="text-syntax-keyword">fi</span>
                  </code>
                </pre>
              </div>
          </aside>
        </div>

        <footer className="pt-lg border-t border-accent/10 text-center sm:text-left">
          <p className="text-caption text-sm opacity-60">
            © 2025 Suryansh Singh (thedevmystic).
          </p>
        </footer>
      </main>
    </div>
  );
}

function ColorCard({ label, bg, text, hex }: { label: string, bg: string, text: string, hex: string }) {
  return (
    <div className={`${bg} ${text} p-xs rounded-lg shadow-sm flex flex-col justify-end`}>
      <span className="font-bold text-sm">{label}</span>
      <span className="opacity-80 text-[10px] font-mono">{hex}</span>
    </div>
  );
}

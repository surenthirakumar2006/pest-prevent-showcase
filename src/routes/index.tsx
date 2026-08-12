import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHome from "@/assets/hero-home.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VergeShield Pest Control | The Science of a Sealed Home" },
      {
        name: "description",
        content:
          "Locally owned and certified pest control. Professional-grade pest management that prioritizes family safety and structural integrity. Get your free inspection today.",
      },
      { property: "og:title", content: "VergeShield Pest Control | The Science of a Sealed Home" },
      {
        property: "og:description",
        content:
          "Locally owned and certified pest control. Professional-grade pest management that prioritizes family safety and structural integrity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <div className="group flex items-center gap-2">
      <div className="relative size-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
        <div className="size-4 rounded-full border-2 border-primary-foreground transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
      </div>
      <span className="font-bold tracking-tighter text-xl text-primary">
        VERGE<span className="font-light text-foreground">SHIELD</span>
      </span>
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl shadow-sm" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Services", "#services"],
            ["Our Process", "#process"],
            ["Results", "#results"],
            ["Testimonials", "#testimonials"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
          <a
            href="#quote"
            className="sweep-on-hover relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Request Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function Hero() {
  return (
    <header className="relative overflow-hidden pt-16 pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[42rem] aurora opacity-70" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary animate-ring" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                Locally Owned &amp; Certified
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[0.92] tracking-tight md:text-7xl">
              The science of a{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                sealed home.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mb-10 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Professional-grade pest management that prioritizes family safety and structural integrity. No shortcuts.
              Just a precise perimeter.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#quote"
                className="sweep-on-hover relative overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Get Your Free Inspection
              </a>
              <a
                href="#process"
                className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                See how it works
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="size-10 rounded-full border-2 border-background bg-secondary" />
                <div className="size-10 rounded-full border-2 border-background bg-muted" />
                <div className="size-10 rounded-full border-2 border-background bg-primary/30" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                <span className="text-accent">★★★★★</span> 4.9/5 from 200+ neighbors
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <div className="aspect-square overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border">
            <img
              src={heroHome}
              alt="Modern home exterior at dusk with a warm, secure glow"
              width={1200}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105"
            />
          </div>
          <div className="animate-float absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl bg-card p-6 shadow-xl ring-1 ring-border">
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 font-bold text-accent">
              100%
            </div>
            <div>
              <div className="text-sm font-bold text-card-foreground">Shield Guarantee</div>
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                Service call-backs are free
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

const MARQUEE = [
  "EPA Approved Solutions",
  "Same-Week Scheduling",
  "Licensed & Insured",
  "Pet & Child Safe",
  "50-Point Inspection",
  "Free Re-Treatments",
];

function Marquee() {
  return (
    <div className="border-y border-border bg-card/50 py-4 overflow-hidden">
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span key={i} className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  code,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-8 hover:border-primary/30">
        <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary">
          <div className="text-primary transition-colors group-hover:text-primary-foreground">{icon}</div>
        </div>
        <h4 className="mb-3 text-xl font-bold text-card-foreground">{title}</h4>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="font-mono text-xs font-semibold tracking-wide text-primary">{code}</span>
      </div>
    </Reveal>
  );
}

function Services() {
  return (
    <section id="services" className="bg-card py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Service Spectrum</h2>
              <h3 className="text-4xl font-bold tracking-tight text-card-foreground">
                Targeted protection for every entry point.
              </h3>
            </div>
            <div className="mx-12 mb-4 hidden h-px flex-1 bg-border md:block" />
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            delay={0}
            icon={<div className="size-6 rounded-md border-2 border-current" />}
            title="Residential Defense"
            description="Interior and exterior barriers designed for year-round family safety and peace of mind."
            code="CODE 01_DEFENSE"
          />
          <ServiceCard
            delay={120}
            icon={<div className="size-6 rotate-45 rounded-md border-2 border-current" />}
            title="Termite Elimination"
            description="Advanced liquid soil treatments and monitoring systems to protect your home's structure."
            code="CODE 02_ELIMINATE"
          />
          <ServiceCard
            delay={240}
            icon={<div className="size-4 rounded-full bg-current" />}
            title="Rodent Control"
            description="Precision exclusion techniques and monitoring to keep intruders out of your living spaces."
            code="CODE 03_EXCLUDE"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description, delay }: { number: string; title: string; description: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card-lift relative h-full rounded-2xl border border-border bg-card p-8">
        <span className="absolute -top-6 left-8 font-mono text-6xl font-black text-primary/10">{number}</span>
        <h5 className="mb-4 pt-4 text-lg font-bold text-card-foreground">{title}</h5>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </Reveal>
  );
}

function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-background py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <ProcessStep
            delay={0}
            number="01"
            title="Precision Audit"
            description="We conduct a 50-point inspection of your perimeter to identify active nesting sites and hidden entry points."
          />
          <ProcessStep
            delay={120}
            number="02"
            title="Custom Protocol"
            description="Based on your property's specific ecology, we deploy a targeted treatment plan using family-safe products."
          />
          <ProcessStep
            delay={240}
            number="03"
            title="Barrier Maintenance"
            description="We set up a seasonal schedule to refresh your external barriers before new cycles of pests can migrate."
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { to: 4200, suffix: "+", label: "Homes protected" },
    { to: 98, suffix: "%", label: "Retention rate" },
    { to: 24, suffix: "h", label: "Response window" },
    { to: 15, suffix: "yrs", label: "In the field" },
  ];

  return (
    <section id="results" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100}>
            <div className="rounded-2xl border border-border bg-card/60 p-8 text-center backdrop-blur">
              <div className="text-4xl font-extrabold tracking-tight text-primary">
                <Counter to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section id="testimonials" className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary p-12 text-primary-foreground md:p-20">
            <div className="pointer-events-none absolute -left-20 -top-20 size-80 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-8 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="animate-float" style={{ animationDelay: `${i * 120}ms` }}>
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mb-12 text-2xl font-medium italic tracking-tight md:text-4xl">
                "VergeShield doesn't just spray and leave. They explained the science behind the treatment, and for the
                first time in years, our basement is actually dry and insect-free."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary-foreground/20" />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-sm text-primary-foreground/60">Homeowner in Oak Ridge</p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 skew-x-12 bg-gradient-to-l from-primary-foreground/10 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="quote" className="relative border-t border-border bg-background pb-12 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-24 grid gap-24 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-8 text-4xl font-bold tracking-tight text-foreground">Ready to seal your perimeter?</h2>
              <p className="mb-12 text-muted-foreground">
                Get an instant quote based on your square footage. No high-pressure sales, just clear technical
                solutions.
              </p>
              <div className="space-y-4">
                {["Licensed & Insured Professional Staff", "Pet and Child-Safe EPA Approved Solutions", "Free re-treatments between visits"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-4">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                        ✓
                      </span>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-card p-10 shadow-xl ring-1 ring-border">
              <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">First Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="John"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Zip Code</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="90210"
                  />
                </div>
                <div className="col-span-2">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">
                    Service Needed
                  </label>
                  <select className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm text-foreground transition-all focus:ring-2 focus:ring-primary/30">
                    <option>General Maintenance</option>
                    <option>Termite Inspection</option>
                    <option>Rodent Exclusion</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="sweep-on-hover relative col-span-2 overflow-hidden rounded-xl bg-primary py-4 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Schedule Free Quote
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-8 border-t border-border pt-12 md:flex-row">
          <div className="flex items-center gap-2 opacity-50">
            <div className="size-6 rounded-sm bg-foreground" />
            <span className="text-sm font-bold uppercase tracking-tighter text-foreground">VergeShield Corp.</span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            &copy; 2024 &mdash; Local Service Center #402
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10 selection:text-primary">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Stats />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

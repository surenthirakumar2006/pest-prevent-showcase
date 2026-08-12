import { createFileRoute } from "@tanstack/react-router";
import heroHome from "@/assets/hero-home.jpg";

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
    <div className="flex items-center gap-2">
      <div className="size-8 bg-primary rounded-sm flex items-center justify-center">
        <div className="size-4 border-2 border-primary-foreground rounded-full" />
      </div>
      <span className="font-bold tracking-tighter text-xl text-primary">
        VERGE<span className="font-light text-foreground">SHIELD</span>
      </span>
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
            Our Process
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </a>
          <a
            href="#quote"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-all shadow-sm"
          >
            Request Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative pt-20 pb-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <span className="size-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary">Locally Owned & Certified</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance leading-[0.9] mb-8">
            The science of a <span className="text-primary">sealed home.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md text-pretty mb-10 leading-relaxed">
            Professional-grade pest management that prioritizes family safety and structural integrity. No shortcuts. Just a precise perimeter.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#quote"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get Your Free Inspection
            </a>
            <div className="flex -space-x-2">
              <div className="size-10 rounded-full border-2 border-background bg-secondary" />
              <div className="size-10 rounded-full border-2 border-background bg-muted" />
              <div className="size-10 rounded-full border-2 border-background bg-muted-foreground" />
            </div>
            <span className="text-xs font-medium text-muted-foreground pl-2">4.9/5 from 200+ neighbors</span>
          </div>
        </div>
        <div className="animate-reveal-delay relative">
          <div className="aspect-square bg-card rounded-3xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
            <img
              src={heroHome}
              alt="Modern home exterior at dusk with a warm, secure glow"
              width={1200}
              height={1200}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl ring-1 ring-black/5 flex items-center gap-4">
            <div className="size-12 bg-accent/10 flex items-center justify-center rounded-xl text-accent font-bold">100%</div>
            <div>
              <div className="text-sm font-bold text-card-foreground">Shield Guarantee</div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-tighter">Service call-backs are free</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  code,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  code: string;
}) {
  return (
    <div className="group p-8 border border-border rounded-3xl hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
      <div className="size-12 bg-primary/10 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-primary transition-colors">
        <div className="text-primary group-hover:text-primary-foreground">{icon}</div>
      </div>
      <h4 className="text-xl font-bold mb-3 text-card-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">{description}</p>
      <span className="text-xs font-mono text-primary font-semibold tracking-wide">{code}</span>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">Service Spectrum</h2>
            <h3 className="text-4xl font-bold tracking-tight text-card-foreground">Targeted protection for every entry point.</h3>
          </div>
          <div className="h-px flex-1 bg-border hidden md:block mb-4 mx-12" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<div className="size-6 border-2 border-current rounded-md" />}
            title="Residential Defense"
            description="Interior and exterior barriers designed for year-round family safety and peace of mind."
            code="CODE 01_DEFENSE"
          />
          <ServiceCard
            icon={<div className="size-6 border-2 border-current rounded-md rotate-45" />}
            title="Termite Elimination"
            description="Advanced liquid soil treatments and monitoring systems to protect your home's structure."
            code="CODE 02_ELIMINATE"
          />
          <ServiceCard
            icon={<div className="size-4 bg-current rounded-full" />}
            title="Rodent Control"
            description="Precision exclusion techniques and monitoring to keep intruders out of your living spaces."
            code="CODE 03_EXCLUDE"
          />
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative p-8 bg-card border border-border rounded-2xl">
      <span className="absolute -top-6 left-8 text-6xl font-black text-primary/10 font-mono">{number}</span>
      <h5 className="text-lg font-bold mb-4 pt-4 text-card-foreground">{title}</h5>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function Process() {
  return (
    <section id="process" className="py-32 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          <ProcessStep
            number="01"
            title="Precision Audit"
            description="We conduct a 50-point inspection of your perimeter to identify active nesting sites and hidden entry points."
          />
          <ProcessStep
            number="02"
            title="Custom Protocol"
            description="Based on your property's specific ecology, we deploy a targeted treatment plan using family-safe products."
          />
          <ProcessStep
            number="03"
            title="Barrier Maintenance"
            description="We set up a seasonal schedule to refresh your external barriers before new cycles of pests can migrate."
          />
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-primary rounded-[2rem] p-12 md:p-20 text-primary-foreground relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex gap-1 mb-8">
              <span className="text-accent">★</span>
              <span className="text-accent">★</span>
              <span className="text-accent">★</span>
              <span className="text-accent">★</span>
              <span className="text-accent">★</span>
            </div>
            <blockquote className="text-2xl md:text-4xl font-medium tracking-tight mb-12 italic">
              "VergeShield doesn't just spray and leave. They explained the science behind the treatment, and for the first time in years, our basement is actually dry and insect-free."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-primary-foreground/20" />
              <div>
                <p className="font-bold">Sarah Jenkins</p>
                <p className="text-sm text-primary-foreground/60">Homeowner in Oak Ridge</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-foreground/5 to-transparent skew-x-12 transform origin-bottom" />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="quote" className="bg-background pt-32 pb-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-8 text-foreground">Ready to seal your perimeter?</h2>
            <p className="text-muted-foreground mb-12">
              Get an instant quote based on your square footage. No high-pressure sales, just clear technical solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="size-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">✓</span>
                <span className="text-sm font-medium">Licensed & Insured Professional Staff</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="size-5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold">✓</span>
                <span className="text-sm font-medium">Pet and Child-Safe EPA Approved Solutions</span>
              </div>
            </div>
          </div>
          <div className="bg-card p-10 rounded-3xl shadow-sm ring-1 ring-black/5">
            <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full bg-secondary border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="John"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">Zip Code</label>
                <input
                  type="text"
                  className="w-full bg-secondary border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  placeholder="90210"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-[10px] font-mono uppercase text-muted-foreground mb-2">Service Needed</label>
                <select className="w-full bg-secondary border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-sm text-foreground">
                  <option>General Maintenance</option>
                  <option>Termite Inspection</option>
                  <option>Rodent Exclusion</option>
                </select>
              </div>
              <button
                type="submit"
                className="col-span-2 bg-primary text-primary-foreground py-4 rounded-xl font-bold hover:bg-primary-light transition-all"
              >
                Schedule Free Quote
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border">
          <div className="flex items-center gap-2 opacity-50">
            <div className="size-6 bg-foreground rounded-sm" />
            <span className="font-bold text-sm uppercase tracking-tighter text-foreground">VergeShield Corp.</span>
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
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
        <Services />
        <Process />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
}

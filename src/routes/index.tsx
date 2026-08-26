import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHome from "@/assets/hero-home.jpg";
import { Reveal } from "@/components/Reveal";

const PHONE = "+917010976603";
const PHONE_DISPLAY = "+91 70109 76603";
const WHATSAPP = "https://wa.me/917010976603";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Elite Pest Management | Chennai's Trusted Pest Control" },
      {
        name: "description",
        content:
          "Safe, eco-friendly and guaranteed pest control in Chennai since 2012. Termite, cockroach, mosquito, rat and car anti-rat treatments. Book a free inspection.",
      },
      { property: "og:title", content: "Global Elite Pest Management | Chennai's Trusted Pest Control" },
      {
        property: "og:description",
        content:
          "Certified specialists with 13+ years of experience protecting Chennai homes, offices, factories, hotels and hospitals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pest-prevent-showcase.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://pest-prevent-showcase.lovable.app/" }],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2">
      <div className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg bg-primary">
        <div className="size-4 rounded-full border-2 border-primary-foreground transition-transform duration-500 group-hover:rotate-180 group-hover:scale-110" />
      </div>
      <span className="text-lg font-bold tracking-tighter text-primary">
        GLOBAL<span className="font-light text-foreground">ELITE</span>
      </span>
    </a>
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
        scrolled ? "border-b border-border bg-background/70 shadow-sm backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {[
            ["Services", "#services"],
            ["About", "#about"],
            ["Process", "#process"],
            ["Reviews", "#testimonials"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="relative text-sm font-medium text-foreground/80 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="sweep-on-hover relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book Free Inspection
          </a>
        </div>
      </div>
    </nav>
  );
}

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
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
        setValue(to * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()}
      {suffix}
    </span>
  );
}

function Hero() {
  return (
    <header id="top" className="relative overflow-hidden pt-16 pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[42rem] aurora opacity-70" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ring rounded-full bg-primary" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                Trusted since 2012 · Chennai's #1 rated pest experts
              </span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[0.95] tracking-tight md:text-6xl">
              Chennai's most trusted{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                pest control experts.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mb-10 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Protect your home and business with safe, eco-friendly and guaranteed pest control solutions — delivered
              by certified specialists with over a decade of experience.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="sweep-on-hover relative overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Book Free Inspection
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                WhatsApp Now
              </a>
              <a
                href={`tel:${PHONE}`}
                className="rounded-full border border-border px-6 py-4 text-sm font-semibold transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                Call Now
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-accent">★★★★★</span>
              <span className="text-xs font-medium text-muted-foreground">5.0 · 14 Google Reviews</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" />
          <div className="aspect-square overflow-hidden rounded-3xl bg-card shadow-2xl ring-1 ring-border">
            <img
              src={heroHome}
              alt="Protected Chennai home exterior at dusk"
              width={1200}
              height={1200}
              className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-105"
            />
          </div>
          <div className="animate-float absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl bg-card p-6 shadow-xl ring-1 ring-border">
            <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15 font-bold text-accent">
              13+
            </div>
            <div>
              <div className="text-sm font-bold text-card-foreground">Years of trusted service</div>
              <div className="text-[10px] uppercase tracking-tighter text-muted-foreground">
                Serving Chennai since 2012
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

const MARQUEE = [
  "Certified Experts",
  "Eco-Friendly Chemicals",
  "Guaranteed Results",
  "Affordable Pricing",
  "Fast Response",
  "Safe for Children",
  "Modern Equipment",
  "Commercial Specialists",
];

function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-card/50 py-4">
      <div className="flex w-max animate-marquee gap-12 pr-12">
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary/60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  ["🐜", "Termite Control", "Deep-penetration treatment that eliminates colonies and safeguards wooden structures for years."],
  ["🪳", "Cockroach Control", "Gel-based, odourless treatment reaching hidden nests in kitchens, bathrooms and offices."],
  ["🦟", "Mosquito Treatment", "Fogging + larvicide programs that break the breeding cycle indoors and outdoors."],
  ["🐀", "Rat Control", "Bait-station and exclusion strategy to remove rodents without harm to pets or children."],
  ["🚗", "Car Anti-Rat Spray", "Specialised herbal spray to protect vehicle wiring and interiors from rodent damage."],
  ["🏠", "Residential Pest Control", "Whole-home protection plans tailored to Chennai apartments, villas and independent houses."],
  ["🏢", "Commercial Pest Control", "Scheduled service contracts for offices, showrooms and retail spaces — zero disruption."],
  ["🏭", "Factory Pest Control", "Industrial-grade solutions for warehouses, factories and manufacturing floors."],
  ["🏨", "Hotel Pest Control", "Discreet, guest-safe programs meeting hospitality hygiene standards."],
  ["🏥", "Hospital Pest Control", "Certified protocols for hospitals and clinics — medical-grade safety compliance."],
  ["🏫", "School Pest Control", "Child-safe treatments delivered during off-hours across schools and campuses."],
  ["🍽", "Restaurant Pest Control", "HACCP-aligned kitchen treatments protecting your reputation and rating."],
] as const;

function Services() {
  return (
    <section id="services" className="bg-card py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Our Services</h2>
              <h3 className="text-4xl font-bold tracking-tight text-card-foreground">
                Complete pest protection, for every environment.
              </h3>
            </div>
            <div className="mx-12 mb-4 hidden h-px flex-1 bg-border md:block" />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([icon, title, description], i) => (
            <Reveal key={title} delay={(i % 3) * 100}>
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-border bg-background p-8 hover:border-primary/30">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary/20">
                  <span aria-hidden>{icon}</span>
                </div>
                <h4 className="mb-3 text-xl font-bold text-card-foreground">{title}</h4>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <a href="#contact" className="font-mono text-xs font-semibold tracking-wide text-primary">
                  Learn more →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  "Certified Experts",
  "Eco-Friendly Chemicals",
  "Guaranteed Results",
  "Affordable Pricing",
  "Fast Response",
  "Safe for Children",
  "Modern Equipment",
  "Commercial Specialists",
  "13+ Years Experience",
];

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">About Us</h2>
            <h3 className="mb-8 text-4xl font-bold tracking-tight">A decade of protection, engineered for Chennai.</h3>
            <p className="mb-10 leading-relaxed text-muted-foreground">
              Global Elite Pest Management has been providing professional pest control services since 2012. We
              specialize in termite treatment, cockroach control, mosquito control, rodent management, and car anti-rat
              treatment. Using safe, eco-friendly methods and advanced technology, we deliver reliable protection for
              residential and commercial properties throughout Chennai.
            </p>
            <div className="flex flex-wrap gap-3">
              {HIGHLIGHTS.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { to: 13, suffix: "+", label: "Years Experience" },
              { to: 5, suffix: "★", label: "Google Rating", decimals: 1 },
              { to: 14, suffix: "+", label: "Happy Reviews" },
              { to: 1000, suffix: "+", label: "Properties Protected" },
              { to: 98, suffix: "%", label: "Customer Retention" },
              { to: 30, suffix: "min", label: "Response Time" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card/60 p-6 text-center backdrop-blur">
                <div className="text-3xl font-extrabold tracking-tight text-primary">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  ["01", "Book Inspection", "Reach us via call, WhatsApp or form."],
  ["02", "Site Visit", "Our team arrives at your scheduled slot."],
  ["03", "Detailed Inspection", "We identify pest species, sources & risks."],
  ["04", "Professional Treatment", "Targeted, eco-friendly application."],
  ["05", "Quality Check", "Follow-up review to confirm results."],
  ["06", "After-Service Support", "Ongoing support & warranty backing."],
] as const;

function Process() {
  return (
    <section id="process" className="relative border-y border-border bg-background py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">How It Works</h2>
            <h3 className="text-4xl font-bold tracking-tight">A seamless 6-step process.</h3>
          </div>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([number, title, description], i) => (
            <Reveal key={number} delay={(i % 3) * 120}>
              <div className="card-lift relative h-full rounded-2xl border border-border bg-card p-8">
                <span className="absolute -top-6 left-8 font-mono text-6xl font-black text-primary/10">{number}</span>
                <h5 className="mb-4 pt-4 text-lg font-bold text-card-foreground">{title}</h5>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  ["Excellent termite treatment. The team was professional, punctual and thorough. Highly recommend!", "Karthik R."],
  ["Best pest control in Ambattur. Solved our cockroach problem in one visit. Very safe for kids.", "Priya S."],
  ["Rat problem in my car — fixed completely. Their herbal spray really works. 5 stars!", "Ravi Kumar"],
  ["13 years of trust. My family has been using their service since 2015. Never disappointed.", "Anitha M."],
  ["Highly professional team, eco-friendly chemicals, and reasonable pricing. Truly elite service.", "Suresh V."],
  ["The mosquito treatment made a huge difference. Follow-up support was excellent.", "Deepa L."],
] as const;

function Testimonials() {
  return (
    <section id="testimonials" className="overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 max-w-2xl">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">5.0 · 14 Google Reviews</h2>
            <h3 className="text-4xl font-bold tracking-tight">Loved by customers across Chennai.</h3>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(([quote, name], i) => (
            <Reveal key={name} delay={(i % 3) * 100}>
              <figure className="card-lift h-full rounded-2xl border border-border bg-card p-8">
                <div className="mb-4 text-accent">★★★★★</div>
                <blockquote className="mb-6 text-sm leading-relaxed text-muted-foreground">"{quote}"</blockquote>
                <figcaption className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-card-foreground">{name}</span>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                      Google Review
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  [
    "What pests do you control?",
    "We handle termites, cockroaches, mosquitoes, rats, bed bugs, ants, and lizards — for both residential and commercial properties across Chennai.",
  ],
  [
    "How long does treatment take?",
    "Most residential treatments are completed within 1–3 hours. Larger commercial and industrial sites are scheduled around your operating hours.",
  ],
  [
    "Are the chemicals safe?",
    "Yes. We use eco-friendly, government-approved formulations that are safe for children, pets and food areas when applied by our certified technicians.",
  ],
  [
    "Do you offer a warranty?",
    "All major treatments come with a service warranty and free follow-up visits within the covered period.",
  ],
  [
    "How much does pest control cost?",
    "Pricing depends on property size, pest type and severity. Book a free inspection and we'll share a no-obligation quote within 24 hours.",
  ],
] as const;

function Faq() {
  return (
    <section id="faq" className="border-y border-border bg-card py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">FAQ</h2>
            <h3 className="text-4xl font-bold tracking-tight text-card-foreground">Questions, answered.</h3>
          </div>
        </Reveal>
        <div className="space-y-4">
          {FAQS.map(([q, a], i) => (
            <Reveal key={q} delay={i * 70}>
              <details className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold">
                  {q}
                  <span className="text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative pb-32 pt-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 aurora opacity-40" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">Get in touch</h2>
              <h3 className="mb-6 text-4xl font-bold tracking-tight">Book your free inspection.</h3>
              <p className="mb-10 text-muted-foreground">
                Get an on-site assessment and a no-obligation quote within 24 hours.
              </p>

              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${PHONE}`}
                  className="card-lift rounded-2xl border border-border bg-card p-6 hover:border-primary/40"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Call</div>
                  <div className="mt-2 font-bold text-primary">{PHONE_DISPLAY}</div>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift rounded-2xl border border-border bg-card p-6 hover:border-primary/40"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="mt-2 font-bold text-primary">Chat with us now</div>
                </a>
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Address
                </div>
                <address className="not-italic text-sm leading-relaxed text-foreground/80">
                  Tiruvalluvar Street, Lenin Nagar,
                  <br />
                  Venkateswara Nagar, Ambattur,
                  <br />
                  Chennai, Tamil Nadu – 600053
                </address>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-3xl bg-card p-10 shadow-xl ring-1 ring-border">
              <form className="grid grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Phone</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="+91"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Location</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="Ambattur, Chennai"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">
                    Service Required
                  </label>
                  <select className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm text-foreground transition-all focus:ring-2 focus:ring-primary/30">
                    {SERVICES.map(([, title]) => (
                      <option key={title}>{title}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="mb-2 block font-mono text-[10px] uppercase text-muted-foreground">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border-none bg-secondary px-4 py-3 text-sm transition-all focus:ring-2 focus:ring-primary/30"
                    placeholder="Tell us about the pest issue"
                  />
                </div>
                <button
                  type="submit"
                  className="sweep-on-hover relative col-span-2 overflow-hidden rounded-xl bg-primary py-4 font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Submit
                </button>
                <p className="col-span-2 text-center text-xs text-muted-foreground">
                  We respond within 30 minutes on business hours.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <Logo />
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href={`tel:${PHONE}`} className="text-primary hover:underline">
            Call
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-primary hover:underline">
            WhatsApp
          </a>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          &copy; {new Date().getFullYear()} Global Elite Pest Management — Ambattur, Chennai
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
        <About />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

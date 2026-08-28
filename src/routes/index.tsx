import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroHome from "@/assets/hero-home.jpg";
import { Reveal } from "@/components/Reveal";
import { BugOff, Bug, Wind, ShieldAlert, Car, Home, Building2, Factory, BedDouble, Hospital, GraduationCap, Utensils, Wine, CheckCircle2, MessageCircle, Quote, Star, ShieldCheck, PhoneCall, ChevronDown } from "lucide-react";

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
          "Safe, eco-friendly and guaranteed pest control in Chennaic since 2012. Termite, cockroach, mosquito, rat and car anti-rat treatments. Book a free inspection.",
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
      <img 
        src="/profile_img.png" 
        alt="Global Elite Logo" 
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
      />
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur">
              <span className="relative flex size-3 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-bold">
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
  { icon: BugOff, title: "Termite Control", desc: "Deep-penetration treatment that eliminates colonies and safeguards wooden structures for years." },
  { icon: Bug, title: "Cockroach Control", desc: "Gel-based, odourless treatment reaching hidden nests in kitchens, bathrooms and offices." },
  { icon: Wind, title: "Mosquito Treatment", desc: "Fogging + larvicide programs that break the breeding cycle indoors and outdoors." },
  { icon: ShieldAlert, title: "Rat Control", desc: "Bait-station and exclusion strategy to remove rodents without harm to pets or children." },
  { icon: Car, title: "Car Anti-Rat Spray", desc: "Specialised herbal spray to protect vehicle wiring and interiors from rodent damage." },
  { icon: Home, title: "Residential Pest Control", desc: "Whole-home protection plans tailored to Chennai apartments, villas and independent houses." },
  { icon: Building2, title: "Commercial Pest Control", desc: "Scheduled service contracts for offices, showrooms and retail spaces — zero disruption." },
  { icon: Factory, title: "Factory Pest Control", desc: "Industrial-grade solutions for warehouses, factories and manufacturing floors." },
  { icon: BedDouble, title: "Hotel Pest Control", desc: "Discreet, guest-safe programs meeting hospitality hygiene standards." },
  { icon: Hospital, title: "Hospital Pest Control", desc: "Certified protocols for hospitals and clinics — medical-grade safety compliance." },
  { icon: GraduationCap, title: "School Pest Control", desc: "Child-safe treatments delivered during off-hours across schools and campuses." },
  { icon: Utensils, title: "Restaurant Pest Control", desc: "HACCP-aligned kitchen treatments protecting your reputation and rating." },
  { icon: Wine, title: "Restro Bar Pest Control", desc: "Discreet, high-efficacy treatments tailored for bars and pubs to maintain hygiene and protect inventory." },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-card py-32">
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[42rem] aurora opacity-20" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-20 flex flex-col items-center text-center">
            <h2 className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.3em] text-primary backdrop-blur">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Our Services
            </h2>
            <h3 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-card-foreground md:text-5xl">
              Complete pest protection, for every environment.
            </h3>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={(i % 4) * 100}>
              <div className="card-lift group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-border bg-background/50 p-8 hover:border-primary/40 hover:bg-background">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:animate-pulse group-hover:opacity-100" />
                <div>
                  <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:rotate-[12deg] group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="size-6 text-foreground transition-all duration-500 group-hover:text-primary" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold tracking-tight text-card-foreground transition-colors group-hover:text-primary">{title}</h4>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
                <a href="#contact" className="mt-auto inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wide text-primary opacity-80 transition-all hover:opacity-100 group-hover:gap-3">
                  Book Service <span className="transition-transform group-hover:translate-x-1">→</span>
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
                  className="group flex cursor-default items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/40 hover:bg-card hover:text-primary hover:shadow-lg hover:shadow-primary/5"
                >
                  <CheckCircle2 className="size-3 text-primary/70 transition-transform group-hover:scale-110 group-hover:text-primary" />
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
              <div key={s.label} className="card-lift group relative overflow-hidden rounded-[2rem] border border-border bg-background/50 p-6 text-center hover:border-primary/40 hover:bg-card">
                <div className="pointer-events-none absolute -inset-6 -z-10 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-xl" />
                <div className="text-3xl font-extrabold tracking-tight text-primary transition-transform duration-300 group-hover:scale-110">
                  <Counter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-foreground">
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
              <div className="card-lift group relative h-full overflow-hidden rounded-[2rem] border border-border bg-background/50 p-8 hover:border-primary/40 hover:bg-card">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:animate-pulse group-hover:opacity-100" />
                <span className="absolute top-4 right-6 font-mono text-6xl font-black text-primary/20 transition-colors group-hover:text-primary/30">{number}</span>
                <div className="relative mt-4">
                  <h5 className="mb-4 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary">{title}</h5>
                  <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
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
              <figure className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-background/50 p-8 hover:border-primary/40 hover:bg-card">
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:animate-pulse group-hover:opacity-100" />
                <Quote className="absolute -right-4 -top-4 size-24 text-primary/5 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 group-hover:text-primary/10" />
                <div className="relative flex h-full flex-col">
                  <div className="mb-4 flex gap-1 text-accent">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                  <blockquote className="mb-8 text-sm leading-relaxed text-muted-foreground">"{quote}"</blockquote>
                  <figcaption className="mt-auto flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary ring-2 ring-transparent transition-all group-hover:bg-primary/20 group-hover:ring-primary/30">
                      {name.charAt(0)}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-card-foreground">{name}</span>
                      <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-primary/70">
                        Google Review
                      </span>
                    </span>
                  </figcaption>
                </div>
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
              <details className="group rounded-[2rem] border border-border bg-background/50 p-6 transition-all hover:border-primary/40 hover:bg-card hover:shadow-lg hover:shadow-primary/5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-bold text-card-foreground">
                  {q}
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:bg-primary/20 group-open:rotate-180">
                    <ChevronDown className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground animate-reveal">{a}</p>
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
                  className="card-lift group rounded-[2rem] border border-border bg-background/50 p-6 hover:border-primary/40 hover:bg-card"
                >
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <PhoneCall className="size-5" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Call Us</div>
                  <div className="mt-2 font-bold text-card-foreground group-hover:text-primary transition-colors">{PHONE_DISPLAY}</div>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="card-lift group rounded-[2rem] border border-border bg-background/50 p-6 hover:border-[#25D366]/40 hover:bg-card"
                >
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110 group-hover:bg-[#25D366]/20">
                    <MessageCircle className="size-5" />
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                  <div className="mt-2 font-bold text-card-foreground group-hover:text-[#25D366] transition-colors">Chat with us now</div>
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
                    {SERVICES.map(({ title }) => (
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

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/20 transition-all hover:-translate-y-2 hover:scale-110 hover:shadow-2xl hover:shadow-[#25D366]/40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
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
      <FloatingWhatsApp />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Leaf, HardHat, ClipboardCheck, TrendingUp, ShieldCheck, Users, Scale, Target, CheckCircle2, ArrowRight, MessageCircle, Quote } from "lucide-react";
import professionalAsset from "@/assets/am-professional.png.asset.json";
import heroAsset from "@/assets/am-hero.png.asset.json";
import handshakeAsset from "@/assets/handshake.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

const WHATSAPP_URL = "https://wa.me/5531992293261";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A&M Consultoria Ambiental e SST | Meio Ambiente e Segurança do Trabalho" },
      { name: "description", content: "Transformamos conformidade em valor sustentável. Consultoria estratégica em meio ambiente e segurança do trabalho." },
      { property: "og:title", content: "A&M Consultoria Ambiental e SST" },
      { property: "og:description", content: "Transformamos conformidade em valor sustentável." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoAsset.url} alt="A&M Consultoria Ambiental e SST" className="h-12 w-12 object-contain" />
      <span className="sr-only">A&amp;M Consultoria Ambiental e SST</span>
    </div>
  );
}

function CTA({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const styles = variant === "primary"
    ? "bg-brand-gradient text-white shadow-lg shadow-[color:var(--brand-dark)]/25 hover:shadow-xl"
    : "border border-white/30 text-white hover:bg-white/10";
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Index() {
  const pillars = [
    { icon: Leaf, title: "Meio Ambiente", desc: "Soluções que preservam e geram impacto positivo." },
    { icon: HardHat, title: "Segurança do Trabalho", desc: "Protegendo pessoas, valorizando vidas." },
    { icon: ClipboardCheck, title: "Conformidade Legal", desc: "Gestão eficiente e alinhada às exigências." },
    { icon: TrendingUp, title: "Resultados Sustentáveis", desc: "Estratégia, dados e melhoria contínua." },
  ];

  const valores = [
    "Ética e Transparência",
    "Excelência Técnica",
    "Segurança como valor",
    "Sustentabilidade",
    "Foco em Resultados",
  ];

  const diferenciais = [
    "Visão estratégica de negócio",
    "Atuação técnica e prática",
    "Relacionamento próximo e humano",
    "Indicadores e resultados reais",
    "Educação e cultura organizacional",
  ];

  const servicos = [
    { icon: Leaf, label: "Meio Ambiente", desc: "Licenciamento e regularização ambiental." },
    { icon: HardHat, label: "SST", desc: "Treinamentos, RAC, HRN, PGR e LTCAT." },
    { icon: Scale, label: "Legislação", desc: "Auditorias de conformidade legal." },
    { icon: TrendingUp, label: "Gestão", desc: "Organização documental e processos." },
    { icon: Users, label: "Pessoas", desc: "Avaliação de riscos psicossociais." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
            <a href="#pilares" className="hover:text-foreground transition">Soluções</a>
            <a href="#valores" className="hover:text-foreground transition">Valores</a>
            <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          </nav>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 rounded-md bg-brand-gradient text-white px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg transition">
            <MessageCircle className="h-4 w-4" /> Fale conosco
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
             style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[color:var(--brand-light)]/20 blur-3xl" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-white/50 bg-white/20 px-6 py-3 text-lg sm:text-xl font-bold text-white shadow-xl backdrop-blur-md">
              <ShieldCheck className="h-6 w-6 text-[color:var(--brand-light)]" strokeWidth={2.5} />
              A&amp;M Consultoria Ambiental e SST
            </div>
            <div className="mt-4 text-sm sm:text-base font-semibold tracking-wide text-white">
              Meio Ambiente · Segurança do Trabalho
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
              Transformamos conformidade em{" "}
              <span className="text-brand">valor sustentável.</span>
            </h1>
            <div className="mt-5 h-1 w-16 bg-[color:var(--brand-light)] rounded-full" />
            <p className="mt-6 text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Consultoria estratégica, técnica e prática em meio ambiente e SST.
              Protegemos pessoas, garantimos conformidade legal e entregamos resultados mensuráveis para o seu negócio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA><MessageCircle className="h-4 w-4" /> Falar com especialista</CTA>
              <CTA variant="outline">Conhecer soluções <ArrowRight className="h-4 w-4" /></CTA>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[color:var(--brand-light)]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] max-w-md mx-auto">
              <img src={professionalAsset.url} alt="Consultor A&M" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-dark)]/60 via-transparent to-transparent" />
            </div>
            {/* floating quote */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 lg:-left-10 max-w-[260px] rounded-xl bg-[color:var(--brand-dark)] border border-white/10 p-5 shadow-2xl">
              <Quote className="h-5 w-5 text-brand mb-2" />
              <p className="text-sm leading-snug">
                Gestão ambiental e de segurança não é custo. É estratégia, é cultura,{" "}
                <span className="font-bold text-brand">é resultado.</span>
              </p>
            </div>
          </div>
        </div>

        {/* PILLARS strip */}
        <div className="relative border-t border-white/10 bg-black/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center lg:text-left">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-[color:var(--brand-light)]/50 text-brand mb-3">
                  <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <h3 className="font-bold text-sm">{title}</h3>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gradient opacity-10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <img src={professionalAsset.url} alt="Consultor A&M" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-gradient text-white p-5 rounded-xl shadow-xl max-w-[200px]">
                <div className="text-3xl font-extrabold">+10</div>
                <div className="text-xs font-medium opacity-90">anos de profissionalismo transformando conformidades em resultados</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">CONCEITO DA MARCA</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Confiança, técnica e <span className="text-[color:var(--brand)]">propósito</span> em cada entrega.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A A&amp;M transmite confiança, credibilidade e profissionalismo, com foco em sustentabilidade, segurança e resultados.
              Unimos a proteção do escudo à sustentabilidade da folha para cuidar de pessoas e do meio ambiente com responsabilidade técnica.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Trabalhamos lado a lado com sua operação — explicando com lógica, entregando o caminho pronto e fazendo sua equipe sentir
              que já pode executar com segurança.
            </p>

            {/* Promessa */}
            <div className="mt-8 rounded-2xl bg-brand-gradient text-white p-6 lg:p-8 shadow-xl relative overflow-hidden">
              <Leaf className="absolute -right-4 -bottom-4 h-32 w-32 text-white/5" />
              <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/80">
                <Leaf className="h-4 w-4" /> PROMESSA DA MARCA
              </div>
              <p className="mt-3 text-lg lg:text-xl font-medium leading-snug text-white">
                Oferecer soluções práticas e personalizadas que geram conformidade, protegem pessoas e constroem um{" "}
                <span className="font-bold text-white underline decoration-white/50 underline-offset-4">futuro sustentável.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES / SOLUÇÕES */}
      <section id="pilares" className="py-20 lg:py-24 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">ÍCONES DA MARCA</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Áreas em que atuamos</h2>
            <p className="mt-3 text-muted-foreground">Estratégia técnica que conecta meio ambiente, pessoas e operação.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {servicos.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="group bg-card border border-border rounded-xl p-6 text-center hover:border-[color:var(--brand)] hover:shadow-lg transition-all">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[color:var(--brand)]/30 text-[color:var(--brand)] group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent transition-all">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <div className="text-xs font-bold tracking-[0.15em] text-muted-foreground group-hover:text-foreground transition">{label.toUpperCase()}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORES & DIFERENCIAIS */}
      <section id="valores" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">NOSSOS VALORES</div>
            <h3 className="mt-3 text-2xl lg:text-3xl font-extrabold">O que nos move</h3>
            <ul className="mt-8 space-y-4">
              {valores.map((v) => (
                <li key={v} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--brand)] shrink-0" />
                  <span className="font-medium">{v}</span>
                </li>
              ))}
            </ul>
          </div>

          <div id="diferenciais" className="bg-hero-gradient text-white rounded-2xl p-8 lg:p-10 shadow-xl relative overflow-hidden">
            <Target className="absolute -right-8 -bottom-8 h-48 w-48 text-white/5" />
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-brand">
              <Target className="h-4 w-4" /> O QUE NOS DIFERENCIA
            </div>
            <h3 className="mt-3 text-2xl lg:text-3xl font-extrabold">Por que escolher a A&amp;M</h3>
            <ul className="mt-8 space-y-4 relative">
              {diferenciais.map((d) => (
                <li key={d} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand shrink-0" />
                  <span className="font-medium">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 opacity-[0.06]"
             style={{ backgroundImage: "radial-gradient(circle at 80% 50%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 items-center text-white">
          <div className="lg:col-span-7">
            <div className="text-xs font-bold tracking-[0.2em] text-brand">VAMOS CONVERSAR</div>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Pronto para transformar conformidade em <span className="text-brand">resultado</span>?
            </h2>
            <p className="mt-5 text-white/80 text-lg max-w-xl leading-relaxed">
              Fale com nossa equipe e receba um diagnóstico estratégico para sua operação.
              Direção clara, execução prática, segurança em primeiro lugar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA><MessageCircle className="h-4 w-4" /> Chamar no WhatsApp</CTA>
              <CTA variant="outline">Ver soluções <ArrowRight className="h-4 w-4" /></CTA>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Responsabilidade técnica</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand" /> Atendimento próximo</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-brand" /> Resultados mensuráveis</div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute -inset-4 bg-[color:var(--brand-light)]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img src={handshakeAsset.url} alt="Aperto de mãos simbolizando acordo e parceria A&M" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[color:var(--brand-dark)] to-transparent">
                  <div className="text-sm font-bold">A&amp;M Consultoria</div>
                  <div className="text-xs text-white/80">Meio Ambiente e SST</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--ink)] text-white/70">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-12 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <Logo className="[&_*]:!text-white" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Consultoria ambiental e de segurança do trabalho. Transformando conformidade em valor sustentável.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-bold text-white mb-3">Navegação</div>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-brand transition">Sobre</a></li>
              <li><a href="#pilares" className="hover:text-brand transition">Soluções</a></li>
              <li><a href="#valores" className="hover:text-brand transition">Valores</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-bold text-white mb-3">Contato</div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-md bg-brand-gradient px-4 py-2 text-white font-semibold hover:shadow-lg transition">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} A&amp;M Consultoria Ambiental e SST. Todos os direitos reservados.</span>
            <span>Meio Ambiente · Segurança do Trabalho</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

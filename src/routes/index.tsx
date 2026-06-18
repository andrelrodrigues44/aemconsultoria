import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Leaf, HardHat, ClipboardCheck, TrendingUp, ShieldCheck, Users, Scale, Target, CheckCircle2, ArrowRight, MessageCircle, Quote, Award, BookOpen, GraduationCap, Mail, Instagram, Linkedin, MapPin, FileSearch, FileText, ShieldAlert, Repeat } from "lucide-react";
import professionalAsset from "@/assets/am-professional.png.asset.json";
import heroAsset from "@/assets/am-hero.png.asset.json";
import handshakeAsset from "@/assets/handshake.jpg.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const WHATSAPP_PHONE = "5531992293261";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`;

const TRAININGS = [
  "NR-05 – CIPA",
  "NR-06 – EPI",
  "NR-10 – Eletricidade",
  "NR-11 – Movimentação e Transporte de Materiais",
  "NR-12 – Máquinas e Equipamentos",
  "NR-18 – Construção Civil",
  "NR-20 – Inflamáveis e Combustíveis",
  "NR-23 – Proteção e Combate a Incêndios",
  "NR-26 – Sinalização de Segurança e Produtos Químicos",
  "NR-33 – Espaço Confinado",
  "NR-35 – Trabalho em Altura",
  "Integração de Segurança",
  "Percepção de Riscos",
  "Gestão Ambiental",
  "Atendimento a Emergências",
  "Outro",
];

const PARTICIPANTS = ["Até 10 participantes", "De 11 a 20 participantes", "De 21 a 50 participantes", "Acima de 50 participantes"];
const MODALITIES = ["Presencial", "Online", "Híbrido"];
const SCHEDULES = ["Imediatamente", "Em até 30 dias", "Em até 60 dias", "Ainda sem definição"];

function TrainingQuoteDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "", empresa: "", cargo: "", email: "", telefone: "", cidade: "",
    treinamentos: [] as string[], participantes: "", modalidade: "", prazo: "", descricao: "",
  });

  const toggleTraining = (t: string) => {
    setForm((f) => ({
      ...f,
      treinamentos: f.treinamentos.includes(t) ? f.treinamentos.filter((x) => x !== t) : [...f.treinamentos, t],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone || !form.cidade || form.treinamentos.length === 0 || !form.participantes || !form.modalidade) {
      return;
    }
    const lines = [
      "*Solicitação de Orçamento — Treinamento Corporativo*",
      "",
      "*Contato*",
      `Nome: ${form.nome}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.cargo && `Cargo: ${form.cargo}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Cidade/Estado: ${form.cidade}`,
      "",
      "*Treinamento*",
      `Interesse: ${form.treinamentos.join(", ")}`,
      `Participantes: ${form.participantes}`,
      `Modalidade: ${form.modalidade}`,
      form.prazo && `Prazo: ${form.prazo}`,
      form.descricao && `Necessidade: ${form.descricao}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ nome: "", empresa: "", cargo: "", email: "", telefone: "", cidade: "", treinamentos: [], participantes: "", modalidade: "", prazo: "", descricao: "" });
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-brand-gradient text-white inline-flex items-center justify-center mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <DialogTitle className="text-2xl">Solicitação Enviada com Sucesso!</DialogTitle>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Obrigado pelo seu interesse nos treinamentos da A&amp;M Consultoria Ambiental e SST.
              Nossa equipe analisará as informações e retornará em até 24 horas úteis com uma proposta personalizada.
            </p>
            <div className="mt-6 border-t border-border pt-5">
              <div className="text-sm font-semibold">Precisa de atendimento mais rápido?</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com um Especialista
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <DialogHeader>
              <DialogTitle className="text-2xl">Solicite seu Orçamento Personalizado</DialogTitle>
              <DialogDescription>
                Preencha o formulário e receba uma proposta personalizada para os treinamentos corporativos da A&amp;M.
              </DialogDescription>
            </DialogHeader>

            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] mb-3">INFORMAÇÕES PARA CONTATO</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input id="nome" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="cargo">Cargo/Função</Label>
                  <Input id="cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                  <Input id="telefone" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="cidade">Cidade/Estado *</Label>
                  <Input id="cidade" required value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] mb-3">INFORMAÇÕES DO TREINAMENTO</div>
              <Label>Treinamento de Interesse *</Label>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-md border border-border p-3 max-h-56 overflow-y-auto">
                {TRAININGS.map((t) => (
                  <label key={t} className="flex items-start gap-2 text-sm cursor-pointer">
                    <Checkbox checked={form.treinamentos.includes(t)} onCheckedChange={() => toggleTraining(t)} />
                    <span className="leading-tight">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Quantidade estimada de participantes *</Label>
              <RadioGroup className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2" value={form.participantes} onValueChange={(v) => setForm({ ...form, participantes: v })}>
                {PARTICIPANTS.map((p) => (
                  <label key={p} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                    <RadioGroupItem value={p} /> {p}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Modalidade desejada *</Label>
              <RadioGroup className="mt-2 grid grid-cols-3 gap-2" value={form.modalidade} onValueChange={(v) => setForm({ ...form, modalidade: v })}>
                {MODALITIES.map((m) => (
                  <label key={m} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                    <RadioGroupItem value={m} /> {m}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Possui data prevista para realização?</Label>
              <RadioGroup className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2" value={form.prazo} onValueChange={(v) => setForm({ ...form, prazo: v })}>
                {SCHEDULES.map((s) => (
                  <label key={s} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                    <RadioGroupItem value={s} /> {s}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="descricao">Descreva brevemente sua necessidade</Label>
              <Textarea
                id="descricao"
                rows={3}
                placeholder="Ex.: Necessitamos capacitar operadores de máquinas conforme NR-12 para atendimento de auditoria interna."
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
            </div>

            <DialogFooter>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
              </button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

const COMPANY_SIZES = ["Até 10 colaboradores", "11 a 50 colaboradores", "51 a 200 colaboradores", "Acima de 200 colaboradores"];
const SECTORS = ["Indústria", "Construção Civil", "Comércio / Varejo", "Serviços", "Logística / Transporte", "Agro / Alimentos", "Saúde", "Outro"];
const SERVICE_DEADLINES = ["O quanto antes", "Em até 30 dias", "Em até 90 dias", "Apenas pesquisando opções"];

function ServiceQuoteDialog({ children, service, scopeOptions }: { children: React.ReactNode; service: string; scopeOptions: string[] }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "", empresa: "", cargo: "", email: "", telefone: "", cidade: "",
    porte: "", setor: "", escopo: [] as string[], prazo: "", desafio: "", descricao: "",
  });

  const toggleScope = (s: string) => {
    setForm((f) => ({ ...f, escopo: f.escopo.includes(s) ? f.escopo.filter((x) => x !== s) : [...f.escopo, s] }));
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ nome: "", empresa: "", cargo: "", email: "", telefone: "", cidade: "", porte: "", setor: "", escopo: [], prazo: "", desafio: "", descricao: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone || !form.cidade || !form.porte || !form.setor) return;
    const lines = [
      `*Solicitação de Proposta — ${service}*`,
      "",
      "*Contato*",
      `Nome: ${form.nome}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.cargo && `Cargo: ${form.cargo}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      `Cidade/Estado: ${form.cidade}`,
      "",
      "*Sobre a Empresa*",
      `Porte: ${form.porte}`,
      `Setor: ${form.setor}`,
      "",
      "*Necessidade*",
      form.escopo.length > 0 && `Escopo de interesse: ${form.escopo.join(", ")}`,
      form.prazo && `Prazo desejado: ${form.prazo}`,
      form.desafio && `Principal desafio: ${form.desafio}`,
      form.descricao && `Detalhes: ${form.descricao}`,
    ].filter(Boolean).join("\n");
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) reset(); }}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {submitted ? (
          <div className="py-6 text-center">
            <div className="mx-auto h-14 w-14 rounded-full bg-brand-gradient text-white inline-flex items-center justify-center mb-4">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <DialogTitle className="text-2xl">Solicitação Enviada com Sucesso!</DialogTitle>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Obrigado pelo seu interesse em <strong>{service}</strong>. Nossa equipe analisará as informações
              enviadas e retornará em até <strong>24 horas úteis</strong> para entender melhor sua necessidade
              e elaborar uma proposta personalizada.
            </p>
            <div className="mt-6 border-t border-border pt-5">
              <div className="text-sm font-semibold">Precisa de atendimento mais rápido?</div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition"
              >
                <MessageCircle className="h-4 w-4" /> Falar com um Especialista
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <DialogHeader>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--brand)]">PROPOSTA PERSONALIZADA</div>
              <DialogTitle className="text-2xl">{service}</DialogTitle>
              <DialogDescription>
                Conte um pouco sobre sua empresa e seu desafio. Em até 24 horas úteis enviamos uma proposta sob medida.
              </DialogDescription>
            </DialogHeader>

            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] mb-3">INFORMAÇÕES PARA CONTATO</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <Label htmlFor="s-nome">Nome Completo *</Label>
                  <Input id="s-nome" required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="s-empresa">Empresa</Label>
                  <Input id="s-empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="s-cargo">Cargo/Função</Label>
                  <Input id="s-cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="s-email">E-mail *</Label>
                  <Input id="s-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label htmlFor="s-telefone">Telefone/WhatsApp *</Label>
                  <Input id="s-telefone" required value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="s-cidade">Cidade/Estado *</Label>
                  <Input id="s-cidade" required value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] mb-3">SOBRE A EMPRESA</div>
              <div className="space-y-4">
                <div>
                  <Label>Porte da empresa *</Label>
                  <RadioGroup className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2" value={form.porte} onValueChange={(v) => setForm({ ...form, porte: v })}>
                    {COMPANY_SIZES.map((p) => (
                      <label key={p} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                        <RadioGroupItem value={p} /> {p}
                      </label>
                    ))}
                  </RadioGroup>
                </div>
                <div>
                  <Label>Setor de atuação *</Label>
                  <RadioGroup className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2" value={form.setor} onValueChange={(v) => setForm({ ...form, setor: v })}>
                    {SECTORS.map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                        <RadioGroupItem value={s} /> {s}
                      </label>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-[0.18em] text-[color:var(--brand)] mb-3">SUA NECESSIDADE</div>
              <Label>Escopo de interesse (selecione um ou mais)</Label>
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 rounded-md border border-border p-3">
                {scopeOptions.map((s) => (
                  <label key={s} className="flex items-start gap-2 text-sm cursor-pointer">
                    <Checkbox checked={form.escopo.includes(s)} onCheckedChange={() => toggleScope(s)} />
                    <span className="leading-tight">{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label>Prazo desejado para início</Label>
              <RadioGroup className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2" value={form.prazo} onValueChange={(v) => setForm({ ...form, prazo: v })}>
                {SERVICE_DEADLINES.map((s) => (
                  <label key={s} className="flex items-center gap-2 text-sm cursor-pointer rounded-md border border-border px-3 py-2">
                    <RadioGroupItem value={s} /> {s}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="s-desafio">Qual é o principal desafio que você quer resolver?</Label>
              <Input
                id="s-desafio"
                placeholder="Ex.: Preparar a empresa para uma auditoria ISO 14001"
                value={form.desafio}
                onChange={(e) => setForm({ ...form, desafio: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="s-descricao">Detalhes adicionais (opcional)</Label>
              <Textarea
                id="s-descricao"
                rows={3}
                placeholder="Conte sobre processos críticos, fiscalizações recentes, equipe responsável, prazos legais, etc."
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
            </div>

            <DialogFooter>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" /> Enviar Solicitação
              </button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

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

function CTA({ children, variant = "primary", className = "", href = WHATSAPP_URL }: { children: React.ReactNode; variant?: "primary" | "outline"; className?: string; href?: string }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const styles = variant === "primary"
    ? "bg-brand-gradient text-white shadow-lg shadow-[color:var(--brand-dark)]/25 hover:shadow-xl"
    : "border border-white/30 text-white hover:bg-white/10";
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${styles} ${className}`}
    >
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
    { icon: HardHat, label: "SST", desc: "Treinamentos, análise de risco (RAC/HRN), Programa de Gerenciamento de Riscos (PGR) e laudos técnicos (LTCAT)." },
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
            <a href="#produtos" className="hover:text-foreground transition">Produtos</a>
            <a href="#treinamentos" className="hover:text-foreground transition">Treinamentos</a>
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
              <CTA variant="outline" href="#pilares">Conhecer soluções <ArrowRight className="h-4 w-4" /></CTA>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[color:var(--brand-light)]/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[5/4] max-w-md mx-auto">
              <img src={heroAsset.url} alt="Consultor A&M em escritório com logo da marca" className="h-full w-full object-cover" />
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

      {/* CREDENCIAIS ISO */}
      <section id="credenciais" className="py-20 lg:py-24 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">CREDENCIAIS</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Autoridade técnica comprovada</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Conformidade conduzida por quem audita pelos mesmos padrões que as certificadoras exigem.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Award, title: "Auditor Líder ISO 45001", desc: "Sistemas de Gestão de Segurança e Saúde Ocupacional." },
              { icon: ShieldCheck, title: "Auditor ISO 14001", desc: "Sistemas de Gestão Ambiental." },
              { icon: HardHat, title: "+15 anos em campo", desc: "Mineração e indústria automobilística, do chão de operação à gestão." },
              { icon: BookOpen, title: "Formação continuada", desc: "Pós em Segurança do Trabalho; especialização em Higiene Ocupacional em curso." },
              { icon: GraduationCap, title: "Técnico em Segurança do Trabalho", desc: "Formação técnica especializada em prevenção e proteção ao trabalhador." },
              { icon: GraduationCap, title: "Engenharia Ambiental", desc: "Formação superior em gestão, preservação e recuperação ambiental." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 hover:border-[color:var(--brand)] hover:shadow-lg transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white mb-4 shadow-md">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="font-bold text-base leading-tight">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILARES / SOLUÇÕES */}
      <section id="pilares" className="py-20 lg:py-24 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            
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

      {/* PRODUTOS / SERVIÇOS COMERCIAIS */}
      <section id="produtos" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">PRODUTOS & SERVIÇOS</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Soluções para cada momento da sua operação</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Do diagnóstico inicial à consultoria recorrente — escolha o nível de profundidade ideal para o seu negócio.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1 — Diagnóstico Inicial */}
            <div className="relative flex flex-col rounded-2xl p-6 lg:p-8 bg-card border border-border hover:border-[color:var(--brand)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 shadow-md bg-brand-gradient text-white">
                <FileSearch className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--brand)]">ENTRADA</div>
              <h3 className="mt-2 font-extrabold text-lg leading-tight">Diagnóstico de Conformidade Ambiental e SST</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Ideal para empresas que desejam entender rapidamente seu nível de conformidade.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Investimento</div>
                <div className="mt-1 text-2xl font-extrabold text-[color:var(--brand)]">R$ 497</div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">O que está incluso</div>
                <ul className="space-y-2">
                  {[
                    "Avaliação preliminar dos requisitos legais aplicáveis",
                    "Checklist de conformidade ambiental e SST",
                    "Identificação de principais riscos e oportunidades de melhoria",
                    "Relatório resumido com recomendações prioritárias",
                    "Atendimento 100% online",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">Indicado para</div>
                <ul className="space-y-1">
                  {[
                    "Pequenas e médias empresas",
                    "Prestadores de serviços",
                    "Empresas que nunca passaram por auditorias",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[color:var(--brand)] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="https://mpago.la/24oheiV"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition"
              >
                <MessageCircle className="h-4 w-4" /> Compre Agora — R$ 497
              </a>
            </div>

            {/* Card 2 — Diagnóstico Completo */}
            <div className="relative flex flex-col rounded-2xl p-6 lg:p-8 bg-card border border-border hover:border-[color:var(--brand)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 shadow-md bg-brand-gradient text-white">
                <FileText className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--brand)]">INTERMEDIÁRIO</div>
              <h3 className="mt-2 font-extrabold text-lg leading-tight">Diagnóstico Completo + Relatório Técnico</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Uma avaliação aprofundada para empresas que precisam de um plano de ação estruturado.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Investimento</div>
                <div className="mt-1 text-2xl font-extrabold text-[color:var(--brand)]">a partir de R$ 997</div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">O que está incluso</div>
                <ul className="space-y-2">
                  {[
                    "Diagnóstico completo de conformidade",
                    "Levantamento de requisitos legais aplicáveis",
                    "Avaliação de documentos e controles internos",
                    "Relatório técnico detalhado",
                    "Plano de ação com prioridades de adequação",
                    "Reunião online de apresentação dos resultados",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">Benefícios</div>
                <ul className="space-y-1">
                  {[
                    "Redução de riscos regulatórios",
                    "Maior segurança jurídica",
                    "Preparação para auditorias e fiscalizações",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[color:var(--brand)] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ServiceQuoteDialog
                service="Diagnóstico Completo + Relatório Técnico"
                scopeOptions={[
                  "Diagnóstico de conformidade ambiental",
                  "Diagnóstico de conformidade SST",
                  "Levantamento de requisitos legais",
                  "Avaliação de documentos e controles",
                  "Plano de ação para adequação",
                  "Preparação para auditoria",
                ]}
              >
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar uma proposta
                </button>
              </ServiceQuoteDialog>
            </div>

            {/* Card 3 — Auditoria Premium */}
            <div className="relative flex flex-col rounded-2xl p-6 lg:p-8 bg-hero-gradient text-white border border-[color:var(--brand-light)]/30 shadow-2xl transition-all hover:-translate-y-1">
              <div className="absolute -top-3 right-5 rounded-full bg-brand-gradient text-white text-[10px] font-bold tracking-[0.15em] px-3 py-1 shadow-md">
                MAIS COMPLETO
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 shadow-md bg-white/15 text-brand">
                <ShieldAlert className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-brand">PREMIUM</div>
              <h3 className="mt-2 font-extrabold text-lg leading-tight text-white">Auditoria de Conformidade Ambiental e SST</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">
                Serviço completo para empresas que desejam uma visão estratégica e aprofundada da sua conformidade legal.
              </p>
              <div className="mt-4 pt-4 border-t border-white/15">
                <div className="text-[10px] font-semibold tracking-wider uppercase text-white/60">Investimento</div>
                <div className="mt-1 text-2xl font-extrabold text-brand">a partir de R$ 2.500</div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-white/60 mb-3">O que está incluso</div>
                <ul className="space-y-2">
                  {[
                    "Auditoria documental",
                    "Auditoria de campo",
                    "Avaliação de requisitos ambientais e SST",
                    "Identificação de desvios críticos",
                    "Relatório executivo e técnico",
                    "Plano de adequação",
                    "Reunião de fechamento com a gestão",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-white/60 mb-2">Resultado esperado</div>
                <ul className="space-y-1">
                  {[
                    "Redução da exposição a multas e autuações",
                    "Melhoria dos processos internos",
                    "Preparação para certificações ISO 14001 e ISO 45001",
                    "Maior controle sobre requisitos legais",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="text-brand shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ServiceQuoteDialog
                service="Auditoria de Conformidade Ambiental e SST"
                scopeOptions={[
                  "Auditoria documental",
                  "Auditoria de campo",
                  "Avaliação de requisitos ambientais",
                  "Avaliação de requisitos de SST",
                  "Preparação para ISO 14001",
                  "Preparação para ISO 45001",
                  "Plano de adequação completo",
                ]}
              >
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold bg-white text-[color:var(--brand-dark)] hover:bg-white/90 transition"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar Proposta
                </button>
              </ServiceQuoteDialog>
            </div>

            {/* Card 4 — Consultoria Mensal */}
            <div className="relative flex flex-col rounded-2xl p-6 lg:p-8 bg-card border border-border hover:border-[color:var(--brand)] hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 shadow-md bg-brand-gradient text-white">
                <Repeat className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <div className="text-[10px] font-bold tracking-[0.2em] text-[color:var(--brand)]">RECORRÊNCIA</div>
              <h3 className="mt-2 font-extrabold text-lg leading-tight">Consultoria Mensal Ambiental e SST</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Tenha suporte especializado para manter sua empresa em conformidade durante todo o ano.
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">Investimento</div>
                <div className="mt-1 text-2xl font-extrabold text-[color:var(--brand)]">a partir de R$ 790/mês</div>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">O que está incluso</div>
                <ul className="space-y-2">
                  {[
                    "Suporte técnico especializado",
                    "Atualização de requisitos legais",
                    "Orientação para auditorias",
                    "Reuniões periódicas",
                    "Apoio na gestão ambiental e SST",
                    "Acompanhamento de planos de ação",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[color:var(--brand)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <div className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">Ideal para</div>
                <ul className="space-y-1">
                  {[
                    "Empresas sem equipe própria de meio ambiente e SST",
                    "Organizações que desejam terceirizar a gestão de conformidade",
                    "Empresas em fase de crescimento",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[color:var(--brand)] shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ServiceQuoteDialog
                service="Consultoria Mensal Ambiental e SST"
                scopeOptions={[
                  "Suporte técnico mensal",
                  "Atualização de requisitos legais",
                  "Acompanhamento de planos de ação",
                  "Apoio em auditorias e fiscalizações",
                  "Gestão de licenças ambientais",
                  "Treinamentos recorrentes da equipe",
                ]}
              >
                <button
                  type="button"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold bg-brand-gradient text-white shadow-md hover:shadow-lg transition"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar uma proposta
                </button>
              </ServiceQuoteDialog>
            </div>
          </div>
        </div>
      </section>

      {/* TREINAMENTOS */}
      <section id="treinamentos" className="py-20 lg:py-24 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[0.2em] text-[color:var(--brand)]">TREINAMENTOS</div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">Treinamentos Disponíveis</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Capacitações técnicas em Segurança do Trabalho e Meio Ambiente, alinhadas às normas regulamentadoras e às necessidades da sua operação.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "NR-05 – Comissão Interna de Prevenção de Acidentes (CIPA)",
              "NR-06 – Equipamentos de Proteção Individual (EPI)",
              "NR-10 – Segurança em Instalações e Serviços em Eletricidade",
              "NR-11 – Movimentação e Transporte de Materiais",
              "NR-12 – Segurança em Máquinas e Equipamentos",
              "NR-18 – Condições e Meio Ambiente na Construção Civil",
              "NR-20 – Segurança com Inflamáveis e Combustíveis",
              "NR-23 – Proteção e Combate a Incêndio",
              "NR-26 – Sinalização de Segurança e Produtos Químicos",
              "NR-33 – Espaço Confinado",
              "NR-35 – Trabalho em Altura",
              "Integração de Segurança para Colaboradores e Terceiros",
              "Gestão de Resíduos e Meio Ambiente",
              "Atendimento a Emergências",
              "Percepção de Riscos e Comportamento Seguro",
              "Treinamentos personalizados conforme necessidade da empresa",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 hover:border-[color:var(--brand)] hover:shadow-md transition-all">
                <GraduationCap className="h-5 w-5 text-[color:var(--brand)] shrink-0 mt-0.5" strokeWidth={2.2} />
                <span className="text-sm font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-gradient rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
            <GraduationCap className="absolute -right-6 -bottom-6 h-40 w-40 text-white/5" />
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-extrabold">Solicite seu Orçamento</h3>
              <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                Cada empresa possui necessidades específicas de treinamento. Por isso, elaboramos propostas personalizadas considerando:
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "Quantidade de participantes",
                  "Modalidade (presencial ou online)",
                  "Carga horária necessária",
                  "Local de realização",
                  "Conteúdo específico da atividade",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <TrainingQuoteDialog>
                <button
                  type="button"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold bg-white text-[color:var(--brand-dark)] hover:bg-white/90 transition shadow-md"
                >
                  <MessageCircle className="h-4 w-4" /> Solicitar Orçamento
                </button>
              </TrainingQuoteDialog>
            </div>
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
            <div className="mt-5 space-y-1.5 text-sm">
              <div className="font-semibold text-white">A&amp;M Consultoria Ambiental e SST</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand shrink-0" /> Contagem · Minas Gerais</div>
              
              <div>E-mail: <span className="text-white/60">contato@aemconsult.com.br</span></div>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-bold text-white mb-3">Navegação</div>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-brand transition">Sobre</a></li>
              <li><a href="#credenciais" className="hover:text-brand transition">Credenciais</a></li>
              <li><a href="#pilares" className="hover:text-brand transition">Soluções</a></li>
              <li><a href="#treinamentos" className="hover:text-brand transition">Treinamentos</a></li>
              <li><a href="#valores" className="hover:text-brand transition">Valores</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-bold text-white mb-3">Contato</div>
            <ul className="space-y-2.5">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand transition">
                  <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp: (31) 99229-3261
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand" /> E-mail: <span className="text-white/60">contato@aemconsult.com.br</span>
              </li>
              <li>
                <a href="https://instagram.com/aem.consultoria_ambiental_sst" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand transition">
                  <Instagram className="h-4 w-4 text-brand" /> @aem.consultoria_ambiental_sst
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/a-m-consultoria-e-capacita%C3%A7%C3%A3o/about/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand transition">
                  <Linkedin className="h-4 w-4 text-brand" /> LinkedIn
                </a>
              </li>
            </ul>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
               className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand-gradient px-4 py-2 text-white font-semibold hover:shadow-lg transition">
              <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
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

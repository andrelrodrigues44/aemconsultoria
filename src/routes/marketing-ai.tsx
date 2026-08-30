import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  FileText,
  Filter,
  Gauge,
  Instagram,
  Linkedin,
  Megaphone,
  MessageSquareText,
  PenTool,
  Play,
  Plus,
  RefreshCw,
  Send,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  X,
} from "lucide-react";

export const Route = createFileRoute("/marketing-ai")({ component: MarketingAIPage });

type Tab = "visao" | "campanhas" | "conteudo" | "calendario" | "leads" | "analytics";

type ContentItem = {
  title: string;
  channel: string;
  status: "Rascunho" | "Aprovado" | "Agendado";
  date: string;
  objective: string;
};

const CONTENT: ContentItem[] = [
  { title: "5 riscos de não controlar requisitos legais", channel: "LinkedIn", status: "Aprovado", date: "02/09", objective: "Autoridade" },
  { title: "Checklist ambiental para auditoria", channel: "Instagram", status: "Agendado", date: "03/09", objective: "Educação" },
  { title: "Conformidade sem planilhas dispersas", channel: "LinkedIn", status: "Rascunho", date: "04/09", objective: "Produto" },
  { title: "Como reduzir retrabalho em SSMA", channel: "Instagram", status: "Rascunho", date: "05/09", objective: "Dor" },
];

const LEADS = [
  { company: "Mineradora Horizonte", contact: "Mariana • Ger. SSMA", score: 92, status: "HOT", next: "Demonstração" },
  { company: "Indústria Vale Sul", contact: "Carlos • HSE", score: 76, status: "WARM", next: "Conteúdo" },
  { company: "Construtora Atlas", contact: "Renata • SST", score: 58, status: "WARM", next: "Follow-up" },
  { company: "Metalúrgica Prime", contact: "João • Eng. Segurança", score: 34, status: "COLD", next: "Nutrição" },
];

const AGENTS = [
  { name: "Orquestrador", description: "Coordena estratégia, conteúdo, campanhas e ações.", icon: Bot, active: true },
  { name: "Estrategista", description: "Planeja campanhas por segmento, dor e objetivo.", icon: Target, active: true },
  { name: "Copywriter", description: "Cria headlines, legendas, CTAs e textos comerciais.", icon: PenTool, active: true },
  { name: "Social Media", description: "Adapta conteúdo para LinkedIn, Instagram e Stories.", icon: Instagram, active: true },
  { name: "SDR IA", description: "Qualifica leads e recomenda o próximo passo.", icon: Users, active: true },
  { name: "Analytics", description: "Interpreta métricas e recomenda otimizações.", icon: BarChart3, active: true },
];

function MarketingAIPage() {
  const [tab, setTab] = useState<Tab>("visao");
  const [segment, setSegment] = useState("Mineração");
  const [objective, setObjective] = useState("Gerar demonstrações");
  const [period, setPeriod] = useState("Próximos 7 dias");
  const [generated, setGenerated] = useState(false);
  const [approved, setApproved] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generatedCampaign = useMemo(() => ({
    title: `Campanha — ${segment}`,
    promise: "Controle conformidade, reduza riscos e tome decisões com dados.",
    posts: 5,
    channels: "LinkedIn + Instagram",
  }), [segment]);

  const generate = () => setGenerated(true);
  const approve = (title: string) => setApproved((current) => current.includes(title) ? current : [...current, title]);
  const copyText = async () => {
    await navigator.clipboard?.writeText(`${generatedCampaign.title}\n${generatedCampaign.promise}\nObjetivo: ${objective}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const nav = [
    ["visao", "Visão geral", Gauge],
    ["campanhas", "Campanhas", Megaphone],
    ["conteudo", "Conteúdo", FileText],
    ["calendario", "Calendário", CalendarDays],
    ["leads", "Leads & SDR", Users],
    ["analytics", "Analytics", BarChart3],
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-sm"><Sparkles className="h-5 w-5" /></div>
            <div><div className="text-lg font-bold tracking-tight">CONFORMA360 <span className="text-emerald-700">MARKETING AI</span></div><div className="text-xs text-slate-500">Centro de inteligência, conteúdo, leads e crescimento</div></div>
          </div>
          <div className="hidden items-center gap-2 md:flex"><span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> IA operacional</span><button className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"><RefreshCw className="h-4 w-4" /></button></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 lg:grid-cols-[230px_1fr]">
        <aside className="border-r border-slate-200 bg-white p-4 lg:min-h-[calc(100vh-77px)]">
          <div className="mb-4 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Marketing</div>
          <nav className="space-y-1">
            {nav.map(([key, label, Icon]) => <button key={key} onClick={() => setTab(key)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${tab === key ? "bg-emerald-50 text-emerald-800" : "text-slate-600 hover:bg-slate-50"}`}><Icon className="h-4 w-4" />{label}<ChevronRight className="ml-auto h-3.5 w-3.5 opacity-50" /></button>)}
          </nav>
          <div className="mt-8 rounded-2xl bg-slate-950 p-4 text-white"><div className="flex items-center gap-2 text-sm font-semibold"><Bot className="h-4 w-4" /> Agentes IA</div><p className="mt-2 text-xs leading-5 text-slate-300">6 agentes configurados para trabalhar em conjunto.</p><button onClick={() => setTab("campanhas")} className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-900">Criar campanha</button></div>
        </aside>

        <main className="p-5 md:p-8">
          {tab === "visao" && <>
            <section className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-7 text-white shadow-sm md:p-9">
              <div className="max-w-3xl"><div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300"><WandSparkles className="h-4 w-4" /> Agente orquestrador</div><h1 className="text-3xl font-bold tracking-tight md:text-4xl">Transforme uma ideia em uma campanha completa.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Estratégia, copy, conteúdo, calendário, qualificação de leads e análise em um único fluxo. O sistema prepara tudo para sua aprovação.</p></div>
              <div className="mt-7 grid gap-3 md:grid-cols-[1fr_1fr_180px_auto]"><select value={segment} onChange={(e) => setSegment(e.target.value)} className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white outline-none"><option className="text-slate-900">Mineração</option><option className="text-slate-900">Indústria</option><option className="text-slate-900">Construção</option><option className="text-slate-900">Metalurgia</option><option className="text-slate-900">Engenharia</option></select><select value={objective} onChange={(e) => setObjective(e.target.value)} className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white outline-none"><option className="text-slate-900">Gerar demonstrações</option><option className="text-slate-900">Gerar leads</option><option className="text-slate-900">Fortalecer autoridade</option><option className="text-slate-900">Vender consultoria</option></select><select value={period} onChange={(e) => setPeriod(e.target.value)} className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-sm text-white outline-none"><option className="text-slate-900">Próximos 7 dias</option><option className="text-slate-900">Próximos 15 dias</option><option className="text-slate-900">Próximos 30 dias</option></select><button onClick={generate} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-400"><Sparkles className="h-4 w-4" /> Gerar campanha</button></div>
            </section>

            {generated && <section className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-700">Campanha criada</div><h2 className="mt-1 text-xl font-bold">{generatedCampaign.title}</h2><p className="mt-1 text-sm text-slate-600">{generatedCampaign.promise}</p></div><div className="flex gap-2"><button onClick={copyText} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold">{copied ? "Copiado" : "Copiar briefing"}</button><button onClick={() => setTab("conteudo")} className="rounded-lg bg-emerald-700 px-3 py-2 text-xs font-semibold text-white">Ver conteúdo</button></div></div><div className="mt-4 grid grid-cols-3 gap-3 text-center"><div className="rounded-xl bg-white p-3"><div className="text-lg font-bold">{generatedCampaign.posts}</div><div className="text-[11px] text-slate-500">Conteúdos</div></div><div className="rounded-xl bg-white p-3"><div className="text-lg font-bold">{generatedCampaign.channels}</div><div className="text-[11px] text-slate-500">Canais</div></div><div className="rounded-xl bg-white p-3"><div className="text-lg font-bold">{objective}</div><div className="text-[11px] text-slate-500">Objetivo</div></div></div></section>}

            <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Leads no funil" value="24" detail="+18% vs. período anterior" icon={Users} /><Metric label="Demonstrações" value="8" detail="3 aguardando confirmação" icon={CalendarDays} /><Metric label="Conteúdos" value="18" detail="12 agendados" icon={FileText} /><Metric label="Conversão" value="14,8%" detail="+2,1 p.p." icon={BarChart3} /></section>

            <section className="mt-7 grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
              <Panel title="Agentes trabalhando" action={<button onClick={() => setTab("campanhas")} className="text-xs font-semibold text-emerald-700">Gerenciar</button>}><div className="grid gap-3 md:grid-cols-2">{AGENTS.map((agent) => <div key={agent.name} className="flex gap-3 rounded-xl border border-slate-100 p-3"><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700"><agent.icon className="h-4 w-4" /></div><div className="min-w-0"><div className="flex items-center gap-2 text-sm font-semibold">{agent.name}<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /></div><p className="mt-1 text-xs leading-5 text-slate-500">{agent.description}</p></div></div>)}</div></Panel>
              <Panel title="Leads prioritários" action={<button onClick={() => setTab("leads")} className="text-xs font-semibold text-emerald-700">Ver funil</button>}><div className="space-y-3">{LEADS.slice(0, 3).map((lead) => <div key={lead.company} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3"><div><div className="text-sm font-semibold">{lead.company}</div><div className="mt-1 text-xs text-slate-500">{lead.contact}</div></div><span className={`rounded-full px-2 py-1 text-[10px] font-bold ${lead.status === "HOT" ? "bg-red-50 text-red-700" : "bg-amber-50 text-amber-700"}`}>{lead.status} · {lead.score}</span></div>)}</div></Panel>
            </section>
          </>}

          {tab === "campanhas" && <Campaigns onGenerate={() => setGenerated(true)} />}
          {tab === "conteudo" && <ContentTab approved={approved} onApprove={approve} />}
          {tab === "calendario" && <CalendarTab />}
          {tab === "leads" && <LeadsTab />}
          {tab === "analytics" && <AnalyticsTab />}
        </main>
      </div>
    </div>
  );
}

function Metric({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: typeof Gauge }) { return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">{label}</span><Icon className="h-4 w-4 text-emerald-700" /></div><div className="mt-3 text-2xl font-bold tracking-tight">{value}</div><div className="mt-1 text-xs text-emerald-700">{detail}</div></div> }
function Panel({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) { return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div className="mb-4 flex items-center justify-between"><h2 className="font-bold">{title}</h2>{action}</div>{children}</section> }
function Campaigns({ onGenerate }: { onGenerate: () => void }) { return <div><PageTitle eyebrow="Orquestração" title="Campanhas" description="Crie campanhas completas e distribua o trabalho entre os agentes de IA." /><div className="grid gap-5 xl:grid-cols-[1fr_360px]"><Panel title="Nova campanha"><div className="grid gap-4 md:grid-cols-2"><Field label="Nome da campanha" value="Conformidade sem retrabalho" /><Field label="Segmento" value="Mineração" /><Field label="Objetivo" value="Gerar demonstrações" /><Field label="Período" value="01 a 07 de setembro" /></div><div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">O Orquestrador vai gerar estratégia, pilares, conteúdos, CTAs, calendário e recomendações de follow-up.</div><button onClick={onGenerate} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white"><Sparkles className="h-4 w-4" /> Gerar com IA</button></Panel><Panel title="Fluxo automático"><Flow label="Estratégia" /><Flow label="Copywriter" /><Flow label="Social Media" /><Flow label="Aprovação" /><Flow label="Publicação" /><Flow label="Analytics" /></Panel></div></div> }
function ContentTab({ approved, onApprove }: { approved: string[]; onApprove: (title: string) => void }) { return <div><PageTitle eyebrow="Content engine" title="Conteúdo" description="Produção centralizada para LinkedIn e Instagram, com aprovação antes de ações externas." /><Panel title="Fila de conteúdo" action={<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold"><Filter className="h-3.5 w-3.5" /> Filtrar</button>}><div className="overflow-x-auto"><table className="w-full min-w-[760px] text-left text-sm"><thead className="border-b border-slate-100 text-xs text-slate-400"><tr><th className="pb-3">Conteúdo</th><th className="pb-3">Canal</th><th className="pb-3">Objetivo</th><th className="pb-3">Data</th><th className="pb-3">Status</th><th className="pb-3">Ação</th></tr></thead><tbody>{CONTENT.map((item) => <tr key={item.title} className="border-b border-slate-50"><td className="py-4 font-semibold">{item.title}</td><td className="py-4"><span className="inline-flex items-center gap-1.5">{item.channel === "LinkedIn" ? <Linkedin className="h-3.5 w-3.5" /> : <Instagram className="h-3.5 w-3.5" />}{item.channel}</span></td><td className="py-4 text-slate-500">{item.objective}</td><td className="py-4 text-slate-500">{item.date}</td><td className="py-4"><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold">{approved.includes(item.title) ? "Aprovado" : item.status}</span></td><td className="py-4">{approved.includes(item.title) ? <span className="text-xs font-semibold text-emerald-700">Pronto</span> : <button onClick={() => onApprove(item.title)} className="rounded-lg border border-emerald-200 px-3 py-1.5 text-xs font-semibold text-emerald-700">Aprovar</button>}</td></tr>)}</tbody></table></div></Panel></div> }
function CalendarTab() { return <div><PageTitle eyebrow="Planejamento" title="Calendário editorial" description="Visualize e organize a cadência de publicação por canal." /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{["SEG 01", "TER 02", "QUA 03", "QUI 04", "SEX 05", "SÁB 06"].map((day, i) => <div key={day} className="min-h-36 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="text-xs font-bold text-slate-400">{day}</div><div className="mt-3 rounded-xl bg-emerald-50 p-3"><div className="flex items-center gap-2 text-xs font-bold text-emerald-800">{i % 2 === 0 ? <Linkedin className="h-3.5 w-3.5" /> : <Instagram className="h-3.5 w-3.5" />} Conteúdo {i + 1}</div><p className="mt-1 text-xs leading-5 text-slate-600">Conformidade que reduz riscos e melhora decisões.</p></div></div>)}</div></div> }
function LeadsTab() { return <div><PageTitle eyebrow="Revenue engine" title="Leads & SDR IA" description="Qualifique oportunidades e determine automaticamente o próximo melhor passo." /><Panel title="Pipeline"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">{LEADS.map((lead) => <div key={lead.company} className="rounded-xl border border-slate-100 p-4"><div className="flex items-start justify-between gap-2"><div className="text-sm font-bold">{lead.company}</div><span className="text-xs font-bold text-emerald-700">{lead.score}</span></div><div className="mt-2 text-xs text-slate-500">{lead.contact}</div><div className="mt-4 flex items-center justify-between"><span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold">{lead.status}</span><span className="text-[11px] text-slate-500">{lead.next}</span></div></div>)}</div></Panel></div> }
function AnalyticsTab() { return <div><PageTitle eyebrow="Inteligência" title="Analytics" description="Acompanhe o que gera atenção, leads, demonstrações e receita." /><div className="grid gap-4 md:grid-cols-3"><Metric label="Alcance" value="48,2 mil" detail="+22%" icon={BarChart3} /><Metric label="Leads" value="24" detail="+18%" icon={Users} /><Metric label="Taxa de conversão" value="14,8%" detail="+2,1 p.p." icon={Target} /></div><Panel title="Recomendação da IA"><div className="flex gap-3 rounded-xl bg-emerald-50 p-4"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" /><div><div className="text-sm font-bold">Aumentar conteúdo de dor + produto</div><p className="mt-1 text-sm leading-6 text-slate-600">Os temas de requisitos legais e redução de retrabalho devem receber maior frequência para aumentar a geração de demonstrações.</p></div></div></Panel></div> }
function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <div className="mb-6"><div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">{eyebrow}</div><h1 className="mt-1 text-3xl font-bold tracking-tight">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">{description}</p></div> }
function Field({ label, value }: { label: string; value: string }) { return <label className="block"><span className="text-xs font-semibold text-slate-600">{label}</span><input defaultValue={value} className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm outline-none focus:border-emerald-500" /></label> }
function Flow({ label }: { label: string }) { return <div className="flex items-center gap-3 border-b border-slate-100 py-3 text-sm"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700">✓</span><span className="font-medium">{label}</span><CheckCircle2 className="ml-auto h-4 w-4 text-emerald-600" /></div> }

void [Copy, Clock3, MessageSquareText, Play, Plus, Send, X];

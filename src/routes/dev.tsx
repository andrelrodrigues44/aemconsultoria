import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Leaf,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/dev")({
  component: Conforma360Dev,
});

const modules = [
  { icon: ShieldCheck, title: "Segurança", text: "Riscos, inspeções, ações e indicadores de SST." },
  { icon: Leaf, title: "Meio Ambiente", text: "Aspectos, controles, licenças e desempenho ambiental." },
  { icon: FileCheck2, title: "Requisitos Legais", text: "Obrigações, aplicabilidade, evidências e vencimentos." },
  { icon: ClipboardCheck, title: "Auditorias", text: "Planejamento, constatações, evidências e planos de ação." },
];

function Conforma360Dev() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(14,116,144,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="flex items-center justify-between gap-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <Sparkles className="h-4 w-4" /> CONFORMA360 DEV
            </div>
            <Link to="/" className="text-sm text-slate-300 transition hover:text-white">Voltar ao site</Link>
          </div>

          <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Gestão inteligente de SSMA & Compliance</p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
                Conformidade que vira <span className="text-emerald-400">gestão.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Uma nova base tecnológica para transformar riscos, requisitos, evidências e indicadores em ações e decisões mais rápidas.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/dev" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
                  Explorar plataforma <ArrowRight className="h-4 w-4" />
                </Link>
                <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
                  <LockKeyhole className="h-4 w-4" /> Ambiente independente
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Visão executiva</p>
                    <h2 className="mt-1 text-xl font-bold">Status de conformidade</h2>
                  </div>
                  <BarChart3 className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  {[['94%', 'Conformidade'], ['18', 'Ações abertas'], ['07', 'Vencimentos'], ['96%', 'Evidências']].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <div className="text-2xl font-black text-emerald-300">{value}</div>
                      <div className="mt-1 text-xs text-slate-500">{label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  <span>Dados organizados para decisão executiva.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 lg:col-span-2">
            <div className="flex items-center gap-3 text-emerald-300"><Brain className="h-5 w-5" /><span className="font-bold">IA aplicada</span></div>
            <h2 className="mt-4 text-3xl font-black tracking-tight">Do dado à decisão.</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-400">A arquitetura será preparada para agentes de IA capazes de apoiar SSMA, Compliance, documentos, requisitos legais e gestão executiva — sempre respeitando permissões, rastreabilidade e validação humana.</p>
          </div>
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-7">
            <Target className="h-6 w-6 text-emerald-300" />
            <h2 className="mt-4 text-2xl font-black">Construído para crescer</h2>
            <div className="mt-5 space-y-3 text-sm text-emerald-100/80">
              <div className="flex gap-2"><Users className="h-4 w-4 shrink-0" /> Estrutura preparada para empresas e unidades</div>
              <div className="flex gap-2"><LockKeyhole className="h-4 w-4 shrink-0" /> Segurança e permissões desde o núcleo</div>
              <div className="flex gap-2"><CheckCircle2 className="h-4 w-4 shrink-0" /> Desenvolvimento independente e testável</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

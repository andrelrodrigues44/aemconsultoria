import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Gavel,
  Leaf,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const modules = [
  { title: "Empresas", description: "Organizações e unidades cadastradas", icon: Building2, value: "24", href: "/admin/empresas" },
  { title: "Usuários", description: "Usuários e perfis de acesso", icon: Users, value: "186", href: "/admin/usuarios" },
  { title: "Requisitos Legais", description: "Obrigações monitoradas", icon: Gavel, value: "1.248", href: "/admin/requisitos" },
  { title: "Documentos", description: "Documentos sob controle", icon: FileText, value: "3.486", href: "/admin/documentos" },
  { title: "Inspeções", description: "Inspeções realizadas e pendentes", icon: ClipboardCheck, value: "72", href: "/admin/inspecoes" },
  { title: "Planos de Ação", description: "Ações em acompanhamento", icon: CheckCircle2, value: "138", href: "/admin/planos-de-acao" },
];

const indicators = [
  { label: "Conformidade média", value: "94,2%", detail: "+3,8% no período" },
  { label: "Pendências críticas", value: "07", detail: "02 vencem nesta semana" },
  { label: "Documentos próximos do vencimento", value: "19", detail: "Requerem acompanhamento" },
  { label: "Planos de ação em atraso", value: "11", detail: "5 com prioridade alta" },
];

function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-700 to-slate-900 text-white grid place-items-center shadow-sm">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold tracking-tight">CONFORMA360</div>
              <div className="text-xs text-slate-500">Painel Administrativo · DEV</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/" className="hidden sm:inline-flex rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100 transition">
              Voltar ao site
            </Link>
            <button className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 transition">
              <Settings className="h-4 w-4" /> Configurações
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-8">
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 mb-3">
                <Activity className="h-3.5 w-3.5" /> Ambiente independente de desenvolvimento
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Visão executiva</h1>
              <p className="mt-2 max-w-2xl text-slate-600">
                Centro de controle para empresas, conformidade, evidências, riscos e indicadores do Conforma360.
              </p>
            </div>
            <div className="rounded-xl border bg-white px-4 py-3 shadow-sm text-sm">
              <div className="text-slate-500">Status da plataforma</div>
              <div className="mt-1 flex items-center gap-2 font-semibold">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" /> Ambiente operacional
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {indicators.map((item) => (
            <article key={item.label} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-sm text-slate-500">{item.label}</div>
              <div className="mt-2 text-3xl font-bold tracking-tight">{item.value}</div>
              <div className="mt-2 text-xs text-slate-500">{item.detail}</div>
            </article>
          ))}
        </section>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Módulos principais</h2>
              <p className="text-sm text-slate-500 mt-1">Base administrativa para evolução do SaaS.</p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-500">
              <LayoutDashboard className="h-4 w-4" /> 6 módulos estruturados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.title}
                  to={module.href as never}
                  className="group rounded-2xl border bg-white p-5 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-11 w-11 rounded-xl bg-slate-100 grid place-items-center text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-bold">{module.value}</span>
                  </div>
                  <h3 className="mt-5 font-bold">{module.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{module.description}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700">
                    Acessar módulo <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-bold text-lg">Próxima camada: SSMA + Compliance</h2>
                <p className="mt-1 text-sm text-slate-500">Estrutura preparada para receber os módulos operacionais.</p>
              </div>
              <Wrench className="h-5 w-5 text-slate-400" />
            </div>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-slate-50 p-4"><Leaf className="h-5 w-5 text-emerald-700" /><div className="mt-3 font-semibold text-sm">Meio Ambiente</div></div>
              <div className="rounded-xl bg-slate-50 p-4"><ShieldCheck className="h-5 w-5 text-emerald-700" /><div className="mt-3 font-semibold text-sm">Segurança</div></div>
              <div className="rounded-xl bg-slate-50 p-4"><FileCheck2 className="h-5 w-5 text-emerald-700" /><div className="mt-3 font-semibold text-sm">Evidências</div></div>
            </div>
          </article>

          <article className="rounded-2xl bg-slate-900 text-white p-6 shadow-sm">
            <div className="text-xs font-semibold tracking-widest text-emerald-300">DEV MANAGER</div>
            <h2 className="mt-3 text-xl font-bold">Construção independente</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Este painel pertence exclusivamente ao ambiente de desenvolvimento do GitHub. O projeto mantido no Claude permanece fora do escopo.
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
              Próximo passo: autenticação, multiempresa, banco de dados e permissões.
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

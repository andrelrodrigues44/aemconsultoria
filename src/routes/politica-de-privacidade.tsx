import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, Mail, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — A&M Consultoria Ambiental e SST" },
      { name: "description", content: "Conheça como a A&M Consultoria Ambiental e SST coleta, utiliza e protege seus dados pessoais." },
      { property: "og:title", content: "Política de Privacidade — A&M Consultoria Ambiental e SST" },
      { property: "og:description", content: "Conheça como a A&M Consultoria Ambiental e SST coleta, utiliza e protege seus dados pessoais." },
    ],
  }),
  component: PoliticaDePrivacidade,
});

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img src={logoAsset.url} alt="A&M Consultoria Ambiental e SST" className="h-12 w-12 object-contain" />
      <span className="sr-only">A&amp;M Consultoria Ambiental e SST</span>
    </div>
  );
}

function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-[color:var(--brand)] hover:text-[color:var(--brand-dark)] transition">
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>
          <Logo />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero-gradient text-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-brand mb-4">
            <ShieldCheck className="h-4 w-4" /> TRANSPARÊNCIA
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto leading-relaxed">
            A A&amp;M Consultoria Ambiental e SST respeita sua privacidade e trata seus dados conforme a Lei nº 13.709/2018 (LGPD).
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-5 lg:px-8 py-16 lg:py-20">
        <article className="space-y-12">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">1</div>
              <h2 className="text-xl font-extrabold">Dados que coletamos</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos apenas os dados que você nos fornece voluntariamente ao entrar em contato (nome, telefone, e-mail, empresa e descrição da necessidade), via WhatsApp, e-mail ou formulários do site.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">2</div>
              <h2 className="text-xl font-extrabold">Finalidade</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Utilizamos seus dados exclusivamente para responder solicitações, elaborar propostas comerciais e prestar nossos serviços. Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">3</div>
              <h2 className="text-xl font-extrabold">Compartilhamento</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Dados podem ser processados por plataformas que utilizamos (ex.: WhatsApp e meios de pagamento), apenas no necessário para o atendimento.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">4</div>
              <h2 className="text-xl font-extrabold">Armazenamento e segurança</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">5</div>
              <h2 className="text-xl font-extrabold">Seus direitos</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo e-mail{" "}
              <a href="mailto:contato@aemconsult.com.br" className="text-[color:var(--brand)] font-medium hover:underline">contato@aemconsult.com.br</a>.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">6</div>
              <h2 className="text-xl font-extrabold">Cookies</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Este site pode usar cookies para melhorar a navegação. Você pode desativá-los no seu navegador.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 rounded-lg bg-brand-gradient text-white inline-flex items-center justify-center text-sm font-bold">7</div>
              <h2 className="text-xl font-extrabold">Contato do controlador</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong>A&amp;M Consultoria Ambiental e SST</strong> —{" "}
              <a href="mailto:contato@aemconsult.com.br" className="text-[color:var(--brand)] font-medium hover:underline">contato@aemconsult.com.br</a>
            </p>
          </section>

          <div className="rounded-xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
            <strong className="text-foreground">Última atualização:</strong> junho de 2026.
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-[color:var(--ink)] text-white/70">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Logo className="[&_*]:!text-white" />
            <span className="font-semibold text-white">A&amp;M Consultoria Ambiental e SST</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/" className="hover:text-brand transition">Início</Link>
            <span className="text-white/30">|</span>
            <span className="text-white/50">Política de Privacidade</span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-white/50 text-center">
            &copy; {new Date().getFullYear()} A&amp;M Consultoria Ambiental e SST. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

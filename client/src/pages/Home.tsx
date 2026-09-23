import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Binary,
  Calculator,
  ChevronRight,
  Circle,
  Code2,
  Database,
  FileSpreadsheet,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  PanelTop,
  Plus,
  ScanLine,
  Sparkles,
  Terminal,
  Workflow,
  X,
} from "lucide-react";
import { toast } from "sonner";

type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  icon: typeof Layers3;
  details: { label: string; text: string }[];
};

const projects: Project[] = [
  {
    id: "elevare",
    number: "01",
    name: "ELEVARE",
    category: "SAAS / CLINIC MANAGEMENT",
    description: "Plataforma de gestão criada para clínicas de estética, reunindo agenda, profissionais, serviços, clientes, produtos, financeiro e outras ferramentas em um único sistema.",
    tags: ["SAAS", "GESTÃO", "AGENDA", "FINANCEIRO"],
    accent: "violet",
    icon: PanelTop,
    details: [
      { label: "Objetivo", text: "Centralizar a rotina de clínicas de estética em um único sistema." },
      { label: "Problema", text: "Informações de agenda, pessoas, serviços, produtos e financeiro espalhadas em diferentes fluxos." },
      { label: "Solução", text: "Uma plataforma de gestão pensada para reunir essas ferramentas em uma experiência única." },
      { label: "Escopo", text: "Agenda, profissionais, serviços, clientes, produtos e financeiro." },
      { label: "Status", text: "A definir — campo editável para atualizar conforme o projeto evolui." },
    ],
  },
  {
    id: "calculadp",
    number: "02",
    name: "CALCULADP",
    category: "DEPARTMENT PERSONNEL / AUTOMATION",
    description: "Ferramenta criada para facilitar cálculos e consultas relacionados ao Departamento Pessoal.",
    tags: ["INSS", "IRRF", "FÉRIAS", "13º", "FOLHA"],
    accent: "blue",
    icon: Calculator,
    details: [
      { label: "Origem", text: "Nasceu de necessidades reais encontradas na rotina de Departamento Pessoal." },
      { label: "Objetivo", text: "Facilitar cálculos e consultas relacionados ao Departamento Pessoal." },
      { label: "Escopo", text: "INSS, IRRF, férias, 13º e folha — conforme o conteúdo definido para o projeto." },
      { label: "Evolução", text: "Espaço reservado para documentar próximas versões e aprendizados." },
      { label: "Status", text: "A definir — campo editável para atualizar conforme o projeto evolui." },
    ],
  },
  {
    id: "nasajon",
    number: "03",
    name: "AUTOMAÇÃO NASAJON",
    category: "AUTOMATION / PAYROLL",
    description: "Ferramenta criada para transformar informações de planilhas em arquivos TXT estruturados para importação no sistema Nasajon.",
    tags: ["EXCEL", "AUTOMAÇÃO", "TXT", "NASAJON", "FOLHA"],
    accent: "pink",
    icon: FileSpreadsheet,
    details: [
      { label: "Problema", text: "Transformar dados de planilhas em um formato estruturado para importação no Nasajon." },
      { label: "Funcionamento", text: "EXCEL → MAPEAMENTO → PROCESSAMENTO → TXT." },
      { label: "Entrada", text: "Informações originadas em planilhas, com identificação das colunas necessárias ao fluxo." },
      { label: "Saída", text: "Geração de um arquivo TXT estruturado para importação." },
      { label: "Evolução", text: "Espaço reservado para registrar a evolução futura da ferramenta." },
    ],
  },
];

const processSteps = [
  ["01", "PROBLEMA", "Identifico algo que pode ser melhorado."],
  ["02", "IDEIA", "Penso em uma solução."],
  ["03", "DESENVOLVIMENTO", "Construo e testo."],
  ["04", "USO REAL", "Coloco a solução em prática."],
  ["05", "EVOLUÇÃO", "Continuo melhorando com base na experiência."],
];

function MMark({ size = "text-[11rem]", className = "" }: { size?: string; className?: string }) {
  return <span aria-label="M — assinatura pessoal" className={`majin-mark ${size} ${className}`}>M</span>;
}

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mb-14 grid gap-6 lg:grid-cols-[.7fr_1.8fr_1fr] lg:items-end">
      <div className="font-mono text-xs text-white/35">{index} / 06</div>
      <div>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2 className="font-display text-4xl font-medium tracking-[-.06em] text-white sm:text-6xl">{title}</h2>
      </div>
      {copy && <p className="max-w-xs text-sm leading-7 text-white/50 lg:justify-self-end">{copy}</p>}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const Icon = project.icon;
  return (
    <div className={`scanline relative mb-7 min-h-[210px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent === "blue" ? "from-blue-500/15 via-transparent to-indigo-500/5" : project.accent === "pink" ? "from-fuchsia-500/15 via-transparent to-violet-500/5" : "from-violet-500/15 via-transparent to-blue-500/5"}`}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(90deg, rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.09) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.22em] text-white/35"><Circle className="h-2 w-2 fill-fuchsia-300 text-fuchsia-300" /> system / preview</div>
      <div className="absolute inset-0 grid place-items-center">
        {project.id === "nasajon" ? (
          <div className="flex items-center gap-2 font-mono text-xs text-white/80 sm:gap-4 sm:text-sm">
            {["EXCEL", "MAP", "PROC", "TXT"].map((item, index) => <span key={item} className="flex items-center gap-2"><span className="rounded border border-white/20 bg-black/25 px-2 py-1">{item}</span>{index < 3 && <MoveRight className="h-3 w-3 text-fuchsia-300" />}</span>)}
          </div>
        ) : (
          <div className="relative grid h-28 w-44 place-items-center rounded-lg border border-white/15 bg-black/25 shadow-2xl backdrop-blur-sm"><Icon className="h-9 w-9 text-white/80" strokeWidth={1.1} /><span className="absolute bottom-3 font-mono text-[9px] tracking-[.24em] text-white/35">BUILD / ITERATE</span></div>
        )}
      </div>
      <div className="absolute bottom-4 right-5 font-mono text-[10px] text-white/30">{project.number}.0</div>
    </div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1150);
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onMove = (event: MouseEvent) => setMouse({ x: (event.clientX / window.innerWidth - .5) * 2, y: (event.clientY / window.innerHeight - .5) * 2 });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener("scroll", onScroll); window.removeEventListener("mousemove", onMove); };
  }, []);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [loading]);

  const go = (id: string) => { setMobileOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const placeholder = (label: string) => toast(`${label} — adicione seu link quando estiver pronto.`, { description: "O botão já está preparado como placeholder editável." });

  if (loading) return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#070707] text-white">
      <div className="text-center">
        <MMark size="text-[8rem]" />
        <div className="mx-auto mt-10 w-40 text-left font-mono text-[10px] uppercase tracking-[.3em] text-white/40">Initializing<span className="text-fuchsia-300">...</span></div>
        <div className="mt-3 h-px w-40 overflow-hidden bg-white/10"><div className="h-full w-full origin-left animate-pulse-line bg-fuchsia-300" /></div>
        <button onClick={() => setLoading(false)} className="mt-12 font-mono text-[10px] uppercase tracking-[.18em] text-white/30 transition hover:text-white">skip intro ↗</button>
      </div>
    </div>
  );

  return (
    <div className="site-shell min-h-screen bg-[#080808] text-white">
      <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#080808]/80 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="container flex h-20 items-center justify-between">
          <button onClick={() => go("top")} className="group flex items-center gap-3 text-left" aria-label="Voltar ao topo">
            <span className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/[.04] transition group-hover:border-fuchsia-300/60"><span className="font-display text-2xl font-bold leading-none text-fuchsia-200">M</span></span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[.2em] text-white/70 sm:block">Jonathan Silva</span>
          </button>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {["sobre", "projetos", "experiencia", "contato"].map((item) => <button key={item} onClick={() => go(item)} className="nav-link font-mono text-[10px] uppercase tracking-[.2em]">{item}</button>)}
          </nav>
          <button onClick={() => setMobileOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded border border-white/15 text-white md:hidden" aria-label="Abrir menu">{mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
        {mobileOpen && <div className="border-t border-white/10 bg-[#080808]/95 px-4 py-5 backdrop-blur-xl md:hidden"><div className="container grid gap-5">{["sobre", "projetos", "experiencia", "contato"].map((item) => <button key={item} onClick={() => go(item)} className="text-left font-mono text-xs uppercase tracking-[.2em] text-white/70">{item}</button>)}</div></div>}
      </header>

      <main ref={contentRef}>
        <section id="top" className="relative flex min-h-[780px] items-end overflow-hidden pb-16 pt-36 sm:min-h-screen sm:pb-24">
          <img src="/manus-storage/jonathan-hero-texture_ea3a9e95.png" alt="Textura abstrata escura com linhas técnicas" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 mix-blend-screen" />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_35%,rgba(137,73,255,.16),transparent_28%),linear-gradient(90deg,#080808_0%,rgba(8,8,8,.86)_45%,rgba(8,8,8,.36)_100%)]" />
          <div className="hero-orbit animate-orbit -right-[24%] top-[10%] hidden opacity-50 lg:block" style={{ transform: `translate(${mouse.x * -12}px, ${mouse.y * -8}px) rotate(-18deg)` }} />
          <div className="absolute right-[16%] top-[20%] hidden font-mono text-[10px] uppercase tracking-[.26em] text-white/25 lg:block">signature / 01</div>
          <div className="container relative z-10 grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-fuchsia-200/80"><span className="h-px w-10 bg-fuchsia-300" /> technology / automation / dp</div>
              <h1 className="font-display text-[clamp(3.9rem,9vw,8.6rem)] font-medium leading-[.84] tracking-[-.095em] text-white">Jonathan<br /><span className="text-gradient">Silva<span className="text-fuchsia-300">.</span></span></h1>
              <p className="mt-10 max-w-xl font-display text-xl leading-tight tracking-[-.035em] text-white/75 sm:text-2xl">Transformando problemas reais<br className="hidden sm:block" /> em soluções digitais.</p>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/45">Projetos, automações e sistemas criados a partir de problemas reais do dia a dia.</p>
              <div className="mt-10 flex flex-wrap items-center gap-4"><button onClick={() => go("projetos")} className="group inline-flex items-center gap-4 rounded-full bg-white px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-black transition hover:bg-fuchsia-200 active:scale-[.97]">Explorar projetos <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></button><button onClick={() => go("sobre")} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-mono text-[10px] uppercase tracking-[.16em] text-white/70 transition hover:border-white/60 hover:text-white active:scale-[.97]">Sobre mim <ChevronRight className="h-3 w-3" /></button></div>
            </div>
            <div className="relative hidden min-h-[310px] lg:block"><div className="absolute bottom-0 right-0 text-right"><p className="font-mono text-[10px] uppercase tracking-[.24em] text-white/35">identity marker</p><MMark size="text-[20rem]" className="mt-7" /><p className="font-mono text-[10px] uppercase tracking-[.22em] text-fuchsia-200/70">personal signature / M</p></div></div>
          </div>
          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/30 sm:flex">scroll to explore <ArrowDown className="h-3 w-3 animate-bounce" /></div>
        </section>

        <section id="sobre" className="container py-28 sm:py-40">
          <div className="reveal"><SectionHeading index="01" eyebrow="About / Sobre mim" title="A interseção é o meu ponto de partida." copy="Tecnologia e rotina real se encontram na forma como penso e construo." /></div>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-24">
            <div className="reveal max-w-xl text-lg leading-8 text-white/65 sm:text-xl">Minha trajetória passa por tecnologia, suporte, Departamento Pessoal e desenvolvimento de soluções digitais.<br /><br />Com o tempo, comecei a perceber que muitos problemas do dia a dia poderiam ser transformados em ferramentas simples e automatizadas.<br /><br /><span className="text-white">Foi daí que começaram a surgir meus próprios projetos.</span></div>
            <div className="reveal space-y-0" style={{ transitionDelay: "120ms" }}>{[["01", "TECNOLOGIA"], ["02", "SUPORTE"], ["03", "DEPARTAMENTO PESSOAL"], ["04", "AUTOMAÇÃO"], ["05", "PROJETOS PRÓPRIOS"]].map(([num, label], index) => <div key={label} className="group flex items-center gap-5 border-t border-white/10 py-5"><span className="font-mono text-xs text-fuchsia-200/65">{num}</span><span className="font-display text-2xl tracking-[-.04em] text-white/70 transition group-hover:translate-x-2 group-hover:text-white sm:text-3xl">{label}</span><span className="ml-auto h-px w-7 bg-white/15 transition group-hover:w-14 group-hover:bg-fuchsia-300" /></div>)}</div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 py-28 sm:py-44"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(116,64,202,.16),transparent_33%)]" /><div className="container"><div className="reveal mx-auto max-w-5xl text-center"><p className="eyebrow mb-8 justify-center">a working principle</p><h2 className="font-display text-5xl font-medium leading-[.95] tracking-[-.08em] text-white sm:text-8xl">Eu gosto de transformar<br /><span className="text-gradient">problemas em sistemas.</span></h2><div className="mx-auto mt-12 h-px w-28 bg-fuchsia-300/70" /></div></div></section>

        <section id="projetos" className="container py-28 sm:py-40">
          <div className="reveal"><SectionHeading index="02" eyebrow="Selected projects" title="Projetos que estou construindo." copy="Cada sistema nasce de uma necessidade concreta — e cresce com o uso." /></div>
          <div className="grid gap-5 lg:grid-cols-12">
            {projects.map((project, index) => <article key={project.id} className={`project-card reveal glass rounded-2xl p-5 sm:p-7 ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5 lg:mt-20" : "lg:col-span-8 lg:col-start-3"}`} style={{ transitionDelay: `${index * 80}ms` }}><div className="mb-6 flex items-center justify-between"><span className="font-mono text-xs text-fuchsia-200/70">{project.number} / 03</span><span className="font-mono text-[9px] uppercase tracking-[.18em] text-white/35">{project.category}</span></div><ProjectVisual project={project} /><div className="flex items-end justify-between gap-5"><div><h3 className="font-display text-3xl font-medium tracking-[-.07em] text-white sm:text-4xl">{project.name}</h3><p className="mt-4 max-w-lg text-sm leading-6 text-white/50">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[.12em] text-white/45">{tag}</span>)}</div></div><button onClick={() => setActiveProject(project)} className="group grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 transition hover:border-fuchsia-300 hover:bg-fuchsia-300 hover:text-black" aria-label={`Abrir detalhes de ${project.name}`}><ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div></article>)}
          </div>
        </section>

        <section id="processo" className="bg-white/[.025] py-28 sm:py-36"><div className="container"><div className="reveal"><SectionHeading index="03" eyebrow="From problem to solution" title="Um fluxo simples. Uma construção contínua." copy="Da observação ao uso real, cada etapa deixa um sinal para a próxima." /></div><div className="grid gap-0 md:grid-cols-5">{processSteps.map(([num, label, text], index) => <div key={num} className="flow-line reveal py-4 md:px-5 md:py-0" style={{ transitionDelay: `${index * 70}ms` }}><div className="mb-5 grid h-8 w-8 place-items-center rounded-full border border-fuchsia-300/50 bg-[#111] font-mono text-[10px] text-fuchsia-200">{num}</div><h3 className="font-display text-lg tracking-[-.04em] text-white">{label}</h3><p className="mt-3 max-w-[170px] text-xs leading-5 text-white/40">{text}</p></div>)}</div></div></section>

        <section className="container py-28 sm:py-40"><div className="reveal"><SectionHeading index="04" eyebrow="Technology × DP" title="Duas áreas. Um ponto de encontro." copy="É justamente dessa combinação que meus projetos surgem." /></div><div className="relative grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center"><div className="glass reveal rounded-2xl p-7 sm:p-10"><Binary className="mb-9 h-7 w-7 text-fuchsia-200" strokeWidth={1.2} /><p className="eyebrow mb-5">Technology</p><h3 className="font-display text-3xl tracking-[-.06em] text-white">Construir o que<br />faz sentido.</h3><div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/45"><span>sistemas</span><span>automação</span><span>dados</span><span>interfaces</span><span>soluções digitais</span></div></div><div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full border border-fuchsia-300/50 bg-[#0b0b0b] shadow-[0_0_70px_rgba(205,117,255,.18)]"><MMark size="text-5xl" /></div><div className="glass reveal rounded-2xl p-7 sm:p-10" style={{ transitionDelay: "120ms" }}><Activity className="mb-9 h-7 w-7 text-fuchsia-200" strokeWidth={1.2} /><p className="eyebrow mb-5">Departamento Pessoal</p><h3 className="font-display text-3xl tracking-[-.06em] text-white">Entender a rotina<br />antes do código.</h3><div className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/45"><span>folha</span><span>INSS</span><span>IRRF</span><span>férias</span><span>13º</span><span>rotinas trabalhistas</span></div></div></div></section>

        <section id="experiencia" className="border-y border-white/10 py-28 sm:py-36"><div className="container"><div className="reveal"><SectionHeading index="05" eyebrow="Experience / Trajetória" title="A história continua sendo escrita." copy="Estrutura preparada para receber empresa, cargo, período e responsabilidades." /></div><div className="reveal glass rounded-2xl p-6 sm:p-10"><div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/40">timeline / professional path</span><span className="rounded-full border border-fuchsia-300/30 px-3 py-1 font-mono text-[9px] uppercase tracking-[.15em] text-fuchsia-200/70">editable</span></div><div className="grid gap-8 md:grid-cols-[120px_1fr_1fr] md:items-start"><div className="font-display text-5xl tracking-[-.08em] text-white/20">01</div><div><h3 className="font-display text-2xl text-white/75">Experiência profissional</h3><p className="mt-3 text-sm leading-6 text-white/45">Adicione aqui empresa, cargo e período.</p></div><div className="flex items-center gap-3 text-xs text-white/35"><Plus className="h-4 w-4 text-fuchsia-200" /> Campo reservado para sua próxima atualização</div></div></div></div></section>

        <section id="why-m" className="relative overflow-hidden py-28 sm:py-44"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(220,95,255,.14),transparent_25%)]" /><div className="container text-center"><div className="reveal"><p className="eyebrow mb-8 justify-center">why m?</p><MMark size="text-[14rem] sm:text-[22rem]" className="opacity-90" /><p className="mx-auto mt-10 max-w-md text-lg leading-8 text-white/55">Alguns símbolos não precisam ser explicados para todo mundo.<br /><span className="text-white/80">Alguns simplesmente fazem parte da nossa história.</span></p><p className="mx-auto mt-10 max-w-sm font-mono text-[10px] uppercase tracking-[.2em] text-white/25">a história deste símbolo ainda será contada</p></div></div></section>

        <section id="contato" className="border-t border-white/10 py-28 sm:py-40"><div className="container"><div className="grid gap-14 lg:grid-cols-[1.2fr_.8fr] lg:items-end"><div className="reveal"><p className="eyebrow mb-7">06 / contact</p><h2 className="font-display text-6xl font-medium leading-[.9] tracking-[-.09em] text-white sm:text-8xl">Let's build<br /><span className="text-gradient">something.</span></h2><p className="mt-8 max-w-md text-base leading-7 text-white/50">Quer conhecer meus projetos, trocar uma ideia ou conversar sobre tecnologia, automação ou Departamento Pessoal?</p></div><div className="reveal grid gap-3" style={{ transitionDelay: "120ms" }}><button onClick={() => placeholder("LinkedIn")} className="group flex items-center justify-between border-b border-white/15 py-4 text-left transition hover:border-fuchsia-300"><span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[.16em] text-white/65"><Linkedin className="h-4 w-4 text-fuchsia-200" /> LinkedIn</span><ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></button><button onClick={() => placeholder("GitHub")} className="group flex items-center justify-between border-b border-white/15 py-4 text-left transition hover:border-fuchsia-300"><span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[.16em] text-white/65"><Github className="h-4 w-4 text-fuchsia-200" /> GitHub</span><ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></button><button onClick={() => placeholder("E-mail")} className="group flex items-center justify-between border-b border-white/15 py-4 text-left transition hover:border-fuchsia-300"><span className="flex items-center gap-3 font-mono text-xs uppercase tracking-[.16em] text-white/65"><Mail className="h-4 w-4 text-fuchsia-200" /> E-mail</span><ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" /></button></div></div></div></section>
      </main>

      <footer className="border-t border-white/10 py-8"><div className="container flex flex-col gap-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-3"><span className="font-display text-lg font-bold text-fuchsia-200">M</span><span>Jonathan Silva</span></div><span className="font-mono text-[9px] uppercase tracking-[.18em]">Technology · Automation · Department Personnel</span><span className="font-mono text-[9px] uppercase tracking-[.14em]">Built by Jonathan Silva.</span></div></footer>

      {activeProject && <div className="modal-backdrop fixed inset-0 z-50 overflow-y-auto bg-black/75 p-4 backdrop-blur-md sm:p-8" role="dialog" aria-modal="true" aria-label={`Detalhes do projeto ${activeProject.name}`} onClick={() => setActiveProject(null)}><div className="modal-panel glass mx-auto my-8 max-w-3xl rounded-2xl p-6 sm:my-14 sm:p-10" onClick={(event) => event.stopPropagation()}><div className="mb-12 flex items-start justify-between gap-6"><div><p className="eyebrow mb-4">project file / {activeProject.number}</p><h2 className="font-display text-4xl tracking-[-.07em] text-white sm:text-6xl">{activeProject.name}</h2><p className="mt-3 font-mono text-[10px] uppercase tracking-[.17em] text-fuchsia-200/70">{activeProject.category}</p></div><button onClick={() => setActiveProject(null)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-white/60 hover:text-white" aria-label="Fechar detalhes"><X className="h-4 w-4" /></button></div><div className="grid gap-0">{activeProject.details.map((detail, index) => <div key={detail.label} className="grid gap-3 border-t border-white/10 py-5 sm:grid-cols-[150px_1fr]"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-fuchsia-200/65">{String(index + 1).padStart(2, "0")} / {detail.label}</span><p className="text-sm leading-7 text-white/60">{detail.text}</p></div>)}</div><div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-white/30"><ScanLine className="h-4 w-4 text-fuchsia-200/70" /> Mais detalhes e imagens serão adicionados conforme o projeto evoluir.</div></div></div>}
    </div>
  );
}

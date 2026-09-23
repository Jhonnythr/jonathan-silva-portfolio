# Jonathan Silva — Digital Systems Portfolio

<p align="center">
  <strong>Transformando problemas reais em soluções digitais.</strong>
</p>

<p align="center">
  Tecnologia · Automação · Departamento Pessoal
</p>

<p align="center">
  <a href="https://jonportfolio-rufjdbyy.manus.space">Ver o site</a> ·
  <a href="https://github.com/Jhonnythr">GitHub</a> ·
  <a href="https://www.linkedin.com/in/jonathan-silva-b87b47183/">LinkedIn</a>
</p>

![Preview do portfólio de Jonathan Silva](https://jonportfolio-rufjdbyy.manus.space/manus-storage/jonathan-hero-texture_ea3a9e95.png)

## Sobre o projeto

Este repositório contém o portfólio pessoal de **Jonathan Silva**, uma landing page criada para apresentar uma identidade digital — e não apenas um currículo online.

A experiência combina uma direção visual escura e tecnológica com uma narrativa baseada em um princípio simples: muitos sistemas começam quando alguém observa um problema real e decide construir uma solução melhor.

O site conecta três áreas que fazem parte dessa trajetória:

- tecnologia;
- automação;
- Departamento Pessoal.

O símbolo **M**, inspirado na assinatura visual do Majin, aparece como um elemento recorrente da identidade do projeto.

## Projetos apresentados

### Elevare

Plataforma de gestão para clínicas de estética. A proposta reúne agenda, profissionais, serviços, clientes, produtos e financeiro em um único sistema.

### CalculaDP

Plataforma web voltada para automação e simplificação de cálculos de Departamento Pessoal. Atualmente, conta com módulos de **Folha**, **Bruto → Líquido**, **Líquido → Bruto**, **Pró-labore**, **Férias** e **Custo da Empresa**.

O módulo de **13º Salário** está em desenvolvimento, com novos recursos planejados para as próximas etapas.

### Automação Nasajon

Ferramenta criada para transformar informações de planilhas em arquivos TXT estruturados para importação no sistema Nasajon.

O fluxo visual do projeto é:

```text
EXCEL → MAPEAMENTO → PROCESSAMENTO → TXT
```

## Destaques da experiência

- Hero com mensagem de posicionamento pessoal;
- símbolo M aplicado como assinatura visual;
- loading inicial com possibilidade de pular a introdução;
- navegação responsiva para desktop e mobile;
- microinterações e animações suaves;
- cards assimétricos para os projetos;
- modais com detalhes individuais de cada projeto;
- seção visual sobre o processo de transformar problemas em sistemas;
- seção de experiência preparada para receber novos dados;
- contatos reais de GitHub, LinkedIn e e-mail;
- respeito à preferência do usuário por redução de movimento.

## Stack

- **React** para a construção da interface;
- **TypeScript** para tipagem e manutenção do código;
- **Vite** para desenvolvimento e build;
- **Tailwind CSS** para composição visual;
- **Lucide React** para os ícones;
- **Wouter** para o roteamento client-side;
- **CSS customizado** para identidade visual, textura, grid e animações.

## Como executar localmente

### Pré-requisitos

Você precisa ter o **Node.js** e o **pnpm** instalados.

### Instalação

```bash
git clone https://github.com/Jhonnythr/jonathan-silva-portfolio.git
cd jonathan-silva-portfolio
pnpm install
```

### Servidor de desenvolvimento

```bash
pnpm dev
```

Depois, abra o endereço indicado pelo Vite no navegador.

### Verificação de tipos

```bash
pnpm check
```

### Build de produção

```bash
pnpm build
```

## Estrutura principal

```text
client/
├── public/          # Arquivos públicos pequenos
└── src/
    ├── components/  # Componentes reutilizáveis
    ├── contexts/    # Contextos da aplicação
    ├── lib/         # Utilitários
    ├── pages/       # Páginas da aplicação
    ├── App.tsx      # Rotas e layout principal
    └── index.css    # Tokens, tema e identidade visual
```

## Próximas evoluções

- adicionar mais imagens e telas reais dos projetos;
- ampliar a galeria de detalhes do CalculaDP;
- preencher a trajetória profissional;
- documentar a história pessoal do símbolo M;
- adicionar novos módulos e atualizações do CalculaDP conforme forem desenvolvidos.

## Contato

- **GitHub:** [Jhonnythr](https://github.com/Jhonnythr)
- **LinkedIn:** [Jonathan Silva](https://www.linkedin.com/in/jonathan-silva-b87b47183/)
- **E-mail:** [jonathanasilva@outlook.com.br](mailto:jonathanasilva@outlook.com.br)

## Referências

[1]: https://react.dev/ "Documentação oficial do React"
[2]: https://www.typescriptlang.org/docs/ "Documentação oficial do TypeScript"
[3]: https://vite.dev/guide/ "Guia oficial do Vite"
[4]: https://tailwindcss.com/docs "Documentação oficial do Tailwind CSS"
[5]: https://lucide.dev/guide/packages/lucide-react "Lucide React"

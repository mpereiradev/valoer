# DESIGN-TOKENS — Valoer Open Banking
Versão: 1.0 · Derivado da análise de logo + referências + intake (Seção 3/4 da constituição DevMove)

> **Racional de marca (não apagar).** Valoer = *valor* + o símbolo de um avião/seta de papel
> ascendente com linhas de velocidade. A marca precisa comunicar **agilidade, acessibilidade,
> rapidez, confiança e tecnologia** — uma fintech que quebra o modelo burocrático e caro de
> contratar consórcio/seguro e coloca o cliente para **comparar opções** e **simular** em minutos.
> A âncora visual é o **azul-marinho institucional do logo** (confiança) + um **ciano elétrico**
> (impulso/tecnologia/movimento). As referências (Bradesco, Sicredi, Ademicon, Embracon) foram
> usadas pela **estrutura e território emocional**, NUNCA pela cor — verde (Sicredi/Unimed),
> vermelho/magenta (Bradesco) e laranja (Ademicon) são deliberadamente evitados para diferenciar.

---

## 1. COR

Paleta derivada do logo (marinho + branco) com um único acento funcional (ciano "Impulso").
Cada cor tem propósito declarado. Sem gradientes decorativos roxo→azul (regra anti-genérico).

### Marca / superfícies escuras — "Marinho"
| Token | HEX | Uso |
|---|---|---|
| `--navy-900` | `#0C1D35` | Fundo escuro mais profundo (footer, seções full-dark) |
| `--navy-800` | `#122A4A` | **Cor institucional base** (fundo do logo, seções de marca) |
| `--navy-700` | `#1B3A63` | Cartões/superfícies elevadas sobre navy, bordas escuras |
| `--navy-600` | `#274C7D` | Hover de superfícies escuras, estados |

### Acento funcional — "Impulso" (ciano elétrico = tecnologia + velocidade)
| Token | HEX | Uso |
|---|---|---|
| `--impulse-400` | `#7FD3F5` | Detalhes claros, ícones sobre navy, foco/realce suave |
| `--impulse-500` | `#2BB7F0` | **Acento primário**: links, estado ativo, slider do simulador, traços de ícone, CTA sobre fundo escuro |
| `--impulse-600` | `#1AA0D8` | Hover do acento |

> ⚠️ **Contraste**: `--impulse-500` é claro. **Nunca** use texto branco sobre ciano.
> Botão ciano usa **texto navy (`--ink`)** (contraste ≈ 7:1, AA ok). Ciano como *texto*
> só em fundo navy/escuro e em tamanho ≥ 18px/bold.

### Neutros
| Token | HEX | Uso |
|---|---|---|
| `--ink` | `#0F1D33` | Texto principal sobre claro (quase-navy, não preto puro) |
| `--slate` | `#5A6B82` | Texto secundário/legendas (AA em ≥14px, ≈5.2:1 sobre branco) |
| `--cloud` | `#F4F7FB` | Superfície clara padrão (seções alternadas, cartões) |
| `--white` | `#FFFFFF` | Fundo base, texto sobre navy |
| `--line` | `#E2E8F1` | Bordas, divisores, contorno de inputs |

### Semânticas (feedback, não decoração)
| Token | HEX | Uso |
|---|---|---|
| `--success` | `#1FA97B` | Confirmação de simulação/contratação |
| `--warning` | `#E0A030` | Avisos, prazos |
| `--error` | `#D64550` | Erros de formulário, validação |

### Regras de uso de cor
- **Ação primária (CTA "Simular")**: fundo claro → botão **navy** (`--navy-800`) texto branco;
  fundo navy → botão **ciano** (`--impulse-500`) texto `--ink`.
- Ciano é **acento**, não plano de fundo de página inteira. Use com parcimônia (energia/foco).
- Máximo de superfícies por seção: 1 fundo (navy OU cloud OU white) + neutros + 1 acento.
- Proibido: verde, vermelho e laranja como cores de marca (colisão com concorrentes).

---

## 2. TIPOGRAFIA

Pareamento deliberado (não usar Inter/Poppins/Manrope/Space Grotesk/Plus Jakarta).
O wordmark do logo é uma sans **geométrica e larga** — a display ecoa essa largura/geometria.

| Papel | Fonte | Motivo |
|---|---|---|
| **Display / títulos** | **Clash Display** (Fontshare, auto-hospedada) | Grotesca geométrica com caráter próprio; ecoa a geometria moderna do logo. H1 com `letter-spacing` levemente aberto (+0.5–1px) para citar a largura do wordmark. |
| **Texto / UI** | **Hanken Grotesk** (auto-hospedada) | Humanista, altamente legível em corpo pequeno → "acessível"; contrapeso caloroso à display. |
| **Numérico (opcional)** | Hanken Grotesk `tabular-nums` | Valores de simulação (R$) alinhados. |

> Carregar via `next/font` (self-host), pesos: Clash Display 500/600/700; Hanken Grotesk 400/500/600/700.

### Escala tipográfica — modular, razão 1.250 (major third), base 16px
| Token | rem | ~px | Uso |
|---|---|---|---|
| `--fs-xs` | 0.80 | 13 | Legendas, labels, eyebrow |
| `--fs-sm` | 0.90 | 14 | Texto de apoio, notas |
| `--fs-base` | 1.00 | 16 | Corpo padrão |
| `--fs-lg` | 1.25 | 20 | Subtítulo, lead |
| `--fs-xl` | 1.563 | 25 | H4 |
| `--fs-2xl` | 1.953 | 31 | H3 |
| `--fs-3xl` | 2.441 | 39 | H2 |
| `--fs-4xl` | 3.052 | 49 | H1 (mobile/interno) |
| `--fs-5xl` | 3.815 | 61 | Hero display (desktop) |

- **Line-height**: títulos 1.05–1.15; corpo 1.55; legendas 1.4.
- **Peso**: display 600–700; corpo 400; ênfase 600.
- **Medida de leitura**: 60–72 caracteres por linha máx.

---

## 3. ESPAÇAMENTO E GRID

### Escala de espaçamento — base 8px (com 4px para ajuste fino)
`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` ·
`--space-6: 24px` · `--space-8: 32px` · `--space-12: 48px` · `--space-16: 64px` ·
`--space-24: 96px` · `--space-32: 128px`

- Padding vertical de seção: `--space-24` (96px) desktop / `--space-16` (64px) mobile.
- Gutter de grid: `--space-6` (24px).

### Grid
- **12 colunas**, container `max-width: 1200px`, margem lateral mínima 24px (mobile) / 32px (desktop).
- **Hero deliberadamente assimétrico**: texto+CTA à esquerda (~5–6 col) / **simulador interativo**
  à direita (~6 col) — ecoa o padrão de conversão das referências.
- Breakpoints: `sm 640` · `md 768` · `lg 1024` · `xl 1280`.

---

## 4. RAIO DE CANTO — filosofia única: "suave controlado"

Uma só filosofia aplicada consistentemente (regra da constituição). Evita o "tudo arredondado" genérico.
| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 6px | Inputs, tags pequenas, chips |
| `--radius-md` | 10px | **Padrão**: botões, cartões, campos, contêineres |
| `--radius-lg` | 16px | Cartões grandes, painel do simulador |
| `--radius-pill` | 999px | **Somente** pills/badges de status |
| `--radius-none` | 0 | Faixas full-bleed / divisores |

Regra: default = `--radius-md`. Nada de misturar raios aleatórios no mesmo componente.

---

## 5. ELEVAÇÃO / SOMBRA

Sombra é sutil e funcional (sem "glassmorphism por padrão"). Base em navy translúcido, não preto.
| Token | Valor | Uso |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(12,29,53,.06)` | Inputs, hover leve |
| `--shadow-md` | `0 8px 24px rgba(12,29,53,.10)` | Cartões, painel do simulador |
| `--shadow-lg` | `0 20px 48px rgba(12,29,53,.14)` | Elementos flutuantes (dropdown, modal) |

Borda `1px solid var(--line)` é preferível à sombra para hierarquia estática.

---

## 6. MOTION — 3 princípios

1. **Direcional ascendente (assinatura da marca).** Reveals ao scroll sobem: `translateY(16px)→0` + fade.
   Cita o movimento do avião/seta do logo ("impulso"). Duração 500ms, `ease-out`.
2. **Feedback, não decoração.** Transições de estado (hover, foco, toggle, slider) = 180–200ms,
   `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out). Sem animação puramente ornamental.
3. **Respeito a `prefers-reduced-motion`.** Desliga translações/parallax; mantém apenas fades curtos.

Tokens: `--motion-fast: 180ms` · `--motion-base: 300ms` · `--motion-slow: 500ms` ·
`--ease-out: cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 7. ACESSIBILIDADE (WCAG AA — não negociável)
- Pares de contraste validados: `--ink`/white (~15:1), white/`--navy-800` (~14:1),
  `--slate`/white (~5.2:1, corpo ≥14px), `--ink`/`--impulse-500` (~7:1, texto em botão ciano).
- **Nunca** texto branco sobre `--impulse-500`.
- Foco visível: outline 2px `--impulse-500` + offset 2px em todos os interativos.
- HTML semântico, navegação por teclado, `alt` em imagens, labels em todos os campos do simulador.

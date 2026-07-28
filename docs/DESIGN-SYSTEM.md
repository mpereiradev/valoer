# DESIGN-SYSTEM — Valoer Open Banking
Versão: 1.0 · Guia de componentes (intenção e regras, não código final). Lê junto com `DESIGN-TOKENS.md`.

> Objetivo do produto: fintech de soluções financeiras (consórcio + seguro no início) que faz o
> visitante **comparar opções e SIMULAR** sem burocracia. Cada tela empurra para o simulador.
> Tom: ágil, acessível, rápido, confiável, tecnológico. Marinho + ciano "Impulso", sem clichê de fintech.

---

## PRINCÍPIOS DE COMPOSIÇÃO
- **Um momento ownable por página, no mínimo.** Na home é o **simulador com slider de valor**
  como herói co-protagonista (não escondido abaixo da dobra) — assinatura da Valoer.
- **Movimento diagonal/ascendente** derivado do logo: usar linhas/setas diagonais sutis, reveals
  que sobem. Nunca "blob" com glow no centro.
- **Densidade honesta**: fundo claro (`--cloud`/white) para leitura + seções navy pontuais para
  peso institucional e contraste do CTA ciano.
- Proibido (anti-genérico): hero centralizado com 2 botões pill + blob; grid de 3 ícones-em-card
  genérico; sombra mole em tudo; gradiente roxo→azul.

---

## HEADER / NAV
- Fundo transparente sobre hero navy → vira `--navy-800` sólido com `--shadow-sm` ao rolar.
- Logo à esquerda (versão branca sobre navy). Nav central/à direita: **Consórcios · Seguros ·
  Como funciona · Sobre**. Item ativo com underline `--impulse-500` (2px).
- CTA persistente à direita: **"Simular"** (botão ciano `--impulse-500`, texto `--ink`).
- Mobile: menu hambúrguer → drawer navy, CTA "Simular" fixo.

## BOTÕES
Raio `--radius-md` (10px) em todos. Altura mín. 48px (toque). Peso 600. Transição 180ms `--ease-out`.
| Variante | Fundo claro | Fundo navy |
|---|---|---|
| **Primário** (Simular) | fill `--navy-800`, texto branco | fill `--impulse-500`, texto `--ink` |
| **Secundário** | contorno 1.5px `--navy-800`, texto navy | contorno `--impulse-400`, texto branco |
| **Texto/link** | texto `--impulse-600` + seta → | texto `--impulse-400` |
- Hover: primário escurece 1 nível (`--navy-700` / `--impulse-600`) + micro `translateY(-1px)`.
- Foco: outline 2px `--impulse-500`, offset 2px. **Sem** texto branco sobre ciano.

## SIMULADOR (componente-assinatura)
Painel elevado `--radius-lg`, `--shadow-md`, fundo white sobre seção navy (contraste institucional).
- Passo 1: **tipo** (Consórcio: Automóvel/Imóvel/Moto/Serviços · Seguro: Vida/Auto/Saúde) via chips
  `--radius-pill` — ativo em `--navy-800`/texto branco.
- Passo 2: **slider de valor** com trilho `--line`, preenchimento e handle em `--impulse-500`;
  valor em Clash Display grande com `tabular-nums` (ex.: `R$ 215.000,00`). Alternar "Valor do
  crédito / Valor da parcela".
- CTA: **"Simular agora"** largura total, botão ciano (`--impulse-500`, texto `--ink`).
- Feedback de resultado em `--success`. Acessível: labels, `aria-valuenow` no slider, teclado.

## CARTÕES (tipos de produto / planos)
- Fundo white, borda `1px --line`, `--radius-md`, padding `--space-6`. Sombra só no hover (`--shadow-md` + `translateY(-2px)`).
- Estrutura: ícone de traço fino (`--impulse-500`/`--navy-700`) → título (H4) → descrição (`--slate`)
  → link "Simular →". **Não** é o feature-grid genérico: cada card leva à simulação daquele produto.
- Grid responsivo 1/2/4 colunas (mobile→desktop).

## SEÇÃO "COMO FUNCIONA" (etapas)
- Etapas numeradas (ex.: 1→4: Simule · Compare · Contrate online · Acompanhe), número grande em
  Clash Display `--impulse-500`. Conector diagonal sutil entre etapas (assinatura de movimento).
- Reveal ascendente escalonado ao scroll (`--motion-slow`, stagger 80ms).

## ÍCONES
- Estilo **linha/stroke** (1.5–2px), cantos levemente arredondados coerentes com `--radius`.
- Cor: `--navy-700` (padrão) ou `--impulse-500` (destaque). Sem emoji, sem sparkles decorativos.

## FORMULÁRIOS / INPUTS
- Altura 48px, `--radius-md`, borda `--line`, foco borda `--impulse-500` + outline. Label sempre visível.
- Máscara de moeda BR (`R$ 0.000,00`) e validação com `--error` + mensagem textual (não só cor).

## SEÇÃO DE CONFIANÇA
- Faixa navy com números/prova (ex.: "+X clientes", "N opções comparadas"), tipografia grande,
  acento ciano nos numerais. Reforça "confiável" sem stock illustration.

## FOOTER
- Fundo `--navy-900`. Logo branco, colunas: Produtos · Institucional · Ajuda · Legal.
- Redes sociais em texto/ícone linha. CNPJ, endereço e avisos regulatórios (setor financeiro).
- Discreto e sóbrio — referência estrutural: footer Sicredi (limpo), sem a cor.

## PADRÕES DE PÁGINA (placeholder — conteúdo real ainda não existe)
Home: Header → Hero assimétrico (copy+CTA / **simulador**) → Tipos de produto (cards) →
Como funciona (etapas) → Por que Valoer (diferencial vs. burocrático/caro) → Faixa de confiança →
FAQ → CTA final "Simular" → Footer.

> Ao produzir qualquer UI, rodar o Self-Audit (Seção 5 da constituição) antes de entregar.

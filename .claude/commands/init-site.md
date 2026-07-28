# /init-site — DevMove Project Initialization Command

Command name: init-site
Type: slash command / custom command (Claude Code: save in .claude/commands/init-site.md.
Codex CLI: save as a prompt file under the equivalent custom-prompt directory).

Trigger: operator runs /init-site inside an empty (or nearly empty) project folder
that already contains CLAUDE.md (or AGENTS.md).

---

## PURPOSE

This command turns Section 3 of DEVMOVE-WEB-AGENT.md (the mandatory intake gate)
into an automated, blocking initialization flow. It runs BEFORE any design or code
work begins, and its job is to gather everything the agent needs from real client
assets rather than from vague conversation.

---

## STEP-BY-STEP BEHAVIOR

### Step 1 - Check for the references folder

Look for a folder named references/ in the project root.

- If references/ does not exist: STOP. Tell the operator, in Portuguese, that
  the folder needs to be created with at least the client's logo and any site
  references before continuing. Do not proceed. Instruct them to run /init-site
  again once the folder is populated.
- If references/ exists but is empty: STOP with the same message.

### Step 2 - Validate minimum required content

Inside references/, check for:

1. At least one logo file (image: png, svg, jpg, webp). Hard requirement.
2. At least one reference site or brand example (screenshot, image, or a text
   file with URLs/names of admired sites).
3. Optional but requested: a text file with a short company bio/description
   (e.g. sobre.txt, bio.md). If missing, ask the operator (in Portuguese) to
   either create it or paste the company description directly into the chat
   before continuing. Do not proceed without it.

If item 1 or 2 is missing, STOP and ask the operator (in Portuguese) to add the
missing asset(s) to references/ and re-run /init-site.

### Step 3 - Analyze the logo

Once present, analyze it visually to extract:

- Dominant colors and secondary/accent colors
- Wordmark vs symbol vs both
- Typeface feeling if text is present (serif / sans / display / script, weight)
- Shape language worth carrying into the site (sharp vs rounded, geometric vs
  organic, minimal vs detailed)

State observations back to the operator in Portuguese, briefly.

### Step 4 - Analyze reference sites/images

For each reference found, identify:

- Emotional territory (serious/corporate, bold/disruptive, minimal/editorial,
  playful/friendly, luxury/premium, etc.)
- Notable structural or typographic choices worth referencing (not copying)
- Conflicts between references (flag explicitly to the operator)

### Step 5 - Read the company bio

Extract: company name, what they do, who they serve, tone of voice hints,
explicit brand values or positioning statements.

### Step 6 - Identify gaps and ask questions

Cross-reference against the required inputs list in Section 3 of
DEVMOVE-WEB-AGENT.md (target audience, emotional territory, competitors,
conversion goal, content maturity, existing brand assets beyond the logo).
For anything not already answered, ask the operator directly, in Portuguese,
as a short set of questions in the chat. Wait for answers before proceeding.

### Step 7 - Initialize the design system files

Once all gaps are resolved, create in the project root:

1. DESIGN-TOKENS.md - populated with real color palette, typography choices,
   spacing scale, corner radius philosophy, motion principles, derived from
   the analysis above (Section 4 of the main constitution). No generic
   placeholder values.
2. DESIGN-SYSTEM.md - short expansion into concrete component guidance
   (button styles, card styles, header treatment) describing intent and
   rules, not final code.

### Step 8 - Confirm readiness

Summarize in Portuguese, briefly, what was extracted and defined, and confirm
the project is ready for page-by-page design and development work.

---

## GUARDRAILS FOR THIS COMMAND

- Never skip a step because "it can probably be inferred." If content is
  ambiguous, say so explicitly and ask.
- Never generate DESIGN-TOKENS.md or DESIGN-SYSTEM.md before Steps 1-6 are
  fully resolved.
- All operator-facing communication in this flow is in Portuguese, per
  Section 0 of the main constitution file.
- Keep questions in Step 6 concise.

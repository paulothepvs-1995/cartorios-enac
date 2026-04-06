export const PLAN = {
  startDate: "2026-03-30",
  examDate: "2026-11-22",
  totalWeeks: 34,
  weeklyTarget: 30,
  phases: [
    { id: 1, name: "Fundação", weeks: [1, 10] as [number, number], color: "#2563eb", description: "Base sólida em Notarial e Civil. 1ª passada completa." },
    { id: 2, name: "Expansão", weeks: [11, 20] as [number, number], color: "#7c3aed", description: "2ª passada + disciplinas secundárias. Questões massivas." },
    { id: 3, name: "Consolidação", weeks: [21, 26] as [number, number], color: "#db2777", description: "3ª passada dirigida. Simulados semanais." },
    { id: 4, name: "Revisão Final", weeks: [27, 34] as [number, number], color: "#dc2626", description: "Apenas revisão, flashcards e simulados." },
  ],
  disciplines: [
    { id: "notarial", name: "Notarial e Registral", questions: 60, pct: 50, targetHours: 450, color: "#2563eb", method: "Estudo regular + lei seca", nucleus: "A" },
    { id: "civil", name: "Direito Civil", questions: 14, pct: 20, targetHours: 180, color: "#059669", method: "Direto ao ponto + lei seca + jurisp.", nucleus: "A" },
    { id: "constitucional", name: "Constitucional", questions: 9, pct: 10, targetHours: 90, color: "#d97706", method: "Direto ao ponto + jurisp. + súmulas", nucleus: "B" },
    { id: "empresarial", name: "Empresarial", questions: 4, pct: 5, targetHours: 45, color: "#7c3aed", method: "Lei seca + questões", nucleus: "C" },
    { id: "tributario", name: "Tributário", questions: 4, pct: 5, targetHours: 45, color: "#be185d", method: "Lei seca (ITBI/ITCMD/emolumentos)", nucleus: "C" },
    { id: "administrativo", name: "Administrativo", questions: 4, pct: 5, targetHours: 45, color: "#9333ea", method: "Teoria + jurisp.", nucleus: "C" },
    { id: "proc_civil", name: "Processual Civil", questions: 2, pct: 3, targetHours: 27, color: "#64748b", method: "Lei seca", nucleus: "C" },
    { id: "outros", name: "Penal/PP/CG", questions: 3, pct: 2, targetHours: 18, color: "#94a3b8", method: "Lei seca mínima", nucleus: "D" },
  ],
  milestones: [
    { date: "2026-04-30", label: "Lei 8.935/94 + CC Parte Geral concluídos", phase: 1 },
    { date: "2026-05-31", label: "Lei 6.015/73 — 1ª leitura + 200 questões", phase: 1 },
    { date: "2026-06-14", label: "Simulado diagnóstico (prova ENAC 3)", phase: 1 },
    { date: "2026-06-30", label: "Fim Fase 1: 300 questões", phase: 1 },
    { date: "2026-08-15", label: "Disciplinas C iniciadas + 600 questões", phase: 2 },
    { date: "2026-09-30", label: "Fim Fase 2: 800 questões", phase: 2 },
    { date: "2026-10-31", label: "Fim Fase 3: simulados 55+ consistentes", phase: 3 },
    { date: "2026-11-22", label: "PROVA ENAC 4", phase: 4 },
  ],
  legislation: [
    // Prioridade 1 — Leitura integral obrigatória (2+ vezes)
    { id: "l1", name: "Lei 6.015/73 (Registros Públicos)", priority: 1, reads: 2, cycle: "" },
    { id: "l2", name: "Lei 8.935/94 (Notários e Registradores)", priority: 1, reads: 2, cycle: "" },
    { id: "l3", name: "Lei 9.492/97 (Protesto de Títulos)", priority: 1, reads: 2, cycle: "" },
    { id: "l4", name: "Provimento CNJ 149/2023 (CNN Extrajudicial)", priority: 1, reads: 2, cycle: "" },
    { id: "l5", name: "CC — Livro III (Coisas), IV (Família), V (Sucessões)", priority: 1, reads: 2, cycle: "" },
    { id: "l6", name: "Lei 9.514/97 (Alienação Fiduciária Imobiliária)", priority: 1, reads: 2, cycle: "" },
    { id: "l7", name: "Lei 14.382/2022 (SERP)", priority: 1, reads: 2, cycle: "" },
    { id: "l8", name: "Lei 14.711/2023 (Marco Legal das Garantias)", priority: 1, reads: 2, cycle: "" },
    { id: "l9", name: "Res. CNJ 81/2009 (com alterações)", priority: 1, reads: 2, cycle: "" },
    { id: "l10", name: "Provimento CNJ 184/2024", priority: 1, reads: 2, cycle: "" },

    // Prioridade 2 — Leitura dirigida (1 vez, artigos-chave)
    { id: "l11", name: "Lei 6.766/79 (Parcelamento do Solo)", priority: 2, reads: 1, cycle: "" },
    { id: "l12", name: "Lei 4.591/64 (Incorporações)", priority: 2, reads: 1, cycle: "" },
    { id: "l13", name: "Lei 13.465/2017 (REURB)", priority: 2, reads: 1, cycle: "" },
    { id: "l14", name: "Lei 10.267/2001 (Georreferenciamento)", priority: 2, reads: 1, cycle: "" },
    { id: "l15", name: "Lei 10.169/2000 (Emolumentos)", priority: 2, reads: 1, cycle: "" },
    { id: "l16", name: "Lei 8.009/90 (Bem de Família)", priority: 2, reads: 1, cycle: "" },
    { id: "l17", name: "Lei 13.146/2015 (Estatuto PcD)", priority: 2, reads: 1, cycle: "" },
    { id: "l18", name: "Lei 13.874/2019 (Liberdade Econômica)", priority: 2, reads: 1, cycle: "C12" },
    { id: "l19", name: "CC — Parte Geral, Obrigações, Contratos", priority: 2, reads: 1, cycle: "" },
    { id: "l20", name: "Res. CNJ 35/2007 (Inv/Divórcio Extrajudicial)", priority: 2, reads: 1, cycle: "" },
    { id: "l21", name: "Res. CNJ 583/2024 (Traslado certidões exterior)", priority: 2, reads: 1, cycle: "" },
    { id: "l31", name: "Lei 10.257/2001 (Estatuto das Cidades) — arts. 1-58", priority: 2, reads: 1, cycle: "C06" },

    // Prioridade 3 — Artigos específicos
    { id: "l22", name: "CF/88 — Arts. 5º, 22, 24, 37, 93, 103-B, 236", priority: 3, reads: 1, cycle: "" },
    { id: "l23", name: "CPC — Provas, execução, tutela provisória", priority: 3, reads: 1, cycle: "" },
    { id: "l24", name: "CP — Crimes contra fé pública e adm. pública", priority: 3, reads: 1, cycle: "C10" },
    { id: "l25", name: "CPP — Noções gerais (inquérito, ação penal, prova, prisão)", priority: 3, reads: 1, cycle: "C14" },
    { id: "l26", name: "Código Comercial / Lei S/A / Estatuto ME-EPP", priority: 3, reads: 1, cycle: "" },
    { id: "l27", name: "CTN — Obrigação tributária, crédito, espécies", priority: 3, reads: 1, cycle: "C03" },
    { id: "l28", name: "LGPD — Conceitos gerais, privacy by design", priority: 3, reads: 1, cycle: "" },
    { id: "l29", name: "Lei 9.307/96 (Arbitragem) + Lei 13.140/2015 (Mediação)", priority: 3, reads: 1, cycle: "" },
    { id: "l30", name: "Lei 9.613/98 (Lavagem de Dinheiro)", priority: 3, reads: 1, cycle: "" },
    { id: "l32", name: "Lei 9.784/1999 (Processo Administrativo Federal)", priority: 3, reads: 1, cycle: "C05" },
    { id: "l33", name: "Lei 4.504/1964 (Estatuto da Terra) — arts. 1-74", priority: 3, reads: 1, cycle: "C09" },
    { id: "l34", name: "Lei 5.709/1971 (Aquisição de Imóvel Rural por Estrangeiro)", priority: 3, reads: 1, cycle: "C11" },
    { id: "l35", name: "Lei 6.739/1979 (Matrícula e Registro de Imóveis Rurais)", priority: 3, reads: 1, cycle: "C11" },
    { id: "l36", name: "Lei 6.969/1981 (Usucapião Especial de Imóveis Rurais)", priority: 3, reads: 1, cycle: "C11" },
    { id: "l37", name: "Lei 8.934/1994 (Registro Público de Empresas Mercantis)", priority: 3, reads: 1, cycle: "C12" },
    { id: "l38", name: "Lei 5.474/1968 (Duplicatas)", priority: 3, reads: 1, cycle: "C13" },
    { id: "l39", name: "Decreto 2.044/1908 (Letra de Câmbio e Nota Promissória)", priority: 3, reads: 1, cycle: "C13" },
    { id: "l40", name: "Lei 7.357/1985 (Cheque)", priority: 3, reads: 1, cycle: "C13" },
  ],
};

export function getWeekNumber(startDate: string): number {
  const [y, m, d] = startDate.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  start.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const diff = now.getTime() - start.getTime();
  if (diff < 0) return 0;
  return Math.min(Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1, PLAN.totalWeeks);
}

export function getCurrentPhase(week: number) {
  return PLAN.phases.find(p => week >= p.weeks[0] && week <= p.weeks[1]) || PLAN.phases[0];
}

export function daysUntilExam(): number {
  const [y, m, d] = PLAN.examDate.split("-").map(Number);
  const exam = new Date(y, m - 1, d);
  exam.setHours(0, 0, 0, 0);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.max(0, Math.ceil((exam.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));
}

/** Returns the week key string like "W01" for a given date */
export function getWeekKey(date: Date, startDate: string): string {
  const [y, m, d] = startDate.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  start.setHours(0, 0, 0, 0);
  const localDate = new Date(date);
  localDate.setHours(0, 0, 0, 0);
  const diff = localDate.getTime() - start.getTime();
  if (diff < 0) return "pre";
  const weekNum = Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1;
  return `W${String(weekNum).padStart(2, "0")}`;
}

/** Returns the start date for a given week number */
export function getWeekStartDate(weekNum: number, startDate: string): Date {
  const [y, m, d] = startDate.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  start.setHours(0, 0, 0, 0);
  const result = new Date(start.getTime() + (weekNum - 1) * 7 * 24 * 60 * 60 * 1000);
  return result;
}

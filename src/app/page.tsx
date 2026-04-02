"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { PLAN, getWeekNumber, getCurrentPhase, daysUntilExam, getWeekKey, getWeekStartDate } from "@/lib/plan";
import { loadData, saveData, type StudyData, type QuestionEntry, type StudyEntry } from "@/lib/supabase";
import { signIn, signOut, getSession, getAuthClient } from "@/lib/auth";
import { TRILHAS, type Trilha } from "@/lib/trilhas";

const defaultData = (): StudyData => ({
  discipline_hours: {},
  weekly_hours: {},
  questions_resolved: 0,
  question_entries: [],
  simulados: [],
  legislation_progress: {},
  completed_tasks: {},
  study_entries: [], // <- LINHA NOVA AQUI
});

export default function App() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [data, setData] = useState<StudyData>(defaultData());
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [logModal, setLogModal] = useState(false);
  const [simModal, setSimModal] = useState(false);
  const [qModal, setQModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const session = await getSession();
        setAuthed(!!session);
        if (session) {
          const result = await loadData();
          if (result) setData({ ...defaultData(), ...result });
        }
      } catch {
        setAuthed(false);
      }
      setLoaded(true);
    })();
    const { data: listener } = getAuthClient().auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogin = async (email: string, password: string) => {
    await signIn(email, password);
    setAuthed(true);
    const result = await loadData();
    if (result) setData({ ...defaultData(), ...result });
    setLoaded(true);
  };

  const handleLogout = async () => {
    await signOut();
    setAuthed(false);
    setData(defaultData());
  };

  const save = useCallback(async (newData: StudyData) => {
    setData(newData);
    try { await saveData(newData); } catch (e) { console.error("Save failed:", e); }
  }, []);

  const currentWeek = getWeekNumber(PLAN.startDate);
  const phase = getCurrentPhase(currentWeek);
  const daysLeft = daysUntilExam();
  const totalHoursLogged = Object.values(data.discipline_hours).reduce((a, b) => a + b, 0);
  const pctComplete = Math.min(100, Math.round((totalHoursLogged / 900) * 100));

  // Weekly hours
  const currentWeekKey = getWeekKey(new Date(), PLAN.startDate);
  const weeklyHoursThisWeek = Object.values(data.weekly_hours[currentWeekKey] || {}).reduce((a, b) => a + b, 0);

  if (!loaded || authed === null)
    return <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#f8fafc", color: "#334155", fontFamily: "'JetBrains Mono', monospace" }}><div>Carregando...</div></div>;

  if (!authed) return <LoginPage onLogin={handleLogin} />;

  return (
    <div style={{ minHeight: "100vh", background: "#f1f5f9", color: "#1e293b", fontFamily: "'Segoe UI', -apple-system, sans-serif" }}>
      {/* HEADER */}
      <div style={{ background: "linear-gradient(90deg, #4338ca 0%, #6366f1 50%, #4338ca 100%)", padding: "20px 24px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, margin: 0, color: "white" }}>
              <span style={{ color: "#c7d2fe" }}>&#9878;</span> Cart&oacute;riosENAC
            </h1>
            <div style={{ fontSize: 11, color: "#c7d2fe", marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>
              ENAC 4 &mdash; {daysLeft}d restantes &mdash; Semana {currentWeek}/{PLAN.totalWeeks}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ background: "rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", color: "white" }}>
              FASE {phase.id}: {phase.name.toUpperCase()}
            </div>
            <button onClick={handleLogout} style={{ background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, padding: "6px 12px", color: "#e0e7ff", cursor: "pointer", fontSize: 11, fontWeight: 600 }}>Sair</button>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", gap: 4, padding: "16px 0 0", borderBottom: "1px solid #e2e8f0", overflowX: "auto" }}>
          {["dashboard", "disciplinas", "questões", "legislação", "simulados", "trilhas", "histórico"].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "10px 16px", background: tab === t ? "rgba(99,102,241,0.1)" : "transparent", border: "none",
              borderBottom: tab === t ? "2px solid #6366f1" : "2px solid transparent",
              color: tab === t ? "#4338ca" : "#94a3b8", cursor: "pointer", fontSize: 13, fontWeight: 600,
              textTransform: "capitalize", fontFamily: "'Space Grotesk', sans-serif", transition: "all 0.2s", whiteSpace: "nowrap",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px 40px" }}>
        {tab === "dashboard" && <Dashboard data={data} totalHoursLogged={totalHoursLogged} pctComplete={pctComplete} currentWeek={currentWeek} weeklyHours={weeklyHoursThisWeek} onLogStudy={() => setLogModal(true)} onLogSimulado={() => setSimModal(true)} onLogQuestions={() => setQModal(true)} />}
        {tab === "disciplinas" && <Disciplinas data={data} />}
        {tab === "questões" && <QuestoesTab data={data} />}
        {tab === "legislação" && <Legislacao data={data} save={save} />}
        {tab === "simulados" && <Simulados data={data} onLogSimulado={() => setSimModal(true)} />}
        {tab === "trilhas" && <TrilhasTab data={data} save={save} />}
        {tab === "histórico" && <HistoricoTab data={data} save={save} />}
      </div>

      {logModal && <LogModal data={data} save={save} onClose={() => setLogModal(false)} />}
      {simModal && <SimModal data={data} save={save} onClose={() => setSimModal(false)} />}
      {qModal && <QuestionModal data={data} save={save} onClose={() => setQModal(false)} />}
    </div>
  );
}

/* ─── LOGIN ─── */
function LoginPage({ onLogin }: { onLogin: (email: string, password: string) => Promise<void> }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); setLoading(true);
    try { await onLogin(email, password); } catch (err: unknown) { setError(err instanceof Error ? err.message : "Erro ao fazer login"); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 50%, #c7d2fe 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <form onSubmit={handleSubmit} style={{ background: "white", borderRadius: 16, padding: 40, width: "100%", maxWidth: 380, boxShadow: "0 10px 40px rgba(99,102,241,0.15)" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, margin: 0, color: "#1e293b" }}>
            <span style={{ color: "#6366f1" }}>&#9878;</span> Cart&oacute;riosENAC
          </h1>
          <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>Acesse sua conta</div>
        </div>
        {error && <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#dc2626", marginBottom: 16 }}>{error}</div>}
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, marginBottom: 16, outline: "none", boxSizing: "border-box", color: "#1e293b", background: "#f8fafc" }} />
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, marginBottom: 24, outline: "none", boxSizing: "border-box", color: "#1e293b", background: "#f8fafc" }} />
        <button type="submit" disabled={loading} style={{ width: "100%", padding: "12px", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "none", borderRadius: 10, color: "white", fontWeight: 600, cursor: loading ? "wait" : "pointer", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}

/* ─── WEEKLY PACING RING ─── */
function WeeklyPacingRing({ current, target }: { current: number; target: number }) {
  const pct = Math.min(100, (current / target) * 100);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;
  const color = pct >= 100 ? "#059669" : pct >= 70 ? "#6366f1" : pct >= 40 ? "#d97706" : "#dc2626";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      <div style={{ position: "relative", width: 130, height: 130, flexShrink: 0 }}>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="10" />
          <circle cx="65" cy="65" r={radius} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 65 65)" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 700, color, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>{current.toFixed(1)}</div>
          <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>de {target}h</div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "#334155", marginBottom: 4 }}>Cadência Semanal</div>
        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Meta: {target}h por semana</div>
        <div style={{ fontSize: 24, fontWeight: 700, color, fontFamily: "'Space Grotesk', sans-serif" }}>{pct.toFixed(0)}%</div>
        <div style={{ fontSize: 11, color: "#94a3b8" }}>
          {pct >= 100 ? "Meta atingida!" : `Faltam ${(target - current).toFixed(1)}h`}
        </div>
      </div>
    </div>
  );
}

/* ─── WEEKLY QUESTIONS BAR CHART ─── */
function WeeklyQuestionsChart({ data, currentWeek }: { data: StudyData; currentWeek: number }) {
  const [viewWeek, setViewWeek] = useState(currentWeek);
  const maxWeek = currentWeek;

  const weekEntries = useMemo(() => {
    const weekKey = `W${String(viewWeek).padStart(2, "0")}`;
    const startDate = getWeekStartDate(viewWeek, PLAN.startDate);
    const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    return (data.question_entries || []).filter(e => {
      const d = new Date(e.date);
      return d >= startDate && d < endDate;
    });
  }, [data.question_entries, viewWeek]);

  const totalQ = weekEntries.reduce((a, e) => a + e.total, 0);
  const totalCorrect = weekEntries.reduce((a, e) => a + e.correct, 0);
  const totalWrong = totalQ - totalCorrect;

  // Group by discipline
  const byDisc = useMemo(() => {
    const map: Record<string, { total: number; correct: number }> = {};
    weekEntries.forEach(e => {
      if (!map[e.discipline]) map[e.discipline] = { total: 0, correct: 0 };
      map[e.discipline].total += e.total;
      map[e.discipline].correct += e.correct;
    });
    return Object.entries(map).sort((a, b) => b[1].total - a[1].total);
  }, [weekEntries]);

  const maxBar = Math.max(1, ...byDisc.map(([, v]) => v.total));

  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <button onClick={() => setViewWeek(Math.max(1, viewWeek - 1))} disabled={viewWeek <= 1}
          style={{ background: viewWeek <= 1 ? "#f1f5f9" : "#e0e7ff", border: "none", borderRadius: 6, padding: "6px 12px", cursor: viewWeek <= 1 ? "default" : "pointer", color: viewWeek <= 1 ? "#cbd5e1" : "#4338ca", fontWeight: 600, fontSize: 13 }}>&#8592;</button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>
            Semana {viewWeek} {viewWeek === currentWeek ? "(atual)" : ""}
          </div>
          <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
            {totalQ} questões &middot; {totalQ > 0 ? ((totalCorrect / totalQ) * 100).toFixed(0) : 0}% acerto
          </div>
        </div>
        <button onClick={() => setViewWeek(Math.min(maxWeek, viewWeek + 1))} disabled={viewWeek >= maxWeek}
          style={{ background: viewWeek >= maxWeek ? "#f1f5f9" : "#e0e7ff", border: "none", borderRadius: 6, padding: "6px 12px", cursor: viewWeek >= maxWeek ? "default" : "pointer", color: viewWeek >= maxWeek ? "#cbd5e1" : "#4338ca", fontWeight: 600, fontSize: 13 }}>&#8594;</button>
      </div>

      {/* Summary bar */}
      {totalQ > 0 && (
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "#059669" }} />
            <span style={{ fontSize: 12, color: "#334155" }}>{totalCorrect} certas</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 12, height: 12, borderRadius: 3, background: "#dc2626" }} />
            <span style={{ fontSize: 12, color: "#334155" }}>{totalWrong} erradas</span>
          </div>
        </div>
      )}

      {/* Bars by discipline */}
      {byDisc.length === 0 ? (
        <div style={{ textAlign: "center", padding: 30, color: "#94a3b8", fontSize: 13 }}>Nenhuma questão registrada nesta semana.</div>
      ) : (
        <div style={{ display: "grid", gap: 8 }}>
          {byDisc.map(([discId, vals]) => {
            const disc = PLAN.disciplines.find(d => d.id === discId);
            const correctPct = (vals.correct / vals.total) * 100;
            const wrongPct = ((vals.total - vals.correct) / vals.total) * 100;
            const barWidth = (vals.total / maxBar) * 100;
            return (
              <div key={discId}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
                  <span style={{ fontSize: 12, color: "#334155", fontWeight: 500 }}>{disc?.name || discId}</span>
                  <span style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{vals.correct}/{vals.total}</span>
                </div>
                <div style={{ height: 16, background: "#f1f5f9", borderRadius: 4, overflow: "hidden", width: "100%" }}>
                  <div style={{ height: "100%", width: `${barWidth}%`, display: "flex", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: `${correctPct}%`, height: "100%", background: "#059669", transition: "width 0.3s" }} />
                    <div style={{ width: `${wrongPct}%`, height: "100%", background: "#dc2626", transition: "width 0.3s" }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─── DASHBOARD ─── */
function Dashboard({ data, totalHoursLogged, pctComplete, currentWeek, weeklyHours, onLogStudy, onLogSimulado, onLogQuestions }: {
  data: StudyData; totalHoursLogged: number; pctComplete: number; currentWeek: number; weeklyHours: number;
  onLogStudy: () => void; onLogSimulado: () => void; onLogQuestions: () => void;
}) {
  return (
    <div>
      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Horas totais", value: totalHoursLogged.toFixed(1), sub: `de 900h (${pctComplete}%)`, accent: "#6366f1" },
          { label: "Questões", value: data.questions_resolved, sub: "resolvidas", accent: "#059669" },
          { label: "Simulados", value: data.simulados.length, sub: data.simulados.length > 0 ? `média: ${(data.simulados.reduce((a, b) => a + b.score, 0) / data.simulados.length).toFixed(0)}/100` : "nenhum ainda", accent: "#db2777" },
        ].map((kpi, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 16px", position: "relative", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: kpi.accent }} />
            <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "'JetBrains Mono', monospace" }}>{kpi.label}</div>
            <div style={{ fontSize: 32, fontWeight: 700, color: kpi.accent, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, marginTop: 4 }}>{kpi.value}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* WEEKLY PACING */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <WeeklyPacingRing current={weeklyHours} target={PLAN.weeklyTarget} />
        <WeeklyQuestionsChart data={data} currentWeek={currentWeek} />
      </div>

      {/* PROGRESS BAR */}
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginBottom: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>Progresso geral</span>
          <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{totalHoursLogged.toFixed(0)}h / 900h</span>
        </div>
        <div style={{ height: 8, background: "#e2e8f0", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pctComplete}%`, background: "linear-gradient(90deg, #6366f1, #a78bfa)", borderRadius: 4, transition: "width 0.5s" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          {PLAN.phases.map((p) => {
            const isCurrent = currentWeek >= p.weeks[0] && currentWeek <= p.weeks[1];
            return <div key={p.id} style={{ fontSize: 10, color: isCurrent ? p.color : "#94a3b8", fontWeight: isCurrent ? 700 : 400, fontFamily: "'JetBrains Mono', monospace", textAlign: "center", flex: p.weeks[1] - p.weeks[0] + 1 }}>{p.name}</div>;
          })}
        </div>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
        <button onClick={onLogStudy} style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "none", borderRadius: 10, padding: "12px 20px", color: "white", fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 4px 15px rgba(79,70,229,0.3)" }}>
          + Registrar estudo
        </button>
        <button onClick={onLogQuestions} style={{ background: "linear-gradient(135deg, #059669, #10b981)", border: "none", borderRadius: 10, padding: "12px 20px", color: "white", fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 4px 15px rgba(5,150,105,0.3)" }}>
          + Registrar questões
        </button>
        <button onClick={onLogSimulado} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 20px", color: "#4338ca", fontWeight: 600, cursor: "pointer", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          + Registrar simulado
        </button>
      </div>

      {/* MILESTONES */}
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14, color: "#4338ca", fontFamily: "'Space Grotesk', sans-serif" }}>Marcos</h3>
        {PLAN.milestones.map((m, i) => {
          const isPast = new Date(m.date) < new Date();
          const phaseObj = PLAN.phases.find((p) => p.id === m.phase);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: i < PLAN.milestones.length - 1 ? "1px solid #f1f5f9" : "none", opacity: isPast ? 0.5 : 1 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: isPast ? "#cbd5e1" : phaseObj?.color || "#6366f1", flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#334155" }}>{m.label}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{m.date}</div>
              </div>
              {isPast && <span style={{ fontSize: 10, color: "#cbd5e1" }}>&#10003;</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── DISCIPLINAS ─── */
function Disciplinas({ data }: { data: StudyData }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {PLAN.disciplines.map((d) => {
        const logged = data.discipline_hours[d.id] || 0;
        const pct = Math.min(100, Math.round((logged / d.targetHours) * 100));
        return (
          <div key={d.id} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "16px 20px", position: "relative", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: d.color }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#1e293b" }}>{d.name}</span>
                  <span style={{ fontSize: 9, padding: "2px 6px", borderRadius: 4, background: d.nucleus === "A" ? "rgba(37,99,235,0.1)" : d.nucleus === "B" ? "rgba(217,119,6,0.1)" : d.nucleus === "C" ? "rgba(124,58,237,0.1)" : "rgba(148,163,184,0.1)", color: d.nucleus === "A" ? "#2563eb" : d.nucleus === "B" ? "#d97706" : d.nucleus === "C" ? "#7c3aed" : "#64748b", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>N&Uacute;CLEO {d.nucleus}</span>
                  <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{d.questions}q &middot; {d.pct}%</span>
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{d.method}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: d.color, fontFamily: "'Space Grotesk', sans-serif" }}>{logged.toFixed(1)}h</div>
                <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>de {d.targetHours}h</div>
              </div>
            </div>
            <div style={{ height: 4, background: "#e2e8f0", borderRadius: 2, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${pct}%`, background: d.color, borderRadius: 2, transition: "width 0.3s" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── QUESTÕES TAB ─── */
function QuestoesTab({ data }: { data: StudyData }) {
  const currentWeek = getWeekNumber(PLAN.startDate);
  return <WeeklyQuestionsChart data={data} currentWeek={currentWeek} />;
}

/* ─── LEGISLAÇÃO ─── */
function Legislacao({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  return (
    <div>
      {[1, 2, 3].map((priority) => (
        <div key={priority} style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: priority === 1 ? "#dc2626" : priority === 2 ? "#d97706" : "#64748b", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>
            Prioridade {priority}{" "}
            {priority === 1 ? "— Leitura integral obrigatória" : priority === 2 ? "— Leitura dirigida" : "— Artigos específicos"}
          </h3>
          <div style={{ display: "grid", gap: 6 }}>
            {PLAN.legislation.filter((l) => l.priority === priority).map((law) => {
              const progress = data.legislation_progress[law.id] || 0;
              return (
                <div key={law.id} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
                  <span style={{ fontSize: 13, flex: 1, opacity: progress >= law.reads ? 0.5 : 1, color: "#334155" }}>
                    {progress >= law.reads ? "✅ " : ""}{law.name}
                  </span>
                  <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                    {Array.from({ length: law.reads }).map((_, i) => (
                      <button key={i} onClick={async () => {
                        const newProgress = i + 1 <= progress ? i : i + 1;
                        await save({ ...data, legislation_progress: { ...data.legislation_progress, [law.id]: newProgress } });
                      }} style={{
                        width: 24, height: 24, borderRadius: 6, border: i < progress ? "none" : "1px solid #cbd5e1",
                        background: i < progress ? (priority === 1 ? "#2563eb" : priority === 2 ? "#d97706" : "#64748b") : "white",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, color: i < progress ? "white" : "#94a3b8", fontFamily: "'JetBrains Mono', monospace",
                      }}>{i + 1}</button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── SIMULADOS ─── */
function Simulados({ data, onLogSimulado }: { data: StudyData; onLogSimulado: () => void }) {
  if (data.simulados.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 60, color: "#94a3b8" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>&#128221;</div>
        <div>Nenhum simulado registrado ainda.</div>
        <button onClick={onLogSimulado} style={{ marginTop: 16, background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "none", borderRadius: 10, padding: "10px 20px", color: "white", fontWeight: 600, cursor: "pointer", fontSize: 13 }}>Registrar primeiro simulado</button>
      </div>
    );
  }
  return (
    <div>
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginBottom: 20, textAlign: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ fontSize: 11, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace" }}>M&eacute;dia dos simulados</div>
        <div style={{ fontSize: 48, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: "#6366f1" }}>
          {(data.simulados.reduce((a, b) => a + b.score, 0) / data.simulados.length).toFixed(0)}
          <span style={{ fontSize: 20, color: "#cbd5e1" }}>/100</span>
        </div>
        <div style={{ fontSize: 12, color: data.simulados[data.simulados.length - 1]?.score >= 50 ? "#059669" : "#dc2626" }}>Meta PPP: 50 &middot; Meta seguran&ccedil;a: 60</div>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[...data.simulados].reverse().map((s, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "#334155" }}>{s.name || `Simulado ${data.simulados.length - i}`}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{s.date}</div>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: s.score >= 60 ? "#059669" : s.score >= 50 ? "#d97706" : "#dc2626" }}>{s.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── LOG MODAL ─── */
function LogModal({ data, save, onClose }: { data: StudyData; save: (d: StudyData) => Promise<void>; onClose: () => void }) {
  const [disc, setDisc] = useState("notarial");
  const [minutes, setMinutes] = useState("");

  const handleSave = async () => {
    const m = parseInt(minutes) || 0;
    if (m <= 0) return;
    const h = m / 60; 

    const weekKey = getWeekKey(new Date(), PLAN.startDate);
    const currentWeekHours = { ...(data.weekly_hours[weekKey] || {}) };
    currentWeekHours[disc] = (currentWeekHours[disc] || 0) + h;

    const newEntry: StudyEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().slice(0, 10),
      discipline: disc,
      minutes: m
    };

    await save({
      ...data,
      discipline_hours: { ...data.discipline_hours, [disc]: (data.discipline_hours[disc] || 0) + h },
      weekly_hours: { ...data.weekly_hours, [weekKey]: currentWeekHours },
      study_entries: [...(data.study_entries || []), newEntry]
    });
    onClose();
  };

  const inputStyle = { width: "100%", padding: "10px 10px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 16, fontWeight: 600 as const, textAlign: "center" as const, outline: "none", fontFamily: "'JetBrains Mono', monospace", boxSizing: "border-box" as const, background: "#f8fafc" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16, backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", color: "#1e293b" }}>Registrar estudo</h3>
        
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Disciplina</label>
        <select value={disc} onChange={(e) => setDisc(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 14, marginBottom: 16, outline: "none", background: "#f8fafc" }}>
          {PLAN.disciplines.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
        </select>
        
        <label style={{ fontSize: 11, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Tempo (em minutos)</label>
        <input type="number" step="1" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="Ex: 30" style={inputStyle} />
        
        <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "10px", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 8, color: "#64748b", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Cancelar</button>
          <button onClick={handleSave} style={{ flex: 1, padding: "10px", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "none", borderRadius: 8, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

/* ─── QUESTION MODAL ─── */
function QuestionModal({ data, save, onClose }: { data: StudyData; save: (d: StudyData) => Promise<void>; onClose: () => void }) {
  const [disc, setDisc] = useState("notarial");
  const [total, setTotal] = useState("");
  const [correct, setCorrect] = useState("");

  const handleSave = async () => {
    const t = parseInt(total) || 0;
    const c = Math.min(parseInt(correct) || 0, t);
    if (t <= 0) return;

    const entry: QuestionEntry = {
      date: new Date().toISOString().slice(0, 10),
      discipline: disc,
      total: t,
      correct: c,
    };

    await save({
      ...data,
      questions_resolved: data.questions_resolved + t,
      question_entries: [...(data.question_entries || []), entry],
    });
    onClose();
  };

  const inputStyle = { width: "100%", padding: "10px 10px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 16, fontWeight: 600 as const, textAlign: "center" as const, outline: "none", fontFamily: "'JetBrains Mono', monospace", boxSizing: "border-box" as const, background: "#f8fafc" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16, backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", color: "#1e293b" }}>Registrar questões</h3>

        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Disciplina</label>
        <select value={disc} onChange={(e) => setDisc(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 14, marginBottom: 16, outline: "none", background: "#f8fafc" }}>
          {PLAN.disciplines.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
        </select>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          <div>
            <label style={{ fontSize: 11, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Total feitas</label>
            <input type="number" step="1" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="0" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: "#059669", fontWeight: 600, display: "block", marginBottom: 4 }}>Acertos</label>
            <input type="number" step="1" value={correct} onChange={(e) => setCorrect(e.target.value)} placeholder="0" style={inputStyle} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "10px", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 8, color: "#64748b", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Cancelar</button>
          <button onClick={handleSave} style={{ flex: 1, padding: "10px", background: "linear-gradient(135deg, #059669, #10b981)", border: "none", borderRadius: 8, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

/* ─── SIM MODAL ─── */
function SimModal({ data, save, onClose }: { data: StudyData; save: (d: StudyData) => Promise<void>; onClose: () => void }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSave = async () => {
    const s = parseInt(score) || 0;
    if (s < 0 || s > 100) return;
    await save({ ...data, simulados: [...data.simulados, { name: name || `Simulado ${data.simulados.length + 1}`, score: s, date: new Date().toISOString().slice(0, 10) }] });
    onClose();
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16, backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, width: "100%", maxWidth: 380, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", color: "#1e293b" }}>Registrar simulado</h3>
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Nome (opcional)</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: ENAC 2 - 2ª tentativa" style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 14, marginBottom: 16, outline: "none", boxSizing: "border-box", background: "#f8fafc" }} />
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Acertos (0&ndash;100)</label>
        <input type="number" min="0" max="100" value={score} onChange={(e) => setScore(e.target.value)} placeholder="0" style={{ width: "100%", padding: "14px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 28, fontWeight: 700, textAlign: "center", outline: "none", fontFamily: "'Space Grotesk', sans-serif", marginBottom: 20, boxSizing: "border-box", background: "#f8fafc" }} />
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={onClose} style={{ flex: 1, padding: "10px", background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 8, color: "#64748b", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Cancelar</button>
          <button onClick={handleSave} style={{ flex: 1, padding: "10px", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", border: "none", borderRadius: 8, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Salvar</button>
        </div>
      </div>
    </div>
  );
}

/* ─── TRILHAS TAB ─── */
function TrilhasTab({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  const [selectedTrilha, setSelectedTrilha] = useState(0);
  const [expandedTasks, setExpandedTasks] = useState<Record<number, boolean>>({});
  const trilha = TRILHAS[selectedTrilha];

  const completedCount = useMemo(() => {
    if (!trilha) return 0;
    return trilha.days.reduce((acc, day) =>
      acc + day.tasks.filter(t => data.completed_tasks[`${trilha.id}:${t.id}`]).length, 0);
  }, [trilha, data.completed_tasks]);

  const totalTasks = trilha ? trilha.days.reduce((a, d) => a + d.tasks.length, 0) : 0;

  const toggleTask = async (taskId: number) => {
    const key = `${trilha.id}:${taskId}`;
    const newCompleted = { ...data.completed_tasks };
    if (newCompleted[key]) {
      delete newCompleted[key];
    } else {
      newCompleted[key] = true;
    }
    await save({ ...data, completed_tasks: newCompleted });
  };

  if (!trilha) return null;

  return (
    <div>
      {/* Trilha selector */}
      <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }}>
        {TRILHAS.map((t, i) => {
          const tTotal = t.days.reduce((a, d) => a + d.tasks.length, 0);
          const tDone = t.days.reduce((a, d) => a + d.tasks.filter(tk => data.completed_tasks[`${t.id}:${tk.id}`]).length, 0);
          const isDone = tDone === tTotal;
          return (
            <button key={t.id} onClick={() => setSelectedTrilha(i)} style={{
              padding: "8px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600,
              fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap",
              background: selectedTrilha === i ? "#4338ca" : isDone ? "#dcfce7" : "white",
              color: selectedTrilha === i ? "white" : isDone ? "#059669" : "#64748b",
              boxShadow: selectedTrilha === i ? "0 2px 8px rgba(67,56,202,0.3)" : "0 1px 2px rgba(0,0,0,0.05)",
            }}>
              {t.id} {isDone ? "✓" : `${tDone}/${tTotal}`}
            </button>
          );
        })}
      </div>

      {/* Progress */}
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>{trilha.title}</span>
          <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{completedCount}/{totalTasks} tarefas</span>
        </div>
        <div style={{ height: 6, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0}%`, background: completedCount === totalTasks ? "#059669" : "#6366f1", borderRadius: 3, transition: "width 0.3s" }} />
        </div>
      </div>

      {/* Days & Tasks */}
      {trilha.days.map((day) => (
        <div key={day.dayLabel} style={{ marginBottom: 16 }}>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: "#4338ca", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>{day.dayLabel}</h4>
          <div style={{ display: "grid", gap: 6 }}>
            {day.tasks.map((task) => {
              const isDone = !!data.completed_tasks[`${trilha.id}:${task.id}`];
              const isExpanded = !!expandedTasks[task.id];
              return (
                <div key={task.id} onClick={() => setExpandedTasks(prev => ({ ...prev, [task.id]: !prev[task.id] }))} style={{
                  background: isDone ? "#f0fdf4" : "white", border: `1px solid ${isDone ? "#bbf7d0" : "#e2e8f0"}`,
                  borderRadius: 10, padding: "12px 16px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
                  opacity: isDone ? 0.7 : 1, transition: "all 0.2s", cursor: "pointer",
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <button onClick={(e) => { e.stopPropagation(); toggleTask(task.id); }} style={{
                      width: 22, height: 22, borderRadius: 6, border: isDone ? "none" : "2px solid #cbd5e1",
                      background: isDone ? "#059669" : "white", cursor: "pointer", display: "flex",
                      alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2,
                      color: "white", fontSize: 12, fontWeight: 700,
                    }}>{isDone ? "✓" : ""}</button>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                        <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 4, background: "rgba(99,102,241,0.1)", color: "#4338ca", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace" }}>T{String(task.id).padStart(2, '0')}</span>
                        <span style={{ fontSize: 11, color: "#6366f1", fontWeight: 600 }}>{task.discipline}</span>
                        <span style={{ fontSize: 10, color: "#94a3b8", marginLeft: "auto" }}>{isExpanded ? "▲" : "▼"}</span>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: "#334155", textDecoration: isDone ? "line-through" : "none" }}>{task.title}</div>
                      {task.description && (
                        <div style={{ fontSize: 12, color: "#64748b", marginTop: 6, lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                          {isExpanded ? task.description : `${task.description.substring(0, 100)}${task.description.length > 100 ? "..." : ""}`}
                        </div>
                      )}
                      {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 11, color: "#6366f1", textDecoration: "none", marginTop: 4, display: "inline-block" }}>Abrir no LDI &#8599;</a>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── HISTÓRICO ─── */
function HistoricoTab({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  const handleDelete = async (entry: StudyEntry) => {
    if (!window.confirm(`Tem certeza que deseja excluir o registro de ${entry.minutes} minutos?`)) return;

    // Filtra para manter todos os itens, MENOS o que você mandou excluir
    const newEntries = (data.study_entries || []).filter(e => e.id !== entry.id);

    // Remove as horas da contagem total para não bugar o progresso
    const h = entry.minutes / 60;
    const newDiscHours = { ...data.discipline_hours };
    newDiscHours[entry.discipline] = Math.max(0, (newDiscHours[entry.discipline] || 0) - h);

    await save({
      ...data,
      study_entries: newEntries,
      discipline_hours: newDiscHours
    });
  };

  const entries = [...(data.study_entries || [])].reverse();

  if (entries.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 60, color: "#94a3b8" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🕒</div>
        <div>Nenhum estudo registrado ainda. Vá no Dashboard e adicione um!</div>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: 10 }}>
      {entries.map(entry => {
        const discName = PLAN.disciplines.find(d => d.id === entry.discipline)?.name || entry.discipline;
        return (
          <div key={entry.id} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>{discName}</div>
              <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>Data: {entry.date}</div>
            </div>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#4f46e5", fontFamily: "'Space Grotesk', sans-serif" }}>{entry.minutes} min</div>
              <button onClick={() => handleDelete(entry)} style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>Excluir</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

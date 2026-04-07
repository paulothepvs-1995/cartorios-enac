"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { PLAN, getWeekNumber, getCurrentPhase, daysUntilExam, getWeekKey, getWeekStartDate } from "@/lib/plan";
import { loadData, saveData, type StudyData, type QuestionEntry, type StudyEntry, type Simulado, type DailyTodoItem } from "@/lib/supabase";

/* ─── LOCAL STORAGE HELPERS FOR DAILY TODOS ─── */
const TODOS_STORAGE_KEY = "enac-todos-v2";
function loadDailyTodos(dateKey: string): DailyTodoItem[] {
  if (typeof window === "undefined") return [];
  try {
    // Cleanup old storage key
    localStorage.removeItem("cartorios-enac-daily-todos");
    const raw = localStorage.getItem(TODOS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { date: string; items: DailyTodoItem[] };
    // Only return if the stored date matches today's local date
    if (parsed.date !== dateKey) return [];
    return parsed.items || [];
  } catch { return []; }
}
function saveDailyTodos(dateKey: string, items: DailyTodoItem[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify({ date: dateKey, items }));
  } catch { /* ignore */ }
}
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
  study_entries: [],
});

/* ─── HELPER DE FORMATAÇÃO DE TEMPO ─── */
function formatDecimalHours(decimalHours: number) {
  if (!decimalHours || decimalHours <= 0) return "0m";
  const h = Math.floor(decimalHours);
  const m = Math.round((decimalHours - h) * 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

function formatMinutes(totalMins: number) {
  if (!totalMins || totalMins <= 0) return "0m";
  const h = Math.floor(totalMins / 60);
  const m = Math.round(totalMins % 60);
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

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
          {["dashboard", "tempo", "disciplinas", "questões", "legislação", "simulados", "trilhas", "histórico"].map((t) => (
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
        {tab === "dashboard" && <Dashboard data={data} save={save} totalHoursLogged={totalHoursLogged} pctComplete={pctComplete} currentWeek={currentWeek} onLogStudy={() => setLogModal(true)} onLogSimulado={() => setSimModal(true)} onLogQuestions={() => setQModal(true)} />}
        {tab === "tempo" && <TempoTab data={data} />}
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
function WeeklyPacingRing({ data, currentWeek, target }: { data: StudyData; currentWeek: number; target: number }) {
  const [viewWeek, setViewWeek] = useState(currentWeek);
  const maxWeek = currentWeek;

  const weekKey = `W${String(viewWeek).padStart(2, "0")}`;
  const current = Object.values(data.weekly_hours[weekKey] || {}).reduce((a, b) => a + b, 0);

  const pct = Math.min(100, (current / target) * 100);
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (pct / 100) * circumference;
  const color = pct >= 100 ? "#059669" : pct >= 70 ? "#6366f1" : pct >= 40 ? "#d97706" : "#dc2626";

  const formattedTime = formatDecimalHours(current);

  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <button onClick={() => setViewWeek(Math.max(1, viewWeek - 1))} disabled={viewWeek <= 1}
          style={{ background: viewWeek <= 1 ? "#f1f5f9" : "#e0e7ff", border: "none", borderRadius: 6, padding: "6px 12px", cursor: viewWeek <= 1 ? "default" : "pointer", color: viewWeek <= 1 ? "#cbd5e1" : "#4338ca", fontWeight: 600, fontSize: 13 }}>&#8592;</button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>
            Semana {viewWeek} {viewWeek === currentWeek ? "(atual)" : ""}
          </div>
          <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
            Cadência Semanal
          </div>
        </div>
        <button onClick={() => setViewWeek(Math.min(maxWeek, viewWeek + 1))} disabled={viewWeek >= maxWeek}
          style={{ background: viewWeek >= maxWeek ? "#f1f5f9" : "#e0e7ff", border: "none", borderRadius: 6, padding: "6px 12px", cursor: viewWeek >= maxWeek ? "default" : "pointer", color: viewWeek >= maxWeek ? "#cbd5e1" : "#4338ca", fontWeight: 600, fontSize: 13 }}>&#8594;</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ position: "relative", width: 130, height: 130, flexShrink: 0 }}>
          <svg width="130" height="130" viewBox="0 0 130 130">
            <circle cx="65" cy="65" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="10" />
            <circle cx="65" cy="65" r={radius} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 65 65)" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: formattedTime.length > 5 ? 20 : 26, fontWeight: 700, color, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>{formattedTime}</div>
            <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>de {target}h</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 12, color: "#64748b", marginBottom: 8 }}>Meta: {target}h por semana</div>
          <div style={{ fontSize: 24, fontWeight: 700, color, fontFamily: "'Space Grotesk', sans-serif" }}>{pct.toFixed(0)}%</div>
          <div style={{ fontSize: 11, color: "#94a3b8" }}>
            {pct >= 100 ? "Meta atingida!" : `Faltam ${formatDecimalHours(target - current)}`}
          </div>
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
      const d = new Date(e.date + "T12:00:00");
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

/* ─── DAILY TODO LIST ─── */
function getNextUncompletedTasks(data: StudyData, count: number): Array<{ trilhaId: string; task: { id: number; discipline: string; title: string } }> {
  const result: Array<{ trilhaId: string; task: { id: number; discipline: string; title: string } }> = [];
  for (const trilha of TRILHAS) {
    for (const day of trilha.days) {
      for (const task of day.tasks) {
        if (result.length >= count) return result;
        const key = `${trilha.id}:${task.id}`;
        if (!data.completed_tasks || !data.completed_tasks[key]) {
          result.push({ trilhaId: trilha.id, task });
        }
      }
    }
  }
  return result;
}

function getLocalDateKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function DailyTodoList({ data }: { data: StudyData }) {
  const today = getLocalDateKey();
  const [newTodoText, setNewTodoText] = useState("");
  const [savedTodos, setSavedTodos] = useState<DailyTodoItem[]>([]);

  // Load from localStorage on mount and when date changes
  useEffect(() => {
    setSavedTodos(loadDailyTodos(today));
  }, [today]);

  // Get next 3 uncompleted trilha tasks
  const nextTasks = useMemo(() => getNextUncompletedTasks(data, 3), [data]);

  // Build auto-generated items for today
  const autoItems = useMemo((): DailyTodoItem[] => {
    const items: DailyTodoItem[] = [];
    items.push({ id: "auto-fc", text: "Revisar flashcards do que foi estudado ontem", done: false, auto: true });
    nextTasks.forEach((t) => {
      items.push({
        id: `auto-trilha-${t.trilhaId}-${t.task.id}`,
        text: `Trilha ${t.trilhaId} — ${t.task.title}`,
        done: false,
        auto: true,
      });
    });
    return items;
  }, [nextTasks]);

  // Merge auto items with saved state from localStorage
  const todayTodos = useMemo((): DailyTodoItem[] => {
    const savedMap = new Map(savedTodos.map(t => [t.id, t]));
    const merged: DailyTodoItem[] = autoItems.map(item => {
      const savedItem = savedMap.get(item.id);
      return savedItem ? { ...item, done: savedItem.done } : item;
    });
    savedTodos.filter(t => !t.auto).forEach(t => merged.push(t));
    return merged;
  }, [savedTodos, autoItems]);

  const persistTodos = (updated: DailyTodoItem[]) => {
    setSavedTodos(updated);
    saveDailyTodos(today, updated);
  };

  const toggleTodo = (id: string) => {
    const updated = todayTodos.map(t => t.id === id ? { ...t, done: !t.done } : t);
    persistTodos(updated);
  };

  const addTodo = () => {
    const text = newTodoText.trim();
    if (!text) return;
    const newItem: DailyTodoItem = { id: `manual-${Date.now()}`, text, done: false, auto: false };
    const updated = [...todayTodos, newItem];
    persistTodos(updated);
    setNewTodoText("");
  };

  const removeTodo = (id: string) => {
    const updated = todayTodos.filter(t => t.id !== id);
    persistTodos(updated);
  };

  const doneCount = todayTodos.filter(t => t.done).length;
  const totalCount = todayTodos.length;
  const pct = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginBottom: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <h3 style={{ fontSize: 14, fontWeight: 700, margin: 0, color: "#4338ca", fontFamily: "'Space Grotesk', sans-serif" }}>Tarefas do dia</h3>
          <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 10, background: pct === 100 ? "#dcfce7" : "#eef2ff", color: pct === 100 ? "#059669" : "#4338ca", fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
            {doneCount}/{totalCount}
          </span>
        </div>
        <div style={{ fontSize: 11, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
          {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "2-digit" })}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 4, background: "#f1f5f9", borderRadius: 2, overflow: "hidden", marginBottom: 16 }}>
        <div style={{ height: "100%", width: `${pct}%`, background: pct === 100 ? "#059669" : "linear-gradient(90deg, #6366f1, #a78bfa)", borderRadius: 2, transition: "width 0.3s" }} />
      </div>

      {/* Todo items */}
      <div style={{ display: "grid", gap: 4, marginBottom: 14 }}>
        {todayTodos.map((item) => (
          <div key={item.id} style={{
            display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8,
            background: item.done ? "#f8fafc" : "white",
            border: `1px solid ${item.done ? "#e2e8f0" : "#eef2ff"}`,
            transition: "all 0.2s",
          }}>
            {/* Checkbox */}
            <button onClick={() => toggleTodo(item.id)} style={{
              width: 22, height: 22, borderRadius: 6, flexShrink: 0, cursor: "pointer",
              border: item.done ? "none" : "2px solid #cbd5e1",
              background: item.done ? "#059669" : "white",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", fontSize: 12, fontWeight: 700, transition: "all 0.2s",
            }}>{item.done ? "✓" : ""}</button>

            {/* Text */}
            <span style={{
              flex: 1, fontSize: 13, color: item.done ? "#94a3b8" : "#334155",
              textDecoration: item.done ? "line-through" : "none",
              fontWeight: item.auto ? 500 : 400,
              transition: "all 0.2s",
            }}>{item.text}</span>

            {/* Auto badge or delete */}
            {item.auto ? (
              <span style={{ fontSize: 9, padding: "1px 6px", borderRadius: 4, background: "#f1f5f9", color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>AUTO</span>
            ) : (
              <button onClick={() => removeTodo(item.id)} style={{
                background: "none", border: "none", color: "#cbd5e1", cursor: "pointer", fontSize: 14,
                padding: "2px 4px", borderRadius: 4, flexShrink: 0,
              }} onMouseEnter={e => (e.currentTarget.style.color = "#dc2626")} onMouseLeave={e => (e.currentTarget.style.color = "#cbd5e1")}>✕</button>
            )}
          </div>
        ))}
      </div>

      {/* Add manual todo */}
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={newTodoText}
          onChange={e => setNewTodoText(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") addTodo(); }}
          placeholder="Adicionar tarefa..."
          style={{
            flex: 1, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 8,
            fontSize: 13, outline: "none", color: "#334155", background: "#f8fafc",
          }}
        />
        <button onClick={addTodo} disabled={!newTodoText.trim()} style={{
          padding: "8px 16px", borderRadius: 8, border: "none",
          background: newTodoText.trim() ? "linear-gradient(135deg, #4f46e5, #7c3aed)" : "#f1f5f9",
          color: newTodoText.trim() ? "white" : "#cbd5e1",
          fontWeight: 600, fontSize: 13, cursor: newTodoText.trim() ? "pointer" : "default",
        }}>+</button>
      </div>
    </div>
  );
}

/* ─── DASHBOARD ─── */
function Dashboard({ data, save, totalHoursLogged, pctComplete, currentWeek, onLogStudy, onLogSimulado, onLogQuestions }: {
  data: StudyData; save: (d: StudyData) => Promise<void>; totalHoursLogged: number; pctComplete: number; currentWeek: number;
  onLogStudy: () => void; onLogSimulado: () => void; onLogQuestions: () => void;
}) {
  // Weekly questions count
  const weekStart = getWeekStartDate(currentWeek, PLAN.startDate);
  const weekEnd = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
  const weeklyQuestions = (data.question_entries || []).filter(e => {
    const d = new Date(e.date + "T12:00:00");
    return d >= weekStart && d < weekEnd;
  }).reduce((a, e) => a + e.total, 0);

  return (
    <div>
      {/* KPIs */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
        {[
          { label: "Horas totais", value: formatDecimalHours(totalHoursLogged), sub: `de 900h (${pctComplete}%)`, accent: "#6366f1" },
          { label: "Questões (semana)", value: weeklyQuestions, sub: `${data.questions_resolved} total`, accent: "#059669" },
          { label: "Simulados", value: data.simulados.length, sub: data.simulados.length > 0 ? `média: ${(data.simulados.reduce((a, b) => a + b.score, 0) / data.simulados.length).toFixed(0)}/100` : "nenhum ainda", accent: "#db2777" },
        ].map((kpi, i) => (
          <div key={i} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: "18px 16px", position: "relative", overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: kpi.accent }} />
            <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "'JetBrains Mono', monospace" }}>{kpi.label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, color: kpi.accent, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1.1, marginTop: 6 }}>{kpi.value}</div>
            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* WEEKLY PACING */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
        <WeeklyPacingRing data={data} currentWeek={currentWeek} target={PLAN.weeklyTarget} />
        <WeeklyQuestionsChart data={data} currentWeek={currentWeek} />
      </div>

      {/* PROGRESS BAR */}
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, marginBottom: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#334155" }}>Progresso geral</span>
          <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>{formatDecimalHours(totalHoursLogged)} / 900h</span>
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

      {/* DAILY TODO LIST */}
      <DailyTodoList data={data} />

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

/* ─── TEMPO TAB (GRÁFICOS BARRA + PIZZA) ─── */
function TempoTab({ data }: { data: StudyData }) {
  const currentWeek = getWeekNumber(PLAN.startDate);
  type ViewMode = "semana" | "mes" | "total";
  const [viewMode, setViewMode] = useState<ViewMode>("semana");
  const [weekOffset, setWeekOffset] = useState(0); // 0 = current week, -1 = last week, etc.

  // Compute date range based on viewMode
  const { rangeStart, rangeEnd, rangeLabel } = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (viewMode === "total") {
      const [y, m, d] = PLAN.startDate.split("-").map(Number);
      const start = new Date(y, m - 1, d);
      const end = new Date(now.getTime() + 24 * 60 * 60 * 1000);
      return { rangeStart: start, rangeEnd: end, rangeLabel: "Total" };
    }

    if (viewMode === "mes") {
      const monthStart = new Date(now.getFullYear(), now.getMonth() + weekOffset, 1);
      const monthEnd = new Date(now.getFullYear(), now.getMonth() + weekOffset + 1, 1);
      const label = monthStart.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
      return { rangeStart: monthStart, rangeEnd: monthEnd, rangeLabel: label.charAt(0).toUpperCase() + label.slice(1) };
    }

    // semana
    const targetWeek = Math.max(1, currentWeek + weekOffset);
    const wStart = getWeekStartDate(targetWeek, PLAN.startDate);
    const wEnd = new Date(wStart.getTime() + 7 * 24 * 60 * 60 * 1000);
    const fmt = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const endDisplay = new Date(wEnd.getTime() - 24 * 60 * 60 * 1000);
    return { rangeStart: wStart, rangeEnd: wEnd, rangeLabel: `${fmt(wStart)} a ${fmt(endDisplay)}` };
  }, [viewMode, weekOffset, currentWeek]);

  // Filter study entries in range
  const entries = useMemo(() => {
    return (data.study_entries || []).filter(e => {
      const d = new Date(e.date + "T12:00:00");
      return d >= rangeStart && d < rangeEnd;
    });
  }, [data.study_entries, rangeStart, rangeEnd]);

  // Group by discipline
  const byDisc = useMemo(() => {
    const map: Record<string, number> = {};
    entries.forEach(e => {
      const discId = e.discipline;
      map[discId] = (map[discId] || 0) + e.minutes;
    });
    return Object.entries(map)
      .map(([id, mins]) => ({ id, mins, disc: PLAN.disciplines.find(d => d.id === id) }))
      .sort((a, b) => b.mins - a.mins);
  }, [entries]);

  // Group by day (for bar chart)
  const byDay = useMemo(() => {
    const map: Record<string, Record<string, number>> = {};
    entries.forEach(e => {
      if (!map[e.date]) map[e.date] = {};
      map[e.date][e.discipline] = (map[e.date][e.discipline] || 0) + e.minutes;
    });
    // Generate all days in range
    const days: string[] = [];
    const d = new Date(rangeStart);
    while (d < rangeEnd) {
      days.push(d.toISOString().slice(0, 10));
      d.setDate(d.getDate() + 1);
    }
    // For "total" and "mes" with many days, only show days with data
    if (viewMode === "total" || (viewMode === "mes" && days.length > 31)) {
      return days.filter(day => map[day]).map(day => ({ day, data: map[day] || {} }));
    }
    return days.map(day => ({ day, data: map[day] || {} }));
  }, [entries, rangeStart, rangeEnd, viewMode]);

  const totalMins = byDisc.reduce((a, b) => a + b.mins, 0);
  const maxDayMins = Math.max(1, ...byDay.map(d => Object.values(d.data).reduce((a, b) => a + b, 0)));

  // All disc colors
  const getDiscColor = (id: string) => PLAN.disciplines.find(d => d.id === id)?.color || "#94a3b8";
  const getDiscName = (id: string) => PLAN.disciplines.find(d => d.id === id)?.name || id;

  // Navigation
  const canGoBack = viewMode !== "total";
  const canGoForward = viewMode !== "total" && weekOffset < 0;

  const handlePrev = () => setWeekOffset(o => o - 1);
  const handleNext = () => setWeekOffset(o => Math.min(0, o + 1));
  const switchMode = (m: ViewMode) => { setViewMode(m); setWeekOffset(0); };

  // PIE CHART SVG
  const pieSlices = useMemo(() => {
    if (totalMins === 0) return [];
    let cumulative = 0;
    return byDisc.map(({ id, mins }) => {
      const startAngle = (cumulative / totalMins) * 360;
      cumulative += mins;
      const endAngle = (cumulative / totalMins) * 360;
      const pct = (mins / totalMins) * 100;
      return { id, mins, startAngle, endAngle, pct, color: getDiscColor(id) };
    });
  }, [byDisc, totalMins]);

  const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const describeArc = (cx: number, cy: number, r: number, start: number, end: number) => {
    if (end - start >= 359.99) {
      // Full circle
      const m1 = polarToCartesian(cx, cy, r, start);
      const m2 = polarToCartesian(cx, cy, r, start + 180);
      return `M ${m1.x} ${m1.y} A ${r} ${r} 0 1 1 ${m2.x} ${m2.y} A ${r} ${r} 0 1 1 ${m1.x} ${m1.y}`;
    }
    const s = polarToCartesian(cx, cy, r, start);
    const e = polarToCartesian(cx, cy, r, end);
    const largeArc = end - start > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y} Z`;
  };

  return (
    <div>
      {/* Mode selector */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20, flexWrap: "wrap" }}>
        {(["semana", "mes", "total"] as ViewMode[]).map(m => (
          <button key={m} onClick={() => switchMode(m)} style={{
            padding: "8px 20px", borderRadius: 8, border: viewMode === m ? "2px solid #4338ca" : "1px solid #e2e8f0",
            background: viewMode === m ? "#eef2ff" : "white", color: viewMode === m ? "#4338ca" : "#64748b",
            fontWeight: 600, fontSize: 13, cursor: "pointer", textTransform: "capitalize",
            fontFamily: "'Space Grotesk', sans-serif",
          }}>{m === "mes" ? "Mês" : m.charAt(0).toUpperCase() + m.slice(1)}</button>
        ))}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24 }}>
        {canGoBack && (
          <button onClick={handlePrev} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e2e8f0", background: "white", cursor: "pointer", fontSize: 18, color: "#4338ca", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>◀</button>
        )}
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#1e293b", fontFamily: "'Space Grotesk', sans-serif" }}>{rangeLabel}</div>
        </div>
        {canGoForward && (
          <button onClick={handleNext} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e2e8f0", background: "white", cursor: "pointer", fontSize: 18, color: "#4338ca", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>▶</button>
        )}
      </div>

      {/* CONTENT: Two columns on desktop */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
        {/* BAR CHART */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)", minHeight: 300 }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: "#4338ca", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.5px" }}>Linha do Tempo</h4>
          {byDay.length === 0 || totalMins === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "#94a3b8", fontSize: 13 }}>Nenhum registro neste período.</div>
          ) : (
            <div>
              {/* Y-axis labels + bars */}
              <div style={{ display: "flex", gap: 4, position: "relative" }}>
                {/* Y-axis */}
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: 220, paddingBottom: 20, width: 35, flexShrink: 0 }}>
                  {[maxDayMins, Math.round(maxDayMins * 0.75), Math.round(maxDayMins * 0.5), Math.round(maxDayMins * 0.25), 0].map((v, i) => (
                    <div key={i} style={{ fontSize: 9, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace", textAlign: "right" }}>{formatMinutes(v)}</div>
                  ))}
                </div>
                {/* Bars */}
                <div style={{ flex: 1, display: "flex", gap: 2, alignItems: "stretch", height: 220, borderBottom: "1px solid #e2e8f0", position: "relative" }}>
                  {/* Grid lines */}
                  {[0.25, 0.5, 0.75, 1].map(pct => (
                    <div key={pct} style={{ position: "absolute", bottom: `${pct * 100}%`, left: 0, right: 0, borderTop: "1px dashed #f1f5f9", pointerEvents: "none" }} />
                  ))}
                  {byDay.map(({ day, data: dayData }) => {
                    const dayTotal = Object.values(dayData).reduce((a, b) => a + b, 0);
                    const barPx = dayTotal > 0 ? Math.max(4, Math.round((dayTotal / maxDayMins) * 200)) : 0;
                    const segments = Object.entries(dayData).sort((a, b) => b[1] - a[1]);
                    return (
                      <div key={day} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", minWidth: 0 }}>
                        <div style={{ width: "80%", maxWidth: 44, height: barPx, display: "flex", flexDirection: "column-reverse", borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
                          {segments.map(([discId, mins]) => (
                            <div key={discId} style={{ width: "100%", flex: `${mins} 0 0%`, background: getDiscColor(discId), minHeight: mins > 0 ? 3 : 0 }} />
                          ))}
                        </div>
                        <div style={{ fontSize: 8, color: "#94a3b8", marginTop: 4, fontFamily: "'JetBrains Mono', monospace", writingMode: byDay.length > 10 ? "vertical-rl" : "horizontal-tb", transform: byDay.length > 10 ? "rotate(180deg)" : "none" }}>
                          {day.slice(8, 10)}/{day.slice(5, 7)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* PIE CHART + Legend */}
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: "#4338ca", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.5px" }}>Tempo de Estudo</h4>

          {/* Total */}
          <div style={{ textAlign: "center", marginBottom: 12 }}>
            <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: "#1e293b" }}>{formatMinutes(totalMins)}</div>
            <div style={{ fontSize: 11, color: "#94a3b8" }}>Tempo total no período</div>
          </div>

          {totalMins === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "#94a3b8", fontSize: 13 }}>Sem dados.</div>
          ) : (
            <>
              {/* SVG Pie */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <svg width="200" height="200" viewBox="0 0 200 200">
                  {pieSlices.map((slice) => (
                    <path key={slice.id} d={describeArc(100, 100, 90, slice.startAngle, slice.endAngle)} fill={slice.color} stroke="white" strokeWidth="2" />
                  ))}
                </svg>
              </div>

              {/* Legend */}
              <div style={{ display: "grid", gap: 8 }}>
                {byDisc.map(({ id, mins }) => {
                  const pct = ((mins / totalMins) * 100).toFixed(1);
                  return (
                    <div key={id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0" }}>
                      <div style={{ width: 14, height: 14, borderRadius: 4, background: getDiscColor(id), flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <span style={{ fontSize: 12, fontWeight: 600, color: "#334155" }}>{getDiscName(id)}</span>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: "#1e293b", fontFamily: "'JetBrains Mono', monospace" }}>{formatMinutes(mins)}</span>
                        <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: 6 }}>({pct}%)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* BY CATEGORY (if any entries have categories) */}
      {entries.some(e => e.category) && (
        <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 12, padding: 20, boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h4 style={{ fontSize: 13, fontWeight: 700, color: "#4338ca", marginBottom: 16, fontFamily: "'JetBrains Mono', monospace", textTransform: "uppercase", letterSpacing: "0.5px" }}>Por Tipo de Atividade</h4>
          <div style={{ display: "grid", gap: 8 }}>
            {(() => {
              const catMap: Record<string, number> = {};
              entries.forEach(e => {
                const cat = e.category || "estudo";
                catMap[cat] = (catMap[cat] || 0) + e.minutes;
              });
              const catEntries = Object.entries(catMap).sort((a, b) => b[1] - a[1]);
              const maxCat = Math.max(1, ...catEntries.map(([, v]) => v));
              const catColors: Record<string, string> = { estudo: "#6366f1", jurisprudencia: "#d97706", lei_seca: "#059669", questoes: "#2563eb", simulado: "#db2777", revisao: "#7c3aed" };
              return catEntries.map(([cat, mins]) => {
                const label = STUDY_CATEGORIES.find(c => c.id === cat);
                return (
                  <div key={cat}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                      <span style={{ fontSize: 12, color: "#334155", fontWeight: 500 }}>{label ? `${label.icon} ${label.label}` : cat}</span>
                      <span style={{ fontSize: 11, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>{formatMinutes(mins)} ({((mins / totalMins) * 100).toFixed(0)}%)</span>
                    </div>
                    <div style={{ height: 12, background: "#f1f5f9", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(mins / maxCat) * 100}%`, background: catColors[cat] || "#94a3b8", borderRadius: 4, transition: "width 0.3s" }} />
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      )}
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
                <div style={{ fontSize: 18, fontWeight: 700, color: d.color, fontFamily: "'Space Grotesk', sans-serif" }}>{formatDecimalHours(logged)}</div>
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
function getLegEntry(data: StudyData, id: string): { status: number; date1?: string; date2?: string; notes?: string } {
  const v = data.legislation_progress[id];
  if (!v) return { status: 0 };
  if (typeof v === "number") return { status: v };
  return v as { status: number; date1?: string; date2?: string; notes?: string };
}

function Legislacao({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [notesDraft, setNotesDraft] = useState<Record<string, string>>({});

  const priorityConfig = [
    { p: 1, label: "Prioridade 1 — Leitura integral obrigatória", barColor: "#6366f1" },
    { p: 2, label: "Prioridade 2 — Leitura dirigida", barColor: "#d97706" },
    { p: 3, label: "Prioridade 3 — Artigos específicos", barColor: "#64748b" },
  ];

  const today = new Date().toISOString().slice(0, 10);

  const saveLeg = async (id: string, entry: { status: number; date1?: string; date2?: string; notes?: string }) => {
    await save({ ...data, legislation_progress: { ...data.legislation_progress, [id]: entry } });
  };

  return (
    <div>
      {/* Progress bars */}
      <div style={{ display: "grid", gap: 10, marginBottom: 28 }}>
        {priorityConfig.map(({ p, label, barColor }) => {
          const laws = PLAN.legislation.filter((l) => l.priority === p);
          const done = laws.filter((l) => getLegEntry(data, l.id).status >= 1).length;
          const revised = laws.filter((l) => getLegEntry(data, l.id).status >= 2).length;
          const pct = laws.length ? Math.round((done / laws.length) * 100) : 0;
          return (
            <div key={p} style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 10, padding: "12px 16px", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: barColor, textTransform: "uppercase", letterSpacing: "0.5px", fontFamily: "'JetBrains Mono', monospace" }}>
                  {label}
                </span>
                <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                  {done}/{laws.length} lidas · {revised} revisadas · {pct}%
                </span>
              </div>
              <div style={{ height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: barColor, borderRadius: 3, transition: "width 0.3s" }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Legislation lists */}
      {priorityConfig.map(({ p, label, barColor }) => (
        <div key={p} style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: barColor, textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>
            {label}
          </h3>
          <div style={{ display: "grid", gap: 6 }}>
            {PLAN.legislation.filter((l) => l.priority === p).map((law) => {
              const entry = getLegEntry(data, law.id);
              const isExpanded = expanded === law.id;
              const daysSince = entry.date1 ? Math.floor((Date.now() - new Date(entry.date1).getTime()) / 86400000) : null;
              const daysSinceRevision = entry.date2 ? Math.floor((Date.now() - new Date(entry.date2).getTime()) / 86400000) : null;

              return (
                <div key={law.id} style={{ background: "white", border: `1px solid ${entry.status >= 2 ? "#a7f3d0" : entry.status >= 1 ? "#fde68a" : "#e2e8f0"}`, borderRadius: 10, boxShadow: "0 1px 2px rgba(0,0,0,0.03)", overflow: "hidden" }}>
                  <div
                    onClick={() => setExpanded(isExpanded ? null : law.id)}
                    style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                  >
                    {/* Status icon */}
                    <span style={{ fontSize: 18, flexShrink: 0 }}>
                      {entry.status >= 2 ? "✅" : entry.status >= 1 ? "☑️" : "⬜"}
                    </span>

                    {/* Name */}
                    <span style={{ fontSize: 13, flex: 1, color: "#334155", opacity: entry.status >= 2 ? 0.6 : 1 }}>
                      {law.name}
                    </span>

                    {/* Cycle badge */}
                    {law.cycle && (
                      <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "rgba(99,102,241,0.1)", color: "#4338ca", fontWeight: 600, fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                        {law.cycle}
                      </span>
                    )}

                    {/* Date badges */}
                    {entry.status >= 1 && entry.date1 && (
                      <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#fef3c7", color: "#92400e", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                        1ª {entry.date1.slice(5)}
                      </span>
                    )}
                    {entry.status >= 2 && entry.date2 && (
                      <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#d1fae5", color: "#065f46", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                        2ª {entry.date2.slice(5)}
                      </span>
                    )}

                    {/* Days since indicator */}
                    {entry.status === 1 && daysSince !== null && daysSince > 14 && (
                      <span style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "#fef2f2", color: "#dc2626", fontFamily: "'JetBrains Mono', monospace", flexShrink: 0 }}>
                        {daysSince}d atrás
                      </span>
                    )}

                    <span style={{ fontSize: 10, color: "#94a3b8", flexShrink: 0 }}>{isExpanded ? "▲" : "▼"}</span>
                  </div>

                  {/* Expanded panel */}
                  {isExpanded && (
                    <div style={{ padding: "0 16px 14px", borderTop: "1px solid #f1f5f9" }}>
                      <div style={{ display: "flex", gap: 8, marginTop: 12, marginBottom: 12, flexWrap: "wrap" }}>
                        {/* Status toggle buttons */}
                        {[
                          { s: 0, label: "Pendente", icon: "⬜", color: "#94a3b8", bg: "#f1f5f9" },
                          { s: 1, label: "1ª Leitura", icon: "☑️", color: "#d97706", bg: "#fef3c7" },
                          { s: 2, label: "Revisão", icon: "✅", color: "#059669", bg: "#d1fae5" },
                        ].map(({ s, label, icon, color, bg }) => (
                          <button key={s} onClick={async () => {
                            const newEntry = { ...entry, status: s };
                            if (s >= 1 && !entry.date1) newEntry.date1 = today;
                            if (s >= 2 && !entry.date2) newEntry.date2 = today;
                            if (s === 0) { newEntry.date1 = undefined; newEntry.date2 = undefined; }
                            if (s === 1) { newEntry.date2 = undefined; }
                            await saveLeg(law.id, newEntry);
                          }} style={{
                            padding: "6px 14px", borderRadius: 8, border: entry.status === s ? `2px solid ${color}` : "1px solid #e2e8f0",
                            background: entry.status === s ? bg : "white", cursor: "pointer",
                            fontSize: 12, fontWeight: entry.status === s ? 700 : 400, color: entry.status === s ? color : "#64748b",
                            display: "flex", alignItems: "center", gap: 4,
                          }}>
                            {icon} {label}
                          </button>
                        ))}
                      </div>

                      {/* Date fields */}
                      {entry.status >= 1 && (
                        <div style={{ display: "flex", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                          <label style={{ fontSize: 11, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
                            1ª Leitura:
                            <input type="date" value={entry.date1 || today} onChange={async (e) => {
                              await saveLeg(law.id, { ...entry, date1: e.target.value });
                            }} style={{ fontSize: 12, padding: "4px 8px", borderRadius: 6, border: "1px solid #e2e8f0", fontFamily: "'JetBrains Mono', monospace" }} />
                          </label>
                          {entry.status >= 2 && (
                            <label style={{ fontSize: 11, color: "#64748b", display: "flex", alignItems: "center", gap: 6 }}>
                              Revisão:
                              <input type="date" value={entry.date2 || today} onChange={async (e) => {
                                await saveLeg(law.id, { ...entry, date2: e.target.value });
                              }} style={{ fontSize: 12, padding: "4px 8px", borderRadius: 6, border: "1px solid #e2e8f0", fontFamily: "'JetBrains Mono', monospace" }} />
                            </label>
                          )}
                        </div>
                      )}

                      {/* Days since indicators */}
                      {entry.status >= 1 && (
                        <div style={{ display: "flex", gap: 12, marginBottom: 10, fontSize: 11, color: "#64748b" }}>
                          {daysSince !== null && <span>Dias desde 1ª leitura: <strong style={{ color: daysSince > 30 ? "#dc2626" : daysSince > 14 ? "#d97706" : "#059669" }}>{daysSince}d</strong></span>}
                          {daysSinceRevision !== null && <span>Dias desde revisão: <strong style={{ color: daysSinceRevision > 30 ? "#dc2626" : daysSinceRevision > 14 ? "#d97706" : "#059669" }}>{daysSinceRevision}d</strong></span>}
                          {entry.status === 1 && daysSince !== null && daysSince > 14 && (
                            <span style={{ color: "#dc2626", fontWeight: 600 }}>⚠ Revisar!</span>
                          )}
                        </div>
                      )}

                      {/* Notes */}
                      <div>
                        <textarea
                          placeholder="Notas: artigos difíceis, dúvidas..."
                          value={notesDraft[law.id] !== undefined ? notesDraft[law.id] : (entry.notes || "")}
                          onChange={(e) => setNotesDraft({ ...notesDraft, [law.id]: e.target.value })}
                          onBlur={async () => {
                            if (notesDraft[law.id] !== undefined && notesDraft[law.id] !== (entry.notes || "")) {
                              await saveLeg(law.id, { ...entry, notes: notesDraft[law.id] });
                            }
                          }}
                          style={{ width: "100%", minHeight: 60, padding: "8px 10px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12, resize: "vertical", fontFamily: "inherit", color: "#334155", lineHeight: 1.5 }}
                        />
                      </div>
                    </div>
                  )}
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

/* ─── LOG MODAL (COM CATEGORIAS) ─── */
const STUDY_CATEGORIES = [
  { id: "estudo", label: "Estudo regular", icon: "📖" },
  { id: "jurisprudencia", label: "Jurisprudência", icon: "⚖️" },
  { id: "lei_seca", label: "Lei seca", icon: "📜" },
  { id: "questoes", label: "Questões", icon: "✏️" },
  { id: "simulado", label: "Simulado", icon: "📝" },
  { id: "revisao", label: "Revisão", icon: "🔄" },
];

function LogModal({ data, save, onClose }: { data: StudyData; save: (d: StudyData) => Promise<void>; onClose: () => void }) {
  const [disc, setDisc] = useState("notarial");
  const [category, setCategory] = useState("estudo");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const handleSave = async () => {
    const hVal = parseInt(hours) || 0;
    const mVal = parseInt(minutes) || 0;
    const totalMins = (hVal * 60) + mVal;

    if (totalMins <= 0) return;

    const hDecimal = totalMins / 60;

    const weekKey = getWeekKey(new Date(), PLAN.startDate);
    const currentWeekHours = { ...(data.weekly_hours[weekKey] || {}) };
    currentWeekHours[disc] = (currentWeekHours[disc] || 0) + hDecimal;

    const newEntry: StudyEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().slice(0, 10),
      discipline: disc,
      minutes: totalMins,
      category,
    };

    await save({
      ...data,
      discipline_hours: { ...data.discipline_hours, [disc]: (data.discipline_hours[disc] || 0) + hDecimal },
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

        {/* Category selector */}
        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 6 }}>Tipo de atividade</label>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {STUDY_CATEGORIES.map(c => (
            <button key={c.id} onClick={() => setCategory(c.id)} style={{
              padding: "6px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
              border: category === c.id ? "2px solid #4338ca" : "1px solid #e2e8f0",
              background: category === c.id ? "#eef2ff" : "white",
              color: category === c.id ? "#4338ca" : "#64748b",
            }}>{c.icon} {c.label}</button>
          ))}
        </div>

        <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Disciplina</label>
        <select value={disc} onChange={(e) => setDisc(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 14, marginBottom: 16, outline: "none", background: "#f8fafc" }}>
          {PLAN.disciplines.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
        </select>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
          <div>
            <label style={{ fontSize: 11, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Horas</label>
            <input type="number" min="0" step="1" value={hours} onChange={(e) => setHours(e.target.value)} placeholder="0" style={inputStyle} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Minutos</label>
            <input type="number" min="0" max="59" step="1" value={minutes} onChange={(e) => setMinutes(e.target.value)} placeholder="0" style={inputStyle} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
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
  const [isSimulado, setIsSimulado] = useState(false);
  const [total, setTotal] = useState("");
  const [correct, setCorrect] = useState("");

  const handleSave = async () => {
    const t = parseInt(total) || 0;
    const c = Math.min(parseInt(correct) || 0, t);
    if (t <= 0) return;

    const entry: QuestionEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString().slice(0, 10),
      discipline: isSimulado ? "simulado" : disc,
      total: t,
      correct: c,
    };

    await save({
      ...data,
      questions_resolved: (data.questions_resolved || 0) + t,
      question_entries: [...(data.question_entries || []), entry],
    });
    onClose();
  };

  const inputStyle = { width: "100%", padding: "10px 10px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 16, fontWeight: 600 as const, textAlign: "center" as const, outline: "none", fontFamily: "'JetBrains Mono', monospace", boxSizing: "border-box" as const, background: "#f8fafc" };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, padding: 16, backdropFilter: "blur(4px)" }} onClick={onClose}>
      <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: 16, padding: 28, width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }} onClick={(e) => e.stopPropagation()}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "'Space Grotesk', sans-serif", color: "#1e293b" }}>Registrar questões</h3>

        {/* Simulado toggle */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          <button onClick={() => setIsSimulado(false)} style={{
            flex: 1, padding: "10px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
            border: !isSimulado ? "2px solid #059669" : "1px solid #e2e8f0",
            background: !isSimulado ? "#dcfce7" : "white", color: !isSimulado ? "#059669" : "#64748b",
          }}>Por disciplina</button>
          <button onClick={() => setIsSimulado(true)} style={{
            flex: 1, padding: "10px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
            border: isSimulado ? "2px solid #db2777" : "1px solid #e2e8f0",
            background: isSimulado ? "#fce7f3" : "white", color: isSimulado ? "#db2777" : "#64748b",
          }}>Simulado</button>
        </div>

        {!isSimulado && (
          <>
            <label style={{ fontSize: 12, color: "#64748b", fontWeight: 600, display: "block", marginBottom: 4 }}>Disciplina</label>
            <select value={disc} onChange={(e) => setDisc(e.target.value)} style={{ width: "100%", padding: "10px 12px", border: "1px solid #e2e8f0", borderRadius: 8, color: "#1e293b", fontSize: 14, marginBottom: 16, outline: "none", background: "#f8fafc" }}>
              {PLAN.disciplines.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
            </select>
          </>
        )}

        {isSimulado && (
          <div style={{ background: "#fce7f3", borderRadius: 8, padding: "10px 14px", marginBottom: 16, fontSize: 12, color: "#9d174d" }}>
            Registre o total de questões e acertos do simulado.
          </div>
        )}

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
          <button onClick={handleSave} style={{ flex: 1, padding: "10px", background: isSimulado ? "linear-gradient(135deg, #db2777, #ec4899)" : "linear-gradient(135deg, #059669, #10b981)", border: "none", borderRadius: 8, color: "white", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Salvar</button>
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
      acc + day.tasks.filter(t => data.completed_tasks && data.completed_tasks[`${trilha.id}:${t.id}`]).length, 0);
  }, [trilha, data.completed_tasks]);

  const totalTasks = trilha ? trilha.days.reduce((a, d) => a + d.tasks.length, 0) : 0;

  const toggleTask = async (taskId: number) => {
    const key = `${trilha.id}:${taskId}`;
    const newCompleted = { ...(data.completed_tasks || {}) };
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
          const tDone = t.days.reduce((a, d) => a + d.tasks.filter(tk => data.completed_tasks && data.completed_tasks[`${t.id}:${tk.id}`]).length, 0);
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
              const isDone = !!(data.completed_tasks && data.completed_tasks[`${trilha.id}:${task.id}`]);
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
                        <span style={{ fontSize: 10, color: "#94a3b8", marginLeft: "auto" }}>{isExpanded ? "▲ Esconder" : "▼ Ler mais"}</span>
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", textDecoration: isDone ? "line-through" : "none" }}>{task.title}</div>
                      {task.description && (
                        <div style={{
                          fontSize: isExpanded ? 15 : 13,
                          color: isExpanded ? "#334155" : "#64748b",
                          marginTop: 8,
                          lineHeight: 1.6,
                          whiteSpace: "pre-wrap",
                          background: isExpanded ? "#f8fafc" : "transparent",
                          padding: isExpanded ? "12px" : "0",
                          borderRadius: 8,
                          border: isExpanded ? "1px solid #e2e8f0" : "none"
                        }}>
                          {isExpanded ? (
                            <span dangerouslySetInnerHTML={{ __html: task.description.replace(/\*\*(.+?)\*\*/g, '<strong style="color:#1e293b">$1</strong>') }} />
                          ) : (
                            task.description.replace(/\*\*/g, "").substring(0, 120) + (task.description.length > 120 ? "..." : "")
                          )}
                        </div>
                      )}
                      {task.link && <a href={task.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ fontSize: 12, color: "#4f46e5", textDecoration: "none", fontWeight: 600, marginTop: 8, display: "inline-block" }}>Abrir no LDI &#8599;</a>}
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

/* ─── HISTÓRICO UNIFICADO ─── */
function HistoricoTab({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  const handleDeleteStudy = async (entry: StudyEntry) => {
    if (!window.confirm(`Excluir registro de ${formatMinutes(entry.minutes)}?`)) return;
    const newEntries = (data.study_entries || []).filter(e => e.id !== entry.id);
    const h = entry.minutes / 60;
    const newDiscHours = { ...data.discipline_hours };
    newDiscHours[entry.discipline] = Math.max(0, (newDiscHours[entry.discipline] || 0) - h);

    // Also fix weekly_hours
    const dateObj = new Date(entry.date + "T12:00:00");
    const weekKey = getWeekKey(dateObj, PLAN.startDate);
    const newWeeklyHours = { ...data.weekly_hours };
    if (newWeeklyHours[weekKey]) {
      newWeeklyHours[weekKey] = { ...newWeeklyHours[weekKey] };
      newWeeklyHours[weekKey][entry.discipline] = Math.max(0, (newWeeklyHours[weekKey][entry.discipline] || 0) - h);
    }

    await save({ ...data, study_entries: newEntries, discipline_hours: newDiscHours, weekly_hours: newWeeklyHours });
  };

  const handleDeleteQuestion = async (entry: QuestionEntry) => {
    if (!window.confirm(`Excluir registro de ${entry.total} questões?`)) return;
    const newEntries = (data.question_entries || []).filter(e => e.id !== entry.id);
    await save({
      ...data,
      questions_resolved: Math.max(0, (data.questions_resolved || 0) - entry.total),
      question_entries: newEntries
    });
  };

  const handleDeleteSimulado = async (index: number) => {
    const sim = data.simulados[index];
    if (!window.confirm(`Excluir simulado "${sim.name}" (${sim.score}/100)?`)) return;
    const newSimulados = [...data.simulados];
    newSimulados.splice(index, 1);
    await save({ ...data, simulados: newSimulados });
  };

  const handleSync = async () => {
    if (!window.confirm("Isso vai recalcular todas as horas e questões a partir do histórico. Entradas sem registro serão removidas. Continuar?")) return;

    const newDiscHours: Record<string, number> = {};
    const newWeeklyHours: Record<string, Record<string, number>> = {};

    (data.study_entries || []).forEach((entry: StudyEntry) => {
      const h = entry.minutes / 60;
      newDiscHours[entry.discipline] = (newDiscHours[entry.discipline] || 0) + h;
      const dateObj = new Date(entry.date + "T12:00:00");
      const weekKey = getWeekKey(dateObj, PLAN.startDate);
      if (!newWeeklyHours[weekKey]) newWeeklyHours[weekKey] = {};
      newWeeklyHours[weekKey][entry.discipline] = (newWeeklyHours[weekKey][entry.discipline] || 0) + h;
    });

    const newTotalQ = (data.question_entries || []).reduce((acc, curr) => acc + curr.total, 0);

    await save({
      ...data,
      discipline_hours: newDiscHours,
      weekly_hours: newWeeklyHours,
      questions_resolved: newTotalQ
    });
  };

  // Combined list: study + questions + simulados
  const combinedEntries: Array<{id: string; date: string; type: 'study' | 'question' | 'simulado'; data: any; originalIndex?: number}> = [
    ...(data.study_entries || []).map(e => ({ id: e.id, date: e.date, type: 'study' as const, data: e })),
    ...(data.question_entries || []).map(e => ({ id: e.id, date: e.date, type: 'question' as const, data: e })),
    ...(data.simulados || []).map((s, i) => ({ id: `sim-${i}-${s.date}`, date: s.date, type: 'simulado' as const, data: s, originalIndex: i })),
  ].sort((a, b) => {
    // Sort by date desc, then by id desc
    if (a.date !== b.date) return b.date.localeCompare(a.date);
    return b.id.localeCompare(a.id);
  });

  const categoryLabel = (entry: StudyEntry) => {
    const cat = STUDY_CATEGORIES.find(c => c.id === entry.category);
    return cat ? `${cat.icon} ${cat.label}` : "📖 Estudo";
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 10 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#334155", margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>Linha do Tempo</h3>
        <button onClick={handleSync} style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
          Recalcular totais
        </button>
      </div>

      {combinedEntries.length === 0 ? (
        <div style={{ textAlign: "center", padding: 60, color: "#94a3b8", background: "white", borderRadius: 12, border: "1px solid #e2e8f0" }}>
          <div>Nenhum registro encontrado.</div>
        </div>
      ) : (
        <div style={{ display: "grid", gap: 10 }}>
          {combinedEntries.map(entry => {
            const isStudy = entry.type === 'study';
            const isQuestion = entry.type === 'question';
            const isSimulado = entry.type === 'simulado';

            const discName = isSimulado ? entry.data.name
              : (entry.data.discipline === "simulado" ? "Simulado"
                : (PLAN.disciplines.find(d => d.id === entry.data.discipline)?.name || entry.data.discipline));

            return (
              <div key={entry.id} style={{
                background: "white", border: `1px solid ${isSimulado ? "#f9a8d4" : "#e2e8f0"}`, borderRadius: 10, padding: "14px 16px",
                display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                flexWrap: "wrap", gap: 10
              }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: isStudy ? "rgba(99,102,241,0.1)" : isQuestion ? "rgba(5,150,105,0.1)" : "rgba(219,39,119,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0
                  }}>
                    {isStudy ? "🕒" : isQuestion ? "✅" : "📝"}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#334155" }}>{discName}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
                      {entry.date} {isStudy ? `• ${categoryLabel(entry.data)}` : isQuestion ? "• Questões" : "• Simulado"}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                  <div style={{ textAlign: "right" }}>
                    {isStudy && (
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#4f46e5", fontFamily: "'Space Grotesk', sans-serif" }}>{formatMinutes(entry.data.minutes)}</div>
                    )}
                    {isQuestion && (
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#059669", fontFamily: "'Space Grotesk', sans-serif" }}>{entry.data.correct}/{entry.data.total} <span style={{ fontSize: 10, color: "#94a3b8" }}>acertos</span></div>
                    )}
                    {isSimulado && (
                      <div style={{ fontSize: 16, fontWeight: 700, color: entry.data.score >= 60 ? "#059669" : entry.data.score >= 50 ? "#d97706" : "#dc2626", fontFamily: "'Space Grotesk', sans-serif" }}>{entry.data.score}/100</div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      if (isStudy) handleDeleteStudy(entry.data);
                      else if (isQuestion) handleDeleteQuestion(entry.data);
                      else if (isSimulado && entry.originalIndex !== undefined) handleDeleteSimulado(entry.originalIndex);
                    }}
                    style={{ background: "#fef2f2", color: "#dc2626", border: "1px solid #fecaca", borderRadius: 6, padding: "6px 12px", cursor: "pointer", fontSize: 12, fontWeight: 600 }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

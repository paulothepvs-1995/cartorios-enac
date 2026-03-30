"use client";

import { useState, useEffect, useCallback } from "react";
import { PLAN, getWeekNumber, getCurrentPhase, daysUntilExam } from "@/lib/plan";
import { loadData, saveData, type StudyData, type Simulado } from "@/lib/supabase";

const defaultData = (): StudyData => ({
  discipline_hours: {},
  questions_resolved: 0,
  flashcards_created: 0,
  simulados: [],
  legislation_progress: {},
});

export default function App() {
  const [data, setData] = useState<StudyData>(defaultData());
  const [loaded, setLoaded] = useState(false);
  const [tab, setTab] = useState("dashboard");
  const [logModal, setLogModal] = useState(false);
  const [simModal, setSimModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await loadData();
        if (result) {
          setData({ ...defaultData(), ...result });
        }
      } catch (e) {
        console.log("No saved data, starting fresh");
      }
      setLoaded(true);
    })();
  }, []);

  const save = useCallback(async (newData: StudyData) => {
    setData(newData);
    try {
      await saveData(newData);
    } catch (e) {
      console.error("Save failed:", e);
    }
  }, []);

  const currentWeek = getWeekNumber(PLAN.startDate);
  const phase = getCurrentPhase(currentWeek);
  const daysLeft = daysUntilExam();

  const totalHoursLogged = Object.values(data.discipline_hours).reduce((a, b) => a + b, 0);
  const pctComplete = Math.min(100, Math.round((totalHoursLogged / 900) * 100));

  if (!loaded)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          background: "#0a0a0f",
          color: "#e2e8f0",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <div>Carregando...</div>
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0f 0%, #111827 50%, #0f172a 100%)",
        color: "#e2e8f0",
        fontFamily: "'Segoe UI', -apple-system, sans-serif",
        padding: 0,
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
          borderBottom: "1px solid rgba(99,102,241,0.3)",
          padding: "20px 24px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                margin: 0,
                letterSpacing: "-0.5px",
              }}
            >
              <span style={{ color: "#818cf8" }}>&#9878;</span> Cart&oacute;riosENAC
            </h1>
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                marginTop: 2,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              ENAC 4 &mdash; {daysLeft}d restantes &mdash; Semana {currentWeek}/{PLAN.totalWeeks}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                background: phase.color,
                padding: "6px 14px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              FASE {phase.id}: {phase.name.toUpperCase()}
            </div>
          </div>
        </div>
      </div>

      {/* TABS */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            gap: 4,
            padding: "16px 0 0",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {["dashboard", "disciplinas", "legislação", "simulados"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "10px 18px",
                background: tab === t ? "rgba(99,102,241,0.15)" : "transparent",
                border: "none",
                borderBottom: tab === t ? "2px solid #818cf8" : "2px solid transparent",
                color: tab === t ? "#c7d2fe" : "#64748b",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: 600,
                textTransform: "capitalize",
                fontFamily: "'Space Grotesk', sans-serif",
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "20px 16px 40px" }}>
        {/* DASHBOARD */}
        {tab === "dashboard" && (
          <Dashboard
            data={data}
            totalHoursLogged={totalHoursLogged}
            pctComplete={pctComplete}
            currentWeek={currentWeek}
            onLogStudy={() => setLogModal(true)}
            onLogSimulado={() => setSimModal(true)}
          />
        )}

        {/* DISCIPLINAS */}
        {tab === "disciplinas" && <Disciplinas data={data} />}

        {/* LEGISLAÇÃO */}
        {tab === "legislação" && <Legislacao data={data} save={save} />}

        {/* SIMULADOS */}
        {tab === "simulados" && <Simulados data={data} onLogSimulado={() => setSimModal(true)} />}
      </div>

      {/* MODALS */}
      {logModal && <LogModal data={data} save={save} onClose={() => setLogModal(false)} />}
      {simModal && <SimModal data={data} save={save} onClose={() => setSimModal(false)} />}
    </div>
  );
}

/* ─── DASHBOARD ─── */
function Dashboard({
  data,
  totalHoursLogged,
  pctComplete,
  currentWeek,
  onLogStudy,
  onLogSimulado,
}: {
  data: StudyData;
  totalHoursLogged: number;
  pctComplete: number;
  currentWeek: number;
  onLogStudy: () => void;
  onLogSimulado: () => void;
}) {
  return (
    <div>
      {/* KPIs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 12,
          marginBottom: 24,
        }}
      >
        {[
          {
            label: "Horas totais",
            value: totalHoursLogged.toFixed(1),
            sub: `de 900h (${pctComplete}%)`,
            accent: "#818cf8",
          },
          {
            label: "Questões",
            value: data.questions_resolved,
            sub: "resolvidas",
            accent: "#34d399",
          },
          {
            label: "Flashcards",
            value: data.flashcards_created,
            sub: "criados",
            accent: "#fbbf24",
          },
          {
            label: "Simulados",
            value: data.simulados.length,
            sub:
              data.simulados.length > 0
                ? `média: ${(data.simulados.reduce((a, b) => a + b.score, 0) / data.simulados.length).toFixed(0)}/100`
                : "nenhum ainda",
            accent: "#f472b6",
          },
        ].map((kpi, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: "18px 16px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 3,
                height: "100%",
                background: kpi.accent,
              }}
            />
            <div
              style={{
                fontSize: 11,
                color: "#94a3b8",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {kpi.label}
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: kpi.accent,
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.1,
                marginTop: 4,
              }}
            >
              {kpi.value}
            </div>
            <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* PROGRESS BAR */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600 }}>Progresso geral</span>
          <span
            style={{
              fontSize: 12,
              color: "#94a3b8",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {totalHoursLogged.toFixed(0)}h / 900h
          </span>
        </div>
        <div
          style={{
            height: 8,
            background: "rgba(255,255,255,0.06)",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pctComplete}%`,
              background: "linear-gradient(90deg, #818cf8, #c084fc)",
              borderRadius: 4,
              transition: "width 0.5s",
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
          {PLAN.phases.map((p) => {
            const isCurrent = currentWeek >= p.weeks[0] && currentWeek <= p.weeks[1];
            return (
              <div
                key={p.id}
                style={{
                  fontSize: 10,
                  color: isCurrent ? p.color : "#475569",
                  fontWeight: isCurrent ? 700 : 400,
                  fontFamily: "'JetBrains Mono', monospace",
                  textAlign: "center",
                  flex: p.weeks[1] - p.weeks[0] + 1,
                }}
              >
                {p.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* BUTTONS */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button
          onClick={onLogStudy}
          style={{
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            border: "none",
            borderRadius: 10,
            padding: "12px 24px",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "'Space Grotesk', sans-serif",
            boxShadow: "0 4px 15px rgba(79,70,229,0.3)",
          }}
        >
          + Registrar estudo
        </button>
        <button
          onClick={onLogSimulado}
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "12px 24px",
            color: "#c7d2fe",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          + Registrar simulado
        </button>
      </div>

      {/* MILESTONES */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <h3
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 14,
            color: "#c7d2fe",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Marcos
        </h3>
        {PLAN.milestones.map((m, i) => {
          const isPast = new Date(m.date) < new Date();
          const phaseObj = PLAN.phases.find((p) => p.id === m.phase);
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "10px 0",
                borderBottom:
                  i < PLAN.milestones.length - 1
                    ? "1px solid rgba(255,255,255,0.04)"
                    : "none",
                opacity: isPast ? 0.5 : 1,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: isPast ? "#475569" : phaseObj?.color || "#818cf8",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{m.label}</div>
                <div
                  style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {m.date}
                </div>
              </div>
              {isPast && <span style={{ fontSize: 10, color: "#475569" }}>&#10003;</span>}
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
          <div
            key={d.id}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12,
              padding: "16px 20px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 4,
                height: "100%",
                background: d.color,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 8,
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 15, fontWeight: 600 }}>{d.name}</span>
                  <span
                    style={{
                      fontSize: 9,
                      padding: "2px 6px",
                      borderRadius: 4,
                      background:
                        d.nucleus === "A"
                          ? "rgba(37,99,235,0.2)"
                          : d.nucleus === "B"
                            ? "rgba(217,119,6,0.2)"
                            : d.nucleus === "C"
                              ? "rgba(124,58,237,0.2)"
                              : "rgba(148,163,184,0.2)",
                      color:
                        d.nucleus === "A"
                          ? "#60a5fa"
                          : d.nucleus === "B"
                            ? "#fbbf24"
                            : d.nucleus === "C"
                              ? "#c084fc"
                              : "#94a3b8",
                      fontWeight: 700,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    N&Uacute;CLEO {d.nucleus}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: "#64748b",
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {d.questions}q &middot; {d.pct}%
                  </span>
                </div>
                <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{d.method}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: d.color,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {logged.toFixed(1)}h
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#64748b",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  de {d.targetHours}h
                </div>
              </div>
            </div>
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: d.color,
                  borderRadius: 2,
                  transition: "width 0.3s",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ─── LEGISLAÇÃO ─── */
function Legislacao({ data, save }: { data: StudyData; save: (d: StudyData) => Promise<void> }) {
  return (
    <div>
      {[1, 2, 3].map((priority) => (
        <div key={priority} style={{ marginBottom: 24 }}>
          <h3
            style={{
              fontSize: 13,
              fontWeight: 700,
              color:
                priority === 1 ? "#ef4444" : priority === 2 ? "#f59e0b" : "#64748b",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: 10,
            }}
          >
            Prioridade {priority}{" "}
            {priority === 1
              ? "— Leitura integral obrigatória"
              : priority === 2
                ? "— Leitura dirigida"
                : "— Artigos específicos"}
          </h3>
          <div style={{ display: "grid", gap: 6 }}>
            {PLAN.legislation
              .filter((l) => l.priority === priority)
              .map((law) => {
                const progress = data.legislation_progress[law.id] || 0;
                return (
                  <div
                    key={law.id}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 10,
                      padding: "12px 16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        flex: 1,
                        opacity: progress >= law.reads ? 0.5 : 1,
                      }}
                    >
                      {progress >= law.reads ? "✅ " : ""}
                      {law.name}
                    </span>
                    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                      {Array.from({ length: law.reads }).map((_, i) => (
                        <button
                          key={i}
                          onClick={async () => {
                            const newProgress = i + 1 <= progress ? i : i + 1;
                            const newData = {
                              ...data,
                              legislation_progress: {
                                ...data.legislation_progress,
                                [law.id]: newProgress,
                              },
                            };
                            await save(newData);
                          }}
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: 6,
                            border: "1px solid rgba(255,255,255,0.15)",
                            background:
                              i < progress
                                ? priority === 1
                                  ? "#2563eb"
                                  : priority === 2
                                    ? "#d97706"
                                    : "#475569"
                                : "transparent",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            color: i < progress ? "white" : "#475569",
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {i + 1}
                        </button>
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
function Simulados({
  data,
  onLogSimulado,
}: {
  data: StudyData;
  onLogSimulado: () => void;
}) {
  if (data.simulados.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 60, color: "#475569" }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>&#128221;</div>
        <div>Nenhum simulado registrado ainda.</div>
        <button
          onClick={onLogSimulado}
          style={{
            marginTop: 16,
            background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
            border: "none",
            borderRadius: 10,
            padding: "10px 20px",
            color: "white",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Registrar primeiro simulado
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 12,
          padding: 20,
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 11,
            color: "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          M&eacute;dia dos simulados
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#818cf8",
          }}
        >
          {(
            data.simulados.reduce((a, b) => a + b.score, 0) / data.simulados.length
          ).toFixed(0)}
          <span style={{ fontSize: 20, color: "#475569" }}>/100</span>
        </div>
        <div
          style={{
            fontSize: 12,
            color:
              data.simulados[data.simulados.length - 1]?.score >= 50
                ? "#34d399"
                : "#f87171",
          }}
        >
          Meta PPP: 50 &middot; Meta seguran&ccedil;a: 60
        </div>
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {[...data.simulados].reverse().map((s, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 10,
              padding: "14px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>
                {s.name || `Simulado ${data.simulados.length - i}`}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#64748b",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {s.date}
              </div>
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                color:
                  s.score >= 60 ? "#34d399" : s.score >= 50 ? "#fbbf24" : "#f87171",
              }}
            >
              {s.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── LOG MODAL ─── */
function LogModal({
  data,
  save,
  onClose,
}: {
  data: StudyData;
  save: (d: StudyData) => Promise<void>;
  onClose: () => void;
}) {
  const [disc, setDisc] = useState("notarial");
  const [hours, setHours] = useState("");
  const [questions, setQuestions] = useState("");
  const [flashcards, setFlashcards] = useState("");

  const handleSave = async () => {
    const h = parseFloat(hours) || 0;
    const q = parseInt(questions) || 0;
    const f = parseInt(flashcards) || 0;
    const newData: StudyData = {
      ...data,
      discipline_hours: {
        ...data.discipline_hours,
        [disc]: (data.discipline_hours[disc] || 0) + h,
      },
      questions_resolved: data.questions_resolved + q,
      flashcards_created: data.flashcards_created + f,
    };
    await save(newData);
    onClose();
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 10px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 8,
    color: "#e2e8f0",
    fontSize: 16,
    fontWeight: 600 as const,
    textAlign: "center" as const,
    outline: "none",
    fontFamily: "'JetBrains Mono', monospace",
    boxSizing: "border-box" as const,
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        padding: 16,
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#1e1b4b",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 16,
          padding: 28,
          width: "100%",
          maxWidth: 400,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 20,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Registrar estudo
        </h3>

        <label
          style={{
            fontSize: 12,
            color: "#94a3b8",
            fontWeight: 600,
            display: "block",
            marginBottom: 4,
          }}
        >
          Disciplina
        </label>
        <select
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: 14,
            marginBottom: 16,
            outline: "none",
          }}
        >
          {PLAN.disciplines.map((d) => (
            <option key={d.id} value={d.id} style={{ background: "#1e1b4b" }}>
              {d.name}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 10,
            marginBottom: 20,
          }}
        >
          {[
            { label: "Horas", value: hours, set: setHours, placeholder: "0.0", step: "0.5" },
            { label: "Questões", value: questions, set: setQuestions, placeholder: "0", step: "1" },
            { label: "Flashcards", value: flashcards, set: setFlashcards, placeholder: "0", step: "1" },
          ].map((field, i) => (
            <div key={i}>
              <label
                style={{
                  fontSize: 11,
                  color: "#94a3b8",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: 4,
                }}
              >
                {field.label}
              </label>
              <input
                type="number"
                step={field.step}
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                placeholder={field.placeholder}
                style={inputStyle}
              />
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            style={{
              flex: 1,
              padding: "10px",
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── SIM MODAL ─── */
function SimModal({
  data,
  save,
  onClose,
}: {
  data: StudyData;
  save: (d: StudyData) => Promise<void>;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSave = async () => {
    const s = parseInt(score) || 0;
    if (s < 0 || s > 100) return;
    const newData: StudyData = {
      ...data,
      simulados: [
        ...data.simulados,
        {
          name: name || `Simulado ${data.simulados.length + 1}`,
          score: s,
          date: new Date().toISOString().slice(0, 10),
        },
      ],
    };
    await save(newData);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        padding: 16,
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#1e1b4b",
          border: "1px solid rgba(99,102,241,0.3)",
          borderRadius: 16,
          padding: 28,
          width: "100%",
          maxWidth: 380,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 20,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Registrar simulado
        </h3>

        <label
          style={{
            fontSize: 12,
            color: "#94a3b8",
            fontWeight: 600,
            display: "block",
            marginBottom: 4,
          }}
        >
          Nome (opcional)
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: ENAC 2 - 2ª tentativa"
          style={{
            width: "100%",
            padding: "10px 12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: 14,
            marginBottom: 16,
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        <label
          style={{
            fontSize: 12,
            color: "#94a3b8",
            fontWeight: 600,
            display: "block",
            marginBottom: 4,
          }}
        >
          Acertos (0&ndash;100)
        </label>
        <input
          type="number"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="0"
          style={{
            width: "100%",
            padding: "14px 12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 8,
            color: "#e2e8f0",
            fontSize: 28,
            fontWeight: 700,
            textAlign: "center",
            outline: "none",
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: 20,
            boxSizing: "border-box",
          }}
        />

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            style={{
              flex: 1,
              padding: "10px",
              background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

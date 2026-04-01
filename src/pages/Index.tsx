import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const teamMembers = [
  {
    name: "Александра Морозова",
    role: "Основатель & CEO",
    quote: "Мы строим не продукты — мы строим доверие.",
    emoji: "✦",
  },
  {
    name: "Дмитрий Волков",
    role: "Технический директор",
    quote: "Лучший код — тот, который не замечают.",
    emoji: "◈",
  },
  {
    name: "Елена Соколова",
    role: "Директор по дизайну",
    quote: "Красота — это точность в каждой детали.",
    emoji: "◇",
  },
];

const values = [
  {
    icon: "Gem",
    title: "Качество",
    desc: "Каждый проект — это произведение, а не продукт. Мы не идём на компромиссы.",
  },
  {
    icon: "Eye",
    title: "Прозрачность",
    desc: "Открытое общение на каждом этапе. Вы всегда знаете, что происходит.",
  },
  {
    icon: "Zap",
    title: "Скорость",
    desc: "Быстрые решения без потери глубины. Время — ваш главный ресурс.",
  },
  {
    icon: "Heart",
    title: "Забота",
    desc: "Ваш успех — наша миссия. Мы вкладываем душу в каждый проект.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const Index = () => {
  const hero = useInView(0.1);
  const mission = useInView(0.2);
  const team = useInView(0.1);
  const valuesSection = useInView(0.1);
  const stats = useInView(0.2);
  const cta = useInView(0.2);

  return (
    <div
      style={{
        background: "var(--bg)",
        color: "var(--text)",
        fontFamily: "'Golos Text', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        :root {
          --bg: #0a0a0a;
          --bg2: #111111;
          --bg3: #1a1a1a;
          --text: #f0ece3;
          --muted: #7a7672;
          --gold: #c9a84c;
          --gold2: #e8c96a;
          --border: rgba(201,168,76,0.15);
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .fade-up.d1 { transition-delay: 0.1s; }
        .fade-up.d2 { transition-delay: 0.25s; }
        .fade-up.d3 { transition-delay: 0.4s; }
        .fade-up.d4 { transition-delay: 0.55s; }

        .gold-line {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: var(--gold);
          vertical-align: middle;
          margin-right: 12px;
        }

        .team-card {
          background: var(--bg2);
          border: 1px solid var(--border);
          padding: 40px 32px;
          position: relative;
          transition: border-color 0.3s, transform 0.3s;
          cursor: default;
        }
        .team-card:hover {
          border-color: var(--gold);
          transform: translateY(-4px);
        }
        .team-card .symbol {
          font-size: 28px;
          color: var(--gold);
          display: block;
          margin-bottom: 20px;
          line-height: 1;
        }

        .value-card {
          padding: 32px 28px;
          border-top: 1px solid var(--border);
          transition: background 0.3s;
        }
        .value-card:hover {
          background: var(--bg3);
        }

        .stat-number {
          font-family: 'Cormorant', serif;
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 300;
          color: var(--gold);
          line-height: 1;
          display: block;
        }

        .nav-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          display: inline-block;
          margin: 0 6px;
        }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          font-family: 'Golos Text', sans-serif;
          font-weight: 500;
        }

        .noise-bg::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
          opacity: 0.4;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--gold);
          color: #0a0a0a;
          padding: 14px 32px;
          font-family: 'Golos Text', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .btn-primary:hover {
          background: var(--gold2);
          transform: translateY(-2px);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--text);
          padding: 14px 32px;
          font-family: 'Golos Text', sans-serif;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .btn-outline:hover {
          border-color: var(--gold);
          transform: translateY(-2px);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border), transparent);
        }
      `}</style>

      {/* Background noise */}
      <div className="noise-bg" />

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(10,10,10,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "var(--gold)", fontSize: 20 }}>◈</span>
          <span style={{ fontFamily: "'Cormorant', serif", fontSize: 20, fontWeight: 400, letterSpacing: "0.08em" }}>
            КОМПАНИЯ
          </span>
        </div>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {["Главная", "О нас", "Услуги", "Контакты"].map((item, i) => (
            <a key={i} href="#" style={{
              color: item === "О нас" ? "var(--gold)" : "var(--muted)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textDecoration: "none",
              fontFamily: "'Golos Text', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = item === "О нас" ? "var(--gold)" : "var(--muted)")}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div className="gradient-orb" style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          top: "10%",
          right: "-10%",
        }} />
        <div className="gradient-orb" style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          bottom: "5%",
          left: "5%",
        }} />

        <div ref={hero.ref} style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
          <div className={`fade-up ${hero.inView ? "visible" : ""}`}>
            <p className="section-label" style={{ marginBottom: 24 }}>
              <span className="gold-line" />
              О нас
            </p>
          </div>

          <h1
            className={`fade-up d1 ${hero.inView ? "visible" : ""}`}
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(52px, 9vw, 120px)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: 32,
              maxWidth: 900,
            }}
          >
            Мы создаём
            <br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>цифровое будущее</em>
            <br />
            с душой
          </h1>

          <p
            className={`fade-up d2 ${hero.inView ? "visible" : ""}`}
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: 520,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Команда профессионалов, объединённых общей целью —
            создавать решения, которые меняют жизнь людей к лучшему.
          </p>

          <div className={`fade-up d3 ${hero.inView ? "visible" : ""}`} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#" className="btn-primary">
              Связаться с нами
              <Icon name="ArrowRight" size={16} />
            </a>
            <a href="#" className="btn-outline">
              Наши работы
            </a>
          </div>

          {/* Scroll indicator */}
          <div
            className={`fade-up d4 ${hero.inView ? "visible" : ""}`}
            style={{
              position: "absolute",
              bottom: -40,
              right: 0,
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "var(--muted)",
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span>Прокрутите вниз</span>
            <div style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, var(--gold), transparent)",
            }} />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* MISSION */}
      <section style={{ padding: "120px 48px", position: "relative" }}>
        <div ref={mission.ref} style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div className={`fade-up ${mission.inView ? "visible" : ""}`}>
            <p className="section-label" style={{ marginBottom: 24 }}>
              <span className="gold-line" />
              Наша миссия
            </p>
            <h2 style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: 0,
            }}>
              Технологии, которые{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>вдохновляют</em>
            </h2>
          </div>
          <div className={`fade-up d1 ${mission.inView ? "visible" : ""}`}>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--muted)", marginBottom: 24, fontWeight: 300 }}>
              Мы верим, что технологии должны служить людям, а не наоборот. 
              С 2018 года мы помогаем бизнесам любого масштаба находить своё место 
              в цифровом пространстве.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--muted)", fontWeight: 300 }}>
              Каждый проект — это уникальная история. Мы слушаем, думаем, 
              создаём и не останавливаемся, пока результат не превзойдёт ожидания.
            </p>

            <div style={{
              marginTop: 40,
              paddingLeft: 24,
              borderLeft: "2px solid var(--gold)",
            }}>
              <p style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 22,
                fontStyle: "italic",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "var(--text)",
              }}>
                «Великие вещи никогда не создаются в спешке. Они создаются с намерением.»
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* STATS */}
      <section style={{ padding: "80px 48px", background: "var(--bg2)" }}>
        <div ref={stats.ref} style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
        }}>
          {[
            { num: "6+", label: "Лет на рынке" },
            { num: "200+", label: "Проектов сдано" },
            { num: "98%", label: "Довольных клиентов" },
            { num: "24/7", label: "Поддержка" },
          ].map((s, i) => (
            <div
              key={i}
              className={`fade-up ${stats.inView ? "visible" : ""}`}
              style={{
                padding: "48px 40px",
                transitionDelay: `${i * 0.1}s`,
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <span className="stat-number">{s.num}</span>
              <span style={{ fontSize: 13, color: "var(--muted)", marginTop: 12, display: "block", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* TEAM */}
      <section style={{ padding: "120px 48px" }}>
        <div ref={team.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className={`fade-up ${team.inView ? "visible" : ""}`} style={{ marginBottom: 64 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>
              <span className="gold-line" />
              Команда
            </p>
            <h2 style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
              maxWidth: 500,
            }}>
              Люди, которые делают это{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>возможным</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className={`team-card fade-up ${team.inView ? "visible" : ""}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <span className="symbol">{member.emoji}</span>

                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.05) 100%)`,
                  border: "1px solid var(--border)",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  color: "var(--gold)",
                  fontFamily: "'Cormorant', serif",
                  fontWeight: 600,
                }}>
                  {member.name[0]}
                </div>

                <h3 style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  marginBottom: 4,
                  letterSpacing: "0.01em",
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: 12,
                  color: "var(--gold)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 20,
                  fontWeight: 500,
                }}>
                  {member.role}
                </p>
                <p style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.65,
                  fontStyle: "italic",
                  fontFamily: "'Cormorant', serif",
                  fontSize: 18,
                  fontWeight: 300,
                }}>
                  «{member.quote}»
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* VALUES */}
      <section style={{ padding: "120px 48px", background: "var(--bg2)" }}>
        <div ref={valuesSection.ref} style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className={`fade-up ${valuesSection.inView ? "visible" : ""}`} style={{ marginBottom: 64 }}>
            <p className="section-label" style={{ marginBottom: 16 }}>
              <span className="gold-line" />
              Ценности
            </p>
            <h2 style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
            }}>
              Принципы, которые{" "}
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>нас определяют</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
            {values.map((v, i) => (
              <div
                key={i}
                className={`value-card fade-up ${valuesSection.inView ? "visible" : ""}`}
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  borderBottom: i < 2 ? "1px solid var(--border)" : "none",
                  paddingLeft: i % 2 === 0 ? 0 : 48,
                  borderLeft: i % 2 !== 0 ? "1px solid var(--border)" : "none",
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  color: "var(--gold)",
                }}>
                  <Icon name={v.icon} fallback="Star" size={20} />
                </div>
                <h3 style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  marginBottom: 12,
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, fontWeight: 300 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section style={{ padding: "120px 48px", position: "relative", overflow: "hidden" }}>
        <div className="gradient-orb" style={{
          width: 800,
          height: 800,
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }} />

        <div ref={cta.ref} style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}>
          <p className={`section-label fade-up ${cta.inView ? "visible" : ""}`} style={{ marginBottom: 24 }}>
            <span className="gold-line" />
            Начнём?
          </p>
          <h2
            className={`fade-up d1 ${cta.inView ? "visible" : ""}`}
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Готовы создать что-то{" "}
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>выдающееся</em>{" "}
            вместе?
          </h2>
          <p
            className={`fade-up d2 ${cta.inView ? "visible" : ""}`}
            style={{
              fontSize: 17,
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: 48,
              fontWeight: 300,
            }}
          >
            Расскажите нам о своей идее, и мы превратим её в реальность.
          </p>
          <div className={`fade-up d3 ${cta.inView ? "visible" : ""}`} style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="btn-primary">
              Написать нам
              <Icon name="Mail" size={16} />
            </a>
            <a href="#" className="btn-outline">
              Позвонить
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 48px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--bg2)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ color: "var(--gold)", fontSize: 16 }}>◈</span>
          <span style={{ fontFamily: "'Cormorant', serif", fontSize: 16, letterSpacing: "0.08em", color: "var(--muted)" }}>
            КОМПАНИЯ
          </span>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)", letterSpacing: "0.05em" }}>
          © 2024 Все права защищены
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {["ВКонтакте", "Telegram", "Instagram"].map((s, i) => (
            <a key={i} href="#" style={{
              fontSize: 13,
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Index;
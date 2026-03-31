export default function ContactSection({ isMobile }) {
  return (
    <section id="contacto">
      <div className="container">
        <div className="panel">
          <h2>Contacto</h2>

          <form style={{ marginTop: 12, display: "grid", gap: 10 }}>
            <div
              className="formGrid"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: 10,
              }}
            >
              <div style={{ display: "grid", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 950, color: "rgba(238,233,255,.75)" }}>
                  Nombre
                </label>
                <input
                  name="name"
                  required
                  placeholder="Tu nombre"
                  style={{
                    borderRadius: 14,
                    border: "1px solid var(--stroke)",
                    background: "rgba(255,255,255,.04)",
                    color: "var(--text)",
                    padding: 10,
                    outline: "none",
                  }}
                />
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 950, color: "rgba(238,233,255,.75)" }}>
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  style={{
                    borderRadius: 14,
                    border: "1px solid var(--stroke)",
                    background: "rgba(255,255,255,.04)",
                    color: "var(--text)",
                    padding: 10,
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div style={{ display: "grid", gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 950, color: "rgba(238,233,255,.75)" }}>
                Mensaje
              </label>
              <textarea
                name="message"
                required
                placeholder="Tu mensaje..."
                style={{
                  minHeight: 120,
                  resize: "vertical",
                  borderRadius: 14,
                  border: "1px solid var(--stroke)",
                  background: "rgba(255,255,255,.04)",
                  color: "var(--text)",
                  padding: 10,
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button className="btn" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
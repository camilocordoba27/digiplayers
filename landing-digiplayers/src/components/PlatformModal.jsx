export default function PlatformModal({ platform, onClose }) {
  if (!platform) return null;

  return (
    <div
      className="backdrop open"
      role="dialog"
      aria-modal="true"
      aria-label="Detalles"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modalHead">
          <b>Detalles — {platform.name}</b>
          <button className="close" type="button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="modalBody">
          <div className="modalGrid">
            <div className="panel" style={{ padding: 12 }}>
              <h2 style={{ fontSize: 14, margin: 0 }}>Highlights</h2>
              <div style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.6, fontSize: 14 }}>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {platform.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="panel" style={{ padding: 12 }}>
              <h2 style={{ fontSize: 14, margin: 0 }}>Métodos de pago</h2>
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                {platform.payments.map((payment) => (
                  <span className="chip" key={payment}>
                    {payment}
                  </span>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <div className="bonus" style={{ textAlign: "left" }}>
                  {platform.bonus}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

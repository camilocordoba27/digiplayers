export default function AboutSection({ platformCount, onGoContact, onGoPlatforms }) {
  return (
    <section id="quienes">
      <div className="container">
        <div className="grid">
          <div className="panel">
            <h2>Quiénes somos</h2>
            <p style={{ marginTop: 8 }}>
              Somos un equipo de afiliación enfocado en performance: adquisición, optimización y
              crecimiento sostenido para cada partner.
            </p>
            <ul>
              <li>Gestión de campañas y creatividades.</li>
              <li>Tracking y reporting para decisiones rápidas.</li>
              <li>Escalado por GEO y canales (SEO / Social / Performance).</li>
            </ul>

            <div className="stats">
              <div className="stat">
                <b>{platformCount}</b>
                <span>plataformas</span>
              </div>
              <div className="stat">
                <b>Optimización</b>
                <span>semanal</span>
              </div>
              <div className="stat">
                <b>Soporte</b>
                <span>partners</span>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2>Contacto rápido</h2>
            <p style={{ marginTop: 8 }}>
              Escribinos para acuerdos CPA/RevShare, materiales y condiciones por GEO.
            </p>
            <div
              style={{
                display: "grid",
                gap: 8,
                marginTop: 10,
                color: "rgba(238,233,255,.86)",
                fontSize: 13,
              }}
            >
              <div>
                <b>Email:</b> contacto@digiplayers.com
              </div>
              <div>
                <b>Horario:</b> Lun a Vie 10–18 (ART)
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <button className="btn" type="button" onClick={onGoContact}>
                Ir a formulario
              </button>
              <button className="btn secondary" type="button" onClick={onGoPlatforms}>
                Ver plataformas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Hero({ onGoPlatforms, onGoWho }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-card">
          <h1>
            Plataformas de apuestas <span style={{ color: "var(--brand3)" }}>con las que trabajamos</span>
          </h1>
          <p>
            Landing simple estilo “ranking”: filtros por licencia, tarjetas con puntos fuertes,
            métodos de pago y llamadas a la acción. Ideal para mostrar partners (Bplay, Betsson,
            Codere, Jokergol, Epicbet).
          </p>
          <div className="hero-actions">
            <button className="btn" type="button" onClick={onGoPlatforms}>
              Ver plataformas
            </button>
            <button className="btn secondary" type="button" onClick={onGoWho}>
              Quiénes somos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

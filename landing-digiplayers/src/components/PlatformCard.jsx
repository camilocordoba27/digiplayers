import { stars } from "../utils/Platforms.js";

export default function PlatformCard({ platform, onOpenDetails }) {
  return (
    <article className="cardx">
      <div className="card-top">
        <div className="leftbox">
          <div className="logoBox">
            <img src={platform.logo} alt={platform.name} loading="lazy" draggable="false" />
          </div>

          <div className="meta">
            <div className="nameRow">
              <h3>{platform.name}</h3>
              {platform.licensed ? (
                <span className="badge ok">✅ Licenciada</span>
              ) : (
                <span className="badge bad">⚠️ No licenciada</span>
              )}
            </div>

            <div className="rating">
              <span className="stars" aria-hidden="true">
                {stars(platform.rating)}
              </span>
              <span>{platform.rating.toFixed(1)}/5</span>
            </div>

            <div className="highlights">
              <ul>
                {platform.highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rightbox">
          <div className="ctaRow">
            <button className="btn secondary" type="button" onClick={() => onOpenDetails(platform)}>
              Detalles
            </button>
            <a className="btn" href={platform.openUrl} target="_blank" rel="noopener noreferrer">
              Registrarse
            </a>
          </div>
        </div>
      </div>

      <div className="payRow">
        <div className="payTitle">Métodos de pago</div>
        <div className="chips">
          {platform.payments.slice(0, 6).map((payment) => (
            <span className="chip" key={payment}>
              {payment}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

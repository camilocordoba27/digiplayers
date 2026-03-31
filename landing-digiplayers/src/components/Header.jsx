export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <a className="brand" href="#home">
            <span>
              <img src="img/Digiplayers/Logo vector-06.png" width="160" alt="Digiplayers" />
            </span>
          </a>

          <nav className="nav-links">
            <a href="#quienes">QUIÉNES SOMOS</a>
            <a href="#plataformas">PLATAFORMAS</a>
            <a href="#contacto">CONTACTO</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

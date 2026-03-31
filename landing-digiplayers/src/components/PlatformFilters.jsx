export default function PlatformFilters({ filter, setFilter, query, setQuery }) {
  return (
    <div className="tools">
      <div className="tabs" role="tablist" aria-label="Filtros">
        <button
          className={`tab ${filter === "all" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("all")}
        >
          Todas
        </button>
        <button
          className={`tab ${filter === "licensed" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("licensed")}
        >
          Licenciadas
        </button>
        <button
          className={`tab ${filter === "unlicensed" ? "active" : ""}`}
          type="button"
          onClick={() => setFilter("unlicensed")}
        >
          No licenciadas
        </button>
      </div>

      <div className="search" title="Buscar plataforma">
        <span aria-hidden="true">🔎</span>
        <input
          type="search"
          placeholder="Buscar (nombre / pagos / highlights)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}
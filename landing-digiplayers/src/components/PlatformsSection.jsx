import PlatformFilters from "./PlatformFilters";
import PlatformCard from "./PlatformCard";

export default function PlatformsSection({
  filter,
  setFilter,
  query,
  setQuery,
  platforms,
  onOpenDetails,
}) {
  return (
    <section id="plataformas">
      <div className="container">
        <PlatformFilters
          filter={filter}
          setFilter={setFilter}
          query={query}
          setQuery={setQuery}
        />

        <div className="list">
          {platforms.length > 0 ? (
            platforms.map((platform) => (
              <PlatformCard
                key={platform.id}
                platform={platform}
                onOpenDetails={onOpenDetails}
              />
            ))
          ) : (
            <div className="panel">
              <h2>No se encontraron resultados</h2>
              <p style={{ marginTop: 8 }}>Probá cambiar el filtro o la búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

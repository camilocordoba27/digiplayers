import { useEffect, useMemo, useState } from "react";
import "./style.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutSection from "./components/AboutSection.jsx";
import PlatformsSection from "./components/PlatformsSection.jsx";
import ConventionsSection from "./components/ConventionsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import PlatformModal from "./components/PlatformModal.jsx";
import { platforms } from "./data/platforms.js";
import { conventions } from "./data/conventions.js";
//asdasd
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 700);

    const filteredPlatforms = useMemo(() => {
    const q = query.trim().toLowerCase();

    return platforms.filter((platform) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "licensed" && platform.licensed) ||
        (filter === "unlicensed" && !platform.licensed);

      if (!matchesFilter) return false;
      if (!q) return true;

      const haystack = [
        platform.name,
        platform.bonus,
        ...(platform.highlights || []),
        ...(platform.payments || []),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [filter, query]);
  
   useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedPlatform(null);
    };

     document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

   useEffect(() => {
    document.body.style.overflow = selectedPlatform ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPlatform]);

   return (
    <>
      <Header />

      <main id="home">
        <Hero
          onGoPlatforms={() => scrollToId("plataformas")}
          onGoWho={() => scrollToId("quienes")}
        />

        <AboutSection
          platformCount={platforms.length}
          onGoContact={() => scrollToId("contacto")}
          onGoPlatforms={() => scrollToId("plataformas")}
        />

        <PlatformsSection
          filter={filter}
          setFilter={setFilter}
          query={query}
          setQuery={setQuery}
          platforms={filteredPlatforms}
          onOpenDetails={setSelectedPlatform}
        />

        <ConventionsSection conventions={conventions} />
        <ContactSection isMobile={isMobile} />
        <Footer />
      </main>

      <PlatformModal platform={selectedPlatform} onClose={() => setSelectedPlatform(null)} />
    </>
  );
}
import { useEffect, useRef } from "react";

export default function ConventionsSection({ conventions }) {
    const trackRef = useRef(null);
    const frameRef = useRef(null);
    const xRef = useRef(0);
    const speedRef = useRef(0.6);
    const setWidthRef = useRef(0);
    const pausedRef = useRef(false);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const computeSetWidth = () => {
            const children = Array.from(track.children);
            const half = Math.floor(children.length / 2);
            if (half === 0) return 0;

            const style = getComputedStyle(track);
            const gap = parseFloat(style.columnGap || style.gap || "16") || 16;

            let width = 0;
            for (let i = 0; i < half; i += 1) {
                width += children[i].getBoundingClientRect().width;
                if (i < half - 1) width += gap;
            }

            return width;
        };

        const stop = () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        };

        const tick = () => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            if (pausedRef.current) return;

            xRef.current -= speedRef.current;
            if (setWidthRef.current > 0 && Math.abs(xRef.current) >= setWidthRef.current) {
                xRef.current += setWidthRef.current;
            }

            track.style.transform = `translate3d(${xRef.current}px,0,0)`;
            frameRef.current = requestAnimationFrame(tick);
        };

        const start = () => {
            stop();
            setWidthRef.current = computeSetWidth();
            frameRef.current = requestAnimationFrame(tick);
        };

        const resetAndStart = () => {
            xRef.current = 0;
            track.style.transform = "translate3d(0,0,0)";
            start();
        };

        const handlePause = () => {
            pausedRef.current = true;
            stop();
        };

        const handleResume = () => {
            pausedRef.current = false;
            start();
        };

        const images = Array.from(track.querySelectorAll("img"));
        let loaded = 0;

        const checkStart = () => {
            loaded += 1;
            if (loaded >= images.length) resetAndStart();
        };

        if (images.length === 0) {
            resetAndStart();
        } else {
            images.forEach((img) => {
                if (img.complete) {
                    checkStart();
                } else {
                    img.addEventListener("load", checkStart, { once: true });
                    img.addEventListener("error", checkStart, { once: true });
                }
            });
        }

        const carousel = track.closest(".conv-carousel");
        carousel?.addEventListener("mouseenter", handlePause);
        carousel?.addEventListener("mouseleave", handleResume);
        carousel?.addEventListener("touchstart", handlePause, { passive: true });
        carousel?.addEventListener("touchend", handleResume, { passive: true });
        window.addEventListener("resize", resetAndStart);

        return () => {
            stop();
            carousel?.removeEventListener("mouseenter", handlePause);
            carousel?.removeEventListener("mouseleave", handleResume);
            carousel?.removeEventListener("touchstart", handlePause);
            carousel?.removeEventListener("touchend", handleResume);
            window.removeEventListener("resize", resetAndStart);
        };
    }, []);

    const duplicatedConventions = [...conventions, ...conventions];

    return (
        <section id="convenciones" className="conv-section">
            <div className="container">
                <div className="conv-head">
                    <h2>Convenciones y eventos</h2>
                    <p>Algunas de las convenciones a las que asistimos.</p>
                </div>

                <div className="conv-carousel" aria-label="Carrusel de convenciones">
                    <div className="conv-track" ref={trackRef}>
                        {duplicatedConventions.map((item, index) => (
                            <div className="conv-item" title={item.name} aria-label={item.name} key={`${item.name}-${index}`}>
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width="240"
                                    height="76"
                                    loading="lazy"
                                    draggable="false"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

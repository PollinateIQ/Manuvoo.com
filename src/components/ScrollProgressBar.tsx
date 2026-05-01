import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MANUVOO_ORANGE = "#f97316";
const MANUVOO_ORANGE_DARK = "#ea580c";
const MANUVOO_ORANGE_LIGHT = "#fb923c";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  const updateProgress = useCallback(() => {
    const documentElement = document.documentElement;
    const body = document.body;

    const scrollTop =
      window.scrollY ||
      window.pageYOffset ||
      documentElement.scrollTop ||
      body.scrollTop ||
      0;

    const scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight,
      documentElement.offsetHeight,
      body.offsetHeight,
      documentElement.clientHeight,
    );

    const viewportHeight = window.innerHeight || documentElement.clientHeight;
    const scrollableHeight = scrollHeight - viewportHeight;

    if (scrollableHeight <= 0) {
      setProgress(100);
      return;
    }

    const nextProgress = Math.min(
      100,
      Math.max(0, (scrollTop / scrollableHeight) * 100),
    );

    setProgress(nextProgress);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    const initialFrame = window.requestAnimationFrame(updateProgress);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    window.addEventListener("load", updateProgress);

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(updateProgress)
        : null;

    if (resizeObserver) {
      resizeObserver.observe(document.documentElement);
      resizeObserver.observe(document.body);
    }

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
      window.removeEventListener("load", updateProgress);
      resizeObserver?.disconnect();
    };
  }, [updateProgress]);

  // Recalculate when changing pages because each route has a different height.
  useEffect(() => {
    const resetFrame = window.requestAnimationFrame(() => setProgress(0));
    const frame = window.requestAnimationFrame(updateProgress);
    const shortTimer = window.setTimeout(updateProgress, 100);
    const imageTimer = window.setTimeout(updateProgress, 600);

    return () => {
      window.cancelAnimationFrame(resetFrame);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(shortTimer);
      window.clearTimeout(imageTimer);
    };
  }, [pathname, updateProgress]);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "4px",
        zIndex: 2147483647,
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "rgba(249, 115, 22, 0.16)",
        boxShadow: "0 1px 8px rgba(249, 115, 22, 0.25)",
        transform: "translateZ(0)",
      }}
    >
      <div
        className="scroll-progress-fill"
        style={{
          width: `${progress}%`,
          height: "100%",
          background: `linear-gradient(90deg, ${MANUVOO_ORANGE} 0%, ${MANUVOO_ORANGE_LIGHT} 50%, ${MANUVOO_ORANGE_DARK} 100%, ${MANUVOO_ORANGE} 140%)`,
          backgroundSize: "220% 100%",
          boxShadow:
            "0 0 10px rgba(249, 115, 22, 0.9), 0 0 3px rgba(249, 115, 22, 1)",
          transition: "width 220ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
    </div>
  );
}
